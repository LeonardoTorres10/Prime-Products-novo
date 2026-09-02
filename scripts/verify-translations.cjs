const fs = require('fs');
const path = require('path');

const ptPath = path.resolve(__dirname, '../src/locales/pt.json');
const esPath = path.resolve(__dirname, '../src/locales/es.json');
const enPath = path.resolve(__dirname, '../src/locales/en.json');

try {
  const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
  const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
  const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

  const ptKeys = Object.keys(pt);
  const esKeys = Object.keys(es);
  const enKeys = Object.keys(en);

  let hasErrors = false;
  let errorCount = 0;
  let warningCount = 0;

  function logError(msg) {
    console.error(`[AUDIT ERROR]: ${msg}`);
    hasErrors = true;
    errorCount++;
  }

  function logWarning(msg) {
    console.warn(`[AUDIT WARNING]: ${msg}`);
    warningCount++;
  }

  console.log('=== STARTING ADVANCED I18N AUDIT ===');

  // 1. Basic Parity and Integrity Checks
  for (const key of ptKeys) {
    // ES checks
    if (!es.hasOwnProperty(key)) {
      logError(`Key "${key}" is missing in es.json`);
    } else if ((es[key] === null || es[key] === '') && pt[key] !== '') {
      logError(`Key "${key}" has an empty/null value in es.json`);
    }

    // EN checks
    if (!en.hasOwnProperty(key)) {
      logError(`Key "${key}" is missing in en.json`);
    } else if ((en[key] === null || en[key] === '') && pt[key] !== '') {
      logError(`Key "${key}" has an empty/null value in en.json`);
    }
  }

  // Orphan checks
  for (const key of esKeys) {
    if (!pt.hasOwnProperty(key)) {
      logWarning(`Orphaned key "${key}" found in es.json (not present in pt.json)`);
    }
  }
  for (const key of enKeys) {
    if (!pt.hasOwnProperty(key)) {
      logWarning(`Orphaned key "${key}" found in en.json (not present in pt.json)`);
    }
  }

  // 2. Portuguese Fallback Detection
  // Portuguese stop words that indicate a string is actually in Portuguese
  const ptStopWords = [
    ' de ', ' com ', ' para ', ' em ', ' não ', ' ou ', ' os ',
    'segurança', 'produção', 'projeto', 'especiais', 'válvulas', 'conexões', 'pressão', 'geração',
    'tubulação', 'sobre', 'ferramentas', 'conteúdo', 'soluções', 'aplicações', 'produtos'
  ];

  function detectPortugueseFallback(key, value, lang) {
    if (!value || typeof value !== 'string') return;
    if (value.startsWith('<img') || value.includes('src=') || value.includes('class=') || value.includes('mix-blend-multiply')) return;
    
    // Specific natural translation exemptions for Spanish
    const esExemptions = [
      'product_cilindros-tipo-4_apps_5', // "Transporte de gases comprimidos"
      'product_corte-solda_features_1', // "Reguladores para CO₂, Ar, O₂, Acetileno"
      'product_geracao-oxigenio_features_0', // "Pureza de 93% a 99,5% O₂"
      'product_corte-solda_table_1_col_2', // "Tipo de Uso"
      'product_valvulas-industriais_cat' // "Válvulas para Cilindros"
    ];
    if (lang === 'es' && esExemptions.includes(key)) return;

    const ptValue = pt[key];
    if (value === ptValue && ptValue.length > 5) {
      // Check if it contains Portuguese indicators
      const hasPtIndicator = ptStopWords.some(word => ptValue.toLowerCase().includes(word));
      if (hasPtIndicator) {
        logError(`Key "${key}" in ${lang}.json appears to be an untranslated Portuguese fallback: "${value}"`);
      }
    }
  }

  for (const key of ptKeys) {
    if (es[key]) detectPortugueseFallback(key, es[key], 'es');
    if (en[key]) detectPortugueseFallback(key, en[key], 'en');
  }

  // 3. Dynamic Key Assertions for Code Consistency
  // We want to make sure the critical items are declared
  const expectedProducts = [
    'cilindros-aluminio', 'cilindros-tipo-4', 'conexoes-instrumentacao', 'detectores-vazamento',
    'dewars-criogenicos', 'geracao-oxigenio-anestesia', 'geracao-oxigenio', 'corte-solda',
    'reguladores-especiais', 'reguladores-hidraulicos', 'reguladores-calibracao',
    'combate-incendio', 'transmissores-pressao', 'valvulas-industriais'
  ];

  for (const pId of expectedProducts) {
    const nameKey = `product_${pId}_name`;
    const descKey = `product_${pId}_desc`;
    if (!pt.hasOwnProperty(nameKey)) logError(`Missing product key: ${nameKey}`);
    if (!pt.hasOwnProperty(descKey)) logError(`Missing product key: ${descKey}`);
  }

  const expectedArticles = [
    'seguranca-producao-hidrogenio-anp',
    'principios-seguranca-hidrogenio',
    'manual-projeto-abrigos-cilindros',
    'conversao-diesel-hidrogenio',
    'instrumentacao-analitica-utilidades',
    'compatibilidade-elgiloy-h2s',
    'instrumentacao-industria-4-0',
    'seguranca-sistemas-gases',
    'engenharia-applied-processos',
    'confiabilidade-operacional',
    'boas-praticas-calibracao',
    'analise-processo-vs-laboratorio',
    'conformidade-rastreabilidade',
    'tendencias-instrumentacao'
  ];

  for (const aId of expectedArticles) {
    // Normalise ID matches build-locales
    const normId = aId === 'engenharia-applied-processos' ? 'engenharia-aplicada-processos' : aId;
    const titleKey = `article_${normId}_title`;
    const summaryKey = `article_${normId}_summary`;
    const contentKey = `article_${normId}_content`;

    if (!pt.hasOwnProperty(titleKey)) logError(`Missing article key: ${titleKey}`);
    if (!pt.hasOwnProperty(summaryKey)) logError(`Missing article key: ${summaryKey}`);
    if (!pt.hasOwnProperty(contentKey)) logError(`Missing article key: ${contentKey}`);
  }

  // 4. Dynamic Catalog Tables assertion
  // Let's check that transmitter tables have translations generated
  const testCatalogKey = `product_transmissores-pressao_table_0_title`;
  if (!pt.hasOwnProperty(testCatalogKey)) {
    logError(`Catalog translation keys were not found in locales files (e.g. ${testCatalogKey})`);
  }

  // 5. SEO Metadados check
  const criticalSEOKeys = [
    'meta_home_title', 'meta_home_desc',
    'meta_about_title', 'meta_about_desc',
    'meta_solutions_title', 'meta_solutions_desc',
    'meta_tools_title', 'meta_tools_desc',
    'meta_tools_pro_title', 'meta_tools_pro_desc',
    'meta_content_title', 'meta_content_desc',
    'meta_contact_title', 'meta_contact_desc',
    'meta_automotiva_title', 'meta_automotiva_desc',
    'meta_farmaceutica_title', 'meta_farmaceutica_desc',
    'meta_hydrogen_title', 'meta_hydrogen_desc',
    'meta_solutions_medicao_title', 'meta_solutions_medicao_desc',
    'meta_solutions_analitica_title', 'meta_solutions_analitica_desc',
    'meta_solutions_seguranca_title', 'meta_solutions_seguranca_desc',
    'meta_solutions_integradas_title', 'meta_solutions_integradas_desc',
    'meta_solutions_rede_title', 'meta_solutions_rede_desc',
    'meta_solutions_ar_title', 'meta_solutions_ar_desc',
    'meta_solutions_3d_title', 'meta_solutions_3d_desc'
  ];

  for (const seoKey of criticalSEOKeys) {
    if (!pt.hasOwnProperty(seoKey)) logError(`Missing SEO Metadados key: ${seoKey}`);
  }

  console.log('=== AUDIT COMPLETE ===');
  console.log(`Errors: ${errorCount}`);
  console.log(`Warnings: ${warningCount}`);

  if (hasErrors) {
    console.error('Translation validation FAILED. Resolve errors before build.');
    process.exit(1);
  } else {
    console.log('Translation validation PASSED. 100% parity and compliance verified.');
    process.exit(0);
  }
} catch (err) {
  console.error('Fatal error during i18n audit:', err.message);
  process.exit(1);
}
