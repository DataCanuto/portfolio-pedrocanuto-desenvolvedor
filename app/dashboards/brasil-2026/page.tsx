'use client';

import React from 'react';
import { ExternalLink, LayoutDashboard, ListChecks, Vote } from 'lucide-react';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { ProjectCaseHero } from '@/components/Projects/ProjectCaseHero';
import { Footer } from '@/components';
import { getProject } from '@/data';

const project = getProject('brasil-2026-dados-democracia');

export default function Brasil2026Page() {
  const projectSections = [
    { id: 'hero', label: 'Projeto', icon: <Vote size={16} /> },
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { id: 'features', label: 'O que o dashboard cobre', icon: <ListChecks size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      <ProjectHeader
        projectTitle={project.name}
        sections={projectSections}
        areaSlug="dashboards"
        backUrl="/dashboards"
      />

      <ProjectCaseHero project={project} detailsId="dashboard" />

      {/* Dashboard incorporado */}
      <section id="dashboard" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text">
              📊 <span className="text-accent-orange">Dashboard</span>
            </h2>
            <a
              href={project.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-orange font-semibold hover:underline"
            >
              <ExternalLink size={18} />
              Abrir em tela cheia
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-dark-border bg-white">
            <iframe
              src={project.deployment}
              title={project.name}
              loading="lazy"
              className="w-full h-[80vh] min-h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="features" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-10">
            O que o dashboard <span className="text-accent-orange">cobre</span>
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.features?.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 bg-dark-bg-secondary border border-dark-border rounded-xl p-5 text-gray-300 leading-relaxed"
              >
                <span className="text-accent-orange" aria-hidden>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
