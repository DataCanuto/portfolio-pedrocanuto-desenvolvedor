'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Lock } from 'lucide-react';
import AreaHeader from '@/components/Projects/AreaHeader';
import { Footer } from '@/components';

export default function SistemasCadastro() {
  const areaSlug = 'sistemas-cadastro';
  const areaTitle = 'Sistemas de Cadastro';
  const areaIcon = '📋';

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
              <span className="text-gray-200">Sistemas Web de</span>
              <br />
              <span className="text-accent-orange">Gestão de Dados</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl">
              Desenvolvemos sistemas web completos para cadastro, validação e gestão de dados estruturados. 
              Soluções customizadas com interfaces intuitivas e backend robusto.
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
              Projetos em breve. Volte em seguida para conferir nossas soluções.
            </p>
          </motion.div>

          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-12 text-center">
            <p className="text-gray-400 text-lg">Projetos de Sistemas de Cadastro em desenvolvimento...</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
