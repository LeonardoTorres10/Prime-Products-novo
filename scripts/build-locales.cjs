const fs = require('fs');
const path = require('path');

const localesData = {
  pt: {},
  es: {},
  en: {}
};

function addKey(key, values) {
  localesData.pt[key] = values.pt;
  localesData.es[key] = values.es;
  localesData.en[key] = values.en;
}

// ─── LAYOUT & NAV ITEMS ──────────────────────────────────────────────────────
addKey('layout_topbar_city', { pt: "Belo Horizonte – MG", es: "Belo Horizonte – MG", en: "Belo Horizonte – MG" });
addKey('layout_topbar_email', { pt: "info@primeproducts.ind.br", es: "info@primeproducts.ind.br", en: "info@primeproducts.ind.br" });
addKey('layout_topbar_phone', { pt: "(31) 9 8670-8742", es: "(31) 9 8670-8742", en: "(31) 9 8670-8742" });
addKey('layout_logo_img', { pt: "/logo-prime.png", es: "/logo-prime.png", en: "/logo-prime.png" });
addKey('layout_nav_cta', { pt: "FALE CONOSCO", es: "CONTÁCTENOS", en: "CONTACT US" });
addKey('footer_desc', {
  pt: "Soluções técnicas voltadas à instrumentação, gases e engenharia aplicada com foco em segurança e confiabilidade.",
  es: "Soluciones técnicas orientadas a la instrumentación, gases e ingeniería aplicada con enfoque en seguridad y confiabilidad.",
  en: "Technical solutions oriented to instrumentation, gases, and applied engineering focused on safety and reliability."
});
addKey('footer_address_1', { pt: "Belo Horizonte – MG", es: "Belo Horizonte – MG", en: "Belo Horizonte – MG" });
addKey('footer_address_2', { pt: "Atendimento Nacional", es: "Atención Nacional", en: "National Service" });
addKey('footer_phone_1', { pt: "(31) 9 8670-8742", es: "(31) 9 8670-8742", en: "(31) 9 8670-8742" });
addKey('footer_email', { pt: "info@primeproducts.ind.br", es: "info@primeproducts.ind.br", en: "info@primeproducts.ind.br" });
addKey('footer_wide_banner', { pt: "/images/home/footer-banner.png", es: "/images/home/footer-banner.png", en: "/images/home/footer-banner.png" });

// Navigation Labels
addKey('nav_item_0', { pt: 'Home', es: 'Inicio', en: 'Home' });
addKey('nav_item_0_mobile', { pt: 'Home', es: 'Inicio', en: 'Home' });
addKey('nav_item_1', { pt: 'A Prime', es: 'Sobre Prime', en: 'About Prime' });
addKey('nav_item_1_mobile', { pt: 'A Prime', es: 'Sobre Prime', en: 'About Prime' });
addKey('nav_item_2', { pt: 'Soluções', es: 'Soluciones', en: 'Solutions' });
addKey('nav_item_2_mobile', { pt: 'Soluções', es: 'Soluciones', en: 'Solutions' });
addKey('nav_item_3', { pt: 'Produtos', es: 'Productos', en: 'Products' });
addKey('nav_item_3_mobile', { pt: 'Produtos', es: 'Productos', en: 'Products' });
addKey('nav_item_4', { pt: 'Aplicações', es: 'Aplicaciones', en: 'Applications' });
addKey('nav_item_4_mobile', { pt: 'Aplicações', es: 'Aplicaciones', en: 'Applications' });
addKey('nav_item_5', { pt: 'Ferramentas', es: 'Herramientas', en: 'Tools' });
addKey('nav_item_5_mobile', { pt: 'Ferramentas', es: 'Herramientas', en: 'Tools' });
addKey('nav_item_6', { pt: 'Conteúdo', es: 'Contenido', en: 'Content' });
addKey('nav_item_6_mobile', { pt: 'Conteúdo', es: 'Contenido', en: 'Content' });

// Navigation subItems
addKey('nav_sub_item_2_0', { pt: 'Visão Geral e Serviços', es: 'Visión general y servicios', en: 'Overview and Services' });
addKey('nav_sub_item_2_1', { pt: 'Instrumentação de Processos', es: 'Instrumentación de procesos', en: 'Process Instrumentation' });
addKey('nav_sub_item_2_2', { pt: 'Instrumentação Analítica', es: 'Instrumentación analítica', en: 'Analytical Instrumentation' });
addKey('nav_sub_item_2_3', { pt: 'Segurança: detecção e combate a incêndio', es: 'Seguridad: detección y protección contra incendios', en: 'Safety: Gas Detection and Fire Suppression' });
addKey('nav_sub_item_2_4', { pt: 'Soluções Integradas', es: 'Soluciones integradas', en: 'Integrated Solutions' });
addKey('nav_sub_item_2_5', { pt: 'Instalação de Rede de Gases', es: 'Instalación de redes de gases', en: 'Gas Distribution Network Installation' });
addKey('nav_sub_item_2_6', { pt: 'Guia Técnico de Ar Comprimido', es: 'Guía técnica de aire comprimido', en: 'Compressed Air Technical Guide' });
addKey('nav_sub_item_2_7', { pt: 'Levantamento 3D e As Built', es: 'Levantamiento 3D y As-Built', en: '3D Survey and As-Built' });

addKey('nav_sub_item_3_0', { pt: 'Ver Todos', es: 'Ver todos', en: 'View All' });
addKey('nav_sub_item_3_1', { pt: 'Cilindros de Alumínio', es: 'Cilindros de aluminio', en: 'Aluminum Cylinders' });
addKey('nav_sub_item_3_2', { pt: 'Cilindros Tipo 4', es: 'Cilindros Tipo 4', en: 'Type 4 Cylinders' });
addKey('nav_sub_item_3_3', { pt: 'Conexões para Instrumentação', es: 'Conexiones para instrumentación', en: 'Instrumentation Fittings' });
addKey('nav_sub_item_3_4', { pt: 'Detectores de Vazamento', es: 'Detectores de fugas', en: 'Leak Detectors' });
addKey('nav_sub_item_3_5', { pt: 'Dewars e Recipientes Criogênicos', es: 'Dewars y recipientes criogénicos', en: 'Dewars and Cryogenic Containers' });
addKey('nav_sub_item_3_6', { pt: 'Geração de Oxigênio e Anestesia', es: 'Generación de oxígeno y anestesia', en: 'Oxygen Generation and Anesthesia' });
addKey('nav_sub_item_3_7', { pt: 'Equipamentos para Corte e Solda', es: 'Equipos para corte y soldadura', en: 'Cutting and Welding Equipment' });
addKey('nav_sub_item_3_8', { pt: 'Reguladores de Gases Especiais', es: 'Reguladores para gases especiales', en: 'Specialty Gas Regulators' });
addKey('nav_sub_item_3_9', { pt: 'Reguladores Hidráulicos', es: 'Reguladores hidráulicos', en: 'Hydraulic Regulators' });
addKey('nav_sub_item_3_10', { pt: 'Reguladores para Calibração de Equipamentos', es: 'Reguladores para calibración de equipos', en: 'Equipment Calibration Regulators' });
addKey('nav_sub_item_3_11', { pt: 'Sistemas de Combate a Incêndio', es: 'Sistemas de extinción de incendios', en: 'Fire Suppression Systems' });
addKey('nav_sub_item_3_12', { pt: 'Transmissores: Pressão - Nível - Temperatura', es: 'Transmisores: presión - nivel - temperatura', en: 'Transmitters: Pressure - Level - Temperature' });
addKey('nav_sub_item_3_13', { pt: 'Válvulas Industriais - Medicinais - Especiais', es: 'Válvulas industriales - medicinales - especiales', en: 'Industrial - Medical - Specialty Valves' });

addKey('nav_sub_item_4_0', { pt: 'Ver Todas', es: 'Ver todas', en: 'View All' });
addKey('nav_sub_item_4_1', { pt: 'Óleo & Gás', es: 'Petróleo y gas', en: 'Oil & Gas' });
addKey('nav_sub_item_4_2', { pt: 'Farmacêutico', es: 'Farmacéutica', en: 'Pharmaceutical' });
addKey('nav_sub_item_4_3', { pt: 'Hospitalar', es: 'Hospitalaria', en: 'Healthcare' });
addKey('nav_sub_item_4_4', { pt: 'Laboratórios Analíticos', es: 'Laboratorios analíticos', en: 'Analytical Laboratories' });
addKey('nav_sub_item_4_5', { pt: 'Indústria Química', es: 'Industria química', en: 'Chemical Industry' });
addKey('nav_sub_item_4_6', { pt: 'Alimentos e Bebidas', es: 'Alimentos y bebidas', en: 'Food and Beverage' });
addKey('nav_sub_item_4_7', { pt: 'Automotivo', es: 'Automotriz', en: 'Automotive' });
addKey('nav_sub_item_4_8', { pt: 'Criogenia', es: 'Criogenia', en: 'Cryogenics' });
addKey('nav_sub_item_4_9', { pt: 'Metal Mecânica', es: 'Metalmecánica', en: 'Metalworking' });
addKey('nav_sub_item_4_10', { pt: 'Energias Renováveis', es: 'Energías renovables', en: 'Renewable Energy' });
addKey('nav_sub_item_4_11', { pt: 'Mineração', es: 'Minería', en: 'Mining' });

addKey('nav_sub_item_5_0', { pt: 'Simuladores (Web)', es: 'Simuladores (web)', en: 'Web Simulators' });
addKey('nav_sub_item_5_1', { pt: 'Calculadoras Prime', es: 'Calculadoras Prime', en: 'Prime Calculators' });

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
addKey('home_hero_badge', { pt: "ENGENHARIA E INSTRUMENTAÇÃO", es: "INGENIERÍA E INSTRUMENTACIÓN", en: "ENGINEERING AND INSTRUMENTATION" });
addKey('home_hero_title', {
  pt: "Excelência técnica em engenharia aplicada, segurança e soluções para processos críticos.",
  es: "Excelencia técnica en ingeniería aplicada, seguridad y soluciones para procesos críticos.",
  en: "Technical excellence in applied engineering, safety, and solutions for critical processes."
});
addKey('home_hero_desc', {
  pt: "Equipamentos, integração técnica e engenharia aplicada para processos críticos na indústria, pesquisa e aplicações médicas.",
  es: "Equipos, integración técnica e ingeniería aplicada para procesos críticos en la industria, la investigación y las aplicaciones médicas.",
  en: "Equipment, technical integration, and applied engineering for critical processes in industry, research, and medical applications."
});
addKey('home_hero_btn1', { pt: "NOSSAS SOLUÇÕES", es: "NUESTRAS SOLUCIONES", en: "OUR SOLUTIONS" });
addKey('home_hero_btn2', { pt: "QUEM SOMOS", es: "QUIÉNES SOMOS", en: "ABOUT US" });
addKey('home_about_img', { pt: "/images/home/imagem-para-home-site.webp", es: "/images/home/imagem-para-home-site.webp", en: "/images/home/imagem-para-home-site.webp" });
addKey('home_about_stat_num', { pt: "100%", es: "100%", en: "100%" });
addKey('home_about_stat_txt', { pt: "Conformidade Técnica", es: "Conformidad Técnica", en: "Technical Compliance" });
addKey('home_about_label', { pt: "Quem Somos", es: "Quiénes Somos", en: "About Us" });
addKey('home_about_heading', {
  pt: "Onde a precisão técnica encontra a confiabilidade operacional.",
  es: "Donde la precisión técnica se encuentra con la confiabilidad operacional.",
  en: "Where technical precision meets operational reliability."
});
addKey('home_about_p1', {
  pt: "Sua operação não pode parar. Por isso, transformamos complexidade técnica em estabilidade operacional.",
  es: "Su operación no puede detenerse. Por eso, transformamos la complejidad técnica en estabilidad operacional.",
  en: "Your operation cannot stop. That is why we turn technical complexity into operational stability."
});
addKey('home_about_p2', {
  pt: "Entregamos engenharia aplicada e sistemas de controle precisos. O resultado? Mais segurança, rastreabilidade e continuidade para o seu processo.",
  es: "Entregamos ingeniería aplicada y sistemas de control precisos. ¿El resultado? Mayor seguridad, trazabilidad y continuidad para su proceso.",
  en: "We deliver applied engineering and precise control systems. The result? Greater safety, traceability, and continuity for your process."
});
addKey('home_feat1_title', { pt: "Engenharia sem margem para erro", es: "Ingeniería sin margen de error", en: "Engineering with no margin for error" });
addKey('home_feat1_desc', {
  pt: "Projetamos skids e painéis customizados para aplicações críticas. Soluções dimensionadas para a mais alta exigência.",
  es: "Diseñamos skids y paneles personalizados para aplicaciones críticas. Soluciones dimensionadas para los requisitos más exigentes.",
  en: "We design custom skids and panels for critical applications. Solutions engineered for the most demanding requirements."
});
addKey('home_feat2_title', { pt: "Rastreabilidade de ponta a ponta", es: "Trazabilidad de extremo a extremo", en: "End-to-End Traceability" });
addKey('home_feat2_desc', {
  pt: "Asseguramos conformidade total. Documentação rigorosa e suporte para processos que exigem controle absoluto.",
  es: "Aseguramos la conformidad total. Documentación rigurosa y soporte para procesos que exigen un control absoluto.",
  en: "We ensure full compliance. Rigorous documentation and support for processes that require absolute control."
});
addKey('home_feat3_title', { pt: "Controle sob medida", es: "Control a medida", en: "Tailored Control" });
addKey('home_feat3_desc', {
  pt: "Colocamos a inteligência nas suas mãos. Instrumentação e IHM com leitura exata e resposta imediata.",
  es: "Ponemos la inteligencia en sus manos. Instrumentación e IHM con lectura precisa y respuesta inmediata.",
  en: "We put intelligence in your hands, with HMI and instrumentation delivering precise readings and immediate response."
});
addKey('home_about_btn', { pt: "Conheça a Prime", es: "Conozca Prime", en: "Discover Prime" });

// Counters
addKey('home_stat_1_lbl', { pt: "Anos de Experiência", es: "Años de experiencia", en: "Years of Experience" });
addKey('home_stat_2_lbl', { pt: "Projetos Entregues", es: "Proyectos entregados", en: "Projects Delivered" });
addKey('home_stat_3_lbl', { pt: "Segurança Operacional", es: "Seguridad operacional", en: "Operational Safety" });
addKey('home_stat_4_lbl', { pt: "Marcas Parceiras", es: "Marcas asociadas", en: "Partner Brands" });

addKey('home_sol_label', { pt: "Soluções Integradas", es: "Soluciones integradas", en: "Integrated Solutions" });
addKey('home_sol_title', { pt: "Nossas Soluções e Produtos", es: "Nuestras soluciones y productos", en: "Our Solutions and Products" });
addKey('home_sol_0_title', { pt: "Instrumentação de Processos", es: "Instrumentación de procesos", en: "Process Instrumentation" });
addKey('home_sol_0_desc', { pt: "Transmissores, sensores, reguladores e sistemas de medição de precisão.", es: "Transmisores, sensores, reguladores y sistemas de medición de precisión.", en: "Transmitters, sensors, regulators, and precision measurement systems." });
addKey('home_sol_1_title', { pt: "Instrumentação Analítica", es: "Instrumentación analítica", en: "Analytical Instrumentation" });
addKey('home_sol_1_desc', { pt: "Analisadores de processo, cromatógrafos e detectores de gases.", es: "Analizadores de proceso, cromatógrafos y detectores de gases.", en: "Process analyzers, chromatographs, and gas detectors." });
addKey('home_sol_2_title', { pt: "Segurança: detecção e combate a incêndio", es: "Seguridad: detección y protección contra incendios", en: "Safety: Gas Detection and Fire Suppression" });
addKey('home_sol_2_desc', { pt: "Cilindros, reguladores, dewars e sistemas de combate a incêndio.", es: "Cilindros, reguladores, dewars y sistemas de combate a incendios.", en: "Cylinders, regulators, dewars, and fire suppression systems." });
addKey('home_sol_3_title', { pt: "Soluções Integradas", es: "Soluciones integradas", en: "Integrated Solutions" });
addKey('home_sol_3_desc', { pt: "Skids, painéis e sistemas customizados para sua planta.", es: "Skids, paneles y sistemas personalizados para su planta.", en: "Skids, panels, and custom systems for your plant." });
addKey('home_sol_4_title', { pt: "Engenharia Aplicada", es: "Ingeniería aplicada", en: "Applied Engineering" });
addKey('home_sol_4_desc', { pt: "Consultoria técnica, especificação e suporte para processos críticos.", es: "Consultoría técnica, especificación y soporte para procesos críticos.", en: "Technical consulting, specification, and support for critical processes." });
addKey('home_sol_5_title', { pt: "Cilindros de Alumínio", es: "Cilindros de aluminio", en: "Aluminum Cylinders" });
addKey('home_sol_5_desc', { pt: "Cilindros leves e resistentes para transporte de gases comprimidos.", es: "Cilindros ligeros y resistentes para el transporte de gases comprimidos.", en: "Lightweight and resistant cylinders for compressed gas transport." });
addKey('home_sol_6_title', { pt: "Cilindros Tipo 4", es: "Cilindros Tipo 4", en: "Type 4 Cylinders" });
addKey('home_sol_6_desc', { pt: "Cilindros compósitos de alta performance para logística e mobilidade.", es: "Cilindros compuestos de alto rendimiento para logística y movilidad.", en: "High-performance composite cylinders for logistics and mobility." });
addKey('home_sol_7_title', { pt: "Conexões para Instrumentação", es: "Conexiones para instrumentación", en: "Instrumentation Fittings" });
addKey('home_sol_7_desc', { pt: "Conexões certificadas para aplicações analíticas e industriais.", es: "Conexiones certificadas para aplicaciones analíticas e industriales.", en: "Certified fittings for analytical and industrial applications." });
addKey('home_sol_8_title', { pt: "Dewars e Recipientes Criogênicos", es: "Dewars y recipientes criogénicos", en: "Dewars and Cryogenic Containers" });
addKey('home_sol_8_desc', { pt: "Recipientes criogênicos para armazenamento de gases liquefeitos.", es: "Recipientes criogénicos para el almacenamiento de gases licuados.", en: "Cryogenic vessels for liquefied gas storage." });
addKey('home_sol_9_title', { pt: "Reguladores de Gases Especiais", es: "Reguladores para gases especiales", en: "Specialty Gas Regulators" });
addKey('home_sol_9_desc', { pt: "Reguladores de alta performance para gases especiais e calibração.", es: "Reguladores de alto rendimiento para gases especiales y calibración.", en: "High-performance regulators for specialty gases and calibration." });

addKey('home_prod_btn', { pt: "Linha de Produtos", es: "Línea de Productos", en: "Product Range" });
addKey('home_app_label', { pt: "Aplicações Industriais", es: "Aplicaciones industriales", en: "Industrial Applications" });
addKey('home_app_title', { pt: "Onde a engenharia da Prime Products faz a diferença.", es: "Donde la ingeniería de Prime Products marca la diferencia.", en: "Where Prime Products engineering makes a difference." });
addKey('home_app_0_lbl', { pt: "Óleo & Gás", es: "Petróleo y gas", en: "Oil & Gas" });
addKey('home_app_0_desc', { pt: "Instrumentação certificada ATEX para refinarias e plantas de processo.", es: "Instrumentación certificada ATEX para refinerías y plantas de proceso.", en: "ATEX certified instrumentation for refineries and process plants." });
addKey('home_app_1_lbl', { pt: "Hospitalar", es: "Hospitalaria", en: "Healthcare" });
addKey('home_app_1_desc', { pt: "Gases medicinais, geração de oxigênio e sistemas de combate a incêndio.", es: "Gases medicinales, generación de oxígeno y sistemas de extinción de incendios.", en: "Medical gases, oxygen generation, and fire suppression systems." });
addKey('home_app_2_lbl', { pt: "Laboratórios Analíticos", es: "Laboratorios analíticos", en: "Analytical Laboratories" });
addKey('home_app_2_desc', { pt: "Gases de alta pureza, reguladores analíticos e criogenia.", es: "Gases de alta pureza, reguladores analíticos y criogenia.", en: "High purity gases, analytical regulators, and cryogenics." });

addKey('home_blog_label', { pt: "Informação Qualificada", es: "Información Especializada", en: "Qualified Technical Information" });
addKey('home_blog_title', { pt: "Conteúdo Técnico", es: "Contenido Técnico", en: "Technical Content" });
addKey('home_faq_label', { pt: "Tire suas dúvidas", es: "Resuelva sus dudas", en: "Get Your Questions Answered" });
addKey('home_faq_title', { pt: "Perguntas Frequentes", es: "Preguntas frecuentes", en: "Frequently Asked Questions" });

// FAQs
addKey('home_faq_0_q', { pt: "A Prime Products atende em todo o Brasil?", es: "¿Prime Products atiende en todo Brasil?", en: "Does Prime Products serve all of Brazil?" });
addKey('home_faq_0_a', {
  pt: "Sim. Possuímos estrutura comercial e de engenharia para atender demandas em todo o território nacional, oferecendo suporte técnico especializado tanto remoto quanto em campo para implantações de grande porte.",
  es: "Sí. Contamos con una estructura comercial y de ingeniería para atender demandas en todo el territorio nacional, ofreciendo soporte técnico especializado tanto remoto como en campo para implantaciones de gran escala.",
  en: "Yes. We have a commercial and engineering structure to meet demands throughout the national territory, offering specialized technical support both remotely and in the field for large-scale implementations."
});
addKey('home_faq_1_q', { pt: "Os equipamentos possuem certificados de calibração?", es: "¿Los equipos cuentan con certificados de calibración?", en: "Do the instruments come with calibration certificates?" });
addKey('home_faq_1_a', {
  pt: "Sim. Fornecemos nossos instrumentos de medição e sistemas analíticos com certificados de calibração rastreáveis RBC (Rede Brasileira de Calibração) e padrões do INMETRO, garantindo conformidade com normas de qualidade.",
  es: "Sí. Suministramos nuestros instrumentos de medición y sistemas analíticos con certificados de calibración trazables a la RBC (Red Brasileña de Calibración) y patrones de INMETRO, garantizando la conformidad con las normas de calidad.",
  en: "Yes. We supply our measuring instruments and analytical systems with calibration certificates traceable to the RBC (Brazilian Calibration Network) and INMETRO standards, ensuring compliance with quality regulations."
});
addKey('home_faq_2_q', { pt: "Quais certificações técnicas as soluções da Prime atendem?", es: "¿Qué certificaciones técnicas cumplen las soluciones de Prime?", en: "What technical certifications do Prime's solutions meet?" });
addKey('home_faq_2_a', {
  pt: "Nossas soluções e skids integrados atendem a normas nacionais e internacionais rigorosas, incluindo NR-13 para vasos de pressão, NR-12 para segurança de máquinas, diretrizes da ANVISA (grau médico/farmacêutico), certificações SIL 2/3 de segurança funcional e certificações ATEX/IECEx para áreas classificadas.",
  es: "Nuestras soluciones y skids integrados cumplen con estrictas normas nacionales e internacionales, incluyendo NR-13 para recipientes a presión, NR-12 para seguridad de maquinaria, directrices de ANVISA (grado médico/farmacéutico), certificaciones de seguridad funcional SIL 2/3 y certificaciones ATEX/IECEx para áreas clasificadas.",
  en: "Our solutions and integrated skids meet strict national and international standards, including NR-13 for pressure vessels, NR-12 for machinery safety, ANVISA guidelines (medical/pharmaceutical grade), SIL 2/3 functional safety certifications, and ATEX/IECEx certifications for hazardous areas."
});
addKey('home_faq_3_q', { pt: "Qual o prazo médio de entrega para equipamentos e sistemas?", es: "¿Cuál es el plazo promedio de entrega de equipos y sistemas?", en: "What is the average delivery time for equipment and systems?" });
addKey('home_faq_3_a', {
  pt: "Mantemos um estoque estratégico de componentes e sobressalentes críticos para atendimento imediato. Para skids, painéis dedicados e soluções customizadas de engenharia aplicada, o prazo é dimensionado de acordo com a complexidade técnica e detalhado na proposta comercial.",
  es: "Mantenemos un stock estratégico de componentes y repuestos críticos para atención inmediata. Para skids, paneles dedicados y soluciones personalizadas de ingeniería aplicada, el plazo se dimensiona según la complejidad técnica y se detalla en la propuesta comercial.",
  en: "We maintain a strategic stock of critical components and spare parts for immediate service. For skids, dedicated panels, and custom applied engineering solutions, the lead time is sized according to the technical complexity and detailed in the commercial proposal."
});
addKey('home_faq_4_q', { pt: "A Prime executa a montagem física dos sistemas além do projeto?", es: "¿Prime realiza el montaje físico de los sistemas además del diseño?", en: "Does Prime perform the physical assembly of the systems in addition to the design?" });
addKey('home_faq_4_a', {
  pt: "Sim. Desenvolvemos soluções completas do tipo turn-key, executando desde a engenharia de projeto (conceitual e detalhada) até a montagem mecânica, montagem de skids de válvulas, conexões de tubulação de alta pressão, teste de estanqueidade, comissionamento em campo (start-up) e treinamento operacional.",
  es: "Sí. Desarrollamos soluciones completas llave en mano (turn-key), ejecutando desde la ingeniería de diseño (conceptual y detallada) hasta el montaje mecánico, montaje de skids de válvulas, conexiones de tuberías de alta presión, pruebas de estanqueidad, comisionamiento en campo (puesta en marcha) y entrenamiento operativo.",
  en: "Yes. We develop complete turn-key solutions, executing from design engineering (conceptual and detailed) to mechanical assembly, assembly of valve skids, high-pressure piping connections, leak testing, field commissioning (start-up), and operational training."
});
addKey('home_faq_5_q', { pt: "Quais disciplinas de engenharia a Prime Products atende em seus projetos?", es: "¿Qué disciplinas de ingeniería atiende Prime Products en sus proyectos?", en: "What engineering disciplines does Prime Products cover in its projects?" });
addKey('home_faq_5_a', {
  pt: "Nossa equipe multidisciplinar atende plenamente as demandas de Instrumentação e Controle de Processos, Engenharia Civil (bases e estruturas de suporte), Engenharia Elétrica (painéis de comando e distribuição de força) e sistemas de HVAC (aquecimento, ventilação e ar condicionado) aplicados a salas de analisadores e abrigos industriais.",
  es: "Nuestro equipo multidisciplinario atiende plenamente las demandas de instrumentación y control de procesos, ingeniería civil (bases y estructuras de soporte), ingeniería eléctrica (paneles de control y distribución de fuerza) y sistemas de HVAC (calefacción, ventilación y aire acondicionado) aplicados a salas de analizadores y casetas industriales.",
  en: "Our multidisciplinary team fully meets the demands of process control and instrumentation, civil engineering (foundations and support structures), electrical engineering (control panels and power distribution), and HVAC systems (heating, ventilation, and air conditioning) applied to analyzer rooms and industrial shelters."
});

addKey('home_cta_title', { pt: "Engenharia de precisão para operações que não podem parar.", es: "Ingeniería de precisión para operaciones que no pueden detenerse.", en: "Precision engineering for operations that cannot stop." });
addKey('home_cta_desc', {
  pt: "Sente-se à mesa com nossos especialistas. Desenvolvemos skids e painéis customizados para os processos mais críticos da indústria.",
  es: "Converse con nuestros especialistas. Desarrollamos skids y paneles personalizados para los procesos más críticos de la industria.",
  en: "Talk with our specialists. We develop custom skids and panels for the industry's most critical processes."
});
addKey('home_cta_btn1', { pt: "Discutir meu projeto", es: "Hablar sobre mi proyecto", en: "Discuss My Project" });
addKey('home_cta_btn2', { pt: "Ver Soluções Integradas", es: "Ver soluciones integradas", en: "View Integrated Solutions" });

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
addKey('about_hero_title', {
  pt: "Engenharia aplicada e soluções integradas para gases, instrumentação e processos críticos",
  es: "Ingeniería aplicada y soluciones integradas para gases, instrumentación y procesos críticos",
  en: "Applied engineering and integrated solutions for gases, instrumentation, and critical processes"
});
addKey('about_main_img', { pt: "/images/quem-somos/quem-somos-campo.webp", es: "/images/quem-somos/quem-somos-campo.webp", en: "/images/quem-somos/quem-somos-campo.webp" });
addKey('about_stat_num', { pt: "+35", es: "+35", en: "+35" });
addKey('about_stat_txt', {
  pt: "Anos transformando rigor técnico em segurança, confiabilidade e suporte para processos críticos.",
  es: "Años transformando el rigor técnico en seguridad, confiabilidad y soporte para procesos críticos.",
  en: "Years transforming technical rigor into safety, reliability, and support for critical processes."
});
addKey('about_intro_label', { pt: "Visão Geral", es: "Visión General", en: "Overview" });
addKey('about_intro_title', { pt: "Especialistas em processos críticos", es: "Especialistas en procesos críticos", en: "Critical Process Specialists" });
addKey('about_sec_p1', {
  pt: "A Prime Products atua no desenvolvimento e na integração de soluções técnicas para gases especiais, gases industriais, gases medicinais, instrumentação e sistemas aplicados a processos críticos.",
  es: "Prime Products actúa en el desarrollo y la integración de soluciones técnicas para gases especiales, gases industriales, gases medicinales, instrumentación y sistemas aplicados a procesos críticos.",
  en: "Prime Products operates in the development and integration of technical solutions for specialty gases, industrial gases, medical gases, instrumentation, and systems applied to critical processes."
});
addKey('about_sec_p2', {
  pt: "Nossa atuação combina fornecimento especializado, engenharia aplicada, instalação em campo, comissionamento, testes e suporte técnico, com foco em segurança, conformidade e confiabilidade operacional.",
  es: "Nuestra actuación combina suministro especializado, ingeniería aplicada, instalación en campo, comisionamiento, pruebas y soporte técnico, con enfoque en seguridad, conformidad y confiabilidad operacional.",
  en: "Our operations combine specialized supply, applied engineering, field installation, commissioning, testing, and technical support, with a focus on safety, compliance, and operational reliability."
});
addKey('about_sec_p3', {
  pt: "Atendemos empresas e instituições que exigem precisão técnica, rastreabilidade, documentação consistente e desempenho estável em aplicações industriais, laboratoriais, hospitalares e científicas.",
  es: "Atendemos empresas e instituciones que exigen precisión técnica, trazabilidad, documentación consistente y desempeño estable en aplicaciones industriales, laboratoriales, hospitalarias y científicas.",
  en: "We serve companies and institutions that require technical precision, traceability, consistent documentation, and stable performance in industrial, laboratory, healthcare, and scientific applications."
});
addKey('about_vp_title', {
  pt: "Engenharia ponta a ponta, com responsabilidade técnica real",
  es: "Ingeniería de extremo a extremo, con responsabilidad técnica real",
  en: "End-to-end engineering with real technical responsibility"
});
addKey('about_vp_p1', {
  pt: "Em operações críticas, a escolha inadequada de componentes, a instalação incorreta ou a falta de integração entre fornecimento e campo podem comprometer segurança, desempenho e continuidade operacional.",
  es: "En operaciones críticas, la elección inadecuada de componentes, la instalación incorrecta o la falta de integración entre el suministro y el campo pueden comprometer la seguridad, el rendimiento y la continuidad operacional.",
  en: "In critical operations, inadequate selection of components, incorrect installation, or lack of integration between supply and field can compromise safety, performance, and operational continuity."
});
addKey('about_vp_p2', {
  pt: "A Prime Products reduz esse risco ao atuar de forma integrada, conectando especificação técnica, fornecimento, instalação, comissionamento e suporte, para entregar soluções mais seguras, confiáveis e coerentes com a realidade de cada processo.",
  es: "Prime Products reduce este riesgo al actuar de forma integrada, conectando especificación técnica, suministro, instalación, comisionamiento y soporte, para entregar soluciones más seguras, confiables y coherentes con la realidad de cada proceso.",
  en: "Prime Products reduces this risk by acting in an integrated manner, connecting technical specification, supply, installation, commissioning, and support, to deliver solutions that are safer, more reliable, and consistent with the reality of each process."
});
addKey('como_trabalhamos', { pt: "Como Trabalhamos", es: "Cómo Trabajamos", en: "How We Work" });
addKey('about_table_title', { pt: "Soluções técnicas com visão completa do processo", es: "Soluciones técnicas con visión completa del proceso", en: "Technical solutions with a complete view of the process" });
addKey('about_table_sub', {
  pt: "Nossa abordagem considera não apenas o equipamento isolado, mas o contexto real de aplicação, os requisitos normativos, a compatibilidade técnica dos materiais e a confiabilidade da operação ao longo do tempo.",
  es: "Nuestro enfoque considera no solo el equipo aislado, sino el contexto real de aplicación, los requisitos normativos, la compatibilidad técnica de los materiales y la confiabilidad de la operación a lo largo del tiempo.",
  en: "Our approach considers not only the isolated equipment, but the actual context of the application, regulatory requirements, technical compatibility of materials, and operational reliability over time."
});
addKey('tbl_th_1', { pt: "Fase", es: "Fase", en: "Phase" });
addKey('tbl_th_2', { pt: "O que fazemos", es: "Qué hacemos", en: "What we do" });
addKey('tbl_th_3', { pt: "Ganho operacional", es: "Ganancia operacional", en: "Operational gain" });

addKey('fase_1', { pt: "1. Análise técnica", es: "1. Análisis técnico", en: "1. Technical analysis" });
addKey('fase_1_desc', {
  pt: "Avaliação da aplicação, compatibilidade dos gases, requisitos do processo e necessidades da instalação.",
  es: "Evaluación de la aplicación, compatibilidad de los gases, requisitos del proceso y necesidades de la instalación.",
  en: "Evaluation of the application, gas compatibility, process requirements, and installation needs."
});
addKey('fase_1_gain', {
  pt: "Maior precisão na especificação e redução de falhas de concepção.",
  es: "Mayor precisión en la especificación y reducción de fallas de concepción.",
  en: "Greater specification accuracy and reduction of design conceptual failures."
});

addKey('fase_2', { pt: "2. Fornecimento especializado", es: "2. Suministro especializado", en: "2. Specialized supply" });
addKey('fase_2_desc', {
  pt: "Portfólio técnico em gases, instrumentação, reguladores, manifolds, conexões, detecção e sistemas integrados.",
  es: "Portafolio técnico en gases, instrumentación, reguladores, manifolds, conexiones, detección y sistemas integrados.",
  en: "Technical portfolio in gases, instrumentation, regulators, manifolds, fittings, detection, and integrated systems."
});
addKey('fase_2_gain', {
  pt: "Acesso a soluções compatíveis, rastreáveis e alinhadas ao processo.",
  es: "Acceso a soluciones compatibles, trazables y alineadas al proceso.",
  en: "Access to compatible, traceable solutions aligned with the process."
});

addKey('fase_3', { pt: "3. Instalação e integração", es: "3. Instalación e integración", en: "3. Installation and integration" });
addKey('fase_3_desc', {
  pt: "Montagem de redes, painéis, sistemas, interligações e infraestrutura técnica em campo.",
  es: "Montaje de redes, paneles, sistemas, interconexiones e infraestructura técnica en campo.",
  en: "Assembly of networks, panels, systems, interconnections, and field technical infrastructure."
});
addKey('fase_3_gain', {
  pt: "Segurança operacional, melhor organização da instalação e redução de retrabalho.",
  es: "Seguridad operacional, mejor organización de la instalación y reducción de reprocesos.",
  en: "Operational safety, better installation organization, and reduction of rework."
});

addKey('fase_4', { pt: "4. Comissionamento e testes", es: "4. Comisionamiento y pruebas", en: "4. Commissioning and testing" });
addKey('fase_4_desc', {
  pt: "Verificações, testes, ajustes, entrega técnica e suporte.",
  es: "Verificaciones, pruebas, ajustes, entrega técnica y soporte.",
  en: "Verifications, testing, adjustments, technical delivery, and support."
});
addKey('fase_4_gain', {
  pt: "Entrada em operação com mais confiabilidade, conformidade e previsibilidade.",
  es: "Entrada en operación con más confiabilidad, conformidad y previsibilidad.",
  en: "Startup with greater reliability, compliance, and predictability."
});

addKey('about_diff_label', { pt: "Nossos Diferenciais", es: "Nuestros Diferenciales", en: "Our Advantages" });
addKey('about_diff_title', { pt: "Por que a Prime Products?", es: "¿Por qué Prime Products?", en: "Why Prime Products?" });
addKey('about_diff_p1', {
  pt: "Nosso foco está no fornecimento consultivo e na engenharia de alta integridade técnica. Entendemos a responsabilidade envolvida em processos críticos e operamos em total conformidade com normas nacionais e internacionais aplicáveis.",
  es: "Nuestro enfoque está en el suministro consultivo y la ingeniería de alta integridad técnica. Entendemos la responsabilidad involucrada en procesos críticos y operamos en total conformidad con las normas nacionales e internacionales aplicables.",
  en: "Our focus is on consultative supply and high-integrity technical engineering. We understand the responsibility involved in critical operations and operate in full compliance with applicable national and international standards."
});

