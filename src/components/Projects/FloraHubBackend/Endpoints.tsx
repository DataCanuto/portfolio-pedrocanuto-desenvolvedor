'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

interface Endpoint {
  method: 'POST' | 'GET';
  path: string;
  description: string;
  body?: string;
  response?: string;
  note?: string;
}

const endpoints: Endpoint[] = [
  {
    method: 'POST',
    path: '/api/plantas/analisar',
    description:
      'Endpoint principal: identifica a planta, obtém os cuidados da espécie, consulta o clima e gera as recomendações',
    body: `{
  "imageUrl": "data:image/jpeg;base64,/9j/4AAQ...",
  "latitude": -12.97,
  "longitude": -38.50
}`,
    response: `{
  "analiseId": 12,
  "identificacao": {
    "nomePopular": "Rosa do Deserto",
    "nomeCientifico": "Adenium obesum",
    "genero": "Adenium",
    "especie": "obesum",
    "continenteOrigem": "África",
    "aparenciaSaudavel": true,
    "confianca": 0.9
  },
  "cuidados": { "rega": "baixa", "umidadeMin": 20, "umidadeMax": 50, ... },
  "ambiente": { "temperatura": 27.93, "umidade": 76, "chuva": true, ... },
  "recomendacoes": [
    { "categoria": "UMIDADE", "nivel": "ATENCAO",
      "mensagem": "A umidade do ar atual (76%) está acima do ideal (20–50%)..." }
  ],
  "status": "ATENCAO",
  "aviso": null
}`,
    note: 'Sem latitude/longitude, ou com a OpenWeather indisponível, a análise não falha: devolve identificação e cuidados com um aviso explicando o que ficou de fora.',
  },
  {
    method: 'POST',
    path: '/api/plants/identify',
    description: 'Apenas a identificação por imagem (uma chamada ao GPT-4o), persistida no histórico',
    body: `{ "imageUrl": "https://exemplo.com/planta.jpg" }`,
  },
  {
    method: 'GET',
    path: '/api/plants',
    description: 'Lista o histórico de identificações',
  },
  {
    method: 'GET',
    path: '/api/plants/{id}',
    description: 'Retorna uma identificação específica ou 404',
  },
];

const methodColor: Record<string, string> = {
  POST: 'bg-green-500/20 text-green-400 border-green-500/50',
  GET: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
};

export default function Endpoints() {
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
            <Wrench className="inline-block mb-2 text-accent-orange mr-2" size={36} />
            API <span className="text-accent-orange">REST</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Expostos por <code className="text-accent-orange">AnalisarPlantaController</code> e{' '}
            <code className="text-accent-orange">PlantIdentificationController</code>
          </p>
        </motion.div>

        <div className="space-y-4">
          {endpoints.map((ep, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold border ${methodColor[ep.method]}`}
                >
                  {ep.method}
                </span>
                <code className="text-accent-orange font-mono text-base break-all">{ep.path}</code>
              </div>
              <p className="text-gray-300 mb-4">{ep.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {ep.body && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Request</p>
                    <pre className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{ep.body}</code>
                    </pre>
                  </div>
                )}

                {ep.response && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Response</p>
                    <pre className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{ep.response}</code>
                    </pre>
                  </div>
                )}
              </div>

              {ep.note && (
                <div className="mt-4 bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4 text-sm text-gray-300">
                  {ep.note}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
