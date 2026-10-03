'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { formatPeriod, getFeaturedProjects, getTechnology, type Project } from '@/data';

const STATUS_LABELS: Record<NonNullable<Project['status']>, string> = {
  concluido: 'Concluído',
  'em-andamento': 'Em andamento',
  'em-producao': 'Em produção',
  pausado: 'Pausado',
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: (index % 3) * 0.08, duration: 0.4 }}
    className="group h-full"
  >
    <Link
      href={project.caseStudy ?? '/projetos'}
      className="flex flex-col h-full bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent-orange/60 hover:shadow-lg hover:shadow-accent-orange/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-orange"
    >
      <div className="relative aspect-video bg-dark-bg border-b border-dark-border overflow-hidden">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl" aria-hidden>
            {project.icon}
          </div>
        )}
        {project.status && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-dark-bg/90 text-gray-200 border border-dark-border">
            {STATUS_LABELS[project.status]}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs text-gray-400 mb-1">
          {project.context.label} · {formatPeriod(project.date)}
        </p>
        <h3 className="text-xl font-bold text-dark-header-text group-hover:text-accent-orange transition-colors mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {project.description ?? project.shortDescription}
        </p>
        <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Tecnologias">
          {project.technologies.slice(0, 4).map((id) => (
            <li
              key={id}
              className="text-xs px-2 py-0.5 rounded-md bg-dark-bg text-gray-300 border border-dark-border"
            >
              {getTechnology(id).name}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-orange">
          Ver case <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  </motion.article>
);

export const FeaturedProjects = () => {
  const featured = getFeaturedProjects();

  return (
    <section id="projetos" className="py-20 bg-dark-bg scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-3">
              Projetos em <span className="text-accent-orange">destaque</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Sistemas para clientes, projetos pessoais e cases de formação, com o problema, a
              solução e o que foi entregue.
            </p>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-accent-orange font-semibold hover:gap-3 transition-all whitespace-nowrap"
          >
            Ver todos os projetos <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
