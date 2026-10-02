import type { Competency } from './types';

/**
 * Competências profissionais e as tecnologias que as sustentam.
 *
 * `level` fica 'nao-avaliado' até o Pedro declarar o nível real. O validador lista
 * competências sem nível e sem evidência em projetos.
 */
export const competencies: Competency[] = [
  {
    id: 'backend-java',
    name: 'Desenvolvimento Backend (Java/Spring)',
    area: 'backend',
    level: 'nao-avaliado',
    technologies: [
      'java',
      'spring-boot',
      'spring-web',
      'spring-data-jpa',
      'hibernate',
      'rest-api',
      'crud',
      'poo',
    ],
  },
  {
    id: 'api-design',
    name: 'Design de APIs REST',
    area: 'backend',
    level: 'nao-avaliado',
    technologies: ['rest-api', 'spring-web', 'bean-validation'],
  },
  {
    id: 'arquitetura-software',
    name: 'Arquitetura de Software',
    area: 'arquitetura',
    level: 'nao-avaliado',
    technologies: ['ddd', 'uml', 'poo'],
  },
  {
    id: 'frontend-react',
    name: 'Desenvolvimento Frontend (React)',
    area: 'frontend',
    level: 'nao-avaliado',
    technologies: [
      'react',
      'nextjs',
      'typescript',
      'javascript',
      'html5',
      'css3',
      'tailwind',
      'preact',
      'vite',
    ],
  },
  {
    id: 'banco-de-dados',
    name: 'Banco de Dados Relacional',
    area: 'banco-de-dados',
    level: 'nao-avaliado',
    technologies: ['postgresql', 'mysql', 'h2', 'sql', 'flyway'],
  },
  {
    id: 'devops-containers',
    name: 'Containers e Deploy',
    area: 'cloud-devops',
    level: 'nao-avaliado',
    technologies: ['docker', 'vercel'],
  },
  {
    id: 'testes-automatizados',
    name: 'Testes Automatizados',
    area: 'testes',
    level: 'nao-avaliado',
    technologies: ['junit'],
  },
  {
    id: 'seguranca-aplicacoes',
    name: 'Segurança de Aplicações',
    area: 'seguranca',
    level: 'nao-avaliado',
    technologies: ['spring-security'],
  },
  {
    id: 'ia-aplicada',
    name: 'IA Aplicada a Sistemas (LLMs)',
    area: 'ia-ml',
    level: 'nao-avaliado',
    technologies: ['spring-ai', 'openai', 'gpt-4o', 'whisper'],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning e Visão Computacional',
    area: 'ia-ml',
    level: 'nao-avaliado',
    technologies: ['scikit-learn', 'tensorflow', 'xgboost', 'opencv'],
  },
  {
    id: 'analise-dados',
    name: 'Análise de Dados',
    area: 'dados',
    level: 'nao-avaliado',
    technologies: ['python', 'pandas', 'numpy', 'scipy', 'eda', 'sql', 'excel', 'jupyter'],
  },
  {
    id: 'visualizacao-dados',
    name: 'Visualização de Dados e Dashboards',
    area: 'dados',
    level: 'nao-avaliado',
    technologies: ['matplotlib', 'seaborn', 'plotly', 'power-bi'],
  },
  {
    id: 'engenharia-dados',
    name: 'Engenharia de Dados (ETL)',
    area: 'dados',
    level: 'nao-avaliado',
    technologies: ['etl', 'pymupdf', 'pypdf2', 'tesseract', 'openpyxl', 'regex', 'pandas'],
  },
  {
    id: 'ux-design',
    name: 'UX/UI Design',
    area: 'ux-ui',
    level: 'nao-avaliado',
    technologies: [
      'ux-ui-design',
      'figma',
      'ux-research',
      'empathy-map',
      'journey-map',
      'wireframing',
      'usability-testing',
    ],
  },
];

/** Agrupamento de tecnologias exibido em "Competências Técnicas" no currículo. */
export const resumeSkillGroups: { label: string; technologies: string[] }[] = [
  {
    label: 'Back-End',
    technologies: [
      'java',
      'spring-web',
      'spring-boot',
      'hibernate',
      'rest-api',
      'crud',
      'poo',
      'uml',
    ],
  },
  {
    label: 'Front-End',
    technologies: ['react', 'nextjs', 'typescript', 'javascript', 'html5', 'css3', 'tailwind'],
  },
  { label: 'Banco de Dados / Infra', technologies: ['postgresql', 'h2', 'docker'] },
  {
    label: 'Dados / Machine Learning',
    technologies: ['python', 'pandas', 'numpy', 'scikit-learn', 'tensorflow', 'opencv', 'regex'],
  },
  { label: 'Design de Produto', technologies: ['ux-ui-design', 'figma'] },
];

const byId = new Map(competencies.map((c) => [c.id, c]));

export const getCompetency = (id: string): Competency => {
  const competency = byId.get(id);
  if (!competency) throw new Error(`Competência desconhecida: ${id}`);
  return competency;
};
