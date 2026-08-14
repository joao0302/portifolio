import {mkdir} from "node:fs/promises";
import {spawn} from "node:child_process";
import path from "node:path";
import WebSocket from "ws";

const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outDir = path.resolve(".tmp");
const debugPort = 9231;
const userDataDir = path.resolve(".tmp/portfolio-preview-chrome");

async function main() {
  await mkdir(outDir, {recursive: true});
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    "--headless=new",
    "--hide-scrollbars",
    "--disable-gpu",
    "--no-first-run",
    "--window-size=1440,1600",
    "about:blank",
  ], {stdio: "ignore"});
  try {
    await waitForChrome();
    const page = await createPage();
    await send(page, "Page.enable");
    await send(page, "Runtime.enable");
    await send(page, "Emulation.setDeviceMetricsOverride", {width: 1440, height: 1600, deviceScaleFactor: 1, mobile: false});
    await goto(page, "http://localhost:3001/#work");
    await sleep(1800);
    const debug = await send(page, "Runtime.evaluate", {expression: `JSON.stringify([...document.querySelectorAll('img')].slice(0,8).map((img)=>({src: img.getAttribute('src'), cls: img.className, w: img.getBoundingClientRect().width, h: img.getBoundingClientRect().height, fit: getComputedStyle(img).objectFit, pos: getComputedStyle(img).objectPosition})))`});
    console.log(debug.result.value);
    await screenshot(page, "portfolio-work.png");
  } finally {
    chrome.kill("SIGTERM");
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
  return {send(method, params = {}) {
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
  for (let i = 0; i < 80; i++) {
    const state = await send(page, "Runtime.evaluate", {expression: "document.readyState"});
    if (state.result.value === "complete") return;
    await sleep(150);
  }
}

async function screenshot(page, file) {
  const result = await send(page, "Page.captureScreenshot", {format: "png", captureBeyondViewport: false, fromSurface: true});
  await import("node:fs/promises").then((fs) => fs.writeFile(path.join(outDir, file), Buffer.from(result.data, "base64")));
  console.log(path.join(outDir, file));
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

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