addKey('dif_0', { pt: "Soluções integradas com visão técnica do processo", es: "Soluciones integradas con visión técnica del proceso", en: "Integrated solutions with a technical view of the process" });
addKey('dif_1', { pt: "Fornecimento especializado com suporte de aplicação", es: "Suministro especializado con soporte de aplicación", en: "Specialized supply with application support" });
addKey('dif_2', { pt: "Instalação, testes e comissionamento em campo", es: "Instalación, pruebas y comisionamiento en campo", en: "Field installation, testing, and commissioning" });
addKey('dif_3', { pt: "Foco em segurança operacional e conformidade técnica", es: "Enfoque en seguridad operacional y conformidad técnica", en: "Focus on operational safety and technical compliance" });
addKey('dif_4', { pt: "Documentação e rastreabilidade como parte da entrega", es: "Documentación y trazabilidad como parte de la entrega", en: "Documentation and traceability as part of the delivery" });
addKey('dif_5', { pt: "Atendimento a ambientes de alta exigência técnica", es: "Atención a entornos de alta exigencia técnica", en: "Service for environments with high technical demands" });

addKey('about_mv_0_title', { pt: 'Nossa Missão', es: 'Nuestra Misión', en: 'Our Mission' });
addKey('about_mv_0_text', {
  pt: 'Desenvolver e implementar soluções técnicas em gases, instrumentação e engenharia aplicada, com foco em segurança, confiabilidade e desempenho para processos críticos na indústria, laboratórios, hospitais e centros de pesquisa.',
  es: 'Desarrollar e implementar soluciones técnicas en gases, instrumentación e ingeniería aplicada, con enfoque en seguridad, confiabilidad y rendimiento para procesos críticos en la industria, laboratorios, hospitales y centros de investigación.',
  en: 'To develop and implement technical solutions in gases, instrumentation, and applied engineering, focusing on safety, reliability, and performance for critical processes in industry, laboratories, hospitals, and research centers.'
});
addKey('about_mv_1_title', { pt: 'Nossa Visão', es: 'Nuestra Visión', en: 'Our Vision' });
addKey('about_mv_1_text', {
  pt: 'Ser referência nacional em soluções integradas para gases e instrumentação, reconhecida pela excelência técnica, pela confiabilidade operacional e pela capacidade de atender aplicações críticas com padrão profissional elevado.',
  es: 'Ser referencia nacional en soluciones integradas para gases e instrumentación, reconocida por su excelencia técnica, confiabilidad operacional y capacidad de atender aplicaciones críticas con un alto estándar profesional.',
  en: 'To be a national reference in integrated solutions for gases and instrumentation, recognized for technical excellence, operational reliability, and the ability to serve critical applications with a high professional standard.'
});

// Values
addKey('val_0_t', { pt: 'Excelência técnica', es: 'Excelencia técnica', en: 'Technical excellence' });
addKey('val_0_d', { pt: 'Engenharia aplicada com foco em desempenho real, coerência técnica e validação de processo.', es: 'Ingeniería aplicada enfocada en rendimiento real, coherencia técnica y validación de procesos.', en: 'Applied engineering focused on real performance, technical coherence, and process validation.' });
addKey('val_1_t', { pt: 'Segurança e conformidade', es: 'Seguridad y conformidad', en: 'Safety and compliance' });
addKey('val_1_d', { pt: 'Atuação orientada por normas, boas práticas e prevenção de risco em todas as etapas.', es: 'Actuación orientada por normas, buenas prácticas y prevención de riesgos en todas las etapas.', en: 'Actions guided by standards, best practices, and risk prevention at all stages.' });
addKey('val_2_t', { pt: 'Rastreabilidade e documentação', es: 'Trazabilidad y documentación', en: 'Traceability and documentation' });
addKey('val_2_d', { pt: 'Clareza técnica, organização das entregas e suporte à operação com documentação consistente.', es: 'Claridad técnica, organización de entregas y soporte a la operación con documentación consistente.', en: 'Technical clarity, organized deliveries, and operational support with consistent documentation.' });
addKey('val_3_t', { pt: 'Atendimento consultivo', es: 'Atención consultiva', en: 'Consultative service' });
addKey('val_3_d', { pt: 'Compromisso com a solução mais adequada, e não apenas com o fornecimento do item.', es: 'Compromiso con la solución más adecuada, y no solo con el suministro del artículo.', en: 'Commitment to the most appropriate solution, and not just the supply of the item.' });
addKey('val_4_t', { pt: 'Integridade e transparência', es: 'Integridad y transparencia', en: 'Integrity and transparency' });
addKey('val_4_d', { pt: 'Relação objetiva, responsável e alinhada ao que é tecnicamente viável e comercialmente sustentável.', es: 'Relación objetiva, responsable y alineada con lo técnicamente viable y comercialmente sostenible.', en: 'Objective, responsible relationship aligned with what is technically feasible and commercially sustainable.' });
addKey('val_5_t', { pt: 'Melhoria contínua', es: 'Mejora continua', en: 'Continuous improvement' });
addKey('val_5_d', { pt: 'Evolução permanente de processos, equipe, portfólio e capacidade de atendimento.', es: 'Evolución permanente de procesos, equipo, portafolio y capacidad de servicio.', en: 'Permanent evolution of processes, team, portfolio, and service capacity.' });

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
addKey('cont_hero_t', { pt: "Fale Conosco", es: "Contáctenos", en: "Contact Us" });
addKey('cont_hero_s', {
  pt: "Canais de suporte de engenharia e atendimento técnico especializado para o seu processo.",
  es: "Canales de soporte de ingeniería y atención técnica especializada para su proceso.",
  en: "Engineering support and specialized technical service channels for your process."
});
addKey('cont_info_t', { pt: "Informações de Contato", es: "Información de Contacto", en: "Contact Information" });
addKey('cont_info_d', {
  pt: "Nossa equipe de engenharia está pronta para analisar a viabilidade e propor a solução técnica adequada para a sua demanda.",
  es: "Nuestro equipo de ingeniería está listo para analizar la viabilidad y proponer la solución técnica adecuada para su demanda.",
  en: "Our engineering team is ready to analyze viability and propose the appropriate technical solution for your demand."
});
addKey('cont_addr_t', { pt: "Matriz", es: "Matriz", en: "Headquarters" });
addKey('cont_addr_1', { pt: "Belo Horizonte – Minas Gerais", es: "Belo Horizonte – Minas Gerais", en: "Belo Horizonte – Minas Gerais" });
addKey('cont_addr_2', { pt: "Atendimento Nacional", es: "Atención Nacional", en: "National Service" });
addKey('cont_ph_t', { pt: "Telefones", es: "Teléfonos", en: "Phones" });
addKey('cont_ph_1', { pt: "(31) 9 8670-8742", es: "(31) 9 8670-8742", en: "(31) 9 8670-8742" });
addKey('cont_em_t', { pt: "E-mail Técnico", es: "Correo Electrónico Técnico", en: "Technical E-mail" });
addKey('cont_em_1', { pt: "info@primeproducts.ind.br", es: "info@primeproducts.ind.br", en: "info@primeproducts.ind.br" });
addKey('cont_hours_t', { pt: "Horário", es: "Horario", en: "Business Hours" });
addKey('cont_hours_1', { pt: "Segunda a Sexta: 8h–18h", es: "Lunes a Viernes: 8h–18h", en: "Monday to Friday: 8:00 AM – 6:00 PM" });
addKey('cont_form_t', { pt: "Envie sua Mensagem", es: "Envíe su Mensaje", en: "Send Us a Message" });

// Form fields labels
addKey('lbl_name', { pt: "Nome *", es: "Nombre *", en: "Name *" });
addKey('placeholder_name', { pt: "Seu nome completo", es: "Su nombre completo", en: "Your full name" });
addKey('lbl_company', { pt: "Empresa", es: "Empresa", en: "Company" });
addKey('placeholder_company', { pt: "Nome da empresa", es: "Nombre de la empresa", en: "Company name" });
addKey('lbl_email', { pt: "E-mail *", es: "Correo electrónico *", en: "E-mail *" });
addKey('placeholder_email', { pt: "seu@email.com", es: "su@correo.com", en: "your@email.com" });
addKey('lbl_phone', { pt: "Telefone", es: "Teléfono", en: "Phone" });
addKey('placeholder_phone', { pt: "(11) 9 0000-0000", es: "(11) 9 0000-0000", en: "(11) 9 0000-0000" });
addKey('lbl_subject', { pt: "Assunto *", es: "Asunto *", en: "Subject *" });
addKey('placeholder_subject', { pt: "Descreva brevemente sua necessidade", es: "Describa brevemente su necesidad", en: "Briefly describe your need" });
addKey('lbl_message', { pt: "Mensagem *", es: "Mensaje *", en: "Message *" });
addKey('placeholder_message', { pt: "Detalhe sua aplicação, projeto ou dúvida técnica...", es: "Detalle su aplicación, proyecto o duda técnica...", en: "Detail your application, project, or technical question..." });
addKey('btn_send', { pt: "ENVIAR MENSAGEM", es: "ENVIAR MENSAJE", en: "SEND MESSAGE" });
addKey('btn_sending', { pt: "ENVIANDO...", es: "ENVIANDO...", en: "SENDING..." });
addKey('msg_success', { pt: "Mensagem Enviada!", es: "¡Mensaje Enviado!", en: "Message Sent!" });
addKey('msg_success_sub', { pt: "Nossa equipe entrará em contato em breve.", es: "Nuestro equipo se pondrá en contacto a la brevedad.", en: "Our team will contact you shortly." });
addKey('btn_send_new', { pt: "Enviar nova mensagem", es: "Enviar nuevo mensaje", en: "Send new message" });
addKey('msg_error', { pt: "Ocorreu um erro ao enviar. Tente novamente.", es: "Ocurrió un error al enviar. Intente nuevamente.", en: "An error occurred while sending. Please try again." });

// ─── PAGES TITLES ────────────────────────────────────────────────────────────
addKey('prod_hero_title', { pt: "Linha de Produtos", es: "Línea de Productos", en: "Product Range" });
addKey('prod_hero_sub', { pt: "Equipamentos engineering-grade para processos críticos industriais e laboratoriais.", es: "Equipos engineering-grade para procesos críticos industriales y laboratoriales.", en: "Engineering-grade equipment for critical industrial and laboratory processes." });
addKey('app_hero_title', { pt: "Segmentos e Aplicações", es: "Segmentos y Aplicaciones", en: "Segments and Applications" });
addKey('app_hero_sub', { pt: "Onde a Prime Products atua com especialidade técnica, segurança e conformidade.", es: "Donde Prime Products actúa con especialidad técnica, seguridad y conformidad.", en: "Where Prime Products operates with technical expertise, safety, and compliance." });
addKey('sol_hero_title', { pt: "Soluções e Serviços", es: "Soluciones y Servicios", en: "Solutions and Services" });
addKey('sol_hero_sub', { pt: "Engenharia de projetos, montagem física de sistemas, testes e suporte contínuo para processos industriais e laboratoriais.", es: "Ingeniería de proyectos, montaje físico de sistemas, pruebas y soporte continuo para procesos industriales y laboratoriales.", en: "Project engineering, physical system assembly, testing, and continuous support for industrial and laboratory processes." });
addKey('tools_hero_title', { pt: "Simuladores e Ferramentas", es: "Simuladores y Herramientas", en: "Simulators and Tools" });
addKey('tools_hero_sub', { pt: "Recursos online para auxiliar seus projetos e cálculos técnicos.", es: "Recursos en línea para auxiliar sus proyectos y cálculos técnicos.", en: "Online resources to assist your technical projects and calculations." });
addKey('articles_hero_title', { pt: "Artigos e Conteúdos Técnicos", es: "Artículos y Contenidos Técnicos", en: "Technical Articles and Content" });
addKey('articles_hero_sub', { pt: "Relatórios, especificações, manuais e guias para embasar suas decisões de engenharia.", es: "Informes, especificaciones, manuales y guías para respaldar sus decisiones de ingeniería.", en: "Reports, specifications, manuals, and guides to support your engineering decisions." });

// ─── DETAIL PAGES COMMON ──────────────────────────────────────────────────────
addKey('back_to_products', { pt: "Voltar para Produtos", es: "Volver a Productos", en: "Back to Products" });
addKey('back_to_applications', { pt: "Voltar para Aplicações", es: "Volver a Aplicaciones", en: "Back to Applications" });
addKey('back_to_articles', { pt: "Voltar para Conteúdo", es: "Volver a Contenido", en: "Back to Content" });
addKey('btn_quote', { pt: "Solicitar Orçamento / Suporte", es: "Solicitar Cotización / Soporte", en: "Request Quote / Support" });
addKey('solicitar_informacoes', { pt: "Solicitar Informações", es: "Solicitar Información", en: "Request Information" });
addKey('equipe_pronta', { pt: "Nossa equipe técnica está pronta para atender sua demanda.", es: "Nuestro equipo técnico está listo para atender su demanda.", en: "Our technical team is ready to serve your demand." });
addKey('artigos_relacionados', { pt: "Artigos Relacionados", es: "Artículos Relacionados", en: "Related Articles" });
addKey('galeria_tecnica', { pt: "Galeria Técnica", es: "Galería Técnica", en: "Technical Gallery" });
addKey('conteudo_breve', { pt: "Conteúdo completo em breve.", es: "Contenido completo muy pronto.", en: "Full content coming soon." });
addKey('artigo_nao_encontrado', { pt: "Artigo não encontrado", es: "Artículo no encontrado", en: "Article not found" });
addKey('voltar_conteudo', { pt: "Voltar para Conteúdo", es: "Volver a Contenido", en: "Back to Content" });
addKey('category_regulação', { pt: "Regulação", es: "Regulación", en: "Regulation" });
addKey('category_segurança', { pt: "Segurança", es: "Seguridad", en: "Safety" });
addKey('category_engenharia', { pt: "Engenharia", es: "Ingeniería", en: "Engineering" });
addKey('category_analítica', { pt: "Analítica", es: "Analítica", en: "Analytics" });
addKey('category_qualidade', { pt: "Qualidade", es: "Calidad", en: "Quality" });
addKey('category_normas', { pt: "Normas", es: "Normas", en: "Standards" });
addKey('category_inovação', { pt: "Inovação", es: "Innovación", en: "Innovation" });
addKey('category_manutenção', { pt: "Manutenção", es: "Mantenimiento", en: "Maintenance" });
addKey('category_engenharia de materiais', { pt: "Engenharia de Materiais", es: "Ingeniería de Materiales", en: "Materials Engineering" });
addKey('product_desc_title', { pt: "Descrição", es: "Descripción", en: "Description" });
addKey('other_products', { pt: "Outros Produtos", es: "Otros Productos", en: "Other Products" });
addKey('models_specs_title', { pt: "Modelos e Especificações Técnicas", es: "Modelos y Especificaciones Técnicas", en: "Models and Technical Specifications" });
addKey('datasheet_doc_title', { pt: "Datasheet e Documentação", es: "Ficha Técnica y Documentación", en: "Datasheet and Documentation" });
addKey('datasheet_doc_desc', {
  pt: "Solicite o datasheet técnico completo, ficha de especificações ou documentação de certificação deste produto diretamente com nossa equipe.",
  es: "Solicite la ficha técnica completa, la hoja de especificaciones o la documentación de certificación de este producto directamente a nuestro equipo.",
  en: "Request the complete technical datasheet, specification sheet, or certification documentation for this product directly from our team."
});
addKey('btn_request_datasheet', { pt: "Solicitar Datasheet", es: "Solicitar Ficha Técnica", en: "Request Datasheet" });
addKey('btn_request_certificates', { pt: "Solicitar Certificados", es: "Solicitar Certificados", en: "Request Certificates" });
addKey('quote_sent_success', { pt: "Solicitação enviada!", es: "¡Solicitud enviada!", en: "Request submitted!" });
addKey('btn_send_new_request', { pt: "Enviar nova solicitação", es: "Enviar nueva solicitud", en: "Send new request" });
addKey('product_not_found', { pt: "Produto não encontrado", es: "Producto no encontrado", en: "Product not found" });
addKey('about_app_title', { pt: "Sobre esta Aplicação", es: "Sobre esta Aplicación", en: "About this Application" });
addKey('challenges_title', { pt: "Principais Desafios", es: "Principales Desafíos", en: "Key Challenges" });
addKey('solutions_title', { pt: "Soluções Prime Products", es: "Soluciones Prime Products", en: "Prime Products Solutions" });
addKey('related_products_title', { pt: "Produtos Relacionados", es: "Productos Relacionados", en: "Related Products" });
addKey('app_gallery_title', { pt: "Galeria de Aplicações Técnicas", es: "Galería de Aplicaciones Técnicas", en: "Technical Applications Gallery" });
addKey('app_not_found', { pt: "Aplicação não encontrada", es: "Aplicación no encontrada", en: "Application not found" });
addKey('related_equipment_title', { pt: "Equipamentos Relacionados", es: "Equipos Relacionados", en: "Related Equipment" });
addKey('related_equipment_desc', { pt: "Componentes críticos utilizados na montagem das redes de gases.", es: "Componentes críticos utilizados en el montaje de redes de gases.", en: "Critical components used in gas network assembly." });
addKey('gases_project_title', { pt: "Precisa de um projeto de distribuição de gases?", es: "¿Necesita un proyecto de distribución de gases?", en: "Need a gas distribution project?" });
addKey('gases_project_desc', { pt: "Entre em contato com nossa equipe técnica para um dimensionamento sob medida.", es: "Póngase en contacto con nuestro equipo técnico para un dimensionamiento a medida.", en: "Contact our technical team for custom sizing." });
addKey('premium_solution', { pt: "Solução Premium", es: "Solución Premium", en: "Premium Solution" });
addKey('btn_request_technical_evaluation', { pt: "Solicitar Avaliação Técnica", es: "Solicitar Evaluación Técnica", en: "Request Technical Evaluation" });
addKey('digitalize_plant_title', { pt: "Pronto para digitalizar sua instalação?", es: "¿Listo para digitalizar su instalación?", en: "Ready to digitalize your facility?" });
addKey('digitalize_plant_desc', {
  pt: "Recomendamos iniciar com um Projeto-Piloto de 300 a 1.000 m², permitindo validar o fluxo completo (desde a captura em campo até o uso do modelo 3D pela sua equipe) antes de escalar para a planta inteira.",
  es: "Recomendamos comenzar con un Proyecto Piloto de 300 a 1.000 m², lo que permite validar el fluxo completo (desde la captura en el campo hasta el uso del modelo 3D por parte de su equipo) antes de escalar a toda la planta.",
  en: "We recommend starting with a 300 to 1,000 m² Pilot Project, allowing you to validate the complete workflow (from field capture to the use of the 3D model by your team) before scaling to the entire facility."
});
addKey('technical_guide', { pt: "Guia Técnico", es: "Guía Técnica", en: "Technical Guide" });
addKey('btn_request_diagnosis', { pt: "Solicitar Diagnóstico", es: "Solicitar Diagnóstico", en: "Request Diagnosis" });
addKey('express_tool', { pt: "Ferramenta Expressa", es: "Herramienta Express", en: "Express Tool" });
addKey('pressure_drop_estimation', { pt: "Estimativa de Queda de Pressão", es: "Estimación de Caída de Presión", en: "Pressure Drop Estimation" });
addKey('dimension_system_title', { pt: "Precisa dimensionar seu sistema?", es: "¿Necesita dimensionar su sistema?", en: "Need to size your system?" });
addKey('dimension_system_desc', {
  pt: "A engenharia da Prime Products realiza o diagnóstico de vazão, auditoria da qualidade ISO 8573 e projeto completo de redes para otimizar sua planta e garantir a eficiência energética.",
  es: "La ingeniería de Prime Products realiza diagnósticos de flujo, auditorías de calidad ISO 8573 y diseños completos de redes para optimizar su planta y garantizar la eficiencia energética.",
  en: "Prime Products engineering performs flow diagnostics, ISO 8573 quality audits, and complete network design to optimize your plant and ensure energy efficiency."
});
addKey('product_specs_title', { pt: "Especificações Técnicas", es: "Especificaciones Técnicas", en: "Technical Specifications" });
addKey('product_features_title', { pt: "Características Principales", es: "Características Principales", en: "Key Features" });
addKey('product_apps_title', { pt: "Aplicações Recomendadas", es: "Aplicaciones Recomendadas", en: "Recommended Applications" });
addKey('quote_form_title', { pt: "Solicitar Cotação ou Suporte Técnico", es: "Solicitar Cotización o Soporte Técnico", en: "Request Quote or Technical Support" });
addKey('lbl_qty', { pt: "Quantidade Estimada", es: "Cantidad Estimada", en: "Estimated Quantity" });
addKey('placeholder_qty', { pt: "Ex: 2 unidades", es: "Ej: 2 unidades", en: "E.g. 2 units" });
addKey('lbl_details', { pt: "Detalhes da Aplicação / Especificação", es: "Detalles de la Aplicación / Especificación", en: "Application Details / Specification" });
addKey('placeholder_details', { pt: "Descreva a pressão, vazão, tipo de gás ou requisitos do seu processo...", es: "Describa la presión, caudal, tipo de gas o requisitos de su proceso...", en: "Describe the pressure, flow rate, gas type, or process requirements..." });
addKey('btn_quote_send', { pt: "Enviar Solicitação", es: "Enviar Solicitud", en: "Submit Request" });
addKey('form_mode_mock_notice', {
  pt: "[MOCK] Formulário interceptado com sucesso localmente. Nenhum e-mail foi disparado para a API de produção.",
  es: "[MOCK] Formulario interceptado con éxito localmente. No se realizó ninguna llamada a la API de producción.",
  en: "[MOCK] Form successfully intercepted locally. No call was made to the production API."
});

// Counters keys for layout
addKey('counter_experiencia', { pt: "Anos de Experiência", es: "Años de experiencia", en: "Years of Experience" });
addKey('counter_projetos', { pt: "Projetos Entregues", es: "Proyectos entregados", en: "Projects Delivered" });
addKey('counter_seguranca', { pt: "Segurança Operacional", es: "Seguridad operacional", en: "Operational Safety" });
addKey('counter_parceiras', { pt: "Marcas Parceiras", es: "Marcas asociadas", en: "Partner Brands" });
addKey('counter_conformidade', { pt: "Conformidade Técnica", es: "Conformidad técnica", en: "Technical Compliance" });

// ─── SOLUTIONS COMMON ─────────────────────────────────────────────────────────
addKey('aplicacoes_equipamentos', { pt: "Aplicações e Equipamentos", es: "Aplicaciones y Equipos", en: "Applications and Equipment" });
addKey('voltar_solucoes', { pt: "Voltar para Soluções", es: "Volver a Soluciones", en: "Back to Solutions" });
addKey('ver_produto', { pt: "Ver produto", es: "Ver producto", en: "View product" });
addKey('solucao_personalizada', { pt: "Precisa de uma solução personalizada?", es: "¿Necesita una solución personalizada?", en: "Need a custom solution?" });
addKey('contato_equipe', {
  pt: "Entre em contato com nossa equipe técnica para um projeto sob medida.",
  es: "Póngase en contacto con nuestro equipo técnico para un proyecto a medida.",
  en: "Contact our technical team for a custom project."
});
addKey('solicitar_cotacao', { pt: "Solicitar Cotação", es: "Solicitar Cotización", en: "Request Quote" });
addKey('como_trabalhamos_label', { pt: "Como Trabalhamos", es: "Cómo Trabajamos", en: "How We Work" });

// ─── PRODUCT_DATA TRANSLATIONS ───────────────────────────────────────────────
const productsIds = [
  'cilindros-aluminio', 'cilindros-tipo-4', 'conexoes-instrumentacao', 'detectores-vazamento',
  'dewars-criogenicos', 'geracao-oxigenio-anestesia', 'geracao-oxigenio', 'corte-solda',
  'reguladores-especiais', 'reguladores-hidraulicos', 'reguladores-calibracao',
  'combate-incendio', 'transmissores-pressao', 'valvulas-industriais'
];

