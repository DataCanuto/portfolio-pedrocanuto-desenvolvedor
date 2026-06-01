'use client';

import React from 'react';
import {
  ProjectOverview,
  ProjectDiagrams,
  TechStack,
  Dashboard,
} from '@/components/Projects/GoogleDataAnalyticsCapsone';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import { BarChart3, Database, Code2, Zap, Users, BookOpen, Activity, TrendingUp } from 'lucide-react';

export default function GoogleDataAnalyticsCapstonePage() {
  const projectSections = [
    { id: 'hero', label: 'Projeto', icon: <BarChart3 size={16} /> },
    { id: 'overview', label: 'Visão Geral', icon: <TrendingUp size={16} /> },
    { id: 'dashboard', label: 'Dashboard', icon: <Activity size={16} /> },
    { id: 'diagrams', label: 'Fluxo de Análise', icon: <Zap size={16} /> },
    { id: 'stack', label: 'Stack Tecnológico', icon: <Code2 size={16} /> },
    { id: 'insights', label: 'Insights Principais', icon: <BookOpen size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      {/* Project Header */}
      <ProjectHeader
        projectTitle="Google Data Analytics Capstone"
        sections={projectSections}
        areaSlug="dashboards"
        backUrl="/dashboards"
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              📊 ANÁLISE DE DADOS & DASHBOARD
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            <span className="text-accent-orange">Bella Beat</span> Fitness Track
          </h1>

          <h2 className="text-2xl md:text-3xl text-accent-orange font-semibold mb-8">
            Google Data Analytics Specialization Capstone
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Dashboard interativo com análise completa de dados de fitness tracking de 30 usuários FitBit, insights baseados em dados e recomendações para estratégias de gamificação e engajamento.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://github.com/DataCanuto/GoogleDataAnalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 flex items-center gap-2"
            >
              <Code2 size={20} />
              Ver Análise no GitHub
            </a>
            <button
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-dark-bg-secondary border border-accent-orange/50 text-accent-orange font-bold rounded-lg hover:border-accent-orange transition-all duration-300"
            >
              Explorar Dashboard
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

      {/* Dashboard Principal */}
      <section id="dashboard">
        <Dashboard
          title="Bella Beat Fitness Track - Dashboard"
          subtitle="Análise de Dados do Google Data Analytics Capstone"
        />
      </section>

      {/* Fluxo de Análise */}
      <section id="diagrams">
        <ProjectDiagrams />
      </section>



      {/* Stack Tecnológico */}
      <section id="stack">
        <TechStack />
      </section>

      {/* Insights Principais */}
      <section id="insights" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            🎯 Insights <span className="text-accent-orange">Principais</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Insight 1 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="text-blue-400" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark-header-text mb-2">
                    Correlação Forte: Passos × Calorias
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A análise revelou uma correlação positiva forte entre TotalSteps e Calorias queimadas, confirmando que caminhada e corrida são os principais drivers de despesa calórica na população estudada.
              </p>
            </div>

            {/* Insight 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Activity className="text-purple-400" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark-header-text mb-2">
                    Picos de Atividade Consistentes
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Padrões horários consistentes mostram picos de atividade no final da tarde e noite (pós-trabalho), com menor atividade nas primeiras horas da manhã. Ideal para estratégias de gamificação.
              </p>
            </div>

            {/* Insight 3 */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Database className="text-green-400" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark-header-text mb-2">
                    Dados Horários Mais Completos
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                O dataset horário apresenta dados mais completos (60+ dias por usuário) comparado aos dados diários (45 dias), fornecendo uma visão mais confiável e granular do comportamento dos usuários.
              </p>
            </div>

            {/* Insight 4 */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <BarChart3 className="text-orange-400" size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark-header-text mb-2">
                    Distribuição Semanal Consistente
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A atividade é distribuída de forma consistente ao longo da semana com menos outliers extremos, indicando comportamento regular dos usuários e oportunidades para implementação de metas semanais.
              </p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-accent-orange mb-6">💡 Recomendações para Ação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-orange/20 rounded-lg flex items-center justify-center font-bold text-accent-orange">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-dark-header-text mb-2">
                    Sistema de Reconhecimento Mensal
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Implementar mensagens automáticas informando aos usuários seu percentil em TotalSteps/Calorias na comunidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-orange/20 rounded-lg flex items-center justify-center font-bold text-accent-orange">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-dark-header-text mb-2">
                    Gamificação Estratégica
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Criar metas semanais baseadas nos picos de atividade observados com sistema de recompensas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-orange/20 rounded-lg flex items-center justify-center font-bold text-accent-orange">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-dark-header-text mb-2">
                    Notificações Inteligentes
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Enviar push notifications durante horários de pico para motivar atividade e maximizar engajamento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-orange/20 rounded-lg flex items-center justify-center font-bold text-accent-orange">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-dark-header-text mb-2">
                    Detecção de Churn com ML
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Usar machine learning para identificar usuários em risco permitindo intervenção proativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
