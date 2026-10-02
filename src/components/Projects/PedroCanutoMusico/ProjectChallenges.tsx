'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';
import { getProject } from '@/data';

// Desafios vêm da fonte única de dados (src/data/projects).
const challenges = (getProject('pedro-canuto-musico').challenges ?? []).map((c, index) => ({ ...c, id: index + 1 }));

export default function ProjectChallenges() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getDifficultyColor = (difficulty?: string) => {
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

  const getDifficultyLabel = (difficulty?: string) => {
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
            Principais obstáculos encontrados ao aplicar Spring Boot em um projeto real e as
            soluções implementadas
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
