'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { getProject } from '@/data';

interface NotebookEntry {
  name: string;
  description: string;
}

interface FolderData {
  id: string;
  folderPath: string;
  title: string;
  emoji: string;
  description: string;
  libraries: string[];
  methods: string[];
  notebooks: NotebookEntry[];
  conclusions: string[];
}

const REPO_URL = getProject('machine-learning').repository;

const folders: FolderData[] = [
  {
    id: 'data-engineering',
    folderPath: '01_data_engineering',
    title: 'Engenharia de dados',
    emoji: '🧹',
    description:
      'Limpeza, preparação e modelagem de dados para ML, com cenários simulados de indústria (sensores, manutenção) e o dataset público Automobile.',
    libraries: ['pandas', 'numpy', 'scikit-learn'],
    methods: [
      'Limpeza e normalização de texto',
      'Tratamento de valores ausentes e datas',
      'Detecção de outliers (3σ e IQR)',
      'Label Encoding / One-Hot Encoding',
    ],
    notebooks: [
      {
        name: '01_data_cleaning_industry_simulation',
        description:
          'Normalização de texto (remoção de acentos, padronização de caixa/espaços) em dados de manutenção industrial simulada, usando unicodedata.normalize.',
      },
      {
        name: '02_data_preparation_industry_simulation',
        description:
          'Tratamento de valores ausentes, datas inconsistentes (pd.to_datetime com errors="coerce"), conversão de tipos e detecção de outliers via 3σ e IQR com visualização.',
      },
      {
        name: '03_data_modeling_for_ml_cars',
        description:
          'Conversão de colunas textuais numéricas do dataset Automobile em inteiros via mapeamento e One-Hot Encoding das colunas categóricas.',
      },
      {
        name: '04_encoding_techniques',
        description: 'Técnicas de codificação de variáveis categóricas.',
      },
    ],
    conclusions: [],
  },
  {
    id: 'eda',
    folderPath: '02_exploratory_data_analysis',
    title: 'Análise exploratória',
    emoji: '📊',
    description:
      'Fundamentos de pandas e matplotlib, visualização de métricas industriais e análises exploratórias completas sobre datasets públicos (voos e coluna vertebral).',
    libraries: ['pandas', 'matplotlib', 'seaborn', 'scipy'],
    methods: [
      'Imputação por mediana',
      'Engenharia de atributos temporais',
      'Matriz de correlação',
      'Visualizações multivariadas',
    ],
    notebooks: [
      {
        name: '01_pandas_and_matplotlib_fundamentals',
        description: 'Fundamentos de DataFrames e gráficos com dados simulados de produção industrial.',
      },
      {
        name: '02_data_visualisation_industry',
        description:
          'Catálogo de tipos de gráfico (linha, dispersão, boxplot, histograma, heatmap) aplicados a métricas industriais simuladas.',
      },
      {
        name: '03_correlation_matrix_analysis',
        description: 'Visualização de heatmap de correlação entre variáveis.',
      },
      {
        name: '04_eda_vertebral_column_dataset',
        description:
          'Análise do dataset Vertebral Column (UCI) com gráficos de densidade, matriz de correlação e matriz de dispersão.',
      },
      {
        name: '05_eda_flights_dataset',
        description: 'Relatório de EDA com foco em atrasos e desempenho por aeroporto.',
      },
      {
        name: '06_challenge_eda_flights_complete',
        description:
          'Fluxo estruturado de 10 etapas de EDA sobre atrasos de voos: imputação por mediana, extração de atributos temporais, categorização de atrasos e visualizações multivariadas.',
      },
    ],
    conclusions: [
      '10% dos valores de atraso (partida e chegada) estavam ausentes e foram imputados pela mediana.',
      '64% dos voos analisados sofreram atrasos acima de 15 minutos, contra 36% pontuais.',
      'Atrasos variaram de -103 min (chegadas antecipadas) a +90 min, com mediana de 6 min na chegada e 7 min na partida.',
      'Distâncias de voo foram segmentadas em 4 categorias com 25 registros cada — distribuição perfeitamente equilibrada.',
    ],
  },
  {
    id: 'feature-engineering',
    folderPath: '03_feature_engineering',
    title: 'Feature engineering',
    emoji: '🛠️',
    description: 'Criação de atributos derivados, normalização e redução de dimensionalidade com dados industriais simulados.',
    libraries: ['pandas', 'scikit-learn', 'matplotlib'],
    methods: ['MinMaxScaler / StandardScaler', 'PCA'],
    notebooks: [
      {
        name: '01_feature_engineering_maintenance',
        description:
          'Cálculo de atributos derivados de manutenção e normalização com MinMaxScaler (0–1) e StandardScaler.',
      },
      {
        name: '02_dimensionality_reduction_pca',
        description: 'Redução de dimensionalidade de 4 variáveis industriais para 2 componentes principais.',
      },
    ],
    conclusions: [
      'PCA reduziu 4 variáveis industriais (temperatura do motor, pressão, vibração, consumo) a 2 componentes: o primeiro explica ~96,49% da variância e o segundo apenas ~3,37% — a variação do sistema é dominada por um único padrão latente.',
    ],
  },
  {
    id: 'machine-learning',
    folderPath: '04_machine_learning',
    title: 'Machine learning',
    emoji: '🤖',
    description:
      'Algoritmos supervisionados e não supervisionados, seleção de atributos, métricas de avaliação, tuning de hiperparâmetros e gradient boosting, com dados industriais simulados e datasets clássicos (Iris, Vertebral Column).',
    libraries: ['scikit-learn', 'xgboost', 'pandas', 'seaborn', 'matplotlib'],
    methods: [
      'Regressão Linear / Logística',
      'KNN, Árvore de Decisão, Random Forest',
      'K-Means + PCA',
      'SelectKBest',
      'Grid / Random Search',
      'Gradient Boosting (XGBoost)',
    ],
    notebooks: [
      {
        name: '01_supervised_algorithms',
        description:
          'Exemplos práticos de regressão linear/logística, KNN, árvore de decisão e random forest aplicados a cenários industriais (previsão de vendas, temperatura, falha de motor).',
      },
      {
        name: '02_unsupervised_algorithms',
        description: 'Clusterização K-Means combinada com análise de PCA.',
      },
      {
        name: '03_scikit_learn_fundamentals',
        description: 'Primeiro classificador com scikit-learn: divisão treino/teste, árvore de decisão e acurácia.',
      },
      {
        name: '04_regression_fundamentals',
        description: 'Seleção de atributos para regressão com SelectKBest e f_regression.',
      },
      {
        name: '05_evaluation_metrics',
        description: 'Métricas de avaliação para tarefas de classificação e regressão.',
      },
      {
        name: '06_hyperparameter_tuning',
        description: 'Estratégias de otimização de hiperparâmetros (Grid Search / Random Search).',
      },
      {
        name: '07_xgboost_ensemble',
        description: 'Classificador XGBoost aplicado ao dataset Iris, com matriz de correlação das features.',
      },
      {
        name: '08_rule_based_trip_recommender',
        description:
          'Recomendador de destinos baseado em regras, comparando critérios do usuário com localidades brasileiras predefinidas.',
      },
      {
        name: '09_lab_ml_prediction_activity',
        description: 'Laboratório de predição com o dataset Vertebral Column (UCI), da análise exploratória ao modelo.',
      },
    ],
    conclusions: [
      'O classificador XGBoost atingiu 97% de acurácia na classificação do dataset Iris (split 80/20, eval_metric="mlogloss").',
      'Os notebooks de algoritmos supervisionados priorizam exemplos práticos de previsão (venda de sorvete, falha de motor por vibração) mais do que comparação formal de métricas entre modelos.',
    ],
  },
  {
    id: 'deep-learning-cv',
    folderPath: '05_deep_learning_and_computer_vision',
    title: 'Deep learning e visão computacional',
    emoji: '👁️',
    description:
      'Introdução a deep learning e exercício de visão computacional, aplicando os conceitos do curso "IA na Indústria 4.0" a processamento de imagens.',
    libraries: ['opencv-python (cv2)', 'matplotlib'],
    methods: ['Haar Cascade Classifier', 'Conversão para escala de cinza', 'Detecção multi-escala de faces'],
    notebooks: [
      {
        name: '01_deep_learning_introduction',
        description: 'Notebook introdutório (esboço) sobre deep learning.',
      },
      {
        name: '02_computer_vision_opencv_project',
        description:
          'Detecção facial com classificador Haar Cascade pré-treinado: carrega a imagem, converte para escala de cinza (cv2.cvtColor), aplica detectMultiScale (scaleFactor=1.3, minNeighbors=5) e desenha retângulos sobre os rostos detectados.',
      },
    ],
    conclusions: [
      'Não há conclusões analíticas registradas em markdown — o notebook de visão computacional é uma prova de conceito ponta a ponta do pipeline de detecção facial.',
    ],
  },
];

