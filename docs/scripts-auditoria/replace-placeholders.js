import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');

async function processFiles() {
  console.log("1. Atualizando Home.tsx...");
  const homePath = path.join(ROOT_DIR, 'src/pages/Home.tsx');
  let homeCode = await fs.readFile(homePath, 'utf8');
  
  // Replace Regulador Image
  homeCode = homeCode.replace(
    "img: '/images/produtos/aplicacao-real.webp' }",
    "img: '/images/produtos/prod-reguladores-especiais-new.jpg' }"
  );

  // Replace TESTIMONIALS
  homeCode = homeCode.replace(/const TESTIMONIALS = \[[\s\S]*?\];/, `const TESTIMONIALS = [
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Setor Petroquímico',
    quote: '[Espaço reservado para depoimento real. A Prime assegura conformidade e segurança em projetos críticos de automação e gases especiais.]',
    rating: 5,
    tag: 'AUTOMAÇÃO DE GASES',
    sealText: 'Padrão Técnico',
    sealIcon: Factory,
    avatar: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Centro de Análises',
    quote: '[Espaço reservado para depoimento real. Mais do que fornecer reguladores, a equipe projeta skids focados na estabilidade de vazão.]',
    rating: 5,
    tag: 'SISTEMA ANALÍTICO',
    sealText: 'Qualidade Lab.',
    sealIcon: FlaskConical,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Setor de Energia',
    quote: '[Espaço reservado para depoimento real. Projetos críticos de energia exigem rigor e especificações entregues dentro do prazo estipulado.]',
    rating: 5,
    tag: 'PROJETOS TURN-KEY',
    sealText: 'Certificação ISO',
    sealIcon: Zap,
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];`);
  
  await fs.writeFile(homePath, homeCode);

  console.log("2. Atualizando About.tsx...");
  const aboutPath = path.join(ROOT_DIR, 'src/pages/About.tsx');
  let aboutCode = await fs.readFile(aboutPath, 'utf8');
  aboutCode = aboutCode.replace(/const ABOUT_TESTIMONIALS = \[[\s\S]*?\];/, `const ABOUT_TESTIMONIALS = [
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Complexo Industrial',
    quote: '[Espaço reservado para depoimento real. A confiabilidade técnica em momentos críticos de parada de planta é a nossa principal entrega institucional.]',
    rating: 5,
    tag: 'PARCERIA E CONFIANÇA',
    sealText: 'Padrão Técnico',
    sealIcon: Briefcase,
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Instituto Tecnológico',
    quote: '[Espaço reservado para depoimento real. Entendemos profundamente os processos críticos para assumirmos a responsabilidade técnica junto aos parceiros.]',
    rating: 5,
    tag: 'VISÃO DE LONGO PRAZO',
    sealText: 'Inovação e Pesquisa',
    sealIcon: FlaskConical,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];`);
  await fs.writeFile(aboutPath, aboutCode);

  console.log("3. Atualizando SolutionsMain.tsx...");
  const solPath = path.join(ROOT_DIR, 'src/pages/solutions/SolutionsMain.tsx');
  let solCode = await fs.readFile(solPath, 'utf8');
  solCode = solCode.replace(/const SOLUTIONS_TESTIMONIALS = \[[\s\S]*?\];/, `const SOLUTIONS_TESTIMONIALS = [
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Indústria Química',
    quote: '[Espaço reservado para depoimento real. A integração entre engenharia e execução na montagem de redes de gases assegura uma instalação técnica impecável.]',
    rating: 5,
    tag: 'PROJETO E MONTAGEM',
    sealText: 'Padrão Técnico',
    sealIcon: Factory,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Cliente Corporativo',
    role: 'Parceiro Estratégico',
    company: 'Setor Farmacêutico',
    quote: '[Espaço reservado para depoimento real. O comissionamento e a documentação as-built rigorosa garantem total rastreabilidade e segurança operacional.]',
    rating: 5,
    tag: 'COMISSIONAMENTO',
    sealText: 'Controle de Qualidade',
    sealIcon: ShieldCheck,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];`);
  await fs.writeFile(solPath, solCode);
  
  console.log("Feito!");
}

processFiles().catch(console.error);
