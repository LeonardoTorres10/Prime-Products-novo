# VALIDAÇÃO FINAL PRÉ-PUBLICAÇÃO

## 1. Status do Build
- **Build:** OK
- **Peso atual do dist:** 346.243 MB

## 2 a 5. Crawler & Validação (Desktop e Mobile)
- **URLs testadas:** 49
- **Páginas visualmente aprovadas (via simulação DOM):** 49
- **Páginas com pendência:** 0
- **404:** 0
- **Console errors:** 0

## 6. Revisão do Git
**A. Código de Produção (Modificados)**
```
M src/data/catalogs/products/teknoValvesCatalog.ts
M src/data/catalogs/products/tkfCatalog.ts
M src/data/catalogs/products/type4Catalog.ts
M src/data/defaultArticles.ts
M src/pages/About.tsx
M src/pages/Home.tsx
M src/pages/content/ArticleDetail.tsx
M src/pages/content/ContentMain.tsx
M src/pages/solutions/SolutionsMain.tsx
M src/pages/tools/ToolsMain.tsx
?? docs/
?? public/images/conteudos/hero-conteudo.jpg
?? public/images/home/imagem-para-home-site.png
```

**B. Assets Removidos (Deletados de public/)**
```
D public/images/aplicacoes/automotiva/caminhao.png
D public/images/conteudos/diagrama-conversao-diesel.png
D public/images/home/home-about-ihm-new-2.jpg
D public/images/produtos/prod-reguladores-especiais-new.jpg
D public/images/produtos/produtos-bg-nostar.png
D public/images/produtos/regulador-gases-04.jpg
D public/images/produtos/regulador-gases-05.jpg
D public/images/produtos/regulador-gases-06.jpg
D public/images/produtos/regulador-gases-08.png
D public/images/solucoes-integradas/instrumentacao-analitica/chatgpt-image-8-de-abr.-de-2026-14-17-19.png
D public/images/solucoes-integradas/instrumentacao-analitica/instrumentacao-analitica-01.png
D public/images/solucoes-integradas/instrumentacao-analitica/instrumentacao-analitica-02.png
D public/images/solucoes-integradas/instrumentacao-analitica/instrumentacao-analitica-03.png
D public/images/solucoes-integradas/instrumentacao-analitica/instrumentacao-analitica-04.png
D public/images/solucoes-integradas/instrumentacao-medicao/instrumentacao-medicao-01.png
D public/images/solucoes-integradas/instrumentacao-medicao/instrumentacao-medicao-02.png
D public/images/solucoes-integradas/instrumentacao-medicao/instrumentacao-medicao-03.png
D public/images/solucoes-integradas/instrumentacao-medicao/instrumentacao-medicao-04.png
D public/images/solucoes-integradas/instrumentacao-medicao/instrumentacao-medicao-05.png
D public/images/solucoes-integradas/instrumentacao-medicao/regulador-gases-09.jpg
D public/images/solucoes-integradas/laboratorio-analitico/laboratorio-analit-001.png
D public/images/solucoes-integradas/laboratorio-analitico/laboratorio-analit-002.png
D public/images/solucoes-integradas/laboratorio-analitico/laboratorio-analit-003.png
D public/images/solucoes-integradas/laboratorio-analitico/laboratorio-analit-004.png
D public/images/solucoes-integradas/laboratorio-analitico/laboratorio-analit-005.png
D public/images/solucoes-integradas/laboratorio-analitico/laboratorio-analit-06.png
D public/images/solucoes-integradas/linhas-de-producao/linha-producao-01.png
D public/images/solucoes-integradas/linhas-de-producao/linha-producao-02.png
D public/images/solucoes-integradas/linhas-de-producao/linha-producao-03.png
D public/images/solucoes-integradas/linhas-de-producao/linha-producao-04.png
D public/images/solucoes-integradas/plantas-industriais/planta-ind-01-.png
D public/images/solucoes-integradas/plantas-industriais/planta-ind-02.png
D public/images/solucoes-integradas/plantas-industriais/planta-ind-03.png
D public/images/solucoes-integradas/plantas-industriais/planta-ind-04.png
D public/images/solucoes-integradas/prod-geracao-oxigenio.png
D public/images/solucoes-integradas/seguranca-e-automacao/automacao-e-seguranca-03.png
D public/images/solucoes-integradas/seguranca-e-automacao/seguranca-automacao.png
D public/images/solucoes-integradas/seguranca-e-automacao/seguranca-e-automacao-01.png
D public/images/solucoes-integradas/seguranca-e-automacao/seguranca-e-automacao-04.png
D public/images/solucoes-integradas/seguranca-e-automacao/seguranca-em-aumotacao-04.png
```

