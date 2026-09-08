'use client';

import React from 'react';
import { ProjectOverview, Foundations, UserJourney } from '@/components/Projects/GoogleUXDesigner';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import { Palette, TrendingUp, BookOpen, Compass, ExternalLink } from 'lucide-react';

export default function GoogleUXDesignerPage() {
  const projectSections = [
    { id: 'hero', label: 'Projeto', icon: <Palette size={16} /> },
    { id: 'overview', label: 'Visão Geral', icon: <TrendingUp size={16} /> },
    { id: 'foundations', label: 'Fundamentos', icon: <BookOpen size={16} /> },
    { id: 'user-journey', label: 'Jornada do Usuário', icon: <Compass size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      {/* Project Header */}
      <ProjectHeader
        projectTitle="Google UX Designer"
        sections={projectSections}
        areaSlug="design"
        backUrl="/design"
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              🎨 UX DESIGN & PESQUISA COM USUÁRIOS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            <span className="text-accent-orange">UX Designer</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-accent-orange font-semibold mb-8">
            Google UX Design Professional Certificate
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Fundamentos, métodos e processo de design centrado no usuário — da pesquisa e empatia ao
            case study completo do Flora Hub, app conceitual para amantes de plantas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="/assets/documents/case-studies/flora-hub-case-study.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Ver Case Study Flora Hub
            </a>
            <button
              onClick={() => document.getElementById('foundations')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-dark-bg-secondary border border-accent-orange/50 text-accent-orange font-bold rounded-lg hover:border-accent-orange transition-all duration-300"
            >
              Explorar Fundamentos
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-accent-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview">
        <ProjectOverview />
      </section>

      {/* Foundations */}
      <section id="foundations">
        <Foundations />
      </section>

      {/* User Journey */}
      <section id="user-journey">
        <UserJourney />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
