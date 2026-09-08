const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio'); // Requires npm i cheerio

// Simples assert handler
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`❌ FAIL: ${message}`);
  }
}

function runTests() {
  const distPath = path.join(__dirname, '../dist');
  
  // 1. Verify Robots and Sitemap
  assert(fs.existsSync(path.join(distPath, 'robots.txt')), 'robots.txt should exist');
  assert(fs.existsSync(path.join(distPath, 'sitemap.xml')), 'sitemap.xml should exist');
  
  const sitemapContent = fs.readFileSync(path.join(distPath, 'sitemap.xml'), 'utf8');
  assert(sitemapContent.includes('</urlset>'), 'Sitemap should be valid XML');
  assert(!sitemapContent.includes('/404-page-trigger'), 'Sitemap should NOT include 404 page');

  // 2. Load Home route and verify tags
  const homeHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
  const $home = cheerio.load(homeHtml);
  
  assert($home('title').text().includes('Prime Products'), 'Home title should contain Prime Products');
  assert($home('meta[name="description"]').length > 0, 'Home should have meta description');
  assert($home('link[rel="canonical"]').last().attr('href') === 'https://www.primeproducts.ind.br/', 'Home canonical should be root');
  assert($home('link[rel="alternate"][hreflang="x-default"]').length > 0, 'Home should have x-default hreflang');
  assert($home('link[rel="alternate"][hreflang="pt-BR"]').length > 0, 'Home should have pt-BR hreflang');
  assert($home('link[rel="alternate"][hreflang="es"]').length > 0, 'Home should have es hreflang');
  assert($home('link[rel="alternate"][hreflang="en"]').length > 0, 'Home should have en hreflang');
  assert($home('meta[name="robots"][content*="noindex"]').length === 0, 'Home should NOT have noindex');
  
  // 3. Load 404 page and verify noindex
  if (fs.existsSync(path.join(distPath, '404.html'))) {
    const errorHtml = fs.readFileSync(path.join(distPath, '404.html'), 'utf8');
    const $error = cheerio.load(errorHtml);
    assert($error('meta[name="robots"][content*="noindex"]').length > 0, '404 page should have noindex tag');
  } else {
    assert(false, '404.html should exist');
  }

  // 4. Load a product route
  const productHtml = fs.readFileSync(path.join(distPath, 'produto/cilindros-aluminio/index.html'), 'utf8');
  const $prod = cheerio.load(productHtml);
  assert($prod('title').text().includes('Cilindros de Alumínio'), 'Product title should be correct');
  assert($prod('link[rel="canonical"]').last().attr('href') === 'https://www.primeproducts.ind.br/produto/cilindros-aluminio', 'Product canonical correct');
  
  console.log(`\n✅ Passed: ${passed} | ❌ Failed: ${failed}`);
  if (failed > 0) process.exit(1);
}

runTests();
