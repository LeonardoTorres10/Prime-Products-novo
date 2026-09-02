# Diagnóstico de Segurança P0 - Prime Products

## 1. Arquitetura Mapeada
- **FRONTEND:** React 18 + Vite + TailwindCSS.
- **BACKEND:** Micro-backend PHP (`/api/cms.php`).
- **CMS:** Customizado, rodando via Context API (`CMSContext.tsx`) no frontend, persistindo os dados em um arquivo JSON estático no servidor.
- **BANCO DE DADOS:** Não relacional/Arquivo estático (`data/cms-data.json`).
- **AUTENTICAÇÃO:** Validação de senha *hardcoded* (`prime@2025`) feita 100% no cliente (browser) via JavaScript.
- **SESSÃO:** `sessionStorage` com chave `prime_admin_auth`.

## 2. Investigação de `/login` e Admin
- **ROTA:** `/login`
- **COMPONENTE:** `Login.tsx`
- **ARQUIVO:** `src/contexts/CMSContext.tsx`
- **COMO A SENHA É VALIDADA:** Condicional simples `if (password === ADMIN_PASSWORD)`.
- **ONDE A VALIDAÇÃO ACONTECE:** CLIENTE (browser).
- **ADMIN VIA CLIENT-SIDE:** SIM. O usuário consegue forçar acesso administrativo apenas digitando `sessionStorage.setItem('prime_admin_auth', '1')` no console do navegador, pois as verificações da interface são baseadas apenas nesse booleano local.

## 3. Busca de Segredos
**ID 1:**
- **TIPO:** Senha Administrativa
- **ARQUIVO:** `src/contexts/CMSContext.tsx` (linha 7)
- **LINHA:** `const ADMIN_PASSWORD = 'prime@••••';`
- **EXPOSTO NO CLIENTE:** SIM (Agrupado no bundle final do Vite).
- **PRESENTE NO GIT:** SIM.
- **SEVERIDADE:** CRÍTICA

**ID 2:**
- **TIPO:** API Key (Chave de autorização de escrita do backend)
- **ARQUIVO:** `src/contexts/CMSContext.tsx` e `public/api/cms.php`
- **LINHA:** `const CMS_API_KEY = 'prime_cms_••••••••••';`
- **EXPOSTO NO CLIENTE:** SIM.
- **PRESENTE NO GIT:** SIM.
- **SEVERIDADE:** CRÍTICA

## 4. Vite e Variáveis de Ambiente
Nenhuma variável `VITE_*` ou arquivo `.env` foi encontrado exposto. O projeto não está usando variáveis de ambiente de injeção na build.

## 5. Histórico Git
**ACHADOS:**
Tanto a senha de admin quanto o token de backend (API Key) estão presentes de forma plain-text no histórico do Git.

## 6. Sessão e Autenticação
- **MECANISMO:** `sessionStorage` (armazenamento local efêmero).
- **COOKIES DE SESSÃO:** Inexistentes. Não há `HttpOnly`, `Secure` ou `SameSite`.
- **PROTEÇÕES:** Não há proteção CSRF, MFA, limitação de tentativas de login (brute-force livre no cliente), nem expiração baseada em tempo (expira apenas ao fechar a aba).

## 7. Endpoints Administrativos
- **ENDPOINT/FUNÇÃO:** `/api/cms.php` (POST) para salvar elementos, artigos e itens de navegação.
- **AUTENTICAÇÃO EXIGIDA:** Header `X-Auth-Key`.
- **AUTORIZAÇÃO NO SERVIDOR:** INDETERMINADO/FRACA. O PHP checa se `X-Auth-Key` corresponde ao `API_KEY`. Mas o `API_KEY` está hardcoded no próprio frontend público, então na prática não há defesa do lado do servidor se um atacante observar os *Network requests*.

## 8. Formulários (Mapeamento)
- **Newsletter** (Footer - `Layout.tsx`): 
  - AÇÃO ATUAL: Previne default, sem processamento (`e.preventDefault()`).
  - DADOS SAEM DO BROWSER: NÃO.
  - E-MAIL REAL É ENVIADO: NÃO.
- **Contato** (`Contact.tsx`): 
  - AÇÃO ATUAL: Apenas validação visual local; envio fake simulando loading de 1s.
  - DADOS SAEM DO BROWSER: NÃO.
  - E-MAIL REAL É ENVIADO: NÃO.
- **Cotação** (`ProductDetail.tsx`): 
  - AÇÃO ATUAL: Formulário sem `action`, simula submissão.
  - DADOS SAEM DO BROWSER: NÃO.
  - E-MAIL REAL É ENVIADO: NÃO.

## 9. Headers e Configurações de Segurança
Não existe `.htaccess` configurado.
- **CSP (Content Security Policy):** NÃO implementado.
- **HSTS:** NÃO implementado.
- **X-Content-Type-Options / X-Frame-Options:** NÃO implementados.

## 10. Dependências (Auditoria Passiva)
Resultados do `npm audit`:
- **Vulnerabilidades Críticas:** 0
- **Altas:** 5 (`vite`, `react-router`, `react-router-dom`)
- **Médias:** 0
- **Baixas:** 1

---

## 11. Relatório de Correções (Roadmap)

### P0 — CRÍTICO
- **ID 01: Bypass de Autenticação / Validação no Cliente**
  - **Arquivo:** `CMSContext.tsx`
  - **Evidência:** `if (password === ADMIN_PASSWORD)` e `sessionStorage.setItem('prime_admin_auth', '1')`.
  - **Impacto:** Acesso total à interface administrativa por edição de variáveis client-side.
  - **Correção:** Mover a validação de senha para `/api/cms.php` e implementar JWT ou Sessions baseadas no backend.
  - **Pode corrigir sem alterar arquitetura?** NÃO (Exige Backend).

- **ID 02: Vazamento de Segredos (API Key / Senha)**
  - **Arquivo:** Git History, `CMSContext.tsx`, JS Bundles.
  - **Evidência:** Segredos estáticos injetados na compilação.
  - **Impacto:** Permite envio de POST para o backend ignorando completamente a interface.
  - **Correção:** Remover do repositório, invalidar a chave e usar variáveis de ambiente no servidor (.env para o PHP).
  - **Pode corrigir sem alterar arquitetura?** NÃO.

### P1 — ALTO
- **ID 03: Vulnerabilidades de NPM e Headers HTTP**
  - **Evidência:** 5 vulnerabilidades altas no react-router/vite e ausência de `.htaccess`.
  - **Impacto:** Risco de Cross-Site Scripting (XSS), DoS e Clickjacking.
  - **Correção:** Criar `.htaccess` com headers restritivos e atualizar pacotes npm.
  - **Pode corrigir sem alterar arquitetura?** SIM.

### P2 — MÉDIO
- **ID 04: Sessão em sessionStorage**
  - **Evidência:** Uso de sessionStorage sem cookies `HttpOnly`.
  - **Impacto:** Tokens/Chaves podem ser roubados via XSS.
  - **Correção:** Implementar cookies Secure+HttpOnly.
  - **Pode corrigir sem alterar arquitetura?** NÃO.

### P3 — BAIXO
- **ID 05: Formulários Ocos**
  - **Evidência:** Forms previnem default e não enviam para CRM/Backend.
  - **Impacto:** Nenhum dano à infraestrutura, mas não há captação de Leads.
  - **Correção:** Integrar via API de terceiro (ex: EmailJS, SendGrid).
  - **Pode corrigir sem alterar arquitetura?** SIM.
