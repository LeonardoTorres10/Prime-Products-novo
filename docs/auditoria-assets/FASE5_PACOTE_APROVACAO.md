# PACOTE DE APROVAÇÃO DA FASE 5 (SAFE REFACTORING)

> **ATENÇÃO:** Nenhuma exclusão, movimentação ou refatoração foi executada. Este documento é o plano final preparado para chancela humana.

## 1. RESUMO DOS 45 CANDIDATOS (NÍVEL 4)

- **GRUPO A (Backup Exato Confirmado):** 32 arquivos.
- **GRUPO B (Possível Equivalente Visual, sem Hash exato):** 0 arquivos.
- **GRUPO C (Sem Backup de Nenhuma Espécie):** 8 arquivos.
- **GRUPO D (Dúvida de Referência Dinâmica/Parcial):** 5 arquivos.

*Nota Técnica: O Nível 2 (Imagens de catálogo estáticas, SEO, Lazy Load, Ocultas) está **100% blindado** e nenhuma imagem foi rebaixada para o Nível 4 por falha no Network.*

## 2. REVISÃO TÉCNICA DA ECONOMIA DE DISCO

O valor bruto de redução anteriormente citado de ~147 MB requer um detalhamento técnico rigoroso sobre o impacto *efetivo*:

* **Tamanho total dos 32 arquivos do Grupo A (serão removidos):** 122.01 MB
* **Tamanho total dos 8 arquivos do Grupo C (serão movidos para ARQUIVO/):** 5.34 MB

### Impacto no Working Directory (Seu disco local)
- A remoção do Grupo A apagará fisicamente 122.01 MB do seu HD local ativo.
- A movimentação do Grupo C (Para a pasta `ARQUIVO/`) **NÃO** reduzirá espaço físico, pois a pasta `ARQUIVO/` ainda reside dentro do mesmo volume.
- **Redução efetiva no Working Directory:** 122.01 MB.

### Impacto no Repositório Git (.git)
- O histórico do Git **NÃO** apaga blobs antigos instantaneamente. Portanto, o tamanho de `.git` e do repositório no GitHub permanecerá idêntico, a menos que comandos de rewrite de histórico (ex: `git filter-repo`) sejam executados, o que não faz parte do escopo.

### Impacto Efetivo no Build e Rede (Vite Bundle)
- A pasta `public/` é inteiramente copiada para a pasta `dist/` durante o processo de build do Vite. Portanto, toda imagem lá dentro, usada ou não, é enviada para a hospedagem do site (Servidor Final).
- A exclusão do Grupo A e a retirada do Grupo C da pasta `public/` para a pasta raiz `ARQUIVO/` impedirá que o Vite as copie.
- **Redução confirmada no diretório final de Build (`dist/`):** 127.35 MB.
- **Impacto no Bandwidth do Usuário Final:** Zero. (O navegador do visitante só baixa o que o HTML/CSS requisita, Nível 1. A presença desses arquivos no servidor não altera o peso da home).

## 3. SIMULAÇÃO DO DIFF (Fase 5)
- **Arquivos a serem deletados:** 32 (Listados no CSV com status EXCLUIR_PUBLIC_BACKUP_CONFIRMADO).
- **Arquivos a serem movidos:** 8 (De `public/images/... ` para `ARQUIVO/backup-pre-refactor/...`).
- **Referências a serem alteradas no código:** 0 (Nenhum código está apontando para estes 45 arquivos, conforme scan).
- **Componentes e Rotas Afetadas:** Nenhuma.

## 4. PLANO DE TESTES PÓS-EXECUÇÃO
1. `npm run build` - Garantir que compila com sucesso.
2. `npm run preview` - Servir o build final localmente.
3. Clicar em todas as categorias de produtos e soluções (Navegação base).
4. Abrir Console e Network no Chrome/Edge. Filtrar por erros 404 de Imagens.
5. Inspecionar Meta Tags/Open Graph nas rotas principais.

## 5. PLANO DE ROLLBACK
- **Para o Grupo C:** Como serão apenas movidos para `ARQUIVO/backup-pre-refactor/`, o rollback é um simples comando de copiar/colar de volta para a pasta de origem no `public/`.
- **Para o Grupo A:** Como já possuem cópia intacta em `ARQUIVO/`, o rollback é restaurar a cópia de segurança mapeada no CSV (Coluna `caminho_exato_backup`).
- Se feito usando Git: `git restore public/`.

## 6. PROPOSTA DE PILOTO (Para confiança da operação)
Antes de excluir as 32 duplicatas do Grupo A, testaremos com os 5 arquivos de menor risco:

1. /public/images/solucoes-integradas/prod-geracao-oxigenio.png
2. /public/images/produtos/regulador-gases-08.png
3. /public/images/produtos/produtos-bg-nostar.png
4. /public/images/solucoes-integradas/seguranca-e-automacao/seguranca-em-aumotacao-04.png
5. /public/images/solucoes-integradas/seguranca-e-automacao/seguranca-e-automacao-04.png

(Esses arquivos possuem Hash idêntico confirmado no backup e 0 conexões no código).

---

FASE 5 PREPARADA — AGUARDANDO AUTORIZAÇÃO EXPRESSA DA INGRID