const productsTranslations = {
  'cilindros-aluminio': {
    name: { pt: 'Cilindros de Alumínio', es: 'Cilindros de Aluminio', en: 'Aluminum Cylinders' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Cilindros leves e resistentes para transporte seguro de gases comprimidos. Fabricados em ligas de alumínio de alta resistência (ex: 6061-T6), ideais para gases medicinais, industriais e alimentícios, com acabamento interno resistente à corrosão.',
      es: 'Cilindros livianos y resistentes para el transporte seguro de gases comprimidos. Fabricados en aleaciones de aluminio de alta resistencia (ej: 6061-T6), ideales para gases medicinales, industriales y alimentarios, con acabado interno resistente a la corrosión.',
      en: 'Lightweight and resistant cylinders for the safe transport of compressed gases. Manufactured in high-strength aluminum alloys (e.g., 6061-T6), ideal for medical, industrial, and food gases, with a corrosion-resistant internal finish.'
    },
    features: [
      { pt: 'Conformidade com normas DOT-3AL e ISO 7866', es: 'Conformidad con normas DOT-3AL e ISO 7866', en: 'Compliance with DOT-3AL and ISO 7866 standards' },
      { pt: 'Até 40% de redução de peso vs. cilindros de aço', es: 'Hasta un 40% de reducción de peso vs. cilindros de acero', en: 'Up to 40% weight reduction vs. steel cylinders' },
      { pt: 'Alta resistência à corrosão', es: 'Alta resistencia a la corrosión', en: 'High corrosion resistance' },
      { pt: 'Integridade e pureza para misturas especiais', es: 'Integridad y pureza para mezclas especiales', en: 'Integrity and purity for specialty mixtures' },
      { pt: 'Diversas opções de válvulas e roscas integradas', es: 'Diversas opciones de válvulas y roscas integradas', en: 'Various integrated valve and thread options' }
    ],
    apps: [
      { pt: 'Gases medicinais e homecare', es: 'Gases medicinales y atención domiciliaria (homecare)', en: 'Medical gases and homecare' },
      { pt: 'Gases de laboratório e P&D', es: 'Gases de laboratorio e I+D', en: 'Laboratory and R&D gases' },
      { pt: 'Bebidas e CO2 alimentício', es: 'Bebidas y CO2 de grado alimentario', en: 'Beverages and food-grade CO2' },
      { pt: 'Gases industriais e misturas analíticas', es: 'Gases industriales y mezclas analíticas', en: 'Industrial gases and analytical mixtures' }
    ]
  },
  'cilindros-tipo-4': {
    name: { pt: 'Cilindros Tipo 4', es: 'Cilindros Tipo 4', en: 'Type 4 Cylinders' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Os cilindros Tipo 4 utilizam liner polimérico não metálico envolvido por reforço estrutural em fibra composta, proporcionando elevada relação entre capacidade de armazenamento e peso. São indicados para aplicações que exigem redução de massa, resistência mecânica e armazenamento de gases comprimidos em alta pressão.',
      es: 'Los cilindros Tipo 4 utilizan un liner polimérico no metálico envuelto por un refuerzo estructural de fibra compuesta, proporcionando una alta relación entre capacidad de almacenamiento y peso. Están indicados para aplicaciones que exigen reducción de masa, resistencia mecánica y almacenamiento de gases comprimidos a alta presión.',
      en: 'Type 4 cylinders utilize a non-metallic polymeric liner wrapped in composite fiber structural reinforcement, providing a high ratio between storage capacity and weight. They are suitable for applications requiring weight reduction, mechanical strength, and storage of compressed gases at high pressure.'
    },
    features: [
      { pt: 'Liner polimérico não metálico', es: 'Liner polimérico no metálico', en: 'Non-metallic polymeric liner' },
      { pt: 'Reforço estrutural em fibra composta', es: 'Refuerzo estructural en fibra compuesta', en: 'Composite fiber structural reinforcement' },
      { pt: 'Construção totalmente composta', es: 'Construcción totalmente compuesta', en: 'Fully composite construction' },
      { pt: 'Elevada relação resistência/peso', es: 'Elevada relación resistencia/peso', en: 'High strength-to-weight ratio' },
      { pt: 'Proteção contra impacto, abrasão e esforços de instalação', es: 'Protección contra impacto, abrasión y esfuerzos de instalación', en: 'Protection against impact, abrasion, and installation stress' },
      { pt: 'Configuração de válvula conforme a aplicação', es: 'Configuración de válvula según la aplicación', en: 'Valve configuration according to application' },
      { pt: 'Possibilidade de integração com dispositivo de alívio de pressão', es: 'Posibilidad de integración con dispositivo de alivio de presión', en: 'Integration capability with pressure relief devices' },
      { pt: 'Montagem mediante suportes tecnicamente dimensionados', es: 'Montaje mediante soportes técnicamente dimensionados', en: 'Mounting using technically dimensioned supports' }
    ],
    apps: [
      { pt: 'Mobilidade a gás', es: 'Movilidad a gas', en: 'Gas mobility' },
      { pt: 'Veículos comerciais', es: 'Vehículos comerciales', en: 'Commercial vehicles' },
      { pt: 'Ônibus e caminhões', es: 'Autobuses y camiones', en: 'Buses and trucks' },
      { pt: 'Módulos de armazenamento', es: 'Módulos de almacenamiento', en: 'Storage modules' },
      { pt: 'Sistemas de energia', es: 'Sistemas de energía', en: 'Energy systems' },
      { pt: 'Transporte de gases comprimidos', es: 'Transporte de gases comprimidos', en: 'Compressed gas transport' },
      { pt: 'Aplicações industriais customizadas', es: 'Aplicaciones industriales personalizadas', en: 'Custom industrial applications' }
    ]
  },
  'conexoes-instrumentacao': {
    name: { pt: 'Conexões para Instrumentação', es: 'Conexiones para Instrumentación', en: 'Instrumentation Fittings' },
    cat: { pt: 'Instrumentação', es: 'Instrumentación', en: 'Instrumentation' },
    desc: {
      pt: 'Conexões certificadas para aplicações de instrumentação analítica e industrial. Compatibilidade com transmissores, analisadores e sistemas de processo.',
      es: 'Conexiones certificadas para aplicaciones de instrumentación analítica e industrial. Compatibilidad con transmisores, analizadores y sistemas de proceso.',
      en: 'Certified fittings for analytical and industrial instrumentation applications. Compatibility with transmitters, analyzers, and process systems.'
    },
    features: [
      { pt: 'Conexões TK-Fujikin e equivalentes', es: 'Conexiones TK-Fujikin y equivalentes', en: 'TK-Fujikin fittings and equivalents' },
      { pt: 'Materiais: SS 316, Hastelloy, PTFE', es: 'Materiales: SS 316, Hastelloy, PTFE', en: 'Materials: SS 316, Hastelloy, PTFE' },
      { pt: 'Certificação para fluidos agressivos', es: 'Certificación para fluidos agresivos', en: 'Certification for aggressive fluids' },
      { pt: 'Conexões compressão, NPT e flange', es: 'Conexiones de compresión, NPT y brida', en: 'Compression, NPT, and flange connections' },
      { pt: 'Estanqueidade garantida a altas pressões', es: 'Estanqueidad garantizada a altas presiones', en: 'Guaranteed tightness at high pressures' }
    ],
    apps: [
      { pt: 'Análise de processo', es: 'Análisis de procesos', en: 'Process analysis' },
      { pt: 'Instrumentação industrial', es: 'Instrumentación industrial', en: 'Industrial instrumentation' },
      { pt: 'Laboratórios', es: 'Laboratorios', en: 'Laboratories' },
      { pt: 'Petroquímica', es: 'Petroquímica', en: 'Petrochemical' }
    ]
  },
  'detectores-vazamento': {
    name: { pt: 'Detectores de Vazamento', es: 'Detectores de Fugas', en: 'Leak Detectors' },
    cat: { pt: 'Segurança', es: 'Seguridad', en: 'Safety' },
    desc: {
      pt: 'Sistemas de detecção de gases tóxicos e inflamáveis para proteção de ambientes industriais. Tecnologias catalítica, eletroquímica e de infravermelho.',
      es: 'Sistemas de detección de gases tóxicos e inflamables para protección de entornos industriales. Tecnologías catalítica, electroquímica y de infrarrojos.',
      en: 'Toxic and flammable gas detection systems for industrial environmental protection. Catalytic, electrochemical, and infrared technologies.'
    },
    features: [
      { pt: 'Detecção de H₂S, CO, NH₃, LEL', es: 'Detección de H₂S, CO, NH₃, LEL', en: 'Detection of H₂S, CO, NH₃, LEL' },
      { pt: 'Saída 4-20 mA e HART', es: 'Salida 4-20 mA y HART', en: '4-20 mA and HART output' },
      { pt: 'Certificação ATEX e IECEx', es: 'Certificación ATEX e IECEx', en: 'ATEX and IECEx certification' },
      { pt: 'Display local e alarmes sonoros/visuais', es: 'Pantalla local y alarmas sonoras/visuales', en: 'Local display and audible/visual alarms' },
      { pt: 'Calibração simplificada em campo', es: 'Calibración simplificada en campo', en: 'Simplified field calibration' }
    ],
    apps: [
      { pt: 'Refinarias e petroquímicas', es: 'Refinerías y petroquímicas', en: 'Refineries and petrochemicals' },
      { pt: 'Plantas de gás e GNL', es: 'Plantas de gas y GNL', en: 'Gas and LNG plants' },
      { pt: 'Laboratórios químicos', es: 'Laboratorios químicos', en: 'Chemical laboratories' },
      { pt: 'Ambientes confinados', es: 'Espacios confinados', en: 'Confined spaces' }
    ]
  },
  'dewars-criogenicos': {
    name: { pt: 'Dewars e Recipientes Criogênicos', es: 'Dewars y Recipientes Criogénicos', en: 'Dewars and Cryogenic Containers' },
    cat: { pt: 'Criogenia', es: 'Criogenia', en: 'Cryogenics' },
    desc: {
      pt: 'Recipientes criogênicos para armazenamento e transporte de nitrogênio líquido, oxigênio líquido, argônio líquido e outros gases liquefeitos. Portáteis, de alta capacidade térmica e disponíveis em diversas capacidades para uso em laboratório e aplicações industriais.',
      es: 'Recipientes criogénicos para el almacenamiento y transporte de nitrógeno líquido, oxígeno líquido, argón líquido y otros gases licuados. Portátiles, de alta capacidad térmica y disponibles en diversas capacidades para uso en laboratorio y aplicaciones industriales.',
      en: 'Cryogenic vessels for storage and transport of liquid nitrogen, liquid oxygen, liquid argon, and other liquefied gases. Portable, high thermal capacity, and available in various capacities for laboratory and industrial applications.'
    },
    features: [
      { pt: 'Isolamento a vácuo multicamada de alta eficiência', es: 'Aislamiento al vacío multicapa de alta eficiencia', en: 'High-efficiency multi-layer vacuum insulation' },
      { pt: 'Capacidade de 10 a 450 Litros', es: 'Capacidad de 10 a 450 litros', en: 'Capacity from 10 to 450 Liters' },
      { pt: 'Construção reforçada em inox', es: 'Construcción reforzada en acero inoxidable', en: 'Reinforced stainless steel construction' },
      { pt: 'Conformidade com normas DOT-4L e TPED', es: 'Conformidad con normas DOT-4L y TPED', en: 'Compliance with DOT-4L and TPED standards' },
      { pt: 'Válvulas codificadas por cor', es: 'Válvulas codificadas por color', en: 'Color-coded valves' },
      { pt: 'Isolamento de vácuo com 5 anos de garantia (Série XL)', es: 'Aislamiento de vacío con 5 años de garantía (Serie XL)', en: 'Vacuum insulation with 5 years warranty (XL Series)' }
    ],
    apps: [
      { pt: 'Criopreservação biológica', es: 'Criopreservación biológica', en: 'Biological cryopreservation' },
      { pt: 'Laboratórios de pesquisa', es: 'Laboratorios de investigación', en: 'Research laboratories' },
      { pt: 'Indústria alimentícia', es: 'Industria alimentaria', en: 'Food industry' },
      { pt: 'Metalurgia criogênica', es: 'Metalurgia criogénica', en: 'Cryogenic metallurgy' },
      { pt: 'Estações de envase e laser', es: 'Estaciones de envasado y láser', en: 'Filling stations and laser applications' }
    ]
  },
  'geracao-oxigenio-anestesia': {
    name: { pt: 'Geração de Oxigênio e Anestesia', es: 'Generación de Oxígeno y Anestesia', en: 'Oxygen Generation and Anesthesia' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Sistemas completos on-site com tecnologia PSA/TCA para autonomia na geração de gases. Integração turn-key com redes hospitalares, painéis de alarme e manifolds de backup automático, garantindo conformidade com a RDC 50.',
      es: 'Sistemas completos in-situ con tecnología PSA/TCA para autonomía en la generación de gases. Integración llave en mano (turn-key) con redes hospitalarias, paneles de alarma y manifolds de respaldo automático, garantizando la conformidad con la RDC 50.',
      en: 'Complete on-site systems with PSA/TCA technology for gas generation autonomy. Turn-key integration with hospital networks, alarm panels, and automatic backup manifolds, ensuring compliance with RDC 50.'
    },
    features: [
      { pt: 'Geração on-site via tecnologia PSA / VPSA (Pureza de 93-95%).', es: 'Generación in-situ mediante tecnología PSA / VPSA (Pureza de 93-95%).', en: 'On-site generation via PSA / VPSA technology (93-95% purity).' },
      { pt: 'Painéis de alarme modulares com monitoramento remoto de pressão.', es: 'Paneles de alarma modulares con monitoreo remoto de presión.', en: 'Modular alarm panels with remote pressure monitoring.' },
      { pt: 'Manifolds automáticos para backup contínuo sem queda de pressão.', es: 'Manifolds automáticos para respaldo continuo sin caída de presión.', en: 'Automatic manifolds for continuous backup without pressure drop.' },
      { pt: 'Sistemas misturadores para gases anestésicos.', es: 'Sistemas mezcladores para gases anestésicos.', en: 'Mixing systems for anesthetic gases.' }
    ],
    apps: [
      { pt: 'Redes Hospitalares', es: 'Redes hospitalarias', en: 'Hospital networks' },
      { pt: 'Clínicas Veterinárias', es: 'Clínicas veterinarias', en: 'Veterinary clinics' },
      { pt: 'Centros Cirúrgicos', es: 'Quirófanos', en: 'Surgical centers' },
      { pt: 'Indústrias de Ozonização', es: 'Industrias de ozonización', en: 'Ozonation industries' }
    ]
  },
  'geracao-oxigenio': {
    name: { pt: 'Geração de Oxigênio e Anestesia', es: 'Generación de Oxígeno y Anestesia', en: 'Oxygen Generation and Anesthesia' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Sistemas PSA e concentradores de oxigênio para geração on-site. Independência de fornecedores externos de gases com produção contínua e confiável.',
      es: 'Sistemas PSA y concentradores de oxígeno para generación in-situ. Independencia de proveedores externos de gases con producción continua y confiable.',
      en: 'PSA systems and oxygen concentrators for on-site generation. Independence from external gas suppliers with continuous, reliable production.'
    },
    features: [
      { pt: 'Pureza de 93% a 99,5% O₂', es: 'Pureza de 93% a 99,5% O₂', en: '93% to 99.5% O₂ purity' },
      { pt: 'Capacidade de 1 a 500 Nm³/h', es: 'Capacidad de 1 a 500 Nm³/h', en: 'Capacity of 1 to 500 Nm³/h' },
      { pt: 'Tecnologia PSA ou VPSA', es: 'Tecnología PSA o VPSA', en: 'PSA or VPSA technology' },
      { pt: 'Monitoramento e controle automático', es: 'Monitoreo y control automático', en: 'Automatic monitoring and control' },
      { pt: 'Manutenção simplificada', es: 'Mantenimiento simplificado', en: 'Simplified maintenance' }
    ],
    apps: [
      { pt: 'Hospitais e clínicas', es: 'Hospitales y clínicas', en: 'Hospitals and clinics' },
      { pt: 'Ozonização de água', es: 'Ozonización de agua', en: 'Water ozonation' },
      { pt: 'Tratamento de efluentes', es: 'Tratamiento de efluentes', en: 'Wastewater treatment' },
      { pt: 'Soldagem e corte', es: 'Soldadura y corte', en: 'Welding and cutting' }
    ]
  },
  'corte-solda': {
    name: { pt: 'Equipamentos para Corte e Solda', es: 'Equipos para Corte y Soldadura', en: 'Cutting and Welding Equipment' },
    cat: { pt: 'Industrial', es: 'Industrial', en: 'Industrial' },
    desc: {
      pt: 'Maçaricos, reguladores e acessórios para corte oxiacetilênico e soldagem MIG/TIG/Eletrodo. Equipamentos para metalurgia, fabricação e manutenção industrial.',
      es: 'Sopletes, reguladores y accesorios para corte oxiacetilénico y soldadura MIG/TIG/Electrodo. Equipos para metalurgia, fabricación y mantenimiento industrial.',
      en: 'Torches, regulators, and accessories for oxy-fuel cutting and MIG/TIG/Stick welding. Equipment for metallurgy, fabrication, and industrial maintenance.'
    },
    features: [
      { pt: 'Maçaricos para corte e solda', es: 'Sopletes para corte y soldadura', en: 'Torches for cutting and welding' },
      { pt: 'Reguladores para CO₂, Ar, O₂, Acetileno', es: 'Reguladores para CO₂, Ar, O₂, Acetileno', en: 'Regulators for CO₂, Ar, O₂, Acetylene' },
      { pt: 'Mangueiras certificadas', es: 'Mangueras certificadas', en: 'Certified hoses' },
      { pt: 'Bocais e consumíveis', es: 'Boquillas y consumibles', en: 'Nozzles and consumables' },
      { pt: 'Kits completos para oficinas', es: 'Kits completos para talleres', en: 'Complete workshop kits' }
    ],
    apps: [
      { pt: 'Metalurgia e siderurgia', es: 'Metalurgia y siderurgia', en: 'Metallurgy and steelmaking' },
      { pt: 'Construção civil e obras', es: 'Construcción civil y obras', en: 'Civil construction and public works' },
      { pt: 'Manutenção industrial', es: 'Mantenimiento industrial', en: 'Industrial maintenance' },
      { pt: 'Oficinas mecânicas', es: 'Talleres mecánicos', en: 'Mechanical workshops' }
    ]
  },
  'reguladores-especiais': {
    name: { pt: 'Reguladores de Gases Especiais', es: 'Reguladores para Gases Especiales', en: 'Specialty Gas Regulators' },
    cat: { pt: 'Instrumentação', es: 'Instrumentación', en: 'Instrumentation' },
    desc: {
      pt: 'Reguladores de alta performance projetados para controle de gases especiais, aplicações de alta e altíssima pressão, e calibração de instrumentos de medição. Desenvolvidos com foco em máxima estabilidade e vedação absoluta contra vazamentos.',
      es: 'Reguladores de alto rendimiento diseñados para el control de gases especiales, aplicaciones de alta y altísima presión, y calibración de instrumentos de medición. Desarrollados con enfoque en la máxima estabilidad y sellado absoluto contra fugas.',
      en: 'High-performance regulators designed for specialty gas control, high and extremely high-pressure applications, and measurement instrument calibration. Developed with a focus on maximum stability and absolute tightness against leakage.'
    },
    features: [
      { pt: 'Modelos específicos para gases especiais de alta pureza', es: 'Modelos específicos para gases especiales de alta pureza', en: 'Specific models for high purity specialty gases' },
      { pt: 'Estágio simples ou duplo para alta e altíssima pressão (até 300 bar)', es: 'Etapa simple o doble para alta y altísima presión (hasta 300 bar)', en: 'Single or double stage for high and extremely high pressure (up to 300 bar)' },
      { pt: 'Otimizados para processos críticos de calibração analítica', es: 'Optimizados para procesos críticos de calibración analítica', en: 'Optimized for critical analytical calibration processes' },
      { pt: 'Construção em materiais inertes (Aço Inox 316, PTFE)', es: 'Construcción en materiales inertes (Acero Inoxidable 316, PTFE)', en: 'Construction in inert materials (316 Stainless Steel, PTFE)' },
      { pt: 'Estanqueidade certificada com teste de hélio em fábrica', es: 'Estanqueidad certificada con prueba de helio en fábrica', en: 'Certified tightness with factory helium test' }
    ],
    apps: [
      { pt: 'Análise de gases padrão e misturas especiais', es: 'Análisis de gases patrón y mezclas especiales', en: 'Analysis of standard gases and specialty mixtures' },
      { pt: 'Estações de calibração de instrumentação', es: 'Estaciones de calibración de instrumentación', en: 'Instrumentation calibration stations' },
      { pt: 'Controle de processos críticos de alta pressão', es: 'Control de procesos críticos de alta presión', en: 'Critical high-pressure process control' },
      { pt: 'Laboratórios de P&D de alta exigência', es: 'Laboratorios de I+D de alta exigencia', en: 'High-demand R&D laboratories' }
    ]
  },
  'reguladores-hidraulicos': {
    name: { pt: 'Reguladores Hidráulicos', es: 'Reguladores Hidráulicos', en: 'Hydraulic Regulators' },
    cat: { pt: 'Alta Pressão', es: 'Alta Presión', en: 'High Pressure' },
    desc: {
      pt: 'Reguladores de alta pressão para aplicações hidráulicas especiais.',
      es: 'Reguladores de alta presión para aplicaciones hidráulicas especiales.',
      en: 'High pressure regulators for special hydraulic applications.'
    },
    features: [
      { pt: 'Controle preciso de alta pressão', es: 'Control preciso de alta presión', en: 'Precise high-pressure control' },
      { pt: 'Construção robusta', es: 'Construcción robusta', en: 'Robust construction' },
      { pt: 'Vedação confiável', es: 'Sellado confiable', en: 'Reliable sealing' }
    ],
    apps: [
      { pt: 'Sistemas hidráulicos', es: 'Sistemas hidráulicos', en: 'Hydraulic systems' },
      { pt: 'Teste de pressão', es: 'Pruebas de presión', en: 'Pressure testing' }
    ]
  },
  'reguladores-calibracao': {
    name: { pt: 'Reguladores para Calibração de Equipamentos', es: 'Reguladores para Calibración de Equipos', en: 'Equipment Calibration Regulators' },
    cat: { pt: 'Calibração', es: 'Calibración', en: 'Calibration' },
    desc: {
      pt: 'Mini reguladores e reguladores de demanda compactos de alta precisão para calibração e instrumentação.',
      es: 'Minireguladores y reguladores de demanda compactos de alta precisión para calibración e instrumentación.',
      en: 'Mini regulators and compact flow-matching demand regulators for calibration and instrumentation.'
    },
    features: [
      { pt: 'Alta precisão', es: 'Alta precisión', en: 'High precision' },
      { pt: 'Design compacto', es: 'Diseño compacto', en: 'Compact design' },
      { pt: 'Conexões C-10, 5/8 UNF e CGA', es: 'Conexiones C-10, 5/8 UNF y CGA', en: 'C-10, 5/8 UNF, and CGA connections' }
    ],
    apps: [
      { pt: 'Calibração de detectores', es: 'Calibración de detectores', en: 'Detector calibration' },
      { pt: 'Analisadores portáteis', es: 'Analizadores portátiles', en: 'Portable analyzers' },
      { pt: 'Laboratórios de campo', es: 'Laboratorios de campo', en: 'Field laboratories' }
    ]
  },
  'combate-incendio': {
    name: { pt: 'Sistemas de Combate a Incêndio', es: 'Sistemas de Extinción de Incendios', en: 'Fire Suppression Systems' },
    cat: { pt: 'Segurança', es: 'Seguridad', en: 'Safety' },
    desc: {
      pt: 'Sistemas de supressão de incêndio com CO₂, FM-200, Novec 1230 e outros agentes limpos. Proteção de salas de dados, painéis elétricos e ambientes críticos.',
      es: 'Sistemas de supresión de incendios con CO₂, FM-200, Novec 1230 y otros agentes limpios. Protección de salas de servidores (data centers), paneles eléctricos y entornos críticos.',
      en: 'Fire suppression systems with CO₂, FM-200, Novec 1230, and other clean agents. Protection of data rooms, electrical panels, and critical environments.'
    },
    features: [
      { pt: 'Agentes: CO₂, FM-200, Novec 1230', es: 'Agentes: CO₂, FM-200, Novec 1230', en: 'Agents: CO₂, FM-200, Novec 1230' },
      { pt: 'Supressão total por inundação', es: 'Supresión total por inundación', en: 'Total flooding suppression' },
      { pt: 'Detecção integrada', es: 'Detección integrada', en: 'Integrated detection' },
      { pt: 'Projeto conforme NFPA 12/2001', es: 'Diseño según NFPA 12/2001', en: 'Design according to NFPA 12/2001' },
      { pt: 'Manutenção e recarga de cilindros', es: 'Mantenimiento y recarga de cilindros', en: 'Cylinder maintenance and refilling' }
    ],
    apps: [
      { pt: 'Data centers e CPD', es: 'Centros de datos (data centers) y CPD', en: 'Data centers and IT rooms' },
      { pt: 'Painéis e subestações elétricas', es: 'Paneles y subestaciones eléctricas', en: 'Electrical panels and substations' },
      { pt: 'Salas de controle', es: 'Salas de control', en: 'Control rooms' },
      { pt: 'Museus e arquivos', es: 'Museos y archivos', en: 'Museums and archives' }
    ]
  },
  'transmissores-pressao': {
    name: { pt: 'Transmissores: Pressão - Nível - Temperatura', es: 'Transmisores: Presión - Nivel - Temperatura', en: 'Transmitters: Pressure - Level - Temperature' },
    cat: { pt: 'Instrumentação', es: 'Instrumentación', en: 'Instrumentation' },
    desc: {
      pt: 'Transmissores inteligentes de alta performance para medição de pressão diferencial, manométrica, absoluta e nível. Compatíveis com HART, Profibus e Foundation Fieldbus.',
      es: 'Transmisores inteligentes de alto rendimiento para medición de presión diferencial, manométrica, absoluta y nivel. Compatibles con HART, Profibus y Foundation Fieldbus.',
      en: 'High-performance intelligent transmitters for differential, gauge, absolute pressure, and level measurement. Compatible with HART, Profibus, and Foundation Fieldbus.'
    },
    features: [
      { pt: 'Precisão de ±0,04% da URL', es: 'Precisión de ±0,04% de la URL', en: 'Accuracy of ±0,04% of URL' },
      { pt: 'Protocolo HART, Profibus PA, FF', es: 'Protocolo HART, Profibus PA, FF', en: 'HART, Profibus PA, FF protocol' },
      { pt: 'Rangeabilidade de 100:1', es: 'Rangeabilidad de 100:1', en: '100:1 rangeability' },
      { pt: 'Display LCD local configurável', es: 'Pantalla LCD local configurable', en: 'Configurable local LCD display' },
      { pt: 'Certificação ATEX e SIL 2/3', es: 'Certificación ATEX y SIL 2/3', en: 'ATEX and SIL 2/3 certification' }
    ],
    apps: [
      { pt: 'Óleo & gás', es: 'Petróleo y gas', en: 'Oil & gas' },
      { pt: 'Petroquímica e química', es: 'Petroquímica y química', en: 'Petrochemical and chemical' },
      { pt: 'Geração de energia', es: 'Generación de energía', en: 'Power generation' },
      { pt: 'Processos críticos de segurança', es: 'Procesos críticos de seguridad', en: 'Critical safety processes' }
    ]
  },
  'valvulas-industriais': {
    name: { pt: 'Válvulas Industriais - Medicinais - Especiais', es: 'Válvulas Industriales - Medicinales - Especiales', en: 'Industrial - Medical - Specialty Valves' },
    cat: { pt: 'Válvulas para Cilindros', es: 'Válvulas para Cilindros', en: 'Cylinder Valves' },
    desc: {
      pt: 'Válvulas de agulha, esfera e membrana para gases industriais e medicinais. Com tecnologia de vedação de precisão, suportam altas pressões e oferecem controle fino de fluxo.',
      es: 'Válvulas de aguja, esfera y diafragma para gases industriales y medicinales. Con tecnología de sellado de precisión, soportan altas presiones y ofrecen un control fino del flujo.',
      en: 'Needle, ball, and diaphragm valves for industrial and medical gases. With precision sealing technology, they withstand high pressures and offer fine flow control.'
    },
    features: [
      { pt: 'Materiais: aço inox, latão, PTFE', es: 'Materiales: acero inoxidable, latón, PTFE', en: 'Materials: stainless steel, brass, PTFE' },
      { pt: 'Pressões de até 400 bar', es: 'Presiones de hasta 400 bar', en: 'Pressures up to 400 bar' },
      { pt: 'Tamanhos de 1/8" a 2"', es: 'Tamaños de 1/8" a 2"', en: 'Sizes from 1/8" to 2"' },
      { pt: 'Certificação para gases medicinais', es: 'Certificación para gases medicinales', en: 'Certification for medical gases' },
      { pt: 'Conexões rosca, solda e flange', es: 'Conexiones roscadas, soldadas y bridadas', en: 'Threaded, welded, and flanged connections' }
    ],
    apps: [
      { pt: 'Distribuição de gases medicinais', es: 'Distribución de gases medicinales', en: 'Medical gas distribution' },
      { pt: 'Laboratórios e P&D', es: 'Laboratorios e I+D', en: 'Laboratories and R&D' },
      { pt: 'Indústria química', es: 'Industria química', en: 'Chemical industry' },
      { pt: 'Automação de processos', es: 'Automatización de procesos', en: 'Process automation' }
    ]
  }
};

