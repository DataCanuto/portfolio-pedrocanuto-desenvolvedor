'use client';

import React from 'react';
import ProjectDiagrams from '@/components/Projects/DataStreamingProject/ProjectDiagrams';
import ProjectChallenges from '@/components/Projects/DataStreamingProject/ProjectChallenges';
import TechStack from '@/components/Projects/DataStreamingProject/TechStack';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { ProjectCaseHero } from '@/components/Projects/ProjectCaseHero';
import { Footer } from '@/components';
import { competenciesOf, getProject, technologyNames } from '@/data';
import { BarChart3, BookOpen, Code2, GitBranch, LayoutTemplate, Zap } from 'lucide-react';

const project = getProject('data-streaming-project');
const metrics = project.metrics;
const [headline, ...cards] = metrics?.items ?? [];

const percent = (value: number, total: number) => Math.round((value / total) * 100);

export default function DataStreamingProjectPage() {
  const projectSections = [
    { id: 'evolucao', label: 'Evolução', icon: <GitBranch size={16} /> },
    { id: 'resultados', label: 'Resultados Reais', icon: <BarChart3 size={16} /> },
    { id: 'wireframes', label: 'Telas do MVP', icon: <LayoutTemplate size={16} /> },
    { id: 'challenges', label: 'Desafios e Soluções', icon: <Zap size={16} /> },
    { id: 'arquitetura', label: 'Arquitetura', icon: <Code2 size={16} /> },
    { id: 'stack', label: 'Stack', icon: <Code2 size={16} /> },
    { id: 'skills', label: 'Competências', icon: <BookOpen size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      <ProjectHeader
        projectTitle={project.name}
        sections={projectSections}
        areaSlug="engenharia-dados"
        backUrl="/engenharia-dados"
      />

      <ProjectCaseHero project={project} detailsId="evolucao" />

      {/* Evolução: notebook → sistema */}
      <section id="evolucao" className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            🔁 <span className="text-accent-orange">Evolução</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-3xl">
            O trabalho começou como um pipeline em Jupyter Notebook e foi refatorado para um sistema
            full stack, que hoje está em produção.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {project.evolution?.map((version, index) => (
              <article
                key={version.version}
                className={`rounded-lg p-6 border ${
                  index === (project.evolution?.length ?? 0) - 1
                    ? 'border-accent-orange/60 bg-accent-orange/5'
                    : 'border-dark-border bg-dark-bg-secondary'
                }`}
              >
                <p className="text-sm font-semibold text-accent-orange mb-1">
                  {version.version.toUpperCase()}
                  {version.period ? ` · ${version.period}` : ''}
                </p>
                <h3 className="text-2xl font-bold text-dark-header-text mb-3">{version.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{version.description}</p>
                <ul className="space-y-2 mb-5">
                  {version.highlights.map((item) => (
                    <li key={item} className="text-gray-400 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {technologyNames(version.technologies).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-bg text-accent-orange text-xs rounded-full border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados reais (painel do sistema) */}
      {metrics && headline && (
        <section id="resultados" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
              📊 Resultados <span className="text-accent-orange">Reais</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-3xl">
              Números agregados do sistema em produção, sem nenhum dado individual de clientes.
            </p>

            <div className="bg-dark-bg border border-dark-border rounded-lg p-6 md:p-8 mb-6">
              <p className="text-gray-400 mb-2">{headline.label}</p>
              <p className="text-dark-header-text mb-2">
                <span className="text-5xl md:text-6xl font-bold">{headline.value}</span>
                {headline.total && (
                  <span className="text-2xl text-gray-400"> de {headline.total}</span>
                )}
              </p>
              {headline.total && (
                <>
                  <p className="text-gray-400 mb-4">
                    {percent(headline.value, headline.total)}% {headline.detail}
                  </p>
                  <div className="h-3 rounded-full bg-dark-border overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent-orange"
                      style={{ width: `${percent(headline.value, headline.total)}%` }}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cards.map((metric) => (
                <div
                  key={metric.id}
                  className="bg-dark-bg border border-dark-border rounded-lg p-5"
                >
                  <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-dark-header-text mb-1">
                    {metric.value}
                    {metric.total && (
                      <span className="text-base font-normal text-gray-400">
                        {' '}
                        de {metric.total} ({percent(metric.value, metric.total)}%)
                      </span>
                    )}
                  </p>
                  {metric.detail && <p className="text-gray-500 text-sm">{metric.detail}</p>}
                </div>
              ))}
            </div>

            {project.results && (
              <ul className="mt-8 space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="text-gray-300">
                    ✅ {result}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-6 text-sm text-gray-500">Fonte: {metrics.source}.</p>
          </div>
        </section>
      )}

      {/* Telas do MVP (wireframes anonimizados) */}
      <section id="wireframes" className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            🖥️ Telas do <span className="text-accent-orange">MVP</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-3xl">
            Wireframes que representam as telas da aplicação. Os dados são fictícios: nenhum dado
            real de clientes ou da empresa contratante é exibido.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images?.map((image) => (
              <figure
                key={image.src}
                className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto bg-white"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-gray-400">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Desafios e Soluções */}
      <section id="challenges">
        <ProjectChallenges />
      </section>

      {/* Arquitetura: sistema atual + diagramas da v1 */}
      <section id="arquitetura" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-8">
            🏗️ <span className="text-accent-orange">Arquitetura</span> do sistema
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { layer: 'React + Vite', role: 'Painel, envio de lotes, revisão e correções' },
              {
                layer: 'API (FastAPI)',
                role: 'Rotas HTTP; upload responde 202 e o lote roda em segundo plano',
              },
              { layer: 'Serviços', role: 'Regras de aplicação: comparação, importação, correções' },
              {
                layer: 'Extração e domínio',
                role: 'Um extractor por tipo de documento; consolidação por cliente',
              },
              { layer: 'PostgreSQL', role: 'Repositórios com SQLAlchemy e migrations com Alembic' },
            ].map((item, index) => (
              <div
                key={item.layer}
                className="bg-dark-bg border border-dark-border rounded-lg p-5 relative"
              >
                <p className="text-xs text-accent-orange font-semibold mb-1">{index + 1}</p>
                <h3 className="text-lg font-bold text-dark-header-text mb-2">{item.layer}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="diagrams">
        <ProjectDiagrams />
      </section>

      {/* Stack */}
      <section id="stack">
        <TechStack />
      </section>

      {/* Competências demonstradas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Competências <span className="text-accent-orange">Demonstradas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competenciesOf(project).map((competency) => (
              <div
                key={competency.id}
                className="bg-dark-bg border border-dark-border rounded-lg p-6 hover:border-accent-orange/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-accent-orange mb-2">{competency.name}</h3>
                <p className="text-gray-400 text-sm">
                  {technologyNames(
                    competency.technologies.filter((t) => project.technologies.includes(t))
                  ).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
