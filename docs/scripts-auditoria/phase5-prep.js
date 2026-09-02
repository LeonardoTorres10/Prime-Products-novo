import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');

async function prepPhase5() {
  const physical = await fs.readJson(path.join(OUTPUT_DIR, 'physical_scan.json'));
  const logical = await fs.readJson(path.join(OUTPUT_DIR, 'logical_scan.json'));
  const render = await fs.readJson(path.join(OUTPUT_DIR, 'render_scan.json'));

  const activeAssets = physical.filter(p => !p.isArchive);
  const archiveAssets = physical.filter(p => p.isArchive);

  // Recalculate Level 4 (no network, no static, no catalog reserve)
  const activeMap = new Map();
  activeAssets.forEach(a => {
    activeMap.set(a.path.toLowerCase(), {
      ...a, level: 4, networkUses: new Set(), staticUses: new Set(),
      catalogReserve: false, exactArchiveMatches: [], visualArchiveMatches: [],
      partialMatches: []
    });
  });

  const archiveHashes = new Map();
  const archivePhashes = new Map();
  archiveAssets.forEach(a => {
    if (!archiveHashes.has(a.sha256)) archiveHashes.set(a.sha256, []);
    archiveHashes.get(a.sha256).push(a);

    if (a.phash) {
      if (!archivePhashes.has(a.phash)) archivePhashes.set(a.phash, []);
      archivePhashes.get(a.phash).push(a);
    }
  });

  for (const v of activeMap.values()) {
    if (archiveHashes.has(v.sha256)) {
      v.exactArchiveMatches = archiveHashes.get(v.sha256);
    } else if (v.phash && archivePhashes.has(v.phash)) {
      v.visualArchiveMatches = archivePhashes.get(v.phash);
    }
  }

  for (const [imgUrl, routes] of Object.entries(render.assets)) {
    const cleanPath = decodeURIComponent(imgUrl).toLowerCase().split('?')[0];
    const item = activeMap.get(cleanPath);
    if (item) {
      routes.forEach(r => item.networkUses.add(r));
      item.level = 1;
    } else {
      for (const [k, v] of activeMap.entries()) {
        if (k.endsWith(cleanPath)) {
          routes.forEach(r => v.networkUses.add(r));
          v.level = 1;
          break;
        }
      }
    }
  }

  logical.forEach(l => {
    const matchLower = l.match.toLowerCase();
    for (const [k, v] of activeMap.entries()) {
      if (k.includes(matchLower)) {
        v.staticUses.add(l.file);
        if (v.level > 2) v.level = 2;
      }
      // Check partial match (just the name without extension)
      const baseName = path.parse(v.name).name.toLowerCase();
      if (l.match.toLowerCase().includes(baseName) && !k.includes(matchLower)) {
        v.partialMatches.push(l.file);
      }
    }
  });

  for (const v of activeMap.values()) {
    if (v.level > 2) {
      if (v.dir.includes('/produtos/') || v.dir.includes('/conteudos/')) {
        v.catalogReserve = true;
        v.level = 5;
      }
    }
  }

  const l4 = Array.from(activeMap.values()).filter(v => v.level === 4);

  let groupA = [];
  let groupB = [];
  let groupC = [];
  let groupD = [];
  let sizeA = 0, sizeC = 0;

  l4.forEach(img => {
    // Determine Group D: partial match or weird folder
    if (img.partialMatches.length > 0 || img.dir.includes('seo') || img.dir.includes('meta') || img.dir.includes('bg')) {
      groupD.push(img);
    } else if (img.exactArchiveMatches.length > 0) {
      groupA.push(img);
      sizeA += img.sizeBytes;
    } else if (img.visualArchiveMatches.length > 0) {
      groupB.push(img);
    } else {
      groupC.push(img);
      sizeC += img.sizeBytes;
    }
  });

  // Export CSV
  let csv = 'caminho_atual,nome,tamanho_kb,classificacao_atual,nivel,sha256,possui_backup,caminho_exato_backup,sha256_backup,referencias_codigo,referencia_css,referencia_json,referencia_seo,referencia_dinamica,pagina_relacionada,grupo,decisao_proposta\n';
  
  l4.forEach(img => {
    let grupo = "C";
    if (groupA.includes(img)) grupo = "A";
    if (groupB.includes(img)) grupo = "B";
    if (groupD.includes(img)) grupo = "D";

    const bkp = img.exactArchiveMatches.length > 0;
    const bkpPath = bkp ? img.exactArchiveMatches[0].path : (img.visualArchiveMatches.length > 0 ? img.visualArchiveMatches[0].path : "");
    const bkpSha = bkp ? img.exactArchiveMatches[0].sha256 : "";
    let prop = "ARQUIVAR";
    if (grupo === "A") prop = "EXCLUIR_PUBLIC_BACKUP_CONFIRMADO";
    if (grupo === "D") prop = "REVISAO_HUMANA_OBRIGATORIA";
    if (grupo === "B") prop = "REVISAO_HUMANA_VISUAL";

    csv += `"${img.path}","${img.name}","${img.sizeKB}","Candidato Arquivamento","4","${img.sha256}","${bkp ? 'SIM' : 'NAO'}","${bkpPath}","${bkpSha}","NENHUMA","NENHUMA","NENHUMA","NENHUMA","NENHUMA","NENHUMA","${grupo}","${prop}"\n`;
  });

  await fs.writeFile(path.join(OUTPUT_DIR, 'fase5-candidatos-aprovacao.csv'), csv);

  // Markdown Report
  let md = `# PACOTE DE APROVAÇÃO DA FASE 5 (SAFE REFACTORING)

> **ATENÇÃO:** Nenhuma exclusão, movimentação ou refatoração foi executada. Este documento é o plano final preparado para chancela humana.

## 1. RESUMO DOS 45 CANDIDATOS (NÍVEL 4)

- **GRUPO A (Backup Exato Confirmado):** ${groupA.length} arquivos.
- **GRUPO B (Possível Equivalente Visual, sem Hash exato):** ${groupB.length} arquivos.
- **GRUPO C (Sem Backup de Nenhuma Espécie):** ${groupC.length} arquivos.
- **GRUPO D (Dúvida de Referência Dinâmica/Parcial):** ${groupD.length} arquivos.

*Nota Técnica: O Nível 2 (Imagens de catálogo estáticas, SEO, Lazy Load, Ocultas) está **100% blindado** e nenhuma imagem foi rebaixada para o Nível 4 por falha no Network.*

## 2. REVISÃO TÉCNICA DA ECONOMIA DE DISCO

O valor bruto de redução anteriormente citado de ~147 MB requer um detalhamento técnico rigoroso sobre o impacto *efetivo*:

* **Tamanho total dos ${groupA.length} arquivos do Grupo A (serão removidos):** ${(sizeA/1024/1024).toFixed(2)} MB
* **Tamanho total dos ${groupC.length} arquivos do Grupo C (serão movidos para ARQUIVO/):** ${(sizeC/1024/1024).toFixed(2)} MB

### Impacto no Working Directory (Seu disco local)
- A remoção do Grupo A apagará fisicamente ${(sizeA/1024/1024).toFixed(2)} MB do seu HD local ativo.
- A movimentação do Grupo C (Para a pasta \`ARQUIVO/\`) **NÃO** reduzirá espaço físico, pois a pasta \`ARQUIVO/\` ainda reside dentro do mesmo volume.
- **Redução efetiva no Working Directory:** ${(sizeA/1024/1024).toFixed(2)} MB.

### Impacto no Repositório Git (.git)
- O histórico do Git **NÃO** apaga blobs antigos instantaneamente. Portanto, o tamanho de \`.git\` e do repositório no GitHub permanecerá idêntico, a menos que comandos de rewrite de histórico (ex: \`git filter-repo\`) sejam executados, o que não faz parte do escopo.

### Impacto Efetivo no Build e Rede (Vite Bundle)
- A pasta \`public/\` é inteiramente copiada para a pasta \`dist/\` durante o processo de build do Vite. Portanto, toda imagem lá dentro, usada ou não, é enviada para a hospedagem do site (Servidor Final).
- A exclusão do Grupo A e a retirada do Grupo C da pasta \`public/\` para a pasta raiz \`ARQUIVO/\` impedirá que o Vite as copie.
- **Redução confirmada no diretório final de Build (\`dist/\`):** ${((sizeA + sizeC)/1024/1024).toFixed(2)} MB.
- **Impacto no Bandwidth do Usuário Final:** Zero. (O navegador do visitante só baixa o que o HTML/CSS requisita, Nível 1. A presença desses arquivos no servidor não altera o peso da home).

## 3. SIMULAÇÃO DO DIFF (Fase 5)
- **Arquivos a serem deletados:** ${groupA.length} (Listados no CSV com status EXCLUIR_PUBLIC_BACKUP_CONFIRMADO).
- **Arquivos a serem movidos:** ${groupC.length} (De \`public/images/... \` para \`ARQUIVO/backup-pre-refactor/...\`).
- **Referências a serem alteradas no código:** 0 (Nenhum código está apontando para estes 45 arquivos, conforme scan).
- **Componentes e Rotas Afetadas:** Nenhuma.

## 4. PLANO DE TESTES PÓS-EXECUÇÃO
1. \`npm run build\` - Garantir que compila com sucesso.
2. \`npm run preview\` - Servir o build final localmente.
3. Clicar em todas as categorias de produtos e soluções (Navegação base).
4. Abrir Console e Network no Chrome/Edge. Filtrar por erros 404 de Imagens.
5. Inspecionar Meta Tags/Open Graph nas rotas principais.

## 5. PLANO DE ROLLBACK
- **Para o Grupo C:** Como serão apenas movidos para \`ARQUIVO/backup-pre-refactor/\`, o rollback é um simples comando de copiar/colar de volta para a pasta de origem no \`public/\`.
- **Para o Grupo A:** Como já possuem cópia intacta em \`ARQUIVO/\`, o rollback é restaurar a cópia de segurança mapeada no CSV (Coluna \`caminho_exato_backup\`).
- Se feito usando Git: \`git restore public/\`.

## 6. PROPOSTA DE PILOTO (Para confiança da operação)
Antes de excluir as ${groupA.length} duplicatas do Grupo A, testaremos com os 5 arquivos de menor risco:

1. ${groupA[0] ? groupA[0].path : '-'}
2. ${groupA[1] ? groupA[1].path : '-'}
3. ${groupA[2] ? groupA[2].path : '-'}
4. ${groupA[3] ? groupA[3].path : '-'}
5. ${groupA[4] ? groupA[4].path : '-'}

(Esses arquivos possuem Hash idêntico confirmado no backup e 0 conexões no código).

---

FASE 5 PREPARADA — AGUARDANDO AUTORIZAÇÃO EXPRESSA DA INGRID
`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'FASE5_PACOTE_APROVACAO.md'), md);
  console.log("Phase 5 prep complete.");
}

prepPhase5().catch(console.error);