// ─── ARTICLE TRANSLATIONS ───────────────────────────────────────────────────
const articleTranslations = [
  {
    "id": "seguranca-producao-hidrogenio-anp",
    "title": {
      "pt": "Segurança Operacional na Produção de Hidrogênio de Baixa Emissão",
      "es": "Seguridad Operacional en la Producción de Hidrógeno de Bajas Emisiones",
      "en": "Operational Safety in Low-Emission Hydrogen Production"
    },
    "summary": {
      "pt": "Relatório oficial da ANP sobre o arcabouço regulatório, gestão de riscos e a segurança operacional para a produção de hidrogênio no Brasil.",
      "es": "Informe oficial de la ANP sobre el marco regulatorio, gestión de riesgos y seguridad operacional para la producción de hidrógeno en Brasil.",
      "en": "Official ANP regulatory framework report on risk management and operational safety for hydrogen production in Brazil."
    },
    "content": {
      "pt": "<p>A promulgação da Lei nº 14.948, de 2 de agosto de 2024, instituiu a Política Nacional do Hidrogênio de Baixa Emissão de Carbono, atribuindo à ANP competências regulatórias abrangentes sobre a cadeia do hidrogênio. Neste contexto, o Subgrupo IV do PNH2 elaborou um relatório detalhado para nortear a futura regulação.</p><h3>Panorama Internacional e Nacional</h3><p>A análise da experiência internacional (Europa, América, Ásia e Oceania) revela uma transição de abordagens estritamente prescritivas para regulações baseadas em desempenho e risco, como a Diretiva Seveso. No Brasil, o arcabouço regulatório da ANP estruturado em torno do SGSO (Sistema de Gerenciamento da Segurança Operacional) já incorpora instrumentos compatíveis com as exigências da nova lei.</p><h3>Análise de Incidentes</h3><p>Dados de bancos internacionais como HIAD e H2Tools mostram que acidentes com hidrogênio frequentemente derivam de falhas de projeto (seleção inadequada de materiais), deficiências nos sistemas de gestão, procedimentos operacionais incompletos e manutenção inadequada. Isso reforça a necessidade de um modelo de regulação com foco em gestão de processos e segurança em camadas.</p><h3>Recomendações da ANP</h3><ul><li>Adoção de uma estratégia regulatória escalonada e baseada em riscos.</li><li>Inclusão de ação regulatória na Agenda da ANP, harmonizando novas normas com as práticas de exploração e produção (E&amp;P).</li><li>Mecanismos de <em>sandbox</em> regulatório no período transitório.</li><li>Atualização das normas de comunicação de incidentes.</li></ul><div style=\"margin-top: 2rem; text-align: center;\"><a href=\"/documentos/seguranca-producao-hidrogenio-anp.pdf\" target=\"_blank\" style=\"display: inline-block; padding: 12px 24px; background-color: #0f4c81; color: #fff; font-weight: bold; border-radius: 4px; text-decoration: none;\">📄 Baixar Relatório Completo (PDF)</a></div>",
      "es": "<p>La promulgación de la Ley N.º 14.948, del 2 de agosto de 2024, instituyó la Política Nacional del Hidrógeno de Bajas Emisiones de Carbono, otorgando a la ANP amplias competencias regulatorias sobre la cadena del hidrógeno. En este contexto, el Subgrupo IV del PNH2 elaboró un informe técnico detallado para guiar la futura regulación.</p><h3>Panorama Internacional y Nacional</h3><p>El análisis de la experiencia internacional (Europa, América, Asia y Oceanía) revela una transición desde enfoques estrictamente prescriptivos hacia regulaciones basadas en el desempeño y la gestión del riesgo, como la Directiva Seveso. En Brasil, el marco regulatorio de la ANP estructurado en torno al SGSO (Sistema de Gestión de la Seguridad Operacional) incorpora instrumentos alineados con los requisitos de la nueva ley.</p><h3>Análisis de Incidentes</h3><p>Los datos de bases internacionales como HIAD y H2Tools demuestran que los incidentes con hidrógeno se originan frecuentemente en fallas de diseño (selección inadecuada de aleaciones y materiales), deficiencias en los sistemas de gestión, procedimientos operativos incompletos y mantenimiento preventivo deficiente. Esto refuerza la necesidad de un modelo enfocado en la seguridad funcional por capas independientes.</p><h3>Recomendaciones Clave</h3><ul><li>Implementación de una estrategia regulatoria escalonada basada en análisis de riesgo.</li><li>Inclusión de acciones normativas en la Agenda de la ANP, armonizando las nuevas directrices con las mejores prácticas de exploración y producción (E&amp;P).</li><li>Establecimiento de mecanismos de <em>sandbox</em> regulatorio durante el período de transición.</li><li>Actualización rigurosa de los estándares de notificación e investigación de incidentes.</li></ul><div style=\"margin-top: 2rem; text-align: center;\"><a href=\"/documentos/seguranca-producao-hidrogenio-anp.pdf\" target=\"_blank\" style=\"display: inline-block; padding: 12px 24px; background-color: #0f4c81; color: #fff; font-weight: bold; border-radius: 4px; text-decoration: none;\">📄 Descargar Informe Completo (PDF)</a></div>",
      "en": "<p>The enactment of Law No. 14,948 of August 2, 2024, established the National Low-Emission Hydrogen Policy, assigning the ANP comprehensive regulatory authority over the hydrogen supply chain. In this context, Subgroup IV of the PNH2 prepared a comprehensive report to guide future technical regulations.</p><h3>International and National Outlook</h3><p>Analysis of global regulatory trends (Europe, Americas, Asia, and Oceania) demonstrates a clear shift from purely prescriptive rules toward risk- and performance-based frameworks, such as the Seveso Directive. In Brazil, the ANP regulatory framework organized around the SGSO (Operational Safety Management System) incorporates instruments aligned with the new legal requirements.</p><h3>Incident Analysis</h3><p>Data from international safety databases (HIAD, H2Tools) indicate that hydrogen incidents predominantly stem from design errors (inadequate metallurgy and material selection), management system gaps, incomplete operating procedures, and deficient maintenance. This highlights the critical necessity of process safety management and layered barrier defense.</p><h3>Core Recommendations</h3><ul><li>Adoption of a phased, risk-based regulatory roadmap.</li><li>Inclusion of targeted regulatory actions in the ANP agenda, harmonizing standards with upstream E&amp;P best practices.</li><li>Implementation of regulatory <em>sandbox</em> mechanisms throughout the transitional phase.</li><li>Updating standards for mandatory incident notification and root-cause reporting.</li></ul><div style=\"margin-top: 2rem; text-align: center;\"><a href=\"/documentos/seguranca-producao-hidrogenio-anp.pdf\" target=\"_blank\" style=\"display: inline-block; padding: 12px 24px; background-color: #0f4c81; color: #fff; font-weight: bold; border-radius: 4px; text-decoration: none;\">📄 Download Full Report (PDF)</a></div>"
    }
  },
  {
    "id": "principios-seguranca-hidrogenio",
    "title": {
      "pt": "Princípios Básicos de Segurança do Hidrogênio",
      "es": "Principios Básicos de Seguridad del Hidrógeno",
      "en": "Core Principles of Hydrogen Safety"
    },
    "summary": {
      "pt": "Síntese técnica de referência sobre as propriedades, perigos dominantes e a filosofia de proteção em camadas para sistemas de hidrogênio.",
      "es": "Síntesis técnica de referencia sobre las propiedades físico-químicas, peligros dominantes y la filosofía de protección en capas para sistemas de H₂.",
      "en": "Technical reference guide on physical-chemical properties, dominant hazards, and layered defense philosophy for hydrogen systems."
    },
    "content": {
      "pt": "<p>Este documento organiza, em linguagem de engenharia, os principais temas de segurança associados ao hidrogênio gasoso e líquido. Inspirado no Volume 6 da coleção <em>Conceitos do H₂ Power-to-X</em>, ele estabelece as bases de segurança para projetos de instalações e operações envolvendo H₂.</p><h3>1. Síntese Executiva</h3><p>O hidrogênio pode ser utilizado com segurança quando a prevenção é construída em camadas independentes:</p><ul><li><strong>Contenção:</strong> Projetar para evitar vazamentos e minimizar juntas desmontáveis.</li><li><strong>Prevenção:</strong> Eliminar bolsões no teto e garantir ventilação comprovada.</li><li><strong>Detecção Precoce:</strong> Instalar sensores pelo caminho provável da pluma.</li><li><strong>Isolamento Automático:</strong> Válvulas fail-safe e lógica de desenergização segura.</li><li><strong>Manutenção:</strong> Inspeção contínua, testes funcionais e calibração ao longo do ciclo de vida.</li></ul><h3>2. Gestão de Riscos e Filosofia de Proteção</h3><p>A análise começa pela definição do inventário, pressões, temperaturas e vazões de liberação. Cada cenário é associado a barreiras preventivas e mitigadoras, como redução do perigo na origem (projeto inerentemente seguro), controle de processo (regulação de pressão), intertravamentos (ESD) e mitigação física (alívios para local externo e barreiras corta-fogo).</p><h3>3. Documentação e Qualidade</h3><p>O sucesso de um projeto de H₂ depende diretamente da integridade das juntas e da seleção criteriosa de materiais compatíveis com os mecanismos de fragilização por hidrogênio. Recomenda-se um checklist estruturado desde o HAZID/HAZOP até a entrega do databook rastreável.</p><div style=\"margin-top: 2rem; text-align: center;\"><a href=\"/documentos/principios-seguranca-hidrogenio.pdf\" target=\"_blank\" style=\"display: inline-block; padding: 12px 24px; background-color: #0f4c81; color: #fff; font-weight: bold; border-radius: 4px; text-decoration: none;\">📄 Baixar Síntese Completa (PDF)</a></div>",
      "es": "<p>Este documento consolida, bajo un enfoque de ingeniería aplicada, los principios fundamentales de seguridad asociados al hidrógeno en fase gaseosa y líquida. Basado en la serie técnica <em>Conceptos de H₂ Power-to-X</em>, define los criterios esenciales para el diseño, instalación y operación de infraestructuras de H₂.</p><h3>1. Síntesis Ejecutiva</h3><p>El hidrógeno se gestiona con total seguridad cuando la protección se diseña mediante capas independientes:</p><ul><li><strong>Contención Primaria:</strong> Diseño orientado a eliminar puntos de fuga y minimizar uniones mecánicas roscadas.</li><li><strong>Prevención de Acumulaciones:</strong> Eliminación de bolsas en techos y garantía de ventilación natural/forzada certificada.</li><li><strong>Detección Temprana:</strong> Disposición estratégica de sensores en la trayectoria probable de dispersión.</li><li><strong>Aislamiento Automático:</strong> Válvulas de corte de seguridad fail-safe e interbloqueos instrumentados (ESD).</li><li><strong>Mantenimiento Preventivo:</strong> Inspección continua, pruebas de estanqueidad y calibración periódica.</li></ul><h3>2. Gestión de Riesgos y Filosofía de Protección</h3><p>La evaluación parte de cuantificar inventario, presiones de servicio, rangos térmicos y tasas potenciales de fuga. Cada escenario se vincula a salvaguardas preventivas y de mitigación: diseño intrínsecamente seguro, regulación precisa de presión, despresurización de emergencia y canalización segura a venteos certificados.</p><h3>3. Integridad de Materiales y Calidad</h3><p>La confiabilidad operativa depende críticamente de seleccionar aleaciones inmunes a la fragilización por hidrógeno (embrittlement) y de asegurar un apriete controlado de juntas. Se exige trazabilidad completa desde los estudios HAZID/HAZOP hasta la entrega del databook con certificados de materiales 3.1.</p><div style=\"margin-top: 2rem; text-align: center;\"><a href=\"/documentos/principios-seguranca-hidrogenio.pdf\" target=\"_blank\" style=\"display: inline-block; padding: 12px 24px; background-color: #0f4c81; color: #fff; font-weight: bold; border-radius: 4px; text-decoration: none;\">📄 Descargar Síntesis Completa (PDF)</a></div>",
      "en": "<p>This engineering reference document consolidates essential process safety standards for gaseous and liquid hydrogen systems. Drawing from Volume 6 of the <em>H₂ Power-to-X Concepts</em> collection, it establishes actionable safety criteria for engineering, installation, and operation.</p><h3>1. Executive Summary</h3><p>Hydrogen can be safely handled when process safety is engineered across independent defense-in-depth layers:</p><ul><li><strong>Primary Containment:</strong> Engineered leak prevention with minimal mechanical joints.</li><li><strong>Pocket Prevention:</strong> Roof pocket elimination and certified positive ventilation.</li><li><strong>Early Detection:</strong> Optical and electrochemical sensors placed along probable dispersion paths.</li><li><strong>Automated Isolation:</strong> Fail-safe emergency shutdown (ESD) valves and automated de-energization logic.</li><li><strong>Lifecycle Maintenance:</strong> Routine inspection, functional testing, and precision calibration.</li></ul><h3>2. Risk Management & Protection Philosophy</h3><p>Engineering begins with rigorous evaluation of system inventory, operating pressures, temperatures, and potential release rates. Each scenario pairs with preventive and mitigating barriers: inherently safer design, precision pressure reduction, automated interlocks, and compliant flare/vent stacks.</p><h3>3. Metallurgy & Quality Assurance</h3><p>System reliability depends on certified metallurgy compatible with hydrogen embrittlement mechanisms (e.g., 316L with controlled nickel content). We enforce structured traceability from HAZID/HAZOP through hydrostatic testing and final 3.1 certified databook delivery.</p><div style=\"margin-top: 2rem; text-align: center;\"><a href=\"/documentos/principios-seguranca-hidrogenio.pdf\" target=\"_blank\" style=\"display: inline-block; padding: 12px 24px; background-color: #0f4c81; color: #fff; font-weight: bold; border-radius: 4px; text-decoration: none;\">📄 Download Full Summary (PDF)</a></div>"
    }
  },
  {
    "id": "manual-projeto-abrigos-cilindros",
    "title": {
      "pt": "Manual Prático de Projeto: Definição do Local e Distanciamentos de Abrigos de Cilindros",
      "es": "Manual Práctico de Diseño: Selección del Sitio y Distancias de Separación para Casetas de Cilindros",
      "en": "Practical Design Manual: Site Selection and Separation Distances for Gas Cylinder Shelters"
    },
    "summary": {
      "pt": "Guia consolidado com requisitos legais, critérios prescritivos e boas práticas para projetos de centrais externas e abrigos de cilindros de gases comprimidos.",
      "es": "Guía técnica integral sobre normativas de seguridad, criterios prescriptivos y mejores prácticas para casetas exteriores y almacenamiento de gases comprimidos.",
      "en": "Comprehensive technical guide on regulatory requirements, prescriptive criteria, and best practices for outdoor gas storage and cylinder enclosures."
    },
    "content": {
      "pt": "<p class=\"text-lg text-gray-700 mb-6\">Este guia consolida requisitos legais, critérios prescritivos e boas práticas para selecionar o local, conceber, detalhar, instalar, comissionar e operar centrais externas ou abrigos de cilindros de gases comprimidos.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">As sete decisões que controlam o projeto</h3><ol class=\"list-decimal pl-6 space-y-2 mb-6 text-gray-700\"><li>Identificar cada gás, pureza, estado físico, pressão, tamanho e quantidade de cilindros.</li><li>Classificar o sistema (cilindros individuais, central não granel, manifold, armazenamento a granel, uso interno/externo).</li><li>Mapear exposições em planta e elevação (divisa, público, aberturas, fontes de ignição).</li><li>Aplicar primeiro a legislação paulista (IT 32/2025 - CBPMESP) e depois normas ABNT/IEC.</li><li>Dimensionar segregação, ventilação e barreiras para a fonte de vazamento.</li><li>Classificar áreas e especificar instalação elétrica Ex completa.</li><li>Fechar o projeto com causa e efeito, procedimentos de intervenção e comissionamento.</li></ol><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Perigos por Família de Gás</h3><div class=\"overflow-x-auto mb-6\"><table class=\"min-w-full bg-white border border-gray-200\"><thead class=\"bg-gray-100\"><tr><th class=\"py-2 px-4 border-b text-left\">Família</th><th class=\"py-2 px-4 border-b text-left\">Perigo Dominante</th><th class=\"py-2 px-4 border-b text-left\">Proteções Prioritárias</th></tr></thead><tbody><tr><td class=\"py-2 px-4 border-b font-medium\">Inflamáveis leves (H₂)</td><td class=\"py-2 px-4 border-b\">Incêndio, jato de chama, explosão</td><td class=\"py-2 px-4 border-b\">Ventilação alta, ausência de bolsões, detecção alta, alívio seguro.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Oxidantes (O₂, N₂O)</td><td class=\"py-2 px-4 border-b\">Aceleração intensa de combustão</td><td class=\"py-2 px-4 border-b\">Separar de inflamáveis, limpeza para O₂, controle de enriquecimento.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Inertes (N₂, Ar, He)</td><td class=\"py-2 px-4 border-b\">Asfixia por deslocamento de O₂</td><td class=\"py-2 px-4 border-b\">Ventilação, monitor O₂ onde confinamento for possível.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Tóxicos/corrosivos</td><td class=\"py-2 px-4 border-b\">Toxicidade/corrosão, nuvem perigosa</td><td class=\"py-2 px-4 border-b\">Gabinete ventilado/scrubber, detecção específica, contenção.</td></tr></tbody></table></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Metodologia para Definir o Local</h3><p class=\"mb-4\">A localização deve ser resolvida antes do detalhamento do abrigo. Começar pelo desenho do gabinete e ‘encaixá-lo’ no espaço disponível costuma produzir ventilação ruim, rotas de cilindro perigosas e afastamentos defensáveis apenas no papel.</p><ul class=\"list-disc pl-6 space-y-2 mb-6 text-gray-700\"><li>Fixar inventário máximo, pressões e diâmetros.</li><li>Eliminar locais inviáveis: subsolos, valas, rotas de fuga, proximidade de tomadas de ar.</li><li>Mapear todas as exposições e medir a partir dos pontos potenciais de fuga.</li><li>Aplicar triagem legal (IT 32) e classificar o sistema nas normas técnicas.</li></ul><div class=\"bg-blue-50 border-l-4 border-blue-500 p-6 mt-8\"><h4 class=\"text-lg font-bold text-blue-900 mb-2\">Nota de Engenharia</h4><p class=\"text-blue-800\">Este guia não substitui o projeto executivo, ART/RRT, análise de riscos ou documentação dos fabricantes. A edição contratual de cada norma deve ser confirmada no congelamento do projeto.</p></div>",
      "es": "<p class=\"text-lg text-gray-700 mb-6\">Esta guía consolida los requisitos normativos, criterios prescriptivos y mejores prácticas de ingeniería para seleccionar la ubicación, diseñar, instalar, comisionar y operar casetas exteriores y baterías de cilindros de gases comprimidos.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Las siete decisiones clave de diseño</h3><ol class=\"list-decimal pl-6 space-y-2 mb-6 text-gray-700\"><li>Identificar tipo de gas, grado de pureza, estado físico, presión, capacidad y número de cilindros.</li><li>Clasificar la instalación (cilindros individuales, centralita manifold, almacenamiento a granel, uso exterior/interior).</li><li>Mapear exposiciones en planta y elevación (límites de propiedad, tránsito público, accesos, fuentes de ignición).</li><li>Aplicar directrices normativas aplicables (NFPA 55, CGA, normativas contra incendios y estándares IEC/ISO).</li><li>Dimensionar distancias de segregación, ventilación natural y barreras cortafuego para fuentes de fuga.</li><li>Clasificar áreas peligrosas (zonas Ex) y especificar instalación eléctrica a prueba de explosión.</li><li>Concluir con matriz de causa y efecto, procedimientos de parada segura y comisionamiento.</li></ol><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Peligros por Familia de Gases</h3><div class=\"overflow-x-auto mb-6\"><table class=\"min-w-full bg-white border border-gray-200\"><thead class=\"bg-gray-100\"><tr><th class=\"py-2 px-4 border-b text-left\">Familia</th><th class=\"py-2 px-4 border-b text-left\">Peligro Principal</th><th class=\"py-2 px-4 border-b text-left\">Protecciones Prioritarias</th></tr></thead><tbody><tr><td class=\"py-2 px-4 border-b font-medium\">Inflamables ligeros (H₂)</td><td class=\"py-2 px-4 border-b\">Incendio, dardo de fuego, explosión</td><td class=\"py-2 px-4 border-b\">Ventilación cenital, ausencia de bolsas, detección de llama/gas, venteo seguro.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Oxidantes (O₂, N₂O)</td><td class=\"py-2 px-4 border-b\">Aceleración violenta de combustión</td><td class=\"py-2 px-4 border-b\">Segregación física de combustibles, limpieza para O₂, control de enriquecimiento.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Inertes (N₂, Ar, He)</td><td class=\"py-2 px-4 border-b\">Asfixia por desplazamiento de O₂</td><td class=\"py-2 px-4 border-b\">Ventilación natural cruzada, monitoreo de O₂ en espacios cerrados.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Tóxicos y Corrosivos</td><td class=\"py-2 px-4 border-b\">Toxicidad aguda, nube peligrosa</td><td class=\"py-2 px-4 border-b\">Gabinete con extracción a lavador de gases (scrubber), detección específica y contención.</td></tr></tbody></table></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Metodología de Implantación</h3><p class=\"mb-4\">La ubicación de la caseta debe definirse antes de su diseño constructivo. Intentar encajar un gabinete en un espacio residual suele generar ventilación deficiente, rutas de transporte peligrosas y distancias de seguridad inviables.</p><ul class=\"list-disc pl-6 space-y-2 mb-6 text-gray-700\"><li>Definir inventario máximo, presiones de cabezal y diámetros de descarga.</li><li>Descartar ubicaciones críticas: sótanos, proximidad a tomas de aire de HVAC, zanjas y rutas de evacuación.</li><li>Mapear puntos potenciales de emisión y medir radios de seguridad desde cada brida/válvula.</li><li>Aplicar clasificación de áreas conforme a IEC 60079-10-1.</li></ul><div class=\"bg-blue-50 border-l-4 border-blue-500 p-6 mt-8\"><h4 class=\"text-lg font-bold text-blue-900 mb-2\">Nota de Ingeniería</h4><p class=\"text-blue-800\">Esta guía es orientativa y no sustituye el proyecto ejecutivo de ingeniería, el análisis formal de riesgos (HAZOP) ni los cálculos de venteo validados por un ingeniero colegiado.</p></div>",
      "en": "<p class=\"text-lg text-gray-700 mb-6\">This technical guide consolidates regulatory standards, prescriptive criteria, and engineering best practices for site selection, layout design, installation, commissioning, and safe operation of outdoor gas cylinder enclosures and manifolds.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Seven Critical Design Decisions</h3><ol class=\"list-decimal pl-6 space-y-2 mb-6 text-gray-700\"><li>Identify gas chemistry, purity grade, physical state, working pressure, and cylinder count.</li><li>Classify system architecture (individual cylinders, non-bulk manifold, bulk storage, indoor/outdoor).</li><li>Map elevation and plot-plan exposures (property lines, public access, building openings, ignition sources).</li><li>Enforce primary safety codes (NFPA 55, CGA standards, local fire department technical instructions, and ISO/IEC).</li><li>Engineer physical separation, natural ventilation paths, and rated fire barrier walls.</li><li>Perform hazardous area classification (Zone 1/2 or Class I Div 1/2) and specify Ex-rated electrical installations.</li><li>Finalize cause-and-effect logic, emergency depressurization protocols, and commissioning plans.</li></ol><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Hazards by Gas Family</h3><div class=\"overflow-x-auto mb-6\"><table class=\"min-w-full bg-white border border-gray-200\"><thead class=\"bg-gray-100\"><tr><th class=\"py-2 px-4 border-b text-left\">Family</th><th class=\"py-2 px-4 border-b text-left\">Dominant Hazard</th><th class=\"py-2 px-4 border-b text-left\">Priority Safeguards</th></tr></thead><tbody><tr><td class=\"py-2 px-4 border-b font-medium\">Light Flammables (H₂)</td><td class=\"py-2 px-4 border-b\">Jet fire, flash fire, deflagration</td><td class=\"py-2 px-4 border-b\">High-level ventilation, pocket elimination, optical flame/gas detection, dedicated relief.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Oxidizers (O₂, N₂O)</td><td class=\"py-2 px-4 border-b\">Violent combustion acceleration</td><td class=\"py-2 px-4 border-b\">Physical segregation from fuel sources, oxygen-clean standards, enrichment monitoring.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Inerts (N₂, Ar, He)</td><td class=\"py-2 px-4 border-b\">Asphyxiation via O₂ displacement</td><td class=\"py-2 px-4 border-b\">Continuous cross-ventilation, fixed O₂ depletion sensors in enclosed spaces.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Toxic & Corrosive</td><td class=\"py-2 px-4 border-b\">Acute toxicity, chemical exposure</td><td class=\"py-2 px-4 border-b\">Ventilated gas cabinets, scrubber abatement, electrochemical sensing, secondary containment.</td></tr></tbody></table></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Plot Plan Methodology</h3><p class=\"mb-4\">Site selection must precede structural enclosure design. Forcing a manifold into leftover facility space frequently compromises ventilation, obstructs cylinder handling, and creates unmanageable safety risks.</p><ul class=\"list-disc pl-6 space-y-2 mb-6 text-gray-700\"><li>Establish maximum inventory, line pressures, and relief pipe diameters.</li><li>Eliminate invalid locations: basements, proximity to HVAC air intakes, trenches, and exit pathways.</li><li>Map all potential emission points (valves, fittings, regulators) and measure separation perimeters.</li><li>Enforce hazardous area zoning per IEC 60079-10-1 / NFPA guidelines.</li></ul><div class=\"bg-blue-50 border-l-4 border-blue-500 p-6 mt-8\"><h4 class=\"text-lg font-bold text-blue-900 mb-2\">Engineering Note</h4><p class=\"text-blue-800\">This guide provides baseline reference engineering and does not replace formal detailed design, stamped engineering documentation, formal HAZOP studies, or manufacturer technical guidelines.</p></div>"
    }
  },
  {
    "id": "conversao-diesel-hidrogenio",
    "title": {
      "pt": "Conversão de Motores Diesel para Gás Natural",
      "es": "Conversión de Motores Diésel a Gas Natural y Dual-Fuel",
      "en": "Conversion of Heavy-Duty Diesel Engines to Natural Gas"
    },
    "summary": {
      "pt": "Soluções dedicadas a gás natural ou diesel-gás em modo dual fuel para grupos geradores, bombas, compressores e equipamentos industriais.",
      "es": "Soluciones de ingeniería en ciclo dedicado a gas natural o modo dual-fuel diésel-gas para grupos electrógenos, bombas y maquinaria pesada.",
      "en": "Dedicated natural gas and dual-fuel diesel-gas engineering solutions for generator sets, pumps, compressors, and heavy industrial machinery."
    },
    "content": {
      "pt": "<p class=\"text-lg text-gray-700 mb-6\">A conversão não é uma simples troca de combustível. Ela altera a forma de ignição, a relação ar-combustível, a proteção térmica e a estratégia de controle do motor. Dedicado a gás natural exige ignição por centelha e maior intervenção mecânica. Dual fuel preserva a injeção-piloto de diesel e reduz a complexidade da conversão.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Decisão de Engenharia: Qual arquitetura faz sentido para a operação?</h3><div class=\"overflow-x-auto mb-6\"><table class=\"min-w-full bg-white border border-gray-200\"><thead class=\"bg-gray-100\"><tr><th class=\"py-2 px-4 border-b text-left\">Aspecto</th><th class=\"py-2 px-4 border-b text-left\">Dedicado a gás natural</th><th class=\"py-2 px-4 border-b text-left\">Diesel-gás dual fuel</th></tr></thead><tbody><tr><td class=\"py-2 px-4 border-b font-medium\">Princípio de combustão</td><td class=\"py-2 px-4 border-b\">Ignição por centelha; o sistema diesel é removido ou desativado.</td><td class=\"py-2 px-4 border-b\">Pequena injeção-piloto de diesel inicia a combustão do gás.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Consumo de diesel</td><td class=\"py-2 px-4 border-b\">Eliminado durante a operação normal.</td><td class=\"py-2 px-4 border-b\">Reduzido; a fração de substituição varia.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Intervenção</td><td class=\"py-2 px-4 border-b\">Alta: cabeçote, velas, ignição, dosagem, ECU.</td><td class=\"py-2 px-4 border-b\">Moderada: mantém pistões, injetores e sistema diesel.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Redundância</td><td class=\"py-2 px-4 border-b\">Depende da disponibilidade de gás.</td><td class=\"py-2 px-4 border-b\">Pode retornar a 100% diesel.</td></tr></tbody></table></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Componentes e Escopo do Kit</h3><p class=\"mb-4\">O que normalmente permanece no dual fuel: Bloco, cabeçote, pistões, sistema de lubrificação, bomba de alta pressão/common rail, turboalimentador e pós-tratamento.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Etapas Recomendadas do Projeto</h3><ul class=\"list-disc pl-6 space-y-2 mb-6 text-gray-700\"><li><strong>Baseline:</strong> Identificar fabricante, modelo, potência, curva de carga e emissões.</li><li><strong>Combustível:</strong> Caracterizar pressão, composição, poder calorífico e contaminantes.</li><li><strong>Engenharia:</strong> Definir arquitetura, P&ID, análise de riscos e corte seguro.</li><li><strong>Integração:</strong> Instalar trem de gás, sensores, ECU e adaptações mecânicas.</li><li><strong>Calibração:</strong> Mapear partida, transientes e limitar detonação.</li><li><strong>Validação:</strong> Testes de estanqueidade, parada de emergência e emissões.</li></ul><div class=\"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8\"><h4 class=\"text-lg font-bold text-blue-900 mb-2\">Contraponto Essencial</h4><p class=\"text-blue-800\">Prometer \"mesma potência e menor custo\" sem ensaio de referência é comercialmente tentador, mas tecnicamente frágil. Pode haver derating, especialmente com baixa pressão ou alta temperatura.</p></div>",
      "es": "<p class=\"text-lg text-gray-700 mb-6\">La conversión de motores pesados trasciende un simple cambio de combustible. Modifica la cinemática de combustión, la relación aire/combustible (lambda), el balance térmico en cámaras y la estrategia de control electrónico. El ciclo dedicado a gas natural requiere encendido por chispa e intervención mecánica profunda, mientras que el modo dual-fuel preserva la inyección piloto de diésel optimizando la inversión.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Decisión de Ingeniería: ¿Qué arquitectura se adapta a su operación?</h3><div class=\"overflow-x-auto mb-6\"><table class=\"min-w-full bg-white border border-gray-200\"><thead class=\"bg-gray-100\"><tr><th class=\"py-2 px-4 border-b text-left\">Aspecto Clave</th><th class=\"py-2 px-4 border-b text-left\">Dedicado a Gas Natural</th><th class=\"py-2 px-4 border-b text-left\">Diésel-Gas Dual-Fuel</th></tr></thead><tbody><tr><td class=\"py-2 px-4 border-b font-medium\">Principio de Combustión</td><td class=\"py-2 px-4 border-b\">Encendido por chispa (ciclo Otto); sistema de inyección diésel desmontado.</td><td class=\"py-2 px-4 border-b\">Microinyección piloto de diésel como fuente de ignición por compresión.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Consumo de Diésel</td><td class=\"py-2 px-4 border-b\">100% eliminado en régimen permanente.</td><td class=\"py-2 px-4 border-b\">Sustitución de hasta un 70-85% según curva de carga.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Nivel de Intervención</td><td class=\"py-2 px-4 border-b\">Alto: culatas, bujías, bobinas, mariposas de mezcla y ECU dedicada.</td><td class=\"py-2 px-4 border-b\">Moderado: rampa de inyección de gas, mezclador venturi y ECU complementaria.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Redundancia Operacional</td><td class=\"py-2 px-4 border-b\">Dependencia total del suministro de gas.</td><td class=\"py-2 px-4 border-b\">Retorno automático e instantáneo a 100% diésel ante falla de gas.</td></tr></tbody></table></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Fases de Ejecución Recomendadas</h3><ul class=\"list-disc pl-6 space-y-2 mb-6 text-gray-700\"><li><strong>Línea Base:</strong> Diagnóstico de fabricante, curva de par/potencia, análisis de aceite y emisiones base.</li><li><strong>Calidad del Gas:</strong> Análisis cromatográfico, poder calorífico inferior (PCI), índice de metano y humedad.</li><li><strong>Ingeniería y Seguridad:</strong> Diseño de rampa de gas conforme a norma, P&ID, válvulas de corte rápido y análisis de detonación (knock).</li><li><strong>Integración en Campo:</strong> Montaje de tren de válvulas, sensores de presión/temperatura y cableado apantallado.</li><li><strong>Calibración y Puesta en Marcha:</strong> Mapeo en dinamómetro o banco de carga resistivo, ajuste de transitorios y límites de EGT.</li></ul><div class=\"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8\"><h4 class=\"text-lg font-bold text-blue-900 mb-2\">Criterio Técnico Riguroso</h4><p class=\"text-blue-800\">Garantizar potencia idéntica sin pruebas de carga y monitoreo de temperatura de gases de escape (EGT) compromete la vida útil del motor. La ingeniería de Prime evalúa el derating térmico y asegura la integridad mecánica de sus activos.</p></div>",
      "en": "<p class=\"text-lg text-gray-700 mb-6\">Converting heavy-duty industrial diesel engines is far more than a fuel swap. It fundamentally redesigns combustion dynamics, air-fuel ratio management, cylinder thermal loading, and electronic powertrain control. A dedicated natural gas conversion requires spark ignition and extensive mechanical overhaul, whereas dual-fuel systems preserve diesel pilot injection while dramatically lowering fuel expenses.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Engineering Decision Matrix: Dedicated vs. Dual-Fuel</h3><div class=\"overflow-x-auto mb-6\"><table class=\"min-w-full bg-white border border-gray-200\"><thead class=\"bg-gray-100\"><tr><th class=\"py-2 px-4 border-b text-left\">Technical Metric</th><th class=\"py-2 px-4 border-b text-left\">Dedicated Natural Gas</th><th class=\"py-2 px-4 border-b text-left\">Diesel-Gas Dual-Fuel</th></tr></thead><tbody><tr><td class=\"py-2 px-4 border-b font-medium\">Combustion Cycle</td><td class=\"py-2 px-4 border-b\">Spark-ignited Otto cycle; diesel injection hardware removed.</td><td class=\"py-2 px-4 border-b\">Compression-ignited diesel pilot acts as the flame ignition source.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Diesel Displacement</td><td class=\"py-2 px-4 border-b\">100% eliminated during standard operation.</td><td class=\"py-2 px-4 border-b\">Up to 70-85% substitution depending on load profiles.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Intervention Level</td><td class=\"py-2 px-4 border-b\">High: cylinder heads, spark plugs, ignition coils, throttle bodies, dedicated ECU.</td><td class=\"py-2 px-4 border-b\">Moderate: gas train, port/manifold gas injection, add-on ECU module.</td></tr><tr><td class=\"py-2 px-4 border-b font-medium\">Fuel Redundancy</td><td class=\"py-2 px-4 border-b\">Zero redundancy; 100% dependent on gas supply.</td><td class=\"py-2 px-4 border-b\">Seamless, automatic fallback to 100% diesel if gas pressure drops.</td></tr></tbody></table></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Project Delivery Methodology</h3><ul class=\"list-disc pl-6 space-y-2 mb-6 text-gray-700\"><li><strong>Baseline Assessment:</strong> Engine OEM specifications, torque/power curves, baseline lube analysis, and emissions logging.</li><li><strong>Fuel Characterization:</strong> Gas chromatography, lower heating value (LHV), methane number (MN), and moisture content.</li><li><strong>System Engineering:</strong> Compliant gas train design, P&ID review, fast-acting shutoff valves, and knock control logic.</li><li><strong>Field Integration:</strong> High-pressure piping, sensor installation, Ex-proof wiring, and engine safety interlocks.</li><li><strong>Tuning & Commissioning:</strong> Dynamic load-bank mapping, transient response tuning, and exhaust gas temperature (EGT) protection.</li></ul><div class=\"bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8\"><h4 class=\"text-lg font-bold text-blue-900 mb-2\">Technical Integrity</h4><p class=\"text-blue-800\">Promising identical output without rigorous load testing and thermal monitoring creates severe operational risk. Prime Products engineers evaluate thermal derating and knock margins to safeguard your capital equipment.</p></div>"
    }
  },
  {
    "id": "instrumentacao-analitica-utilidades",
    "title": {
      "pt": "Instrumentação Analítica: A Ciência por Trás da Infraestrutura",
      "es": "Instrumentación Analítica: La Ciencia detrás de la Infraestructura de Servicios",
      "en": "Analytical Instrumentation: The Science Behind Utility Infrastructure"
    },
    "summary": {
      "pt": "A diferença crítica entre montar tubulações industriais comuns e projetar redes de utilidades baseadas no limite de detecção do instrumento.",
      "es": "La diferencia fundamental entre instalar tuberías industriales convencionales y diseñar redes analíticas de alta pureza calculadas por el límite de detección del equipo.",
      "en": "The critical distinction between standard piping assembly and designing high-purity utility infrastructure engineered to instrument detection limits."
    },
    "content": {
      "pt": "<p class=\"text-lg text-gray-700 mb-6\">Laboratórios de pesquisa, controle de qualidade e desenvolvimento dependem de instrumentos capazes de converter fenômenos físicos e químicos em resultados. No entanto, o desempenho declarado pelo fabricante só é alcançado quando os gases, ar comprimido, exaustão e energia chegam com precisão analítica.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Montar a Rede vs Projetar a Utilidade</h3><p class=\"mb-4\">Tubos alinhados e sem vazamento representam apenas o básico. A verdadeira engenharia de utilidades responde perguntas críticas: Qual contaminante destrói a coluna do GC-MS? Como a pressão estática difere da pressão dinâmica na ignição de um ICP-OES?</p><div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6\"><div class=\"bg-red-50 p-6 rounded-lg border border-red-100\"><h4 class=\"font-bold text-red-800 mb-4 flex items-center\"><span class=\"mr-2\">❌</span> Apenas Montagem</h4><ul class=\"space-y-2 text-sm text-red-900\"><li>• Chama instável e sinal ruidoso.</li><li>• Paradas prolongadas por falta de argônio.</li><li>• Oxidação prematura de colunas.</li><li>• Exaustão subdimensionada alterando leituras.</li></ul></div><div class=\"bg-green-50 p-6 rounded-lg border border-green-100\"><h4 class=\"font-bold text-green-800 mb-4 flex items-center\"><span class=\"mr-2\">✅</span> Engenharia Prime</h4><ul class=\"space-y-2 text-sm text-green-900\"><li>• Requisitos vinculados ao fenômeno físico/químico.</li><li>• Materiais e purga selecionados pelo limite de detecção.</li><li>• Segurança integrada e intertravamentos fail-safe.</li><li>• Testes focados no desempenho analítico real.</li></ul></div></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Casos Reais por Instrumento</h3><ul class=\"list-disc pl-6 space-y-4 mb-6 text-gray-700\"><li><strong>AA por Chama (Acetileno/Óxido Nitroso):</strong> A estabilidade depende vitalmente da regulagem fina sem flutuação e do controle restrito do arraste de acetona do cilindro, além de proteção rigorosa contra retrocesso de chama.</li><li><strong>GC-FID e GC-MS (Arraste de Hélio/H₂):</strong> Um vazamento microscópico introduz oxigênio e umidade. Isso destrói o filamento no Mass Spec (MS) ou gera linha de base flutuante severa e oxidação na fase estacionária.</li><li><strong>ICP-OES / ICP-MS (Argônio):</strong> O plasma consome vazões extremas. O projeto não deve olhar a \"pressão de catálogo\", mas a vazão dinâmica da tubulação para não extinguir o plasma.</li><li><strong>Analisadores NDIR:</strong> As calibrações dependem de mistura span precisa e sem alteração química na linha de amostragem por condensação ou materiais adsorventes.</li></ul><div class=\"bg-secondary/5 border-t-4 border-primary p-6 mt-8\"><p class=\"font-bold text-lg text-secondary mb-2\">Conhecimento que se transforma em infraestrutura</p><p class=\"text-gray-700\">A Prime Products não projeta apenas \"três tubos\". Nós avaliamos a cinética de atomização, a estabilidade do plasma e o limite de detecção para entregar infraestruturas laboratoriais à prova de falhas.</p></div>",
      "es": "<p class=\"text-lg text-gray-700 mb-6\">Los laboratorios analíticos, plantas químicas y centros de I+D dependen de instrumentos capaces de traducir fenómenos moleculares en datos cuantitativos exactos. Sin embargo, las especificaciones del fabricante solo se alcanzan cuando los gases portadores, gases de combustión y utilidades llegan con pureza e integridad física absoluta.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Montaje Mecánico vs. Ingeniería de Utilidades Analíticas</h3><p class=\"mb-4\">Tuberías alineadas y sin fugas visibles constituyen solo el punto de partida. La verdadera ingeniería responde a variables críticas: ¿Qué nivel de trazas de O₂/H₂O degrada la fase estacionaria de un GC-MS? ¿Cómo amortiguar la caída de presión dinámica al encender el plasma de un ICP-OES?</p><div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6\"><div class=\"bg-red-50 p-6 rounded-lg border border-red-100\"><h4 class=\"font-bold text-red-800 mb-4 flex items-center\"><span class=\"mr-2\">❌</span> Montaje Convencional</h4><ul class=\"space-y-2 text-sm text-red-900\"><li>• Ruido en línea base y deriva en la calibración.</li><li>• Apagado de plasma por caídas instantáneas de presión.</li><li>• Oxidación prematura de filamentos en detectores MS.</li><li>• Adsorción de muestras por rugosidad interna inadecuada.</li></ul></div><div class=\"bg-green-50 p-6 rounded-lg border border-green-100\"><h4 class=\"font-bold text-green-800 mb-4 flex items-center\"><span class=\"mr-2\">✅</span> Ingeniería Prime Products</h4><ul class=\"space-y-2 text-sm text-green-900\"><li>• Especificación basada en límites de detección (ppm / ppb).</li><li>• Tubería en acero inoxidable 316L con electropulido (EP).</li><li>• Reguladores con diafragma metálico y purga de helio certificada.</li><li>• Pruebas de espectrometría de masas para estanqueidad total.</li></ul></div></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Criterios de Aplicación por Instrumento</h3><ul class=\"list-disc pl-6 space-y-4 mb-6 text-gray-700\"><li><strong>Absorción Atómica (C₂H₂ / N₂O):</strong> La estabilidad de la llama exige regulación fina sin histéresis y control riguroso del arrastre de acetona, con arrestadores de llama homologados.</li><li><strong>Cromatografía GC-FID / GC-MS (He / H₂ / Ar):</strong> Microfugas introducen trazas de oxígeno que destruyen filamentos en espectrómetros de masas y elevan el límite de ruido analítico.</li><li><strong>ICP-OES / ICP-MS (Argón):</strong> El soplete de plasma requiere caudales dinámicos elevados. El cálculo debe evitar pérdidas de carga en picos de demanda para impedir la extinción del plasma.</li><li><strong>Analizadores Infrarrojos NDIR:</strong> Las líneas de acondicionamiento de muestra deben ser calefaccionadas y químicamente inertes para evitar condensaciones y pérdida de componentes.</li></ul><div class=\"bg-secondary/5 border-t-4 border-primary p-6 mt-8\"><p class=\"font-bold text-lg text-secondary mb-2\">Ingeniería que garantiza resultados reproducibles</p><p class=\"text-gray-700\">En Prime Products evaluamos la cinética analítica, la pureza y los requerimientos metrológicos para construir infraestructuras de laboratorio con cero margen de error.</p></div>",
      "en": "<p class=\"text-lg text-gray-700 mb-6\">R&D facilities, quality control labs, and industrial process analyzers rely on delicate instrumentation to translate chemical phenomena into critical business data. However, OEM instrument specifications can only be achieved when carrier gases, reaction gases, and utility lines are delivered with absolute physical and chemical purity.</p><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Basic Piping Assembly vs. Engineered Analytical Utilities</h3><p class=\"mb-4\">Leak-free, neatly installed tubing represents only the baseline. Professional analytical engineering solves deeper questions: What trace contaminant will destroy a GC-MS column? How do static vs. dynamic pressure drops impact ICP-OES plasma ignition?</p><div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6\"><div class=\"bg-red-50 p-6 rounded-lg border border-red-100\"><h4 class=\"font-bold text-red-800 mb-4 flex items-center\"><span class=\"mr-2\">❌</span> Standard Assembly</h4><ul class=\"space-y-2 text-sm text-red-900\"><li>• High baseline noise and severe calibration drift.</li><li>• Plasma extinguishment during dynamic flow surges.</li><li>• Premature filament burnout in Mass Spectrometry (MS).</li><li>• Sample adsorption on unpolished internal tube walls.</li></ul></div><div class=\"bg-green-50 p-6 rounded-lg border border-green-100\"><h4 class=\"font-bold text-green-800 mb-4 flex items-center\"><span class=\"mr-2\">✅</span> Prime Products Engineering</h4><ul class=\"space-y-2 text-sm text-green-900\"><li>• Design matched to instrument detection limits (ppm / ppb).</li><li>• Electropolished (EP) 316L stainless steel tubing.</li><li>• Metal diaphragm regulators with certified helium leak testing.</li><li>• Integrated point-of-use gas purification and ESD protection.</li></ul></div></div><h3 class=\"text-2xl font-bold text-secondary mb-4 mt-8 border-l-4 border-primary pl-4\">Application Engineering by Instrument Class</h3><ul class=\"list-disc pl-6 space-y-4 mb-6 text-gray-700\"><li><strong>Flame Atomic Absorption (C₂H₂ / N₂O):</strong> Flame stability depends on ripple-free pressure regulation and strict cylinder acetone carryover prevention with certified flashback arrestors.</li><li><strong>GC-FID & GC-MS (He / H₂ / Zero Air):</strong> Microscopic leaks introduce atmospheric oxygen and moisture, causing rapid stationary phase oxidation and costly MS filament failures.</li><li><strong>ICP-OES / ICP-MS (High-Purity Argon):</strong> High flow torch demands must be sized for dynamic velocity rather than catalog static pressure to prevent plasma collapse.</li><li><strong>Continuous Emissions NDIR Analyzers:</strong> Sample conditioning lines require heated, non-adsorptive inert materials to prevent moisture condensation and analyte loss.</li></ul><div class=\"bg-secondary/5 border-t-4 border-primary p-6 mt-8\"><p class=\"font-bold text-lg text-secondary mb-2\">Translating metrology into robust infrastructure</p><p class=\"text-gray-700\">Prime Products engineers evaluate atomization kinetics, plasma stability, and detection limits to deliver flawless laboratory utility networks.</p></div>"
    }
  },
  {
    "id": "compatibilidade-elgiloy-h2s",
    "title": {
      "pt": "Compatibilidade do H₂S com Liga Elgiloy®",
      "es": "Compatibilidad de H₂S con Aleación Elgiloy® en Servicio Ácido",
      "en": "H₂S Compatibility with Elgiloy® Alloy in Sour Gas Service"
    },
    "summary": {
      "pt": "Folha de dados técnica orientativa sobre componentes de reguladores e válvulas para gases especiais contendo Sulfeto de Hidrogênio (H₂S).",
      "es": "Ficha técnica orientativa sobre la resistencia a la corrosión bajo tensión y fatiga de componentes en aleación Elgiloy® expuestos a H₂S.",
      "en": "Technical guidance on fatigue resistance and stress corrosion cracking (SCC) of Elgiloy® alloy components in H₂S and sour gas applications."
    },
    "content": {
      "pt": "<p class=\"mb-6\">A liga Elgiloy® (Co-Cr-Ni-Mo / UNS R30003) é um material especial reconhecido por sua altíssima resistência à fadiga e excelente comportamento frente à corrosão, sendo ideal para ambientes de serviço ácido (sour gas). Esta avaliação técnica resume sua aplicabilidade em contato com H₂S.</p><h3 class=\"text-xl font-bold text-secondary mt-8 mb-4\">Avaliação de Compatibilidade Técnica</h3><div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8\"><div class=\"bg-green-50 border-l-4 border-green-500 p-4\"><div class=\"font-bold text-green-700 mb-1\">✅ Altamente Recomendado</div><div class=\"text-sm text-green-900 leading-relaxed\">Molas internas de reguladores, diafragmas metálicos e pequenos elementos elásticos submetidos a ciclos de fadiga.</div></div><div class=\"bg-yellow-50 border-l-4 border-yellow-500 p-4\"><div class=\"font-bold text-yellow-700 mb-1\">⚠️ Depende do Conjunto</div><div class=\"text-sm text-yellow-900 leading-relaxed\">Uso como corpo de válvula ou peça estrutural não é usual. A boa resistência do Elgiloy® isoladamente não garante que vedações e conexões sejam compatíveis.</div></div></div><h3 class=\"text-xl font-bold text-secondary mt-8 mb-4\">Fatores que Alteram a Compatibilidade</h3><ul class=\"list-disc pl-5 space-y-2 mb-8 text-gray-700\"><li><strong>Pressão Parcial de H₂S:</strong> Quanto maior a severidade, mais importante a verificação normativa (NACE MR0175 / ISO 15156).</li><li><strong>Contaminantes Associados:</strong> A presença de água livre (condensado) e cloretos somados ao H₂S aumenta drasticamente o risco.</li><li><strong>Tensão Mecânica:</strong> O risco de trinca aumenta em componentes com tensões residuais elevadas ou submetidos à flexão cíclica.</li></ul><div class=\"bg-secondary/5 p-6 rounded-sm text-center mt-12 border border-gray-200\"><p class=\"font-bold text-secondary text-lg mb-2\">Deseja aplicar essa especificação no seu processo?</p><p class=\"text-sm text-gray-600 mb-6\">A aprovação de uso para Sour Gas exige a validação do conjunto completo e das condições reais de serviço.</p><a href=\"/contato\" class=\"inline-block bg-primary text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-sm hover:bg-blue-700 transition-colors shadow-md\">Falar com a Engenharia da Prime</a></div>",
      "es": "<p class=\"mb-6\">La superaleación Elgiloy® (Co-Cr-Ni-Mo / UNS R30003) se distingue por su extraordinaria resistencia a la fatiga mecánica y su excelente desempeño frente a la corrosión bajo tensión en presencia de sulfuro de hidrógeno (H₂S / sour gas). Esta evaluación resume sus directrices de aplicación técnica.</p><h3 class=\"text-xl font-bold text-secondary mt-8 mb-4\">Evaluación de Compatibilidad Técnica</h3><div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8\"><div class=\"bg-green-50 border-l-4 border-green-500 p-4\"><div class=\"font-bold text-green-700 mb-1\">✅ Altamente Recomendado</div><div class=\"text-sm text-green-900 leading-relaxed\">Resortes internos de reguladores, diafragmas metálicos y elementos flexibles sometidos a fatiga cíclica extrema.</div></div><div class=\"bg-yellow-50 border-l-4 border-yellow-500 p-4\"><div class=\"font-bold text-yellow-700 mb-1\">⚠️ Requiere Validación de Conjunto</div><div class=\"text-sm text-yellow-900 leading-relaxed\">Su uso en cuerpos masivos no es estándar. La resistencia de Elgiloy® no reemplaza la compatibilidad de elastómeros, sellos y roscas del sistema.</div></div></div><h3 class=\"text-xl font-bold text-secondary mt-8 mb-4\">Factores Críticos de Proceso</h3><ul class=\"list-disc pl-5 space-y-2 mb-8 text-gray-700\"><li><strong>Presión Parcial de H₂S:</strong> Requiere cumplimiento estricto de los límites de dureza y tratamiento térmico de la norma NACE MR0175 / ISO 15156.</li><li><strong>Humedad y Cloruros:</strong> La presencia de agua líquida condensada combinada con cloruros eleva el riesgo de picaduras y agrietamiento inducido por hidrógeno (HIC).</li><li><strong>Nivel de Esfuerzo Residual:</strong> Las piezas con conformado en frío deben someterse a tratamientos térmicos de distensionado certificados.</li></ul><div class=\"bg-secondary/5 p-6 rounded-sm text-center mt-12 border border-gray-200\"><p class=\"font-bold text-secondary text-lg mb-2\">¿Necesita validar especificaciones para servicio amargo?</p><p class=\"text-sm text-gray-600 mb-6\">Nuestro equipo de ingeniería revisa sus condiciones operativas de P&T para certificar la selección de materiales.</p><a href=\"/contato\" class=\"inline-block bg-primary text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-sm hover:bg-blue-700 transition-colors shadow-md\">Consultar a Ingeniería Prime</a></div>",
      "en": "<p class=\"mb-6\">Elgiloy® superalloy (Co-Cr-Ni-Mo / UNS R30003) is renowned for outstanding mechanical fatigue endurance and exceptional resistance to sulfide stress cracking (SSC) in sour gas (H₂S) environments. This technical appraisal outlines its optimal engineering application.</p><h3 class=\"text-xl font-bold text-secondary mt-8 mb-4\">Technical Compatibility Matrix</h3><div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8\"><div class=\"bg-green-50 border-l-4 border-green-500 p-4\"><div class=\"font-bold text-green-700 mb-1\">✅ Highly Recommended</div><div class=\"text-sm text-green-900 leading-relaxed\">Internal regulator springs, sensing diaphragms, and dynamic elastic elements undergoing high cyclic loading.</div></div><div class=\"bg-yellow-50 border-l-4 border-yellow-500 p-4\"><div class=\"font-bold text-yellow-700 mb-1\">⚠️ System-Level Validation Required</div><div class=\"text-sm text-yellow-900 leading-relaxed\">Not typical for valve bodies. The resilience of Elgiloy® alone does not compensate for incompatible elastomeric seats or stem packings.</div></div></div><h3 class=\"text-xl font-bold text-secondary mt-8 mb-4\">Critical Process Parameters</h3><ul class=\"list-disc pl-5 space-y-2 mb-8 text-gray-700\"><li><strong>H₂S Partial Pressure:</strong> Requires strict compliance with NACE MR0175 / ISO 15156 hardness thresholds and heat treatment profiles.</li><li><strong>Associated Electrolytes:</strong> Free water condensation and chlorides dramatically increase pitting and stress-oriented hydrogen-induced cracking (SOHIC).</li><li><strong>Mechanical Stress State:</strong> Cold-worked components must receive certified stress-relief heat treatment to prevent crack propagation.</li></ul><div class=\"bg-secondary/5 p-6 rounded-sm text-center mt-12 border border-gray-200\"><p class=\"font-bold text-secondary text-lg mb-2\">Need material specification support for sour service?</p><p class=\"text-sm text-gray-600 mb-6\">Our metallurgical and applications engineering team validates your operating parameters for certified process integrity.</p><a href=\"/contato\" class=\"inline-block bg-primary text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-sm hover:bg-blue-700 transition-colors shadow-md\">Contact Prime Engineering</a></div>"
    }
  },
  {
    "id": "instrumentacao-industria-4-0",
    "title": {
      "pt": "Importância da instrumentação correta na indústria 4.0",
      "es": "Importancia de la Instrumentación Precisa en la Industria 4.0",
      "en": "The Role of Precision Instrumentation in Industry 4.0"
    },
    "summary": {
      "pt": "Como a escolha dos instrumentos afeta a qualidade e a eficiência dos processos modernos.",
      "es": "Cómo la selección de sensores inteligentes y protocolos industriales impulsa la confiabilidad y la analítica predictiva.",
      "en": "How smart sensors, industrial digital protocols, and instrumentation integrity unlock real-time predictive plant analytics."
    },
    "content": {
      "pt": "<p class=\"mb-4\">A Indústria 4.0 transformou a maneira como as fábricas operam. Sem sensores precisos e instrumentação adequada, os algoritmos de IA recebem dados ruidosos. Protocolos como HART, Profibus e Ethernet-APL permitem diagnósticos avançados, manutenção preditiva e otimização em tempo real.</p><h3>Conectividade e Integridade Metrológica</h3><p>A digitalização industrial começa no nível de campo. Transmissores de pressão, sensores de temperatura e medidores de vazão com alta rangeabilidade e repetibilidade asseguram que o gêmeo digital (Digital Twin) reflita o estado físico exato do processo.</p>",
      "es": "<p class=\"mb-4\">La Industria 4.0 redefine la operación de las plantas químicas y energéticas. Sin embargo, ningún algoritmo de inteligencia artificial o gemelo digital (Digital Twin) puede generar valor si se alimenta de datos ruidosos o sensores descalibrados. Protocolos como HART 7, Profibus PA y Ethernet-APL habilitan diagnósticos de salud del instrumento en tiempo real.</p><h3>De la Señal Analógica al Mantenimiento Predictivo</h3><p>La instrumentación inteligente de Prime Products provee no solo la variable principal de proceso, sino métricas de diagnóstico secundarias (ruido de señal, temperatura de electrónica, impedancia del lazo) que permiten anticipar fallas antes de que generen paradas no programadas.</p>",
      "en": "<p class=\"mb-4\">Industry 4.0 and digital transformation depend entirely on physical layer data integrity. Artificial intelligence models and Digital Twins require high-accuracy, low-noise field data. Advanced industrial protocols such as HART 7, Profibus-PA, and Ethernet-APL empower plants with continuous asset health monitoring and predictive analytics.</p><h3>From Analog Signals to Predictive Intelligence</h3><p>Prime Products smart transmitters deliver primary process variables alongside secondary diagnostic telemetry (sensor impedance, temperature profiling, signal-to-noise ratio), allowing operators to preempt equipment degradation before costly unscheduled shutdowns occur.</p>"
    }
  },
  {
    "id": "seguranca-sistemas-gases",
    "title": {
      "pt": "Segurança em sistemas de gases: Normas NR-13 e além",
      "es": "Seguridad en Sistemas de Gases: Cumplimiento de NR-13 y Estándares ASME/NFPA",
      "en": "Process Safety in Industrial Gas Systems: Pressure Vessel Standards & Beyond"
    },
    "summary": {
      "pt": "Normas e procedimentos essenciais para garantir a integridade e a segurança de sistemas de gases industriais.",
      "es": "Procedimientos indispensables para asegurar la integridad mecánica, alivio de sobrepresión y seguridad en recipientes y tuberías de gas.",
      "en": "Essential protocols for ensuring mechanical integrity, overpressure protection, and regulatory compliance in high-pressure gas facilities."
    },
    "content": {
      "pt": "<p class=\"mb-4\">A gestão segura de gases industriais exige um entendimento profundo das normas regulamentadoras. A NR-13 estabelece requisitos compulsórios para gestão de vasos de pressão, acumuladores e tubulações, integrando inspeções periódicas, dimensionamento de dispositivos de alívio e documentação rastreável.</p><h3>Barreiras de Segurança em Camadas</h3><p>A engenharia da Prime dimensiona sistemas com proteção contra sobrepressão por válvulas de segurança (PSV), discos de ruptura combinados, intertravamentos com corte automático (ESD) e detecção de vazamentos em tempo real.</p>",
      "es": "<p class=\"mb-4\">La gestión segura de gases industriales y combustibles exige un conocimiento exhaustivo de los marcos normativos de recipientes a presión y tuberías de proceso (NR-13, ASME VIII, ASME B31.3). La integridad mecánica previene escapes catastróficos y garantiza la continuidad operativa de la planta.</p><h3>Capas de Protección de Sobrepresión</h3><p>En Prime Products dimensionamos sistemas con válvulas de seguridad y alivio (PSV) certificadas, discos de ruptura combinados, sistemas instrumentados de seguridad (SIS/SIL) y detección continua de mezclas explosivas y tóxicas.</p>",
      "en": "<p class=\"mb-4\">Safe management of high-pressure industrial gases requires rigorous adherence to pressure vessel and process piping codes (ASME Section VIII, ASME B31.3, and regulatory inspection standards). Mechanical integrity management mitigates catastrophic loss of containment while guaranteeing asset availability.</p><h3>Engineered Overpressure Layers</h3><p>Prime Products designs comprehensive layered protection combining certified pressure safety relief valves (PSVs), buckling pin devices, automated emergency shutdown (ESD) isolation, and real-time gas monitoring.</p>"
    }
  },
  {
    "id": "engenharia-aplicada-processos",
    "title": {
      "pt": "Engenharia aplicada: Otimizando processos industriais",
      "es": "Ingeniería Aplicada: Optimización de Lazos de Control y Procesos Críticos",
      "en": "Applied Engineering: Optimizing Control Loops and Critical Systems"
    },
    "summary": {
      "pt": "A diferença entre a teoria e a prática na otimização de malhas de controle e processos críticos.",
      "es": "Cómo la correcta selección de válvulas, Cv/Kv y regulación de presión estabiliza variables dinámicas de proceso.",
      "en": "Bridging theory and field execution to stabilize dynamic variables through precision valve sizing and custom skid engineering."
    },
    "content": {
      "pt": "<p class=\"mb-4\">A engenharia aplicada é sobre entender as nuances do processo real. Nossa equipe atua diretamente na especificação de instrumentos, dimensionamento de válvulas de controle (Cv/Kv) e montagem de skids de processo customizados para garantir estabilidade operacional e redução de variabilidade.</p>",
      "es": "<p class=\"mb-4\">La ingeniería aplicada consiste en dominar las variables reales del proceso industrial. El equipo técnico de Prime Products interviene directamente en el dimensionamiento de coeficiente de caudal (Cv/Kv), sintonía de lazos de control y diseño de skids compactos para eliminar la variabilidad y maximizar el rendimiento.</p>",
      "en": "<p class=\"mb-4\">Applied engineering bridges theoretical design and real-world industrial behavior. Prime Products specialists deliver tailored flow coefficient (Cv/Kv) sizing, dynamic loop tuning, and modular skid manufacturing to eliminate process variability and maximize operational uptime.</p>"
    }
  },
  {
    "id": "confiabilidade-operacional",
    "title": {
      "pt": "Garantindo confiabilidade operacional em 5 passos",
      "es": "Confiabilidad Operacional: 5 Pasos para Maximizar la Disponibilidad",
      "en": "Operational Reliability: 5 Steps to Maximize Plant Availability"
    },
    "summary": {
      "pt": "Estratégias para reduzir paradas não programadas e aumentar a vida útil dos seus ativos.",
      "es": "Estrategias probadas para mitigar paradas imprevistas y extender el ciclo de vida útil de los activos industriales.",
      "en": "Proven methodologies to eliminate unplanned downtime and extend the operational lifecycle of critical process assets."
    },
    "content": {
      "pt": "<p class=\"mb-4\">A confiabilidade operacional requer uma abordagem estruturada: 1) Análise de Criticidade de Ativos; 2) Manutenção Preditiva com monitoramento contínuo; 3) Calibração Metrológica Rastreável; 4) Gestão Estratégica de Sobressalentes; e 5) Análise de Causa Raiz (RCA) para eliminação de falhas recorrentes.</p>",
      "es": "<p class=\"mb-4\">Alcanzar una alta disponibilidad de planta exige una metodología sistemática: 1) Clasificación de criticidad de activos; 2) Monitoreo de condición y mantenimiento predictivo; 3) Calibración metrológica con trazabilidad; 4) Gestión optimizada de repuestos críticos; y 5) Análisis de Causa Raíz (RCA) para eliminar fallas crónicas.</p>",
      "en": "<p class=\"mb-4\">Achieving world-class plant uptime requires a structured engineering approach: 1) Asset Criticality Ranking; 2) Predictive condition monitoring; 3) Traceable metrological calibration; 4) Strategic spare parts management; and 5) Root Cause Analysis (RCA) to permanently resolve chronic component failures.</p>"
    }
  },
  {
    "id": "boas-praticas-calibracao",
    "title": {
      "pt": "Boas práticas em calibração de instrumentos analíticos",
      "es": "Buenas Prácticas en Calibración de Instrumentación Analítica",
      "en": "Best Practices in Analytical Instrumentation Calibration"
    },
    "summary": {
      "pt": "Como garantir a rastreabilidade e a precisão das suas análises.",
      "es": "Directrices para asegurar la trazabilidad metrológica y la exactitud en detectores y analizadores de gases.",
      "en": "Key guidelines for ensuring metrological traceability, repeatability, and accuracy across analytical analyzers and gas sensors."
    },
    "content": {
      "pt": "<p class=\"mb-4\">A calibração rigorosa de analisadores e detectores garante a precisão necessária em medições críticas. O uso de misturas padrão certificadas (RBC/NIST), controle de vazão e temperatura na câmara de calibração e registro de curvas de calibração previnem desvios analíticos e asseguram conformidade com a ISO/IEC 17025.</p>",
      "es": "<p class=\"mb-4\">La calibración rigurosa de detectores de gas y analizadores de proceso garantiza mediciones exactas y auditables. El empleo de mezclas patrón certificadas, el control estricto del caudal durante la prueba y la documentación formal de curvas de calibración aseguran la conformidad con la norma ISO/IEC 17025.</p>",
      "en": "<p class=\"mb-4\">Rigorous calibration of process analyzers and gas detection arrays ensures measurement integrity and audit readiness. Utilizing certified calibration gas standards, maintaining steady flow conditions, and documenting response curves ensure compliance with ISO/IEC 17025 quality frameworks.</p>"
    }
  },
  {
    "id": "analise-processo-vs-laboratorio",
    "title": {
      "pt": "Diferença entre análise de processo e análise laboratorial",
      "es": "Análisis en Línea de Proceso vs. Análisis de Laboratorio",
      "en": "Inline Process Analysis vs. Laboratory Quality Testing"
    },
    "summary": {
      "pt": "Vantagens e desvantagens de cada abordagem para o controle de qualidade.",
      "es": "Comparativa técnica entre la respuesta en tiempo real de analizadores en línea y la precisión de ensayos de laboratorio.",
      "en": "Technical comparison between real-time inline analyzer response times and benchtop laboratory testing accuracy."
    },
    "content": {
      "pt": "<p class=\"mb-4\">Enquanto as análises laboratoriais fornecem resolução espectral profunda em ambientes controlados, os analisadores de processo em linha operam continuamente na tubulação, fornecendo dados em tempo real para controle em malha fechada e evitando a produção de lotes fora de especificação.</p>",
      "es": "<p class=\"mb-4\">Mientras que los ensayos de laboratorio ofrecen una resolución analítica profunda en condiciones ambientales controladas, los analizadores en línea proporcionan monitoreo continuo en tiempo real, permitiendo el control automático en lazo cerrado e impidiendo la generación de productos fuera de especificación.</p>",
      "en": "<p class=\"mb-4\">While benchtop laboratory analysis provides deep spectral verification in tightly controlled environments, inline process analyzers deliver real-time continuous feedback, empowering automated closed-loop control and preventing off-spec production batches.</p>"
    }
  },
  {
    "id": "conformidade-rastreabilidade",
    "title": {
      "pt": "Conformidade e rastreabilidade: Por que documentar?",
      "es": "Conformidad y Trazabilidad: El Valor Estratégico del Databook Técnico",
      "en": "Compliance & Traceability: The Value of Technical Databooks"
    },
    "summary": {
      "pt": "A importância da documentação técnica na indústria regulada.",
      "es": "Por qué los certificados de materiales (MTR 3.1) y la documentación de ingeniería son vitales en industrias reguladas.",
      "en": "Why material test reports (MTR 3.1), hydrotest records, and detailed engineering databooks are indispensable in regulated industries."
    },
    "content": {
      "pt": "<p class=\"mb-4\">Em setores como farmacêutico, óleo & gás e hidrogênio, a documentação é tão crítica quanto o próprio hardware. A Prime Products entrega databooks completos com relatórios de corrida de materiais (MTRs 3.1), certificados de teste hidrostático e laudos de calibração rastreáveis.</p>",
      "es": "<p class=\"mb-4\">En sectores altamente regulados como el farmacéutico, gas natural e hidrógeno, la documentación técnica es tan fundamental como el propio equipo. Prime Products entrega databooks completos con certificados de colada (MTR 3.1), pruebas hidrostáticas y certificados de calibración trazables.</p>",
      "en": "<p class=\"mb-4\">In highly regulated sectors such as pharmaceuticals, natural gas, and green hydrogen, technical documentation is as vital as the hardware itself. Prime Products supplies full databooks including 3.1 material test reports, hydrostatic test certifications, and traceable calibration logs.</p>"
    }
  },
  {
    "id": "tendencias-instrumentacao",
    "title": {
      "pt": "Tendências em instrumentação para o próximo ano",
      "es": "Tendencias en Instrumentación y Control de Procesos",
      "en": "Emerging Trends in Industrial Instrumentation and Process Control"
    },
    "summary": {
      "pt": "O que esperar do futuro da automação e instrumentação industrial.",
      "es": "Hacia dónde avanza la tecnología de campo: Ethernet-APL, sensores inalámbricos y mantenimiento predictivo avanzado.",
      "en": "The future of field automation: Ethernet-APL architecture, self-calibrating instruments, and edge analytics."
    },
    "content": {
      "pt": "<p class=\"mb-4\">O avanço da arquitetura Ethernet-APL (Advanced Physical Layer) está levando comunicação de alta velocidade para áreas classificadas Zona 0/1. Paralelamente, sensores auto-calibráveis e integração com nuvem industrial estão redefinindo a eficiência operacional em processos contínuos.</p>",
      "es": "<p class=\"mb-4\">La adopción acelerada de la tecnología Ethernet-APL (Advanced Physical Layer) permite llevar comunicación de alta velocidad en bus de dos hilos directamente a áreas clasificadas Zona 0/1. Al mismo tiempo, los instrumentos con autodiagnóstico avanzado consolidan la transición hacia plantas autónomas y seguras.</p>",
      "en": "<p class=\"mb-4\">The rapid adoption of Ethernet-APL (Advanced Physical Layer) brings high-speed, two-wire fieldbus communications directly into Zone 0/1 hazardous areas. Combined with smart self-diagnosing sensors and industrial edge computing, process plants are achieving unprecedented operational efficiency.</p>"
    }
  }
];
const fs = require('fs');
const path = require('path');

