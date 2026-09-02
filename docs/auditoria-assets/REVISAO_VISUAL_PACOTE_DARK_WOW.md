# CHECKLIST DE APROVAÇÃO HUMANA (PACOTE VISUAL "DARK WOW")

Este documento lista todas as alterações estéticas e de layout contidas no pacote local. Navegue no servidor de preview local (`http://localhost:5173`) para validar cada página visualmente.

---

## HOME
- **ROTA:** `/`
- **ARQUIVOS MODIFICADOS RELACIONADOS:** `src/pages/Home.tsx`
- **ALTERAÇÃO PRINCIPAL:** Alteração do bloco de "Depoimentos" (agora com *tags*, selos técnicos e fotos de perfil Unsplash). Troca da imagem da seção *Hero/Sobre* (bloco 100% brasileiro).
- **IMAGENS NOVAS UTILIZADAS:** `public/images/home/imagem-para-home-site.png`
- **IMPACTO:** VISUAL E ESTRUTURAL

- [ ] APROVAR
- [ ] REVISAR
- [ ] REJEITAR

**Observações:** 
____________________________________________________

## QUEM SOMOS
- **ROTA:** `/quem-somos` (ou a rota definida no seu Router, normalmente `/about`)
- **ARQUIVOS MODIFICADOS RELACIONADOS:** `src/pages/About.tsx`
- **ALTERAÇÃO PRINCIPAL:** Inserção de um bloco totalmente novo de "Depoimentos Institucionais" (`ABOUT_TESTIMONIALS`) com selos.
- **IMAGENS NOVAS UTILIZADAS:** URLs externas (Unsplash) para avatares.
- **IMPACTO:** VISUAL E ESTRUTURAL

- [ ] APROVAR
- [ ] REVISAR
- [ ] REJEITAR

**Observações:** 
____________________________________________________

## CONTEÚDO
- **ROTA:** `/conteudos` (ou `/artigos` / rota de blog principal)
- **ARQUIVOS MODIFICADOS RELACIONADOS:** `src/pages/content/ContentMain.tsx`
- **ALTERAÇÃO PRINCIPAL:** Alteração agressiva de *background*. Fundo travado (`fixed inset-0 -z-50`) com escurecimento (`bg-black/60`). Injeção de lógica *fallback* forçando a imagem `capa-novos-2-corrigida.jpg` caso o CMS falhe.
- **IMAGENS NOVAS UTILIZADAS:** `public/images/conteudos/hero-conteudo.jpg`
- **IMPACTO:** VISUAL

- [ ] APROVAR
- [ ] REVISAR
- [ ] REJEITAR

**Observações:** 
____________________________________________________

## ARTIGOS
- **ROTA:** `/artigo/:id` (Testar no mínimo 2 IDs distintos)
- **ARQUIVOS MODIFICADOS RELACIONADOS:** `src/pages/content/ArticleDetail.tsx`
- **ALTERAÇÃO PRINCIPAL:** Escurecimento radical da capa do artigo com múltiplos *overlays* escuros e mudança da galeria de "Mais Artigos". Adição de um bloco condicional `ARTICLE_GALLERY` na base da página e interceptação de artigos com IDs específicos (`seguranca-producao-hidrogenio-anp`) para troca de capa forçada.
- **IMAGENS NOVAS UTILIZADAS:** Referências de galeria via constante no topo do arquivo.
- **IMPACTO:** VISUAL E FUNCIONAL

- [ ] APROVAR
- [ ] REVISAR
- [ ] REJEITAR

**Observações:** 
____________________________________________________

## SOLUÇÕES
- **ROTA:** `/solucoes-integradas`
- **ARQUIVOS MODIFICADOS RELACIONADOS:** `src/pages/solutions/SolutionsMain.tsx`
- **ALTERAÇÃO PRINCIPAL:** Inserção de um novo bloco de provas sociais (`SOLUTIONS_TESTIMONIALS`) antes das áreas técnicas.
- **IMAGENS NOVAS UTILIZADAS:** URLs externas (Unsplash) para avatares.
- **IMPACTO:** VISUAL E ESTRUTURAL

- [ ] APROVAR
- [ ] REVISAR
- [ ] REJEITAR

**Observações:** 
____________________________________________________

## FERRAMENTAS
- **ROTA:** `/ferramentas`
- **ARQUIVOS MODIFICADOS RELACIONADOS:** `src/pages/tools/ToolsMain.tsx`
- **ALTERAÇÃO PRINCIPAL:** Mudança estrutural do fundo, de um container CSS *fixed background* comum para uma estrutura absoluta (`fixed inset-0 -z-50`) análoga à da página de Conteúdos.
- **IMAGENS NOVAS UTILIZADAS:** Nenhuma local (Usa Unsplash).
- **IMPACTO:** VISUAL

- [ ] APROVAR
- [ ] REVISAR
- [ ] REJEITAR

**Observações:** 
____________________________________________________
