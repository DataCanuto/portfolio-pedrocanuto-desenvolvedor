import type { Experience } from './types';

// Experiências profissionais. Projetos freelance ficam em `projects/` (context.engagement = 'freelance').
export const experiences: Experience[] = [
  {
    id: 'educador-musical-autonomo',
    role: 'Empreendedor / Educador Musical',
    organization: 'Atuação autônoma',
    type: 'autonomo',
    start: '2018-06',
    location: 'Salvador/BA',
    highlights: [
      'Geri negócio próprio de educação musical e prestação de serviços em eventos, respondendo por planejamento financeiro, atendimento a clientes e operação de ponta a ponta.',
      'Desenvolvi visão de negócio aplicada hoje ao software: identificar o problema do usuário antes de propor a solução técnica.',
    ],
    relevance: 'transferivel',
  },
];
