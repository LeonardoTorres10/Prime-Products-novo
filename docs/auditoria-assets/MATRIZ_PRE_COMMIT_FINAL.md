# MATRIZ PRÉ-COMMIT FINAL (REVISÃO DE ESCOPO)

## 1. Classificação dos 10 Arquivos Modificados

**A — CORREÇÃO DA FASE 5**
**B — ALTERAÇÃO LEGÍTIMA ANTERIOR DO SITE**
**C — ALTERAÇÃO VISUAL A REVISAR ("DARK WOW")**
**D — ALTERAÇÃO NÃO IDENTIFICADA**
**E — POSSÍVEL RESÍDUO / ACIDENTAL**

### 1. `src/data/catalogs/products/teknoValvesCatalog.ts`
- **Resumo do Diff:** Remoção da variável não utilizada `isMultiple`.
- **Linhas (Add/Rem):** +0 / -1
- **Tipo / Impacto:** Lógica (Refatoração de código). Impacto: NENHUM (Visual/Funcional).
- **Classificação:** **A — CORREÇÃO DA FASE 5**
- **Recomendação:** INCLUIR

### 2. `src/pages/content/ArticleDetail.tsx`
- **Resumo do Diff:** (1) Remoção de `ArrowRight` (autorizada). (2) Injeção pesada de visual: Overlays escuros, galerias de imagens condicionais e sobreposição de *cards* modernos.
- **Linhas (Add/Rem):** +53 / -26
- **Tipo / Impacto:** Layout, Imagens, Componentes. Impacto Visual: SIM. Funcional: SIM.
- **Classificação:** **MISTA (A + C)**
- **Recomendação:** REVISAR (Separar o commit do "ArrowRight" do resto visual).

### 3. `src/pages/Home.tsx`
- **Resumo do Diff:** Troca da estrutura de Depoimentos (adicionado *tags*, selos e *avatars* Unsplash) e alteração do `home_about_img` (trocou `home-about-ihm-new-2.jpg` por `imagem-para-home-site.png`).
- **Linhas (Add/Rem):** +46 / -4
- **Tipo / Impacto:** Conteúdo, Layout, Imagens. Impacto Visual: SIM. Funcional: NÃO.
- **Classificação:** **C — ALTERAÇÃO VISUAL A REVISAR**
- **Recomendação:** REVISAR

### 4. `src/pages/About.tsx`
- **Resumo do Diff:** Adição completa do bloco `ABOUT_TESTIMONIALS` (Depoimentos Institucionais) com selos de validação.
- **Linhas (Add/Rem):** +76 / -0
- **Tipo / Impacto:** Layout, Novos Blocos. Impacto Visual: SIM. Funcional: NÃO.
- **Classificação:** **C — ALTERAÇÃO VISUAL A REVISAR**
- **Recomendação:** REVISAR

### 5. `src/pages/solutions/SolutionsMain.tsx`
- **Resumo do Diff:** Adição completa do bloco `SOLUTIONS_TESTIMONIALS` de provas sociais.
- **Linhas (Add/Rem):** +76 / -0
- **Tipo / Impacto:** Layout, Novos Blocos. Impacto Visual: SIM. Funcional: NÃO.
- **Classificação:** **C — ALTERAÇÃO VISUAL A REVISAR**
- **Recomendação:** REVISAR

### 6. `src/pages/content/ContentMain.tsx`
- **Resumo do Diff:** Alteração do comportamento de fundo (`fixed inset-0`) simulando fundo 3D, inserção de overlay `black/60` e regras explícitas para imagem fallback (`capa-novos-2-corrigida.jpg`). Referência à nova imagem `hero-conteudo.jpg`.
- **Linhas (Add/Rem):** +23 / -8
- **Tipo / Impacto:** Layout, CSS/Classes. Impacto Visual: SIM. Funcional: NÃO.
- **Classificação:** **C — ALTERAÇÃO VISUAL A REVISAR**
- **Recomendação:** REVISAR

### 7. `src/pages/tools/ToolsMain.tsx`
- **Resumo do Diff:** Mesma estrutura do `ContentMain.tsx`. Alteração do container para renderizar a imagem como um `div` de posição fixa atrás de todos os elementos (`fixed inset-0 -z-50`).
- **Linhas (Add/Rem):** +3 / -3
- **Tipo / Impacto:** Layout, CSS/Classes. Impacto Visual: SIM. Funcional: NÃO.
- **Classificação:** **C — ALTERAÇÃO VISUAL A REVISAR**
- **Recomendação:** REVISAR

### 8. `src/data/defaultArticles.ts`
- **Resumo do Diff:** Renomeações nas propriedades `image` de 3 artigos: (`capa-novos-1.png` para `dossie-02.jpg`; `abrigo-manual.jpg` para `capa-manual-projeto.jpg`; `diesel-hidrogenio.png` para `dossie-03.jpg`). 
- **Linhas (Add/Rem):** +3 / -3
- **Tipo / Impacto:** Conteúdo (Metadados de imagens). Impacto Visual: SIM (troca os *thumbnails*). Funcional: NÃO.
- **Classificação:** **E — POSSÍVEL RESÍDUO** (Alterações feitas em sessão paralela não referenciada).
- **Recomendação:** REVISAR

