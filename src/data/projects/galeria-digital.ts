import type { Project } from '../types';

export const galeriaDigital: Project = {
  id: 'galeria-digital-artes',
  name: 'Galeria Digital de Artes',
  slug: 'galeria-digital',
  shortDescription:
    'Landing page de galeria digital para exposição e curadoria de obras de arte, com filtro por categoria e navegação responsiva construída em Next.js e TypeScript.',
  description:
    'Landing page moderna e responsiva para exposição digital de obras de arte do artista Paulo Canuto. Featuring 58 obras catalogadas em 5 categorias diferentes, integração com WhatsApp, filtros dinâmicos e design otimizado para conversão.',
  resumeDescription:
    'Desenvolvimento, para cliente, de landing page front-end responsiva para exposição de artes, com filtros por categoria e acesso via QR Code.',
  problem:
    'Um artista local precisava de um espaço digital para expor o acervo e receber contatos de interessados, acessível pelo celular e por QR Code.',
  objective:
    'Criar uma landing page responsiva que apresente as 58 obras em 5 categorias, com filtros, detalhes de cada obra e contato direto pelo WhatsApp.',
  status: 'concluido',
  category: 'frontend',
  featured: true,
  cover: { src: '/assets/covers/galeria-digital.jpg', alt: 'Catálogo da Galeria Digital de Artes' },
  onResume: 'freelance',
  date: '2025-12',
  context: { engagement: 'freelance', label: 'Freelance', organization: 'Paulo Canuto (artista)' },
  domain: 'Arte — exposição e venda de obras',
  technologies: ['typescript', 'nextjs', 'react', 'tailwind', 'framer-motion'],
  skills: ['frontend-react'],
  results: [
    'Galeria publicada para a exposição Divercidadade (concluída).',
    'Próxima etapa em desenvolvimento: página do artista com e-commerce.',
  ],
  features: [
    '58 obras categorizadas',
    'Filtros dinâmicos por categoria',
    'Modal interativo para detalhes',
    'Integração WhatsApp',
  ],
  repository: 'https://github.com/DataCanuto/galeria-digital-artes',
  deployment: 'https://datacanuto.github.io/galeria-digital-artes/catalog_mobile/',
  caseStudy: '/frontend/galeria-digital',
  icon: '🎨',
};
