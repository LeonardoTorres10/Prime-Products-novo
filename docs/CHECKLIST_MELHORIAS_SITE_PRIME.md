# Checklist Técnico V1 - Site Prime Products

Este documento consolida a auditoria do site publicado (`https://www.primeproducts.ind.br`) e do repositório local (`C:\Site-prime-products`). Nenhuma alteração foi realizada.

## Legenda de Prioridade
* **P0**: Erro crítico ou funcional.
* **P1**: Problema importante de credibilidade, conversão, SEO estrutural ou conteúdo estratégico.
* **P2**: Melhoria de padrão visual, SEO on-page, acessibilidade ou desempenho.
* **P3**: Refinamento de código, evolução futura ou migração tecnológica.

---

### 1. Contato e Produtos / Captação de Leads
* **Página/Rota:** `/contato` e `/produto/:id`
* **Problema:** Canal crítico pendente de teste controlado.
* **Evidência:** Os arquivos `Contact.tsx` e `ProductDetail.tsx` executam uma chamada real via `fetch('/api/send-mail.php')`. O disparo de um cURL com requisição **HEAD** retornou `HTTP 405 Method Not Allowed`, o que confirma que o endpoint existe e aguarda requisições POST, mas não comprova o seu funcionamento interno.
* **Impacto:** Sendo o principal canal de entrada, qualquer falha no envio de e-mails custa leads.
* **Recomendação:** Realizar teste controlado enviando dados reais no formulário e confirmar recebimento na caixa de e-mail. Validar tratamento de erros no frontend.
* **Prioridade:** P0
* **Esforço Estimado:** Baixo (1h)
* **Responsável:** Desenvolvedor
* **Dependências:** Monitoramento do servidor de e-mail
* **Status:** Aberto

### 2. Global / SEO Técnico e Rastreadores
* **Página/Rota:** `/*` (Global)
* **Problema:** Falso-positivo (Soft 404) para arquivos essenciais de SEO.
* **Evidência:** Os acessos a `robots.txt` e `sitemap.xml` retornam HTTP 200 OK, porém o Content-Type retornado é `text/html`. O servidor roteia os arquivos inexistentes para o `index.html` da SPA.
* **Impacto:** O Googlebot tentará rastrear o site baseando-se no código HTML, ignorando diretrizes.
* **Recomendação:** Criar fisicamente `robots.txt`. O `sitemap.xml` não deve conter apenas as 21 declarações do `App.tsx`, mas sim listar as URLs reais e canônicas, incluindo cada produto, aplicação e artigo gerado pelas rotas dinâmicas.
* **Prioridade:** P1
* **Esforço Estimado:** Baixo (2h)
* **Responsável:** Desenvolvedor Front-end / SEO
* **Dependências:** Script gerador de sitemap para rotas dinâmicas
* **Status:** Aberto

### 3. Conteúdo / Dewars e Recipientes Criogênicos
* **Página/Rota:** `/produto/dewars-criogenicos`
* **Problema:** Conteúdo técnico pendente de validação e revisão técnica.
* **Evidência:** As especificações (capacidade de 10 a 450 litros, normas DOT-4L, garantias) estão fixadas no dicionário `PRODUCT_DATA`.
* **Impacto:** Informações comerciais imprecisas ou desatualizadas podem gerar passivos com o cliente final e promessas irreais.
* **Recomendação:** A equipe técnica deve validar cada linha e capacidade informada no catálogo antes da aprovação final.
* **Prioridade:** P1
* **Esforço Estimado:** Médio (Revisão manual)
* **Responsável:** Engenharia / Qualidade Prime
* **Dependências:** Auditoria de portfólio físico
* **Status:** Aberto

### 4. Conteúdo Estratégico / Engenharia Aplicada
* **Página/Rota:** `/solucoes/integradas`
* **Problema:** Falta de destaque isolado para a frente de Engenharia Aplicada.
* **Evidência:** Não há rota exclusiva para Engenharia Aplicada, dividindo espaço com Soluções Integradas, embora já tenha sido identificada pela direção como foco crítico.
* **Impacto:** Dificulta a apresentação de "cases de sucesso" em engenharia, embolando serviços de alto valor agregado com venda de equipamentos simples.
* **Recomendação:** Avaliar com a diretoria a separação do conteúdo em uma Landing Page técnica exclusiva.
* **Prioridade:** P1
* **Esforço Estimado:** Médio (Design + Dev)
* **Responsável:** Diretoria / Marketing
* **Dependências:** Escopo comercial definido
* **Status:** Aberto

