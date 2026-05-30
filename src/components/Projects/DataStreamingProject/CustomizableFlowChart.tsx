'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProcessingFlowChart from './ProcessingFlowChart';

// Exemplo de dados customizáveis
export const pipelineExamplesData = {
  fast: [
    {
      stage: 'Descoberta',
      duration: 1,
      filesProcessed: 50,
      description: 'Varredura rápida de arquivos',
    },
    {
      stage: 'Extração',
      duration: 15,
      filesProcessed: 48,
      description: 'Extração otimizada',
    },
    {
      stage: 'Normalização',
      duration: 8,
      filesProcessed: 48,
      description: 'Normalização rápida',
    },
    {
      stage: 'Consolidação',
      duration: 5,
      filesProcessed: 48,
      description: 'Merge otimizado',
    },
    {
      stage: 'Validação',
      duration: 3,
      filesProcessed: 45,
      description: 'Validação expressa',
    },
    {
      stage: 'Exportação',
      duration: 2,
      filesProcessed: 45,
      description: 'Exportação rápida',
    },
  ],
  balanced: [
    {
      stage: 'Descoberta',
      duration: 2,
      filesProcessed: 150,
      description: 'Varredura e identificação de arquivos',
    },
    {
      stage: 'Extração',
      duration: 35,
      filesProcessed: 140,
      description: 'Extração de dados e OCR',
    },
    {
      stage: 'Normalização',
      duration: 18,
      filesProcessed: 140,
      description: 'Padronização e limpeza de dados',
    },
    {
      stage: 'Consolidação',
      duration: 12,
      filesProcessed: 140,
      description: 'Merge e deduplicação de dados',
    },
    {
      stage: 'Validação',
      duration: 8,
      filesProcessed: 135,
      description: 'Verificação de qualidade',
    },
    {
      stage: 'Exportação',
      duration: 5,
      filesProcessed: 135,
      description: 'Geração de relatórios finais',
    },
  ],
  thorough: [
    {
      stage: 'Descoberta',
      duration: 5,
      filesProcessed: 500,
      description: 'Varredura profunda completa',
    },
    {
      stage: 'Extração',
      duration: 120,
      filesProcessed: 480,
      description: 'Extração detalhada com OCR avançado',
    },
    {
      stage: 'Normalização',
      duration: 60,
      filesProcessed: 480,
      description: 'Normalização completa e validação',
    },
    {
      stage: 'Consolidação',
      duration: 45,
      filesProcessed: 480,
      description: 'Merge inteligente com análise de anomalias',
    },
    {
      stage: 'Validação',
      duration: 30,
      filesProcessed: 450,
      description: 'Validação multi-critério em profundidade',
    },
    {
      stage: 'Exportação',
      duration: 15,
      filesProcessed: 450,
      description: 'Geração de múltiplos relatórios',
    },
  ],
};

interface CustomizableFlowChartProps {
  showModeSelector?: boolean;
}

export default function CustomizableFlowChart({
  showModeSelector = true,
}: CustomizableFlowChartProps) {
  const [mode, setMode] = useState<'fast' | 'balanced' | 'thorough'>('balanced');

  const modes = [
    {
      id: 'fast',
      name: 'Modo Rápido',
      description: '50 arquivos, processamento otimizado',
      icon: '⚡',
      color: 'from-yellow-500/20 to-yellow-600/20',
      borderColor: 'border-yellow-500/30',
    },
    {
      id: 'balanced',
      name: 'Modo Equilibrado',
      description: '150 arquivos, performance padrão',
      icon: '⚖️',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      id: 'thorough',
      name: 'Modo Profundo',
      description: '500 arquivos, análise completa',
      icon: '🔬',
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
    },
  ];

  const currentData =
    pipelineExamplesData[mode as keyof typeof pipelineExamplesData];
  const totalTime = currentData.reduce((acc, d) => acc + d.duration, 0);
  const startFiles = currentData[0].filesProcessed;
  const endFiles = currentData[currentData.length - 1].filesProcessed;
  const successRate = ((endFiles / startFiles) * 100).toFixed(1);

  return (
    <>
      {showModeSelector && (
        <section className="py-16 px-4 md:px-8 bg-dark-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
                <span className="text-accent-orange">🎛️</span> Customize o Pipeline
              </h2>
              <p className="text-gray-400 text-lg">
                Escolha diferentes modos de processamento para ver como o pipeline se adapta
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id as typeof mode)}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden ${
                    mode === m.id
                      ? `${m.color} ${m.borderColor} border-2 bg-opacity-20 shadow-lg`
                      : 'bg-dark-bg-secondary border-dark-border hover:border-accent-orange/50'
                  }`}
                >
                  {/* Background glow effect */}
                  {mode === m.id && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 bg-gradient-to-r from-accent-orange/10 to-transparent -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{m.icon}</span>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-dark-header-text">
                        {m.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400">{m.description}</p>

                  {mode === m.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 pt-4 border-t border-accent-orange/30"
                    >
                      <span className="inline-block px-3 py-1 bg-accent-orange/20 text-accent-orange text-xs font-bold rounded">
                        ✓ Selecionado
                      </span>
                    </motion.div>
                  )}
                </button>
              ))}
            </motion.div>

            {/* Estatísticas do Modo Selecionado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'Tempo Total', value: `${totalTime}min`, icon: '⏱️' },
                { label: 'Arquivos Entrada', value: startFiles, icon: '📥' },
                { label: 'Arquivos Saída', value: endFiles, icon: '📤' },
                { label: 'Taxa de Sucesso', value: `${successRate}%`, icon: '✅' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 text-center hover:border-accent-orange/50 transition-all"
                >
                  <p className="text-2xl mb-2">{stat.icon}</p>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-accent-orange">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Gráfico Dinâmico */}
      <ProcessingFlowChart
        data={currentData}
        title={`Pipeline em Modo ${modes.find((m) => m.id === mode)?.name}`}
        subtitle={`Análise do fluxo de processamento com ${startFiles} arquivos de entrada`}
      />
    </>
  );
}
