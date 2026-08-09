'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Lock, Layers } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'Linguagem & Ambiente',
      icon: Code,
      items: [
        { name: 'Java 17', description: 'Linguagem principal do backend', badge: '★★★★★' },
        { name: 'Spring Boot', description: 'Framework de aplicação', badge: 'Core' },
        { name: 'Maven', description: 'Gerenciamento de dependências e build', badge: 'Build' },
      ],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      category: 'Persistência de Dados',
      icon: Database,
      items: [
        { name: 'Spring Data JPA', description: 'Camada de acesso a dados', badge: 'Core' },
        { name: 'Hibernate', description: 'Mapeamento objeto-relacional (ORM)', badge: '★★★★★' },
        { name: 'MySQL', description: 'Banco de dados relacional', badge: 'Database' },
      ],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
    },
    {
      category: 'Segurança & Validação',
      icon: Lock,
      items: [
        { name: 'Spring Security', description: 'Autenticação da área administrativa', badge: 'Core' },
        { name: 'Bean Validation', description: 'Validação de dados de cadastro', badge: 'Jakarta' },
      ],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
    },
    {
      category: 'Padrões & Boas Práticas',
      icon: Layers,
      items: [
        { name: 'Arquitetura MVC', description: 'Controller, Service e Repository', badge: 'Pattern' },
        { name: 'DTO Pattern', description: 'Separação entre entidade e contrato da API', badge: 'Pattern' },
        { name: 'REST API', description: 'Endpoints para agenda e cadastro', badge: 'Approach' },
      ],
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
    },
  ];

  const entities = [
    {
      name: 'Aluno',
      abbreviation: 'AL',
      description: 'Dados cadastrais de quem faz aulas',
      fields: ['Nome (PK)', 'Contato', 'Instrumento'],
      icon: '🎓',
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      name: 'Aula',
      abbreviation: 'AU',
      description: 'Compromisso agendado na agenda',
      fields: ['Data e Horário', 'Aluno Vinculado', 'Status'],
      icon: '🎵',
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      name: 'Usuário Admin',
      abbreviation: 'US',
      description: 'Acesso autenticado ao painel',
      fields: ['Login', 'Senha (hash)', 'Papel/Role'],
      icon: '🔐',
      color: 'from-green-500/10 to-green-600/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
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

        {/* Tecnologias */}
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

        {/* Entidades do Sistema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-header-text mb-8">
            🗂️ Entidades do <span className="text-accent-orange">Sistema</span>
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
