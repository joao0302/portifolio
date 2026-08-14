import {mkdir, rm, writeFile} from "node:fs/promises";
import {existsSync} from "node:fs";
import {spawn} from "node:child_process";
import path from "node:path";
import WebSocket from "ws";

const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const legisiaFrontend = process.env.LEGISIA_FRONTEND_DIR || "C:\\Users\\Acer\\legisia\\frontend";
const baseUrl = process.env.LEGISIA_CAPTURE_URL || "http://127.0.0.1:5174";
const outDir = path.resolve("public/projects/legisia");
const userDataDir = path.resolve(".tmp/legisia-capture-chrome");
const debugPort = 9231;

const demoCliente = {
  id: "demo-legisia",
  nome: "Câmara Municipal de Sanharó",
  email: "vereador@legisia.demo",
  municipio: "Sanharó-PE",
  role: "cliente",
  primeiroAcesso: false,
};

async function main() {
  if (!existsSync(chromePath)) throw new Error(`Chrome nao encontrado em ${chromePath}`);
  if (!existsSync(legisiaFrontend)) throw new Error(`Frontend LegisIA nao encontrado em ${legisiaFrontend}`);

  await mkdir(outDir, {recursive: true});
  await rm(userDataDir, {recursive: true, force: true});
  await mkdir(userDataDir, {recursive: true});

  const vite = await ensureVite();
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    "--headless=new",
    "--hide-scrollbars",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1440,1000",
    "about:blank",
  ], {stdio: "ignore"});

  try {
    await waitForChrome();
    const page = await createPage();
    await send(page, "Page.enable");
    await send(page, "Runtime.enable");
    await send(page, "Emulation.setDeviceMetricsOverride", {width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false});
    await installMocks(page);

    await goto(page, baseUrl);
    await settle(page);
    await screenshot(page, "cover.png");
    await screenshot(page, "login.png");

    await clickByText(page, "Teste grátis");
    await sleep(600);
    await screenshot(page, "trial.png");

    await setCliente(page, demoCliente);
    await goto(page, baseUrl);
    await settle(page);
    await screenshot(page, "regimental.png");

    await clickNav(page, "Meu Plano");
    await screenshot(page, "dashboard.png");

    await clickNav(page, "Proposição");
    await screenshot(page, "proposicao.png");

    await clickNav(page, "Fiscalização");
    await screenshot(page, "fiscalizacao-ranking.png");

    await clickByText(page, "Alertas detectados");
    await sleep(600);
    await screenshot(page, "fiscalizacao-alertas.png");

    await clickByText(page, "Cruzamento de dados");
    await sleep(900);
    await screenshot(page, "fiscalizacao-cruzamento.png");

    await setCliente(page, {...demoCliente, nome: "João Paulo", email: "admin@legisia.demo", role: "admin"});
    await goto(page, baseUrl);
    await settle(page);
    await screenshot(page, "admin.png");
  } finally {
    chrome.kill("SIGTERM");
    if (vite) vite.kill("SIGTERM");
  }
}

async function ensureVite() {
  try {
    const res = await fetch(baseUrl);
    if (res.ok) return null;
  } catch {}

  const vite = spawn("npm", ["run", "dev", "--", "--host", "127.0.0.1", "--port", "5174"], {
    cwd: legisiaFrontend,
    stdio: "ignore",
    shell: true,
  });

  for (let i = 0; i < 80; i++) {
    try {
      const res = await fetch(baseUrl);
      if (res.ok) return vite;
    } catch {}
    await sleep(250);
  }
  vite.kill("SIGTERM");
  throw new Error("Vite do LegisIA nao iniciou em http://127.0.0.1:5174");
}