### 9. `src/data/catalogs/products/tkfCatalog.ts`
- **Resumo do Diff:** Corrigindo maiúsculas/espaços em nomes de arquivo: (`Bend Fittings.jpeg` virou `bend-fittings.jpeg`).
- **Linhas (Add/Rem):** +1 / -1
- **Tipo / Impacto:** Conteúdo (Caminho de imagem). Impacto Visual: SIM (Corrige imagem quebrada em S3/Linux). Funcional: NÃO.
- **Classificação:** **B — ALTERAÇÃO LEGÍTIMA ANTERIOR**
- **Recomendação:** INCLUIR

### 10. `src/data/catalogs/products/type4Catalog.ts`
- **Resumo do Diff:** Corrigindo maiúsculas/espaços em nomes de arquivo (`Sistema de Fixação por Cintas.jpg` virou `sistema-de-fixacao-por-cintas.jpg`).
- **Linhas (Add/Rem):** +1 / -1
- **Tipo / Impacto:** Conteúdo (Caminho de imagem). Impacto Visual: SIM (Corrige imagem quebrada). Funcional: NÃO.
- **Classificação:** **B — ALTERAÇÃO LEGÍTIMA ANTERIOR**
- **Recomendação:** INCLUIR

---

## 2. Auditoria das Imagens Untracked

**1. `public/images/conteudos/hero-conteudo.jpg`**
- **Tamanho:** ~340KB | **Origem Provável:** Assets de demonstração inseridos na sessão visual "Wow".
- **Está referenciada no código?** SIM. Em `src/pages/content/ContentMain.tsx`.
- **Aparece no site renderizado?** Sim, como Background *fixed* (se o código C for aprovado).
- **Classificação:** **PENDENTE DE REVISÃO (Vinculada à classificação C)**.

**2. `public/images/home/imagem-para-home-site.png`**
- **Tamanho:** ~1MB | **Origem Provável:** Substituta visual da antiga `home-about-ihm-new-2.jpg` (que foi isolada no Grupo C).
- **Está referenciada no código?** SIM. Em `src/pages/Home.tsx` na tag *EditableElement*.
- **Classificação:** **PENDENTE DE REVISÃO (Vinculada à classificação C)**.

---

## 3. Revisão dos 40 Deletados (Grupos A e C)

Os **40 assets deletados** foram validados e continuam perfeitamente alinhados com o planejado:
- Nenhuma referência estática descoberta.
- Nenhuma das 40 imagens vazou pro `dist/` do Build atual.
- As cópias exatas encontram-se nos diretórios de `ARQUIVO/` e as temporárias nas `quarentenas/`.

---

## 4. MATRIZ EXATA PARA O FUTURO COMMIT SELETIVO

> [!WARNING]
> **O estado local atual contém múltiplas entregas misturadas.** É totalmente vetado utilizar `git commit -am` ou `git add .` neste momento, para evitar o vazamento de protótipos visuais para a auditoria de assets.

### ✅ COMMIT APROVADO (Pode ser adicionado)
Estes são os únicos arquivos e exclusões liberados técnica e escopialmente para o "Commit da Auditoria":
- `git rm` dos 40 assets (Grupo A e C) da pasta `public/`.
- `git add src/data/catalogs/products/teknoValvesCatalog.ts` (Remoção do `isMultiple`).
- `git add src/data/catalogs/products/tkfCatalog.ts` (Renomeação *case-sensitive* legítima).
- `git add src/data/catalogs/products/type4Catalog.ts` (Renomeação *case-sensitive* legítima).

### 🚧 PENDENTE DE REVISÃO HUMANA (Separar / Analisar)
Toda a iniciativa de modernização visual (Dark Wow). Se for publicar, deve ser em um **Commit Dedicado**:
- `src/pages/Home.tsx` (Layout de Depoimentos e nova capa)
- `src/pages/About.tsx` (Depoimentos)
- `src/pages/solutions/SolutionsMain.tsx` (Provas Sociais)
- `src/pages/content/ContentMain.tsx` (Overlay Hero)
- `src/pages/tools/ToolsMain.tsx` (Overlay Hero)
- `src/data/defaultArticles.ts` (Mudanças de imagens capa)
- `public/images/conteudos/hero-conteudo.jpg` (Adição)
- `public/images/home/imagem-para-home-site.png` (Adição)
- `src/pages/content/ArticleDetail.tsx` -> **CUIDADO!** Este arquivo deve ser fracionado (`git add -p`), adicionando a deleção do `ArrowRight`, mas isolando a implementação da `ARTICLE_GALLERY`.

### 🚫 NÃO INCLUIR / LIXO RELATÓRIO LOCAL (Untracked - Manter isolado)
Todos os logs e relatórios não devem poluir o repositório principal:
- `docs/auditoria-assets/` (Quarentenas, relatórios MD, Crawler JSON).
- `docs/scripts-auditoria/` (Scripts executores Node).
- `ARQUIVO/backup-pre-refactor/` (Backups pesados).
- `image_analysis.json` (Logs locais).
