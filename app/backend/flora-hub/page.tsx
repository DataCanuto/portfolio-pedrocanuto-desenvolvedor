'use client';

import Link from 'next/link';
import ProjectOverview from '@/components/Projects/FloraHubBackend/ProjectOverview';
import ProjectDiagrams from '@/components/Projects/FloraHubBackend/ProjectDiagrams';
import AppSimulation from '@/components/Projects/FloraHubBackend/AppSimulation';
import TechStack from '@/components/Projects/FloraHubBackend/TechStack';
import Endpoints from '@/components/Projects/FloraHubBackend/Endpoints';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import {
  BookOpen,
  Layers,
  Smartphone,
  Code2,
  Wrench,
  GitBranch,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

export default function FloraHubBackendPage() {
  const projectSections = [
    { id: 'overview', label: 'Visão Geral', icon: <BookOpen size={16} /> },
    { id: 'architecture', label: 'Arquitetura & Regras', icon: <Layers size={16} /> },
    { id: 'simulation', label: 'Simulação', icon: <Smartphone size={16} /> },
    { id: 'foundation', label: 'Base: Budgeting', icon: <GitBranch size={16} /> },
    { id: 'stack', label: 'Stack', icon: <Code2 size={16} /> },
    { id: 'endpoints', label: 'API', icon: <Wrench size={16} /> },
    { id: 'skills', label: 'Skills Desenvolvidas', icon: <GraduationCap size={16} /> },
  ];

  const evolution = [
    {
      topic: 'Integração com IA',
      budgeting: 'ChatClient com tool calling: o modelo escolhe qual caso de uso executar',
      florahub: 'ChatClient multimodal: a imagem vai como Media junto ao prompt',
    },
    {
      topic: 'Saída do modelo',
      budgeting: 'Texto convertido em áudio (TTS) como resposta final',
      florahub: 'JSON tipado via .entity(Record.class), persistido e usado pelas regras',
    },
    {
      topic: 'Onde ficam as decisões',
      budgeting: 'Casos de uso de domínio expostos como @Tool',
      florahub: 'Motor de regras em Java: a IA fornece dados, o backend decide',
    },
    {
      topic: 'Integrações externas',
      budgeting: 'OpenAI (chat, Whisper, TTS)',
      florahub: 'OpenAI + OpenWeather, com cache e degradação controlada',
    },
    {
      topic: 'Persistência',
      budgeting: 'MySQL com Docker Compose',
      florahub: 'PostgreSQL com migrations Flyway',
    },
  ];

  return (
    <main className="w-full bg-dark-bg">
      <ProjectHeader
        projectTitle="Flora Hub Backend"
        sections={projectSections}
        areaSlug="backend"
        backUrl="/backend"
      />

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              🌿 SPRING AI + OPENAI — BACKEND COM CHAMADAS DE IA
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            Flora Hub <span className="text-accent-orange">Backend</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            API em Java com Spring Boot e Spring AI que recebe a foto de uma planta, usa o GPT-4o
            para identificá-la e cruza os cuidados ideais da espécie com o clima local da
            OpenWeather para gerar recomendações.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-10 text-sm md:text-base">
            {['Request: imagem', 'Backend: regras de negócio', 'Response: gerada pelo GPT'].map(
              (step, idx, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-dark-bg-secondary border border-dark-border rounded-lg text-gray-200 font-semibold">
                    {step}
                  </span>
                  {idx < arr.length - 1 && <ArrowRight className="text-accent-orange" size={18} />}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
            >
              Saiba Mais
            </button>
            <Link
              href="/frontend/google-ux-designer"
              className="px-8 py-4 bg-dark-bg-secondary border border-accent-orange/50 text-accent-orange font-bold rounded-lg hover:border-accent-orange transition-all duration-300"
            >
              Ver Case Study de UX
            </Link>
          </div>

          <div className="flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section id="overview">
        <ProjectOverview />
      </section>

      {/* Arquitetura & Regras */}
      <section id="architecture">
        <ProjectDiagrams />
      </section>

      {/* Simulação */}
      <section id="simulation">
        <AppSimulation />
      </section>

      {/* Base: Spring Boot AI Budgeting */}
      <section id="foundation" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <GitBranch className="inline-block mb-2 text-accent-orange mr-2" size={36} />
            Base: <span className="text-accent-orange">Spring Boot AI Budgeting</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mb-10">
            O Flora Hub parte do que aprendi no projeto final da certificação Spring Boot da DIO:
            configurar o Spring AI, usar o <code className="text-accent-orange">ChatClient</code>,
            manter a chave da OpenAI fora do código e tratar a IA como mais uma dependência da
            arquitetura, não como o centro dela. A diferença está no tipo de entrada e em quem
            toma as decisões.
          </p>

          <div className="overflow-x-auto rounded-xl border border-dark-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-dark-bg">
                <tr>
                  <th className="p-4 text-gray-400 font-semibold">Aspecto</th>
                  <th className="p-4 text-gray-400 font-semibold">Budgeting (DIO)</th>
                  <th className="p-4 text-accent-orange font-semibold">Flora Hub</th>
                </tr>
              </thead>
              <tbody>
                {evolution.map((row) => (
                  <tr key={row.topic} className="border-t border-dark-border align-top">
                    <td className="p-4 font-bold text-dark-header-text whitespace-nowrap">{row.topic}</td>
                    <td className="p-4 text-gray-400">{row.budgeting}</td>
                    <td className="p-4 text-gray-200">{row.florahub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href="/budgetting"
            className="inline-flex items-center gap-2 mt-6 text-accent-orange font-semibold hover:underline"
          >
            Ver o projeto Spring Boot AI Budgeting
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section id="stack">
        <TechStack />
      </section>

      {/* API */}
      <section id="endpoints">
        <Endpoints />
      </section>

      {/* Skills Desenvolvidas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Skills <span className="text-accent-orange">Desenvolvidas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Spring AI (ChatClient)', desc: 'Chamadas ao GPT-4o integradas ao fluxo do backend' },
              { title: 'IA Multimodal', desc: 'Envio de imagem como Media junto ao prompt' },
              { title: 'Saída Estruturada', desc: 'Respostas da IA mapeadas direto para records Java' },
              { title: 'Engenharia de Prompt', desc: 'Prompt de sistema com confiança calibrada' },
              { title: 'Motor de Regras (Strategy)', desc: 'Regras independentes injetadas como lista' },
              { title: 'Integração com APIs Externas', desc: 'OpenWeather com timeout, cache e fallback' },
              { title: 'Segurança de Entrada', desc: 'Proteção contra SSRF e validação de imagens' },
              { title: 'PostgreSQL + Flyway', desc: 'Schema versionado em 7 migrations' },
              { title: 'Cache no Banco', desc: 'Espécies e clima reaproveitados entre análises' },
              { title: 'Testes Unitários', desc: 'JUnit 5 no motor de regras e na orquestração' },
              { title: 'REST API Design', desc: 'DTOs de resposta e tratamento de erros' },
              { title: 'Do UX ao Código', desc: 'Implementação do produto desenhado no case study' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 hover:border-accent-orange/50 transition-all duration-300 group"
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

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-header-text mb-6">
            🤝 Quer adicionar <span className="text-accent-orange">IA</span> ao seu backend?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Se você precisa que um sistema entenda imagens ou textos e ainda assim tome decisões
            previsíveis e auditáveis, vamos conversar sobre como aplicar essa abordagem ao seu
            projeto.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