const localesData = {
  pt: {},
  es: {},
  en: {}
};

function addKey(key, values) {
  localesData.pt[key] = values.pt;
  localesData.es[key] = values.es;
  localesData.en[key] = values.en;
}

// ─── LAYOUT & NAV ITEMS ──────────────────────────────────────────────────────
addKey('layout_topbar_city', { pt: "Belo Horizonte – MG", es: "Belo Horizonte – MG", en: "Belo Horizonte – MG" });
addKey('layout_topbar_email', { pt: "info@primeproducts.ind.br", es: "info@primeproducts.ind.br", en: "info@primeproducts.ind.br" });
addKey('layout_topbar_phone', { pt: "(31) 9 8670-8742", es: "(31) 9 8670-8742", en: "(31) 9 8670-8742" });
addKey('layout_logo_img', { pt: "/logo-prime.png", es: "/logo-prime.png", en: "/logo-prime.png" });
addKey('layout_nav_cta', { pt: "FALE CONOSCO", es: "CONTÁCTENOS", en: "CONTACT US" });
addKey('footer_desc', {
  pt: "Soluções técnicas voltadas à instrumentação, gases e engenharia aplicada com foco em segurança e confiabilidade.",
  es: "Soluciones técnicas orientadas a la instrumentación, gases e ingeniería aplicada con enfoque en seguridad y confiabilidad.",
  en: "Technical solutions oriented to instrumentation, gases, and applied engineering focused on safety and reliability."
});
addKey('footer_address_1', { pt: "Belo Horizonte – MG", es: "Belo Horizonte – MG", en: "Belo Horizonte – MG" });
addKey('footer_address_2', { pt: "Atendimento Nacional", es: "Atención Nacional", en: "National Service" });
addKey('footer_phone_1', { pt: "(31) 9 8670-8742", es: "(31) 9 8670-8742", en: "(31) 9 8670-8742" });
addKey('footer_email', { pt: "info@primeproducts.ind.br", es: "info@primeproducts.ind.br", en: "info@primeproducts.ind.br" });
addKey('footer_wide_banner', { pt: "/images/home/footer-banner.png", es: "/images/home/footer-banner.png", en: "/images/home/footer-banner.png" });

// Navigation Labels
addKey('nav_item_0', { pt: 'Home', es: 'Inicio', en: 'Home' });
addKey('nav_item_0_mobile', { pt: 'Home', es: 'Inicio', en: 'Home' });
addKey('nav_item_1', { pt: 'A Prime', es: 'Sobre Prime', en: 'About Prime' });
addKey('nav_item_1_mobile', { pt: 'A Prime', es: 'Sobre Prime', en: 'About Prime' });
addKey('nav_item_2', { pt: 'Soluções', es: 'Soluciones', en: 'Solutions' });
addKey('nav_item_2_mobile', { pt: 'Soluções', es: 'Soluciones', en: 'Solutions' });
addKey('nav_item_3', { pt: 'Produtos', es: 'Productos', en: 'Products' });
addKey('nav_item_3_mobile', { pt: 'Produtos', es: 'Productos', en: 'Products' });
addKey('nav_item_4', { pt: 'Aplicações', es: 'Aplicaciones', en: 'Applications' });
addKey('nav_item_4_mobile', { pt: 'Aplicações', es: 'Aplicaciones', en: 'Applications' });
addKey('nav_item_5', { pt: 'Ferramentas', es: 'Herramientas', en: 'Tools' });
addKey('nav_item_5_mobile', { pt: 'Ferramentas', es: 'Herramientas', en: 'Tools' });
addKey('nav_item_6', { pt: 'Conteúdo', es: 'Contenido', en: 'Content' });
addKey('nav_item_6_mobile', { pt: 'Conteúdo', es: 'Contenido', en: 'Content' });

// Navigation subItems
addKey('nav_sub_item_2_0', { pt: 'Visão Geral e Serviços', es: 'Visión general y servicios', en: 'Overview and Services' });
addKey('nav_sub_item_2_1', { pt: 'Instrumentação de Processos', es: 'Instrumentación de procesos', en: 'Process Instrumentation' });
addKey('nav_sub_item_2_2', { pt: 'Instrumentação Analítica', es: 'Instrumentación analítica', en: 'Analytical Instrumentation' });
addKey('nav_sub_item_2_3', { pt: 'Segurança: detecção e combate a incêndio', es: 'Seguridad: detección y protección contra incendios', en: 'Safety: Gas Detection and Fire Suppression' });
addKey('nav_sub_item_2_4', { pt: 'Soluções Integradas', es: 'Soluciones integradas', en: 'Integrated Solutions' });
addKey('nav_sub_item_2_5', { pt: 'Instalação de Rede de Gases', es: 'Instalación de redes de gases', en: 'Gas Distribution Network Installation' });
addKey('nav_sub_item_2_6', { pt: 'Guia Técnico de Ar Comprimido', es: 'Guía técnica de aire comprimido', en: 'Compressed Air Technical Guide' });
addKey('nav_sub_item_2_7', { pt: 'Levantamento 3D e As Built', es: 'Levantamiento 3D y As-Built', en: '3D Survey and As-Built' });

addKey('nav_sub_item_3_0', { pt: 'Ver Todos', es: 'Ver todos', en: 'View All' });
addKey('nav_sub_item_3_1', { pt: 'Cilindros de Alumínio', es: 'Cilindros de aluminio', en: 'Aluminum Cylinders' });
addKey('nav_sub_item_3_2', { pt: 'Cilindros Tipo 4', es: 'Cilindros Tipo 4', en: 'Type 4 Cylinders' });
addKey('nav_sub_item_3_3', { pt: 'Conexões para Instrumentação', es: 'Conexiones para instrumentación', en: 'Instrumentation Fittings' });
addKey('nav_sub_item_3_4', { pt: 'Detectores de Vazamento', es: 'Detectores de fugas', en: 'Leak Detectors' });
addKey('nav_sub_item_3_5', { pt: 'Dewars e Recipientes Criogênicos', es: 'Dewars y recipientes criogénicos', en: 'Dewars and Cryogenic Containers' });
addKey('nav_sub_item_3_6', { pt: 'Geração de Oxigênio e Anestesia', es: 'Generación de oxígeno y anestesia', en: 'Oxygen Generation and Anesthesia' });
addKey('nav_sub_item_3_7', { pt: 'Equipamentos para Corte e Solda', es: 'Equipos para corte y soldadura', en: 'Cutting and Welding Equipment' });
addKey('nav_sub_item_3_8', { pt: 'Reguladores de Gases Especiais', es: 'Reguladores para gases especiales', en: 'Specialty Gas Regulators' });
addKey('nav_sub_item_3_9', { pt: 'Reguladores Hidráulicos', es: 'Reguladores hidráulicos', en: 'Hydraulic Regulators' });
addKey('nav_sub_item_3_10', { pt: 'Reguladores para Calibração de Equipamentos', es: 'Reguladores para calibración de equipos', en: 'Equipment Calibration Regulators' });
addKey('nav_sub_item_3_11', { pt: 'Sistemas de Combate a Incêndio', es: 'Sistemas de extinción de incendios', en: 'Fire Suppression Systems' });
addKey('nav_sub_item_3_12', { pt: 'Transmissores: Pressão - Nível - Temperatura', es: 'Transmisores: presión - nivel - temperatura', en: 'Transmitters: Pressure - Level - Temperature' });
addKey('nav_sub_item_3_13', { pt: 'Válvulas Industriais - Medicinais - Especiais', es: 'Válvulas industriales - medicinales - especiales', en: 'Industrial - Medical - Specialty Valves' });

addKey('nav_sub_item_4_0', { pt: 'Ver Todas', es: 'Ver todas', en: 'View All' });
addKey('nav_sub_item_4_1', { pt: 'Óleo & Gás', es: 'Petróleo y gas', en: 'Oil & Gas' });
addKey('nav_sub_item_4_2', { pt: 'Farmacêutico', es: 'Farmacéutica', en: 'Pharmaceutical' });
addKey('nav_sub_item_4_3', { pt: 'Hospitalar', es: 'Hospitalaria', en: 'Healthcare' });
addKey('nav_sub_item_4_4', { pt: 'Laboratórios Analíticos', es: 'Laboratorios analíticos', en: 'Analytical Laboratories' });
addKey('nav_sub_item_4_5', { pt: 'Indústria Química', es: 'Industria química', en: 'Chemical Industry' });
addKey('nav_sub_item_4_6', { pt: 'Alimentos e Bebidas', es: 'Alimentos y bebidas', en: 'Food and Beverage' });
addKey('nav_sub_item_4_7', { pt: 'Automotivo', es: 'Automotriz', en: 'Automotive' });
addKey('nav_sub_item_4_8', { pt: 'Criogenia', es: 'Criogenia', en: 'Cryogenics' });
addKey('nav_sub_item_4_9', { pt: 'Metal Mecânica', es: 'Metalmecánica', en: 'Metalworking' });
addKey('nav_sub_item_4_10', { pt: 'Energias Renováveis', es: 'Energías renovables', en: 'Renewable Energy' });
addKey('nav_sub_item_4_11', { pt: 'Mineração', es: 'Minería', en: 'Mining' });

addKey('nav_sub_item_5_0', { pt: 'Simuladores (Web)', es: 'Simuladores (web)', en: 'Web Simulators' });
addKey('nav_sub_item_5_1', { pt: 'Calculadoras Prime', es: 'Calculadoras Prime', en: 'Prime Calculators' });

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
addKey('home_hero_badge', { pt: "ENGENHARIA E INSTRUMENTAÇÃO", es: "INGENIERÍA E INSTRUMENTACIÓN", en: "ENGINEERING AND INSTRUMENTATION" });
addKey('home_hero_title', {
  pt: "Excelência técnica em engenharia aplicada, segurança e soluções para processos críticos.",
  es: "Excelencia técnica en ingeniería aplicada, seguridad y soluciones para procesos críticos.",
  en: "Technical excellence in applied engineering, safety, and solutions for critical processes."
});
addKey('home_hero_desc', {
  pt: "Equipamentos, integração técnica e engenharia aplicada para processos críticos na indústria, pesquisa e aplicações médicas.",
  es: "Equipos, integración técnica e ingeniería aplicada para procesos críticos en la industria, la investigación y las aplicaciones médicas.",
  en: "Equipment, technical integration, and applied engineering for critical processes in industry, research, and medical applications."
});
addKey('home_hero_btn1', { pt: "NOSSAS SOLUÇÕES", es: "NUESTRAS SOLUCIONES", en: "OUR SOLUTIONS" });
addKey('home_hero_btn2', { pt: "QUEM SOMOS", es: "QUIÉNES SOMOS", en: "ABOUT US" });
addKey('home_about_img', { pt: "/images/home/imagem-para-home-site.webp", es: "/images/home/imagem-para-home-site.webp", en: "/images/home/imagem-para-home-site.webp" });
addKey('home_about_stat_num', { pt: "100%", es: "100%", en: "100%" });
addKey('home_about_stat_txt', { pt: "Conformidade Técnica", es: "Conformidad Técnica", en: "Technical Compliance" });
addKey('home_about_label', { pt: "Quem Somos", es: "Quiénes Somos", en: "About Us" });
addKey('home_about_heading', {
  pt: "Onde a precisão técnica encontra a confiabilidade operacional.",
  es: "Donde la precisión técnica se encuentra con la confiabilidad operacional.",
  en: "Where technical precision meets operational reliability."
});
addKey('home_about_p1', {
  pt: "Sua operação não pode parar. Por isso, transformamos complexidade técnica em estabilidade operacional.",
  es: "Su operación no puede detenerse. Por eso, transformamos la complejidad técnica en estabilidad operacional.",
  en: "Your operation cannot stop. That is why we turn technical complexity into operational stability."
});
addKey('home_about_p2', {
  pt: "Entregamos engenharia aplicada e sistemas de controle precisos. O resultado? Mais segurança, rastreabilidade e continuidade para o seu processo.",
  es: "Entregamos ingeniería aplicada y sistemas de control precisos. ¿El resultado? Mayor seguridad, trazabilidad y continuidad para su proceso.",
  en: "We deliver applied engineering and precise control systems. The result? Greater safety, traceability, and continuity for your process."
});
addKey('home_feat1_title', { pt: "Engenharia sem margem para erro", es: "Ingeniería sin margen de error", en: "Engineering with no margin for error" });
addKey('home_feat1_desc', {
  pt: "Projetamos skids e painéis customizados para aplicações críticas. Soluções dimensionadas para a mais alta exigência.",
  es: "Diseñamos skids y paneles personalizados para aplicaciones críticas. Soluciones dimensionadas para los requisitos más exigentes.",
  en: "We design custom skids and panels for critical applications. Solutions engineered for the most demanding requirements."
});
addKey('home_feat2_title', { pt: "Rastreabilidade de ponta a ponta", es: "Trazabilidad de extremo a extremo", en: "End-to-End Traceability" });
addKey('home_feat2_desc', {
  pt: "Asseguramos conformidade total. Documentação rigorosa e suporte para processos que exigem controle absoluto.",
  es: "Aseguramos la conformidad total. Documentación rigurosa y soporte para procesos que exigen un control absoluto.",
  en: "We ensure full compliance. Rigorous documentation and support for processes that require absolute control."
});
addKey('home_feat3_title', { pt: "Controle sob medida", es: "Control a medida", en: "Tailored Control" });
addKey('home_feat3_desc', {
  pt: "Colocamos a inteligência nas suas mãos. Instrumentação e IHM com leitura exata e resposta imediata.",
  es: "Ponemos la inteligencia en sus manos. Instrumentación e IHM con lectura precisa y respuesta inmediata.",
  en: "We put intelligence in your hands, with HMI and instrumentation delivering precise readings and immediate response."
});
addKey('home_about_btn', { pt: "Conheça a Prime", es: "Conozca Prime", en: "Discover Prime" });

// Counters
addKey('home_stat_1_lbl', { pt: "Anos de Experiência", es: "Años de experiencia", en: "Years of Experience" });
addKey('home_stat_2_lbl', { pt: "Projetos Entregues", es: "Proyectos entregados", en: "Projects Delivered" });
addKey('home_stat_3_lbl', { pt: "Segurança Operacional", es: "Seguridad operacional", en: "Operational Safety" });
addKey('home_stat_4_lbl', { pt: "Marcas Parceiras", es: "Marcas asociadas", en: "Partner Brands" });

addKey('home_sol_label', { pt: "Soluções Integradas", es: "Soluciones integradas", en: "Integrated Solutions" });
addKey('home_sol_title', { pt: "Nossas Soluções e Produtos", es: "Nuestras soluciones y productos", en: "Our Solutions and Products" });
addKey('home_sol_0_title', { pt: "Instrumentação de Processos", es: "Instrumentación de procesos", en: "Process Instrumentation" });
addKey('home_sol_0_desc', { pt: "Transmissores, sensores, reguladores e sistemas de medição de precisão.", es: "Transmisores, sensores, reguladores y sistemas de medición de precisión.", en: "Transmitters, sensors, regulators, and precision measurement systems." });
addKey('home_sol_1_title', { pt: "Instrumentação Analítica", es: "Instrumentación analítica", en: "Analytical Instrumentation" });
addKey('home_sol_1_desc', { pt: "Analisadores de processo, cromatógrafos e detectores de gases.", es: "Analizadores de proceso, cromatógrafos y detectores de gases.", en: "Process analyzers, chromatographs, and gas detectors." });
addKey('home_sol_2_title', { pt: "Segurança: detecção e combate a incêndio", es: "Seguridad: detección y protección contra incendios", en: "Safety: Gas Detection and Fire Suppression" });
addKey('home_sol_2_desc', { pt: "Cilindros, reguladores, dewars e sistemas de combate a incêndio.", es: "Cilindros, reguladores, dewars y sistemas de combate a incendios.", en: "Cylinders, regulators, dewars, and fire suppression systems." });
addKey('home_sol_3_title', { pt: "Soluções Integradas", es: "Soluciones integradas", en: "Integrated Solutions" });
addKey('home_sol_3_desc', { pt: "Skids, painéis e sistemas customizados para sua planta.", es: "Skids, paneles y sistemas personalizados para su planta.", en: "Skids, panels, and custom systems for your plant." });
addKey('home_sol_4_title', { pt: "Engenharia Aplicada", es: "Ingeniería aplicada", en: "Applied Engineering" });
addKey('home_sol_4_desc', { pt: "Consultoria técnica, especificação e suporte para processos críticos.", es: "Consultoría técnica, especificación y soporte para procesos críticos.", en: "Technical consulting, specification, and support for critical processes." });
addKey('home_sol_5_title', { pt: "Cilindros de Alumínio", es: "Cilindros de aluminio", en: "Aluminum Cylinders" });
addKey('home_sol_5_desc', { pt: "Cilindros leves e resistentes para transporte de gases comprimidos.", es: "Cilindros ligeros y resistentes para el transporte de gases comprimidos.", en: "Lightweight and resistant cylinders for compressed gas transport." });
addKey('home_sol_6_title', { pt: "Cilindros Tipo 4", es: "Cilindros Tipo 4", en: "Type 4 Cylinders" });
addKey('home_sol_6_desc', { pt: "Cilindros compósitos de alta performance para logística e mobilidade.", es: "Cilindros compuestos de alto rendimiento para logística y movilidad.", en: "High-performance composite cylinders for logistics and mobility." });
addKey('home_sol_7_title', { pt: "Conexões para Instrumentação", es: "Conexiones para instrumentación", en: "Instrumentation Fittings" });
addKey('home_sol_7_desc', { pt: "Conexões certificadas para aplicações analíticas e industriais.", es: "Conexiones certificadas para aplicaciones analíticas e industriales.", en: "Certified fittings for analytical and industrial applications." });
addKey('home_sol_8_title', { pt: "Dewars e Recipientes Criogênicos", es: "Dewars y recipientes criogénicos", en: "Dewars and Cryogenic Containers" });
addKey('home_sol_8_desc', { pt: "Recipientes criogênicos para armazenamento de gases liquefeitos.", es: "Recipientes criogénicos para el almacenamiento de gases licuados.", en: "Cryogenic vessels for liquefied gas storage." });
addKey('home_sol_9_title', { pt: "Reguladores de Gases Especiais", es: "Reguladores para gases especiales", en: "Specialty Gas Regulators" });
addKey('home_sol_9_desc', { pt: "Reguladores de alta performance para gases especiais e calibração.", es: "Reguladores de alto rendimiento para gases especiales y calibración.", en: "High-performance regulators for specialty gases and calibration." });

addKey('home_prod_btn', { pt: "Linha de Produtos", es: "Línea de Productos", en: "Product Range" });
addKey('home_app_label', { pt: "Aplicações Industriais", es: "Aplicaciones industriales", en: "Industrial Applications" });
addKey('home_app_title', { pt: "Onde a engenharia da Prime Products faz a diferença.", es: "Donde la ingeniería de Prime Products marca la diferencia.", en: "Where Prime Products engineering makes a difference." });
addKey('home_app_0_lbl', { pt: "Óleo & Gás", es: "Petróleo y gas", en: "Oil & Gas" });
addKey('home_app_0_desc', { pt: "Instrumentação certificada ATEX para refinarias e plantas de processo.", es: "Instrumentación certificada ATEX para refinerías y plantas de proceso.", en: "ATEX certified instrumentation for refineries and process plants." });
addKey('home_app_1_lbl', { pt: "Hospitalar", es: "Hospitalaria", en: "Healthcare" });
addKey('home_app_1_desc', { pt: "Gases medicinais, geração de oxigênio e sistemas de combate a incêndio.", es: "Gases medicinales, generación de oxígeno y sistemas de extinción de incendios.", en: "Medical gases, oxygen generation, and fire suppression systems." });
addKey('home_app_2_lbl', { pt: "Laboratórios Analíticos", es: "Laboratorios analíticos", en: "Analytical Laboratories" });
addKey('home_app_2_desc', { pt: "Gases de alta pureza, reguladores analíticos e criogenia.", es: "Gases de alta pureza, reguladores analíticos y criogenia.", en: "High purity gases, analytical regulators, and cryogenics." });

addKey('home_blog_label', { pt: "Informação Qualificada", es: "Información Especializada", en: "Qualified Technical Information" });
addKey('home_blog_title', { pt: "Conteúdo Técnico", es: "Contenido Técnico", en: "Technical Content" });
addKey('home_faq_label', { pt: "Tire suas dúvidas", es: "Resuelva sus dudas", en: "Get Your Questions Answered" });
addKey('home_faq_title', { pt: "Perguntas Frequentes", es: "Preguntas frecuentes", en: "Frequently Asked Questions" });

