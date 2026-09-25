'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Scale, Sparkles, Sprout } from 'lucide-react';

export default function ProjectOverview() {
  const stats = [
    {
      label: 'Motor de IA',
      value: 'Spring AI 2.0 + GPT-4o',
      icon: <Sparkles className="text-accent-orange" size={24} />,
    },
    {
      label: 'Regras de Negócio',
      value: '5 regras ambientais',
      icon: <Scale className="text-accent-orange" size={24} />,
    },
    {
      label: 'Chamadas de IA por Análise',
      value: '1 a 2',
      icon: <ImageIcon className="text-accent-orange" size={24} />,
    },
  ];

  const pipeline = [
    {
      label: 'Request',
      title: 'Imagem',
      desc: 'O cliente envia a foto da planta (URL pública ou base64) e, opcionalmente, a localização.',
    },
    {
      label: 'Backend',
      title: 'Regras de Negócio',
      desc: 'Validação da imagem, cache de espécies e de clima, e um motor de regras que cruza cuidados ideais com o clima atual.',
    },
    {
      label: 'Response',
      title: 'Gerada pelo GPT',
      desc: 'Identificação botânica, saúde aparente e perfil de cuidados vêm do GPT-4o como JSON tipado, combinados às recomendações.',
    },
  ];

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
            Flora Hub <span className="text-accent-orange">Backend</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Backend em Java com Spring Boot e Spring AI que transforma uma foto em informação
            útil: o GPT-4o identifica a planta e avalia sua aparência, o backend busca o clima
            local na OpenWeather e aplica regras de negócio para gerar recomendações de cuidado.
            É a implementação do produto desenhado no case study de UX do Flora Hub.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8 mb-12"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-accent-orange/10 rounded-lg">
              <Sprout className="text-accent-orange" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-header-text mb-3">
                🎯 Lógica Principal
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Um único <code className="text-accent-orange">POST /api/plantas/analisar</code>{' '}
                orquestra todo o fluxo. A IA faz o que só ela faz bem (reconhecer uma espécie numa
                foto); o que precisa ser previsível — comparar temperatura, umidade e vento com as
                faixas ideais — fica em regras Java testáveis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pipeline.map((step, idx) => (
              <div
                key={step.label}
                className="relative bg-dark-bg border border-dark-border rounded-lg p-5"
              >
                <span className="text-xs font-bold tracking-wider text-accent-orange uppercase">
                  {idx + 1}. {step.label}
                </span>
                <h4 className="text-lg font-bold text-dark-header-text mt-1 mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-orange/10 rounded-lg">{stat.icon}</div>
                <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
              </div>
              <p className="text-2xl font-bold text-accent-orange">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
