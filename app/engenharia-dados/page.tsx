'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, BarChart3 } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import ProjectAreaCard from '@/components/Projects/ProjectAreaCard';
import { Footer } from '@/components';

export default function EngenhariaDados() {
  const areaSlug = 'engenharia-dados';
  const areaTitle = 'Engenharia de Dados';
  const areaIcon = '📊';

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Apresentação', href: '#apresentacao', isActive: false },
    { label: 'Projetos', href: '#projetos', isActive: true },
  ];

  const projects = [
    {
      id: 'data-streaming',
      title: 'Data Streaming Pipeline',
      slug: 'data-streaming-project',
      description:
        'Pipeline completo de extração, processamento e consolidação de dados de múltiplos tipos de documentos (Notas Fiscais, Planilhas, Prestações) com OCR integrado.',
      company: 'ANDDIAP',
      technologies: ['Python', 'OCR', 'Pandas', 'ETL', 'PyMuPDF'],
      icon: '🔄',
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      slug: 'machine-learning',
      description:
        'Notebooks Jupyter de ciência de dados e machine learning com Python: limpeza e EDA, algoritmos supervisionados/não supervisionados, PCA, XGBoost e introdução à visão computacional.',
      company: 'Curso SENAI — IA na Indústria 4.0',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'OpenCV'],
      icon: '🧠',
    },
  ];

  return (
    <main className="bg-dark-bg text-dark-text min-h-screen">
      {/* Header */}
      <AreaHeader areaTitle={areaTitle} areaIcon={areaIcon} navItems={navItems} />

      {/* Apresentação */}
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
              <span className="text-accent-orange">Decisões Inteligentes</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Especializamos em criar soluções robustas de engenharia de dados que automatizam
              processos, melhoram a qualidade dos dados e permitem análises estratégicas de alto
              impacto.
            </p>

            {/* Benefícios */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: 'Pipelines Robustos',
                  description: 'ETL escaláveis e confiáveis',
                },
                {
                  icon: TrendingUp,
                  title: 'Análises Avançadas',
                  description: 'Insights dados com IA e ML',
                },
                {
                  icon: BarChart3,
                  title: 'Dashboards Inteligentes',
                  description: 'Visualizações em tempo real',
                },
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

      {/* Projetos */}
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
                📊 PROJETO DE ENGENHARIA DE DADOS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-200">Meus</span>
              <br />
              <span className="text-accent-orange">Projetos</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Explore minhas soluções de engenharia de dados em produção
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
