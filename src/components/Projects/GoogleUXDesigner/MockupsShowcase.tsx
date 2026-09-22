'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderKanban,
  Palette,
  Sparkles,
  Workflow,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';

const CASE_STUDY_URL = '/assets/documents/case-studies/flora-hub-case-study.html';

const mockups = [
  {
    id: 'home',
    name: 'Home screen',
    imagePath: '/assets/documents/case-studies/digital-mockups/home-screen.png',
  },
  {
    id: 'camera',
    name: 'Identificação por câmera',
    imagePath: '/assets/documents/case-studies/digital-mockups/identify-camera.png',
  },
  {
    id: 'detail',
    name: 'Detalhe da planta & cuidados',
    imagePath: '/assets/documents/case-studies/digital-mockups/plant-detail.png',
  },
  {
    id: 'feed',
    name: 'Feed da comunidade',
    imagePath: '/assets/documents/case-studies/digital-mockups/community-feed.png',
  },
];

const workflowSteps = [
  {
    id: 'prepare',
    icon: FolderKanban,
    title: 'Preparar o arquivo',
    description:
      'Página e quadros dedicados aos mockups, nomeados por tela, e uma folha de adesivos com os componentes reutilizáveis.',
  },
  {
    id: 'decisions',
    icon: Palette,
    title: 'Decisões visuais',
    description:
      'Tipografia (Poppins + Roboto), regra de cor 60-30-10, botões e ícones do Material Design, contenção e espaço negativo.',
  },
  {
    id: 'refine',
    icon: Sparkles,
    title: 'Refinar',
    description:
      'Princípios de design visual e de Gestalt aplicados para dar ênfase ao selo de segurança e organizar a hierarquia da tela.',
  },
  {
    id: 'connect',
    icon: Workflow,
    title: 'Montar o protótipo',
    description:
      'Telas organizadas na ordem da jornada do usuário, conectadas no painel de protótipo do Figma e compartilhadas com a equipe.',
  },
];

export default function MockupsShowcase() {
  return (
    <section id="mockups" className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Mockups &amp; Protótipo de Alta Fidelidade
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Do wireframe de baixa fidelidade aos mockups finais do Flora Hub, aplicando tipografia,
            cor, componentes e os achados do estudo de usabilidade.
          </p>
        </motion.div>

        {/* Grid de mockups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[9/16]">
                <Image
                  src={mockup.imagePath}
                  alt={mockup.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover cursor-zoom-in"
                  onClick={() => window.open(mockup.imagePath, '_blank')}
                />
              </div>
              <span className="text-center text-sm font-semibold text-dark-header-text bg-dark-bg py-2 px-2">
                {mockup.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Aviso sobre placeholders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 bg-dark-bg-secondary border border-dark-border rounded-lg px-5 py-4 mb-12 text-sm text-gray-400"
        >
          <AlertTriangle size={18} className="text-accent-orange shrink-0 mt-0.5" />
          <p>
            As telas acima são imagens geradas por IA, usadas como placeholder enquanto o arquivo
            Figma do Flora Hub é desenvolvido pela equipe do TCC. Serão substituídas pelos exports
            finais do Figma mantendo os mesmos nomes de arquivo.
          </p>
        </motion.div>

        {/* Fluxo de trabalho no Figma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-accent-orange mb-6">
            Como transformar low-fi em high-fi no Figma
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 relative"
                >
                  <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent-orange text-black font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <Icon size={24} className="text-accent-orange mb-3" />
                  <h4 className="text-dark-header-text font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

          <a
            href={CASE_STUDY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-dark-bg-secondary border border-accent-orange text-accent-orange rounded-lg font-semibold hover:bg-accent-orange hover:text-black transition-all duration-300"
          >
            Ver o guia passo a passo completo
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
