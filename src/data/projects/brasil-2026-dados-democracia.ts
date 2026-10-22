import type { Project } from '../types';

export const brasil2026DadosDemocracia: Project = {
  id: 'brasil-2026-dados-democracia',
  name: 'Brasil 2026: Dados & Democracia',
  slug: 'brasil-2026',
  shortDescription:
    'Pesquisa pessoal em dados às vésperas do 2º turno da eleição presidencial de 2026: dashboard interativo com 11 painéis sobre economia, políticas públicas, violência por estado, bets, minerais críticos, propostas dos candidatos e interferência externa, com fontes citadas em cada painel.',
  description:
    'Dashboard interativo construído a partir de uma pesquisa pessoal em dados públicos, às vésperas do 2º turno da eleição presidencial de 2026 (25/10/2026). Reúne indicadores, séries históricas e comparativos em 11 painéis, com as fontes indicadas em cada um.',
  resumeTitle: 'Dashboard — Brasil 2026: Dados & Democracia',
  resumeDescription:
    'Pesquisa pessoal em dados públicos (IBGE, Banco Central, FBSP/IPEA, TSE, entre outros) consolidada em um dashboard interativo de 11 painéis: KPIs, séries históricas com Chart.js, ranking de violência por estado e comparativos de políticas e propostas.',
  problem:
    'Às vésperas do 2º turno, os dados sobre economia, segurança e políticas públicas estão espalhados por fontes diferentes e chegam ao eleitor misturados a opinião.',
  objective:
    'Reunir dados públicos em um único dashboard navegável, com cada indicador ligado à sua fonte e com notas metodológicas que separam o que o número mede do que ele não mede.',
  draftFields: ['problem', 'objective'],
  status: 'concluido',
  category: 'dashboards',
  featured: false,
  onResume: 'dados',
  date: '2026-10',
  context: {
    engagement: 'pessoal',
    label: 'Pesquisa Pessoal',
  },
  domain: 'Dados públicos e eleições — Brasil 2026',
  technologies: ['html5', 'css3', 'javascript', 'chartjs'],
  skills: ['analise-dados', 'visualizacao-dados'],
  features: [
    '11 painéis navegáveis por abas: Panorama, Políticas, Economia, Violência, Bets, Minerais, Candidatos, Interferência, Banco Master, Taxação e América Latina',
    'KPIs do panorama (desemprego, PIB, salário mínimo, SELIC, homicídios, carga tributária)',
    'Séries históricas 2018–2025 de PIB, desemprego, salário mínimo e SELIC em gráficos Chart.js',
    'Ranking de mortes violentas por estado (2024) colorido pela orientação do governador, com média nacional e aviso de que correlação não implica causalidade',
    'Comparativos lado a lado de políticas (2019–2022 × 2023–2026) e de propostas dos candidatos',
    'Notas metodológicas e status das investigações (sem condenação sinalizado)',
    'Fontes citadas em cada painel; tema claro/escuro; layout responsivo',
  ],
  deployment: '/embeds/brasil-2026-dados-democracia.html',
  caseStudy: '/dashboards/brasil-2026',
  milestones: [{ date: '2026-10', label: 'Dashboard publicado no portfólio' }],
  icon: '🗳️',
  reviewNotes: [
    'Cópia estática do artefato claude.ai/artifact/HVgBQtABX59tsNM86pDpS4 em public/embeds/. Ao atualizar o artefato, substituir o arquivo.',
    'Ferramentas usadas na coleta e redação da pesquisa (ex.: assistente de IA) não registradas.',
    'Dados a conferir antes de divulgar: tabela da América Latina lista Boric (Chile) e Arce (Bolívia) como governos de 2026, e o KPI "7/12 governos de direita" não bate com a tabela; SELIC 2024–2025 no gráfico (11,25% e 13,75%) difere das metas do Copom no fim de cada ano.',
  ],
};