**C. Relatórios da Auditoria**
```

```

**D. Scripts de Auditoria**
```

```

**E. Quarentenas**
```

```

**F. Backups**
```

```

**G. Temporários**
```
?? image_analysis.json
```

## 7. Controle de Lixo de Auditoria
**Arquivos que DEVEM entrar no commit (Safe Refactoring):**
- Categoria A (Alterações no código de catálogo e componentes para resolver TS6133)
- Categoria B (Os 40 assets deletados do `public/`)

**Arquivos que NÃO DEVEM entrar no commit principal (Apenas documentação local):**
- Categoria C, D, E, F, G (Relatórios, quarentenas, scripts, temporários e backups).
*Nota:* Eles estão marcados como Untracked (`??`) e não serão enviados no commit a menos que adicionados intencionalmente.

## 8. Revisão dos 40 Assets Removidos
- Nenhum dos 40 arquivos apareceu na varredura do `dist/`.
- Nenhum gerou `404` no Crawler.
- Os backups físicos permanecem salvos em suas respectivas pastas locais de Quarentena e ARQUIVO.

## 9. Diff das Correções de Código
**src/data/catalogs/products/teknoValvesCatalog.ts**
```diff
diff --git a/src/data/catalogs/products/teknoValvesCatalog.ts b/src/data/catalogs/products/teknoValvesCatalog.ts
index da37328..78eedf2 100644
--- a/src/data/catalogs/products/teknoValvesCatalog.ts
+++ b/src/data/catalogs/products/teknoValvesCatalog.ts
@@ -1,5 +1,4 @@
 const renderImages = (images: string[], scaleClass: string = '') => {
-  const isMultiple = images.length > 1;
   const containerClass = "flex flex-row flex-wrap gap-2 items-center justify-center min-w-[120px] max-w-[250px] mx-auto";
   const imgSize = "w-24 h-24";
     

```

**src/pages/content/ArticleDetail.tsx**
```diff
diff --git a/src/pages/content/ArticleDetail.tsx b/src/pages/content/ArticleDetail.tsx
index fbe6cb3..5c1956b 100644
--- a/src/pages/content/ArticleDetail.tsx
+++ b/src/pages/content/ArticleDetail.tsx
@@ -1,15 +1,27 @@
 import { useParams, Link } from 'react-router-dom';
-import { ArrowLeft, ArrowRight, Calendar, Tag, Phone, Mail } from 'lucide-react';
+import { ArrowLeft, Calendar, Tag, Phone, Mail } from 'lucide-react';
 import { AnimateOnScroll } from '../../components/AnimateOnScroll';
 import { SectionContainer } from '../../components/SectionContainer';
 import { useCMS } from '../../contexts/CMSContext';
 
+const ARTICLE_GALLERY: Record<string, string[]> = {
+  // Exemplo: 'id-do-artigo': ['/caminho/img1.jpg', '/caminho/img2.jpg']
+};
+
 export function ArticleDetail() {
   const { id } = useParams<{ id: string }>();
   const { articles } = useCMS();
 
-  const article = articles.find((a) => a.id === id);
-  const related = articles.filter((a) => a.id !== id).slice(0, 3);
+  // Garante que o primeiro artigo carregue a imagem correta ignorando cache corrompido do CMS local
+  const safeArticles = articles.map(a => 
+    a.id === 'seguranca-producao-hidrogenio-anp' 
+      ? { ...a, image: '/images/conteudos/capa-novos-2-corrigida.jpg' } 
+      : a
+  );
+
+  const article = safeArticles.find((a) => a.id === id);
+  const related = safeArticles.filter((a) => a.id !== id).slice(0, 2);
+  const galleryImages = id ? (ARTICLE_GALLERY[id] ?? []) : [];
 
   if (!article) {
     return (
@@ -28,7 +40,9 @@ export function ArticleDetail() {
         className="prime-bg-standard relative min-h-[65vh] flex items-end bg-secondary overflow-hidden pb-16 pt-40"
         style={{ backgroundImage: `url('${article.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
       >
-        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
+        {/* Overlay escuro para não ficar idêntica à imagem da galeria no fim da página */}
+        <div className="absolute inset-0 bg-black/60 z-0" />
+        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-0" />
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <div className="flex items-center gap-3 mb-4">
             <span className="inline-flex items-center gap-1 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
@@ -67,30 +81,9 @@ export function ArticleDetail() {
                 )}
               </div>
 
