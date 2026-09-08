'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Rocket, Briefcase } from 'lucide-react';

export default function ProjectOverview() {
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

  const contexts = [
    {
      icon: <Building2 className="text-accent-orange" size={24} />,
      title: 'Big Techs',
      description: 'Processos de design centrados no usuário em escala, da pesquisa ao teste de usabilidade.',
    },
    {
      icon: <Rocket className="text-accent-orange" size={24} />,
      title: 'Startups',
      description: 'Validação rápida de hipóteses com wireframes, protótipos e ciclos curtos de aprendizado.',
    },
    {
      icon: <Briefcase className="text-accent-orange" size={24} />,
      title: 'Freelancer',
      description: 'Condução independente de projetos de ponta a ponta, do briefing à entrega ao cliente.',
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
            Visão Geral
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Habilidades de UX Design aplicáveis a diferentes contextos de trabalho — de grandes empresas
            de tecnologia a startups e projetos freelancer — sempre com foco na experiência do usuário.
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
              <Users className="text-accent-orange" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-header-text mb-3">
                🎯 Foco no Usuário
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Certificação Google UX Design (Coursera), aplicando o processo de design centrado no
                usuário — pesquisa, definição de personas, ideação, prototipação e teste de usabilidade —
                para transformar necessidades reais em soluções digitais utilizáveis e acessíveis.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contexts.map((ctx) => (
            <motion.div
              key={ctx.title}
              variants={itemVariants}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-orange/10 rounded-lg">{ctx.icon}</div>
                <p className="text-dark-header-text text-base font-bold">{ctx.title}</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{ctx.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
