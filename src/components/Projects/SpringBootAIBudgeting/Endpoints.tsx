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
    path: '/transactions',
    description: 'Cria uma nova transação financeira',
    body: `{
  "description": "Gastei no mercado",
  "category": "GROCERIES",
  "amount": 8000
}`,
  },
  {
    method: 'GET',
    path: '/transactions/{category}',
    description: 'Lista todas as transações de uma categoria',
    response: `GET /transactions/GROCERIES

[
  {
    "id": "…",
    "description": "Gastei no mercado",
    "category": "GROCERIES",
    "amount": 8000
  }
]`,
  },
  {
    method: 'POST',
    path: '/transactions/ai',
    description: 'Recebe um áudio, transcreve, executa a ferramenta escolhida pelo modelo e responde em áudio',
    note: 'Endpoint multipart com o pipeline de IA completo (Whisper → tool calling → TTS); a integração de áudio ponta a ponta está em desenvolvimento no controller.',
  },
  {
    method: 'GET',
    path: '/transactions/status',
    description: 'Healthcheck simples do serviço de transações',
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
            API de <span className="text-accent-orange">Transações</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Superfície REST exposta por <code className="text-accent-orange">TransactionController</code>
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
                <code className="text-accent-orange font-mono text-base">{ep.path}</code>
              </div>
              <p className="text-gray-300 mb-4">{ep.description}</p>

              {ep.body && (
                <pre className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{ep.body}</code>
                </pre>
              )}

              {ep.response && (
                <pre className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{ep.response}</code>
                </pre>
              )}

              {ep.note && (
                <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4 text-sm text-gray-300">
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
