'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter, DownloadCloud } from 'lucide-react';
import DashboardMetrics from './DashboardMetrics';
import ChartsGrid from './ChartsGrid';

interface DashboardProps {
  title?: string;
  subtitle?: string;
}

export default function Dashboard({
  title = 'Bella Beat Fitness Track - Dashboard',
  subtitle = 'Análise de Dados do Google Data Analytics Capstone',
}: DashboardProps) {
  const [timeFrame, setTimeFrame] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const timeFrameLabels = {
    daily: 'Análise Diária',
    weekly: 'Análise Semanal',
    monthly: 'Análise Mensal',
  };

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-2">
            <span className="text-accent-orange">📊</span> {title}
          </h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </motion.div>

        {/* Controls */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-8 bg-dark-bg-secondary border border-dark-border rounded-xl p-6"
        >
          {/* Time Frame Selector */}
          <motion.div variants={itemVariants} className="flex-1">
            <label className="block text-sm font-semibold text-gray-400 mb-3">
              <Calendar className="inline mr-2" size={16} />
              Período de Análise
            </label>
            <div className="flex gap-3">
              {(Object.keys(timeFrameLabels) as Array<keyof typeof timeFrameLabels>).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeFrame(tf)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    timeFrame === tf
                      ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                      : 'bg-dark-bg border border-dark-border text-gray-400 hover:border-accent-orange'
                  }`}
                >
                  {timeFrameLabels[tf]}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex gap-3 items-end">
            <button className="flex items-center gap-2 px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-gray-400 hover:border-accent-orange hover:text-accent-orange transition-all duration-300">
              <Filter size={18} />
              Filtrar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-lg text-accent-orange hover:bg-accent-orange hover:text-black transition-all duration-300 font-semibold">
              <DownloadCloud size={18} />
              Exportar
            </button>
          </motion.div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <DashboardMetrics timeFrame={timeFrame} />
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-dark-header-text mb-8">
            <span className="text-accent-orange">📊</span> Análise Visual dos Dados
          </h3>
          <ChartsGrid timeFrame={timeFrame} />
        </motion.div>

        {/* Insights Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-dark-header-text mb-3">📈 Tendências</h3>
            <p className="text-gray-300 text-sm">
              Análise de tendências ao longo do tempo mostra aumento consistente em atividade com picos no final da tarde.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-dark-header-text mb-3">🎯 Objetivos</h3>
            <p className="text-gray-300 text-sm">
              Definir metas personalizadas baseadas em padrões históricos para melhorar engajamento e motivação.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-dark-header-text mb-3">🏆 Comparação</h3>
            <p className="text-gray-300 text-sm">
              Comparar seu desempenho com a base de usuários para motivação e gamificação personalizada.
            </p>
          </motion.div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-accent-orange/10 border border-accent-orange/30 rounded-xl p-6"
        >
          <p className="text-gray-300 text-sm">
            <span className="font-bold text-accent-orange">💡 Nota:</span> Estes dados são baseados na análise
            do Capstone do Google Data Analytics utilizando dados reais de 30 usuários de FitBit. As métricas mostradas
            são agregações e cálculos estatísticos dos conjuntos de dados disponíveis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
