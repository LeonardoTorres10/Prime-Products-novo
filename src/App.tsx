import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LanguageProvider } from './contexts/LanguageContext';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { SolutionsMain } from './pages/solutions/SolutionsMain';
import { InstrumentacaoMedicao } from './pages/solutions/InstrumentacaoMedicao';
import { InstrumentacaoAnalitica } from './pages/solutions/InstrumentacaoAnalitica';
import { GasesSeguranca } from './pages/solutions/GasesSeguranca';
import { Integradas } from './pages/solutions/Integradas';
import { InstalacaoRedeGases } from './pages/solutions/InstalacaoRedeGases';
import { GuiaArComprimido } from './pages/solutions/GuiaArComprimido';
import { EngenhariaDigital3D } from './pages/solutions/EngenhariaDigital3D';

import { ProductsMain } from './pages/products/ProductsMain';
import { ProductDetail } from './pages/products/ProductDetail';

import { ApplicationsMain } from './pages/applications/ApplicationsMain';
import { ApplicationDetail } from './pages/applications/ApplicationDetail';

import { ToolsMain } from './pages/tools/ToolsMain';
import { ToolsPro } from './pages/tools/ToolsPro';

import { ContentMain } from './pages/content/ContentMain';
import { ArticleDetail } from './pages/content/ArticleDetail';
import { NotFound } from './pages/NotFound';

import { HelioParaguay } from './pages/landing/HelioParaguay';
import { CryotecHome } from './pages/landing/CryotecHome';

export function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout>
          <Routes>
            {/* Portuguese (Default) */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/solucoes" element={<SolutionsMain />} />
            <Route path="/solucoes/instrumentacao-medicao" element={<InstrumentacaoMedicao />} />
            <Route path="/solucoes/instrumentacao-analitica" element={<InstrumentacaoAnalitica />} />
            <Route path="/solucoes/gases-seguranca-automacao" element={<GasesSeguranca />} />
            <Route path="/solucoes/integradas" element={<Integradas />} />
            <Route path="/solucoes/instalacao-rede-gases" element={<InstalacaoRedeGases />} />
            <Route path="/solucoes/ar-comprimido-industrial-guia-tecnico" element={<GuiaArComprimido />} />
            <Route path="/solucoes/engenharia-digital-3d" element={<EngenhariaDigital3D />} />
            <Route path="/produtos" element={<ProductsMain />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/aplicacoes" element={<ApplicationsMain />} />
            <Route path="/aplicacao/:id" element={<ApplicationDetail />} />
            <Route path="/ferramentas" element={<ToolsMain />} />
            <Route path="/ferramentas-pro" element={<ToolsPro />} />
            <Route path="/conteudo" element={<ContentMain />} />
            <Route path="/artigo/:id" element={<ArticleDetail />} />
            <Route path="/contato" element={<Contact />} />

            {/* Spanish (ES) */}
            <Route path="/es" element={<Home />} />
            <Route path="/es/sobre" element={<About />} />
            <Route path="/es/soluciones" element={<SolutionsMain />} />
            <Route path="/es/soluciones/instrumentacion-procesos" element={<InstrumentacaoMedicao />} />
            <Route path="/es/soluciones/instrumentacion-analitica" element={<InstrumentacaoAnalitica />} />
            <Route path="/es/soluciones/seguridad-deteccion-incendios" element={<GasesSeguranca />} />
            <Route path="/es/soluciones/integradas" element={<Integradas />} />
            <Route path="/es/soluciones/instalacion-redes-gases" element={<InstalacaoRedeGases />} />
            <Route path="/es/soluciones/guia-aire-comprimido-industrial" element={<GuiaArComprimido />} />
            <Route path="/es/soluciones/ingenieria-digital-3d" element={<EngenhariaDigital3D />} />
            <Route path="/es/productos" element={<ProductsMain />} />
            <Route path="/es/producto/:id" element={<ProductDetail />} />
            <Route path="/es/aplicaciones" element={<ApplicationsMain />} />
            <Route path="/es/aplicacion/:id" element={<ApplicationDetail />} />
            <Route path="/es/herramientas" element={<ToolsMain />} />
            <Route path="/es/calculadoras-prime" element={<ToolsPro />} />
            <Route path="/es/contenido" element={<ContentMain />} />
            <Route path="/es/articulo/:id" element={<ArticleDetail />} />
            <Route path="/es/contacto" element={<Contact />} />

            {/* English (EN) */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/solutions" element={<SolutionsMain />} />
            <Route path="/en/solutions/process-instrumentation" element={<InstrumentacaoMedicao />} />
            <Route path="/en/solutions/analytical-instrumentation" element={<InstrumentacaoAnalitica />} />
            <Route path="/en/solutions/gas-detection-fire-suppression" element={<GasesSeguranca />} />
            <Route path="/en/solutions/integrated-solutions" element={<Integradas />} />
            <Route path="/en/solutions/gas-network-installation" element={<InstalacaoRedeGases />} />
            <Route path="/en/solutions/industrial-compressed-air-guide" element={<GuiaArComprimido />} />
            <Route path="/en/solutions/3d-digital-engineering" element={<EngenhariaDigital3D />} />
            <Route path="/en/products" element={<ProductsMain />} />
            <Route path="/en/product/:id" element={<ProductDetail />} />
            <Route path="/en/applications" element={<ApplicationsMain />} />
            <Route path="/en/application/:id" element={<ApplicationDetail />} />
            <Route path="/en/tools" element={<ToolsMain />} />
            <Route path="/en/prime-calculators" element={<ToolsPro />} />
            <Route path="/en/content" element={<ContentMain />} />
            <Route path="/en/article/:id" element={<ArticleDetail />} />
            <Route path="/en/contact" element={<Contact />} />

            {/* Landings independentes */}
            <Route path="/es-py/soluciones/helio" element={<HelioParaguay />} />
            <Route path="/es-py/cryotec" element={<CryotecHome />} />
            
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}
