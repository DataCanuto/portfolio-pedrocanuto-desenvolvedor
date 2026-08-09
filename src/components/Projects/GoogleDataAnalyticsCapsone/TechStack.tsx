'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Zap } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'Linguagem & Ambiente',
      icon: Code,
      items: [
        { name: 'Python 3.x', description: 'Linguagem principal', badge: '★★★★★' },
        { name: 'Jupyter Notebook', description: 'Ambiente de análise interativa', badge: 'IDE' },
      ],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      category: 'Processamento & Análise',
      icon: Database,
      items: [
        { name: 'Pandas', description: 'Manipulação e transformação de dados', badge: '★★★★★' },
        { name: 'NumPy', description: 'Operações numéricas e estatísticas', badge: 'Core' },
        { name: 'Scikit-learn', description: 'Machine Learning e clustering', badge: 'Advanced' },
        { name: 'SciPy', description: 'Análise estatística avançada', badge: 'Analytics' },
      ],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
    },
    {
      category: 'Visualização de Dados',
      icon: BarChart3,
      items: [
        { name: 'Matplotlib', description: 'Gráficos estáticos e análise', badge: 'Core' },
        { name: 'Seaborn', description: 'Visualizações estatísticas elegantes', badge: 'Visual' },
        { name: 'Plotly', description: 'Gráficos interativos web', badge: 'Interactive' },
      ],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
    },
    {
      category: 'Padrões & Metodologia',
      icon: Zap,
      items: [
        { name: 'ETL Pipeline', description: 'Extract, Transform, Load', badge: 'Pattern' },
        { name: 'EDA (Exploratory Data Analysis)', description: 'Análise exploratória estruturada', badge: 'Method' },
        { name: 'Data Quality Management', description: 'Validação e qualidade de dados', badge: 'Framework' },
        { name: 'Statistical Analysis', description: 'Testes e inferência estatística', badge: 'Analytics' },
      ],
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
    },
  ];

  const datasets = [
    {
      name: 'Daily Activity',
      description: 'Resumo diário de atividades',
      metrics: ['Steps', 'Calories', 'Distance'],
      icon: '📊',
    },
    {
      name: 'Hourly Activity',
      description: 'Dados granulares por hora',
      metrics: ['Steps/h', 'Calories/h', 'Intensity/h'],
      icon: '⏰',
    },
    {
      name: 'Sleep Data',
      description: 'Padrões de sono do usuário',
      metrics: ['Duration', 'Quality', 'Restlessness'],
      icon: '😴',
    },
    {
      name: 'Heart Rate',
      description: 'Dados de frequência cardíaca',
      metrics: ['HR Min', 'HR Max', 'HR Avg'],
      icon: '❤️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <span className="text-accent-orange">Stack</span> Tecnológico
          </h2>
          <p className="text-gray-400 text-lg">
            Ferramentas e bibliotecas utilizadas na análise
          </p>
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${tech.color} border ${tech.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-dark-bg">
                    <Icon className="text-accent-orange" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-header-text">{tech.category}</h3>
                </div>

                <div className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="bg-dark-bg/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-dark-header-text">{item.name}</p>
                        <span className="text-xs font-bold px-2 py-1 bg-accent-orange/20 text-accent-orange rounded">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Datasets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-dark-header-text mb-6">
            📂 Datasets Utilizados
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {datasets.map((dataset, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{dataset.icon}</span>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-dark-header-text">{dataset.name}</h4>
                    <p className="text-sm text-gray-400">{dataset.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {dataset.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-xs font-semibold rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Framework */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-accent-orange mb-4">📋 Framework de Análise</h3>
          <p className="text-gray-300 mb-4">
            O projeto segue o framework padrão de ciência de dados:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">1</div>
              <p className="font-semibold text-dark-header-text">Ask (Perguntar)</p>
              <p className="text-sm text-gray-400">Definir objetivos da análise</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">2-4</div>
              <p className="font-semibold text-dark-header-text">Prepare, Process, Analyze</p>
              <p className="text-sm text-gray-400">Dados e exploração</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">5-6</div>
              <p className="font-semibold text-dark-header-text">Share, Act</p>
              <p className="text-sm text-gray-400">Insights e ações</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
