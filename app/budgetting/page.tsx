'use client';

import ProjectOverview from '@/components/Projects/SpringBootAIBudgeting/ProjectOverview';
import ProjectDiagrams from '@/components/Projects/SpringBootAIBudgeting/ProjectDiagrams';
import TechStack from '@/components/Projects/SpringBootAIBudgeting/TechStack';
import Endpoints from '@/components/Projects/SpringBootAIBudgeting/Endpoints';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import { Code2, BookOpen, Layers, Wrench, Terminal, GraduationCap } from 'lucide-react';

const REPO_URL =
  'https://github.com/DataCanuto/SpringBootProjects/tree/main/SpringBootAI-Budgetting-ProjectCertification';

export default function BudgettingPage() {
  const projectSections = [
    { id: 'overview', label: 'Visão Geral', icon: <BookOpen size={16} /> },
    { id: 'architecture', label: 'Arquitetura & Design', icon: <Layers size={16} /> },
    { id: 'stack', label: 'Stack', icon: <Code2 size={16} /> },
    { id: 'endpoints', label: 'API', icon: <Wrench size={16} /> },
    { id: 'run', label: 'Como Executar', icon: <Terminal size={16} /> },
    { id: 'skills', label: 'Skills Desenvolvidas', icon: <GraduationCap size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      <ProjectHeader
        projectTitle="Spring Boot AI Budgeting"
        sections={projectSections}
        areaSlug="projetos"
        backUrl="/"
      />

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              🤖 SPRING AI — PROJETO FINAL DA CERTIFICAÇÃO SPRING BOOT (DIO)
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            Spring Boot AI <span className="text-accent-orange">Budgeting</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            API de orçamento pessoal em Java com Spring Boot e Spring AI: comandos de voz são
            transcritos, interpretados por tool calling e executados como casos de uso de domínio —
            sem abrir mão da arquitetura em camadas (DDD) usada em todo o treinamento.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href={REPO_URL}
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

      {/* Arquitetura & Design */}
      <section id="architecture">
        <ProjectDiagrams />
      </section>

      {/* Stack Tecnológico */}
      <section id="stack">
        <TechStack />
      </section>

      {/* API */}
      <section id="endpoints">
        <Endpoints />
      </section>

      {/* Como Executar */}
      <section id="run" className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <Terminal className="inline-block mb-2 text-accent-orange mr-2" size={36} />
            Como <span className="text-accent-orange">Executar</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Ambiente local reproduzível com Docker Compose (MySQL) e Gradle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-dark-header-text mb-3">
                1. Configurar a chave da OpenAI
              </h3>
              <pre className="bg-dark-bg border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                <code>export OPENAI_API_KEY=&quot;your_api_key_here&quot;</code>
              </pre>
            </div>

            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-dark-header-text mb-3">
                2. Subir a infraestrutura (MySQL)
              </h3>
              <pre className="bg-dark-bg border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                <code>docker compose up</code>
              </pre>
            </div>

            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-dark-header-text mb-3">
                3. Executar a aplicação
              </h3>
              <pre className="bg-dark-bg border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                <code>./gradlew bootRun</code>
              </pre>
            </div>

            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-dark-header-text mb-3">
                4. Rodar os testes
              </h3>
              <pre className="bg-dark-bg border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                <code>./gradlew test</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4 text-sm text-gray-300">
            Depois de subir, acesse <code className="text-accent-orange">http://localhost:8080/transactions</code>.
            O compose expõe o MySQL em <code className="text-accent-orange">localhost:3307</code> e a chave da
            OpenAI é carregada do arquivo <code className="text-accent-orange">.env</code> em desenvolvimento.
          </div>
        </div>
      </section>

      {/* Skills Desenvolvidas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Skills <span className="text-accent-orange">Desenvolvidas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Spring AI (ChatClient)', desc: 'Orquestração de chat, transcrição e fala' },
              { title: 'Tool Calling', desc: 'Exposição de casos de uso como ferramentas de IA' },
              { title: 'Arquitetura DDD em Camadas', desc: 'Domain, Application e Infrastructure isolados' },
              { title: 'Repository Pattern', desc: 'Contrato de domínio + adaptador JPA' },
              { title: 'IDs Fortemente Tipados', desc: 'TransactionId em vez de UUID cru' },
              { title: 'Spring Data JPA', desc: 'Persistência e mapeamento objeto-relacional' },
              { title: 'REST API Design', desc: 'Endpoints de criação e consulta de transações' },
              { title: 'Docker Compose', desc: 'Infraestrutura local reproduzível (MySQL)' },
              { title: 'Testes de Integração', desc: 'ITs cobrindo transcrição, fala e tool calling' },
              { title: 'Gradle', desc: 'Build e gerenciamento de dependências' },
              { title: 'Lombok', desc: 'Redução de boilerplate no modelo de domínio' },
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

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-header-text mb-6">
            🤝 Quer IA integrada de forma <span className="text-accent-orange">disciplinada</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Se você quer adicionar capacidades de IA a um sistema existente sem transformar o
            código em uma bagunça, vamos conversar sobre como aplicar essa mesma abordagem
            arquitetural ao seu projeto.
          </p>
          <a
            href={REPO_URL}
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