// FAQs
addKey('home_faq_0_q', { pt: "A Prime Products atende em todo o Brasil?", es: "¿Prime Products atiende en todo Brasil?", en: "Does Prime Products serve all of Brazil?" });
addKey('home_faq_0_a', {
  pt: "Sim. Possuímos estrutura comercial e de engenharia para atender demandas em todo o território nacional, oferecendo suporte técnico especializado tanto remoto quanto em campo para implantações de grande porte.",
  es: "Sí. Contamos con una estructura comercial y de ingeniería para atender demandas en todo el territorio nacional, ofreciendo soporte técnico especializado tanto remoto como en campo para implantaciones de gran escala.",
  en: "Yes. We have a commercial and engineering structure to meet demands throughout the national territory, offering specialized technical support both remotely and in the field for large-scale implementations."
});
addKey('home_faq_1_q', { pt: "Os equipamentos possuem certificados de calibração?", es: "¿Los equipos cuentan con certificados de calibración?", en: "Do the instruments come with calibration certificates?" });
addKey('home_faq_1_a', {
  pt: "Sim. Fornecemos nossos instrumentos de medição e sistemas analíticos com certificados de calibração rastreáveis RBC (Rede Brasileira de Calibração) e padrões do INMETRO, garantindo conformidade com normas de qualidade.",
  es: "Sí. Suministramos nuestros instrumentos de medición y sistemas analíticos con certificados de calibración trazables a la RBC (Red Brasileña de Calibración) y patrones de INMETRO, garantizando la conformidad con las normas de calidad.",
  en: "Yes. We supply our measuring instruments and analytical systems with calibration certificates traceable to the RBC (Brazilian Calibration Network) and INMETRO standards, ensuring compliance with quality regulations."
});
addKey('home_faq_2_q', { pt: "Quais certificações técnicas as soluções da Prime atendem?", es: "¿Qué certificaciones técnicas cumplen las soluciones de Prime?", en: "What technical certifications do Prime's solutions meet?" });
addKey('home_faq_2_a', {
  pt: "Nossas soluções e skids integrados atendem a normas nacionais e internacionais rigorosas, incluindo NR-13 para vasos de pressão, NR-12 para segurança de máquinas, diretrizes da ANVISA (grau médico/farmacêutico), certificações SIL 2/3 de segurança funcional e certificações ATEX/IECEx para áreas classificadas.",
  es: "Nuestras soluciones y skids integrados cumplen con estrictas normas nacionales e internacionales, incluyendo NR-13 para recipientes a presión, NR-12 para seguridad de maquinaria, directrices de ANVISA (grado médico/farmacéutico), certificaciones de seguridad funcional SIL 2/3 y certificaciones ATEX/IECEx para áreas clasificadas.",
  en: "Our solutions and integrated skids meet strict national and international standards, including NR-13 for pressure vessels, NR-12 for machinery safety, ANVISA guidelines (medical/pharmaceutical grade), SIL 2/3 functional safety certifications, and ATEX/IECEx certifications for hazardous areas."
});
addKey('home_faq_3_q', { pt: "Qual o prazo médio de entrega para equipamentos e sistemas?", es: "¿Cuál es el plazo promedio de entrega de equipos y sistemas?", en: "What is the average delivery time for equipment and systems?" });
addKey('home_faq_3_a', {
  pt: "Mantemos um estoque estratégico de componentes e sobressalentes críticos para atendimento imediato. Para skids, painéis dedicados e soluções customizadas de engenharia aplicada, o prazo é dimensionado de acordo com a complexidade técnica e detalhado na proposta comercial.",
  es: "Mantenemos un stock estratégico de componentes y repuestos críticos para atención inmediata. Para skids, paneles dedicados y soluciones personalizadas de ingeniería aplicada, el plazo se dimensiona según la complejidad técnica y se detalla en la propuesta comercial.",
  en: "We maintain a strategic stock of critical components and spare parts for immediate service. For skids, dedicated panels, and custom applied engineering solutions, the lead time is sized according to the technical complexity and detailed in the commercial proposal."
});
addKey('home_faq_4_q', { pt: "A Prime executa a montagem física dos sistemas além do projeto?", es: "¿Prime realiza el montaje físico de los sistemas además del diseño?", en: "Does Prime perform the physical assembly of the systems in addition to the design?" });
addKey('home_faq_4_a', {
  pt: "Sim. Desenvolvemos soluções completas do tipo turn-key, executando desde a engenharia de projeto (conceitual e detalhada) até a montagem mecânica, montagem de skids de válvulas, conexões de tubulação de alta pressão, teste de estanqueidade, comissionamento em campo (start-up) e treinamento operacional.",
  es: "Sí. Desarrollamos soluciones completas llave en mano (turn-key), ejecutando desde la ingeniería de diseño (conceptual y detallada) hasta el montaje mecánico, montaje de skids de válvulas, conexiones de tuberías de alta presión, pruebas de estanqueidad, comisionamiento en campo (puesta en marcha) y entrenamiento operativo.",
  en: "Yes. We develop complete turn-key solutions, executing from design engineering (conceptual and detailed) to mechanical assembly, assembly of valve skids, high-pressure piping connections, leak testing, field commissioning (start-up), and operational training."
});
addKey('home_faq_5_q', { pt: "Quais disciplinas de engenharia a Prime Products atende em seus projetos?", es: "¿Qué disciplinas de ingeniería atiende Prime Products en sus proyectos?", en: "What engineering disciplines does Prime Products cover in its projects?" });
addKey('home_faq_5_a', {
  pt: "Nossa equipe multidisciplinar atende plenamente as demandas de Instrumentação e Controle de Processos, Engenharia Civil (bases e estruturas de suporte), Engenharia Elétrica (painéis de comando e distribuição de força) e sistemas de HVAC (aquecimento, ventilação e ar condicionado) aplicados a salas de analisadores e abrigos industriais.",
  es: "Nuestro equipo multidisciplinario atiende plenamente las demandas de instrumentación y control de procesos, ingeniería civil (bases y estructuras de soporte), ingeniería eléctrica (paneles de control y distribución de fuerza) y sistemas de HVAC (calefacción, ventilación y aire acondicionado) aplicados a salas de analizadores y casetas industriales.",
  en: "Our multidisciplinary team fully meets the demands of process control and instrumentation, civil engineering (foundations and support structures), electrical engineering (control panels and power distribution), and HVAC systems (heating, ventilation, and air conditioning) applied to analyzer rooms and industrial shelters."
});

addKey('home_cta_title', { pt: "Engenharia de precisão para operações que não podem parar.", es: "Ingeniería de precisión para operaciones que no pueden detenerse.", en: "Precision engineering for operations that cannot stop." });
addKey('home_cta_desc', {
  pt: "Sente-se à mesa com nossos especialistas. Desenvolvemos skids e painéis customizados para os processos mais críticos da indústria.",
  es: "Converse con nuestros especialistas. Desarrollamos skids y paneles personalizados para los procesos más críticos de la industria.",
  en: "Talk with our specialists. We develop custom skids and panels for the industry's most critical processes."
});
addKey('home_cta_btn1', { pt: "Discutir meu projeto", es: "Hablar sobre mi proyecto", en: "Discuss My Project" });
addKey('home_cta_btn2', { pt: "Ver Soluções Integradas", es: "Ver soluciones integradas", en: "View Integrated Solutions" });

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
addKey('about_hero_title', {
  pt: "Engenharia aplicada e soluções integradas para gases, instrumentação e processos críticos",
  es: "Ingeniería aplicada y soluciones integradas para gases, instrumentación y procesos críticos",
  en: "Applied engineering and integrated solutions for gases, instrumentation, and critical processes"
});
addKey('about_main_img', { pt: "/images/quem-somos/quem-somos-campo.webp", es: "/images/quem-somos/quem-somos-campo.webp", en: "/images/quem-somos/quem-somos-campo.webp" });
addKey('about_stat_num', { pt: "+35", es: "+35", en: "+35" });
addKey('about_stat_txt', {
  pt: "Anos transformando rigor técnico em segurança, confiabilidade e suporte para processos críticos.",
  es: "Años transformando el rigor técnico en seguridad, confiabilidad y soporte para procesos críticos.",
  en: "Years transforming technical rigor into safety, reliability, and support for critical processes."
});
addKey('about_intro_label', { pt: "Visão Geral", es: "Visión General", en: "Overview" });
addKey('about_intro_title', { pt: "Especialistas em processos críticos", es: "Especialistas en procesos críticos", en: "Critical Process Specialists" });
addKey('about_sec_p1', {
  pt: "A Prime Products atua no desenvolvimento e na integração de soluções técnicas para gases especiais, gases industriais, gases medicinais, instrumentação e sistemas aplicados a processos críticos.",
  es: "Prime Products actúa en el desarrollo y la integración de soluciones técnicas para gases especiales, gases industriales, gases medicinales, instrumentación y sistemas aplicados a procesos críticos.",
  en: "Prime Products operates in the development and integration of technical solutions for specialty gases, industrial gases, medical gases, instrumentation, and systems applied to critical processes."
});
addKey('about_sec_p2', {
  pt: "Nossa atuação combina fornecimento especializado, engenharia aplicada, instalação em campo, comissionamento, testes e suporte técnico, com foco em segurança, conformidade e confiabilidade operacional.",
  es: "Nuestra actuación combina suministro especializado, ingeniería aplicada, instalación en campo, comisionamiento, pruebas y soporte técnico, con enfoque en seguridad, conformidad y confiabilidad operacional.",
  en: "Our operations combine specialized supply, applied engineering, field installation, commissioning, testing, and technical support, with a focus on safety, compliance, and operational reliability."
});
addKey('about_sec_p3', {
  pt: "Atendemos empresas e instituições que exigem precisão técnica, rastreabilidade, documentação consistente e desempenho estável em aplicações industriais, laboratoriais, hospitalares e científicas.",
  es: "Atendemos empresas e instituciones que exigen precisión técnica, trazabilidad, documentación consistente y desempeño estable en aplicaciones industriales, laboratoriales, hospitalarias y científicas.",
  en: "We serve companies and institutions that require technical precision, traceability, consistent documentation, and stable performance in industrial, laboratory, healthcare, and scientific applications."
});
addKey('about_vp_title', {
  pt: "Engenharia ponta a ponta, com responsabilidade técnica real",
  es: "Ingeniería de extremo a extremo, con responsabilidad técnica real",
  en: "End-to-end engineering with real technical responsibility"
});
addKey('about_vp_p1', {
  pt: "Em operações críticas, a escolha inadequada de componentes, a instalação incorreta ou a falta de integração entre fornecimento e campo podem comprometer segurança, desempenho e continuidade operacional.",
  es: "En operaciones críticas, la elección inadecuada de componentes, la instalación incorrecta o la falta de integración entre el suministro y el campo pueden comprometer la seguridad, el rendimiento y la continuidad operacional.",
  en: "In critical operations, inadequate selection of components, incorrect installation, or lack of integration between supply and field can compromise safety, performance, and operational continuity."
});
addKey('about_vp_p2', {
  pt: "A Prime Products reduz esse risco ao atuar de forma integrada, conectando especificação técnica, fornecimento, instalação, comissionamento e suporte, para entregar soluções mais seguras, confiáveis e coerentes com a realidade de cada processo.",
  es: "Prime Products reduce este riesgo al actuar de forma integrada, conectando especificación técnica, suministro, instalación, comisionamiento y soporte, para entregar soluciones más seguras, confiables y coherentes con la realidad de cada proceso.",
  en: "Prime Products reduces this risk by acting in an integrated manner, connecting technical specification, supply, installation, commissioning, and support, to deliver solutions that are safer, more reliable, and consistent with the reality of each process."
});
addKey('como_trabalhamos', { pt: "Como Trabalhamos", es: "Cómo Trabajamos", en: "How We Work" });
addKey('about_table_title', { pt: "Soluções técnicas com visão completa do processo", es: "Soluciones técnicas con visión completa del proceso", en: "Technical solutions with a complete view of the process" });
addKey('about_table_sub', {
  pt: "Nossa abordagem considera não apenas o equipamento isolado, mas o contexto real de aplicação, os requisitos normativos, a compatibilidade técnica dos materiais e a confiabilidade da operação ao longo do tempo.",
  es: "Nuestro enfoque considera no solo el equipo aislado, sino el contexto real de aplicación, los requisitos normativos, la compatibilidad técnica de los materiales y la confiabilidad de la operación a lo largo del tiempo.",
  en: "Our approach considers not only the isolated equipment, but the actual context of the application, regulatory requirements, technical compatibility of materials, and operational reliability over time."
});
addKey('tbl_th_1', { pt: "Fase", es: "Fase", en: "Phase" });
addKey('tbl_th_2', { pt: "O que fazemos", es: "Qué hacemos", en: "What we do" });
addKey('tbl_th_3', { pt: "Ganho operacional", es: "Ganancia operacional", en: "Operational gain" });

addKey('fase_1', { pt: "1. Análise técnica", es: "1. Análisis técnico", en: "1. Technical analysis" });
addKey('fase_1_desc', {
  pt: "Avaliação da aplicação, compatibilidade dos gases, requisitos do processo e necessidades da instalação.",
  es: "Evaluación de la aplicación, compatibilidad de los gases, requisitos del proceso y necesidades de la instalación.",
  en: "Evaluation of the application, gas compatibility, process requirements, and installation needs."
});
addKey('fase_1_gain', {
  pt: "Maior precisão na especificação e redução de falhas de concepção.",
  es: "Mayor precisión en la especificación y reducción de fallas de concepción.",
  en: "Greater specification accuracy and reduction of design conceptual failures."
});

addKey('fase_2', { pt: "2. Fornecimento especializado", es: "2. Suministro especializado", en: "2. Specialized supply" });
addKey('fase_2_desc', {
  pt: "Portfólio técnico em gases, instrumentação, reguladores, manifolds, conexões, detecção e sistemas integrados.",
  es: "Portafolio técnico en gases, instrumentación, reguladores, manifolds, conexiones, detección y sistemas integrados.",
  en: "Technical portfolio in gases, instrumentation, regulators, manifolds, fittings, detection, and integrated systems."
});
addKey('fase_2_gain', {
  pt: "Acesso a soluções compatíveis, rastreáveis e alinhadas ao processo.",
  es: "Acceso a soluciones compatibles, trazables y alineadas al proceso.",
  en: "Access to compatible, traceable solutions aligned with the process."
});

addKey('fase_3', { pt: "3. Instalação e integração", es: "3. Instalación e integración", en: "3. Installation and integration" });
addKey('fase_3_desc', {
  pt: "Montagem de redes, painéis, sistemas, interligações e infraestrutura técnica em campo.",
  es: "Montaje de redes, paneles, sistemas, interconexiones e infraestructura técnica en campo.",
  en: "Assembly of networks, panels, systems, interconnections, and field technical infrastructure."
});
addKey('fase_3_gain', {
  pt: "Segurança operacional, melhor organização da instalação e redução de retrabalho.",
  es: "Seguridad operacional, mejor organización de la instalación y reducción de reprocesos.",
  en: "Operational safety, better installation organization, and reduction of rework."
});

addKey('fase_4', { pt: "4. Comissionamento e testes", es: "4. Comisionamiento y pruebas", en: "4. Commissioning and testing" });
addKey('fase_4_desc', {
  pt: "Verificações, testes, ajustes, entrega técnica e suporte.",
  es: "Verificaciones, pruebas, ajustes, entrega técnica y soporte.",
  en: "Verifications, testing, adjustments, technical delivery, and support."
});
addKey('fase_4_gain', {
  pt: "Entrada em operação com mais confiabilidade, conformidade e previsibilidade.",
  es: "Entrada en operación con más confiabilidad, conformidad y previsibilidad.",
  en: "Startup with greater reliability, compliance, and predictability."
});

addKey('about_diff_label', { pt: "Nossos Diferenciais", es: "Nuestros Diferenciales", en: "Our Advantages" });
addKey('about_diff_title', { pt: "Por que a Prime Products?", es: "¿Por qué Prime Products?", en: "Why Prime Products?" });
addKey('about_diff_p1', {
  pt: "Nosso foco está no fornecimento consultivo e na engenharia de alta integridade técnica. Entendemos a responsabilidade envolvida em processos críticos e operamos em total conformidade com normas nacionais e internacionais aplicáveis.",
  es: "Nuestro enfoque está en el suministro consultivo y la ingeniería de alta integridad técnica. Entendemos la responsabilidad involucrada en procesos críticos y operamos en total conformidad con las normas nacionales e internacionales aplicables.",
  en: "Our focus is on consultative supply and high-integrity technical engineering. We understand the responsibility involved in critical operations and operate in full compliance with applicable national and international standards."
});

addKey('dif_0', { pt: "Soluções integradas com visão técnica do processo", es: "Soluciones integradas con visión técnica del proceso", en: "Integrated solutions with a technical view of the process" });
addKey('dif_1', { pt: "Fornecimento especializado com suporte de aplicação", es: "Suministro especializado con soporte de aplicación", en: "Specialized supply with application support" });
addKey('dif_2', { pt: "Instalação, testes e comissionamento em campo", es: "Instalación, pruebas y comisionamiento en campo", en: "Field installation, testing, and commissioning" });
addKey('dif_3', { pt: "Foco em segurança operacional e conformidade técnica", es: "Enfoque en seguridad operacional y conformidad técnica", en: "Focus on operational safety and technical compliance" });
addKey('dif_4', { pt: "Documentação e rastreabilidade como parte da entrega", es: "Documentación y trazabilidad como parte de la entrega", en: "Documentation and traceability as part of the delivery" });
addKey('dif_5', { pt: "Atendimento a ambientes de alta exigência técnica", es: "Atención a entornos de alta exigencia técnica", en: "Service for environments with high technical demands" });

addKey('about_mv_0_title', { pt: 'Nossa Missão', es: 'Nuestra Misión', en: 'Our Mission' });
addKey('about_mv_0_text', {
  pt: 'Desenvolver e implementar soluções técnicas em gases, instrumentação e engenharia aplicada, com foco em segurança, confiabilidade e desempenho para processos críticos na indústria, laboratórios, hospitais e centros de pesquisa.',
  es: 'Desarrollar e implementar soluciones técnicas en gases, instrumentación e ingeniería aplicada, con enfoque en seguridad, confiabilidad y rendimiento para procesos críticos en la industria, laboratorios, hospitales y centros de investigación.',
  en: 'To develop and implement technical solutions in gases, instrumentation, and applied engineering, focusing on safety, reliability, and performance for critical processes in industry, laboratories, hospitals, and research centers.'
});
addKey('about_mv_1_title', { pt: 'Nossa Visão', es: 'Nuestra Visión', en: 'Our Vision' });
addKey('about_mv_1_text', {
  pt: 'Ser referência nacional em soluções integradas para gases e instrumentação, reconhecida pela excelência técnica, pela confiabilidade operacional e pela capacidade de atender aplicações críticas com padrão profissional elevado.',
  es: 'Ser referencia nacional en soluciones integradas para gases e instrumentación, reconocida por su excelencia técnica, confiabilidad operacional y capacidad de atender aplicaciones críticas con un alto estándar profesional.',
  en: 'To be a national reference in integrated solutions for gases and instrumentation, recognized for technical excellence, operational reliability, and the ability to serve critical applications with a high professional standard.'
});

// Values
addKey('val_0_t', { pt: 'Excelência técnica', es: 'Excelencia técnica', en: 'Technical excellence' });
addKey('val_0_d', { pt: 'Engenharia aplicada com foco em desempenho real, coerência técnica e validação de processo.', es: 'Ingeniería aplicada enfocada en rendimiento real, coherencia técnica y validación de procesos.', en: 'Applied engineering focused on real performance, technical coherence, and process validation.' });
addKey('val_1_t', { pt: 'Segurança e conformidade', es: 'Seguridad y conformidad', en: 'Safety and compliance' });
addKey('val_1_d', { pt: 'Atuação orientada por normas, boas práticas e prevenção de risco em todas as etapas.', es: 'Actuación orientada por normas, buenas prácticas y prevención de riesgos en todas las etapas.', en: 'Actions guided by standards, best practices, and risk prevention at all stages.' });
addKey('val_2_t', { pt: 'Rastreabilidade e documentação', es: 'Trazabilidad y documentación', en: 'Traceability and documentation' });
addKey('val_2_d', { pt: 'Clareza técnica, organização das entregas e suporte à operação com documentação consistente.', es: 'Claridad técnica, organización de entregas y soporte a la operación con documentación consistente.', en: 'Technical clarity, organized deliveries, and operational support with consistent documentation.' });
addKey('val_3_t', { pt: 'Atendimento consultivo', es: 'Atención consultiva', en: 'Consultative service' });
addKey('val_3_d', { pt: 'Compromisso com a solução mais adequada, e não apenas com o fornecimento do item.', es: 'Compromiso con la solución más adecuada, y no solo con el suministro del artículo.', en: 'Commitment to the most appropriate solution, and not just the supply of the item.' });
addKey('val_4_t', { pt: 'Integridade e transparência', es: 'Integridad y transparencia', en: 'Integrity and transparency' });
addKey('val_4_d', { pt: 'Relação objetiva, responsável e alinhada ao que é tecnicamente viável e comercialmente sustentável.', es: 'Relación objetiva, responsable y alineada con lo técnicamente viable y comercialmente sostenible.', en: 'Objective, responsible relationship aligned with what is technically feasible and commercially sustainable.' });
addKey('val_5_t', { pt: 'Melhoria contínua', es: 'Mejora continua', en: 'Continuous improvement' });
addKey('val_5_d', { pt: 'Evolução permanente de processos, equipe, portfólio e capacidade de atendimento.', es: 'Evolución permanente de procesos, equipo, portafolio y capacidad de servicio.', en: 'Permanent evolution of processes, team, portfolio, and service capacity.' });

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
addKey('cont_hero_t', { pt: "Fale Conosco", es: "Contáctenos", en: "Contact Us" });
addKey('cont_hero_s', {
  pt: "Canais de suporte de engenharia e atendimento técnico especializado para o seu processo.",
  es: "Canales de soporte de ingeniería y atención técnica especializada para su proceso.",
  en: "Engineering support and specialized technical service channels for your process."
});
addKey('cont_info_t', { pt: "Informações de Contato", es: "Información de Contacto", en: "Contact Information" });
addKey('cont_info_d', {
  pt: "Nossa equipe de engenharia está pronta para analisar a viabilidade e propor a solução técnica adequada para a sua demanda.",
  es: "Nuestro equipo de ingeniería está listo para analizar la viabilidad y proponer la solución técnica adecuada para su demanda.",
  en: "Our engineering team is ready to analyze viability and propose the appropriate technical solution for your demand."
});
addKey('cont_addr_t', { pt: "Matriz", es: "Matriz", en: "Headquarters" });
addKey('cont_addr_1', { pt: "Belo Horizonte – Minas Gerais", es: "Belo Horizonte – Minas Gerais", en: "Belo Horizonte – Minas Gerais" });
addKey('cont_addr_2', { pt: "Atendimento Nacional", es: "Atención Nacional", en: "National Service" });
addKey('cont_ph_t', { pt: "Telefones", es: "Teléfonos", en: "Phones" });
addKey('cont_ph_1', { pt: "(31) 9 8670-8742", es: "(31) 9 8670-8742", en: "(31) 9 8670-8742" });
addKey('cont_em_t', { pt: "E-mail Técnico", es: "Correo Electrónico Técnico", en: "Technical E-mail" });
addKey('cont_em_1', { pt: "info@primeproducts.ind.br", es: "info@primeproducts.ind.br", en: "info@primeproducts.ind.br" });
addKey('cont_hours_t', { pt: "Horário", es: "Horario", en: "Business Hours" });
addKey('cont_hours_1', { pt: "Segunda a Sexta: 8h–18h", es: "Lunes a Viernes: 8h–18h", en: "Monday to Friday: 8:00 AM – 6:00 PM" });
addKey('cont_form_t', { pt: "Envie sua Mensagem", es: "Envíe su Mensaje", en: "Send Us a Message" });

// Form fields labels
addKey('lbl_name', { pt: "Nome *", es: "Nombre *", en: "Name *" });
addKey('placeholder_name', { pt: "Seu nome completo", es: "Su nombre completo", en: "Your full name" });
addKey('lbl_company', { pt: "Empresa", es: "Empresa", en: "Company" });
addKey('placeholder_company', { pt: "Nome da empresa", es: "Nombre de la empresa", en: "Company name" });
addKey('lbl_email', { pt: "E-mail *", es: "Correo electrónico *", en: "E-mail *" });
addKey('placeholder_email', { pt: "seu@email.com", es: "su@correo.com", en: "your@email.com" });
addKey('lbl_phone', { pt: "Telefone", es: "Teléfono", en: "Phone" });
addKey('placeholder_phone', { pt: "(11) 9 0000-0000", es: "(11) 9 0000-0000", en: "(11) 9 0000-0000" });
addKey('lbl_subject', { pt: "Assunto *", es: "Asunto *", en: "Subject *" });
addKey('placeholder_subject', { pt: "Descreva brevemente sua necessidade", es: "Describa brevemente su necesidad", en: "Briefly describe your need" });
addKey('lbl_message', { pt: "Mensagem *", es: "Mensaje *", en: "Message *" });
addKey('placeholder_message', { pt: "Detalhe sua aplicação, projeto ou dúvida técnica...", es: "Detalle su aplicación, proyecto o duda técnica...", en: "Detail your application, project, or technical question..." });
addKey('btn_send', { pt: "ENVIAR MENSAGEM", es: "ENVIAR MENSAJE", en: "SEND MESSAGE" });
addKey('btn_sending', { pt: "ENVIANDO...", es: "ENVIANDO...", en: "SENDING..." });
addKey('msg_success', { pt: "Mensagem Enviada!", es: "¡Mensaje Enviado!", en: "Message Sent!" });
addKey('msg_success_sub', { pt: "Nossa equipe entrará em contato em breve.", es: "Nuestro equipo se pondrá en contacto a la brevedad.", en: "Our team will contact you shortly." });
addKey('btn_send_new', { pt: "Enviar nova mensagem", es: "Enviar nuevo mensaje", en: "Send new message" });
addKey('msg_error', { pt: "Ocorreu um erro ao enviar. Tente novamente.", es: "Ocurrió un error al enviar. Intente nuevamente.", en: "An error occurred while sending. Please try again." });

// ─── PAGES TITLES ────────────────────────────────────────────────────────────
addKey('prod_hero_title', { pt: "Linha de Produtos", es: "Línea de Productos", en: "Product Range" });
addKey('prod_hero_sub', { pt: "Equipamentos engineering-grade para processos críticos industriais e laboratoriais.", es: "Equipos engineering-grade para procesos críticos industriales y laboratoriales.", en: "Engineering-grade equipment for critical industrial and laboratory processes." });
addKey('app_hero_title', { pt: "Segmentos e Aplicações", es: "Segmentos y Aplicaciones", en: "Segments and Applications" });
addKey('app_hero_sub', { pt: "Onde a Prime Products atua com especialidade técnica, segurança e conformidade.", es: "Donde Prime Products actúa con especialidad técnica, seguridad y conformidad.", en: "Where Prime Products operates with technical expertise, safety, and compliance." });
addKey('sol_hero_title', { pt: "Soluções e Serviços", es: "Soluciones y Servicios", en: "Solutions and Services" });
addKey('sol_hero_sub', { pt: "Engenharia de projetos, montagem física de sistemas, testes e suporte contínuo para processos industriais e laboratoriais.", es: "Ingeniería de proyectos, montaje físico de sistemas, pruebas y soporte continuo para procesos industriales y laboratoriales.", en: "Project engineering, physical system assembly, testing, and continuous support for industrial and laboratory processes." });
addKey('tools_hero_title', { pt: "Simuladores e Ferramentas", es: "Simuladores y Herramientas", en: "Simulators and Tools" });
addKey('tools_hero_sub', { pt: "Recursos online para auxiliar seus projetos e cálculos técnicos.", es: "Recursos en línea para auxiliar sus proyectos y cálculos técnicos.", en: "Online resources to assist your technical projects and calculations." });
addKey('articles_hero_title', { pt: "Artigos e Conteúdos Técnicos", es: "Artículos y Contenidos Técnicos", en: "Technical Articles and Content" });
addKey('articles_hero_sub', { pt: "Relatórios, especificações, manuais e guias para embasar suas decisões de engenharia.", es: "Informes, especificaciones, manuales y guías para respaldar sus decisiones de ingeniería.", en: "Reports, specifications, manuals, and guides to support your engineering decisions." });

// ─── DETAIL PAGES COMMON ──────────────────────────────────────────────────────
addKey('back_to_products', { pt: "Voltar para Produtos", es: "Volver a Productos", en: "Back to Products" });
addKey('back_to_applications', { pt: "Voltar para Aplicações", es: "Volver a Aplicaciones", en: "Back to Applications" });
addKey('back_to_articles', { pt: "Voltar para Conteúdo", es: "Volver a Contenido", en: "Back to Content" });
addKey('btn_quote', { pt: "Solicitar Orçamento / Suporte", es: "Solicitar Cotización / Soporte", en: "Request Quote / Support" });
addKey('solicitar_informacoes', { pt: "Solicitar Informações", es: "Solicitar Información", en: "Request Information" });
addKey('equipe_pronta', { pt: "Nossa equipe técnica está pronta para atender sua demanda.", es: "Nuestro equipo técnico está listo para atender su demanda.", en: "Our technical team is ready to serve your demand." });
addKey('artigos_relacionados', { pt: "Artigos Relacionados", es: "Artículos Relacionados", en: "Related Articles" });
addKey('galeria_tecnica', { pt: "Galeria Técnica", es: "Galería Técnica", en: "Technical Gallery" });
addKey('conteudo_breve', { pt: "Conteúdo completo em breve.", es: "Contenido completo muy pronto.", en: "Full content coming soon." });
addKey('artigo_nao_encontrado', { pt: "Artigo não encontrado", es: "Artículo no encontrado", en: "Article not found" });
addKey('voltar_conteudo', { pt: "Voltar para Conteúdo", es: "Volver a Contenido", en: "Back to Content" });
addKey('category_regulação', { pt: "Regulação", es: "Regulación", en: "Regulation" });
addKey('category_segurança', { pt: "Segurança", es: "Seguridad", en: "Safety" });
addKey('category_engenharia', { pt: "Engenharia", es: "Ingeniería", en: "Engineering" });
addKey('category_analítica', { pt: "Analítica", es: "Analítica", en: "Analytics" });
addKey('category_qualidade', { pt: "Qualidade", es: "Calidad", en: "Quality" });
addKey('category_normas', { pt: "Normas", es: "Normas", en: "Standards" });
addKey('category_inovação', { pt: "Inovação", es: "Innovación", en: "Innovation" });
addKey('category_manutenção', { pt: "Manutenção", es: "Mantenimiento", en: "Maintenance" });
addKey('category_engenharia de materiais', { pt: "Engenharia de Materiais", es: "Ingeniería de Materiales", en: "Materials Engineering" });
addKey('product_desc_title', { pt: "Descrição", es: "Descripción", en: "Description" });
addKey('other_products', { pt: "Outros Produtos", es: "Otros Productos", en: "Other Products" });
addKey('models_specs_title', { pt: "Modelos e Especificações Técnicas", es: "Modelos y Especificaciones Técnicas", en: "Models and Technical Specifications" });
addKey('datasheet_doc_title', { pt: "Datasheet e Documentação", es: "Ficha Técnica y Documentación", en: "Datasheet and Documentation" });
addKey('datasheet_doc_desc', {
  pt: "Solicite o datasheet técnico completo, ficha de especificações ou documentação de certificação deste produto diretamente com nossa equipe.",
  es: "Solicite la ficha técnica completa, la hoja de especificaciones o la documentación de certificación de este producto directamente a nuestro equipo.",
  en: "Request the complete technical datasheet, specification sheet, or certification documentation for this product directly from our team."
});
addKey('btn_request_datasheet', { pt: "Solicitar Datasheet", es: "Solicitar Ficha Técnica", en: "Request Datasheet" });
addKey('btn_request_certificates', { pt: "Solicitar Certificados", es: "Solicitar Certificados", en: "Request Certificates" });
addKey('quote_sent_success', { pt: "Solicitação enviada!", es: "¡Solicitud enviada!", en: "Request submitted!" });
addKey('btn_send_new_request', { pt: "Enviar nova solicitação", es: "Enviar nueva solicitud", en: "Send new request" });
addKey('product_not_found', { pt: "Produto não encontrado", es: "Producto no encontrado", en: "Product not found" });
addKey('about_app_title', { pt: "Sobre esta Aplicação", es: "Sobre esta Aplicación", en: "About this Application" });
addKey('challenges_title', { pt: "Principais Desafios", es: "Principales Desafíos", en: "Key Challenges" });
addKey('solutions_title', { pt: "Soluções Prime Products", es: "Soluciones Prime Products", en: "Prime Products Solutions" });
addKey('related_products_title', { pt: "Produtos Relacionados", es: "Productos Relacionados", en: "Related Products" });
addKey('app_gallery_title', { pt: "Galeria de Aplicações Técnicas", es: "Galería de Aplicaciones Técnicas", en: "Technical Applications Gallery" });
addKey('app_not_found', { pt: "Aplicação não encontrada", es: "Aplicación no encontrada", en: "Application not found" });
addKey('related_equipment_title', { pt: "Equipamentos Relacionados", es: "Equipos Relacionados", en: "Related Equipment" });
addKey('related_equipment_desc', { pt: "Componentes críticos utilizados na montagem das redes de gases.", es: "Componentes críticos utilizados en el montaje de redes de gases.", en: "Critical components used in gas network assembly." });
addKey('gases_project_title', { pt: "Precisa de um projeto de distribuição de gases?", es: "¿Necesita un proyecto de distribución de gases?", en: "Need a gas distribution project?" });
addKey('gases_project_desc', { pt: "Entre em contato com nossa equipe técnica para um dimensionamento sob medida.", es: "Póngase en contacto con nuestro equipo técnico para un dimensionamiento a medida.", en: "Contact our technical team for custom sizing." });
addKey('premium_solution', { pt: "Solução Premium", es: "Solución Premium", en: "Premium Solution" });
addKey('btn_request_technical_evaluation', { pt: "Solicitar Avaliação Técnica", es: "Solicitar Evaluación Técnica", en: "Request Technical Evaluation" });
addKey('digitalize_plant_title', { pt: "Pronto para digitalizar sua instalação?", es: "¿Listo para digitalizar su instalación?", en: "Ready to digitalize your facility?" });
addKey('digitalize_plant_desc', {
  pt: "Recomendamos iniciar com um Projeto-Piloto de 300 a 1.000 m², permitindo validar o fluxo completo (desde a captura em campo até o uso do modelo 3D pela sua equipe) antes de escalar para a planta inteira.",
  es: "Recomendamos comenzar con un Proyecto Piloto de 300 a 1.000 m², lo que permite validar el fluxo completo (desde la captura en el campo hasta el uso del modelo 3D por parte de su equipo) antes de escalar a toda la planta.",
  en: "We recommend starting with a 300 to 1,000 m² Pilot Project, allowing you to validate the complete workflow (from field capture to the use of the 3D model by your team) before scaling to the entire facility."
});
addKey('technical_guide', { pt: "Guia Técnico", es: "Guía Técnica", en: "Technical Guide" });
addKey('btn_request_diagnosis', { pt: "Solicitar Diagnóstico", es: "Solicitar Diagnóstico", en: "Request Diagnosis" });
addKey('express_tool', { pt: "Ferramenta Expressa", es: "Herramienta Express", en: "Express Tool" });
addKey('pressure_drop_estimation', { pt: "Estimativa de Queda de Pressão", es: "Estimación de Caída de Presión", en: "Pressure Drop Estimation" });
addKey('dimension_system_title', { pt: "Precisa dimensionar seu sistema?", es: "¿Necesita dimensionar su sistema?", en: "Need to size your system?" });
addKey('dimension_system_desc', {
  pt: "A engenharia da Prime Products realiza o diagnóstico de vazão, auditoria da qualidade ISO 8573 e projeto completo de redes para otimizar sua planta e garantir a eficiência energética.",
  es: "La ingeniería de Prime Products realiza diagnósticos de flujo, auditorías de calidad ISO 8573 y diseños completos de redes para optimizar su planta y garantizar la eficiencia energética.",
  en: "Prime Products engineering performs flow diagnostics, ISO 8573 quality audits, and complete network design to optimize your plant and ensure energy efficiency."
});
addKey('product_specs_title', { pt: "Especificações Técnicas", es: "Especificaciones Técnicas", en: "Technical Specifications" });
addKey('product_features_title', { pt: "Características Principales", es: "Características Principales", en: "Key Features" });
addKey('product_apps_title', { pt: "Aplicações Recomendadas", es: "Aplicaciones Recomendadas", en: "Recommended Applications" });
addKey('quote_form_title', { pt: "Solicitar Cotação ou Suporte Técnico", es: "Solicitar Cotización o Soporte Técnico", en: "Request Quote or Technical Support" });
addKey('lbl_qty', { pt: "Quantidade Estimada", es: "Cantidad Estimada", en: "Estimated Quantity" });
addKey('placeholder_qty', { pt: "Ex: 2 unidades", es: "Ej: 2 unidades", en: "E.g. 2 units" });
addKey('lbl_details', { pt: "Detalhes da Aplicação / Especificação", es: "Detalles de la Aplicación / Especificación", en: "Application Details / Specification" });
addKey('placeholder_details', { pt: "Descreva a pressão, vazão, tipo de gás ou requisitos do seu processo...", es: "Describa la presión, caudal, tipo de gas o requisitos de su proceso...", en: "Describe the pressure, flow rate, gas type, or process requirements..." });
addKey('btn_quote_send', { pt: "Enviar Solicitação", es: "Enviar Solicitud", en: "Submit Request" });
addKey('form_mode_mock_notice', {
  pt: "[MOCK] Formulário interceptado com sucesso localmente. Nenhum e-mail foi disparado para a API de produção.",
  es: "[MOCK] Formulario interceptado con éxito localmente. No se realizó ninguna llamada a la API de producción.",
  en: "[MOCK] Form successfully intercepted locally. No call was made to the production API."
});

// Counters keys for layout
addKey('counter_experiencia', { pt: "Anos de Experiência", es: "Años de experiencia", en: "Years of Experience" });
addKey('counter_projetos', { pt: "Projetos Entregues", es: "Proyectos entregados", en: "Projects Delivered" });
addKey('counter_seguranca', { pt: "Segurança Operacional", es: "Seguridad operacional", en: "Operational Safety" });
addKey('counter_parceiras', { pt: "Marcas Parceiras", es: "Marcas asociadas", en: "Partner Brands" });
addKey('counter_conformidade', { pt: "Conformidade Técnica", es: "Conformidad técnica", en: "Technical Compliance" });

