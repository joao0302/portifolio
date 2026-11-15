import {mkdir, rm, writeFile} from "node:fs/promises";
import {existsSync} from "node:fs";
import {spawn} from "node:child_process";
import path from "node:path";
import WebSocket from "ws";

const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const email = process.env.VOLTTY_CAPTURE_EMAIL;
const password = process.env.VOLTTY_CAPTURE_PASSWORD;
const baseUrl = process.env.VOLTTY_CAPTURE_URL || "https://voltty.com.br";
const outDir = path.resolve("public/projects/voltty");
const userDataDir = path.resolve(".tmp/voltty-capture-chrome");
const debugPort = 9231;

if (!email || !password) throw new Error("Defina VOLTTY_CAPTURE_EMAIL e VOLTTY_CAPTURE_PASSWORD.");
if (!existsSync(chromePath)) throw new Error(`Chrome nao encontrado em ${chromePath}`);

async function main() {
  await mkdir(outDir, {recursive: true});
  await rm(userDataDir, {recursive: true, force: true});
  await mkdir(userDataDir, {recursive: true});

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    "--headless=new",
    "--hide-scrollbars",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1440,1100",
    "about:blank",
  ], {stdio: "ignore"});

  try {
    await waitForChrome();
    const page = await createPage();
    await send(page, "Page.enable");
    await send(page, "Runtime.enable");
    await send(page, "Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 1100,
      deviceScaleFactor: 1,
      mobile: false,
    });

    await goto(page, `${baseUrl}/entrar`);
    await settle(page);
    await login(page);

    const pages = [
      ["cover.png", "/app/vendas"],
      ["vendas.png", "/app/vendas"],
      ["produtos.png", "/app/produtos"],
      ["balanco.png", "/app/balanco"],
      ["etiquetas.png", "/app/etiquetas"],
      ["clientes.png", "/app/clientes"],
      ["fidelizacao.png", "/app/cupons"],
    ];

    for (const [name, route] of pages) {
      await goto(page, `${baseUrl}${route}`);
      await settle(page);
      await screenshot(page, name);
    }
  } finally {
    chrome.kill("SIGTERM");
    await sleep(500);
    await rm(userDataDir, {recursive: true, force: true});
  }
}

async function login(page) {
  await evaluate(page, `
    (() => {
      const setValue = (el, value) => {
        const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value")?.set;
        setter?.call(el, value);
        el.dispatchEvent(new Event("input", {bubbles: true}));
        el.dispatchEvent(new Event("change", {bubbles: true}));
      };
      const emailInput = document.querySelector('input[type="email"], input[name="email"]');
      const passwordInput = document.querySelector('input[type="password"], input[name="password"]');
      if (!emailInput || !passwordInput) throw new Error("Campos de login nao encontrados.");
      setValue(emailInput, ${JSON.stringify(email)});
      setValue(passwordInput, ${JSON.stringify(password)});
      const form = passwordInput.closest("form") || document.querySelector("form");
      const button = form?.querySelector('button[type="submit"]') || [...document.querySelectorAll("button")].find((item) => /entrar|acessar|login/i.test(item.textContent || ""));
      if (!button) throw new Error("Botao de login nao encontrado.");
      button.click();
    })()
  `);
  await waitForUrl(page, (url) => !url.includes("/entrar"), 25000);
  await settle(page);
}

async function createPage() {
  const result = await fetch(`http://127.0.0.1:${debugPort}/json/new`, {method: "PUT"});
  const target = await result.json();
  return connect(target.webSocketDebuggerUrl);
}

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, {once: true});
    ws.addEventListener("error", reject, {once: true});
  });
  let id = 0;
  const callbacks = new Map();
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && callbacks.has(message.id)) {
      const {resolve, reject} = callbacks.get(message.id);
      callbacks.delete(message.id);
      message.error ? reject(new Error(message.error.message)) : resolve(message.result);
    }
  });
  return {send(method, params = {}) {
    const callId = ++id;
    ws.send(JSON.stringify({id: callId, method, params}));
    return new Promise((resolve, reject) => callbacks.set(callId, {resolve, reject}));
  }};
}

const send = (page, method, params) => page.send(method, params);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function goto(page, url) {
  await send(page, "Page.navigate", {url});
  await waitForLoad(page);
}

async function waitForLoad(page) {
  for (let i = 0; i < 100; i++) {
    if (await evaluateValue(page, "document.readyState") === "complete") return;
    await sleep(150);
  }
}

async function settle(page) {
  await waitForLoad(page);
  await sleep(1400);
  await evaluate(page, `document.querySelectorAll('[data-nextjs-toast],nextjs-portal').forEach((el) => el.remove())`);
}

async function screenshot(page, file) {
  const result = await send(page, "Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
    fromSurface: true,
  });
  await writeFile(path.join(outDir, file), Buffer.from(result.data, "base64"));
  console.log(`saved ${file}`);
}

async function evaluate(page, expression) {
  const result = await send(page, "Runtime.evaluate", {expression, awaitPromise: true, userGesture: true});
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result;
}

async function evaluateValue(page, expression) {
  return (await evaluate(page, expression)).value;
}

async function waitForUrl(page, predicate, timeout) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeout) {
    const url = await evaluateValue(page, "location.href");
    if (predicate(url)) return;
    await sleep(300);
  }
  throw new Error("Timeout aguardando login no Voltty.");
}

async function waitForChrome() {
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch(`http://127.0.0.1:${debugPort}/json/version`)).ok) return;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome nao iniciou.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
