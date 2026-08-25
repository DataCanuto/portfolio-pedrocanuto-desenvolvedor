'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Lock } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import ProjectAreaCard from '@/components/Projects/ProjectAreaCard';
import { Footer } from '@/components';

export default function Backend() {
  const areaSlug = 'backend';
  const areaTitle = 'Backend';
  const areaIcon = '⚙️';

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Apresentação', href: '#apresentacao', isActive: false },
    { label: 'Projetos', href: '#projetos', isActive: true },
  ];

  const projects = [
    {
      id: 'pedro-canuto-musico',
      title: 'Pedro Canuto Música',
      slug: 'pedro-canuto-musico',
      description:
        'Sistema fullstack de cadastro de alunos e agenda de aulas de música: backend em Java com Spring Boot e frontend em React, aplicando na prática os conhecimentos do curso Técnico em Desenvolvimento de Sistemas para gerenciar meu próprio serviço profissional.',
      company: 'Projeto Pessoal',
      technologies: ['Java', 'Spring Boot', 'React', 'Spring Security', 'PostgreSQL'],
      icon: '🎵',
    },
    {
      id: 'springboot-ai-budgeting',
      title: 'Spring Boot AI Budgeting',
      slug: 'springboot-ai-budgeting',
      href: '/budgetting',
      description:
        'API de orçamento pessoal com Spring AI: comandos de voz são transcritos, interpretados por tool calling e executados como casos de uso em uma arquitetura DDD em camadas.',
      company: 'Certificação Spring Boot — DIO',
      technologies: ['Java', 'Spring Boot', 'Spring AI', 'MySQL'],
      icon: '🤖',
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
              <span className="text-gray-200">Backend e APIs em</span>
              <br />
              <span className="text-accent-orange">Spring Boot</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Desenvolvemos backends robustos e APIs REST com Spring Boot: persistência de dados,
              autenticação, arquitetura em camadas e, quando faz sentido, integração com IA.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code, title: 'Full Stack', description: 'Frontend + Backend integrado' },
                { icon: Database, title: 'Banco de Dados', description: 'Arquitetura escalável' },
                { icon: Lock, title: 'Segurança', description: 'Autenticação e validação' },
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
            <p className="text-gray-400 text-lg mt-4">
              Explore minhas soluções de backend e APIs em produção
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
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
