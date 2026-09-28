'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Lightbulb,
  Layers,
  TestTube2,
  UserCog,
  Network,
  FileText,
  FolderTree,
  ClipboardList,
  Compass,
  LayoutTemplate,
  Code2,
  Search,
  Users,
  Sprout,
  Sparkles,
  LogIn,
  Home,
  Camera,
  MessagesSquare,
  User,
  ArrowRight,
  Target,
  Route,
  PenLine,
  Workflow,
  Palette,
  Rocket,
} from 'lucide-react';

const iaArtifacts = [
  {
    icon: FileText,
    title: 'Documento de Arquitetura da Informação',
    description:
      'Define como o conteúdo é organizado, nomeado e encontrado. Responde três perguntas: o que existe no produto, onde cada coisa fica e como o usuário chega até ela.',
    contents: [
      'Inventário de conteúdo e funcionalidades',
      'Agrupamentos e taxonomia, validados com card sorting',
      'Rótulos de navegação na linguagem do usuário',
      'Sistemas de navegação e de busca',
      'Regras de hierarquia e prioridade',
    ],
  },
  {
    icon: FolderTree,
    title: 'Site Map',
    description:
      'A representação visual da arquitetura: todas as páginas ou telas organizadas em árvore, por nível de profundidade, mostrando como se conectam.',
    contents: [
      'Nível 0: ponto de entrada (home ou abertura do app)',
      'Nível 1: navegação principal',
      'Nível 2+: subpáginas e telas de detalhe',
      'Fluxos críticos destacados',
      'O que fica fora do MVP (backlog)',
    ],
  },
];

const iaBenefits = [
  {
    icon: ClipboardList,
    title: 'Escopo visível',
    description:
      'Todas as telas listadas em um só lugar: fica claro o tamanho do projeto, o que entra no MVP e o que vai para o backlog.',
  },
  {
    icon: Compass,
    title: 'Navegação coerente',
    description:
      'Hierarquia e rótulos decididos antes do layout evitam menus confusos e reduzem a carga cognitiva de quem usa.',
  },
  {
    icon: LayoutTemplate,
    title: 'Wireframes sem lacunas',
    description:
      'Cada nó do site map vira um wireframe, então nenhuma tela ou estado é esquecido no meio do caminho.',
  },
  {
    icon: Code2,
    title: 'Ponte com o desenvolvimento',
    description:
      'O site map se traduz em rotas, URLs e componentes, o que facilita estimativas e o handoff para a engenharia.',
  },
  {
    icon: Search,
    title: 'Validação barata',
    description:
      'Card sorting e tree testing validam a estrutura com usuários antes do design visual. Mudar uma caixa no diagrama custa muito menos que refazer telas.',
  },
  {
    icon: Users,
    title: 'Time alinhado',
    description:
      'Stakeholders, design e desenvolvimento discutem sobre o mesmo mapa, com menos retrabalho e menos decisões baseadas em suposição.',
  },
];

// Site map do Flora Hub — telas do wireframe digital e do protótipo
const sitemapGroups = [
  {
    label: 'Entrada',
    hint: 'antes do login',
    columns: 'sm:grid-cols-2',
    branches: [
      { icon: Sparkles, title: 'Onboarding', children: [{ label: 'Boas-vindas' }, { label: 'Primeiros passos' }] },
      { icon: LogIn, title: 'Autenticação', children: [{ label: 'Login' }, { label: 'Cadastro' }] },
    ],
  },
  {
    label: 'Navegação principal',
    hint: 'tab bar',
    columns: 'sm:grid-cols-2 lg:grid-cols-4',
    branches: [
      {
        icon: Home,
        title: 'Home',
        inFlow: true,
        children: [{ label: 'Destaques' }, { label: 'Busca' }],
      },
      {
        icon: Camera,
        title: 'Identificar planta',
        inFlow: true,
        children: [
          { label: 'Câmera' },
          { label: 'Resultado + selo de segurança', inFlow: true },
          { label: 'Detalhe da planta & cuidados' },
        ],
      },
      {
        icon: MessagesSquare,
        title: 'Comunidade',
        inFlow: true,
        children: [{ label: 'Feed', inFlow: true }, { label: 'Criar post' }],
      },
      {
        icon: User,
        title: 'Perfil',
        children: [{ label: 'Plantas salvas' }, { label: 'Configurações' }],
      },
    ],
  },
];

const primaryFlow = ['Home', 'Identificar planta', 'Resultado + selo', 'Comunidade'];

