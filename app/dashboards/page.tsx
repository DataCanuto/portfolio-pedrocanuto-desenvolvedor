'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Eye } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import ProjectAreaCard from '@/components/Projects/ProjectAreaCard';
import { Footer } from '@/components';

export default function Dashboards() {
  const areaSlug = 'dashboards';
  const areaTitle = 'Dashboards & Visualizações';
  const areaIcon = '📊';

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Apresentação', href: '#apresentacao', isActive: false },
    { label: 'Projetos', href: '#projetos', isActive: true },
  ];

  const projects = [
    {
      id: 'google-data-analytics-capstone',
      title: 'Bella Beat Fitness Track',
      slug: 'googledataanalyticscapstone',
      description:
        'Dashboard interativo com análise completa de dados de fitness tracking de 30 usuários FitBit, insights baseados em dados e recomendações para estratégias de gamificação e engajamento.',
      company: 'Google Data Analytics Specialization',
      technologies: ['Python', 'Pandas', 'Data Analysis', 'EDA', 'Machine Learning'],
      icon: '💪',
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
              <span className="text-gray-200">Transformando Dados em</span>
              <br />
              <span className="text-accent-orange">Visualizações Impactantes</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Criamos dashboards interativos e visualizações de dados que transformam informações complexas 
              em insights claros e visuais para facilitar a tomada de decisões estratégicas.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: PieChart, title: 'Visualizações Avançadas', description: 'Gráficos interativos e animados' },
                { icon: TrendingUp, title: 'Análise em Tempo Real', description: 'Dados atualizados constantemente' },
                { icon: Eye, title: 'UX Intuitiva', description: 'Interface fácil de usar' },
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
                📊 PROJETOS DE ANÁLISE & DASHBOARDS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-200">Meus</span>
              <br />
              <span className="text-accent-orange">Projetos</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Explore meus dashboards e análises de dados em produção
            </p>
          </motion.div>

          {/* Grid de Projetos */}
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
