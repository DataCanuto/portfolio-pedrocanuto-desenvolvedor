'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, MousePointerClick, HeartCrack, Search, ExternalLink, Sprout, Map } from 'lucide-react';

const empathyMap = [
  {
    icon: <MessageSquare className="text-blue-400" size={22} />,
    color: 'border-blue-500/30 bg-blue-500/10',
    title: 'Diz',
    content: '"Quero cuidar das minhas plantas sem colocar minha família ou meu pet em risco."',
  },
  {
    icon: <Brain className="text-purple-400" size={22} />,
    color: 'border-purple-500/30 bg-purple-500/10',
    title: 'Pensa',
    content: 'Não confia no que encontra online e teme cometer um erro que machuque o filho ou o cachorro.',
  },
  {
    icon: <MousePointerClick className="text-green-400" size={22} />,
    color: 'border-green-500/30 bg-green-500/10',
    title: 'Faz',
    content: 'Pesquisa em vários sites, encontra respostas contraditórias e dirige até a loja para perguntar pessoalmente.',
  },
  {
    icon: <HeartCrack className="text-red-400" size={22} />,
    color: 'border-red-500/30 bg-red-500/10',
    title: 'Sente',
    content: 'Ansiosa e frustrada por perder uma tarde inteira atrás de uma informação que deveria ser instantânea.',
  },
];

// Estrutura oficial do template do Google UX Design Certificate:
// Persona / Goal no topo, e uma coluna por etapa (Action) com 3 linhas —
// Task List, Feeling Adjective e Improvement Opportunities.
const journeyMapGoal =
  'Confirmar rapidamente se uma planta é segura para a família e o pet, e obter orientação de cuidado confiável sem esforço.';

const journeyMapStages = [
  {
    action: 'Descobrir',
    tasks: [
      'Percebe uma planta atraente em uma loja ou na casa de um amigo',
      'Fotografa a planta para lembrar depois',
      'Abre o app para identificá-la na hora',
    ],
    feeling: 'Curiosa, animada',
    opportunity: 'Permitir identificação instantânea pela câmera, no local.',
  },
  {
    action: 'Pesquisar segurança',
    tasks: [
      'Pesquisa em vários sites se é segura para o cão e o filho',
      'Compara informações conflitantes entre fontes',
      'Procura um indicador claro de toxicidade',
    ],
    feeling: 'Ansiosa, desconfiada',
    opportunity: 'Exibir um selo de segurança para pets/crianças antes de qualquer outro detalhe.',
  },
  {
    action: 'Decidir',
    tasks: [
      'Pesa conselhos conflitantes de diferentes fontes',
      'Cogita desistir ou perguntar pessoalmente na loja',
      'Busca uma resposta única e confiável, baseada em ciência',
    ],
    feeling: 'Frustrada, insegura',
    opportunity: 'Mostrar uma resposta confiável baseada em ciência em vez de dez opiniões.',
  },
  {
    action: 'Configurar cuidados',
    tasks: [
      'Tenta lembrar sozinha as necessidades de rega e luz',
      'Anota ou salva as instruções de cuidado',
      'Configura lembretes de rega',
    ],
    feeling: 'Esperançosa, um pouco sobrecarregada',
    opportunity: 'Gerar automaticamente um cronograma de cuidados a partir da espécie identificada.',
  },
  {
    action: 'Buscar apoio',
    tasks: [
      'Enfrenta um problema de cuidado semanas depois',
      'Não sabe a quem perguntar',
      'Procura uma comunidade de outros donos de plantas',
    ],
    feeling: 'Sozinha',
    opportunity: 'Conectá-la com donos próximos da mesma espécie de planta.',
  },
];

const auditRows = [
  {
    name: 'Flora Hub',
    isUs: true,
    type: '—',
    audience: 'Millennials, Gen Z e iniciantes',
    value: 'Une dados científicos, comunidade de confiança e segurança para pets/crianças em um só app.',
  },
  {
    name: 'PlantNet',
    isUs: false,
    type: 'Direto',
    audience: 'Botânicos e entusiastas',
    value: 'Identificação de espécies por foto, com respaldo científico.',
  },
  {
    name: 'Planta',
    isUs: false,
    type: 'Direto',
    audience: 'Donos de plantas urbanos',
    value: 'Lembretes de cuidado personalizados por planta e localização.',
  },
  {
    name: 'Vera: Plant Care',
    isUs: false,
    type: 'Direto',
    audience: 'Iniciantes',
    value: 'Diagnóstico de saúde da planta via foto com IA.',
  },
  {
    name: 'Blossom (Candide)',
    isUs: false,
    type: 'Indireto',
    audience: 'Hobbyists de jardinagem',
    value: 'Feed social para compartilhar progresso e comprar plantas.',
  },
];

