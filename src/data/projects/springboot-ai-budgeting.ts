import type { Project } from '../types';

export const springBootAiBudgeting: Project = {
  id: 'springboot-ai-budgeting',
  name: 'Spring Boot AI Budgeting',
  slug: 'springboot-ai-budgeting',
  shortDescription:
    'API de orçamento pessoal com Spring AI: comandos de voz são transcritos, interpretados por tool calling e executados como casos de uso em uma arquitetura DDD em camadas (domain, application, infrastructure).',
  description:
    'API de orçamento pessoal com Spring AI: comandos de voz são transcritos, interpretados por tool calling e executados como casos de uso em uma arquitetura DDD em camadas.',
  problem:
    'Registrar gastos e consultar o orçamento pessoal costuma exigir formulários e vários cliques, o que desestimula manter o controle em dia.',
  objective:
    'Processar comandos de voz para criar e consultar transações financeiras: o áudio é transcrito, o modelo de IA escolhe o caso de uso certo da aplicação, que persiste ou consulta as transações, e a resposta volta em áudio.',
  status: 'concluido',
  category: 'backend',
  featured: false,
  date: '2025',
  context: {
    engagement: 'certificacao',
    label: 'Certificação Spring Boot — DIO',
    organization: 'DIO',
  },
  technologies: [
    'java',
    'spring-boot',
    'spring-ai',
    'mysql',
    'gradle',
    'lombok',
    'spring-data-jpa',
    'h2',
    'docker',
    'junit',
    'openai',
    'whisper',
    'ddd',
  ],
  skills: [
    'backend-java',
    'ia-aplicada',
    'arquitetura-software',
    'banco-de-dados',
    'testes-automatizados',
    'devops-containers',
  ],
  architecture:
    'DDD em 3 camadas (domain, application, infrastructure); casos de uso de domínio expostos ao modelo como @Tool.',
  backend: ['Java 21', 'Spring Boot 4.0.6', 'Spring AI 2.0.0-M4', 'Gradle', 'Lombok'],
  database: ['MySQL', 'H2 Database', 'Spring Data JPA'],
  infrastructure: ['Docker Compose'],
  integrations: ['OpenAI: GPT-4o-mini (chat), Whisper-1 (transcrição), TTS-1 (voz)'],
  aiUsage:
    'Comandos de voz são transcritos (Whisper), interpretados por tool calling com GPT-4o-mini e respondidos em áudio (TTS).',
  caseStudy: '/budgetting',
  cover: {
    src: '/assets/budgeting-wireframes/01-fluxo-por-voz.svg',
    alt: 'Wireframe do fluxo por voz da API: áudio, transcrição, tool calling, caso de uso e resposta em áudio',
  },
  icon: '🤖',
};
