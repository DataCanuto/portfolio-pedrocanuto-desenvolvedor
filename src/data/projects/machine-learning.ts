import type { Project } from '../types';

export const machineLearning: Project = {
  id: 'machine-learning',
  name: 'Machine Learning',
  slug: 'machine-learning',
  shortDescription:
    'Notebooks Jupyter em Python cobrindo o fluxo de ciência de dados (limpeza, EDA, feature engineering), algoritmos de ML supervisionados e não supervisionados (regressão, KNN, random forest, K-Means, PCA, XGBoost) e uma introdução a visão computacional com OpenCV.',
  description:
    'Notebooks Jupyter de ciência de dados e machine learning com Python: limpeza e EDA, algoritmos supervisionados/não supervisionados, PCA, XGBoost e introdução à visão computacional.',
  resumeTitle: 'Machine Learning & Visão Computacional',
  resumeDescription:
    'Conjunto de 20 notebooks cobrindo todo o fluxo de ciência de dados: limpeza e EDA, aprendizado supervisionado e não supervisionado, PCA e XGBoost, além de introdução à visão computacional com OpenCV (detecção facial via Haar Cascade).',
  problem:
    'Dominar ciência de dados e machine learning exige prática com dados reais, do tratamento ao modelo, e não só teoria.',
  objective:
    'Praticar, em 20 notebooks, o fluxo completo de ciência de dados (limpeza, EDA e feature engineering), algoritmos supervisionados e não supervisionados e uma introdução à visão computacional com OpenCV.',
  draftFields: ['problem', 'objective'],
  status: 'concluido',
  category: 'engenharia-dados',
  featured: true,
  onResume: 'dados',
  date: '2025',
  context: {
    engagement: 'curso',
    label: 'Curso SENAI — IA na Indústria 4.0',
    organization: 'SENAI Bahia',
    resumeNote: '200h',
  },
  technologies: [
    'python',
    'pandas',
    'scikit-learn',
    'xgboost',
    'opencv',
    'numpy',
    'scipy',
    'matplotlib',
    'seaborn',
    'jupyter',
  ],
  skills: ['machine-learning', 'analise-dados'],
  aiUsage:
    'Algoritmos clássicos de ML (regressão, KNN, random forest, K-Means, PCA, XGBoost) e visão computacional com OpenCV.',
  repository: 'https://github.com/DataCanuto/MachineLearning',
  caseStudy: '/engenharia-dados/machine-learning',
  icon: '🧠',
  reviewNotes: [
    'O certificado "Inteligência Artificial Industrial 4.0" (SENAI) está datado de 2024-12-10, mas o curso aparece como 2025 aqui e no currículo.',
  ],
};