// ─── SOLUTIONS COMMON ─────────────────────────────────────────────────────────
addKey('aplicacoes_equipamentos', { pt: "Aplicações e Equipamentos", es: "Aplicaciones y Equipos", en: "Applications and Equipment" });
addKey('voltar_solucoes', { pt: "Voltar para Soluções", es: "Volver a Soluciones", en: "Back to Solutions" });
addKey('ver_produto', { pt: "Ver produto", es: "Ver producto", en: "View product" });
addKey('solucao_personalizada', { pt: "Precisa de uma solução personalizada?", es: "¿Necesita una solución personalizada?", en: "Need a custom solution?" });
addKey('contato_equipe', {
  pt: "Entre em contato com nossa equipe técnica para um projeto sob medida.",
  es: "Póngase en contacto con nuestro equipo técnico para un proyecto a medida.",
  en: "Contact our technical team for a custom project."
});
addKey('solicitar_cotacao', { pt: "Solicitar Cotação", es: "Solicitar Cotización", en: "Request Quote" });
addKey('como_trabalhamos_label', { pt: "Como Trabalhamos", es: "Cómo Trabajamos", en: "How We Work" });

// ─── PRODUCT_DATA TRANSLATIONS ───────────────────────────────────────────────
const productsIds = [
  'cilindros-aluminio', 'cilindros-tipo-4', 'conexoes-instrumentacao', 'detectores-vazamento',
  'dewars-criogenicos', 'geracao-oxigenio-anestesia', 'geracao-oxigenio', 'corte-solda',
  'reguladores-especiais', 'reguladores-hidraulicos', 'reguladores-calibracao',
  'combate-incendio', 'transmissores-pressao', 'valvulas-industriais'
];

const productsTranslations = {
  'cilindros-aluminio': {
    name: { pt: 'Cilindros de Alumínio', es: 'Cilindros de Aluminio', en: 'Aluminum Cylinders' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Cilindros leves e resistentes para transporte seguro de gases comprimidos. Fabricados em ligas de alumínio de alta resistência (ex: 6061-T6), ideais para gases medicinais, industriais e alimentícios, com acabamento interno resistente à corrosão.',
      es: 'Cilindros livianos y resistentes para el transporte seguro de gases comprimidos. Fabricados en aleaciones de aluminio de alta resistencia (ej: 6061-T6), ideales para gases medicinales, industriales y alimentarios, con acabado interno resistente a la corrosión.',
      en: 'Lightweight and resistant cylinders for the safe transport of compressed gases. Manufactured in high-strength aluminum alloys (e.g., 6061-T6), ideal for medical, industrial, and food gases, with a corrosion-resistant internal finish.'
    },
    features: [
      { pt: 'Conformidade com normas DOT-3AL e ISO 7866', es: 'Conformidad con normas DOT-3AL e ISO 7866', en: 'Compliance with DOT-3AL and ISO 7866 standards' },
      { pt: 'Até 40% de redução de peso vs. cilindros de aço', es: 'Hasta un 40% de reducción de peso vs. cilindros de acero', en: 'Up to 40% weight reduction vs. steel cylinders' },
      { pt: 'Alta resistência à corrosão', es: 'Alta resistencia a la corrosión', en: 'High corrosion resistance' },
      { pt: 'Integridade e pureza para misturas especiais', es: 'Integridad y pureza para mezclas especiales', en: 'Integrity and purity for specialty mixtures' },
      { pt: 'Diversas opções de válvulas e roscas integradas', es: 'Diversas opciones de válvulas y roscas integradas', en: 'Various integrated valve and thread options' }
    ],
    apps: [
      { pt: 'Gases medicinais e homecare', es: 'Gases medicinales y atención domiciliaria (homecare)', en: 'Medical gases and homecare' },
      { pt: 'Gases de laboratório e P&D', es: 'Gases de laboratorio e I+D', en: 'Laboratory and R&D gases' },
      { pt: 'Bebidas e CO2 alimentício', es: 'Bebidas y CO2 de grado alimentario', en: 'Beverages and food-grade CO2' },
      { pt: 'Gases industriais e misturas analíticas', es: 'Gases industriales y mezclas analíticas', en: 'Industrial gases and analytical mixtures' }
    ]
  },
  'cilindros-tipo-4': {
    name: { pt: 'Cilindros Tipo 4', es: 'Cilindros Tipo 4', en: 'Type 4 Cylinders' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Os cilindros Tipo 4 utilizam liner polimérico não metálico envolvido por reforço estrutural em fibra composta, proporcionando elevada relação entre capacidade de armazenamento e peso. São indicados para aplicações que exigem redução de massa, resistência mecânica e armazenamento de gases comprimidos em alta pressão.',
      es: 'Los cilindros Tipo 4 utilizan un liner polimérico no metálico envuelto por un refuerzo estructural de fibra compuesta, proporcionando una alta relación entre capacidad de almacenamiento y peso. Están indicados para aplicaciones que exigen reducción de masa, resistencia mecánica y almacenamiento de gases comprimidos a alta presión.',
      en: 'Type 4 cylinders utilize a non-metallic polymeric liner wrapped in composite fiber structural reinforcement, providing a high ratio between storage capacity and weight. They are suitable for applications requiring weight reduction, mechanical strength, and storage of compressed gases at high pressure.'
    },
    features: [
      { pt: 'Liner polimérico não metálico', es: 'Liner polimérico no metálico', en: 'Non-metallic polymeric liner' },
      { pt: 'Reforço estrutural em fibra composta', es: 'Refuerzo estructural en fibra compuesta', en: 'Composite fiber structural reinforcement' },
      { pt: 'Construção totalmente composta', es: 'Construcción totalmente compuesta', en: 'Fully composite construction' },
      { pt: 'Elevada relação resistência/peso', es: 'Elevada relación resistencia/peso', en: 'High strength-to-weight ratio' },
      { pt: 'Proteção contra impacto, abrasão e esforços de instalação', es: 'Protección contra impacto, abrasión y esfuerzos de instalación', en: 'Protection against impact, abrasion, and installation stress' },
      { pt: 'Configuração de válvula conforme a aplicação', es: 'Configuración de válvula según la aplicación', en: 'Valve configuration according to application' },
      { pt: 'Possibilidade de integração com dispositivo de alívio de pressão', es: 'Posibilidad de integración con dispositivo de alivio de presión', en: 'Integration capability with pressure relief devices' },
      { pt: 'Montagem mediante suportes tecnicamente dimensionados', es: 'Montaje mediante soportes técnicamente dimensionados', en: 'Mounting using technically dimensioned supports' }
    ],
    apps: [
      { pt: 'Mobilidade a gás', es: 'Movilidad a gas', en: 'Gas mobility' },
      { pt: 'Veículos comerciais', es: 'Vehículos comerciales', en: 'Commercial vehicles' },
      { pt: 'Ônibus e caminhões', es: 'Autobuses y camiones', en: 'Buses and trucks' },
      { pt: 'Módulos de armazenamento', es: 'Módulos de almacenamiento', en: 'Storage modules' },
      { pt: 'Sistemas de energia', es: 'Sistemas de energía', en: 'Energy systems' },
      { pt: 'Transporte de gases comprimidos', es: 'Transporte de gases comprimidos', en: 'Compressed gas transport' },
      { pt: 'Aplicações industriais customizadas', es: 'Aplicaciones industriales personalizadas', en: 'Custom industrial applications' }
    ]
  },
  'conexoes-instrumentacao': {
    name: { pt: 'Conexões para Instrumentação', es: 'Conexiones para Instrumentación', en: 'Instrumentation Fittings' },
    cat: { pt: 'Instrumentação', es: 'Instrumentación', en: 'Instrumentation' },
    desc: {
      pt: 'Conexões certificadas para aplicações de instrumentação analítica e industrial. Compatibilidade com transmissores, analisadores e sistemas de processo.',
      es: 'Conexiones certificadas para aplicaciones de instrumentación analítica e industrial. Compatibilidad con transmisores, analizadores y sistemas de proceso.',
      en: 'Certified fittings for analytical and industrial instrumentation applications. Compatibility with transmitters, analyzers, and process systems.'
    },
    features: [
      { pt: 'Conexões TK-Fujikin e equivalentes', es: 'Conexiones TK-Fujikin y equivalentes', en: 'TK-Fujikin fittings and equivalents' },
      { pt: 'Materiais: SS 316, Hastelloy, PTFE', es: 'Materiales: SS 316, Hastelloy, PTFE', en: 'Materials: SS 316, Hastelloy, PTFE' },
      { pt: 'Certificação para fluidos agressivos', es: 'Certificación para fluidos agresivos', en: 'Certification for aggressive fluids' },
      { pt: 'Conexões compressão, NPT e flange', es: 'Conexiones de compresión, NPT y brida', en: 'Compression, NPT, and flange connections' },
      { pt: 'Estanqueidade garantida a altas pressões', es: 'Estanqueidad garantizada a altas presiones', en: 'Guaranteed tightness at high pressures' }
    ],
    apps: [
      { pt: 'Análise de processo', es: 'Análisis de procesos', en: 'Process analysis' },
      { pt: 'Instrumentação industrial', es: 'Instrumentación industrial', en: 'Industrial instrumentation' },
      { pt: 'Laboratórios', es: 'Laboratorios', en: 'Laboratories' },
      { pt: 'Petroquímica', es: 'Petroquímica', en: 'Petrochemical' }
    ]
  },
  'detectores-vazamento': {
    name: { pt: 'Detectores de Vazamento', es: 'Detectores de Fugas', en: 'Leak Detectors' },
    cat: { pt: 'Segurança', es: 'Seguridad', en: 'Safety' },
    desc: {
      pt: 'Sistemas de detecção de gases tóxicos e inflamáveis para proteção de ambientes industriais. Tecnologias catalítica, eletroquímica e de infravermelho.',
      es: 'Sistemas de detección de gases tóxicos e inflamables para protección de entornos industriales. Tecnologías catalítica, electroquímica y de infrarrojos.',
      en: 'Toxic and flammable gas detection systems for industrial environmental protection. Catalytic, electrochemical, and infrared technologies.'
    },
    features: [
      { pt: 'Detecção de H₂S, CO, NH₃, LEL', es: 'Detección de H₂S, CO, NH₃, LEL', en: 'Detection of H₂S, CO, NH₃, LEL' },
      { pt: 'Saída 4-20 mA e HART', es: 'Salida 4-20 mA y HART', en: '4-20 mA and HART output' },
      { pt: 'Certificação ATEX e IECEx', es: 'Certificación ATEX e IECEx', en: 'ATEX and IECEx certification' },
      { pt: 'Display local e alarmes sonoros/visuais', es: 'Pantalla local y alarmas sonoras/visuales', en: 'Local display and audible/visual alarms' },
      { pt: 'Calibração simplificada em campo', es: 'Calibración simplificada en campo', en: 'Simplified field calibration' }
    ],
    apps: [
      { pt: 'Refinarias e petroquímicas', es: 'Refinerías y petroquímicas', en: 'Refineries and petrochemicals' },
      { pt: 'Plantas de gás e GNL', es: 'Plantas de gas y GNL', en: 'Gas and LNG plants' },
      { pt: 'Laboratórios químicos', es: 'Laboratorios químicos', en: 'Chemical laboratories' },
      { pt: 'Ambientes confinados', es: 'Espacios confinados', en: 'Confined spaces' }
    ]
  },
  'dewars-criogenicos': {
    name: { pt: 'Dewars e Recipientes Criogênicos', es: 'Dewars y Recipientes Criogénicos', en: 'Dewars and Cryogenic Containers' },
    cat: { pt: 'Criogenia', es: 'Criogenia', en: 'Cryogenics' },
    desc: {
      pt: 'Recipientes criogênicos para armazenamento e transporte de nitrogênio líquido, oxigênio líquido, argônio líquido e outros gases liquefeitos. Portáteis, de alta capacidade térmica e disponíveis em diversas capacidades para uso em laboratório e aplicações industriais.',
      es: 'Recipientes criogénicos para el almacenamiento y transporte de nitrógeno líquido, oxígeno líquido, argón líquido y otros gases licuados. Portátiles, de alta capacidad térmica y disponibles en diversas capacidades para uso en laboratorio y aplicaciones industriales.',
      en: 'Cryogenic vessels for storage and transport of liquid nitrogen, liquid oxygen, liquid argon, and other liquefied gases. Portable, high thermal capacity, and available in various capacities for laboratory and industrial applications.'
    },
    features: [
      { pt: 'Isolamento a vácuo multicamada de alta eficiência', es: 'Aislamiento al vacío multicapa de alta eficiencia', en: 'High-efficiency multi-layer vacuum insulation' },
      { pt: 'Capacidade de 10 a 450 Litros', es: 'Capacidad de 10 a 450 litros', en: 'Capacity from 10 to 450 Liters' },
      { pt: 'Construção reforçada em inox', es: 'Construcción reforzada en acero inoxidable', en: 'Reinforced stainless steel construction' },
      { pt: 'Conformidade com normas DOT-4L e TPED', es: 'Conformidad con normas DOT-4L y TPED', en: 'Compliance with DOT-4L and TPED standards' },
      { pt: 'Válvulas codificadas por cor', es: 'Válvulas codificadas por color', en: 'Color-coded valves' },
      { pt: 'Isolamento de vácuo com 5 anos de garantia (Série XL)', es: 'Aislamiento de vacío con 5 años de garantía (Serie XL)', en: 'Vacuum insulation with 5 years warranty (XL Series)' }
    ],
    apps: [
      { pt: 'Criopreservação biológica', es: 'Criopreservación biológica', en: 'Biological cryopreservation' },
      { pt: 'Laboratórios de pesquisa', es: 'Laboratorios de investigación', en: 'Research laboratories' },
      { pt: 'Indústria alimentícia', es: 'Industria alimentaria', en: 'Food industry' },
      { pt: 'Metalurgia criogênica', es: 'Metalurgia criogénica', en: 'Cryogenic metallurgy' },
      { pt: 'Estações de envase e laser', es: 'Estaciones de envasado y láser', en: 'Filling stations and laser applications' }
    ]
  },
  'geracao-oxigenio-anestesia': {
    name: { pt: 'Geração de Oxigênio e Anestesia', es: 'Generación de Oxígeno y Anestesia', en: 'Oxygen Generation and Anesthesia' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Sistemas completos on-site com tecnologia PSA/TCA para autonomia na geração de gases. Integração turn-key com redes hospitalares, painéis de alarme e manifolds de backup automático, garantindo conformidade com a RDC 50.',
      es: 'Sistemas completos in-situ con tecnología PSA/TCA para autonomía en la generación de gases. Integración llave en mano (turn-key) con redes hospitalarias, paneles de alarma y manifolds de respaldo automático, garantizando la conformidad con la RDC 50.',
      en: 'Complete on-site systems with PSA/TCA technology for gas generation autonomy. Turn-key integration with hospital networks, alarm panels, and automatic backup manifolds, ensuring compliance with RDC 50.'
    },
    features: [
      { pt: 'Geração on-site via tecnologia PSA / VPSA (Pureza de 93-95%).', es: 'Generación in-situ mediante tecnología PSA / VPSA (Pureza de 93-95%).', en: 'On-site generation via PSA / VPSA technology (93-95% purity).' },
      { pt: 'Painéis de alarme modulares com monitoramento remoto de pressão.', es: 'Paneles de alarma modulares con monitoreo remoto de presión.', en: 'Modular alarm panels with remote pressure monitoring.' },
      { pt: 'Manifolds automáticos para backup contínuo sem queda de pressão.', es: 'Manifolds automáticos para respaldo continuo sin caída de presión.', en: 'Automatic manifolds for continuous backup without pressure drop.' },
      { pt: 'Sistemas misturadores para gases anestésicos.', es: 'Sistemas mezcladores para gases anestésicos.', en: 'Mixing systems for anesthetic gases.' }
    ],
    apps: [
      { pt: 'Redes Hospitalares', es: 'Redes hospitalarias', en: 'Hospital networks' },
      { pt: 'Clínicas Veterinárias', es: 'Clínicas veterinarias', en: 'Veterinary clinics' },
      { pt: 'Centros Cirúrgicos', es: 'Quirófanos', en: 'Surgical centers' },
      { pt: 'Indústrias de Ozonização', es: 'Industrias de ozonización', en: 'Ozonation industries' }
    ]
  },
  'geracao-oxigenio': {
    name: { pt: 'Geração de Oxigênio e Anestesia', es: 'Generación de Oxígeno y Anestesia', en: 'Oxygen Generation and Anesthesia' },
    cat: { pt: 'Gases', es: 'Gases', en: 'Gases' },
    desc: {
      pt: 'Sistemas PSA e concentradores de oxigênio para geração on-site. Independência de fornecedores externos de gases com produção contínua e confiável.',
      es: 'Sistemas PSA y concentradores de oxígeno para generación in-situ. Independencia de proveedores externos de gases con producción continua y confiable.',
      en: 'PSA systems and oxygen concentrators for on-site generation. Independence from external gas suppliers with continuous, reliable production.'
    },
    features: [
      { pt: 'Pureza de 93% a 99,5% O₂', es: 'Pureza de 93% a 99,5% O₂', en: '93% to 99.5% O₂ purity' },
      { pt: 'Capacidade de 1 a 500 Nm³/h', es: 'Capacidad de 1 a 500 Nm³/h', en: 'Capacity of 1 to 500 Nm³/h' },
      { pt: 'Tecnologia PSA ou VPSA', es: 'Tecnología PSA o VPSA', en: 'PSA or VPSA technology' },
      { pt: 'Monitoramento e controle automático', es: 'Monitoreo y control automático', en: 'Automatic monitoring and control' },
      { pt: 'Manutenção simplificada', es: 'Mantenimiento simplificado', en: 'Simplified maintenance' }
    ],
    apps: [
      { pt: 'Hospitais e clínicas', es: 'Hospitales y clínicas', en: 'Hospitals and clinics' },
      { pt: 'Ozonização de água', es: 'Ozonización de agua', en: 'Water ozonation' },
      { pt: 'Tratamento de efluentes', es: 'Tratamiento de efluentes', en: 'Wastewater treatment' },
      { pt: 'Soldagem e corte', es: 'Soldadura y corte', en: 'Welding and cutting' }
    ]
  },
  'corte-solda': {
    name: { pt: 'Equipamentos para Corte e Solda', es: 'Equipos para Corte y Soldadura', en: 'Cutting and Welding Equipment' },
    cat: { pt: 'Industrial', es: 'Industrial', en: 'Industrial' },
    desc: {
      pt: 'Maçaricos, reguladores e acessórios para corte oxiacetilênico e soldagem MIG/TIG/Eletrodo. Equipamentos para metalurgia, fabricação e manutenção industrial.',
      es: 'Sopletes, reguladores y accesorios para corte oxiacetilénico y soldadura MIG/TIG/Electrodo. Equipos para metalurgia, fabricación y mantenimiento industrial.',
      en: 'Torches, regulators, and accessories for oxy-fuel cutting and MIG/TIG/Stick welding. Equipment for metallurgy, fabrication, and industrial maintenance.'
    },
    features: [
      { pt: 'Maçaricos para corte e solda', es: 'Sopletes para corte y soldadura', en: 'Torches for cutting and welding' },
      { pt: 'Reguladores para CO₂, Ar, O₂, Acetileno', es: 'Reguladores para CO₂, Ar, O₂, Acetileno', en: 'Regulators for CO₂, Ar, O₂, Acetylene' },
      { pt: 'Mangueiras certificadas', es: 'Mangueras certificadas', en: 'Certified hoses' },
      { pt: 'Bocais e consumíveis', es: 'Boquillas y consumibles', en: 'Nozzles and consumables' },
      { pt: 'Kits completos para oficinas', es: 'Kits completos para talleres', en: 'Complete workshop kits' }
    ],
    apps: [
      { pt: 'Metalurgia e siderurgia', es: 'Metalurgia y siderurgia', en: 'Metallurgy and steelmaking' },
      { pt: 'Construção civil e obras', es: 'Construcción civil y obras', en: 'Civil construction and public works' },
      { pt: 'Manutenção industrial', es: 'Mantenimiento industrial', en: 'Industrial maintenance' },
      { pt: 'Oficinas mecânicas', es: 'Talleres mecánicos', en: 'Mechanical workshops' }
    ]
  },
  'reguladores-especiais': {
    name: { pt: 'Reguladores de Gases Especiais', es: 'Reguladores para Gases Especiales', en: 'Specialty Gas Regulators' },
    cat: { pt: 'Instrumentação', es: 'Instrumentación', en: 'Instrumentation' },
    desc: {
      pt: 'Reguladores de alta performance projetados para controle de gases especiais, aplicações de alta e altíssima pressão, e calibração de instrumentos de medição. Desenvolvidos com foco em máxima estabilidade e vedação absoluta contra vazamentos.',
      es: 'Reguladores de alto rendimiento diseñados para el control de gases especiales, aplicaciones de alta y altísima presión, y calibración de instrumentos de medición. Desarrollados con enfoque en la máxima estabilidad y sellado absoluto contra fugas.',
      en: 'High-performance regulators designed for specialty gas control, high and extremely high-pressure applications, and measurement instrument calibration. Developed with a focus on maximum stability and absolute tightness against leakage.'
    },
    features: [
      { pt: 'Modelos específicos para gases especiais de alta pureza', es: 'Modelos específicos para gases especiales de alta pureza', en: 'Specific models for high purity specialty gases' },
      { pt: 'Estágio simples ou duplo para alta e altíssima pressão (até 300 bar)', es: 'Etapa simple o doble para alta y altísima presión (hasta 300 bar)', en: 'Single or double stage for high and extremely high pressure (up to 300 bar)' },
      { pt: 'Otimizados para processos críticos de calibração analítica', es: 'Optimizados para procesos críticos de calibración analítica', en: 'Optimized for critical analytical calibration processes' },
      { pt: 'Construção em materiais inertes (Aço Inox 316, PTFE)', es: 'Construcción en materiales inertes (Acero Inoxidable 316, PTFE)', en: 'Construction in inert materials (316 Stainless Steel, PTFE)' },
      { pt: 'Estanqueidade certificada com teste de hélio em fábrica', es: 'Estanqueidad certificada con prueba de helio en fábrica', en: 'Certified tightness with factory helium test' }
    ],
    apps: [
      { pt: 'Análise de gases padrão e misturas especiais', es: 'Análisis de gases patrón y mezclas especiales', en: 'Analysis of standard gases and specialty mixtures' },
      { pt: 'Estações de calibração de instrumentação', es: 'Estaciones de calibración de instrumentación', en: 'Instrumentation calibration stations' },
      { pt: 'Controle de processos críticos de alta pressão', es: 'Control de procesos críticos de alta presión', en: 'Critical high-pressure process control' },
      { pt: 'Laboratórios de P&D de alta exigência', es: 'Laboratorios de I+D de alta exigencia', en: 'High-demand R&D laboratories' }
    ]
  },
  'reguladores-hidraulicos': {
    name: { pt: 'Reguladores Hidráulicos', es: 'Reguladores Hidráulicos', en: 'Hydraulic Regulators' },
    cat: { pt: 'Alta Pressão', es: 'Alta Presión', en: 'High Pressure' },
    desc: {
      pt: 'Reguladores de alta pressão para aplicações hidráulicas especiais.',
      es: 'Reguladores de alta presión para aplicaciones hidráulicas especiales.',
      en: 'High pressure regulators for special hydraulic applications.'
    },
    features: [
      { pt: 'Controle preciso de alta pressão', es: 'Control preciso de alta presión', en: 'Precise high-pressure control' },
      { pt: 'Construção robusta', es: 'Construcción robusta', en: 'Robust construction' },
      { pt: 'Vedação confiável', es: 'Sellado confiable', en: 'Reliable sealing' }
    ],
    apps: [
      { pt: 'Sistemas hidráulicos', es: 'Sistemas hidráulicos', en: 'Hydraulic systems' },
      { pt: 'Teste de pressão', es: 'Pruebas de presión', en: 'Pressure testing' }
    ]
  },
  'reguladores-calibracao': {
    name: { pt: 'Reguladores para Calibração de Equipamentos', es: 'Reguladores para Calibración de Equipos', en: 'Equipment Calibration Regulators' },
    cat: { pt: 'Calibração', es: 'Calibración', en: 'Calibration' },
    desc: {
      pt: 'Mini reguladores e reguladores de demanda compactos de alta precisão para calibração e instrumentação.',
      es: 'Minireguladores y reguladores de demanda compactos de alta precisión para calibración e instrumentación.',
      en: 'Mini regulators and compact flow-matching demand regulators for calibration and instrumentation.'
    },
    features: [
      { pt: 'Alta precisão', es: 'Alta precisión', en: 'High precision' },
      { pt: 'Design compacto', es: 'Diseño compacto', en: 'Compact design' },
      { pt: 'Conexões C-10, 5/8 UNF e CGA', es: 'Conexiones C-10, 5/8 UNF y CGA', en: 'C-10, 5/8 UNF, and CGA connections' }
    ],
    apps: [
      { pt: 'Calibração de detectores', es: 'Calibración de detectores', en: 'Detector calibration' },
      { pt: 'Analisadores portáteis', es: 'Analizadores portátiles', en: 'Portable analyzers' },
      { pt: 'Laboratórios de campo', es: 'Laboratorios de campo', en: 'Field laboratories' }
    ]
  },
  'combate-incendio': {
    name: { pt: 'Sistemas de Combate a Incêndio', es: 'Sistemas de Extinción de Incendios', en: 'Fire Suppression Systems' },
    cat: { pt: 'Segurança', es: 'Seguridad', en: 'Safety' },
    desc: {
      pt: 'Sistemas de supressão de incêndio com CO₂, FM-200, Novec 1230 e outros agentes limpos. Proteção de salas de dados, painéis elétricos e ambientes críticos.',
      es: 'Sistemas de supresión de incendios con CO₂, FM-200, Novec 1230 y otros agentes limpios. Protección de salas de servidores (data centers), paneles eléctricos y entornos críticos.',
      en: 'Fire suppression systems with CO₂, FM-200, Novec 1230, and other clean agents. Protection of data rooms, electrical panels, and critical environments.'
    },
    features: [
      { pt: 'Agentes: CO₂, FM-200, Novec 1230', es: 'Agentes: CO₂, FM-200, Novec 1230', en: 'Agents: CO₂, FM-200, Novec 1230' },
      { pt: 'Supressão total por inundação', es: 'Supresión total por inundación', en: 'Total flooding suppression' },
      { pt: 'Detecção integrada', es: 'Detección integrada', en: 'Integrated detection' },
      { pt: 'Projeto conforme NFPA 12/2001', es: 'Diseño según NFPA 12/2001', en: 'Design according to NFPA 12/2001' },
      { pt: 'Manutenção e recarga de cilindros', es: 'Mantenimiento y recarga de cilindros', en: 'Cylinder maintenance and refilling' }
    ],
    apps: [
      { pt: 'Data centers e CPD', es: 'Centros de datos (data centers) y CPD', en: 'Data centers and IT rooms' },
      { pt: 'Painéis e subestações elétricas', es: 'Paneles y subestaciones eléctricas', en: 'Electrical panels and substations' },
      { pt: 'Salas de controle', es: 'Salas de control', en: 'Control rooms' },
      { pt: 'Museus e arquivos', es: 'Museos y archivos', en: 'Museums and archives' }
    ]
  },
  'transmissores-pressao': {
    name: { pt: 'Transmissores: Pressão - Nível - Temperatura', es: 'Transmisores: Presión - Nivel - Temperatura', en: 'Transmitters: Pressure - Level - Temperature' },
    cat: { pt: 'Instrumentação', es: 'Instrumentación', en: 'Instrumentation' },
    desc: {
      pt: 'Transmissores inteligentes de alta performance para medição de pressão diferencial, manométrica, absoluta e nível. Compatíveis com HART, Profibus e Foundation Fieldbus.',
      es: 'Transmisores inteligentes de alto rendimiento para medición de presión diferencial, manométrica, absoluta y nivel. Compatibles con HART, Profibus y Foundation Fieldbus.',
      en: 'High-performance intelligent transmitters for differential, gauge, absolute pressure, and level measurement. Compatible with HART, Profibus, and Foundation Fieldbus.'
    },
    features: [
      { pt: 'Precisão de ±0,04% da URL', es: 'Precisión de ±0,04% de la URL', en: 'Accuracy of ±0,04% of URL' },
      { pt: 'Protocolo HART, Profibus PA, FF', es: 'Protocolo HART, Profibus PA, FF', en: 'HART, Profibus PA, FF protocol' },
      { pt: 'Rangeabilidade de 100:1', es: 'Rangeabilidad de 100:1', en: '100:1 rangeability' },
      { pt: 'Display LCD local configurável', es: 'Pantalla LCD local configurable', en: 'Configurable local LCD display' },
      { pt: 'Certificação ATEX e SIL 2/3', es: 'Certificación ATEX y SIL 2/3', en: 'ATEX and SIL 2/3 certification' }
    ],
    apps: [
      { pt: 'Óleo & gás', es: 'Petróleo y gas', en: 'Oil & gas' },
      { pt: 'Petroquímica e química', es: 'Petroquímica y química', en: 'Petrochemical and chemical' },
      { pt: 'Geração de energia', es: 'Generación de energía', en: 'Power generation' },
      { pt: 'Processos críticos de segurança', es: 'Procesos críticos de seguridad', en: 'Critical safety processes' }
    ]
  },
  'valvulas-industriais': {
    name: { pt: 'Válvulas Industriais - Medicinais - Especiais', es: 'Válvulas Industriales - Medicinales - Especiales', en: 'Industrial - Medical - Specialty Valves' },
    cat: { pt: 'Válvulas para Cilindros', es: 'Válvulas para Cilindros', en: 'Cylinder Valves' },
    desc: {
      pt: 'Válvulas de agulha, esfera e membrana para gases industriais e medicinais. Com tecnologia de vedação de precisão, suportam altas pressões e oferecem controle fino de fluxo.',
      es: 'Válvulas de aguja, esfera y diafragma para gases industriales y medicinales. Con tecnología de sellado de precisión, soportan altas presiones y ofrecen un control fino del flujo.',
      en: 'Needle, ball, and diaphragm valves for industrial and medical gases. With precision sealing technology, they withstand high pressures and offer fine flow control.'
    },
    features: [
      { pt: 'Materiais: aço inox, latão, PTFE', es: 'Materiales: acero inoxidable, latón, PTFE', en: 'Materials: stainless steel, brass, PTFE' },
      { pt: 'Pressões de até 400 bar', es: 'Presiones de hasta 400 bar', en: 'Pressures up to 400 bar' },
      { pt: 'Tamanhos de 1/8" a 2"', es: 'Tamaños de 1/8" a 2"', en: 'Sizes from 1/8" to 2"' },
      { pt: 'Certificação para gases medicinais', es: 'Certificación para gases medicinales', en: 'Certification for medical gases' },
      { pt: 'Conexões rosca, solda e flange', es: 'Conexiones roscadas, soldadas y bridadas', en: 'Threaded, welded, and flanged connections' }
    ],
    apps: [
      { pt: 'Distribuição de gases medicinais', es: 'Distribución de gases medicinales', en: 'Medical gas distribution' },
      { pt: 'Laboratórios e P&D', es: 'Laboratorios e I+D', en: 'Laboratories and R&D' },
      { pt: 'Indústria química', es: 'Industria química', en: 'Chemical industry' },
      { pt: 'Automação de processos', es: 'Automatización de procesos', en: 'Process automation' }
    ]
  }
};

// ─── ARTICLE TRANSLATIONS ───────────────────────────────────────────────────
const articleTranslations = [
  {
    id: "seguranca-producao-hidrogenio-anp",
    title: { pt: "Segurança Operacional na Produção de Hidrogênio de Baixa Emissão", es: "Seguridad Operacional en la Producción de Hidrógeno de Bajas Emisiones", en: "Operational Safety in Low Emission Hydrogen Production" },
    summary: { pt: "Relatório oficial da ANP sobre o arcabouço regulatório, gestão de riscos e a segurança operacional para a produção de hidrogênio no Brasil.", es: "Informe oficial de la ANP sobre el marco regulatorio, gestión de riesgos y seguridad operacional para la producción de hidrógeno en Brasil.", en: "Official ANP report on the regulatory framework, risk management, and operational safety for hydrogen production in Brazil." }
  },
  {
    id: "principios-seguranca-hidrogenio",
    title: { pt: "Princípios Básicos de Segurança do Hidrogênio", es: "Principios Básicos de Seguridad del Hidrógeno", en: "Basic Principles of Hydrogen Safety" },
    summary: { pt: "Síntese técnica de referência sobre as propriedades, perigos dominantes e a filosofia de proteção em camadas para sistemas de hidrogênio.", es: "Síntesis técnica de referencia sobre las propiedades, peligros dominantes y filosofía de protección en capas para sistemas de hidrógeno.", en: "Technical reference synthesis on properties, dominant hazards, and layered protection philosophy for hydrogen systems." }
  },
  {
    id: "manual-projeto-abrigos-cilindros",
    title: { pt: "Manual Prático de Projeto: Definição do Local e Distanciamentos de Abrigos de Cilindros", es: "Manual Práctico de Diseño: Definición del Sitio y Distancias de Casetas de Cilindros", en: "Practical Design Manual: Site Selection and Distances for Cylinder Shelters" },
    summary: { pt: "Guia consolidado com requisitos legais, critérios prescritivos e boas práticas para projetos de centrais externas e abrigos de cilindros de gases comprimidos.", es: "Guía consolidada con requisitos legales, criterios prescriptivos y buenas prácticas para proyectos de centrales externas y casetas de cilindros de gases comprimidos.", en: "Consolidated guide with legal requirements, prescriptive criteria, and best practices for external stations and compressed gas cylinder shelters." }
  },
  {
    id: "conversao-diesel-hidrogenio",
    title: { pt: "Conversão de Motores Diesel para Gás Natural", es: "Conversión de Motores Diesel a Gas Natural", en: "Conversion of Diesel Engines to Natural Gas" },
    summary: { pt: "Soluções dedicadas a gás natural ou diesel-gás em modo dual fuel para grupos geradores, bombas, compressores e equipamentos industriais.", es: "Soluciones dedicadas a gas natural o diesel-gas en modo dual fuel para grupos electrógenos, bombas, compresores y equipos industriales.", en: "Dedicated solutions for natural gas or dual fuel diesel-gas for generator sets, pumps, compressors, and industrial equipment." }
  },
  {
    id: "instrumentacao-analitica-utilidades",
    title: { pt: "Instrumentação Analítica: A Ciência por Trás da Infraestrutura", es: "Instrumentación Analítica: La Ciencia detrás de la Infraestructura", en: "Analytical Instrumentation: The Science Behind the Infrastructure" },
    summary: { pt: "A diferença crítica entre montar tubulações industriais comuns e projetar redes de utilidades baseadas no limite de detecção do instrumento.", es: "La diferencia crítica entre montar tuberías industriales comunes y diseñar redes de servicios públicos basadas en el límite de detección del instrumento.", en: "The critical difference between installing common industrial piping and designing utility networks based on the instrument detection limit." }
  },
  {
    id: "compatibilidade-elgiloy-h2s",
    title: { pt: "Compatibilidade do H₂S com Liga Elgiloy®", es: "Compatibilidad del H₂S con la Aleación Elgiloy®", en: "Compatibility of H₂S with Elgiloy® Alloy" },
    summary: { pt: "Folha de dados técnica orientativa sobre componentes de reguladores e válvulas para gases especiais contendo Sulfeto de Hidrogênio (H₂S).", es: "Hoja de datos técnica orientativa sobre componentes de reguladores y válvulas para gases especiales que contienen sulfuro de hidrógeno (H₂S).", en: "Technical guidance datasheet on regulator and valve components for specialty gases containing Hydrogen Sulfide (H₂S)." }
  },
  {
    id: "instrumentacao-industria-4-0",
    title: { pt: "Importância da instrumentação correta na indústria 4.0", es: "Importancia de la instrumentación correcta en la industria 4.0", en: "Importance of correct instrumentation in Industry 4.0" },
    summary: { pt: "Como a escolha dos instrumentos afeta a qualidade e a eficiência dos processos modernos.", es: "Cómo la elección de los instrumentos afecta la calidad y la eficiencia de los procesos modernos.", en: "How the choice of instruments affects the quality and efficiency of modern processes." }
  },
  {
    id: "seguranca-sistemas-gases",
    title: { pt: "Segurança em sistemas de gases: Normas NR-13 e além", es: "Seguridad en sistemas de gases: Normas NR-13 y más allá", en: "Safety in gas systems: NR-13 standards and beyond" },
    summary: { pt: "Normas e procedimentos essenciais para garantir a integridade e a segurança de sistemas de gases industriais.", es: "Normas y procedimientos esenciales para garantizar la integridad y seguridad de sistemas de gases industriales.", en: "Essential standards and procedures to ensure the integrity and safety of industrial gas systems." }
  },
  {
    id: "engenharia-aplicada-processos",
    title: { pt: "Engenharia aplicada: Otimizando processos industriais", es: "Ingeniería aplicada: Optimizando procesos industriales", en: "Applied Engineering: Optimizing Industrial Processes" },
    summary: { pt: "A diferença entre a teoria e a prática na otimização de malhas de controle e processos críticos.", es: "La diferencia entre la teoría y la práctica en la optimización de lazos de control y procesos críticos.", en: "The difference between theory and practice in optimizing control loops and critical processes." }
  },
  {
    id: "confiabilidade-operacional",
    title: { pt: "Garantindo confiabilidade operacional em 5 passos", es: "Garantizando la confiabilidad operacional en 5 pasos", en: "Ensuring Operational Reliability in 5 Steps" },
    summary: { pt: "Estratégias para reduzir paradas não programadas e aumentar a vida útil dos seus ativos.", es: "Estrategias para reducir paradas no programadas y aumentar la vida útil de sus activos.", en: "Strategies to reduce unscheduled shutdowns and increase the useful life of your assets." }
  },
  {
    id: "boas-praticas-calibracao",
    title: { pt: "Boas práticas em calibração de instrumentos analíticos", es: "Buenas prácticas en la calibración de instrumentos analíticos", en: "Best Practices in Analytical Instrument Calibration" },
    summary: { pt: "Como garantir a rastreabilidade e a precisão das suas análises.", es: "Cómo garantizar la trazabilidad y la precisión de sus análisis.", en: "How to ensure traceability and accuracy of your analyses." }
  },
  {
    id: "analise-processo-vs-laboratorio",
    title: { pt: "Diferença entre análise de processo e análise laboratorial", es: "Diferencia entre el análisis de procesos y el análisis de laboratorio", en: "Difference Between Process Analysis and Laboratory Analysis" },
    summary: { pt: "Vantagens e desvantagens de cada abordagem para o controle de qualidade.", es: "Ventajas y desventajas de cada enfoque para el control de calidad.", en: "Advantages and disadvantages of each approach for quality control." }
  },
  {
    id: "conformidade-rastreabilidade",
    title: { pt: "Conformidade e rastreabilidade: Por que documentar?", es: "Conformidad y trazabilidad: ¿Por qué documentar?", en: "Compliance and Traceability: Why Document?" },
    summary: { pt: "A importância da documentação técnica na indústria regulada.", es: "La importancia de la documentación técnica en la industria regulada.", en: "The importance of technical documentation in the regulated industry." }
  },
  {
    id: "tendencias-instrumentacao",
    title: { pt: "Tendências em instrumentação para o próximo ano", es: "Tendencias en instrumentación para el próximo año", en: "Trends in Instrumentation for Next Year" },
    summary: { pt: "O que esperar do futuro da automação e instrumentação industrial.", es: "Qué esperar del futuro de la automatización e instrumentación industrial.", en: "What to expect from the future of industrial automation and instrumentation." }
  }
];

