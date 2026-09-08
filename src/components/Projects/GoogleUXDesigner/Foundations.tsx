'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Layers, TestTube2, UserCog } from 'lucide-react';

export default function Foundations() {
  const methods = [
    {
      icon: <Heart className="text-white" size={22} />,
      color: 'bg-red-500',
      title: 'Empatia',
      description:
        'Pesquisa com usuários, entrevistas e personas para entender necessidades, frustrações e motivações reais antes de desenhar qualquer tela.',
    },
    {
      icon: <Lightbulb className="text-white" size={22} />,
      color: 'bg-orange-500',
      title: 'Ideação',
      description:
        'Brainstorming e priorização de soluções a partir dos problemas identificados, mapeando a jornada ideal do usuário.',
    },
    {
      icon: <Layers className="text-white" size={22} />,
      color: 'bg-blue-500',
      title: 'Prototipação',
      description:
        'Wireframes em papel, wireframes digitais e protótipos de baixa e alta fidelidade, cada vez mais próximos do produto final.',
    },
    {
      icon: <TestTube2 className="text-white" size={22} />,
      color: 'bg-green-500',
      title: 'Teste',
      description:
        'Estudos de usabilidade com usuários reais para validar decisões de design e orientar iterações baseadas em evidências.',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Fundamentos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            O papel do UX Designer e o processo iterativo de design centrado no usuário.
          </p>
        </motion.div>

        {/* O que é um UX Designer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-orange/10 rounded-lg">
              <UserCog className="text-accent-orange" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-header-text mb-3">
                O que faz um UX Designer
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                É o profissional responsável por tornar produtos digitais úteis, utilizáveis e agradáveis —
                pesquisando o contexto real do usuário, traduzindo problemas em soluções de interface e
                validando cada decisão com dados e testes, em vez de suposições.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Métodos de UX Design */}
        <h3 className="text-2xl font-bold text-dark-header-text mb-6">
          Métodos de UX Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center mx-auto mb-4`}>
                {method.icon}
              </div>
              <h4 className="text-lg font-bold text-dark-header-text mb-2">{method.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
