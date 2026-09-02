import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');

async function generatePhase2() {
  const physical = await fs.readJson(path.join(OUTPUT_DIR, 'physical_scan.json'));
  const logical = await fs.readJson(path.join(OUTPUT_DIR, 'logical_scan.json'));
  const render = await fs.readJson(path.join(OUTPUT_DIR, 'render_scan.json'));

  const activeAssets = physical.filter(p => !p.isArchive);
  const archiveAssets = physical.filter(p => p.isArchive);

  let totalActiveSize = 0;
  activeAssets.forEach(a => totalActiveSize += a.sizeBytes);

  const activeMap = new Map();
  activeAssets.forEach(a => {
    activeMap.set(a.path.toLowerCase(), {
      ...a,
      level: 4, // Default to Level 4 (Sem uso confirmado)
      networkUses: new Set(),
      staticUses: new Set(),
      dynamicProbable: false,
      catalogReserve: false,
      inArchive: false,
      exactDuplicates: [],
      visualDuplicates: [],
      action: 'CANDIDATA_A_ARQUIVAMENTO'
    });
  });

  // Cross reference ARQUIVO
  const archiveHashes = new Set(archiveAssets.map(a => a.sha256));
  const archivePhashes = new Set(archiveAssets.map(a => a.phash).filter(Boolean));
  
  for (const v of activeMap.values()) {
    if (archiveHashes.has(v.sha256)) v.inArchive = true;
    else if (v.phash && archivePhashes.has(v.phash)) v.inArchive = true;
  }

  // Cross reference Network (Level 1)
  for (const [imgUrl, routes] of Object.entries(render.assets)) {
    const cleanPath = decodeURIComponent(imgUrl).toLowerCase().split('?')[0];
    const item = activeMap.get(cleanPath);
    if (item) {
      routes.forEach(r => item.networkUses.add(r));
      item.level = 1;
      item.action = 'MANTER';
    } else {
      for (const [k, v] of activeMap.entries()) {
        if (k.endsWith(cleanPath)) {
          routes.forEach(r => v.networkUses.add(r));
          v.level = 1;
          v.action = 'MANTER';
          break;
        }
      }
    }
  }

  // Cross reference Static (Level 2)
  logical.forEach(l => {
    const matchLower = l.match.toLowerCase();
    for (const [k, v] of activeMap.entries()) {
      if (k.includes(matchLower)) {
        v.staticUses.add(l.file);
        if (v.level > 2) {
          v.level = 2;
          v.action = 'MANTER';
        }
      }
    }
  });

  // Cross reference Dynamic & Reserve (Level 3 & 5)
  for (const v of activeMap.values()) {
    if (v.level > 2) {
      // Check if it's in a known product/catalog directory
      if (v.dir.includes('/produtos/') || v.dir.includes('/conteudos/')) {
        v.catalogReserve = true;
        v.action = 'REVISAR';
        v.level = 5; // Pending human review, might be reserve
      }
    }
  }

  // 171 specific review
  const unusedInitial = Array.from(activeMap.values()).filter(v => v.level === 4 || v.level === 5);
  let unusedSize = 0;
  unusedInitial.forEach(u => unusedSize += u.sizeBytes);

  let matrizCsv = 'arquivo,caminho,categoria,tamanho,dimensao,hash,nivel_confianca,network_confirmado,referencia_estatica,referencia_dinamica,rota,componente,duplicata,duplicata_visual,existe_no_arquivo,reserva_catalogo,acao_futura_sugerida,requer_aprovacao_humana\n';
  
  for (const v of activeMap.values()) {
    const category = v.dir.split('/')[3] || 'geral';
    const reqHuman = v.level > 2 ? 'SIM' : 'NAO';
    matrizCsv += `"${v.name}","${v.path}","${category}","${v.sizeKB}","${v.width}x${v.height}","${v.sha256}","NIVEL ${v.level}","${v.networkUses.size > 0 ? 'SIM' : 'NAO'}","${v.staticUses.size > 0 ? 'SIM' : 'NAO'}","${v.catalogReserve ? 'SIM' : 'NAO'}","${Array.from(v.networkUses).join('|')}","${Array.from(v.staticUses).join('|')}","NAO","NAO","${v.inArchive ? 'SIM' : 'NAO'}","${v.catalogReserve ? 'SIM' : 'NAO'}","${v.action}","${reqHuman}"\n`;
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'matriz-decisao-assets.csv'), matrizCsv);

  // Duplicates logic
  const hashGroups = {};
  activeAssets.forEach(a => {
    if (!hashGroups[a.sha256]) hashGroups[a.sha256] = [];
    hashGroups[a.sha256].push(a);
  });
  const exactDups = Object.values(hashGroups).filter(g => g.length > 1);

  // Cross Archive Dups
  let exactWithArchive = 0;
  let visualWithArchive = 0;
  for (const v of activeMap.values()) {
    if (v.inArchive) {
      if (archiveHashes.has(v.sha256)) exactWithArchive++;
      else visualWithArchive++;
    }
  }

  // Routes output
  let routesMd = '# Relatório de Rotas Rastreadas\n\n| Nº | Rota | Imagens Requisitadas | 404s |\n|---|---|---|---|\n';
  const allRoutes = new Set();
  for (const routes of Object.values(render.assets)) {
    routes.forEach(r => allRoutes.add(r));
  }
  let routeIdx = 1;
  for (const r of allRoutes) {
    let imgs = 0;
    for (const [img, uses] of Object.entries(render.assets)) {
      if (uses.includes(r)) imgs++;
    }
    const errs = render.errors404.filter(e => e.route.includes(r)).length;
    routesMd += `| ${routeIdx++} | ${r} | ${imgs} | ${errs} |\n`;
  }
  await fs.writeFile(path.join(OUTPUT_DIR, 'rotas-rastreadas.md'), routesMd);

  // Exec Summary
  let countL1 = 0, countL2 = 0, countL3 = 0, countL4 = 0, countL5 = 0;
  for (const v of activeMap.values()) {
    if (v.level === 1) countL1++;
    else if (v.level === 2) countL2++;
    else if (v.level === 3) countL3++;
    else if (v.level === 4) countL4++;
    else if (v.level === 5) countL5++;
  }

  const summary = `# Segunda Validação - Resumo Executivo

## ASSETS ATIVOS
- **Total Físico:** ${activeAssets.length} (${(totalActiveSize / 1024 / 1024).toFixed(2)} MB)
- **NÍVEL 1 — USO RENDERIZADO CONFIRMADO:** ${countL1}
- **NÍVEL 2 — USO ESTÁTICO CONFIRMADO:** ${countL2}
- **NÍVEL 3 — USO DINÂMICO PROVÁVEL:** ${countL3}
- **NÍVEL 4 — SEM USO CONFIRMADO:** ${countL4}
- **NÍVEL 5 — PENDENTE DE REVISÃO HUMANA (Reserva de Catálogo):** ${countL5}

## PESO DOS 171 "SEM USO" (agora reclassificados entre Níveis 4 e 5)
- **Quantidade Reclassificada:** ${unusedInitial.length}
- **Tamanho Total:** ${(unusedSize / 1024 / 1024).toFixed(2)} MB
- **Percentual do Espaço Total:** ${((unusedSize / totalActiveSize) * 100).toFixed(2)}%

## CRUZAMENTO COM ARQUIVO/
- **Total em ARQUIVO:** ${archiveAssets.length}
- **Duplicatas Exatas Ativo x Arquivo:** ${exactWithArchive}
- **Possíveis Duplicatas Visuais Ativo x Arquivo:** ${visualWithArchive}
- **Exclusivas no Ativo:** ${activeAssets.length - exactWithArchive - visualWithArchive}
- **Exclusivas no Arquivo:** ${archiveAssets.length - exactWithArchive}

## SITE E ROTAS
- **Rotas Únicas Rastreadas:** ${allRoutes.size}
`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'resumo-executivo-fase2.md'), summary);
  console.log("Phase 2 complete.");
}

generatePhase2().catch(console.error);
