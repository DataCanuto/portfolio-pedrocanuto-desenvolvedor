'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'journey',
    label: 'De Orquestrar Sons a Orquestrar Dados',
    content: `Minha trajetória profissional não é convencional, e é exatamente isso que considero minha maior força. Construí minha base como Arte-educador, educador musical bilíngue e Musicoterapeuta, trabalhando com desenvolvimento humano. 

Hoje, como estudante no SENAI CIMATEC, trago essa bagagem para a tecnologia. Aprender novas linguagens ou arquitetar bancos de dados exige o mesmo que um instrumento musical: foco, prática, lógica e a capacidade de conectar elementos para criar algo em harmonia.`,
  },
  {
    id: 'skills',
    label: 'O Diferencial Humano - Soft Skills',
    content: `Empatia e Foco no Usuário (User-Centric): escuta ativa para entender necessidades reais.

Comunicação Clara: traduzir conceitos técnicos para diversos públicos.

Resolução Criativa: visão fora da caixa para problemas difíceis.

Aprender a Aprender: agilidade para dominar novas tecnologias rapidamente.`,
  },
  {
    id: 'arsenal',
    label: 'Meu Arsenal Técnico',
    content: `Linguagens: Python, Java, C++, UML.

Dados: SQL, ETL, Matplotlib, Seaborn.

Negócios: Excel Avançado, Dashboards.

Idiomas: Inglês Fluente.`,
  },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Sobre <span className="text-accent-orange">Mim</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-12"></div>
        </motion.div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent-orange text-white'
                    : 'bg-dark-header-btn text-dark-header-text hover:border-accent-orange border border-dark-border'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-bg-secondary p-8 rounded-lg border border-dark-border"
            >
              <p className="text-dark-header-text text-lg leading-relaxed whitespace-pre-line">
                {tabs.find((t) => t.id === activeTab)?.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
