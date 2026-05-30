'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, FileText, BarChart3 } from 'lucide-react';

interface ProjectOverviewProps {
  title: string;
  description: string;
  mainGoal: string;
  keyFeatures: string[];
  stats: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
  }>;
}

export default function ProjectOverview({
  title,
  description,
  mainGoal,
  keyFeatures,
  stats,
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
            <span className="text-accent-orange">Visão</span> Geral do Projeto
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
              <BarChart3 className="text-accent-orange" size={28} />
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-orange/10 rounded-lg text-accent-orange">
                  {stat.icon}
                </div>
                <h4 className="text-gray-300 font-medium">{stat.label}</h4>
              </div>
              <p className="text-3xl font-bold text-accent-orange">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Recursos Principais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-6">
            ✨ Recursos <span className="text-accent-orange">Principais</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-dark-bg-secondary border border-dark-border rounded-lg hover:border-accent-orange/50 transition-all duration-300"
              >
                <ArrowRight className="text-accent-orange flex-shrink-0" size={20} />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