const FolderAccordionItem = ({
  folder,
  isExpanded,
  onToggle,
}: {
  folder: FolderData;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden hover:border-accent-orange/50 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-dark-bg/50 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span className="text-3xl flex-shrink-0">{folder.emoji}</span>
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-dark-header-text font-mono">{folder.folderPath}/</h3>
            <p className="text-gray-400 text-sm">
              {folder.notebooks.length > 0
                ? `${folder.notebooks.length} notebook${folder.notebooks.length > 1 ? 's' : ''}`
                : 'Documentação de certificação'}
            </p>
          </div>
        </div>

        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="text-accent-orange" size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-dark-border overflow-hidden"
          >
            <div className="p-6 space-y-6">
              <p className="text-gray-300 leading-relaxed">{folder.description}</p>

              {(folder.libraries.length > 0 || folder.methods.length > 0) && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {folder.libraries.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Bibliotecas</p>
                      <div className="flex flex-wrap gap-2">
                        {folder.libraries.map((lib) => (
                          <span
                            key={lib}
                            className="text-xs px-3 py-1 bg-accent-orange/10 text-accent-orange border border-accent-orange/30 rounded-full font-semibold font-mono"
                          >
                            {lib}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {folder.methods.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Métodos de ML</p>
                      <div className="flex flex-wrap gap-2">
                        {folder.methods.map((method) => (
                          <span
                            key={method}
                            className="text-xs px-3 py-1 bg-dark-bg text-gray-300 border border-dark-border rounded-full"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {folder.notebooks.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-dark-header-text uppercase mb-3 flex items-center gap-2">
                    <BookOpen className="text-accent-orange" size={16} />
                    Notebooks
                  </h4>
                  <ul className="space-y-3">
                    {folder.notebooks.map((nb) => (
                      <li key={nb.name} className="bg-dark-bg/60 border border-dark-border rounded-lg p-4">
                        <p className="font-mono text-sm text-accent-orange mb-1">{nb.name}.ipynb</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{nb.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {folder.conclusions.length > 0 && (
                <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-accent-orange uppercase mb-3 flex items-center gap-2">
                    <Sparkles size={16} />
                    Análises & Conclusões
                  </h4>
                  <ul className="space-y-2">
                    {folder.conclusions.map((conclusion, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <CheckCircle2 className="text-accent-orange flex-shrink-0 mt-0.5" size={16} />
                        <span>{conclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={`${REPO_URL}/tree/main/${folder.folderPath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent-orange transition-colors"
              >
                <Github size={16} />
                Ver pasta no GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FoldersAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>('data-engineering');

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            📁 Explore as <span className="text-accent-orange">Pastas do Repositório</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Cada pasta é um bloco de estudo independente — clique para ver bibliotecas, métodos
            aplicados, notebooks e as principais conclusões registradas.
          </p>
        </motion.div>

        <div className="space-y-4">
          {folders.map((folder) => (
            <FolderAccordionItem
              key={folder.id}
              folder={folder}
              isExpanded={expandedId === folder.id}
              onToggle={() => setExpandedId(expandedId === folder.id ? null : folder.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