async function installMocks(page) {
  await send(page, "Page.addScriptToEvaluateOnNewDocument", {
    source: `
      (() => {
        const json = (data, status = 200) => new Response(JSON.stringify(data), {
          status,
          headers: {"Content-Type": "application/json"}
        });
        const ranking = {
          totalGeralContratado: 2840000,
          totalContratos: 128,
          totalFornecedores: 42,
          ranking: [
            {nome:"Construtora Horizonte Ltda", cnpj:"12.345.678/0001-90", totalContratado: 820000, participacaoPercent: 29, quantidadeContratos: 8},
            {nome:"Med Supply Brasil", cnpj:"98.765.432/0001-10", totalContratado: 510000, participacaoPercent: 18, quantidadeContratos: 11},
            {nome:"Alpha Tecnologia Pública", cnpj:"44.221.009/0001-77", totalContratado: 360000, participacaoPercent: 13, quantidadeContratos: 5},
            {nome:"Serviços Urbanos Nordeste", cnpj:"03.111.222/0001-54", totalContratado: 290000, participacaoPercent: 10, quantidadeContratos: 7},
            {nome:"Papelaria Central", cnpj:"21.778.450/0001-01", totalContratado: 132000, participacaoPercent: 5, quantidadeContratos: 18}
          ]
        };
        const alertas = {
          dados: [
            {nivel:"ALTO", titulo:"Concentração de contratos", descricao:"Fornecedor concentra volume relevante de contratos no exercício analisado.", tipo:"CONCENTRAÇÃO", cnpjEnvolvido:"12.345.678/0001-90", resolvido:false},
            {nivel:"MEDIO", titulo:"Contratos fracionados", descricao:"Compras semelhantes foram identificadas em datas próximas.", tipo:"FRACIONAMENTO", cnpjEnvolvido:"98.765.432/0001-10", resolvido:false},
            {nivel:"BAIXO", titulo:"Prazo próximo ao vencimento", descricao:"Contrato relevante vence nos próximos 30 dias.", tipo:"PRAZO", cnpjEnvolvido:"44.221.009/0001-77", resolvido:false}
          ]
        };
        const cruzamento = {
          judiciario: [
            {nome:"Construtora Horizonte Ltda", processos:[1,2], totalContratado:820000},
            {nome:"Med Supply Brasil", processos:[1], totalContratado:510000}
          ],
          tce: [
            {nome:"Alpha Tecnologia Pública"},
            {nome:"Serviços Urbanos Nordeste"}
          ]
        };
        const stats = {total: 37, ativos: 31, inativos: 6, ultimosMes: 8};
        const clientes = {
          dados: [
            {id:"1", nome:"Câmara de Sanharó", email:"contato@sanharo.pe.leg.br", municipio:"Sanharó-PE", plano:"profissional", ativo:true},
            {id:"2", nome:"Câmara de Pesqueira", email:"contato@pesqueira.pe.leg.br", municipio:"Pesqueira-PE", plano:"basico", ativo:true},
            {id:"3", nome:"Câmara de Cortês", email:"contato@cortes.pe.leg.br", municipio:"Cortês-PE", plano:"enterprise", ativo:true}
          ],
          paginacao: {total: 3}
        };
        window.fetch = async (input, init = {}) => {
          const url = String(input);
          if (url.includes("/auth/login")) return json({token:"demo-token", cliente:${JSON.stringify(demoCliente)}});
          if (url.includes("/auth/trial")) return json({ok:true});
          if (url.includes("/assinatura/dashboard")) return json({
            plano:{id:"profissional", nome:"Profissional"},
            consultas:{usadas:42, limite:100, restantes:58},
            diasRestantes:18,
            dataVencimento:new Date(Date.now()+18*86400000).toISOString(),
            status:"ativo",
            recursos:["assessoria_basica","consulta_regimento","consulta_lei_organica","fiscalizacao_completa","cruzamento_tce","deteccao_anomalias"],
            ciclo:{renovaEm:new Date(Date.now()+18*86400000).toISOString()}
          });
          if (url.includes("/assinatura/planos")) return json({planos:[
            {id:"basico", nome:"Básico", limiteConsultas:30, descricao:"Consultas essenciais para rotina parlamentar."},
            {id:"profissional", nome:"Profissional", limiteConsultas:100, descricao:"Assessoria, fiscalização e análise de proposições."},
            {id:"enterprise", nome:"Enterprise", limiteConsultas:null, descricao:"Uso avançado para Câmaras com operação completa."}
          ]});
          if (url.includes("/fiscalizacao/ranking")) return json(ranking);
          if (url.includes("/fiscalizacao/alertas")) return json(alertas);
          if (url.includes("/fiscalizacao/cruzamento")) return json(cruzamento);
          if (url.includes("/admin/stats")) return json(stats);
          if (url.includes("/admin/clientes")) return json(clientes);
          if (url.includes("/regimental/consultar")) return json({resposta:"Com base no Regimento Interno, a consulta deve observar competência, prazo e rito de votação antes do protocolo."});
          if (url.includes("/proposicao/analisar")) return json({resposta:"A proposição apresenta aderência formal, mas recomenda-se ajustar justificativa e indicar fundamento constitucional."});
          return json({ok:true});
        };
      })();
    `,
  });
}

async function setCliente(page, cliente) {
  await evaluate(page, `
    localStorage.setItem("legisia_token", "demo-token");
    localStorage.setItem("legisia_cliente", ${JSON.stringify(JSON.stringify(cliente))});
  `);
}

async function clickNav(page, text) {
  await clickByText(page, text);
  await sleep(1000);
}

async function clickByText(page, text) {
  const ok = await evaluateValue(page, `
    (() => {
      const wanted = ${JSON.stringify(text)}.toLowerCase();
      const el = [...document.querySelectorAll("button, a, [role='button']")]
        .find((item) => (item.textContent || "").toLowerCase().includes(wanted));
      if (!el) return false;
      el.click();
      return true;
    })()
  `);
  if (!ok) throw new Error(`Nao encontrei botao/link com texto: ${text}`);
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
}

async function screenshot(page, file) {
  const result = await send(page, "Page.captureScreenshot", {format: "png", captureBeyondViewport: false, fromSurface: true});
  const target = path.join(outDir, file);
  await mkdir(path.dirname(target), {recursive: true});
  await writeFile(target, Buffer.from(result.data, "base64"));
  console.log(`saved ${file}`);
}

async function evaluate(page, expression) {
  const result = await send(page, "Runtime.evaluate", {expression, awaitPromise: true, userGesture: true});
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text || "Runtime evaluation failed");
  }
  return result.result;
}

async function evaluateValue(page, expression) {
  const result = await evaluate(page, expression);
  return result.value;
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
