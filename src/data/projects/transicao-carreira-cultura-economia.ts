import type { Project } from '../types';

export const transicaoCarreiraCulturaEconomia: Project = {
  id: 'transicao-carreira-cultura-economia',
  name: 'Da Música ao Código: Cultura, Política e Economia (2011–2026)',
  slug: 'transicao-de-carreira',
  shortDescription:
    'Pesquisa pessoal em dados públicos sobre a transição de carreira da música para o desenvolvimento de software: financiamento da cultura (Lei Rouanet, orçamento, leis Paulo Gustavo e Aldir Blanc), linha do tempo política, indicadores econômicos e tributação, com fonte em cada painel.',
  description:
    'Dashboard construído a partir de uma pesquisa pessoal em fontes oficiais para entender por que viver de música ficou mais difícil entre 2011 e 2026. Cruza a captação da Lei Rouanet, o gasto público com cultura, a extinção e recriação do Ministério da Cultura, PIB, desemprego, Selic, salário mínimo real, piso da saúde e a isenção do imposto de renda, separando o que os dados confirmam do que ainda não medem.',
  resumeTitle: 'Dashboard — Da Música ao Código (cultura, política e economia)',
  resumeDescription:
    'Pesquisa pessoal em dados públicos (IBGE, Ipea, Receita Federal, Banco Central, MinC/Salic) consolidada em um dashboard com séries históricas em Chart.js, valores corrigidos pelo IPCA, notas metodológicas e uma leitura crítica que separa dado confirmado de lacuna.',
  problem:
    'A percepção de que ficou mais difícil viver de arte no Brasil depois de 2016 mistura financiamento da cultura, política e economia, e os dados que poderiam testá-la estão espalhados por fontes diferentes.',
  objective:
    'Reunir em um único dashboard os dados oficiais sobre financiamento da cultura, contexto político, economia e tributação entre 2011 e 2026, para explicar a transição de carreira com evidência e mostrar onde a evidência ainda falta.',
  draftFields: ['problem', 'objective'],
  status: 'em-andamento',
  category: 'dashboards',
  featured: false,
  onResume: 'dados',
  date: '2026-10',
  context: {
    engagement: 'pessoal',
    label: 'Pesquisa Pessoal',
  },
  domain: 'Dados públicos — cultura, política e economia no Brasil (2011–2026)',
  technologies: ['html5', 'css3', 'javascript', 'chartjs'],
  skills: ['analise-dados', 'visualizacao-dados'],
  features: [
    'Captação da Lei Rouanet 2010–2020 corrigida pelo IPCA e 2023–2025 em valores nominais, sem misturar as duas bases no mesmo eixo',
    'Gasto público com cultura por esfera (2013 × 2023) e participação da cultura no gasto total (IBGE/SIIC)',
    'Linha do tempo política: impeachment, duas extinções e duas recriações do Ministério da Cultura, teto de gastos e leis de repasse',
    'PIB, desemprego, Selic, salário mínimo real e rendimento médio com faixas de governo e aviso de que correlação não é causalidade',
    'Piso federal da saúde por habitante sob o teto de gastos (Ipea)',
    'Isenção do IR medida em salários mínimos (2015–2026) e alíquota efetiva média por grupo, incluindo altas rendas (Receita Federal)',
    'Seção "Leitura dos dados" com o que os números confirmam, o que complicam e o que ainda não medem',
    'Fonte citada em cada bloco, tabela de dados em cada gráfico, tema claro/escuro e layout responsivo',
  ],
  deployment: '/embeds/transicao-carreira-cultura-economia.html',
  caseStudy: '/dashboards/transicao-de-carreira',
  milestones: [{ date: '2026-10', label: 'Primeira versão do dashboard (pesquisa em fontes oficiais)' }],
  icon: '🎸',
  reviewNotes: [
    'Período em que Pedro participou da Lei Paulo Gustavo (2023 ou 2024) não registrado.',
    'Captação da Rouanet 2010–2020 é aproximada (derivada da fatia de pessoas físicas publicada pelo Itaú Cultural); 2021–2022 não registrados.',
    'Série anual de gasto federal executado em educação, renda de músicos (PNAD por ocupação) e editais estaduais/municipais por ano ainda não pesquisados.',
  ],
};