const webDesignSteps = [
  {
    icon: Target,
    title: 'Briefing e objetivos',
    description:
      'Alinhar com stakeholders o problema a resolver, o público e as metas de negócio antes de qualquer solução.',
    deliverable: 'Brief do projeto e critérios de sucesso',
  },
  {
    icon: Heart,
    title: 'Pesquisa e empatia',
    description:
      'Survey, entrevistas e auditoria competitiva para entender necessidades, frustrações e o que já existe no mercado.',
    deliverable: 'Personas, mapa da jornada e auditoria competitiva',
    sectionId: 'research',
    sectionLabel: 'Ver pesquisa do Flora Hub',
  },
  {
    icon: Network,
    title: 'Arquitetura da informação',
    description:
      'Inventariar conteúdo e funcionalidades, agrupar e nomear com card sorting e definir a taxonomia e os rótulos de navegação.',
    deliverable: 'Documento de arquitetura da informação',
    focus: true,
  },
  {
    icon: FolderTree,
    title: 'Site map',
    description:
      'Transformar a arquitetura em uma hierarquia de páginas ou telas: navegação principal, subpáginas e as conexões entre elas.',
    deliverable: 'Site map validado com tree testing',
    focus: true,
  },
  {
    icon: Route,
    title: 'Fluxos de usuário',
    description:
      'Desenhar o caminho de cada tarefa crítica sobre o site map, como identificar uma planta e checar o selo de segurança.',
    deliverable: 'User flows das tarefas principais',
    sectionId: 'user-journey',
    sectionLabel: 'Ver jornada do usuário',
  },
  {
    icon: PenLine,
    title: 'Wireframes',
    description:
      'Do papel ao digital: layout e hierarquia visual de cada tela listada no site map, ainda sem cores ou estilo.',
    deliverable: 'Wireframes de papel e digitais',
    sectionId: 'wireframes',
    sectionLabel: 'Ver wireframes',
  },
  {
    icon: Workflow,
    title: 'Protótipo e testes de usabilidade',
    description:
      'Conectar as telas em um protótipo navegável, testar com usuários reais e iterar com base em evidências.',
    deliverable: 'Protótipo de baixa fidelidade e relatório de testes',
  },
  {
    icon: Palette,
    title: 'Design visual e alta fidelidade',
    description:
      'Aplicar cores, tipografia e componentes de um design system, chegando a mockups e ao protótipo de alta fidelidade.',
    deliverable: 'Mockups e protótipo de alta fidelidade',
    sectionId: 'mockups',
    sectionLabel: 'Ver mockups',
  },
  {
    icon: Rocket,
    title: 'Handoff e desenvolvimento',
    description:
      'Entregar especificações e assets; o site map vira a base de rotas e componentes. Depois do lançamento, medir e iterar.',
    deliverable: 'Especificações para o time de desenvolvimento',
  },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Foundations() {
  const methods = [
    {
      icon: <Heart className="text-white" size={22} />,
      color: 'bg-red-500',
      title: 'Empatia',
      description:
        'Pesquisa com usuários, entrevistas e personas para entender necessidades, frustrações e motivações reais antes de desenhar qualquer tela.',
    },
    {
      icon: <Lightbulb className="text-white" size={22} />,
      color: 'bg-orange-500',
      title: 'Ideação',
      description:
        'Brainstorming e priorização de soluções a partir dos problemas identificados, mapeando a jornada ideal do usuário.',
    },
    {
      icon: <Layers className="text-white" size={22} />,
      color: 'bg-blue-500',
      title: 'Prototipação',
      description:
        'Wireframes em papel, wireframes digitais e protótipos de baixa e alta fidelidade, cada vez mais próximos do produto final.',
    },
    {
      icon: <TestTube2 className="text-white" size={22} />,
      color: 'bg-green-500',
      title: 'Teste',
      description:
        'Estudos de usabilidade com usuários reais para validar decisões de design e orientar iterações baseadas em evidências.',
    },
  ];

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
            Fundamentos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            O papel do UX Designer, o processo iterativo de design centrado no usuário e como a
            arquitetura da informação organiza um projeto de web design, do briefing à entrega.
          </p>
        </motion.div>

        {/* O que é um UX Designer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg border border-dark-border rounded-xl p-6 md:p-8 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-accent-orange/10 rounded-lg">
              <UserCog className="text-accent-orange" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-header-text mb-3">
                O que faz um UX Designer
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                É o profissional responsável por tornar produtos digitais úteis, utilizáveis e agradáveis —
                pesquisando o contexto real do usuário, traduzindo problemas em soluções de interface e
                validando cada decisão com dados e testes, em vez de suposições.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Métodos de UX Design */}
        <h3 className="text-2xl font-bold text-dark-header-text mb-6">
          Métodos de UX Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center mx-auto mb-4`}>
                {method.icon}
              </div>
              <h4 className="text-lg font-bold text-dark-header-text mb-2">{method.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arquitetura da Informação & Site Map */}
        <div id="arquitetura-informacao" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-accent-orange/10 rounded-lg">
                <Network className="text-accent-orange" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark-header-text">
                Arquitetura da Informação &amp; Site Map
              </h3>
            </div>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Antes de abrir o Figma, o projeto precisa de um mapa. O documento de arquitetura da
              informação e o site map organizam o conteúdo e a navegação do produto e guiam todas as
              etapas seguintes: wireframes, protótipos, testes e desenvolvimento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {iaArtifacts.map((artifact, index) => {
              const Icon = artifact.icon;
              return (
                <motion.div
                  key={artifact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-bg border border-dark-border rounded-xl p-6 md:p-8 hover:border-accent-orange/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-accent-orange shrink-0" size={26} />
                    <h4 className="text-xl font-bold text-dark-header-text">{artifact.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-5">{artifact.description}</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-3">
                    O que contém
                  </p>
                  <ul className="space-y-2">
                    {artifact.contents.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Por que criar antes das telas */}
          <h4 className="text-xl font-bold text-dark-header-text mb-6">
            Por que criar esses documentos antes de desenhar telas
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {iaBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-dark-bg border border-dark-border rounded-xl p-5 hover:border-accent-orange/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent-orange/10 rounded-lg">
                      <Icon className="text-accent-orange" size={18} />
                    </div>
                    <p className="font-bold text-dark-header-text">{benefit.title}</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Site map do Flora Hub */}
          <h4 className="text-xl font-bold text-dark-header-text mb-2">Site Map do Flora Hub</h4>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
            Estrutura de telas do app, derivada da pesquisa. Nos testes com wireframes de papel, a
            identificação por câmera se mostrou a ação central, por isso ganhou lugar na navegação
            principal, e o selo de segurança para pets e crianças fica a um toque do resultado.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-bg border border-dark-border rounded-xl p-5 md:p-8"
          >
            {/* Nível 0 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 px-5 py-3 bg-accent-orange text-black font-bold rounded-lg shadow-lg shadow-accent-orange/30">
                <Sprout size={20} />
                Flora Hub
              </div>
              <div className="w-px h-6 bg-dark-border" />
            </div>

            <div className="flex flex-col gap-6">
              {sitemapGroups.map((group) => (
                <div key={group.label} className="border-t border-dark-border pt-5">
                  <p className="text-xs uppercase tracking-wide font-semibold text-gray-500 mb-4">
                    {group.label} <span className="normal-case tracking-normal font-normal">· {group.hint}</span>
                  </p>
                  <div className={`grid grid-cols-1 ${group.columns} gap-4`}>
                    {group.branches.map((branch) => {
                      const Icon = branch.icon;
                      const inFlow = 'inFlow' in branch && branch.inFlow;
                      return (
                        <div
                          key={branch.title}
                          className={`rounded-lg border p-4 ${
                            inFlow ? 'border-accent-orange/50 bg-accent-orange/5' : 'border-dark-border bg-dark-bg-secondary'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className="text-accent-orange shrink-0" size={18} />
                            <p className="font-bold text-dark-header-text text-sm">{branch.title}</p>
                          </div>
                          <ul className="ml-2 pl-4 border-l border-dark-border space-y-2">
                            {branch.children.map((child) => (
                              <li
                                key={child.label}
                                className={`relative text-sm leading-snug before:absolute before:-left-4 before:top-2.5 before:w-3 before:h-px before:bg-dark-border ${
                                  'inFlow' in child && child.inFlow ? 'text-accent-orange font-semibold' : 'text-gray-400'
                                }`}
                              >
                                {child.label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Legenda: fluxo principal e backlog */}
            <div className="mt-6 pt-5 border-t border-dark-border flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-gray-500 font-semibold mr-1">Fluxo principal:</span>
                {primaryFlow.map((step, index) => (
                  <React.Fragment key={step}>
                    <span className="px-2.5 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange font-semibold">
                      {step}
                    </span>
                    {index < primaryFlow.length - 1 && <ArrowRight size={14} className="text-gray-500" />}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="inline-block px-2.5 py-1 mr-2 rounded-full border border-dashed border-dark-border text-gray-400">
                  Backlog
                </span>
                Marketplace de mudas entre vizinhos: pedido na pesquisa, registrado no mapa e fora do MVP.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Passo a passo de um projeto de web design */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-header-text mb-3">
              Passo a passo de um projeto de web design
            </h3>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Onde a arquitetura da informação e o site map entram no processo, e por que eles vêm
              antes dos wireframes: cada etapa seguinte parte do mapa definido nelas.
            </p>
          </motion.div>

          <ol className="relative border-l border-dark-border ml-5 md:ml-6 space-y-6">
            {webDesignSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-10"
                >
                  <span
                    className={`absolute -left-5 md:-left-6 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold ${
                      step.focus
                        ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/30'
                        : 'bg-dark-bg border border-dark-border text-accent-orange'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    className={`rounded-xl border p-5 transition-all duration-300 ${
                      step.focus
                        ? 'border-accent-orange/60 bg-accent-orange/5'
                        : 'border-dark-border bg-dark-bg hover:border-accent-orange/50'
                    }`}
                  >
                    {step.focus && (
                      <span className="inline-block mb-2 text-[10px] uppercase tracking-wide font-bold text-black bg-accent-orange px-2 py-0.5 rounded-full">
                        Organiza o projeto
                      </span>
                    )}
                    <div className="flex items-start gap-2 mb-2">
                      <Icon className="text-accent-orange shrink-0 mt-1" size={20} />
                      <h4 className="text-lg font-bold text-dark-header-text">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">{step.description}</p>
                    <p className="text-sm text-gray-400">
                      <span className="text-accent-orange font-semibold">Entregável: </span>
                      {step.deliverable}
                    </p>
                    {step.sectionId && (
                      <button
                        onClick={() => scrollToSection(step.sectionId!)}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-orange hover:text-accent-orange-light"
                      >
                        {step.sectionLabel}
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
