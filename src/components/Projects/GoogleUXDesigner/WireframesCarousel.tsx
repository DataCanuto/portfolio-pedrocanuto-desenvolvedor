'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenLine, Smartphone, Workflow, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const FIGMA_PROTOTYPE_URL =
  'https://www.figma.com/proto/Z9ti5hkQhXKvoyD1NjFLLS/UX-DESIGN---GOOGLE-PROJECT?node-id=20-5&p=f&t=1ghFkNSFQzDJtrt5-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A5&show-proto-sidebar=1';

const stages = [
  {
    id: 'paper',
    name: 'Wireframe de Papel',
    icon: PenLine,
    description:
      'Esboços à mão de todas as telas do Flora Hub — pesquisa por imagem, identificador, login/cadastro, área logada, feed e área de post — para testar a estrutura de navegação antes de qualquer pixel digital.',
    imagePath: '/assets/documents/case-studies/wireframes/wireframe-papel-1.jpg',
  },
  {
    id: 'digital',
    name: 'Wireframe Digital Completo',
    icon: Smartphone,
    description:
      '14 telas digitais traduzindo os esboços em papel em uma interface navegável: onboarding, autenticação, home, identificação de planta, resultado, comunidade e perfil.',
    imagePath: '/assets/documents/case-studies/wireframes/digital-wireframe.png',
  },
  {
    id: 'lofi',
    name: 'Protótipo de Baixa Fidelidade',
    icon: Workflow,
    description:
      'Todas as telas conectadas ponta a ponta no Figma, simulando o fluxo real de identificar uma planta, checar o selo de segurança e explorar a comunidade.',
    imagePath: '/assets/documents/case-studies/wireframes/low-fidelity-prototype.png',
    link: FIGMA_PROTOTYPE_URL,
  },
];

export default function WireframesCarousel() {
  const [activeStage, setActiveStage] = useState<string>('paper');

  const currentStage = stages.find((s) => s.id === activeStage) ?? stages[0];
  const getCurrentIndex = () => stages.findIndex((s) => s.id === activeStage);

  const handleNext = () => {
    const nextIndex = (getCurrentIndex() + 1) % stages.length;
    setActiveStage(stages[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (getCurrentIndex() - 1 + stages.length) % stages.length;
    setActiveStage(stages[prevIndex].id);
  };

  return (
    <section id="wireframes" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Wireframes &amp; Prototipação
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Do papel ao protótipo navegável &mdash; a evolução das telas do Flora Hub em cada etapa da
            prototipação.
          </p>
        </motion.div>

        {/* Seletor de etapas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                    : 'bg-dark-bg border border-dark-border text-gray-300 hover:border-accent-orange/50'
                }`}
              >
                <Icon size={20} />
                {stage.name}
              </button>
            );
          })}
        </motion.div>

        {/* Carrossel */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-accent-orange mb-2">{currentStage.name}</h3>
              <p className="text-gray-400 max-w-2xl">{currentStage.description}</p>
            </div>
            {currentStage.link && (
              <a
                href={currentStage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
              >
                Ver protótipo no Figma
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <div className="bg-dark-bg-secondary rounded-lg p-4">
            <div className="relative w-full h-72 sm:h-96 md:h-[520px]">
              <Image
                src={currentStage.imagePath}
                alt={currentStage.name}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-contain rounded-lg cursor-zoom-in"
                onClick={() => window.open(currentStage.imagePath, '_blank')}
              />
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-8 border-t border-dark-border">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-6 py-3 bg-dark-bg-secondary border border-accent-orange text-accent-orange rounded-lg font-semibold hover:bg-accent-orange hover:text-black transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Anterior
            </button>

            <div className="flex gap-2">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  aria-label={`Ir para ${stage.name}`}
                  onClick={() => setActiveStage(stage.id)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    stage.id === activeStage ? 'w-8 bg-accent-orange' : 'w-2 bg-dark-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 group"
            >
              Próximo
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
