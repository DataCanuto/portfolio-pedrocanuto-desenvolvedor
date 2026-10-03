'use client';

import Link from 'next/link';
import { ArrowDown, ExternalLink, FileText, Github } from 'lucide-react';
import { formatPeriod, projects, technologyNames, type Project } from '@/data';

const STATUS_LABELS: Record<NonNullable<Project['status']>, string> = {
  concluido: 'Concluído',
  'em-andamento': 'Em andamento',
  'em-producao': 'Em produção',
  pausado: 'Pausado',
};

/** Resultados mostrados no topo: os textos de `results` ou, na falta deles, os indicadores reais. */
const topResults = (project: Project): string[] => {
  if (project.results?.length) return project.results.slice(0, 3);
  return (project.metrics?.items ?? [])
    .slice(0, 3)
    .map((m) => (m.total ? `${m.value} de ${m.total} ${m.label}` : `${m.value} ${m.label}`));
};

interface ProjectCaseHeroProps {
  project: Project;
  /** Seção para onde o botão "Ver detalhes" rola. */
  detailsId?: string;
}

/**
 * Topo padrão das páginas de projeto: resumo, problema, solução, stack, resultados e links.
 * Tudo vem de `src/data`; blocos sem dado não são exibidos.
 */
export const ProjectCaseHero = ({ project, detailsId = 'overview' }: ProjectCaseHeroProps) => {
  const results = topResults(project);
  const related = projects.filter(
    (p) => project.product && p.product === project.product && p.id !== project.id && p.caseStudy
  );
  const docs = project.documentation ?? [];

  return (
    <section id="hero" className="px-4 md:px-8 pt-28 pb-16 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
          {project.status && (
            <span className="px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange font-semibold">
              {STATUS_LABELS[project.status]}
            </span>
          )}
          <span className="text-gray-400">
            {project.context.label} · {formatPeriod(project.date)}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-header-text mb-4">
          {project.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
          {project.description ?? project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-orange text-white font-semibold hover:bg-accent-orange-light transition-colors"
            >
              <ExternalLink size={18} />
              Ver no ar
            </a>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.deployment
                  ? 'inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-accent-orange text-accent-orange font-semibold hover:bg-accent-orange/10 transition-colors'
                  : 'inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-orange text-white font-semibold hover:bg-accent-orange-light transition-colors'
              }
            >
              <Github size={18} />
              Código no GitHub
            </a>
          )}
          {docs.map((doc) => (
            <a
              key={doc.url}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-dark-border text-dark-header-text font-semibold hover:border-accent-orange hover:text-accent-orange transition-colors"
            >
              <FileText size={18} />
              {doc.label}
            </a>
          ))}
          {related.map((p) => (
            <Link
              key={p.id}
              href={p.caseStudy!}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-dark-border text-dark-header-text font-semibold hover:border-accent-orange hover:text-accent-orange transition-colors"
            >
              Ver também: {p.name}
            </Link>
          ))}
          <button
            onClick={() => document.getElementById(detailsId)?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-dark-border text-gray-300 font-semibold hover:border-accent-orange hover:text-accent-orange transition-colors"
          >
            <ArrowDown size={18} />
            Ver detalhes
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {project.problem && (
            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-accent-orange mb-2">Problema</h2>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.objective && (
            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-accent-orange mb-2">Solução</h2>
              <p className="text-gray-300 leading-relaxed">{project.objective}</p>
            </div>
          )}
          <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
            <h2 className="text-sm font-bold uppercase tracking-wide text-accent-orange mb-3">Stack</h2>
            <ul className="flex flex-wrap gap-2">
              {technologyNames(project.technologies).map((name) => (
                <li key={name} className="px-3 py-1 rounded-full border border-dark-border bg-dark-bg text-gray-300 text-sm">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {results.length > 0 && (
            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-accent-orange mb-3">Resultados</h2>
              <ul className="space-y-2">
                {results.map((r) => (
                  <li key={r} className="flex gap-2 text-gray-300 leading-relaxed">
                    <span className="text-accent-orange" aria-hidden>•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
