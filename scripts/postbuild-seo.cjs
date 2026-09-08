const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const express = require('express');

// Helper to parse routeMappings.ts
function getRoutes() {
  const content = fs.readFileSync(path.join(__dirname, '../src/data/routeMappings.ts'), 'utf8');
  
  let urls = [];
  
  const baseRoutes = {
    pt: { p: '/produto', a: '/aplicacao', c: '/artigo' },
    es: { p: '/es/producto', a: '/es/aplicacion', c: '/es/articulo' },
    en: { p: '/en/product', a: '/en/application', c: '/en/article' }
  };

  const staticMap = {
    home: { pt: '/', es: '/es', en: '/en' },
    about: { pt: '/sobre', es: '/es/sobre', en: '/en/about' },
    solutions: { pt: '/solucoes', es: '/es/soluciones', en: '/en/solutions' },
    solutions_medicao: { pt: '/solucoes/instrumentacao-medicao', es: '/es/soluciones/instrumentacion-procesos', en: '/en/solutions/process-instrumentation' },
    solutions_analitica: { pt: '/solucoes/instrumentacao-analitica', es: '/es/soluciones/instrumentacion-analitica', en: '/en/solutions/analytical-instrumentation' },
    solutions_seguranca: { pt: '/solucoes/gases-seguranca-automacao', es: '/es/soluciones/seguridad-deteccion-incendios', en: '/en/solutions/gas-detection-fire-suppression' },
    solutions_integradas: { pt: '/solucoes/integradas', es: '/es/soluciones/integradas', en: '/en/solutions/integrated-solutions' },
    solutions_rede: { pt: '/solucoes/instalacao-rede-gases', es: '/es/soluciones/instalacion-redes-gases', en: '/en/solutions/gas-network-installation' },
    solutions_ar: { pt: '/solucoes/ar-comprimido-industrial-guia-tecnico', es: '/es/soluciones/guia-aire-comprimido-industrial', en: '/en/solutions/industrial-compressed-air-guide' },
    solutions_3d: { pt: '/solucoes/engenharia-digital-3d', es: '/es/soluciones/ingenieria-digital-3d', en: '/en/solutions/3d-digital-engineering' },
    products: { pt: '/produtos', es: '/es/productos', en: '/en/products' },
    applications: { pt: '/aplicacoes', es: '/es/aplicaciones', en: '/en/applications' },
    tools: { pt: '/ferramentas', es: '/es/herramientas', en: '/en/tools' },
    tools_pro: { pt: '/ferramentas-pro', es: '/es/calculadoras-prime', en: '/en/prime-calculators' },
    content: { pt: '/conteudo', es: '/es/contenido', en: '/en/content' },
    contact: { pt: '/contato', es: '/es/contacto', en: '/en/contact' }
  };

  Object.values(staticMap).forEach(langMap => {
    urls.push(langMap.pt, langMap.es, langMap.en);
  });

  const extractMappings = (varName) => {
    const blockMatch = content.match(new RegExp('export const ' + varName + '[^=]*=\\s*({[\\s\\S]*?});'));
    if (!blockMatch) return [];
    const block = blockMatch[1];
    
    const results = [];
    const itemRegex = /['"]?([a-zA-Z0-9_-]+)['"]?:\s*\{\s*pt:\s*['"]([^'"]+)['"],\s*es:\s*['"]([^'"]+)['"],\s*en:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = itemRegex.exec(block)) !== null) {
      results.push({ pt: match[2], es: match[3], en: match[4] });
    }
    return results;
  };

  extractMappings('productSlugMappings').forEach(m => {
    urls.push(baseRoutes.pt.p + '/' + m.pt, baseRoutes.es.p + '/' + m.es, baseRoutes.en.p + '/' + m.en);
  });

  extractMappings('applicationSlugMappings').forEach(m => {
    urls.push(baseRoutes.pt.a + '/' + m.pt, baseRoutes.es.a + '/' + m.es, baseRoutes.en.a + '/' + m.en);
  });

  extractMappings('articleSlugMappings').forEach(m => {
    urls.push(baseRoutes.pt.c + '/' + m.pt, baseRoutes.es.c + '/' + m.es, baseRoutes.en.c + '/' + m.en);
  });
  
  urls.push('/es-py/soluciones/helio');
  urls.push('/es-py/cryotec'); urls.push('/404-page-trigger');
  
  return [...new Set(urls)];
}

async function startServer() {
  const app = express();
  app.use(express.static(path.join(__dirname, '../dist')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
  return new Promise(resolve => {
    const server = app.listen(0, () => resolve(server));
  });
}

async function runPrerender() {
  console.log('Fetching routes...');
  const routes = getRoutes();
  console.log(`Found ${routes.length} routes to prerender.`);

  const domain = 'https://www.primeproducts.ind.br';
  
  const sitemapRoutes = routes.filter(r => r !== '/404-page-trigger');
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapRoutes.map(r => `  <url>
    <loc>${domain}${r}</loc>
    <changefreq>weekly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemapXml, 'utf8');
  console.log('Generated sitemap.xml');

  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml`;
  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robotsTxt, 'utf8');
  console.log('Generated robots.txt');

  console.log('Starting local server for prerendering...');
  const server = await startServer();
  const port = server.address().port;

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle2', timeout: 15000 });
      
      const html = await page.content();
      
      if (route === '/404-page-trigger') {
        fs.writeFileSync(path.join(__dirname, '../dist/404.html'), html, 'utf8');
      } else {
        let outPath = path.join(__dirname, '../dist', route);
        if (route === '/') outPath = path.join(__dirname, '../dist');
        
        fs.mkdirSync(outPath, { recursive: true });
        fs.writeFileSync(path.join(outPath, 'index.html'), html, 'utf8');
      }
      console.log(`Prerendered: ${route}`);
    } catch (e) {
      console.error(`Error prerendering ${route}:`, e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

runPrerender().catch(console.error);
