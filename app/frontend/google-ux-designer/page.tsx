'use client';

import React from 'react';
import {
  ProjectOverview,
  Foundations,
  ResearchPlan,
  UserJourney,
  WireframesCarousel,
  MockupsShowcase,
} from '@/components/Projects/GoogleUXDesigner';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { ProjectCaseHero } from '@/components/Projects/ProjectCaseHero';
import { Footer } from '@/components';
import { getProject } from '@/data';
import {
  Palette,
  TrendingUp,
  BookOpen,
  ClipboardList,
  Compass,
  Layers,
  Sparkles,
} from 'lucide-react';

const project = getProject('google-ux-designer');

export default function GoogleUXDesignerPage() {
  const projectSections = [
    { id: 'hero', label: 'Projeto', icon: <Palette size={16} /> },
    { id: 'overview', label: 'Visão Geral', icon: <TrendingUp size={16} /> },
    { id: 'foundations', label: 'Fundamentos', icon: <BookOpen size={16} /> },
    { id: 'research', label: 'Pesquisa', icon: <ClipboardList size={16} /> },
    { id: 'user-journey', label: 'Jornada do Usuário', icon: <Compass size={16} /> },
    { id: 'wireframes', label: 'Wireframes', icon: <Layers size={16} /> },
    { id: 'mockups', label: 'Mockups', icon: <Sparkles size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      {/* Project Header */}
      <ProjectHeader
        projectTitle={project.name}
        sections={projectSections}
        areaSlug="frontend"
        backUrl="/frontend"
      />

      <ProjectCaseHero project={project} detailsId="overview" />

      {/* Overview */}
      <section id="overview">
        <ProjectOverview />
      </section>

      {/* Foundations */}
      <section id="foundations">
        <Foundations />
      </section>

      {/* Research Plan */}
      <ResearchPlan />

      {/* User Journey */}
      <section id="user-journey">
        <UserJourney />
      </section>

      {/* Wireframes & Prototyping */}
      <WireframesCarousel />

      {/* Mockups & High-Fidelity Prototype */}
      <MockupsShowcase />

      {/* Footer */}
      <Footer />
    </main>
  );
}
