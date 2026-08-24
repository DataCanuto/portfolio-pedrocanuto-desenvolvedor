'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Mic, Wallet } from 'lucide-react';

export default function ProjectOverview() {
  const stats = [
    {
      label: 'Camadas DDD',
      value: '3',
      icon: <Layers className="text-accent-orange" size={24} />,
    },
    {
      label: 'Motor de IA',
      value: 'Spring AI 2.0.0-M4',
      icon: <Sparkles className="text-accent-orange" size={24} />,
    },
    {
      label: 'Categorias de Transação',
      value: '8',
      icon: <Wallet className="text-accent-orange" size={24} />,
    },
  ];

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
            Spring Boot AI <span className="text-accent-orange">Budgeting</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            API de orçamento pessoal construída como projeto final do módulo de Spring AI da
            certificação Spring Boot (DIO). Mantém a mesma arquitetura em camadas usada ao longo do
            treinamento e adiciona capacidades de IA sem contornar os limites de domínio e casos de uso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-orange/10 rounded-lg">
              <Mic className="text-accent-orange" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-header-text mb-3">
                🎯 Objetivo Principal
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Processar comandos de voz para criar e consultar transações financeiras: o cliente
                envia um áudio, ele é transcrito em texto, o modelo de IA seleciona a ferramenta
                (caso de uso) correta da aplicação, o caso de uso persiste ou consulta as transações,
                e a resposta final é convertida de volta em áudio.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-orange/10 rounded-lg">{stat.icon}</div>
                <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
              </div>
              <p className="text-2xl font-bold text-accent-orange">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
