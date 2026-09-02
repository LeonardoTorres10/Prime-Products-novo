import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'auditoria-assets');

async function stageSelective() {
  console.log("1. Pegando arquivos deletados (D)...");
  const gitStatusRaw = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;
  const lines = gitStatusRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const deletedFiles = [];
  for (const line of lines) {
    if (line.startsWith('D ') || line.startsWith(' D')) {
      deletedFiles.push(line.substring(2).trim());
    }
  }

  console.log(`2. Fazendo git rm de ${deletedFiles.length} arquivos...`);
  for (const f of deletedFiles) {
    await execAsync(`git rm "${f}"`, { cwd: ROOT_DIR });
  }

  console.log("3. Adicionando os 3 catalogs aprovados...");
  await execAsync(`git add src/data/catalogs/products/teknoValvesCatalog.ts`, { cwd: ROOT_DIR });
  await execAsync(`git add src/data/catalogs/products/tkfCatalog.ts`, { cwd: ROOT_DIR });
  await execAsync(`git add src/data/catalogs/products/type4Catalog.ts`, { cwd: ROOT_DIR });

  console.log("4. Fazendo staging parcial do ArticleDetail...");
  const articlePath = path.join(ROOT_DIR, 'src/pages/content/ArticleDetail.tsx');
  const backupPath = path.join(ROOT_DIR, 'ArticleDetail.tsx.wow');
  
  // Backup Wow
  await fs.copyFile(articlePath, backupPath);
  
  // Checkout origin
  await execAsync(`git checkout src/pages/content/ArticleDetail.tsx`, { cwd: ROOT_DIR });
  
  // Remove ArrowRight
  let content = await fs.readFile(articlePath, 'utf8');
  content = content.replace('ArrowLeft, ArrowRight,', 'ArrowLeft,');
  await fs.writeFile(articlePath, content);
  
  // Git add
  await execAsync(`git add src/pages/content/ArticleDetail.tsx`, { cwd: ROOT_DIR });
  
  // Restore Wow
  await fs.copyFile(backupPath, articlePath);
  await fs.remove(backupPath);

  console.log("5. Build...");
  let buildOk = true;
  try {
    await execAsync('npm run build', { cwd: ROOT_DIR });
  } catch(e) {
    buildOk = false;
    console.error("BUILD FAILED", e);
  }

  console.log("6. Gerando estatisticas...");
  const diffCachedStat = (await execAsync('git diff --cached --stat', { cwd: ROOT_DIR })).stdout;
  const diffCached = (await execAsync('git diff --cached', { cwd: ROOT_DIR })).stdout;
  const statusAfter = (await execAsync('git status --short', { cwd: ROOT_DIR })).stdout;

  const result = {
    buildOk,
    diffCachedStat,
    diffCached,
    statusAfter
  };

  await fs.writeJson(path.join(OUTPUT_DIR, 'staging_result.json'), result, { spaces: 2 });
  
  console.log("7. Criando PACOTE_VISUAL_DARK_WOW.md...");
  let wowMd = `# PACOTE VISUAL "DARK WOW" (PENDENTE DE REVISÃO)\n\n`;
  wowMd += `Este pacote isola todas as alterações de interface criadas para modernizar o visual (implementação de depoimentos, backgrounds 3D, overlays escuros e reestruturação de componentes). **Nada daqui foi enviado ao Git.**\n\n`;

  wowMd += `### 1. src/pages/About.tsx\n- **Alteração:** Adição de \`ABOUT_TESTIMONIALS\` e blocos de depoimentos com selos e tags.\n- **Página:** Quem Somos\n- **Impacto:** Alta visibilidade (novo bloco inteiro na página).\n- **Imagens:** URLs Unsplash de perfil.\n- **Aprovação:** SIM, REQUER APROVAÇÃO.\n- **Recomendação:** REVISAR bloco a bloco se o copy está alinhado com a diretoria.\n\n`;

  wowMd += `### 2. src/pages/Home.tsx\n- **Alteração:** Refatoração de \`TESTIMONIALS\`, tags, logos e mudança da imagem de capa \`home-about-ihm-new-2.jpg\` por \`imagem-para-home-site.png\`.\n- **Página:** Home\n- **Impacto:** Alta visibilidade no site principal.\n- **Imagens:** \`imagem-para-home-site.png\`.\n- **Aprovação:** SIM, REQUER APROVAÇÃO.\n- **Recomendação:** REVISAR se a troca de prova social e imagem herói reflete o desejado.\n\n`;

  wowMd += `### 3. src/pages/content/ArticleDetail.tsx\n- **Alteração:** Adição de Overlays Escuros (\`bg-black/60\`), lógica para \`safeArticles\` e bloco \`ARTICLE_GALLERY\`.\n- **Página:** Artigos Individuais\n- **Impacto:** Layout de capa escurecido e possível quebra se galeria não estiver formatada.\n- **Imagens:** Diversas, manipuladas em array vazio.\n- **Aprovação:** SIM, REQUER APROVAÇÃO.\n- **Recomendação:** REVISAR pois o *fallback* técnico injetado para forçar \`capa-novos-2-corrigida.jpg\` pode não ser ideal em produção.\n\n`;

  wowMd += `### 4. src/pages/content/ContentMain.tsx\n- **Alteração:** Modificação da tag de Fundo para Overlay \`fixed inset-0 -z-50\` simulando Parallax/3D. Fundo apontado para \`hero-conteudo.jpg\`.\n- **Página:** Conteúdos / Artigos\n- **Impacto:** Toda a listagem de artigos fica com fundo estático escuro/vibrante.\n- **Imagens:** \`hero-conteudo.jpg\`.\n- **Aprovação:** SIM, REQUER APROVAÇÃO.\n- **Recomendação:** REVISAR teste visual intenso e contraste das fontes na tela inteira.\n\n`;

  wowMd += `### 5. src/pages/solutions/SolutionsMain.tsx\n- **Alteração:** Adição de \`SOLUTIONS_TESTIMONIALS\`.\n- **Página:** Soluções\n- **Impacto:** Novo componente ocupando espaço relevante.\n- **Imagens:** URLs Unsplash de perfil.\n- **Aprovação:** SIM, REQUER APROVAÇÃO.\n- **Recomendação:** Idem About.\n\n`;

  wowMd += `### 6. src/pages/tools/ToolsMain.tsx\n- **Alteração:** Modificação de container para fundo Dark Parallax análogo a \`ContentMain.tsx\`.\n- **Página:** Ferramentas\n- **Impacto:** Troca drástica de cor de fundo global da view.\n- **Imagens:** URL externa original, mas agora travada em \`-z-50\`.\n- **Aprovação:** SIM, REQUER APROVAÇÃO.\n- **Recomendação:** Avaliar harmonia de *scroll* nos monitores maiores.\n\n`;

  wowMd += `### 7. public/images/conteudos/hero-conteudo.jpg\n- **Alteração:** Novo Asset Untracked (\~340KB).\n- **Impacto:** Imagem de alta resolução para background dos conteúdos.\n- **Aprovação:** SIM.\n- **Recomendação:** Avaliar se a arte final é a definitiva (ou se deve usar compressão WebP).\n\n`;

  wowMd += `### 8. public/images/home/imagem-para-home-site.png\n- **Alteração:** Novo Asset Untracked (\~1MB).\n- **Impacto:** Capa do bloco "Sobre nós" na Home.\n- **Aprovação:** SIM.\n- **Recomendação:** Exige pesada otimização antes de subir, pois PNG fotográfico de 1MB vai ferir LCP (Largest Contentful Paint).\n\n`;

  await fs.writeFile(path.join(OUTPUT_DIR, 'PACOTE_VISUAL_DARK_WOW.md'), wowMd);
  console.log("Done.");
}

stageSelective().catch(console.error);
