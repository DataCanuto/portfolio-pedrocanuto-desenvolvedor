'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  solution: string;
  impact: string;
  difficulty: 'low' | 'medium' | 'high';
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Processamento de PDFs Escaneados',
    description:
      'Muitos documentos eram imagens de PDF (scans), impossibilitando extração de texto direta. Necessário implementar OCR para reconhecer caracteres em imagens.',
    solution:
      'Integração com Tesseract OCR com configuração otimizada para documentos financeiros em português. Implementação de pré-processamento de imagens com Pillow para aumentar acurácia.',
    impact:
      'Capacidade de processar 100% dos documentos, incluindo scans antigos de baixa qualidade.',
    difficulty: 'high',
  },
  {
    id: 2,
    title: 'Normalização de Nomes de Clientes',
    description:
      'Nomes inconsistentes entre fontes diferentes: abreviações, prefixos (Sr., Sra.), sobrenomes em diferentes ordens. Dificultava matching cross-referência.',
    solution:
      'Desenvolvimento de algoritmo customizado de processamento de nomes com regras específicas para nomes brasileiros. Remoção de prefixos, tratamento de casos especiais (herança, empresa).',
    impact:
      'Redução de 95% em inconsistências de nomes, melhorando precisão do matching de clientes.',
    difficulty: 'medium',
  },
  {
    id: 3,
    title: 'Extração Precisa de Datas em Português',
    description:
      'Variações no formato de datas brasileiras (dd/mm/yyyy), diferentes labels e formatos de texto. Regex simples falhava em casos edge.',
    solution:
      'Implementação de regex robusto com múltiplos padrões e tratamento de exceções. Validação com biblioteca `dateutil` para garantir datas válidas.',
    impact:
      'Taxa de sucesso de 99% na extração de datas, eliminando erros de parsing.',
    difficulty: 'medium',
  },
  {
    id: 4,
    title: 'Consolidação de Múltiplos Documentos por Cliente',
    description:
      'Clientes possuem múltiplas NFs, Prestações e Planilhas. Full Outer Join complexo para manter integridade de dados sem perder informações.',
    solution:
      'Implementação de pandas merge com chaves compostas e validação pós-merge. Estrutura de dados com listas para armazenar múltiplas origens.',
    impact:
      'Consolidação perfeita de dados com 100% de integridade, documentação de clientes com arquivos faltantes.',
    difficulty: 'high',
  },
  {
    id: 5,
    title: 'Performance com Grandes Volumes',
    description:
      'Pipeline processando centenas de arquivos PDF. Operações de file I/O e OCR são lentas. Necessidade de otimização para execução eficiente.',
    solution:
      'Implementação de processamento em chunks, cache de resultados OCR, e otimização de regex. Uso de pandas operations vetorizadas em vez de loops.',
    impact:
      'Redução de 60% no tempo de processamento mantendo qualidade dos resultados.',
    difficulty: 'high',
  },
  {
    id: 6,
    title: 'Validação e Relatório de Qualidade',
    description:
      'Necessidade de identificar documentos faltantes, duplicatas e inconsistências. Rastreamento de qualidade crítico para análise posterior.',
    solution:
      'Desenvolvimento de sistema de validação multi-camadas com métricas de qualidade. Geração automática de relatório de arquivos faltantes em Excel.',
    impact:
      'Visibilidade total da qualidade dos dados com documentação de gaps e inconsistências.',
    difficulty: 'medium',
  },
];

interface ProjectChallengesProps {
  title?: string;
}

export default function ProjectChallenges({ title = 'Desafios & Soluções' }: ProjectChallengesProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    const labels = { low: 'Baixa', medium: 'Média', high: 'Alta' };
    return labels[difficulty as keyof typeof labels] || difficulty;
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
            🛠️ <span className="text-accent-orange">Desafios</span> & Soluções
          </h2>
          <p className="text-gray-400 text-lg">
            Principais obstáculos encontrados durante o desenvolvimento e as soluções implementadas
          </p>
        </motion.div>

        {/* Challenges List */}
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden hover:border-accent-orange/50 transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedId(expandedId === challenge.id ? null : challenge.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-dark-bg/50 transition-colors"
              >
                <div className="flex items-start gap-4 text-left flex-1">
                  <div className="p-3 bg-accent-orange/10 rounded-lg flex-shrink-0 mt-1">
                    <AlertCircle className="text-accent-orange" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-header-text mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{challenge.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(challenge.difficulty)}`}
                  >
                    {getDifficultyLabel(challenge.difficulty)}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedId === challenge.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-accent-orange" size={24} />
                  </motion.div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === challenge.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-dark-border overflow-hidden"
                  >
                    <div className="p-6 space-y-6">
                      {/* Descrição Completa */}
                      <div>
                        <h4 className="text-lg font-bold text-dark-header-text mb-2 flex items-center gap-2">
                          <AlertCircle className="text-red-400" size={20} />
                          Problema
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                      </div>

                      {/* Solução */}
                      <div>
                        <h4 className="text-lg font-bold text-dark-header-text mb-2 flex items-center gap-2">
                          <CheckCircle className="text-green-400" size={20} />
                          Solução Implementada
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                      </div>

                      {/* Impacto */}
                      <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-accent-orange mb-2">📊 Impacto</h4>
                        <p className="text-gray-300">{challenge.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-orange mb-2">
              {challenges.filter((c) => c.difficulty === 'high').length}
            </div>
            <p className="text-gray-400">Desafios Complexos (Alta Dificuldade)</p>
          </div>
          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-orange mb-2">
              {challenges.filter((c) => c.difficulty === 'medium').length}
            </div>
            <p className="text-gray-400">Desafios Moderados (Média Dificuldade)</p>
          </div>
          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-orange mb-2">100%</div>
            <p className="text-gray-400">Taxa de Resolução</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