export default function UserJourney() {
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
            Jornada do Usuário
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Pesquisa aplicada ao case Flora Hub — app para amantes de plantas — do mapa de empatia ao
            mapa da jornada do usuário e à auditoria de concorrentes.
          </p>
        </motion.div>

        {/* Mapa de Empatia */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-dark-header-text mb-2">Mapa de Empatia</h3>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Persona <span className="text-accent-orange font-semibold">Lucia</span>, 38 anos — quer cuidar de
            plantas em casa sem colocar o filho ou o cachorro em risco.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {empathyMap.map((quadrant, index) => (
              <motion.div
                key={quadrant.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-xl p-6 ${quadrant.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {quadrant.icon}
                  <h4 className="text-lg font-bold text-dark-header-text">{quadrant.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{quadrant.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mapa da Jornada do Usuário */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Map className="text-accent-orange" size={22} />
            <h3 className="text-2xl font-bold text-dark-header-text">Mapa da Jornada do Usuário</h3>
          </div>
          <p className="text-gray-400 mb-1 max-w-2xl">
            Persona <span className="text-accent-orange font-semibold">Lucia</span>
          </p>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Objetivo: {journeyMapGoal}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-xl border border-dark-border"
          >
            <table className="w-full min-w-[900px] text-sm border-collapse">
              <tbody>
                <tr>
                  <th className="sticky left-0 z-10 text-left align-top px-5 py-4 bg-dark-bg-secondary border-b border-r border-dark-border font-semibold text-dark-header-text w-40">
                    Ação
                  </th>
                  {journeyMapStages.map((stage) => (
                    <td
                      key={`action-${stage.action}`}
                      className="px-5 py-4 border-b border-dark-border bg-accent-orange/10 text-center font-bold text-dark-header-text whitespace-nowrap"
                    >
                      {stage.action}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="sticky left-0 z-10 text-left align-top px-5 py-4 bg-dark-bg-secondary border-b border-r border-dark-border font-semibold text-dark-header-text">
                    Lista de Tarefas
                  </th>
                  {journeyMapStages.map((stage) => (
                    <td
                      key={`tasks-${stage.action}`}
                      className="px-5 py-4 border-b border-dark-border bg-dark-bg align-top min-w-[200px]"
                    >
                      <ul className="list-disc pl-4 space-y-1 text-gray-300">
                        {stage.tasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="sticky left-0 z-10 text-left align-top px-5 py-4 bg-dark-bg-secondary border-b border-r border-dark-border font-semibold text-dark-header-text">
                    Sentimento
                  </th>
                  {journeyMapStages.map((stage) => (
                    <td
                      key={`feeling-${stage.action}`}
                      className="px-5 py-4 border-b border-dark-border bg-dark-bg align-top text-gray-300 italic"
                    >
                      {stage.feeling}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="sticky left-0 z-10 text-left align-top px-5 py-4 bg-dark-bg-secondary border-r border-dark-border font-semibold text-dark-header-text">
                    Oportunidades de Melhoria
                  </th>
                  {journeyMapStages.map((stage) => (
                    <td
                      key={`opportunity-${stage.action}`}
                      className="px-5 py-4 bg-dark-bg align-top text-gray-300"
                    >
                      {stage.opportunity}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Auditoria de Concorrentes */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Search className="text-accent-orange" size={22} />
            <h3 className="text-2xl font-bold text-dark-header-text">Auditoria de Concorrentes</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Mapeamento de concorrentes diretos e indiretos no mercado de apps de cuidado com plantas para
            identificar oportunidades para o Flora Hub.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-xl border border-dark-border"
          >
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-dark-bg-secondary">
                  <th className="text-left px-5 py-3 font-semibold text-dark-header-text">Concorrente</th>
                  <th className="text-left px-5 py-3 font-semibold text-dark-header-text">Tipo</th>
                  <th className="text-left px-5 py-3 font-semibold text-dark-header-text">Público</th>
                  <th className="text-left px-5 py-3 font-semibold text-dark-header-text">Proposta de valor</th>
                </tr>
              </thead>
              <tbody>
                {auditRows.map((row) => (
                  <tr
                    key={row.name}
                    className={`border-t border-dark-border ${row.isUs ? 'bg-accent-orange/10' : 'bg-dark-bg'}`}
                  >
                    <td className="px-5 py-4 font-semibold text-dark-header-text whitespace-nowrap">
                      {row.name}
                      {row.isUs && (
                        <span className="ml-2 text-[10px] uppercase tracking-wide font-bold text-accent-orange bg-accent-orange/20 px-2 py-0.5 rounded-full">
                          nosso app
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-gray-400 whitespace-nowrap">{row.type}</td>
                    <td className="px-5 py-4 text-gray-300">{row.audience}</td>
                    <td className="px-5 py-4 text-gray-300">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Project Portfolio */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Sprout className="text-accent-orange" size={22} />
            <h3 className="text-2xl font-bold text-dark-header-text">Portfólio do Projeto — Flora Hub</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Case study completo, do problema à entrega: pesquisa, personas, wireframes, protótipos,
            testes de usabilidade e considerações de acessibilidade.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-orange/10 to-transparent border border-accent-orange/30 rounded-xl p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-dark-header-text mb-2">
                  Flora Hub — All in One for Plant Lovers
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                  App conceitual que une conhecimento científico verificado e comunidade de confiança para
                  amantes de plantas, com identificação por foto e selo de segurança para pets e crianças.
                </p>
              </div>
              <a
                href="/assets/documents/case-studies/flora-hub-case-study.html"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
              >
                Ver Case Study Completo
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
