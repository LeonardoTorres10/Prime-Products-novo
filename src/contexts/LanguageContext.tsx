import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getEquivalentRoute } from '../data/routeMappings';
import { SEOHead } from '../components/SEOHead';

// Importando os arquivos de locales
import pt from '../locales/pt.json';
import es from '../locales/es.json';
import en from '../locales/en.json';

export type Language = 'pt' | 'es' | 'en';

interface LanguageContextData {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const locales: Record<Language, any> = { pt, es, en };

const LanguageContext = createContext<LanguageContextData | undefined>(undefined);

const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('pt');

  // Determina idioma pelo path (roda sincronicamente para render)
  const path = location.pathname;
  let activeLang: Language = 'pt';
  if (path.startsWith('/es-py/') || path === '/es-py') {
    activeLang = 'es';
  } else if (path.startsWith('/es/') || path === '/es') {
    activeLang = 'es';
  } else if (path.startsWith('/en/') || path === '/en') {
    activeLang = 'en';
  } else {
    activeLang = 'pt';
  }

  // Atualiza state sem causar loop infinito (apenas se mudar)
  useEffect(() => {
    if (activeLang !== language) {
      setLanguageState(activeLang);
    }
  }, [activeLang, language]);

  let pageKey = '';
  if (path === '/' || path === '/es' || path === '/en') pageKey = 'home';
  else if (path === '/sobre' || path === '/es/sobre' || path === '/en/about') pageKey = 'about';
  else if (path === '/solucoes' || path === '/es/soluciones' || path === '/en/solutions') pageKey = 'solutions';
  else if (path === '/ferramentas' || path === '/es/herramientas' || path === '/en/tools') pageKey = 'tools';
  else if (path === '/ferramentas-pro' || path === '/es/calculadoras-prime' || path === '/en/prime-calculators') pageKey = 'tools_pro';
  else if (path === '/conteudo' || path === '/es/contenido' || path === '/en/content') pageKey = 'content';
  else if (path === '/contato' || path === '/es/contacto' || path === '/en/contact') pageKey = 'contact';
  else if (path === '/solucoes/instrumentacao-medicao' || path === '/es/soluciones/instrumentacion-procesos' || path === '/en/solutions/process-instrumentation') pageKey = 'solutions_medicao';
  else if (path === '/solucoes/instrumentacao-analitica' || path === '/es/soluciones/instrumentacion-analitica' || path === '/en/solutions/analytical-instrumentation') pageKey = 'solutions_analitica';
  else if (path === '/solucoes/gases-seguranca-automacao' || path === '/es/soluciones/seguridad-deteccion-incendios' || path === '/en/solutions/gas-detection-fire-suppression') pageKey = 'solutions_seguranca';
  else if (path === '/solucoes/integradas' || path === '/es/soluciones/integradas' || path === '/en/solutions/integrated-solutions') pageKey = 'solutions_integradas';
  else if (path === '/solucoes/instalacao-rede-gases' || path === '/es/soluciones/instalacion-redes-gases' || path === '/en/solutions/gas-network-installation') pageKey = 'solutions_rede';
  else if (path === '/solucoes/ar-comprimido-industrial-guia-tecnico' || path === '/es/soluciones/guia-aire-comprimido-industrial' || path === '/en/solutions/industrial-compressed-air-guide') pageKey = 'solutions_ar';
  else if (path === '/solucoes/engenharia-digital-3d' || path === '/es/soluciones/ingenieria-digital-3d' || path === '/en/solutions/3d-digital-engineering') pageKey = 'solutions_3d';
  else if (path === '/es-py/soluciones/helio') pageKey = 'helio_py';
  else if (path === '/es-py/cryotec') pageKey = 'cryotec_py';

  let seoTitle = 'Prime Products';
  let seoDesc = 'Soluções técnicas em instrumentação, gases e engenharia aplicada.';