### 5. Global / Analytics, Tag Manager e Search Console
* **Página/Rota:** `/*` (Global - `index.html`)
* **Problema:** Ferramentas de medição e verificação de propriedade do Google estão ausentes.
* **Evidência:** Inspecionado o `index.html` sem sucesso na busca por trackers.
* **Impacto:** Cegueira analítica sobre acessos e impossibilidade de monitorar erros de indexação orgânica.
* **Recomendação:** Escolher e implementar GA4 via código direto OU pelo Google Tag Manager (não duplicar). Adicionalmente, verificar a propriedade no Google Search Console (via DNS TXT ou meta tag HTML) para acompanhamento de SEO.
* **Prioridade:** P1
* **Esforço Estimado:** Baixo (1h)
* **Responsável:** Marketing / Dev
* **Dependências:** Acesso de administrador ao painel de domínio/Google
* **Status:** Aberto

### 6. Global / Conformidade LGPD e Cookies
* **Página/Rota:** `/*` (Global)
* **Problema:** Gestão de privacidade e cookies operando sem documentação visível.
* **Evidência:** Não foi identificado banner de consentimento ou página de Política de Privacidade publicadas.
* **Impacto:** Risco legal se houver ativação futura de rastreadores sem consentimento explícito.
* **Recomendação:** Levantar com o jurídico quais cookies são realmente utilizados e qual o embasamento legal. Não implementar banner automaticamente antes desse levantamento técnico e jurídico.
* **Prioridade:** P1
* **Esforço Estimado:** Médio (4h)
* **Responsável:** Jurídico
* **Dependências:** Parecer jurídico
* **Status:** Aberto

### 7. Global / Indexação e SEO Estrutural para SPA
* **Página/Rota:** `/*` (Global)
* **Problema:** SPA (Single Page Application) servida inteiramente via JavaScript, sem metadados por página.
* **Evidência:** O servidor devolve a mesma base de HTML (`index.html`) sem variação de `<title>` ou `<meta>` por rota, dificultando a leitura de robôs antigos ou a criação de cartões ricos (Open Graph) em redes sociais.
* **Impacto:** Prejuízo na capacidade de rankear organicamente palavras-chave específicas (Long-tail) de produtos e soluções.
* **Recomendação:** Tratar SEO estrutural da SPA como um projeto separado, avaliando alternativas de pré-renderização ou injeção dinâmica de metadados adequada ao pipeline atual.
* **Prioridade:** P2
* **Esforço Estimado:** Alto (Projeto Separado)
* **Responsável:** Desenvolvedor Front-end / Arquiteto
* **Dependências:** Nenhuma
* **Status:** Aberto

### 8. Navegação / Tratamento de Erros (404)
* **Página/Rota:** `App.tsx`
* **Problema:** Ausência de rota Catch-all (`*`) para página não encontrada.
* **Evidência:** Código do Roteador React sem mapeamento para fallback.
* **Impacto:** Tela em branco e falha console em links quebrados.
* **Recomendação:** Adicionar `<Route path="*" element={<NotFound />} />` com call-to-action para a home.
* **Prioridade:** P2
* **Esforço Estimado:** Baixo (1h)
* **Responsável:** Desenvolvedor Front-end
* **Dependências:** Nenhuma
* **Status:** Aberto

### 9. Arquitetura e Conteúdo / Dívida Técnica (CMS)
* **Página/Rota:** `/produtos`, `/conteudo`, `/aplicacoes`
* **Problema:** Gestão dependente de deploy de código (`PRODUCT_DATA`).
* **Evidência:** Todo o inventário está *hardcoded* nos arquivos Typescript.
* **Impacto:** Gargalo para a equipe de Marketing atualizar descrições.
* **Recomendação:** Em fase posterior, planejar a implantação de um CMS para gestão de portfólio, catálogos e conteúdo.
* **Prioridade:** P3
* **Esforço Estimado:** Muito Alto (Planejamento)
* **Responsável:** Arquiteto de Software
* **Dependências:** Definição orçamentária
* **Status:** Aberto

---

## Auditoria visual e de conteúdo ainda pendente
As análises listadas acima compõem um diagnóstico de infraestrutura e regras de negócio essenciais. Ainda é obrigatória a realização de uma auditoria detalhada que deve abranger:

* **Páginas individuais:** Revisão de layout, responsividade e alinhamento do grid.
* **Mobile:** Validação dos menus de hambúrguer, áreas de toque e espaçamentos (padding/margin) em telas menores.
* **Acessibilidade:** Conferência de contraste de cores, suporte a leitores de tela e estrutura semântica HTML (labels, aria-tags).
* **CTAs (Call to Actions):** Checagem da eficácia, visibilidade e roteamento de todos os botões e links de WhatsApp.
* **Imagens:** Análise rigorosa do peso residual de arquivos (ex: logo PNG vs WebP), alt-texts e cortes na versão desktop/mobile.
* **Links e Textos:** Verificação de links quebrados entre páginas do portal e precisão da linguagem comercial e ortografia em todo o escopo de conteúdo.