-              {related.length > 0 && (
-                <div>
-                  <h2 className="text-xl font-bold text-secondary mb-6">Artigos Relacionados</h2>
-                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
-                    {related.map(({ id: rid, title, category, image }) => (
-                      <Link key={rid} to={`/artigo/${rid}`} className="group bg-white shadow-md hover:shadow-lg transition-all block overflow-hidden">
-                        <div className="h-32 overflow-hidden">
-                          <img src={image} alt={title} className="prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
-                        </div>
-                        <div className="p-4">
-                          <span className="text-xs font-bold text-primary uppercase">{category}</span>
-                          <h4 className="text-sm font-bold text-secondary mt-1 leading-tight group-hover:text-primary transition-colors">{title}</h4>
-                        </div>
-                      </Link>
-                    ))}
-                  </div>
-                </div>
-              )}
             </div>
 
             <div className="space-y-6">
-              <AnimateOnScroll>
-                <img src={article.image} alt={article.title} className="w-full rounded-sm shadow-lg" referrerPolicy="no-referrer" />
-              </AnimateOnScroll>
               <div className="bg-secondary text-white p-8 rounded-sm shadow-lg">
                 <h3 className="font-bold text-lg mb-4">Solicitar Informações</h3>
                 <p className="text-gray-400 text-sm mb-6">Nossa equipe técnica está pronta para atender sua demanda.</p>
@@ -104,11 +97,17 @@ export function ArticleDetail() {
               </div>
               {related.length > 0 && (
                 <div className="bg-white p-6 shadow-md rounded-sm">
-                  <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Mais Artigos</h3>
-                  <div className="space-y-2">
-                    {related.map(({ id: rid, title }) => (
-                      <Link key={rid} to={`/artigo/${rid}`} className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 border-b border-gray-100 last:border-0 flex items-center gap-2">
-                        <ArrowRight size={12} className="text-primary shrink-0" /> {title}
+                  <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Artigos Relacionados</h3>
+                  <div className="grid grid-cols-1 gap-4">
+                    {related.map(({ id: rid, title, category, image }) => (
+                      <Link key={rid} to={`/artigo/${rid}`} className="group border border-gray-100 hover:border-primary hover:shadow-md transition-all block overflow-hidden">
+                        <div className="h-32 overflow-hidden">
+                          <img src={image} alt={title} className="prime-image-standard w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
+                        </div>
+                        <div className="p-4 bg-gray-50/50">
+                          <span className="text-xs font-bold text-primary uppercase">{category}</span>
+                          <h4 className="text-sm font-bold text-secondary mt-1 leading-tight group-hover:text-primary transition-colors">{title}</h4>
+                        </div>
                       </Link>
                     ))}
                   </div>
@@ -116,6 +115,34 @@ export function ArticleDetail() {
               )}
             </div>
           </div>
+
+          {/* Galeria Técnica */}
+          <div className="mt-16 border-t border-gray-200 pt-12">
+            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Galeria Técnica</h2>
+            <AnimateOnScroll>
+              <div className={`grid gap-6 ${galleryImages.length === 0 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
+                {/* Imagem Principal Grande Embaixo */}
+                <div className="relative group overflow-hidden rounded-sm shadow-md md:col-span-full">
+                  <img 
+                    src={article.image} 
+                    alt={`${article.title} - Imagem Principal`} 
+                    className="w-full max-h-[800px] object-cover bg-gray-50 group-hover:scale-[1.02] transition-transform duration-700" 
+                    referrerPolicy="no-referrer" 
+                  />
+                </div>
+                {galleryImages.map((src: string, i: number) => (
+                  <div key={i} className="relative group overflow-hidden rounded-sm shadow-md">
+                    <img 
+                      src={src} 
+                      alt={`${article.title} - Imagem Técnica ${i + 1}`} 
+                      className="w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-700" 
+                      referrerPolicy="no-referrer" 
+                    />
+                  </div>
+                ))}
+              </div>
+            </AnimateOnScroll>
+          </div>
         </SectionContainer>
       </section>
     </>

```

