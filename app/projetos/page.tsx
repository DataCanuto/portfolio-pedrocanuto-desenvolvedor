'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Star } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import { Footer } from '@/components';
import {
  categories,
  formatPeriod,
  getCategory,
  getTechnology,
  projects,
  technologiesInProjects,
  toDate,
  type CategoryId,
} from '@/data';

type CategoryFilter = CategoryId | 'todas';

const filterButton = (active: boolean) =>
  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border ${
    active
      ? 'bg-accent-orange text-black border-accent-orange'
      : 'bg-dark-bg-secondary text-gray-300 border-dark-border hover:border-accent-orange/50'
  }`;

export default function ProjetosPage() {
  const [category, setCategory] = useState<CategoryFilter>('todas');
  const [technology, setTechnology] = useState<string>('todas');

  // Só oferece como filtro tecnologias que algum projeto usa.
  const technologyOptions = useMemo(
    () =>
      technologiesInProjects()
        .map(getTechnology)
        .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')),
    []
  );

  const visible = useMemo(
    () =>
      projects
        .filter(
          (p) =>
            category === 'todas' ||
            p.category === category ||
            p.secondaryCategories?.includes(category)
        )
        .filter((p) => technology === 'todas' || p.technologies.includes(technology))
        .sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime()),
    [category, technology]
  );

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Projetos', href: '#projetos', isActive: true },
  ];

  return (
    <main className="bg-dark-bg text-dark-text min-h-screen">
      <AreaHeader areaTitle="Todos os Projetos" areaIcon="🗂️" navItems={navItems} />

      <section id="projetos" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-200">Todos os</span>{' '}
              <span className="text-accent-orange">Projetos</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Filtre por área ou tecnologia para ver os projetos que demonstram cada competência.
            </p>
          </motion.div>

          {/* Filtros */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('todas')}
                className={filterButton(category === 'todas')}
              >
                Todas as áreas
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={filterButton(category === c.id)}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-3 text-sm text-gray-400">
              Tecnologia
              <select
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                className="bg-dark-bg-secondary border border-dark-border rounded-lg px-3 py-2 text-gray-200 focus:border-accent-orange outline-none"
              >
                <option value="todas">Todas</option>
                {technologyOptions.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {visible.length === 0 ? (
            <p className="text-center text-gray-400 py-12">Nenhum projeto com esses filtros.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {visible.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-dark-bg-secondary border border-dark-border hover:border-accent-orange/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/20 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {project.icon && <div className="text-3xl mt-1">{project.icon}</div>}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-2xl font-bold text-accent-orange">{project.name}</h3>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-accent-orange/10 text-accent-orange border border-accent-orange/30 rounded-full font-semibold">
                            <Star size={12} /> Destaque
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">
                        {getCategory(project.category).name} · {project.context.label} ·{' '}
                        {formatPeriod(project.date)}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">
                    {project.description ?? project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((id) => (
                      <button
                        key={id}
                        onClick={() => setTechnology(id)}
                        className={`text-xs px-3 py-1 rounded-full font-semibold border transition-colors ${
                          technology === id
                            ? 'bg-accent-orange text-black border-accent-orange'
                            : 'bg-accent-orange/10 text-accent-orange border-accent-orange/30 hover:border-accent-orange'
                        }`}
                      >
                        {getTechnology(id).name}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
                      >
                        Case Study <ArrowRight size={16} />
                      </Link>
                    )}
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border text-gray-200 rounded-lg hover:border-accent-orange transition-colors"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.deployment && (
                      <a
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border text-gray-200 rounded-lg hover:border-accent-orange transition-colors"
                      >
                        <ExternalLink size={16} /> Deploy
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
