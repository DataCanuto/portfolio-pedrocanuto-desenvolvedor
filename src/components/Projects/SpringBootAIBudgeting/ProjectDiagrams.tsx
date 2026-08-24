'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic2, Layers, Boxes, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState<'fluxo' | 'arquitetura' | 'padroes'>(
    'fluxo'
  );

  const diagrams = [
    {
      id: 'fluxo',
      name: 'Fluxo por Voz',
      icon: Mic2,
      description: 'Como um áudio enviado pelo cliente vira uma transação persistida — e volta como resposta falada',
      content: (
        <div className="space-y-6">
          {[
            {
              title: 'Cliente envia áudio',
              desc: 'Upload multipart em POST /transactions/ai com o comando de voz do usuário',
            },
            {
              title: 'Transcrição (Speech-to-Text)',
              desc: 'ChatClient usa o modelo whisper-1 para transcrever o áudio em texto',
            },
            {
              title: 'Seleção de ferramenta (Tool Calling)',
              desc: 'O modelo de chat interpreta o texto e escolhe qual caso de uso da aplicação invocar',
            },
            {
              title: 'Execução do caso de uso',
              desc: 'PersistTransactionUseCase ou ListTransactionsByCategoryUseCase processa o comando sobre o domínio',
            },
            {
              title: 'Síntese de voz (Text-to-Speech)',
              desc: 'ChatClient gera um áudio MP3 (modelo tts-1) com a resposta final para o cliente',
            },
          ].map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
                {idx + 1}
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-dark-header-text">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'arquitetura',
      name: 'Arquitetura em Camadas',
      icon: Layers,
      description: 'Separação DDD entre domínio, aplicação e infraestrutura — dependências sempre apontam para dentro',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-accent-orange/30 rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🧠 domain/</h4>
            <p className="text-gray-300 text-sm mb-2">
              Modelo de negócio puro: <code className="text-accent-orange">Transaction</code> (agregado),{' '}
              <code className="text-accent-orange">Category</code> (value object) e{' '}
              <code className="text-accent-orange">TransactionRepository</code> (contrato). Sem
              dependências de Spring ou de anotações JPA.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">⚙️ application/</h4>
            <p className="text-gray-300 text-sm mb-2">
              Casos de uso (<code className="text-accent-orange">PersistTransactionUseCase</code>,{' '}
              <code className="text-accent-orange">ListTransactionsByCategoryUseCase</code>)
              anotados com <code className="text-accent-orange">@Tool</code>, expostos tanto para a
              API REST quanto para o tool calling do ChatClient.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🔌 infrastructure/</h4>
            <p className="text-gray-300 text-sm">
              Adaptadores técnicos: <code className="text-accent-orange">TransactionController</code>{' '}
              (HTTP), <code className="text-accent-orange">TransactionRepositoryAdapter</code> +{' '}
              <code className="text-accent-orange">TransactionJpaRepository</code> (persistência),
              integração com o ChatClient. Pode mudar sem forçar reescrita das regras de negócio.
            </p>
          </div>

          <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4 mt-6">
            <p className="text-gray-300 text-sm">
              <span className="text-accent-orange font-bold">Regra de dependência:</span>{' '}
              <code>infrastructure → application → domain</code>. O domínio nunca conhece a
              aplicação nem a infraestrutura — trocar MySQL por outro banco é uma mudança isolada
              no adaptador.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'padroes',
      name: 'Padrões de Design',
      icon: Boxes,
      description: 'Decisões de design que sustentam a arquitetura e facilitam evolução e testes',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📦 Repository Pattern</h4>
            <p className="text-gray-300 text-sm">
              O contrato <code className="text-accent-orange">TransactionRepository</code> vive no
              domínio; a implementação JPA vive na infraestrutura. A lógica de negócio depende de
              uma abstração, não do Spring Data — testes de caso de uso usam repositórios fake.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🔖 Identificadores Fortemente Tipados</h4>
            <p className="text-gray-300 text-sm">
              Em vez de passar <code className="text-accent-orange">UUID</code> cru pelo código,{' '}
              <code className="text-accent-orange">TransactionId</code> encapsula a identidade da
              transação — mais segurança em tempo de compilação e assinaturas mais expressivas.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🔄 Adapter Pattern</h4>
            <p className="text-gray-300 text-sm">
              <code className="text-accent-orange">TransactionRepositoryAdapter</code> converte
              entre o modelo de domínio e a <code className="text-accent-orange">TransactionEntity</code>{' '}
              JPA, isolando o Hibernate do restante da aplicação.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🛠️ Tool Calling como Fronteira de IA</h4>
            <p className="text-gray-300 text-sm">
              Casos de uso são registrados no <code className="text-accent-orange">ChatClient</code>{' '}
              via <code className="text-accent-orange">.defaultTools(...)</code>. O modelo de IA só
              enxerga a mesma superfície de aplicação usada pelo REST — nenhuma regra de negócio
              duplicada para a IA.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentDiagram = diagrams.find((d) => d.id === activeDiagram);
  const getCurrentIndex = () => diagrams.findIndex((d) => d.id === activeDiagram);

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % diagrams.length;
    setActiveDiagram(diagrams[nextIndex].id as typeof activeDiagram);
  };

  const handlePrev = () => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + diagrams.length) % diagrams.length;
    setActiveDiagram(diagrams[prevIndex].id as typeof activeDiagram);
  };

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
            <span className="text-accent-orange">Arquitetura</span> & Design
          </h2>
          <p className="text-gray-400 text-lg">
            Como a IA foi encaixada em uma arquitetura em camadas sem furar os limites do domínio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {diagrams.map((diagram) => (
            <button
              key={diagram.id}
              onClick={() => setActiveDiagram(diagram.id as typeof activeDiagram)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeDiagram === diagram.id
                  ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                  : 'bg-dark-bg-secondary border border-dark-border text-gray-300 hover:border-accent-orange/50'
              }`}
            >
              <diagram.icon size={18} />
              {diagram.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeDiagram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-2">{currentDiagram?.name}</h3>
          <p className="text-gray-400 text-sm mb-6">{currentDiagram?.description}</p>
          {currentDiagram?.content}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center"
        >
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-6 py-3 bg-dark-bg border border-dark-border rounded-lg text-gray-300 hover:border-accent-orange hover:text-accent-orange transition-all duration-300"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <div className="flex gap-2">
            {diagrams.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === getCurrentIndex() ? 'bg-accent-orange w-8' : 'bg-dark-border w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-accent-orange rounded-lg text-black font-bold hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Próximo
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
