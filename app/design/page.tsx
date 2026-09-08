'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Layers, TestTube2 } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import ProjectAreaCard from '@/components/Projects/ProjectAreaCard';
import { Footer } from '@/components';

export default function Design() {
  const areaSlug = 'design';
  const areaTitle = 'Design de Produto';
  const areaIcon = '🎨';

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Apresentação', href: '#apresentacao', isActive: false },
    { label: 'Projetos', href: '#projetos', isActive: true },
  ];

  const projects = [
    {
      id: 'google-ux-designer',
      title: 'UX Designer',
      slug: 'google-ux-designer',
      description:
        'Fundamentos e métodos de UX Design — empatia, ideação, prototipação e teste — aplicados ao case study Flora Hub, app conceitual para amantes de plantas.',
      company: 'Google UX Design Professional Certificate',
      technologies: ['UX Research', 'Empathy Map', 'Competitive Audit', 'Wireframing', 'Usability Testing'],
      icon: '🌱',
    },
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
              <span className="text-gray-200">Design Centrado no</span>
              <br />
              <span className="text-accent-orange">Usuário</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Processo de UX Design aplicado a produtos reais — pesquisa com usuários, prototipação e
              testes de usabilidade para transformar necessidades em soluções digitais utilizáveis.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: 'Pesquisa & Empatia', description: 'Personas e mapas de empatia' },
                { icon: Layers, title: 'Prototipação', description: 'De wireframes a alta fidelidade' },
                { icon: TestTube2, title: 'Testes de Usabilidade', description: 'Decisões validadas com usuários' },
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
            <div className="mb-4 inline-block">
              <span className="bg-accent-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                🎨 PROJETOS DE UX DESIGN
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-200">Meus</span>
              <br />
              <span className="text-accent-orange">Projetos</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Explore o processo de UX Design aplicado a um produto real
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectAreaCard
                key={project.id}
                title={project.title}
                description={project.description}
                company={project.company}
                technologies={project.technologies}
                slug={project.slug}
                areaSlug={areaSlug}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
