'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Smartphone, Heart } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import { Footer } from '@/components';
import { formatPeriod, getProjectsByCategory, technologyNames, toDate } from '@/data';

export default function Frontend() {
  const areaTitle = 'Frontend & UX Design';
  const areaIcon = '💻';

  // Ordem cronológica: do mais recente ao mais antigo.
  const projects = getProjectsByCategory('frontend').sort(
    (a, b) => toDate(b.date).getTime() - toDate(a.date).getTime()
  );

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Apresentação', href: '#apresentacao', isActive: false },
    { label: 'Projetos', href: '#projetos', isActive: true },
  ];

  return (
    <main className="bg-dark-bg text-dark-text min-h-screen">
      <AreaHeader areaTitle={areaTitle} areaIcon={areaIcon} navItems={navItems} />

      <section id="apresentacao" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-200">Interfaces que Encantam,</span>
              <br />
              <span className="text-accent-orange">Design que Resolve</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Frontend e UX Design caminham juntos: interfaces em React construídas com performance e
              boas práticas, apoiadas em um processo de design centrado no usuário — pesquisa, personas,
              wireframes e testes de usabilidade — para transformar necessidades reais em produtos digitais
              usáveis.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'Performance', description: 'Carregamento ultra rápido' },
                { icon: Target, title: 'Conversão', description: 'Otimizado para ação' },
                { icon: Smartphone, title: 'Responsivo', description: 'Funciona em todos os dispositivos' },
                { icon: Heart, title: 'UX Research', description: 'Decisões guiadas pelo usuário' },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-bg p-6 rounded-lg border border-dark-border hover:border-accent-orange/50 transition-all"
                  >
                    <Icon className="text-accent-orange mb-3" size={28} />
                    <h3 className="text-lg font-bold text-gray-200 mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projetos" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-200">Nossos</span>
              <br />
              <span className="text-accent-orange">Projetos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project) => {
              // Projetos de outra área (ex.: frontend de um sistema fullstack) usam o recorte de frontend.
              const view = project.perspectives?.frontend;
              const title = view?.title ?? project.name;
              const description = view?.description ?? project.description ?? project.shortDescription;
              const techs = technologyNames(view?.technologies ?? project.technologies);
              const features = view?.features ?? project.features ?? [];
              const caseStudyDoc = project.documentation?.find((d) => d.kind === 'case-study');
              const secondaryLink = project.repository
                ? { href: project.repository, label: 'GitHub' }
                : caseStudyDoc
                  ? { href: caseStudyDoc.url, label: caseStudyDoc.label }
                  : null;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden hover:border-accent-orange/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8">
                      <div className="mb-4">
                        <span className="text-accent-orange text-sm font-semibold">
                          {project.icon} {project.name} · {formatPeriod(project.date)}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-bg text-accent-orange text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {features.length > 0 && (
                        <div className="space-y-3 mb-6">
                          <div>
                            <p className="text-gray-400 text-sm mb-1">Características</p>
                            <ul className="text-gray-300 text-sm space-y-1">
                              {features.map((feature) => (
                                <li key={feature}>✅ {feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4">
                        {project.caseStudy && (
                          <motion.a
                            href={project.caseStudy}
                            className="px-6 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Ver Detalhes do Projeto
                          </motion.a>
                        )}
                        {secondaryLink && (
                          <motion.a
                            href={secondaryLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {secondaryLink.label}
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="md:w-1/2 bg-dark-bg h-64 md:h-auto flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-6xl mb-4">{project.icon}</p>
                        <p className="text-gray-400">{project.name}</p>
                        <p className="text-gray-500 text-sm mt-2">{project.context.organization ?? project.context.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
