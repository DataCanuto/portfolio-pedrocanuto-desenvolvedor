import type { Project } from '../types';

/**
 * Flora Hub — fonte única do produto. O mesmo produto aparece em dois projetos:
 * o case study de UX (certificação Google UX Design) e a implementação do backend.
 * Fatos do produto ficam aqui uma vez só e são compartilhados pelos dois.
 */
const FLORA_HUB = {
  product: 'flora-hub',
  domain: 'Cuidado de plantas — app conceitual para amantes de plantas',
  // Concebido em julho/2025, no 1º semestre do Técnico em Desenvolvimento de Sistemas,
  // e desenvolvido ao longo do curso (informado pelo Pedro, out/2026).
  milestones: [
    { date: '2025-07', label: 'Concepção do projeto (1º semestre de Desenvolvimento de Sistemas)' },
    { date: '2025', label: 'Spring Boot AI (certificação DIO)' },
    { date: '2026-08', label: 'UX Design' },
    { date: '2026-09', label: 'Prototipagem de UX e implementação do backend com Claude Code' },
  ],
};

export const floraHubUx: Project = {
  id: 'google-ux-designer',
  name: 'UX Designer',
  slug: 'google-ux-designer',
  ...FLORA_HUB,
  shortDescription:
    'Fundamentos e métodos de UX Design (empatia, ideação, prototipação e teste) aplicados ao case study Flora Hub: pesquisa com usuários, personas, mapa de empatia, auditoria de concorrentes, wireframes e testes de usabilidade.',
  description:
    'Fundamentos e métodos de UX Design (empatia, ideação, prototipação e teste) aplicados ao case study Flora Hub: pesquisa com usuários, mapa de empatia, mapa da jornada, auditoria de concorrentes e testes de usabilidade.',
  problem:
    'Quem quer cuidar de plantas depende de grupos de WhatsApp, vídeos e buscas soltas na internet: informação fragmentada e pouco confiável, principalmente sobre a segurança das plantas para crianças e pets.',
  objective:
    'Projetar, seguindo o processo de UX do Google (empatia, definição, ideação, prototipação e teste), um app que reúna identificação de plantas, cuidados confiáveis e comunidade, validado em testes com usuários.',
  status: 'concluido',
  category: 'frontend',
  featured: true,
  date: '2026-08',
  context: {
    engagement: 'certificacao',
    label: 'Certificação Google UX Design',
    organization: 'Google / Coursera',
  },
  role: 'UX Designer (projeto individual)',
  technologies: [
    'figma',
    'ux-research',
    'empathy-map',
    'journey-map',
    'wireframing',
    'usability-testing',
  ],
  skills: ['ux-design'],
  features: [
    'Mapa de empatia e mapa da jornada do usuário',
    'Auditoria de concorrentes',
    'Wireframes e protótipos de baixa e alta fidelidade',
    'Case study completo — Flora Hub',
  ],
  caseStudy: '/frontend/google-ux-designer',
  images: [
    { src: '/assets/documents/case-studies/persona-lucia.png', alt: 'Persona Lúcia' },
    {
      src: '/assets/documents/case-studies/digital-mockups/home-screen.png',
      alt: 'Mockup da tela inicial',
    },
    {
      src: '/assets/documents/case-studies/digital-mockups/identify-camera.png',
      alt: 'Mockup de identificação por câmera',
    },
    {
      src: '/assets/documents/case-studies/digital-mockups/plant-detail.png',
      alt: 'Mockup do detalhe da planta',
    },
    {
      src: '/assets/documents/case-studies/digital-mockups/community-feed.png',
      alt: 'Mockup do feed da comunidade',
    },
  ],
  documentation: [
    {
      label: 'Case Study Flora Hub',
      url: '/assets/documents/case-studies/flora-hub-case-study.html',
      kind: 'case-study',
    },
    {
      label: 'Auditoria de concorrentes',
      url: '/assets/documents/case-studies/flora-hub-competitive-audit.html',
      kind: 'outro',
    },
    {
      label: 'Apresentação da pesquisa',
      url: '/assets/documents/case-studies/research-presentation.html',
      kind: 'apresentacao',
    },
    {
      label: 'Protótipo de alta fidelidade (PDF)',
      url: '/assets/documents/case-studies/high-fidelity-prototype.pdf',
      kind: 'prototipo',
    },
    {
      label: 'Protótipo no Figma',
      url: 'https://www.figma.com/proto/Z9ti5hkQhXKvoyD1NjFLLS/UX-DESIGN---GOOGLE-PROJECT?node-id=20-5&p=f&t=1ghFkNSFQzDJtrt5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A5&show-proto-sidebar=1',
      kind: 'prototipo',
    },
  ],
  icon: '🌱',
  reviewNotes: [
    'Mockups em grade ainda são imagens geradas por IA (MockupsShowcase); substituir pelos exports finais do Figma.',
  ],
};

