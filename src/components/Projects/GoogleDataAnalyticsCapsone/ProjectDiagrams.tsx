'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

interface DiagramsProps {
  title?: string;
}

export default function ProjectDiagrams({ title = 'Fluxo de Análise' }: DiagramsProps) {
  const [activeDiagram, setActiveDiagram] = useState<'process' | 'insights' | 'actions'>('process');

  const diagrams = [
    {
      id: 'process',
      name: 'Processo de Análise',
      icon: Code2,
      description: 'Etapas do pipeline de análise de dados',
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              1
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Importação de Dados</h4>
              <p className="text-gray-400 text-sm">Leitura de 6 arquivos CSV de atividade horária</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              2
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Limpeza & Transformação</h4>
              <p className="text-gray-400 text-sm">Remoção de duplicatas, tratamento de nulos, conversão de tipos</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              3
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Análise Exploratória (EDA)</h4>
              <p className="text-gray-400 text-sm">Distribuição de dados, correlações, padrões horários e semanais</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              4
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Segmentação de Usuários</h4>
              <p className="text-gray-400 text-sm">Classificação por padrões de atividade e engajamento</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              5
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Insights & Recomendações</h4>
              <p className="text-gray-400 text-sm">Descoberta de padrões para estratégias de gamificação</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'insights',
      name: 'Principais Insights',
      icon: TrendingUp,
      description: 'Descobertas-chave da análise',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📊 Correlação Forte</h4>
            <p className="text-gray-300 text-sm">
              Relação positiva forte entre TotalSteps e Calorias queimadas, confirmando que caminhada/corrida são principais drivers de despesa calórica.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">⏰ Picos de Atividade</h4>
            <p className="text-gray-300 text-sm">
              Padrões consistentes de picos de atividade no final da tarde e noite (pós-trabalho), com menor atividade nas primeiras horas da manhã.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📈 Qualidade de Dados</h4>
            <p className="text-gray-300 text-sm">
              Dados horários mais completos (60+ dias por usuário) comparado aos dados diários (45 dias), fornecendo visão mais confiável do comportamento.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🎯 Padrões Semanais</h4>
            <p className="text-gray-300 text-sm">
              Distribuição consistente de atividade ao longo da semana, com menos outliers extremos em comparação com dados diários.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'actions',
      name: 'Ações Recomendadas',
      icon: GitBranch,
      description: 'Estratégias para melhoria',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🏆 Sistema de Reconhecimento</h4>
            <p className="text-gray-300 text-sm">
              Implementar mensagens automáticas mensais informando aos usuários seu percentil em relação a TotalSteps ou Calorias na comunidade.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🎮 Gamificação</h4>
            <p className="text-gray-300 text-sm">
              Criar metas semanais baseadas nos picos de atividade observados, com sistema de recompensas para engajar usuários durante períodos críticos.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📱 Notificações Inteligentes</h4>
            <p className="text-gray-300 text-sm">
              Enviar notificações push durante horários de pico identificados para motivar atividade e maximizar engajamento nos períodos mais ativos.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🔄 Detecção de Churn</h4>
            <p className="text-gray-300 text-sm">
              Usar machine learning para identificar usuários em risco de inatividade baseado em padrões de declínio, permitindo intervenção proativa.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentDiagram = diagrams.find((d) => d.id === activeDiagram);
  const getCurrentIndex = () => diagrams.findIndex((d) => d.id === activeDiagram);

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % diagrams.length;
    setActiveDiagram(diagrams[nextIndex].id as any);
  };

  const handlePrev = () => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + diagrams.length) % diagrams.length;
    setActiveDiagram(diagrams[prevIndex].id as any);
  };

  return (
    <section id="diagrams" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
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
            <span className="text-accent-orange">Fluxo</span> de Análise
          </h2>
          <p className="text-gray-400 text-lg">
            Etapas e insights do projeto de análise de fitness tracking
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {diagrams.map((diagram) => (
            <button
              key={diagram.id}
              onClick={() => setActiveDiagram(diagram.id as any)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeDiagram === diagram.id
                  ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                  : 'bg-dark-bg-secondary border border-dark-border text-gray-300 hover:border-accent-orange/50'
              }`}
            >
              <diagram.icon size={18} />
              {diagram.name}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeDiagram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-2">
            {currentDiagram?.name}
          </h3>
          <p className="text-gray-400 text-sm mb-6">{currentDiagram?.description}</p>
          {currentDiagram?.content}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center"
        >
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-6 py-3 bg-dark-bg border border-dark-border rounded-lg text-gray-300 hover:border-accent-orange hover:text-accent-orange transition-all duration-300"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <div className="flex gap-2">
            {diagrams.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === getCurrentIndex()
                    ? 'bg-accent-orange w-8'
                    : 'bg-dark-border w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-accent-orange rounded-lg text-black font-bold hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Próximo
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
