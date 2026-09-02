import puppeteer from 'puppeteer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');

// List of all valid slugs and routes based on earlier code inspection
const routes = [
  '/', '/sobre', '/solucoes', 
  '/solucoes/instrumentacao-medicao', '/solucoes/instrumentacao-analitica',
  '/solucoes/gases-seguranca-automacao', '/solucoes/integradas', 
  '/solucoes/instalacao-rede-gases', '/solucoes/ar-comprimido-industrial-guia-tecnico',
  '/solucoes/engenharia-digital-3d', '/produtos', '/aplicacoes',
  '/ferramentas', '/ferramentas-pro', '/conteudo', '/contato', '/login',
  // Products (derived from catalogs/slugs)
  '/produto/reguladores-especiais', '/produto/cilindros-aluminio',
  '/produto/cilindros-tipo-4', '/produto/dewars-criogenicos',
  '/produto/conexoes-instrumentacao', '/produto/corte-solda',
  '/produto/valvulas-alta-pressao', '/produto/transmissores-pressao',
  '/produto/gas-calibracao', '/produto/geracao-oxigenio',
  '/produto/detectores-gases', '/produto/sistemas-hidraulicos',
  // Applications
  '/aplicacao/oleo-gas', '/aplicacao/hospitalar', '/aplicacao/laboratorio-analitico',
  '/aplicacao/aeroespacial', '/aplicacao/automotivo', '/aplicacao/pesquisa-desenvolvimento',
  // Articles
  '/artigo/seguranca-producao-hidrogenio-anp', '/artigo/principios-seguranca-hidrogenio',
  '/artigo/manual-projeto-abrigos-cilindros', '/artigo/conversao-diesel-hidrogenio',
  '/artigo/instrumentacao-analitica-utilidades', '/artigo/compatibilidade-elgiloy-h2s',
  '/artigo/instrumentacao-industria-4-0', '/artigo/seguranca-sistemas-gases',
  '/artigo/engenharia-aplicada-processos', '/artigo/confiabilidade-operacional',
  '/artigo/boas-praticas-calibracao', '/artigo/analise-processo-vs-laboratorio',
  '/artigo/conformidade-rastreabilidade', '/artigo/tendencias-instrumentacao'
];

async function crawl() {
  await fs.ensureDir(OUTPUT_DIR);
  const browser = await puppeteer.launch({ headless: 'new', executablePath: 'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe' });
  
  const networkAssets = {};
  const consoleLogs = [];
  const errors404 = [];

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  page.on('response', async response => {
    const url = response.url();
    const status = response.status();
    const type = response.request().resourceType();
    
    if (status === 404 && type === 'image') {
      errors404.push({ url, route: page.url() });
    }

    if (type === 'image' && url.includes('localhost:5173')) {
      const parsedUrl = new URL(url);
      const relativePath = decodeURIComponent(parsedUrl.pathname);
      
      if (!networkAssets[relativePath]) {
        networkAssets[relativePath] = new Set();
      }
      const pageRoute = new URL(page.url()).pathname;
      networkAssets[relativePath].add(pageRoute);
    }
  });

  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleLogs.push({ text: msg.text(), route: page.url() });
    }
  });

  for (const route of routes) {
    console.log(`Crawling: ${route}`);
    try {
      await page.goto(`http://localhost:5173${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      // Scroll down to trigger lazy loading
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if(totalHeight >= scrollHeight - window.innerHeight){
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });
      // Wait a bit more for lazy images to load
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console.log(`Failed to crawl ${route}: ${e.message}`);
    }
  }

  await browser.close();

  // Convert Sets to Arrays for JSON serialization
  const serializedAssets = {};
  for (const [key, value] of Object.entries(networkAssets)) {
    serializedAssets[key] = Array.from(value);
  }

  await fs.writeJson(path.join(OUTPUT_DIR, 'render_scan.json'), {
    assets: serializedAssets,
    errors404,
    consoleLogs
  }, { spaces: 2 });
  
  console.log("Crawl completed!");
}

crawl().catch(console.error);
