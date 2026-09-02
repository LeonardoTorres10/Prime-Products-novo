export interface RouteMap {
  pt: string;
  es: string;
  en: string;
}

export const routeMappings: Record<string, RouteMap> = {
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

export const productSlugMappings: Record<string, Record<string, string>> = {
  'cilindros-aluminio': { pt: 'cilindros-aluminio', es: 'cilindros-aluminio', en: 'aluminum-cylinders' },
  'cilindros-tipo-4': { pt: 'cilindros-tipo-4', es: 'cilindros-tipo-4', en: 'type-4-cylinders' },
  'conexoes-instrumentacao': { pt: 'conexoes-instrumentacao', es: 'conexiones-instrumentacion', en: 'instrumentation-fittings' },
  'detectores-vazamento': { pt: 'detectores-vazamento', es: 'detectores-fugas', en: 'leak-detectors' },
  'dewars-criogenicos': { pt: 'dewars-criogenicos', es: 'dewars-recipientes-criogenicos', en: 'dewars-cryogenic-containers' },
  'geracao-oxigenio': { pt: 'geracao-oxigenio', es: 'generacion-oxigeno-anestesia', en: 'oxygen-generation-anesthesia' },
  'corte-solda': { pt: 'corte-solda', es: 'equipos-corte-soldadura', en: 'cutting-welding-equipment' },
  'reguladores-especiais': { pt: 'reguladores-especiais', es: 'reguladores-gases-especiales', en: 'specialty-gas-regulators' },
  'reguladores-hidraulicos': { pt: 'reguladores-hidraulicos', es: 'reguladores-hidraulicos', en: 'hydraulic-regulators' },
  'reguladores-calibracao': { pt: 'reguladores-calibracao', es: 'reguladores-calibracion', en: 'calibration-regulators' },
  'combate-incendio': { pt: 'combate-incendio', es: 'sistemas-extincion-incendios', en: 'fire-suppression-systems' },
  'transmissores-pressao': { pt: 'transmissores-pressao', es: 'transmisores-presion-nivel-temperatura', en: 'pressure-level-temperature-transmitters' },
  'valvulas-industriais': { pt: 'valvulas-industriais', es: 'valvulas-industriales-medicinales-especiales', en: 'industrial-medical-specialty-valves' }
};

export const applicationSlugMappings: Record<string, Record<string, string>> = {
  'oleo-gas': { pt: 'oleo-gas', es: 'petroleo-gas', en: 'oil-gas' },
  'farmaceutica': { pt: 'farmaceutica', es: 'farmaceutica', en: 'pharmaceutical' },
  'hospitalar': { pt: 'hospitalar', es: 'hospitalaria', en: 'healthcare' },
  'laboratorios-analiticos': { pt: 'laboratorios-analiticos', es: 'laboratorios-analiticos', en: 'analytical-laboratories' },
  'industria-quimica': { pt: 'industria-quimica', es: 'industria-quimica', en: 'chemical-industry' },
  'alimentos-bebidas': { pt: 'alimentos-bebidas', es: 'alimentos-bebidas', en: 'food-beverage' },
  'automotivo': { pt: 'automotivo', es: 'automotriz', en: 'automotive' },
  'criogenia': { pt: 'criogenia', es: 'criogenia', en: 'cryogenics' },
  'soldagem': { pt: 'soldagem', es: 'metalmecanica', en: 'metalworking' },
  'energia-transicao-energetica': { pt: 'energia-transicao-energetica', es: 'energias-renovables', en: 'renewable-energy' },
  'mineral': { pt: 'mineral', es: 'mineria', en: 'mining' }
};

export const articleSlugMappings: Record<string, Record<string, string>> = {
  'seguranca-producao-hidrogenio-anp': { pt: 'seguranca-producao-hidrogenio-anp', es: 'seguridad-produccion-hidrogeno-anp', en: 'safety-low-emission-hydrogen-anp' },
  'principios-seguranca-hidrogenio': { pt: 'principios-seguranca-hidrogenio', es: 'principios-seguridad-hidrogeno', en: 'basic-safety-principles-hydrogen' },
  'manual-projeto-abrigos-cilindros': { pt: 'manual-projeto-abrigos-cilindros', es: 'manual-diseno-casetas-cilindros', en: 'practical-guide-cylinder-shelters' },
  'conversao-diesel-hidrogenio': { pt: 'conversao-diesel-hidrogenio', es: 'conversion-diesel-gas-natural', en: 'diesel-to-natural-gas-conversion' },
  'instrumentacao-analitica-utilidades': { pt: 'instrumentacao-analitica-utilidades', es: 'instrumentacion-analitica-infraestructura', en: 'analytical-instrumentation-utilities' },
  'compatibilidade-elgiloy-h2s': { pt: 'compatibilidade-elgiloy-h2s', es: 'compatibilidad-elgiloy-h2s', en: 'elgiloy-alloy-h2s-compatibility' },
  'instrumentacao-industria-4-0': { pt: 'instrumentacao-industria-4-0', es: 'importancia-instrumentacion-industria-4-0', en: 'importance-instrumentation-industry-4-0' },
  'seguranca-sistemas-gases': { pt: 'seguranca-sistemas-gases', es: 'seguridad-sistemas-gases-nr13', en: 'gas-system-safety-nr13' },
  'engenharia-aplicada-processos': { pt: 'engenharia-aplicada-processos', es: 'ingenieria-aplicada-procesos', en: 'applied-engineering-process-optimization' },
  'confiabilidade-operacional': { pt: 'confiabilidade-operacional', es: 'confiabilidad-operacional-pasos', en: 'operational-reliability-steps' },
  'boas-praticas-calibracao': { pt: 'boas-praticas-calibracao', es: 'buenas-practicas-calibracion', en: 'best-practices-calibration-instruments' },
  'analise-processo-vs-laboratorio': { pt: 'analise-processo-vs-laboratorio', es: 'analisis-proceso-vs-laboratorio', en: 'process-vs-lab-analysis' },
  'conformidade-rastreabilidade': { pt: 'conformidade-rastreabilidade', es: 'conformidad-trazabilidad-documentacion', en: 'compliance-traceability-documentation' },
  'tendencias-instrumentacao': { pt: 'tendencias-instrumentacao', es: 'tendencias-instrumentacion-automatizacion', en: 'instrumentation-trends' }
};

export function getCanonicalSlug(slug: string, type: 'product' | 'application' | 'article', lang?: string): string {
  const mappings = type === 'product' ? productSlugMappings : type === 'application' ? applicationSlugMappings : articleSlugMappings;
  for (const [canonical, translations] of Object.entries(mappings)) {
    if (canonical === slug) {
      return canonical;
    }
    if (lang) {
      if (translations[lang] === slug) {
        return canonical;
      }
    } else {
      for (const val of Object.values(translations)) {
        if (val === slug) {
          return canonical;
        }
      }
    }
  }
  return slug;
}

export function getTranslatedSlug(canonicalSlug: string, type: 'product' | 'application' | 'article', targetLang: string): string {
  const mappings = type === 'product' ? productSlugMappings : type === 'application' ? applicationSlugMappings : articleSlugMappings;
  const match = mappings[canonicalSlug];
  return match ? (match[targetLang] || canonicalSlug) : canonicalSlug;
}

export function getEquivalentRoute(currentPath: string, targetLang: string): string {
  // Landings independentes permanecem inalteradas, mas PT e EN levam à Home correspondente
  if (currentPath.startsWith('/es-py/')) {
    if (targetLang === 'pt') return '/';
    if (targetLang === 'en') return '/en';
    return currentPath;
  }

  // 1. Dynamic route product/produto
  const productMatch = currentPath.match(/^\/(?:es\/producto|en\/product|produto)\/([^/]+)/);
  if (productMatch) {
    const activeLang = currentPath.startsWith('/es/') ? 'es' : currentPath.startsWith('/en/') ? 'en' : 'pt';
    const slug = productMatch[1];
    const canonical = getCanonicalSlug(slug, 'product', activeLang);
    const targetSlug = getTranslatedSlug(canonical, 'product', targetLang);
    const prefix = targetLang === 'pt' ? '/produto/' : targetLang === 'es' ? '/es/producto/' : '/en/product/';
    return prefix + targetSlug;
  }

  // 2. Dynamic route application/aplicacao
  const appMatch = currentPath.match(/^\/(?:es\/aplicacion|en\/application|aplicacao)\/([^/]+)/);
  if (appMatch) {
    const activeLang = currentPath.startsWith('/es/') ? 'es' : currentPath.startsWith('/en/') ? 'en' : 'pt';
    const slug = appMatch[1];
    const canonical = getCanonicalSlug(slug, 'application', activeLang);
    const targetSlug = getTranslatedSlug(canonical, 'application', targetLang);
    const prefix = targetLang === 'pt' ? '/aplicacao/' : targetLang === 'es' ? '/es/aplicacion/' : '/en/application/';
    return prefix + targetSlug;
  }

  // 3. Dynamic route article/artigo
  const articleMatch = currentPath.match(/^\/(?:es\/articulo|en\/article|artigo)\/([^/]+)/);
  if (articleMatch) {
    const activeLang = currentPath.startsWith('/es/') ? 'es' : currentPath.startsWith('/en/') ? 'en' : 'pt';
    const slug = articleMatch[1];
    const canonical = getCanonicalSlug(slug, 'article', activeLang);
    const targetSlug = getTranslatedSlug(canonical, 'article', targetLang);
    const prefix = targetLang === 'pt' ? '/artigo/' : targetLang === 'es' ? '/es/articulo/' : '/en/article/';
    return prefix + targetSlug;
  }

  // 4. Regular static routes
  for (const key of Object.keys(routeMappings)) {
    const map = routeMappings[key];
    if (map.pt === currentPath || map.es === currentPath || map.en === currentPath) {
      return map[targetLang as 'pt' | 'es' | 'en'] || '/';
    }
  }

  // Redireciona para a home correspondente em caso de 404
  return targetLang === 'pt' ? '/' : targetLang === 'es' ? '/es' : '/en';
}