// Populate article translations
for (const art of articleTranslations) {
  addKey(`article_${art.id}_title`, art.title);
  addKey(`article_${art.id}_summary`, art.summary);
}

// Populate product translations
for (const id of productsIds) {
  const trans = productsTranslations[id];
  if (trans) {
    addKey(`product_${id}_name`, trans.name);
    addKey(`product_${id}_cat`, trans.cat);
    addKey(`product_${id}_desc`, trans.desc);
    trans.features.forEach((feat, index) => {
      addKey(`product_${id}_features_${index}`, feat);
    });
    trans.apps.forEach((app, index) => {
      addKey(`product_${id}_apps_${index}`, app);
    });
  }
}

// ─── APPLICATIONS TRANSLATIONS ────────────────────────────────────────────────
const applicationsIds = [
  'laboratorios-analiticos', 'farmaceutica', 'centros-pesquisa', 'hospitalar',
  'oleo-gas', 'industria-quimica', 'alimentos-bebidas', 'energia-transicao-energetica',
  'criogenia', 'automotivo', 'soldagem', 'mineral'
];

const applicationsTranslations = {
  'laboratorios-analiticos': {
    name: { pt: 'Laboratórios Analíticos', es: 'Laboratorios Analíticos', en: 'Analytical Laboratories' },
    cat: { pt: 'Laboratorial e Pesquisa', es: 'Laboratorio e Investigación', en: 'Laboratory and Research' },
    desc: {
      pt: 'Laboratórios de análise química, controle de qualidade e pesquisa científica exigem gases de alta pureza, reguladores certificados e equipamentos de alta precisão para garantir a integridade e rastreabilidade dos resultados analíticos.',
      es: 'Los laboratorios de análisis químico, control de calidad e investigación científica exigen gases de alta pureza, reguladores certificados y equipos de alta precisión para garantizar la integridad y trazabilidad de los resultados analíticos.',
      en: 'Chemical analysis, quality control, and scientific research laboratories require high purity gases, certified regulators, and high precision equipment to ensure the integrity and traceability of analytical results.'
    },
    challenges: [
      { pt: 'Pureza dos gases utilizados nos ensaios analíticos', es: 'Pureza de los gases utilizados en los ensayos analíticos', en: 'Purity of gases used in analytical tests' },
      { pt: 'Rastreabilidade e certificação dos instrumentos', es: 'Trazabilidad y certificación de los instrumentos', en: 'Traceability and certification of instruments' },
      { pt: 'Estanqueidade das conexões em gases reativos', es: 'Estanqueidad de las conexiones en gases reactivos', en: 'Tightness of connections in reactive gases' },
      { pt: 'Integração com sistemas LIMS e conformidade com normas', es: 'Integración con sistemas LIMS y conformidad con las normas', en: 'Integration with LIMS systems and compliance with standards' }
    ],
    solutions: [
      { pt: 'Reguladores de alta pureza com certificado de calibração RBC', es: 'Reguladores de alta pureza con certificado de calibración RBC', en: 'High purity regulators with RBC calibration certificate' },
      { pt: 'Cilindros com certificado de análise e rastreabilidade', es: 'Cilindros con certificado de análisis y trazabilidad', en: 'Cylinders with certificate of analysis and traceability' },
      { pt: 'Conexões TK-Fujikin para instrumentação analítica', es: 'Conexiones TK-Fujikin para instrumentación analítica', en: 'TK-Fujikin fittings for analytical instrumentation' },
      { pt: 'Detectores de vazamento para gases tóxicos em laboratório', es: 'Detectores de fugas para gases tóxicos en laboratorio', en: 'Leak detectors for toxic gases in the laboratory' }
    ]
  },
  'farmaceutica': {
    name: { pt: 'Farmacêutico', es: 'Farmacéutico', en: 'Pharmaceutical' },
    cat: { pt: 'Laboratorial e Pesquisa', es: 'Laboratorio e Investigación', en: 'Laboratory and Research' },
    desc: {
      pt: 'A indústria farmacêutica exige gases de grau USP, sistemas validados, rastreabilidade completa e conformidade com GMP. A Prime Products fornece soluções auditáveis, com documentação técnica completa para atender às exigências da Anvisa e da FDA.',
      es: 'La industria farmacéutica exige gases de grado USP, sistemas validados, trazabilidad completa y conformidad con GMP. Prime Products proporciona soluciones auditables con documentación técnica completa para cumplir con los requisitos de Anvisa y la FDA.',
      en: 'The pharmaceutical industry requires USP-grade gases, validated systems, full traceability, and GMP compliance. Prime Products provides auditable solutions with complete technical documentation to meet Anvisa and FDA requirements.'
    },
    challenges: [
      { pt: 'Gases com grau farmacêutico (USP) e certificados', es: 'Gases con grado farmacéutico (USP) y certificados', en: 'Gases with pharmaceutical grade (USP) and certificates' },
      { pt: 'Validação de sistemas e qualificação de equipamentos', es: 'Validación de sistemas y calificación de equipos', en: 'System validation and equipment qualification' },
      { pt: 'Conformidade GMP e rastreabilidade de lotes', es: 'Conformidad GMP y trazabilidad de lotes', en: 'GMP compliance and batch traceability' },
      { pt: 'Controle de pureza e monitoramento contínuo', es: 'Control de pureza y monitoreo continuo', en: 'Purity control and continuous monitoring' }
    ],
    solutions: [
      { pt: 'Cilindros e reguladores para gases USP com certificado de análise', es: 'Cilindros y reguladores para gases USP con certificado de análisis', en: 'Cylinders and regulators for USP gases with certificate of analysis' },
      { pt: 'Sistemas de distribuição de gases medicinais certificados', es: 'Sistemas de distribución de gases medicinais certificados', en: 'Certified medical gas distribution systems' },
      { pt: 'Instrumentação validada para ambientes GMP', es: 'Instrumentación validada para entornos GMP', en: 'Validated instrumentation for GMP environments' },
      { pt: 'Detectores de vazamento e monitoramento de pureza', es: 'Detectores de fugas y monitoreo de pureza', en: 'Leak detectors and purity monitoring' }
    ]
  },
  'centros-pesquisa': {
    name: { pt: 'Centros de Pesquisa', es: 'Centros de Investigación', en: 'Research Centers' },
    cat: { pt: 'Laboratorial e Pesquisa', es: 'Laboratorio e Investigación', en: 'Laboratory and Research' },
    desc: {
      pt: 'Centros de pesquisa e universidades demandam gases de altíssima pureza (5.0, 6.0), equipamentos especializados e suporte técnico de alto nível para viabilizar experimentos científicos e descobertas de ponta.',
      es: 'Los centros de investigación y las universidades demandan gases de muy alta pureza (5.0, 6.0), equipos especializados y soporte técnico de alto nivel para viabilizar experimentos científicos y descubrimientos de vanguardia.',
      en: 'Research centers and universities demand ultra-high purity gases (5.0, 6.0), specialized equipment, and high-level technical support to enable scientific experiments and cutting-edge discoveries.'
    },
    challenges: [
      { pt: 'Gases de altíssima pureza (5.0, 6.0) com certificado de análise', es: 'Gases de muy alta pureza (5.0, 6.0) con certificado de análisis', en: 'Ultra-high purity gases (5.0, 6.0) with certificate of analysis' },
      { pt: 'Condições criogênicas para experimentos especiais', es: 'Condiciones criogénicas para experimentos especiales', en: 'Cryogenic conditions for special experiments' },
      { pt: 'Flexibilidade e customização das soluções', es: 'Flexibilidad y personalización de las soluciones', en: 'Flexibility and customization of solutions' },
      { pt: 'Custo-benefício para aplicações de P&D acadêmico', es: 'Costo-beneficio para aplicaciones de I+D académico', en: 'Cost-effectiveness for academic R&D applications' }
    ],
    solutions: [
      { pt: 'Cilindros e reguladores para gases de pesquisa de alta pureza', es: 'Cilindros y reguladores para gases de investigación de alta pureza', en: 'Cylinders and regulators for high purity research gases' },
      { pt: 'Dewars criogênicos para nitrogênio líquido, He e Ar líquido', es: 'Dewars criogénicos para nitrógeno líquido, He y Ar líquido', en: 'Cryogenic dewars for liquid nitrogen, He, and liquid Ar' },
      { pt: 'Conexões ultra-limpas e inertes para ambientes de pesquisa', es: 'Conexiones ultra-limpias e inertes para entornos de investigación', en: 'Ultra-clean and inert connections for research environments' },
      { pt: 'Sistemas de geração de gases in-situ (N₂, O₂)', es: 'Sistemas de generación de gases in-situ (N₂, O₂)', en: 'In-situ gas generation systems (N₂, O₂)' }
    ]
  },
  'hospitalar': {
    name: { pt: 'Hospitalar', es: 'Hospitalaria', en: 'Healthcare' },
    cat: { pt: 'Aplicações Médicas', es: 'Aplicaciones Médicas', en: 'Healthcare Applications' },
    desc: {
      pt: 'O setor hospitalar exige gases medicinais certificados, sistemas de distribuição confiáveis e equipamentos que garantam a segurança de pacientes e profissionais. A Prime atende hospitais, clínicas e centros cirúrgicos com soluções completas e suporte técnico especializado.',
      es: 'El sector hospitalario exige gases medicinales certificados, sistemas de distribución confiables y equipos que garanticen la seguridad de pacientes y profesionales. Prime atiende hospitales, clínicas y quirófanos con soluciones completas y soporte técnico especializado.',
      en: 'The healthcare sector requires certified medical gases, reliable distribution systems, and equipment that guarantees the safety of patients and professionals. Prime serves hospitals, clinics, and surgical centers with complete solutions and specialized technical support.'
    },
    challenges: [
      { pt: 'Fornecimento contínuo e confiável de gases medicinais', es: 'Suministro continuo y confiable de gases medicinales', en: 'Continuous and reliable supply of medical gases' },
      { pt: 'Conformidade com normas ABNT NBR 12188 e ANVISA', es: 'Conformidad con las normas ABNT NBR 12188 y ANVISA', en: 'Compliance with ABNT NBR 12188 and ANVISA standards' },
      { pt: 'Sistemas de geração de oxigênio para independência de fornecedores', es: 'Sistemas de generación de oxígeno para independencia de proveedores', en: 'Oxygen generation systems for supplier independence' },
      { pt: 'Segurança na distribuição e detecção de vazamentos', es: 'Seguridad en la distribución y detección de fugas', en: 'Safety in distribution and leak detection' }
    ],
    solutions: [
      { pt: 'Centrais de gases medicinais (O₂, N₂O, ar medicinal, CO₂)', es: 'Centrales de gases medicinales (O₂, N₂O, aire medicinal, CO₂)', en: 'Medical gas stations (O₂, N₂O, medical air, CO₂)' },
      { pt: 'Geradores de oxigênio PSA para produção on-site', es: 'Generadores de oxígeno PSA para producción in-situ', en: 'PSA oxygen generators for on-site production' },
      { pt: 'Sistemas de distribuição em cobre e ramais de gases', es: 'Sistemas de distribución en cobre y ramales de gases', en: 'Copper distribution systems and gas lines' },
      { pt: 'Detectores de vazamento e alarmes de segurança hospitalar', es: 'Detectores de fugas y alarmas de seguridad hospitalaria', en: 'Leak detectors and hospital safety alarms' }
    ]
  },
  'oleo-gas': {
    name: { pt: 'Óleo & Gás', es: 'Petróleo y Gas', en: 'Oil & Gas' },
    cat: { pt: 'Processos Industriais', es: 'Procesos Industriales', en: 'Industrial Processes' },
    desc: {
      pt: 'Refinarias, plantas de GNL, plataformas e instalações de óleo & gás exigem instrumentação certificada para áreas classificadas, sistemas de detecção de gases tóxicos e inflamáveis e soluções de segurança funcional com certificação SIL.',
      es: 'Las refinerías, plantas de GNL, plataformas e instalaciones de petróleo y gas exigen instrumentación certificada para áreas clasificadas, sistemas de detección de gases tóxicos e inflamables y soluciones de seguridad funcional con certificación SIL.',
      en: 'Refineries, LNG plants, platforms, and oil & gas installations require certified instrumentation for hazardous areas, toxic and flammable gas detection systems, and functional safety solutions with SIL certification.'
    },
    challenges: [
      { pt: 'Instrumentação certificada ATEX/IECEx para zonas classificadas', es: 'Instrumentación certificada ATEX/IECEx para zonas clasificadas', en: 'ATEX/IECEx certified instrumentation for hazardous zones' },
      { pt: 'Detecção de H₂S, CO, LEL e outros gases de risco', es: 'Detección de H₂S, CO, LEL y otros gases de riesgo', en: 'Detection of H₂S, CO, LEL, and other hazardous gases' },
      { pt: 'Certificação de segurança funcional SIL 2/3', es: 'Certificación de seguridad funcional SIL 2/3', en: 'SIL 2/3 functional safety certification' },
      { pt: 'Alta disponibilidade e confiabilidade em ambientes críticos', es: 'Alta disponibilidad y confiabilidad en entornos críticos', en: 'High availability and reliability in critical environments' }
    ],
    solutions: [
      { pt: 'Transmissores de pressão com certificação ATEX e SIL', es: 'Transmisores de presión con certificación ATEX y SIL', en: 'Pressure transmitters with ATEX and SIL certification' },
      { pt: 'Detectores de gases tóxicos e inflamáveis com saída 4-20 mA/HART', es: 'Detectores de gases tóxicos e inflamables con salida 4-20 mA/HART', en: 'Toxic and flammable gas detectors with 4-20 mA/HART output' },
      { pt: 'Sistemas de supressão de incêndio por agentes limpos', es: 'Sistemas de supresión de incendios por agentes limpios', en: 'Clean agent fire suppression systems' },
      { pt: 'Reguladores e válvulas para gases de processo em alta pressão', es: 'Reguladores y válvulas para gases de proceso a alta presión', en: 'Regulators and valves for high-pressure process gases' }
    ]
  },
  'industria-quimica': {
    name: { pt: 'Indústria Química', es: 'Industria Química', en: 'Chemical Industry' },
    cat: { pt: 'Química, Óleo & Gás', es: 'Química, Petróleo y Gas', en: 'Chemical, Oil & Gas' },
    desc: {
      pt: 'A indústria química trabalha com fluidos agressivos, gases reativos e processos em alta pressão. A Prime fornece conexões em materiais resistentes, reguladores para gases especiais e instrumentação certificada para ambientes com substâncias corrosivas.',
      es: 'La industria química trabaja con fluidos agresivos, gases reactivos y procesos a alta presión. Prime suministra conexiones de materiales resistentes, reguladores para gases especiales e instrumentación certificada para entornos con sustancias corrosivas.',
      en: 'The chemical industry works with aggressive fluids, reactive gases, and high-pressure processes. Prime supplies fittings in resistant materials, specialty gas regulators, and certified instrumentation for environments with corrosive substances.'
    },
    challenges: [
      { pt: 'Compatibilidade de materiais com fluidos agressivos e corrosivos', es: 'Compatibilidad de materiales con fluidos agresivos y corrosivos', en: 'Material compatibility with aggressive and corrosive fluids' },
      { pt: 'Detecção de gases tóxicos como Cl₂, NH₃, HF e outros', es: 'Detección de gases tóxicos como Cl₂, NH₃, HF y otros', en: 'Detection of toxic gases such as Cl₂, NH₃, HF, and others' },
      { pt: 'Alta pressão e temperaturas extremas de processo', es: 'Alta presión y temperaturas extremas de proceso', en: 'High pressure and extreme process temperatures' },
      { pt: 'Rastreabilidade e conformidade com normas de segurança', es: 'Trazabilidad y conformidad con las normas de seguridad', en: 'Traceability and compliance with safety standards' }
    ],
    solutions: [
      { pt: 'Conexões em Hastelloy, PTFE e SS316L para fluidos agressivos', es: 'Conexiones en Hastelloy, PTFE y SS316L para fluidos agresivos', en: 'Hastelloy, PTFE, and SS316L fittings for aggressive fluids' },
      { pt: 'Detectores de gases tóxicos com certificação ATEX', es: 'Detectores de gases tóxicos con certificación ATEX', en: 'Toxic gas detectors with ATEX certification' },
      { pt: 'Reguladores de pressão para gases especiais e reativos', es: 'Reguladores de presión para gases especiales y reactivos', en: 'Pressure regulators for specialty and reactive gases' },
      { pt: 'Transmissores de processo com diafragma e selo químico', es: 'Transmisores de proceso con diafragma y sello químico', en: 'Process transmitters with diaphragm and chemical seal' }
    ]
  },
  'alimentos-bebidas': {
    name: { pt: 'Alimentos e Bebidas', es: 'Alimentos y Bebidas', en: 'Food and Beverage' },
    cat: { pt: 'Processos Industriais', es: 'Procesos Industriales', en: 'Industrial Processes' },
    desc: {
      pt: 'O setor de alimentos e bebidas utiliza gases de grau alimentar para carbonatação, embalagem em atmosfera modificada (MAP), congelamento criogênico e processos de higienização. A Prime fornece gases certificados e sistemas de distribuição seguros e higiênicos.',
      es: 'El sector de alimentos y bebidas utiliza gases de grado alimentario para carbonatación, envasado en atmósfera modificada (MAP), congelación criogénica y procesos de higienización. Prime suministra gases certificados y sistemas de distribución seguros e higiénicos.',
      en: 'The food and beverage sector uses food-grade gases for carbonation, modified atmosphere packaging (MAP), cryogenic freezing, and sanitization processes. Prime supplies certified gases and safe, hygienic distribution systems.'
    },
    challenges: [
      { pt: 'Gases de grau alimentar (Food Grade) com certificação', es: 'Gases de grado alimentario (Food Grade) con certificación', en: 'Food Grade gases with certification' },
      { pt: 'Sistemas de embalagem em atmosfera modificada (MAP)', es: 'Sistemas de envasado en atmósfera modificada (MAP)', en: 'Modified atmosphere packaging (MAP) systems' },
      { pt: 'Carbonatação e dosagem precisa de CO₂', es: 'Carbonatación y dosificación precisa de CO₂', en: 'Carbonation and precise CO₂ dosing' },
      { pt: 'Higiene e conformidade com normas sanitárias', es: 'Higiene y conformidad con las normas sanitarias', en: 'Hygiene and compliance with sanitary standards' }
    ],
    solutions: [
      { pt: 'CO₂, N₂ e O₂ de grau alimentar com certificados', es: 'CO₂, N₂ y O₂ de grado alimentario con certificados', en: 'Food-grade CO₂, N₂, and O₂ with certificates' },
      { pt: 'Reguladores e conexões sanitizáveis para processos higiênicos', es: 'Reguladores y conexiones sanitizables para procesos higiénicos', en: 'Sanitizable regulators and connections for hygienic processes' },
      { pt: 'Sistemas de dosagem e mistura para carbonatação', es: 'Sistemas de dosificación y mezcla para carbonatación', en: 'Dosing and mixing systems for carbonation' },
      { pt: 'Cilindros e tanques criogênicos para congelamento', es: 'Cilindros y tanques criogénicos para congelación', en: 'Cylinders and cryogenic tanks for freezing' }
    ]
  },
  'energia-transicao-energetica': {
    name: { pt: 'Energias Renováveis e Hidrogênio', es: 'Energías Renovables e Hidrógeno', en: 'Renewable Energies and Hydrogen' },
    cat: { pt: 'Energia', es: 'Energía', en: 'Energy' },
    desc: {
      pt: 'O futuro da energia passa pelo Hidrogênio e soluções de altíssima pressão. A Prime Products fornece as melhores tecnologias do mercado (Best of Breed) em Jumbo Tubes de alta pressão e infraestrutura para H₂.',
      es: 'El futuro de la energía pasa por el hidrógeno y soluciones de muy alta presión. Prime Products suministra las mejores tecnologías del mercado (Best of Breed) en Jumbo Tubes de alta presión e infraestructura para H₂.',
      en: 'The future of energy involves Hydrogen and extremely high pressure solutions. Prime Products provides the best technologies on the market (Best of Breed) in high-pressure Jumbo Tubes and infrastructure for H₂.'
    },
    challenges: [
      { pt: 'Garantir armazenamento e transporte 100% seguros de H₂ em altas pressões', es: 'Garantizar almacenamiento y transporte 100% seguros de H₂ a altas presiones', en: 'Ensure 100% safe storage and transport of H₂ at high pressures' },
      { pt: 'Infraestrutura para estações de abastecimento de H₂ (Filling Stations)', es: 'Infraestructura para estaciones de servicio de H₂ (Filling Stations)', en: 'Infrastructure for H₂ filling stations (Hydrogen refueling stations)' },
      { pt: 'Prevenção contra fragilização por hidrogênio em materiais sob estresse', es: 'Prevención contra la fragilización por hidrógeno en materiales bajo estrés', en: 'Prevention against hydrogen embrittlement in materials under stress' },
      { pt: 'Soluções de super alta capacidade para estocagem estacionária (248 a 875 bar)', es: 'Soluciones de súper alta capacidad para almacenamiento estacionario (248 a 875 bar)', en: 'Super high capacity solutions for stationary storage (248 to 875 bar)' }
    ],
    solutions: [
      { pt: 'Sistemas de Transporte (Tube Trailers) Tipo 1 e Tipo 4', es: 'Sistemas de transporte (Tube Trailers) Tipo 1 y Tipo 4', en: 'Transport Systems (Tube Trailers) Type 1 and Type 4' },
      { pt: 'Pacotes de Armazenamento de H₂ em Jumbo Tubes Tipo 4', es: 'Paquetes de almacenamiento de H₂ en Jumbo Tubes Tipo 4', en: 'H₂ Storage Packages in Type 4 Jumbo Tubes' },
      { pt: 'Vasos e tanques de combustível operando a 248 bar, 500 bar, 700 bar e até 875 bar', es: 'Recipientes y tanques de combustible que operan a 248 bar, 500 bar, 700 bar y hasta 875 bar', en: 'Vessels and fuel tanks operating at 248 bar, 500 bar, 700 bar, and up to 875 bar' },
      { pt: 'Componentes e infraestrutura para centros Aeroespaciais e aplicações especiais', es: 'Componentes e infraestructura para centros aeroespaciales y aplicaciones especiales', en: 'Components and infrastructure for Aerospace centers and special applications' }
    ]
  },
  'criogenia': {
    name: { pt: 'Criogenia', es: 'Criogenia', en: 'Cryogenics' },
    cat: { pt: 'Energia', es: 'Energía', en: 'Energy' },
    desc: {
      pt: 'Aplicações criogênicas demandam equipamentos especializados para armazenamento e transferência de gases liquefeitos como nitrogênio líquido (LN₂), oxigênio líquido (LOX), argônio líquido e hélio líquido.',
      es: 'Las aplicaciones criogénicas demandan equipos especializados para el almacenamiento y la transferencia de gases licuados como nitrógeno líquido (LN₂), oxígeno líquido (LOX), argón líquido y helio líquido.',
      en: 'Cryogenic applications demand specialized equipment for storage and transfer of liquefied gases such as liquid nitrogen (LN₂), liquid oxygen (LOX), liquid argon, and liquid helium.'
    },
    challenges: [
      { pt: 'Isolamento térmico eficiente para temperaturas criogênicas', es: 'Aislamiento térmico eficiente para temperaturas criogénicas', en: 'Efficient thermal insulation for cryogenic temperatures' },
      { pt: 'Segurança no manuseio de LN₂, LOX e outros criogênicos', es: 'Seguridad en el manejo de LN₂, LOX y otros criogénicos', en: 'Safety in handling LN₂, LOX, and other cryogens' },
      { pt: 'Compatibilidade de materiais com temperaturas abaixo de -150 °C', es: 'Compatibilidad de materiales con temperaturas inferiores a -150 °C', en: 'Material compatibility with temperatures below -150 °C' },
      { pt: 'Logística de transporte e fornecimento contínuo', es: 'Logística de transporte y suministro continuo', en: 'Transport logistics and continuous supply' }
    ],
    solutions: [
      { pt: 'Dewars e recipientes criogênicos de 10 a 500 litros', es: 'Dewars y recipientes criogénicos de 10 a 500 litros', en: 'Dewars and cryogenic vessels from 10 to 500 liters' },
      { pt: 'Válvulas e conexões especiais para temperaturas criogênicas', es: 'Válvulas y conexiones especiales para temperaturas criogénicas', en: 'Special valves and fittings for cryogenic temperatures' },
      { pt: 'Sistemas de transferência e vaporizadores', es: 'Sistemas de transferencia y vaporizadores', en: 'Transfer systems and vaporizers' },
      { pt: 'Acessórios e EPIs para manuseio seguro de criogênicos', es: 'Accesorios y EPP para el manejo seguro de criogénicos', en: 'Accessories and PPE for safe handling of cryogens' }
    ]
  },
  'automotivo': {
    name: { pt: 'Automotivo', es: 'Automotriz', en: 'Automotive' },
    cat: { pt: 'Indústria', es: 'Industria', en: 'Industry' },
    desc: {
      pt: 'A indústria automotiva utiliza gases para soldagem MIG/TIG, testes de estanqueidade, pintura a pó, processos de fabricação e controle de qualidade. A Prime fornece misturas certificadas, reguladores e equipamentos para cada etapa da produção.',
      es: 'La industria automotriz utiliza gases para soldadura MIG/TIG, pruebas de estanqueidad, pintura en polvo, procesos de fabricación y control de calidad. Prime suministra mezclas certificadas, reguladores y equipos para cada etapa de la producción.',
      en: 'The automotive industry uses gases for MIG/TIG welding, leak testing, powder coating, manufacturing processes, and quality control. Prime supplies certified mixtures, regulators, and equipment for each stage of production.'
    },
    challenges: [
      { pt: 'Misturas para soldagem MIG/TIG com precisão de composição', es: 'Mezclas para soldadura MIG/TIG con precisión de composición', en: 'Mixtures for MIG/TIG welding with compositional precision' },
      { pt: 'Testes de estanqueidade em componentes e sistemas', es: 'Pruebas de estanqueidad en componentes y sistemas', en: 'Leak testing on components and systems' },
      { pt: 'Alta demanda e fornecimento contínuo nas linhas de produção', es: 'Alta demanda y suministro continuo en las líneas de producción', en: 'High demand and continuous supply on production lines' },
      { pt: 'Conformidade com normas automotivas (IATF 16949)', es: 'Conformidad con las normas automotrices (IATF 16949)', en: 'Compliance with automotive standards (IATF 16949)' }
    ],
    solutions: [
      { pt: 'Misturas Ar+CO₂, Ar+He e gases puros para soldagem', es: 'Mezclas de Ar+CO₂, Ar+He y gases puros para soldadura', en: 'Ar+CO₂, Ar+He mixtures and pure gases for welding' },
      { pt: 'Reguladores de alta vazão para linhas de produção', es: 'Reguladores de alto flujo para líneas de producción', en: 'High-flow regulators for production lines' },
      { pt: 'Cilindros de alumínio leves para aplicações móveis', es: 'Cilindros de aluminio ligeros para aplicaciones móviles', en: 'Lightweight aluminum cylinders for mobile applications' },
      { pt: 'Kits completos de corte e solda para manutenção', es: 'Kits completos de corte y soldadura para mantenimiento', en: 'Complete cutting and welding kits for maintenance' }
    ]
  },
  'soldagem': {
    name: { pt: 'Metal Mecânica', es: 'Metalmecánica', en: 'Metalworking' },
    cat: { pt: 'Indústria', es: 'Industria', en: 'Industry' },
    desc: {
      pt: 'Processos de soldagem MIG/TIG, eletrodo revestido, oxicorte e plasma exigem gases adequados, reguladores calibrados e acessórios certificados. A Prime fornece soluções completas para metalurgia, construção civil e manutenção industrial.',
      es: 'Los procesos de soldadura MIG/TIG, electrodo revestido, oxicorte y plasma exigen gases adecuados, reguladores calibrados y accesorios certificados. Prime suministra soluciones completas para metalurgia, construcción civil y mantenimiento industrial.',
      en: 'MIG/TIG welding, stick welding, oxy-fuel cutting, and plasma processes require appropriate gases, calibrated regulators, and certified accessories. Prime supplies complete solutions for metallurgy, civil construction, and industrial maintenance.'
    },
    challenges: [
      { pt: 'Seleção correta do gás de proteção para cada processo', es: 'Selección correcta del gas de protección para cada processo', en: 'Correct selection of shielding gas for each process' },
      { pt: 'Reguladores com vazão adequada para cada aplicação', es: 'Reguladores con flujo adecuado para cada aplicación', en: 'Regulators with appropriate flow rate for each application' },
      { pt: 'Segurança no manuseio de acetileno e gases combustíveis', es: 'Seguridad en el manejo de acetileno y gases combustibles', en: 'Safety in handling acetylene and combustible gases' },
      { pt: 'Qualidade e homogeneidade das juntas soldadas', es: 'Calidad y homogeneidad de las juntas soldadas', en: 'Quality and homogeneity of welded joints' }
    ],
    solutions: [
      { pt: 'Gases puros e misturas para MIG/TIG (Ar, CO₂, He, N₂)', es: 'Gases puros y mezclas para MIG/TIG (Ar, CO₂, He, N₂)', en: 'Pure gases and mixtures for MIG/TIG (Ar, CO₂, He, N₂)' },
      { pt: 'Maçaricos para corte oxiacetilênico e oxicorte', es: 'Sopletes para corte oxiacetilénico y oxicorte', en: 'Torches for oxy-fuel cutting and flame cutting' },
      { pt: 'Reguladores para CO₂, O₂, Acetileno e misturas', es: 'Reguladores para CO₂, O₂, acetileno y mezclas', en: 'Regulators for CO₂, O₂, Acetylene, and mixtures' },
      { pt: 'Mangueiras certificadas e acessórios para soldagem', es: 'Mangueras certificadas y accesorios para soldadura', en: 'Certified hoses and accessories for welding' }
    ]
  },
  'mineral': {
    name: { pt: 'Mineração', es: 'Minería', en: 'Mining' },
    cat: { pt: 'Indústria', es: 'Industria', en: 'Industry' },
    desc: {
      pt: 'O setor mineral exige instrumentação robusta para ambientes severos, detecção de gases em espaços confinados e subterrâneos, e sistemas de segurança para proteção de trabalhadores e equipamentos em minas e plantas de beneficiamento.',
      es: 'El sector mineral exige instrumentación robusta para entornos severos, detección de gases en espacios confinados y subterráneos, y sistemas de seguridad para protección de trabajadores y equipos en minas y plantas de procesamiento.',
      en: 'The mineral sector requires robust instrumentation for harsh environments, gas detection in confined and underground spaces, and safety systems for the protection of workers and equipment in mines and processing plants.'
    },
    challenges: [
      { pt: 'Detecção de gases em espaços confinados e subterrâneos', es: 'Detección de gases en espacios confinados y subterráneos', en: 'Gas detection in confined and underground spaces' },
      { pt: 'Instrumentação resistente a poeira, umidade e vibração', es: 'Instrumentación resistente al polvo, humedad y vibración', en: 'Instrumentation resistant to dust, moisture, and vibration' },
      { pt: 'Segurança ocupacional em ambientes de alto risco', es: 'Seguridad ocupacional en entornos de alto riesgo', en: 'Occupational safety in high-risk environments' },
      { pt: 'Conformidade com NR-22 e normas de mineração', es: 'Conformidad con la NR-22 y normas de minería', en: 'Compliance with NR-22 and mining regulations' }
    ],
    solutions: [
      { pt: 'Detectores portáteis e fixos de CO, H₂S, O₂ e LEL', es: 'Detectores portátiles y fijos de CO, H₂S, O₂ y LEL', en: 'Portable and fixed detectors for CO, H₂S, O₂, and LEL' },
      { pt: 'Instrumentação com proteção IP67/IP68 para ambientes severos', es: 'Instrumentación con protección IP67/IP68 para entornos severos', en: 'Instrumentation with IP67/IP68 protection for harsh environments' },
      { pt: 'Transmissores com certificação ATEX para áreas classificadas', es: 'Transmisores con certificación ATEX para áreas clasificadas', en: 'Transmitters with ATEX certification for hazardous areas' },
      { pt: 'Sistemas de combate a incêndio para plantas de beneficiamento', es: 'Sistemas de extinción de incendios para plantas de procesamiento', en: 'Fire suppression systems for processing plants' }
    ]
  }
};

// Populate application translations
for (const id of applicationsIds) {
  const trans = applicationsTranslations[id];
  if (trans) {
    addKey(`app_${id}_name`, trans.name);
    addKey(`app_${id}_cat`, trans.cat);
    addKey(`app_${id}_desc`, trans.desc);
    trans.challenges.forEach((chall, index) => {
      addKey(`app_${id}_challenges_${index}`, chall);
    });
    trans.solutions.forEach((sol, index) => {
      addKey(`app_${id}_solutions_${index}`, sol);
    });
  }
}

// Newsletter Keys
addKey('newsletter_desc', { pt: "Receba artigos técnicos e novidades do setor.", es: "Reciba artículos técnicos y novedades del sector.", en: "Receive technical articles and industry news." });
addKey('newsletter_placeholder', { pt: "Seu e-mail profissional", es: "Su correo electrónico profesional", en: "Your professional email" });
addKey('newsletter_btn', { pt: "Inscrever-se", es: "Suscribirse", en: "Subscribe" });
addKey('newsletter_btn_sending', { pt: "Enviando...", es: "Enviando...", en: "Sending..." });
addKey('newsletter_success', { pt: "Obrigado por se inscrever!", es: "¡Gracias por suscribirse!", en: "Thank you for subscribing!" });
addKey('newsletter_error', { pt: "Ocorreu um erro. Tente novamente.", es: "Ocurrió un error. Intente novamente.", en: "An error occurred. Please try again." });

// Write the files
const localesDir = path.resolve(__dirname, '../src/locales');
fs.writeFileSync(path.join(localesDir, 'pt.json'), JSON.stringify(localesData.pt, null, 2), 'utf8');
fs.writeFileSync(path.join(localesDir, 'es.json'), JSON.stringify(localesData.es, null, 2), 'utf8');
fs.writeFileSync(path.join(localesDir, 'en.json'), JSON.stringify(localesData.en, null, 2), 'utf8');

console.log('Locales JSON files built successfully in src/locales/');
