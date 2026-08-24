'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Layers, Container } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'IA & Voz',
      icon: Sparkles,
      items: [
        { name: 'Spring AI 2.0.0-M4', description: 'ChatClient, tool calling, transcrição e fala', badge: 'Core' },
        { name: 'GPT-4o-mini', description: 'Modelo de chat e seleção de ferramentas', badge: 'OpenAI' },
        { name: 'Whisper-1', description: 'Transcrição de áudio (Speech-to-Text)', badge: 'OpenAI' },
        { name: 'TTS-1', description: 'Síntese de voz da resposta final (Text-to-Speech)', badge: 'OpenAI' },
      ],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      category: 'Framework & Build',
      icon: Layers,
      items: [
        { name: 'Java 21', description: 'Linguagem principal do backend', badge: '★★★★★' },
        { name: 'Spring Boot 4.0.6', description: 'Framework web e injeção de dependências', badge: 'Core' },
        { name: 'Gradle', description: 'Gerenciamento de build e dependências', badge: 'Build' },
        { name: 'Lombok', description: 'Redução de boilerplate no domínio', badge: 'Utility' },
      ],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
    },
    {
      category: 'Persistência',
      icon: Database,
      items: [
        { name: 'Spring Data JPA', description: 'Camada de acesso a dados', badge: 'Core' },
        { name: 'MySQL', description: 'Banco de dados relacional em desenvolvimento', badge: 'Database' },
        { name: 'H2 Database', description: 'Banco em memória para testes', badge: 'Testing' },
      ],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
    },
    {
      category: 'Infraestrutura & Testes',
      icon: Container,
      items: [
        { name: 'Docker Compose', description: 'MySQL local reprodutível (porta 3307)', badge: 'DevOps' },
        { name: 'JUnit 5', description: 'Testes unitários e de integração', badge: 'Testing' },
        { name: 'Spring Boot Test', description: 'Contexto de testes e ITs com ChatClient', badge: 'Testing' },
      ],
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
    },
  ];

  const entities = [
    {
      name: 'Transaction',
      abbreviation: 'Agregado',
      description: 'Entidade de domínio com identidade: descrição, valor e categoria de uma transação financeira',
      fields: ['id (TransactionId)', 'description', 'amount', 'category'],
      icon: '💳',
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      name: 'Category',
      abbreviation: 'Value Object',
      description: 'Enum fechado com as categorias de transação suportadas pelo domínio',
      fields: ['GROCERIES', 'PHARMA', 'AUTO', 'RESTAURANT', 'TRANSPORT', '+3 outras'],
      icon: '🏷️',
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      name: 'TransactionId',
      abbreviation: 'ID Tipado',
      description: 'Identificador forte em vez de UUID cru circulando pelo código',
      fields: ['value (UUID)', 'gerado no construtor de Transaction'],
      icon: '🔑',
      color: 'from-green-500/10 to-green-600/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            🛠️ Stack <span className="text-accent-orange">Tecnológico</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ferramentas, bibliotecas e padrões utilizados no projeto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${tech.color} border ${tech.borderColor} rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-accent-orange" size={28} />
                  <h3 className="text-xl font-bold text-dark-header-text">{tech.category}</h3>
                </div>

                <div className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="bg-dark-bg/50 rounded-lg p-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="font-semibold text-dark-header-text">{item.name}</p>
                        <span className="text-xs px-2 py-1 bg-accent-orange/20 text-accent-orange rounded border border-accent-orange/30 whitespace-nowrap">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-header-text mb-8">
            🗂️ Modelo de <span className="text-accent-orange">Domínio</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${entity.color} border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-dark-header-text">{entity.name}</h4>
                  <span className="text-4xl">{entity.icon}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{entity.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Campos Principais:</p>
                  {entity.fields.map((field, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-accent-orange rounded-full"></span>
                      {field}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-dark-border">
                  <span className="inline-block px-3 py-1 bg-accent-orange/20 text-accent-orange text-xs font-semibold rounded">
                    {entity.abbreviation}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
