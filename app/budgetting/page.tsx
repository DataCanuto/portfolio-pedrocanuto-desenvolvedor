'use client';

import ProjectOverview from '@/components/Projects/SpringBootAIBudgeting/ProjectOverview';
import ProjectDiagrams from '@/components/Projects/SpringBootAIBudgeting/ProjectDiagrams';
import TechStack from '@/components/Projects/SpringBootAIBudgeting/TechStack';
import Endpoints from '@/components/Projects/SpringBootAIBudgeting/Endpoints';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { ProjectCaseHero } from '@/components/Projects/ProjectCaseHero';
import { Footer } from '@/components';
import { getProject } from '@/data';
import { Code2, BookOpen, Layers, Wrench, Terminal, GraduationCap } from 'lucide-react';


const project = getProject('springboot-ai-budgeting');

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
        projectTitle={project.name}
        sections={projectSections}
        areaSlug="projetos"
        backUrl="/"
      />

      <ProjectCaseHero project={project} detailsId="overview" />

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
            href={project.repository}
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
