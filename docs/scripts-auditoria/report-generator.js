import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');

async function generateReports() {
  const physical = await fs.readJson(path.join(OUTPUT_DIR, 'physical_scan.json'));
  const logical = await fs.readJson(path.join(OUTPUT_DIR, 'logical_scan.json'));
  const render = await fs.readJson(path.join(OUTPUT_DIR, 'render_scan.json'));

  const activeAssets = physical.filter(p => !p.isArchive);
  const archiveAssets = physical.filter(p => p.isArchive);

  // 1. Identify uses
  const activeMap = new Map();
  activeAssets.forEach(a => {
    activeMap.set(a.path.toLowerCase(), {
      ...a,
      renderUses: new Set(),
      staticUses: new Set(),
      status: 'NÍVEL 4 — SEM USO CONFIRMADO'
    });
  });

  // Cross reference render
  for (const [imgUrl, routes] of Object.entries(render.assets)) {
    const relative = decodeURIComponent(imgUrl).toLowerCase();
    const cleanPath = relative.split('?')[0];
    const item = activeMap.get(cleanPath);
    if (item) {
      routes.forEach(r => item.renderUses.add(r));
      item.status = 'NÍVEL 1 — USO RENDERIZADO CONFIRMADO';
    } else {
      // maybe external or dynamic without leading slash
      let found = false;
      for (const [k, v] of activeMap.entries()) {
        if (k.endsWith(cleanPath)) {
          routes.forEach(r => v.renderUses.add(r));
          v.status = 'NÍVEL 1 — USO RENDERIZADO CONFIRMADO';
          found = true;
          break;
        }
      }
    }
  }

  // Cross reference static
  logical.forEach(l => {
    const matchLower = l.match.toLowerCase();
    for (const [k, v] of activeMap.entries()) {
      if (k.includes(matchLower)) {
        v.staticUses.add(l.file);
        if (v.status === 'NÍVEL 4 — SEM USO CONFIRMADO') {
          v.status = 'NÍVEL 2 — USO ESTÁTICO CONFIRMADO';
        }
      }
    }
  });

  // Identify problematic names
  const problematic = activeAssets.filter(a => {
    const name = a.name;
    return /[A-Z]/.test(name) || /\s/.test(name) || /[áàãâéèêíïóôõöúçñ]/i.test(name) ||
           /[()]/.test(name) || /copy|copia|img_\d+|whatsapp|screenshot|download|final/i.test(name);
  });

  // Identify Heavy Images
  const heavy = activeAssets.filter(a => parseFloat(a.sizeKB) > 500);
  
  // Identify Photographic PNGs
  const pngPhoto = activeAssets.filter(a => a.ext === '.png' && parseFloat(a.sizeKB) > 1024); // heuristic

  // Identify Broken References
  const broken = render.errors404;

  // Identify Duplicates (Exact)
  const hashGroups = {};
  activeAssets.forEach(a => {
    if (!hashGroups[a.sha256]) hashGroups[a.sha256] = [];
    hashGroups[a.sha256].push(a);
  });
  const duplicates = Object.values(hashGroups).filter(g => g.length > 1);

  // Identify Visual Duplicates (Phash)
  const phashGroups = {};
  activeAssets.forEach(a => {
    if (a.phash) {
      if (!phashGroups[a.phash]) phashGroups[a.phash] = [];
      phashGroups[a.phash].push(a);
    }
  });
  const visualDuplicates = Object.values(phashGroups).filter(g => g.length > 1 && g.some(item => !hashGroups[item.sha256] || hashGroups[item.sha256].length === 1));

  // Write Resumo Executivo
  const totalFisicas = activeAssets.length;
  let totalAtivas = 0, totalSemUso = 0;
  for (const v of activeMap.values()) {
    if (v.status.includes('NÍVEL 1') || v.status.includes('NÍVEL 2')) totalAtivas++;
    else totalSemUso++;
  }

  const execSummary = `# Resumo Executivo da Auditoria de Assets

## ASSETS ATIVOS
- **Total Físico (public/ e src/):** ${totalFisicas}
- **Utilizados Confirmados:** ${totalAtivas}
- **Não Utilizados Confirmados (Sem Referência):** ${totalSemUso}
- **Duplicatas Exatas (Agrupamentos):** ${duplicates.length}
- **Possíveis Duplicatas Visuais (Agrupamentos):** ${visualDuplicates.length}
- **Referências Quebradas (404 em Renderização):** ${broken.length}

## ARQUIVO / BACKUP
- **Total no Acervo:** ${archiveAssets.length}

## CRAWL RENDERIZADO
- **Páginas com erro 404:** ${new Set(broken.map(b => b.route)).size}

**Percentual do Acervo com Uso Confirmado:** ${((totalAtivas / totalFisicas) * 100).toFixed(2)}%
`;
  await fs.writeFile(path.join(OUTPUT_DIR, 'resumo-executivo.md'), execSummary);

  // Write Imagens Sem Uso
  const unused = Array.from(activeMap.values()).filter(v => v.status === 'NÍVEL 4 — SEM USO CONFIRMADO');
  let unusedMd = `# Imagens Sem Uso Confirmado\n\n`;
  unused.forEach(u => {
    unusedMd += `### ${u.name}\n- **Caminho:** ${u.path}\n- **Tamanho:** ${u.sizeKB} KB\n- **Dimensões:** ${u.width}x${u.height}\n- **Pasta:** ${u.dir}\n- **Recomendação:** Candidata à revisão para arquivamento.\n\n`;
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'imagens-sem-uso.md'), unusedMd);

  // CSV Generation
  let csvContent = 'Image,Path,Width,Height,SizeKB,Status,RenderUses,StaticUses\n';
  for (const v of activeMap.values()) {
    csvContent += `"${v.name}","${v.path}","${v.width}","${v.height}","${v.sizeKB}","${v.status}","${v.renderUses.size}","${v.staticUses.size}"\n`;
  }
  await fs.writeFile(path.join(OUTPUT_DIR, 'matriz-imagens.csv'), csvContent);

  // Duplicates
  let dupMd = `# Duplicatas Exatas (SHA-256)\n\n`;
  duplicates.forEach((g, i) => {
    dupMd += `## Grupo ${i + 1} (Hash: ${g[0].sha256})\n`;
    g.forEach(a => {
      dupMd += `- ${a.path} (${a.sizeKB} KB)\n`;
    });
    dupMd += '\n';
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'duplicatas.md'), dupMd);

  // Visual Duplicates
  let visMd = `# Possíveis Duplicatas Visuais\n\n`;
  visualDuplicates.forEach((g, i) => {
    visMd += `## Grupo Visual ${i + 1}\n`;
    g.forEach(a => {
      visMd += `- ${a.path} (${a.width}x${a.height}, ${a.sizeKB} KB)\n`;
    });
    visMd += '\n';
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'possiveis-duplicatas-visuais.md'), visMd);

  // Broken References
  let brokenMd = `# Referências Quebradas (404)\n\n`;
  broken.forEach(b => {
    brokenMd += `- **URL Falha:** ${b.url}\n  - **Rota onde ocorreu:** ${b.route}\n\n`;
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'referencias-quebradas.md'), brokenMd);

  // Problematic Names
  let probMd = `# Arquivos com Nomes Problemáticos\n\n`;
  problematic.forEach(p => {
    probMd += `- ${p.path}\n`;
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'nomes-problematicos.md'), probMd);

  // Heavy Images
  let heavyMd = `# Imagens Muito Pesadas\n\n`;
  heavy.forEach(h => {
    heavyMd += `- **${h.name}** (${h.sizeKB} KB) - ${h.width}x${h.height} - ${h.path}\n`;
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'imagens-pesadas.md'), heavyMd);

  // Archive Inventory
  let arcMd = `# Inventário de Arquivo de Referência\n\n`;
  archiveAssets.forEach(a => {
    arcMd += `- **${a.name}** (${a.path}) - ${a.sizeKB} KB\n`;
  });
  await fs.writeFile(path.join(OUTPUT_DIR, 'inventario-arquivo.md'), arcMd);

  console.log("Reports generated successfully.");
}

generateReports().catch(console.error);
