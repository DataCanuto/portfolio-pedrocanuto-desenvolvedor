'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, TrendingUp, Zap } from 'lucide-react';

interface ProjectOverviewProps {
  title?: string;
  description?: string;
  mainGoal?: string;
}

export default function ProjectOverview({
  title = 'Google Data Analytics Capstone',
  description = 'Análise completa de dados de fitness tracking da Bellabeat, integrando dados de 30 usuários de FitBit em um dashboard interativo.',
  mainGoal = 'Explorar, limpar e analisar dados de fitness tracker para compreender padrões de engajamento do usuário e fornecer recomendações baseadas em dados para melhorar a experiência e impulsionar o engajamento na plataforma Bellabeat.',
}: ProjectOverviewProps) {
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

  const stats = [
    {
      label: 'Usuários Analisados',
      value: '30',
      icon: <Users className="text-accent-orange" size={24} />,
    },
    {
      label: 'Dias de Dados',
      value: '30-60',
      icon: <Activity className="text-accent-orange" size={24} />,
    },
    {
      label: 'Dimensões',
      value: '12+',
      icon: <TrendingUp className="text-accent-orange" size={24} />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Título e Descrição */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">{description}</p>
        </motion.div>

        {/* Objetivo Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-orange/10 rounded-lg">
              <Zap className="text-accent-orange" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-header-text mb-3">
                🎯 Objetivo Principal
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">{mainGoal}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-orange/10 rounded-lg">{stat.icon}</div>
                <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
              </div>
              <p className="text-3xl font-bold text-accent-orange">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
