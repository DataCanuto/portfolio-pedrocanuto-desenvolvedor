export interface ProjectLanguage {
  name: string;
  color: string;
}

export interface ProjectTimelineEntry {
  id: string;
  title: string;
  year: number;
  context: string;
  language: ProjectLanguage;
  resume: string;
  href: string;
}

// GitHub-style language dot colors (github.com/ozh/github-colors)
export const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  Java: '#b07219',
  TypeScript: '#3178c6',
};

export const projectsTimeline: ProjectTimelineEntry[] = [
  {
    id: 'pedro-canuto-musico',
    title: 'Pedro Canuto Música',
    year: 2026,
    context: 'Projeto Pessoal',
    language: { name: 'Java', color: LANGUAGE_COLORS.Java },
    resume:
      'Sistema fullstack de cadastro de alunos e agenda de aulas de música: backend em Java com Spring Boot e PostgreSQL, frontend em React, aplicando na prática os fundamentos do curso Técnico em Desenvolvimento de Sistemas do SENAI CIMATEC para gerenciar meu próprio serviço como educador musical.',
    href: '/backend/pedro-canuto-musico',
  },
  {
    id: 'galeria-digital-artes',
    title: 'Galeria Digital de Artes',
    year: 2026,
    context: 'Projeto Pessoal',
    language: { name: 'TypeScript', color: LANGUAGE_COLORS.TypeScript },
    resume:
      'Landing page de galeria digital para exposição e curadoria de obras de arte, com filtro por categoria e navegação responsiva construída em Next.js e TypeScript.',
    href: '/landing-pages/galeria-digital',
  },
  {
    id: 'springboot-ai-budgeting',
    title: 'Spring Boot AI Budgeting',
    year: 2025,
    context: 'Certificação Spring Boot — DIO',
    language: { name: 'Java', color: LANGUAGE_COLORS.Java },
    resume:
      'API de orçamento pessoal com Spring AI: comandos de voz são transcritos, interpretados por tool calling e executados como casos de uso em uma arquitetura DDD em camadas (domain, application, infrastructure).',
    href: '/budgetting',
  },
  {
    id: 'data-streaming-project',
    title: 'Data Streaming Pipeline',
    year: 2025,
    context: 'Projeto para Cliente',
    language: { name: 'Python', color: LANGUAGE_COLORS.Python },
    resume:
      'Pipeline automatizado para extração, consolidação e análise de dados de múltiplos tipos de documentos PDF (notas fiscais, planilhas, prestações) com OCR via Tesseract e exportação estruturada em Excel.',
    href: '/engenharia-dados/data-streaming-project',
  },
  {
    id: 'google-data-analytics-capstone',
    title: 'Google Data Analytics Capstone',
    year: 2024,
    context: 'Certificação Google Data Analytics',
    language: { name: 'Python', color: LANGUAGE_COLORS.Python },
    resume:
      'Análise completa de dados de fitness tracking de 30 usuários FitBit (Bella Beat), com EDA estruturada, visualizações e recomendações de estratégias de gamificação e engajamento em um dashboard interativo.',
    href: '/dashboards/googledataanalyticscapstone',
  },
];
