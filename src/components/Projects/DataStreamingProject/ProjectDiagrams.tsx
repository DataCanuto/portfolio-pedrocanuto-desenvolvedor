'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState<'classes' | 'flow' | 'uml'>(
    'uml'
  );

  const diagrams = [
    {
      id: 'classes',
      name: 'Estrutura de Dados',
      icon: Code2,
      description: 'Relacionamento entre tabelas e classes',
      isImage: true,
      imagePath: '/assets/data-streaming-img/uml_2.png',
    },
    {
      id: 'flow',
      name: 'Fluxo de Processamento',
      icon: GitBranch,
      description: 'Etapas e decisões do pipeline',
      isImage: true,
      imagePath: '/assets/data-streaming-img/File_Discovery_Process.png',
    },
    {
      id: 'uml',
      name: 'Arquitetura do Pipeline',
      icon: Code2,
      description: 'Diagrama completo da arquitetura',
      isImage: true,
      imagePath: '/assets/data-streaming-img/uml.png',
    },
  ];

  const currentDiagram = diagrams.find((d) => d.id === activeDiagram);

  const getCurrentIndex = () => diagrams.findIndex((d) => d.id === activeDiagram);

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % diagrams.length;
    setActiveDiagram(diagrams[nextIndex].id as any);
    scrollToTop();
  };

  const handlePrev = () => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + diagrams.length) % diagrams.length;
    setActiveDiagram(diagrams[prevIndex].id as any);
    scrollToTop();
  };

  const scrollToTop = () => {
    const element = document.querySelector('#diagrams');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="diagrams" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
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
            <span className="text-accent-orange">Arquitetura</span> & Diagramas
          </h2>
          <p className="text-gray-400 text-lg">
            Visualização completa da estrutura e fluxo de dados do projeto
          </p>
        </motion.div>

        {/* Seletor de Diagramas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {diagrams.map((diagram) => {
            const Icon = diagram.icon;
            const isActive = activeDiagram === diagram.id;
            return (
              <button
                key={diagram.id}
                onClick={() => setActiveDiagram(diagram.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                    : 'bg-dark-bg border border-dark-border text-gray-300 hover:border-accent-orange/50'
                }`}
              >
                <Icon size={20} />
                {diagram.name}
              </button>
            );
          })}
        </motion.div>

        {/* Diagram Display */}
        {currentDiagram && (
          <motion.div
            key={activeDiagram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-bg border border-dark-border rounded-xl p-8 overflow-x-auto"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-accent-orange mb-2">
                {currentDiagram.name}
              </h3>
              <p className="text-gray-400">{currentDiagram.description}</p>
            </div>

            {/* Imagem do Diagrama */}
            <div className="bg-dark-bg rounded-lg p-4 overflow-x-auto">
              <div className="flex justify-center relative w-full h-96">
                <Image
                  src={currentDiagram.imagePath}
                  alt={currentDiagram.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Botões de Navegação */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-dark-border">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-6 py-3 bg-dark-bg-secondary border border-accent-orange text-accent-orange rounded-lg font-semibold hover:bg-accent-orange hover:text-black transition-all duration-300 group"
              >
                <ChevronLeft size={20} className="group-hover:translate-x-1 transition-transform" />
                Anterior
              </button>

              <div className="flex gap-2">
                {diagrams.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === getCurrentIndex()
                        ? 'w-8 bg-accent-orange'
                        : 'w-2 bg-dark-border'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 group"
              >
                Próximo
                <ChevronRight size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
