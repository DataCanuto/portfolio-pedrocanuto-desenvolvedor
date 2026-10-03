import type { Experience } from './types';

// Experiências profissionais. Projetos freelance ficam em `projects/` (context.engagement = 'freelance').
export const experiences: Experience[] = [
  {
    id: 'educador-musical-autonomo',
    role: 'Empreendedor / Educador Musical',
    organization: 'Atuação autônoma',
    type: 'autonomo',
    // Linha do tempo informada pelo Pedro (out/2026): bandas desde 2016, aulas desde 2018,
    // empreendimentos musicais desde 2020. O mês de junho/2018 vem do portfólio anterior.
    start: '2016',
    location: 'Salvador/BA',
    highlights: [
      'Atuação com bandas desde 2016, aulas de música desde 2018 e empreendimentos musicais desde 2020.',
      'Geri negócio próprio de educação musical e prestação de serviços em eventos, respondendo por planejamento financeiro, atendimento a clientes e operação de ponta a ponta.',
      'Desenvolvi visão de negócio aplicada hoje ao software: identificar o problema do usuário antes de propor a solução técnica.',
    ],
    relevance: 'transferivel',
  },
];
