import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');

async function processFiles() {
  console.log("1. Hiding Home.tsx testimonials and updating webp...");
  const homePath = path.join(ROOT_DIR, 'src/pages/Home.tsx');
  let homeCode = await fs.readFile(homePath, 'utf8');
  
  if (!homeCode.includes("const SHOW_TESTIMONIALS = false;")) {
    homeCode = homeCode.replace("export function Home() {", "const SHOW_TESTIMONIALS = false;\n\nexport function Home() {");
  }

  // Update PNG to WEBP in Home
  homeCode = homeCode.replace(
    'defaultContent="/images/home/imagem-para-home-site.png"',
    'defaultContent="/images/home/imagem-para-home-site.webp"'
  );

  // Find "{/* Testimonials */}" and the end of that section
  let testStart = homeCode.indexOf("{/* Testimonials */}");
  let testEnd = homeCode.indexOf("{/* Latest Articles */}");
  if (testStart !== -1 && testEnd !== -1 && !homeCode.substring(testStart, testStart + 50).includes("SHOW_TESTIMONIALS")) {
    let section = homeCode.substring(testStart, testEnd);
    let wrapped = "{/* Testimonials */}\n      {SHOW_TESTIMONIALS && (\n" + section.replace("{/* Testimonials */}", "").trimEnd() + "\n      )}\n\n      ";
    homeCode = homeCode.substring(0, testStart) + wrapped + homeCode.substring(testEnd);
  }
  
  await fs.writeFile(homePath, homeCode);

  console.log("2. Hiding About.tsx testimonials...");
  const aboutPath = path.join(ROOT_DIR, 'src/pages/About.tsx');
  let aboutCode = await fs.readFile(aboutPath, 'utf8');
  if (!aboutCode.includes("const SHOW_TESTIMONIALS = false;")) {
    aboutCode = aboutCode.replace("export function About() {", "const SHOW_TESTIMONIALS = false;\n\nexport function About() {");
  }
  
  let aboutStart = aboutCode.indexOf("{/* Depoimentos Institucionais */}");
  let aboutEnd = aboutCode.indexOf("{/* 7. CTA Final */}");
  if (aboutStart !== -1 && aboutEnd !== -1 && !aboutCode.substring(aboutStart, aboutStart + 60).includes("SHOW_TESTIMONIALS")) {
    let section = aboutCode.substring(aboutStart, aboutEnd);
    let wrapped = "{/* Depoimentos Institucionais */}\n      {SHOW_TESTIMONIALS && (\n" + section.replace("{/* Depoimentos Institucionais */}", "").trimEnd() + "\n      )}\n\n      ";
    aboutCode = aboutCode.substring(0, aboutStart) + wrapped + aboutCode.substring(aboutEnd);
  }
  await fs.writeFile(aboutPath, aboutCode);

  console.log("3. Hiding SolutionsMain.tsx testimonials...");
  const solPath = path.join(ROOT_DIR, 'src/pages/solutions/SolutionsMain.tsx');
  let solCode = await fs.readFile(solPath, 'utf8');
  if (!solCode.includes("const SHOW_TESTIMONIALS = false;")) {
    solCode = solCode.replace("export function SolutionsMain() {", "const SHOW_TESTIMONIALS = false;\n\nexport function SolutionsMain() {");
  }
  
  let solStart = solCode.indexOf("{/* Depoimentos Soluções */}");
  let solEnd = solCode.indexOf("{/* Áreas Técnicas */}");
  if (solStart !== -1 && solEnd !== -1 && !solCode.substring(solStart, solStart + 50).includes("SHOW_TESTIMONIALS")) {
    let section = solCode.substring(solStart, solEnd);
    let wrapped = "{/* Depoimentos Soluções */}\n      {SHOW_TESTIMONIALS && (\n" + section.replace("{/* Depoimentos Soluções */}", "").trimEnd() + "\n      )}\n\n      ";
    solCode = solCode.substring(0, solStart) + wrapped + solCode.substring(solEnd);
  }
  await fs.writeFile(solPath, solCode);
  
  console.log("Feito!");
}

processFiles().catch(console.error);
