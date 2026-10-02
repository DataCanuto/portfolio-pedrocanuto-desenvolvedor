import type { Certification } from './types';

// Ordem cronológica: do mais antigo ao mais recente — novos certificados entram no fim.
// A exibição ordena por data, então a posição aqui não afeta a tela.
// id: slug estável "emissor-assunto" (kebab-case, sem acentos); não codifica ordem nem categoria.
export const certifications: Certification[] = [
  {
    id: 'google-ai-essentials',
    name: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    issuerShort: 'Google',
    date: '2024-09-20',
    image: '/assets/certificados_img/google ai essentials/Coursera_Google AI Essentials.jpg',
    logo: '/assets/logo_certificados/google-coursera.png',
    onResume: true,
    technologies: [],
  },
  {
    id: 'sql-server-formacao-basica',
    name: 'SQL Server - Formação Básica',
    issuer: 'LinkedIn Learning',
    date: '2024-09-30',
    image:
      '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_SQL Server Formacao Basica.jpg',
    logo: '/assets/logo_certificados/sql-logo.png',
    onResume: false,
    technologies: ['sql'],
  },
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    issuerShort: 'Google',
    date: '2024-10-15',
    image: '/assets/certificados_img/google data analytics/COURSERA_GOOGLE_DATA_ANALYTICS_2024.jpg',
    logo: '/assets/logo_certificados/google-coursera.png',
    onResume: true,
    technologies: ['python', 'sql', 'eda'],
    projectId: 'google-data-analytics-capstone',
  },
  {
    id: 'linkedin-excel-data-analysis',
    name: 'Learning Excel Data Analysis',
    issuer: 'LinkedIn Learning',
    date: '2024-10-20',
    image:
      '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Learning Excel Data Analysis.jpg',
    logo: '/assets/logo_certificados/excel-logo.png',
    onResume: false,
    technologies: ['excel'],
  },
  {
    id: 'linkedin-competencias-analise-dados',
    name: 'Introdução às Competências Essenciais para Análise de Dados',
    issuer: 'LinkedIn Learning',
    date: '2024-11-15',
    image:
      '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Introducao as Competencias Essenciais para a Carreira de Analise de Dados.jpg',
    logo: '/assets/logo_certificados/linkedin-learning.png',
    onResume: false,
  },
  {
    id: 'senac-estrutura-dados-python',
    name: 'Estrutura de Dados - Python',
    issuer: 'SENAC',
    date: '2024-11-20',
    image: {
      front:
        '/assets/certificados_img/estrutura de dados python/CERTIFICADO_PYTHON_SENAC_2024_pag1.jpg',
      back: '/assets/certificados_img/estrutura de dados python/CERTIFICADO_PYTHON_SENAC_2024_pag2.jpg',
    },
    logo: '/assets/logo_certificados/python-logo.png',
    onResume: false,
    technologies: ['python'],
  },
  {
    id: 'linkedin-microsoft-carreira-ia-generativa',
    name: 'Fundamentos para uma Carreira em IA Generativa',
    issuer: 'LinkedIn Learning / Microsoft',
    issuerShort: 'Microsoft + LinkedIn',
    date: '2024-11-30',
    image:
      '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Fundamentos para uma Carreira em IA Generativa por Microsoft e LinkedIn.jpg',
    logo: '/assets/logo_certificados/linkedin-microssoft.jpg',
    onResume: true,
  },
  {
    id: 'linkedin-deep-learning-getting-started',
    name: 'Deep Learning - Getting Started',
    issuer: 'LinkedIn Learning',
    date: '2024-12-05',
    image:
      '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Deep Learning Getting Started.jpg',
    logo: '/assets/logo_certificados/linkedin-learning.png',
    onResume: false,
  },
  {
    id: 'senai-inteligencia-artificial-industrial',
    name: 'Inteligência Artificial Industrial 4.0',
    issuer: 'Senai',
    issuerShort: 'SENAI',
    date: '2024-12-10',
    image: {
      front:
        '/assets/certificados_img/inteligencia artificial industrial/Inteligência_Artificial_Industrial-Certificado_48670 (1)_pag1.jpg',
      back: '/assets/certificados_img/inteligencia artificial industrial/Inteligência_Artificial_Industrial-Certificado_48670 (1)_pag2.jpg',
    },
    logo: '/assets/logo_certificados/SENAI_logo_2024.png',
    onResume: true,
    technologies: ['python', 'scikit-learn', 'xgboost', 'opencv'],
    projectId: 'machine-learning',
  },
  {
    id: 'santander-ciencia-dados-python',
    name: 'Ciência de Dados com Python',
    issuer: 'Santander / DIO',
    issuerShort: 'Santander',
    date: '2025-01-15',
    image:
      '/assets/certificados_img/santander ciencia de dados python/Santander 2025 - Ciência de Dados com Python.jpg',
    logo: '/assets/logo_certificados/santander-bootcamp-2025.png',
    onResume: true,
    technologies: ['python', 'pandas'],
  },
  {
    id: 'globant-java-spring-boot-ai',
    name: 'Java Spring Boot AI',
    issuer: 'Globant / DIO',
    issuerShort: 'Globant',
    date: '2025-05-24',
    image: '/assets/certificados_img/globant java spring boot ai/certificado java spring boot.png',
    logo: '/assets/logo_certificados/javaSpringBootLogoCertificado.jpg',
    onResume: true,
    technologies: ['java', 'spring-boot', 'spring-ai'],
    projectId: 'springboot-ai-budgeting',
  },
  {
    // Constava só no currículo; sem imagem, URL ou data exata do certificado.
    id: 'santander-ai-java-backend',
    name: 'AI Java Back-End',
    issuer: 'Santander',
    issuerShort: 'Santander',
    date: '2026',
    onResume: true,
    technologies: ['java'],
  },
  {
    id: 'google-ux-design',
    name: 'Google UX Design',
    issuer: 'Google / Coursera',
    issuerShort: 'Google',
    date: '2026-09-28',
    image: '/assets/certificados_img/google ux design/COURSERA_GOOGLE_UX_DESIGN_2026.jpg',
    logo: '/assets/logo_certificados/google-coursera.png',
    onResume: true,
    technologies: ['figma', 'ux-research', 'wireframing', 'usability-testing'],
    projectId: 'google-ux-designer',
  },
];
