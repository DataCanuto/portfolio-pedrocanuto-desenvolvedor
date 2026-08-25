'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Smartphone } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import { Footer } from '@/components';

export default function LandingPages() {
  const areaTitle = 'Frontend';
  const areaIcon = '💻';

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
              <span className="text-gray-200">Interfaces Frontend que</span>
              <br />
              <span className="text-accent-orange">Encantam e Convertem</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Desenvolvemos interfaces frontend em React — de landing pages otimizadas para
              conversão a aplicações completas — com design moderno, performance excepcional e
              estratégias de UX comprovadas.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: 'Performance', description: 'Carregamento ultra rápido' },
                { icon: Target, title: 'Conversão', description: 'Otimizado para ação' },
                { icon: Smartphone, title: 'Responsivo', description: 'Funciona em todos os dispositivos' },
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
            {/* Galeria Digital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden hover:border-accent-orange/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="text-accent-orange text-sm font-semibold">🎨 Galeria Digital</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Galeria Digital de Paulo Canuto
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Landing page moderna e responsiva para exposição digital de obras de arte. 
                    Featuring 58 obras catalogadas em 5 categorias diferentes, integração com WhatsApp, 
                    filtros dinâmicos e design otimizado para conversão.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-bg text-accent-orange text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Características</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>✅ 58 obras categorizadas</li>
                        <li>✅ Filtros dinâmicos por categoria</li>
                        <li>✅ Modal interativo para detalhes</li>
                        <li>✅ Integração WhatsApp</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href="/landing-pages/galeria-digital"
                      className="px-6 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visitar Galeria
                    </motion.a>
                    <motion.a
                      href="https://github.com/DataCanuto/galeria-digital-artes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub Original
                    </motion.a>
                  </div>
                </div>

                <div className="md:w-1/2 bg-dark-bg h-64 md:h-auto flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-6xl mb-4">🎨</p>
                    <p className="text-gray-400">Paulo Canuto</p>
                    <p className="text-gray-500 text-sm mt-2">50+ anos de exploração artística</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pedro Canuto Música - Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden hover:border-accent-orange/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="text-accent-orange text-sm font-semibold">🎵 Pedro Canuto Música</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Pedro Canuto Música — Frontend
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Aplicação React que consome a API do sistema de cadastro e agenda de aulas de
                    música: formulários de matrícula, agendamento de aulas e painel administrativo
                    integrados ao backend em Spring Boot.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'TypeScript', 'Vite', 'Node.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-bg text-accent-orange text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Características</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>✅ Agendamento de aulas via API</li>
                        <li>✅ Cadastro e matrícula de alunos</li>
                        <li>✅ Painel administrativo autenticado</li>
                        <li>✅ Consumo de API REST em Spring Boot</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href="/backend/pedro-canuto-musico"
                      className="px-6 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Detalhes do Projeto
                    </motion.a>
                    <motion.a
                      href="https://github.com/DataCanuto/pedrocanutomusico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>

                <div className="md:w-1/2 bg-dark-bg h-64 md:h-auto flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-6xl mb-4">🎵</p>
                    <p className="text-gray-400">Pedro Canuto Música</p>
                    <p className="text-gray-500 text-sm mt-2">Fullstack: React + Spring Boot + PostgreSQL</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
