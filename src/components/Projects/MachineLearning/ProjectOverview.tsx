'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderTree, FileText, GraduationCap, Award } from 'lucide-react';

export default function ProjectOverview() {
  const stats = [
    {
      label: 'Pastas Técnicas',
      value: '3',
      icon: <FolderTree className="text-accent-orange" size={24} />,
    },
    {
      label: 'Notebooks',
      value: '20',
      icon: <FileText className="text-accent-orange" size={24} />,
    },
    {
      label: 'Carga Horária',
      value: '200h',
      icon: <GraduationCap className="text-accent-orange" size={24} />,
    },
    {
      label: 'Certificação',
      value: 'SENAI BA',
      icon: <Award className="text-accent-orange" size={24} />,
    },
  ];

  const highlightLibs = [
    'pandas',
    'numpy',
    'matplotlib',
    'seaborn',
    'scikit-learn',
    'scipy',
    'xgboost',
    'opencv-python',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">Machine Learning</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Notebooks Jupyter produzidos durante o curso profissionalizante &quot;IA na Indústria
            4.0&quot; do SENAI Bahia: uma progressão prática em Python, da limpeza de dados aos
            algoritmos de machine learning e uma primeira incursão em visão computacional. Os
            projetos não dependem uns dos outros, mas documentam a evolução do domínio das
            ferramentas ao longo do curso.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
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
              <p className="text-2xl font-bold text-accent-orange">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8"
        >
          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
            Bibliotecas em Destaque no Repositório
          </p>
          <div className="flex flex-wrap gap-2">
            {highlightLibs.map((lib) => (
              <span
                key={lib}
                className="text-sm px-3 py-1 bg-accent-orange/10 text-accent-orange border border-accent-orange/30 rounded-full font-semibold font-mono"
              >
                {lib}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
