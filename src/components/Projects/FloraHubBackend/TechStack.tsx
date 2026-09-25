'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Layers, CloudSun } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'IA',
      icon: Sparkles,
      items: [
        { name: 'Spring AI 2.0.1', description: 'ChatClient, mídia multimodal e saída estruturada com .entity()', badge: 'Core' },
        { name: 'GPT-4o', description: 'Visão computacional para identificar a espécie e avaliar a saúde', badge: 'OpenAI' },
        { name: 'Prompt de sistema', description: 'Especialista em botânica, respostas em pt-BR e confiança calibrada', badge: 'Prompt' },
      ],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      category: 'Framework & Build',
      icon: Layers,
      items: [
        { name: 'Java 21', description: 'Records para DTOs e switch expressions', badge: '★★★★★' },
        { name: 'Spring Boot 4.1', description: 'Web MVC, validação e injeção de dependências', badge: 'Core' },
        { name: 'Spring Security', description: 'Filtro configurado; autenticação prevista antes do deploy', badge: 'Security' },
        { name: 'Maven + Lombok', description: 'Build e redução de boilerplate nas entidades', badge: 'Build' },
      ],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
    },
    {
      category: 'Persistência',
      icon: Database,
      items: [
        { name: 'PostgreSQL', description: 'Histórico de análises, espécies e cache de clima', badge: 'Database' },
        { name: 'Spring Data JPA', description: 'Repositórios e mapeamento das entidades', badge: 'Core' },
        { name: 'Flyway', description: '7 migrations versionadas do schema', badge: 'Migrations' },
      ],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
    },
    {
      category: 'Integrações & Testes',
      icon: CloudSun,
      items: [
        { name: 'OpenWeather API', description: 'Temperatura, umidade, vento e chuva por coordenada', badge: 'API' },
        { name: 'RestClient / HttpClient', description: 'Chamadas externas com timeout e sem redirects', badge: 'HTTP' },
        { name: 'JUnit 5', description: 'Testes do motor de regras e do fluxo de análise', badge: 'Testing' },
        { name: 'React + Vite', description: 'Frontend de testes usado na simulação', badge: 'Frontend' },
      ],
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
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
            Ferramentas, bibliotecas e integrações utilizadas no backend
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
      </div>
    </section>
  );
}
