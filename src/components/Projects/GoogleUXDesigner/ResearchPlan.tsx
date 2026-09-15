'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Target,
  HelpCircle,
  BarChart3,
  FlaskConical,
  Users,
  ScrollText,
  ClipboardList,
} from 'lucide-react';

const background = {
  facts: [
    { label: 'Título', value: 'Flora Hub — Plano de Pesquisa com Usuários' },
    { label: 'Responsável', value: 'Pedro Canuto, UX Designer' },
    { label: 'Stakeholders', value: 'Product Owner, time de engenharia, parceiros varejistas de plantas' },
    { label: 'Data', value: '07–10 de setembro de 2026' },
  ],
  context:
    'Hoje, quem quer cuidar de plantas depende de grupos de WhatsApp, vídeos e buscas soltas na internet — informação fragmentada e pouco confiável, especialmente sobre segurança para crianças e pets.',
  objective:
    'Entender como dois públicos distintos — quem já cuida de plantas e quem nunca cuidou — decidem em quem confiar, e o que os impede de agir com mais segurança e confiança.',
};

const goals = [
  'Entender o que leva alguém a decidir cuidar (ou não) de uma planta em casa.',
  'Mapear onde as pessoas buscam informação de cuidado hoje e por que confiam ou desconfiam dela.',
  'Validar a hipótese de que um selo de segurança pet/criança reduz a ansiedade na decisão de compra.',
  'Avaliar o apetite por funcionalidades de comunidade, como trocar experiências ou comprar/vender mudas com vizinhos.',
];

const questions = [
  'Como as pessoas confirmam hoje se uma planta é segura para crianças e animais de estimação?',
  'Quais fontes de informação elas consultam, e o que as faz confiar (ou não) nelas?',
  'O que impede alguém que nunca cuidou de plantas de começar?',
  'Que papel a comunidade e a opinião de outros donos de plantas têm na decisão final?',
];

const kpis = [
  { label: 'Time on task', detail: 'Tempo até identificar uma planta e visualizar o selo de segurança.' },
  { label: 'Uso de navegação vs. busca', detail: '% de usuários que navegam pelos destaques vs. que usam a busca direta.' },
  { label: 'Taxa de erro do usuário', detail: '% de tentativas de identificação que exigem correção ou nova tentativa.' },
  { label: 'Taxa de abandono (drop-off)', detail: '% de usuários que saem entre a captura da foto e o resultado da identificação.' },
  { label: 'Taxa de conversão', detail: '% de usuários que salvam a planta identificada ou entram em contato com a comunidade.' },
  { label: 'System Usability Scale (SUS)', detail: 'Nota de usabilidade percebida, coletada ao final de cada rodada de teste.' },
];

const methodology = [
  'Pesquisa quantitativa: survey via Google Forms, segmentado entre quem cuida e quem não cuida de plantas hoje.',
  'Pesquisa qualitativa: entrevistas moderadas 1:1 para aprofundar motivações e frustrações.',
  'Testes de usabilidade moderados e remotos, em duas rodadas — antes e depois dos ajustes no protótipo.',
];

const participants = [
  'Critérios: adultos de 18 a 60 anos, misturando hobbyists de plantas e iniciantes completos, com prioridade para quem tem crianças pequenas e/ou pets em casa.',
  'Recrutamento: rede pessoal e grupos de comunidades de plantas.',
  'Amostra: cerca de 10 respondentes na etapa quantitativa e 5 participantes por rodada de teste de usabilidade.',
];

const script = [
  'Abertura: apresentação, consentimento e contexto sobre a rotina da pessoa com plantas.',
  'Tarefas guiadas no protótipo: identificar uma planta pela câmera, checar o selo de segurança e explorar a aba de comunidade.',
  'Perguntas pós-tarefa: nível de confiança na informação exibida, pontos de confusão e System Usability Scale (SUS).',
  'Encerramento: agradecimento e espaço aberto para comentários livres.',
];

const elements = [
  {
    number: '01',
    icon: FileText,
    title: 'Contexto do projeto',
    kind: 'background' as const,
  },
  {
    number: '02',
    icon: Target,
    title: 'Objetivos da pesquisa',
    kind: 'list' as const,
    items: goals,
  },
  {
    number: '03',
    icon: HelpCircle,
    title: 'Perguntas de pesquisa',
    kind: 'list' as const,
    items: questions,
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'KPIs',
    kind: 'kpis' as const,
  },
  {
    number: '05',
    icon: FlaskConical,
    title: 'Metodologia',
    kind: 'list' as const,
    items: methodology,
  },
  {
    number: '06',
    icon: Users,
    title: 'Participantes',
    kind: 'list' as const,
    items: participants,
  },
  {
    number: '07',
    icon: ScrollText,
    title: 'Script',
    kind: 'list' as const,
    items: script,
  },
];

export default function ResearchPlan() {
  return (
    <section id="research" className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="text-accent-orange" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text">Pesquisa</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Plano de pesquisa UX do Flora Hub, estruturado nos sete elementos do template do Google UX
            Design Certificate.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {elements.map((el, index) => {
            const Icon = el.icon;
            return (
              <motion.div
                key={el.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 md:p-8 hover:border-accent-orange/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-accent-orange/40 font-bold text-3xl leading-none">{el.number}</span>
                  <div className="p-2 bg-accent-orange/10 rounded-lg">
                    <Icon className="text-accent-orange" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-header-text">{el.title}</h3>
                </div>

                {el.kind === 'background' && (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      {background.facts.map((fact) => (
                        <div key={fact.label} className="bg-dark-bg border border-dark-border rounded-lg px-4 py-3">
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{fact.label}</p>
                          <p className="text-gray-200 text-sm font-medium">{fact.value}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      <span className="text-accent-orange font-semibold">Contexto: </span>
                      {background.context}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-accent-orange font-semibold">Objetivo da pesquisa: </span>
                      {background.objective}
                    </p>
                  </div>
                )}

                {el.kind === 'list' && (
                  <ul className="space-y-2.5">
                    {el.items!.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {el.kind === 'kpis' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {kpis.map((kpi) => (
                      <div key={kpi.label} className="bg-dark-bg border border-dark-border rounded-lg p-4">
                        <p className="text-accent-orange font-semibold text-sm mb-1">{kpi.label}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{kpi.detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