  if (pageKey) {
    const tDirect = (k: string, def: string) => {
      const dict = locales[activeLang];
      return (dict && dict[k]) ? dict[k] : def;
    };
    
    if (pageKey === 'home') {
      seoTitle = tDirect('meta_home_title', 'Prime Products');
      seoDesc = tDirect('meta_home_desc', 'Engenharia aplicada e instrumentação de precisão para processos críticos.');
    } else if (pageKey === 'about') {
      seoTitle = tDirect('meta_about_title', 'Sobre a Prime | Prime Products');
      seoDesc = tDirect('meta_about_desc', 'Conheça nossa história, missão, visão e compromisso regulatório.');
    } else if (pageKey === 'solutions') {
      seoTitle = tDirect('meta_solutions_title', 'Soluções | Prime Products');
      seoDesc = tDirect('meta_solutions_desc', 'Skids, painéis integrados e sistemas mecânicos customizados.');
    } else if (pageKey === 'tools') {
      seoTitle = tDirect('meta_tools_title', 'Ferramentas | Prime Products');
      seoDesc = tDirect('meta_tools_desc', 'Simuladores e conversores técnicos online de referência.');
    } else if (pageKey === 'tools_pro') {
      seoTitle = tDirect('meta_tools_pro_title', 'Calculadoras Prime | Prime Products');
      seoDesc = tDirect('meta_tools_pro_desc', 'Dimensionamento de Cv/Kv e conversores de grandezas avançadas.');
    } else if (pageKey === 'content') {
      seoTitle = tDirect('meta_content_title', 'Conteúdo Técnico | Prime Products');
      seoDesc = tDirect('meta_content_desc', 'Artigos, guias técnicos e insights da equipe Prime.');
    } else if (pageKey === 'contact') {
      seoTitle = tDirect('meta_contact_title', 'Fale Conosco | Prime Products');
      seoDesc = tDirect('meta_contact_desc', 'Entre em contato com nossa equipe comercial e de engenharia.');
    } else if (pageKey === 'solutions_medicao') {
      seoTitle = tDirect('meta_solutions_medicao_title', 'Instrumentação de Processo | Prime Products');
      seoDesc = tDirect('meta_solutions_medicao_desc', 'Transmissores, sensores, reguladores e sistemas de medição.');
    } else if (pageKey === 'solutions_analitica') {
      seoTitle = tDirect('meta_solutions_analitica_title', 'Instrumentação Analítica | Prime Products');
      seoDesc = tDirect('meta_solutions_analitica_desc', 'Analisadores de processo, cromatógrafos e detectores.');
    } else if (pageKey === 'solutions_seguranca') {
      seoTitle = tDirect('meta_solutions_seguranca_title', 'Segurança e Detecção | Prime Products');
      seoDesc = tDirect('meta_solutions_seguranca_desc', 'Combate a incêndio e sistemas de detecção de gases.');
    } else if (pageKey === 'solutions_integradas') {
      seoTitle = tDirect('meta_solutions_integradas_title', 'Soluções Integradas | Prime Products');
      seoDesc = tDirect('meta_solutions_integradas_desc', 'Skids e painéis customizados para sua planta.');
    } else if (pageKey === 'solutions_rede') {
      seoTitle = tDirect('meta_solutions_rede_title', 'Instalação de Rede de Gases | Prime Products');
      seoDesc = tDirect('meta_solutions_rede_desc', 'Projetos e montagem física de redes de distribuição.');
    } else if (pageKey === 'solutions_ar') {
      seoTitle = tDirect('meta_solutions_ar_title', 'Guia Técnico de Ar Comprimido | Prime Products');
      seoDesc = tDirect('meta_solutions_ar_desc', 'Conceitos técnicos e dimensionamento de ar comprimido.');
    } else if (pageKey === 'solutions_3d') {
      seoTitle = tDirect('meta_solutions_3d_title', 'Levantamento 3D e As-Built | Prime Products');
      seoDesc = tDirect('meta_solutions_3d_desc', 'Modelagem digital, escaneamento a laser e as-built.');
    } else if (pageKey === 'helio_py') {
      seoTitle = 'Soluciones de Helio | Prime Products';
      seoDesc = 'Distribución y tecnología de helio comprimido en Paraguay.';
    } else if (pageKey === 'cryotec_py') {
      seoTitle = 'Cryotec Paraguay | Prime Products';
      seoDesc = 'Soluciones criogénicas avanzadas para el mercado paraguayo.';
    }
  }

  const changeLanguage = (targetLang: Language) => {
    if (targetLang === language) return;
    const targetRoute = getEquivalentRoute(location.pathname, targetLang);
    navigate(targetRoute);
  };

  const t = (key: string, defaultValue?: string): string => {
    const dictionary = locales[language];
    const value = dictionary ? dictionary[key] : undefined;

    if (value !== undefined && value !== '') {
      return value;
    }

    if (language !== 'pt' && isDev) {
      console.error(`[i18n Coverage Error]: Missing translation for key: "${key}" in language: "${language}"`);
    }

    const ptValue = locales.pt[key];
    if (ptValue !== undefined && ptValue !== '') {
      return ptValue;
    }

    return defaultValue ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {pageKey && <SEOHead title={seoTitle} description={seoDesc} />}
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
