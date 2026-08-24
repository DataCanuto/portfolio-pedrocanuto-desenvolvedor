'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projectsTimeline, ProjectTimelineEntry } from './projectsData';

interface AccordionItemProps {
  project: ProjectTimelineEntry;
  isExpanded: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ project, isExpanded, onToggle }: AccordionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden hover:border-accent-orange/50 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-dark-bg/50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: project.language.color }}
            title={project.language.name}
          />
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-dark-header-text truncate">{project.title}</h3>
            <p className="text-xs text-gray-400">
              {project.language.name} · {project.context}
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-accent-orange" size={22} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-dark-border overflow-hidden"
          >
            <div className="p-5 space-y-4">
              <p className="text-gray-300 leading-relaxed">{project.resume}</p>
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 group/btn"
              >
                Ver Projeto
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ProjectsTimeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const years = Array.from(new Set(projectsTimeline.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <section id="projetos-area" className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Meus <span className="text-accent-orange">Projetos</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-4"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Estudos de caso selecionados, organizados por ano. Clique em um projeto para ver o
            resumo e acessar a página completa.
          </p>
        </motion.div>

        <div className="space-y-10">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-accent-orange">{year}</span>
                <div className="flex-1 h-px bg-dark-border" />
              </div>

              <div className="space-y-3">
                {projectsTimeline
                  .filter((p) => p.year === year)
                  .map((project) => (
                    <AccordionItem
                      key={project.id}
                      project={project}
                      isExpanded={expandedId === project.id}
                      onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
