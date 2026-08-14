import {mkdir, rm} from "node:fs/promises";
import {existsSync} from "node:fs";
import {spawn} from "node:child_process";
import path from "node:path";
import WebSocket from "ws";

const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const email = process.env.VYRAL_CAPTURE_EMAIL;
const password = process.env.VYRAL_CAPTURE_PASSWORD;
const baseUrl = process.env.VYRAL_CAPTURE_URL || "https://vyral.app.br";
const outDir = path.resolve("public/projects/vyral");

if (!email || !password) {
  throw new Error("Defina VYRAL_CAPTURE_EMAIL e VYRAL_CAPTURE_PASSWORD.");
}

const userDataDir = path.resolve(".tmp/vyral-capture-chrome");
const debugPort = 9229;

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
    await send(page, "Emulation.setDeviceMetricsOverride", {width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false});

    await capturePublicHome(page);
    await captureLogin(page);
    await login(page);
    await captureApp(page);
  } finally {
    chrome.kill("SIGTERM");
  }
}

async function capturePublicHome(page) {
  await goto(page, `${baseUrl}/`);
  await settle(page);
  await screenshot(page, "cover.png");
  const positions = [0, 700, 1400, 2100, 2800, 3500];
  for (let i = 0; i < positions.length; i++) {
    await evaluate(page, `window.scrollTo(0, ${positions[i]});`);
    await sleep(700);
    await screenshot(page, `home-0${i + 1}.png`);
  }
}

async function captureLogin(page) {
  await goto(page, `${baseUrl}/login`);
  await settle(page);
  await screenshot(page, "login.png");
}

async function login(page) {
  await evaluate(page, `
    (async () => {
      const setValue = (el, value) => {
        const proto = Object.getPrototypeOf(el);
        const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
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
      const button = form?.querySelector('button[type="submit"]') || [...document.querySelectorAll("button")].find((item) => /entrar no painel|login|acessar/i.test(item.textContent || ""));
      if (!button) throw new Error("Botao de login nao encontrado.");
      button.click();
    })();
  `);
  await waitForUrl(page, (url) => !url.includes("/login"), 20000);
  await settle(page);
}

async function captureApp(page) {
  await evaluate(page, `
    ["/dashboard","/clientes","/conteudos","/calendario","/arquivos","/tendencias","/relatorios"].forEach((key) => {
      localStorage.setItem("vyral:tour:" + key, "seen");
    });
  `);
  const clientId = await evaluateValue(page, `
    (async () => {
      const res = await fetch("/api/clients");
      if (!res.ok) return "";
      const clients = await res.json();
      return clients?.[0]?.id || "";
    })()
  `);
  const clientQuery = clientId ? `?clientId=${clientId}` : "";
  const pages = [
    ["selecionar-empresa.png", "/seleccionar-empresa"],
    ["dashboard.png", `/dashboard${clientQuery}`],
    ["clientes-crm.png", `/clientes${clientQuery}`],
    ["cliente-detalhe.png", clientId ? `/clientes/${clientId}` : "/clientes"],
    ["conteudos.png", `/conteudos${clientQuery}`],
    ["calendario.png", `/calendario${clientQuery}`],
    ["arquivos.png", `/arquivos${clientQuery}`],
    ["tendencias.png", `/tendencias${clientQuery}`],
    ["relatorios.png", `/relatorios${clientQuery}`],
    ["equipe.png", "/equipe"],
    ["configuracoes.png", "/configuracoes"],
    ["admin.png", "/admin"],
  ];

  for (const [name, route] of pages) {
    await goto(page, `${baseUrl}${route}`);
    await settle(page);
    await screenshot(page, name);
  }
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
  return {ws, send(method, params = {}) {
    const callId = ++id;
    ws.send(JSON.stringify({id: callId, method, params}));
    return new Promise((resolve, reject) => callbacks.set(callId, {resolve, reject}));
  }};
}

function send(page, method, params) {
  return page.send(method, params);
}

async function goto(page, url) {
  await send(page, "Page.navigate", {url});
  await waitForLoad(page);
}

async function waitForLoad(page) {
  for (let i = 0; i < 100; i++) {
    const state = await evaluateValue(page, "document.readyState");
    if (state === "complete") return;
    await sleep(150);
  }
}

async function settle(page) {
  await waitForLoad(page);
  await sleep(1200);
  await evaluate(page, `document.querySelectorAll('[data-nextjs-toast],nextjs-portal').forEach((el)=>el.remove());`);
}

async function screenshot(page, file) {
  const result = await send(page, "Page.captureScreenshot", {format: "png", captureBeyondViewport: false, fromSurface: true});
  const target = path.join(outDir, file);
  await mkdir(path.dirname(target), {recursive: true});
  await import("node:fs/promises").then((fs) => fs.writeFile(target, Buffer.from(result.data, "base64")));
  console.log(`saved ${file}`);
}

async function evaluate(page, expression) {
  const result = await send(page, "Runtime.evaluate", {expression, awaitPromise: true, userGesture: true});
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result;
}

async function evaluateValue(page, expression) {
  const result = await evaluate(page, expression);
  return result.value;
}

async function waitForUrl(page, predicate, timeout = 10000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const url = await evaluateValue(page, "location.href");
    if (predicate(url)) return url;
    await sleep(300);
  }
  throw new Error("Timeout aguardando mudanca de URL.");
}

async function waitForChrome() {
  for (let i = 0; i < 80; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
      if (res.ok) return;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome nao iniciou.");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (!existsSync(chromePath)) {
  throw new Error(`Chrome nao encontrado em ${chromePath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
