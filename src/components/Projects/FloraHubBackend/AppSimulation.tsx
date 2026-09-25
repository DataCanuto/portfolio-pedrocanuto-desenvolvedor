'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const screens = [
  {
    id: 'sobre',
    label: 'Sobre',
    imagePath: '/assets/img/florahub-backend/aba-sobre.png',
    source: 'GPT-4o · identificação',
    desc: 'Nome popular, nome científico, gênero, espécie, origem, saúde aparente e confiança vêm da chamada multimodal com a foto.',
  },
  {
    id: 'cuidados',
    label: 'Cuidados',
    imagePath: '/assets/img/florahub-backend/aba-cuidados.png',
    source: 'GPT-4o · perfil da espécie (salvo no banco)',
    desc: 'Luz, rega, faixas de temperatura e umidade, solo e drenagem. Gerado uma vez por espécie e reaproveitado nas análises seguintes.',
  },
  {
    id: 'clima',
    label: 'Clima',
    imagePath: '/assets/img/florahub-backend/aba-clima.png',
    source: 'OpenWeather + regras de negócio',
    desc: 'Clima atual da localização e recomendações do motor de regras. Na captura, a umidade de 76% passa do ideal da Rosa do Deserto (20–50%) e a RegraUmidade emite ATENÇÃO.',
  },
];

export default function AppSimulation() {
  const [active, setActive] = useState(screens[0].id);
  const current = screens.find((s) => s.id === active) ?? screens[0];

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
            <Smartphone className="inline-block mb-2 text-accent-orange mr-2" size={36} />
            Simulação <span className="text-accent-orange">Local</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Resposta real do backend para a foto de uma Rosa do Deserto (
            <em>Adenium obesum</em>), exibida pelo frontend de testes em React. Cada aba mostra de
            onde vem cada parte da resposta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center">
            <motion.img
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              src={current.imagePath}
              alt={`Flora Hub — aba ${current.label} da análise da Rosa do Deserto`}
              className="w-full max-w-sm rounded-2xl border border-dark-border shadow-lg"
            />
          </div>

          <div className="space-y-4">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActive(screen.id)}
                className={`w-full text-left rounded-xl p-6 border transition-all duration-300 ${
                  active === screen.id
                    ? 'bg-accent-orange/10 border-accent-orange/50'
                    : 'bg-dark-bg-secondary border-dark-border hover:border-accent-orange/30'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-dark-header-text">Aba {screen.label}</h3>
                  <span className="text-xs px-2 py-1 bg-accent-orange/20 text-accent-orange rounded border border-accent-orange/30">
                    {screen.source}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{screen.desc}</p>
              </button>
            ))}

            <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 text-sm text-gray-400">
              Projeto executado localmente. O deploy público aguarda autenticação e limite de
              requisições no endpoint de análise, já que cada chamada consome créditos da API da
              OpenAI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
