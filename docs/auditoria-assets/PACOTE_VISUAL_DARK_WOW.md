# PACOTE VISUAL "DARK WOW" (PENDENTE DE REVISÃO)

Este pacote isola todas as alterações de interface criadas para modernizar o visual (implementação de depoimentos, backgrounds 3D, overlays escuros e reestruturação de componentes). **Nada daqui foi enviado ao Git.**

### 1. src/pages/About.tsx
- **Alteração:** Adição de `ABOUT_TESTIMONIALS` e blocos de depoimentos com selos e tags.
- **Página:** Quem Somos
- **Impacto:** Alta visibilidade (novo bloco inteiro na página).
- **Imagens:** URLs Unsplash de perfil.
- **Aprovação:** SIM, REQUER APROVAÇÃO.
- **Recomendação:** REVISAR bloco a bloco se o copy está alinhado com a diretoria.

### 2. src/pages/Home.tsx
- **Alteração:** Refatoração de `TESTIMONIALS`, tags, logos e mudança da imagem de capa `home-about-ihm-new-2.jpg` por `imagem-para-home-site.png`.
- **Página:** Home
- **Impacto:** Alta visibilidade no site principal.
- **Imagens:** `imagem-para-home-site.png`.
- **Aprovação:** SIM, REQUER APROVAÇÃO.
- **Recomendação:** REVISAR se a troca de prova social e imagem herói reflete o desejado.

### 3. src/pages/content/ArticleDetail.tsx
- **Alteração:** Adição de Overlays Escuros (`bg-black/60`), lógica para `safeArticles` e bloco `ARTICLE_GALLERY`.
- **Página:** Artigos Individuais
- **Impacto:** Layout de capa escurecido e possível quebra se galeria não estiver formatada.
- **Imagens:** Diversas, manipuladas em array vazio.
- **Aprovação:** SIM, REQUER APROVAÇÃO.
- **Recomendação:** REVISAR pois o *fallback* técnico injetado para forçar `capa-novos-2-corrigida.jpg` pode não ser ideal em produção.

### 4. src/pages/content/ContentMain.tsx
- **Alteração:** Modificação da tag de Fundo para Overlay `fixed inset-0 -z-50` simulando Parallax/3D. Fundo apontado para `hero-conteudo.jpg`.
- **Página:** Conteúdos / Artigos
- **Impacto:** Toda a listagem de artigos fica com fundo estático escuro/vibrante.
- **Imagens:** `hero-conteudo.jpg`.
- **Aprovação:** SIM, REQUER APROVAÇÃO.
- **Recomendação:** REVISAR teste visual intenso e contraste das fontes na tela inteira.

### 5. src/pages/solutions/SolutionsMain.tsx
- **Alteração:** Adição de `SOLUTIONS_TESTIMONIALS`.
- **Página:** Soluções
- **Impacto:** Novo componente ocupando espaço relevante.
- **Imagens:** URLs Unsplash de perfil.
- **Aprovação:** SIM, REQUER APROVAÇÃO.
- **Recomendação:** Idem About.

### 6. src/pages/tools/ToolsMain.tsx
- **Alteração:** Modificação de container para fundo Dark Parallax análogo a `ContentMain.tsx`.
- **Página:** Ferramentas
- **Impacto:** Troca drástica de cor de fundo global da view.
- **Imagens:** URL externa original, mas agora travada em `-z-50`.
- **Aprovação:** SIM, REQUER APROVAÇÃO.
- **Recomendação:** Avaliar harmonia de *scroll* nos monitores maiores.

### 7. public/images/conteudos/hero-conteudo.jpg
- **Alteração:** Novo Asset Untracked (~340KB).
- **Impacto:** Imagem de alta resolução para background dos conteúdos.
- **Aprovação:** SIM.
- **Recomendação:** Avaliar se a arte final é a definitiva (ou se deve usar compressão WebP).

### 8. public/images/home/imagem-para-home-site.png
- **Alteração:** Novo Asset Untracked (~1MB).
- **Impacto:** Capa do bloco "Sobre nós" na Home.
- **Aprovação:** SIM.
- **Recomendação:** Exige pesada otimização antes de subir, pois PNG fotográfico de 1MB vai ferir LCP (Largest Contentful Paint).

