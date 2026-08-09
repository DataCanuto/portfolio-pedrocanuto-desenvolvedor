'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState<'arquitetura' | 'aprendizados' | 'proximos'>(
    'arquitetura'
  );

  const diagrams = [
    {
      id: 'arquitetura',
      name: 'Arquitetura em Camadas',
      icon: Layers,
      description: 'Como uma requisição percorre a aplicação Spring Boot, do clique do usuário até o banco de dados',
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              1
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Interface Web</h4>
              <p className="text-gray-400 text-sm">Aluno ou administrador interage com as páginas de cadastro e agenda</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              2
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Controller</h4>
              <p className="text-gray-400 text-sm">Recebe a requisição HTTP e delega o processamento para a camada de serviço</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              3
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Service</h4>
              <p className="text-gray-400 text-sm">Aplica as regras de negócio, como a verificação de conflito de horário na agenda</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              4
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Repository (Spring Data JPA)</h4>
              <p className="text-gray-400 text-sm">Executa as operações de persistência sobre as entidades Aluno, Aula e Usuário</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
              5
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-dark-header-text">Banco de Dados Relacional</h4>
              <p className="text-gray-400 text-sm">Armazena alunos, aulas e usuários de forma normalizada e consistente</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'aprendizados',
      name: 'Principais Aprendizados',
      icon: Lightbulb,
      description: 'O que este projeto consolidou sobre desenvolvimento com Java e Spring Boot',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🧱 Arquitetura em Camadas</h4>
            <p className="text-gray-300 text-sm">
              Separar Controller, Service e Repository facilita testar e evoluir cada parte da aplicação de forma isolada.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">✅ Regras de Negócio no Service</h4>
            <p className="text-gray-300 text-sm">
              Validações como o conflito de horário pertencem à camada de serviço, não ao controller nem à view.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🔐 Segurança desde o Início</h4>
            <p className="text-gray-300 text-sm">
              Definir cedo quais rotas são públicas e quais exigem autenticação evita retrabalho posterior com Spring Security.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">⚡ ORM Acelera o Desenvolvimento</h4>
            <p className="text-gray-300 text-sm">
              Spring Data JPA e Hibernate eliminam boa parte do SQL manual, mantendo o foco nas regras do domínio.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'proximos',
      name: 'Próximos Passos',
      icon: Rocket,
      description: 'Evoluções planejadas para o sistema a partir da versão atual',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🔔 Notificações Automáticas</h4>
            <p className="text-gray-300 text-sm">
              Envio de lembretes por e-mail ou WhatsApp confirmando o horário das aulas agendadas.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">💳 Controle de Pagamentos</h4>
            <p className="text-gray-300 text-sm">
              Registro do status de pagamento de cada aula, com histórico por aluno.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📱 Acesso do Aluno à Própria Agenda</h4>
            <p className="text-gray-300 text-sm">
              Área logada para o aluno visualizar suas próximas aulas sem depender do administrador.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📈 Relatórios de Frequência</h4>
            <p className="text-gray-300 text-sm">
              Painéis simples mostrando assiduidade e evolução de cada aluno ao longo do tempo.
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
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <span className="text-accent-orange">Arquitetura</span> & Aprendizados
          </h2>
          <p className="text-gray-400 text-lg">
            Como a aplicação foi estruturada e o que ela consolidou em termos técnicos
          </p>
        </motion.div>

        {/* Tab Navigation */}
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

        {/* Content */}
        <motion.div
          key={activeDiagram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-2">
            {currentDiagram?.name}
          </h3>
          <p className="text-gray-400 text-sm mb-6">{currentDiagram?.description}</p>
          {currentDiagram?.content}
        </motion.div>

        {/* Navigation Buttons */}
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
                  index === getCurrentIndex()
                    ? 'bg-accent-orange w-8'
                    : 'bg-dark-border w-2'
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