export const floraHubBackend: Project = {
  id: 'flora-hub-backend',
  name: 'Flora Hub Backend',
  slug: 'flora-hub',
  ...FLORA_HUB,
  shortDescription:
    'Backend em Spring Boot com Spring AI: a foto de uma planta é enviada ao GPT-4o para identificação, e um motor de regras cruza os cuidados da espécie com o clima da OpenWeather para gerar recomendações. Evolução do projeto Spring AI Budgeting (DIO).',
  description:
    'Backend com Spring AI e GPT-4o: recebe a foto de uma planta, identifica a espécie e cruza os cuidados ideais com o clima da OpenWeather em um motor de regras que gera recomendações.',
  problem:
    'Saber como cuidar de uma planta exige primeiro identificar a espécie e depois adaptar os cuidados ao clima local, juntando fontes diferentes; e uma resposta de IA sozinha não é confiável para decidir esses cuidados.',
  objective:
    'Implementar o backend do Flora Hub: receber a foto da planta, identificar a espécie com GPT-4o via Spring AI e gerar recomendações de cuidado em um motor de regras em Java que cruza a espécie com o clima da OpenWeather.',
  status: 'em-andamento',
  category: 'backend',
  featured: true,
  date: '2026-09',
  context: {
    engagement: 'curso',
    label: 'Projeto do curso Técnico em Desenvolvimento de Sistemas',
    organization: 'SENAI CIMATEC',
  },
  technologies: [
    'java',
    'spring-boot',
    'spring-ai',
    'openai',
    'postgresql',
    'gpt-4o',
    'spring-security',
    'spring-data-jpa',
    'flyway',
    'maven',
    'lombok',
    'openweather',
    'junit',
    'preact',
    'vite',
  ],
  skills: [
    'backend-java',
    'api-design',
    'ia-aplicada',
    'banco-de-dados',
    'testes-automatizados',
    'seguranca-aplicacoes',
    'arquitetura-software',
  ],
  architecture:
    'O cliente envia a foto da planta (URL pública ou base64) e, opcionalmente, a localização. O backend valida a imagem, consulta o cache de espécies e de clima e executa um motor de regras (padrão Strategy) que cruza os cuidados ideais com o clima atual. Identificação botânica, saúde aparente e perfil de cuidados vêm do GPT-4o como JSON tipado, combinados às recomendações.',
  features: [
    'Identificação da espécie a partir de foto',
    'Recomendações de cuidado cruzadas com o clima local',
    'Simulação do app (frontend Preact + Vite)',
  ],
  backend: ['Java 21', 'Spring Boot 4.1', 'Spring AI 2.0.1', 'Spring Security', 'Maven + Lombok'],
  frontend: ['Simulação do app em Preact + Vite'],
  database: [
    'PostgreSQL',
    'Spring Data JPA',
    'Schema versionado em 7 migrations Flyway',
    'Cache de espécies e clima no banco',
  ],
  integrations: ['OpenAI GPT-4o (multimodal)', 'OpenWeather API com timeout, cache e fallback'],
  aiUsage:
    'Spring AI ChatClient multimodal envia a imagem ao GPT-4o, com saída estruturada mapeada para records Java (1 a 2 chamadas por análise). A IA fornece dados; as decisões ficam no motor de regras em Java.',
  caseStudy: '/backend/flora-hub',
  images: [
    { src: '/assets/img/florahub-backend/aba-sobre.png', alt: 'Simulação do app — aba Sobre' },
    {
      src: '/assets/img/florahub-backend/aba-cuidados.png',
      alt: 'Simulação do app — aba Cuidados',
    },
    { src: '/assets/img/florahub-backend/aba-clima.png', alt: 'Simulação do app — aba Clima' },
  ],
  learning: [
    'Spring AI (ChatClient) integrado ao fluxo do backend',
    'IA multimodal: imagem enviada como Media junto ao prompt',
    'Saída estruturada da IA mapeada para records Java',
    'Engenharia de prompt com confiança calibrada',
    'Motor de regras com padrão Strategy',
    'Integração com APIs externas com timeout, cache e fallback',
    'Segurança de entrada: proteção contra SSRF e validação de imagens',
    'Testes unitários com JUnit 5 no motor de regras e na orquestração',
  ],
  icon: '🌿',
  reviewNotes: [
    'Repositório GitHub do backend ainda é privado; Pedro vai publicá-lo (out/2026). Linkar em `repository` quando estiver público.',
  ],
};
