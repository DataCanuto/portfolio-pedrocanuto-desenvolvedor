'use client';

import React from 'react';
import ProjectOverview from '@/components/Projects/PedroCanutoMusico/ProjectOverview';
import ProjectDiagrams from '@/components/Projects/PedroCanutoMusico/ProjectDiagrams';
import ProjectChallenges from '@/components/Projects/PedroCanutoMusico/ProjectChallenges';
import TechStack from '@/components/Projects/PedroCanutoMusico/TechStack';
import AdminAgendaPreview from '@/components/Projects/PedroCanutoMusico/AdminAgendaPreview';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import { Code2, Zap, BookOpen, GraduationCap, CalendarDays } from 'lucide-react';

export default function PedroCanutoMusicoPage() {
  const projectSections = [
    { id: 'overview', label: 'Visão Geral', icon: <BookOpen size={16} /> },
    { id: 'challenges', label: 'Desafios e Soluções', icon: <Zap size={16} /> },
    { id: 'diagrams', label: 'Arquitetura', icon: <Code2 size={16} /> },
    { id: 'stack', label: 'Stack', icon: <Code2 size={16} /> },
    { id: 'admin', label: 'Painel do Admin', icon: <CalendarDays size={16} /> },
    { id: 'skills', label: 'Skills Desenvolvidas', icon: <GraduationCap size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      {/* Project Header */}
      <ProjectHeader
        projectTitle="Pedro Canuto Música"
        sections={projectSections}
        areaSlug="sistemas-cadastro"
        backUrl="/sistemas-cadastro"
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              📋 SISTEMA DE CADASTRO — APLICAÇÃO PRÁTICA DO CURSO
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            Pedro Canuto <span className="text-accent-orange">Música</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Sistema de cadastro de alunos e agenda de aulas de música, construído em Java com
            Spring Boot para aplicar na prática os conhecimentos do curso Técnico em
            Desenvolvimento de Sistemas do SENAI CIMATEC em um problema real do meu dia a dia
            como educador musical.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://github.com/DataCanuto/pedro-canuto-musico"
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

      {/* Visão Geral */}
      <section id="overview">
        <ProjectOverview />
      </section>

      {/* Desafios e Soluções */}
      <section id="challenges">
        <ProjectChallenges />
      </section>

      {/* Arquitetura e Aprendizados */}
      <section id="diagrams">
        <ProjectDiagrams />
      </section>

      {/* Stack Tecnológico */}
      <section id="stack">
        <TechStack />
      </section>

      {/* Preview do Painel do Administrador */}
      <section id="admin">
        <AdminAgendaPreview />
      </section>

      {/* Skills Desenvolvidas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Skills <span className="text-accent-orange">Desenvolvidas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Java (POO)', desc: 'Programação orientada a objetos aplicada' },
              { title: 'Spring Boot', desc: 'Configuração e estrutura de projeto' },
              { title: 'Spring Data JPA', desc: 'Persistência e relacionamentos' },
              { title: 'Spring Security', desc: 'Autenticação e autorização' },
              { title: 'Bean Validation', desc: 'Validação de regras de negócio' },
              { title: 'Arquitetura em Camadas', desc: 'Controller, Service e Repository' },
              { title: 'Modelagem de Banco de Dados', desc: 'Entidades e relacionamentos' },
              { title: 'REST API Design', desc: 'Endpoints para agenda e cadastro' },
              { title: 'Hibernate / ORM', desc: 'Mapeamento objeto-relacional' },
              { title: 'Maven', desc: 'Gerenciamento de build e dependências' },
              { title: 'Debugging & Testes Manuais', desc: 'Validação de fluxos de cadastro' },
              { title: 'Versionamento com Git', desc: 'Controle de código-fonte' },
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
            🤝 Precisa de um <span className="text-accent-orange">Sistema de Cadastro</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Se você tem um processo manual de agendamento ou cadastro que poderia virar um sistema
            web, vamos conversar sobre como aplicar essa mesma abordagem ao seu negócio.
          </p>
          <a
            href="https://github.com/DataCanuto/pedro-canuto-musico"
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
