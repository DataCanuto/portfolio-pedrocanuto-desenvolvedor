'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data';

const { about } = profile;

const tabs = [
  {
    id: 'developer',
    label: 'Desenvolvedor Full-Stack',
    content: about.developer,
  },
  {
    id: 'journey',
    label: 'Músico a Desenvolvedor',
    content: (
      <>
        {about.journey.paragraphs[0]} Clique{' '}
        <a
          href={about.journey.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-orange underline"
        >
          {about.journey.link.label}
        </a>{' '}
        para mais informações.
        {about.journey.paragraphs.slice(1).map((paragraph) => (
          <span key={paragraph}>
            <br />
            <br />
            {paragraph}
          </span>
        ))}
      </>
    ),
  },
  {
    id: 'skills',
    label: 'O Diferencial Humano - Soft Skills',
    content: profile.softSkills.map((s) => `${s.name}: ${s.description}`).join('\n\n'),
  },
  {
    id: 'arsenal',
    label: 'Meu Arsenal Técnico',
    content: about.arsenal.join('\n\n'),
  },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState('developer');

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
