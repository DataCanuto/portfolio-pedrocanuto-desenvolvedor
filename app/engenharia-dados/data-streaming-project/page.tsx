'use client';

import React from 'react';
import ProjectDiagrams from '@/components/Projects/DataStreamingProject/ProjectDiagrams';
import ProjectChallenges from '@/components/Projects/DataStreamingProject/ProjectChallenges';
import TechStack from '@/components/Projects/DataStreamingProject/TechStack';
import ClientInfo from '@/components/Projects/DataStreamingProject/ClientInfo';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import { Code2, Database, Zap, Users, BookOpen } from 'lucide-react';

export default function DataStreamingProjectPage() {
  const projectSections = [
    { id: 'objetivo', label: 'Objetivo', icon: <BookOpen size={16} /> },
    { id: 'tipos', label: 'Tipos de Documentos', icon: <Database size={16} /> },
    { id: 'challenges', label: 'Desafios e Soluções', icon: <Zap size={16} /> },
    { id: 'diagrams', label: 'Arquitetura', icon: <Code2 size={16} /> },
    { id: 'stack', label: 'Stack', icon: <Code2 size={16} /> },
    { id: 'client', label: 'Empresa Contratante', icon: <Users size={16} /> },
    { id: 'skills', label: 'Skills Desenvolvidas', icon: <BookOpen size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      {/* Project Header */}
      <ProjectHeader
        projectTitle="Data Streaming Pipeline"
        sections={projectSections}
        areaSlug="engenharia-dados"
        backUrl="/engenharia-dados"
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              📊 PROJETO DE ENGENHARIA DE DADOS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            <span className="text-accent-orange">PDF</span> Data Extraction Pipeline
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Pipeline automatizado para extração, consolidação e análise de dados de múltiplos tipos de documentos PDF com integração OCR
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://github.com/DataCanuto/data-streaming-project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 flex items-center gap-2"
            >
              <Code2 size={20} />
              Ver no GitHub
            </a>
            <button
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-dark-bg-secondary border border-accent-orange/50 text-accent-orange font-bold rounded-lg hover:border-accent-orange transition-all duration-300"
            >
              Saiba Mais
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

      {/* Objetivo Principal */}
      <section id="objetivo" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-8">
            🎯 <span className="text-accent-orange">Objetivo Principal</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Automatizar a extração e consolidação de dados de documentos PDF (NFs, Planilhas, Prestações) com suporte para PDFs escaneados via OCR, gerando relatórios estruturados e consolidados para análise.
          </p>
        </div>
      </section>

      {/* Desafios e Soluções */}
      <section id="challenges">
        <ProjectChallenges />
      </section>

      {/* Arquitetura e Diagramas */}
      <section id="diagrams">
        <ProjectDiagrams />
      </section>

      {/* Stack Tecnológico */}
      <section id="stack">
        <TechStack />
      </section>

      {/* Empresa Contratante */}
      <section id="client">
        <ClientInfo
          clientName="ANDDIAP"
          clientFullName="Associação Nacional de Defesa do Direito dos Idosos, Aposentados e Pencionistas"
          branch="Filial Bahia"
          website="https://anddiap.org.br/"
          contact="Corretor Saul Freitas Figueiredo"
          description="Organização dedicada à defesa dos direitos e interesses de idosos, aposentados e pensionistas no Brasil, atuando em várias áreas como advocacy, assistência social e educação."
        />
      </section>

      {/* Skills Desenvolvidas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Skills <span className="text-accent-orange">Desenvolvidas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Data Engineering', desc: 'ETL Pipeline Design' },
              { title: 'Python Programming', desc: 'Advanced scripting' },
              { title: 'OCR & Image Processing', desc: 'Tesseract integration' },
              { title: 'PDF Manipulation', desc: 'PyMuPDF & PyPDF2' },
              { title: 'Data Consolidation', desc: 'Merging & Matching' },
              { title: 'Regex & Pattern Matching', desc: 'Text extraction' },
              { title: 'Pandas & Data Analysis', desc: 'Data manipulation' },
              { title: 'Error Handling & Logging', desc: 'Robust processing' },
              { title: 'File System Operations', desc: 'Batch processing' },
              { title: 'Automation & Scripting', desc: 'Process automation' },
              { title: 'Data Quality Management', desc: 'Validation & metrics' },
              { title: 'Report Generation', desc: 'CSV/Excel export' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-dark-bg border border-dark-border rounded-lg p-6 hover:border-accent-orange/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-accent-orange group-hover:text-accent-orange/80 transition-colors mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-header-text mb-6">
            🤝 Interessado em <span className="text-accent-orange">Soluções</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Se você possui documentos para processar ou precisa de um pipeline customizado, entre em contato para uma consulta.
          </p>
          <a
            href="https://github.com/DataCanuto/data-streaming-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Explorar Código Completo no GitHub
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
