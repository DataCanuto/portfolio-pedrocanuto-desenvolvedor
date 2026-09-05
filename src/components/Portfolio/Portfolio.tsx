'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

const competencias = [
  { label: 'Back-End', valor: 'Java, Spring Web, Spring Boot, JPA/Hibernate, APIs REST, CRUD, Programação Orientada a Objetos, UML' },
  { label: 'Front-End', valor: 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS' },
  { label: 'Banco de Dados / Infra', valor: 'PostgreSQL, H2, Docker' },
  { label: 'Dados / Machine Learning', valor: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow, OpenCV, Regex' },
  { label: 'Design de Produto', valor: 'UX/UI Design, Figma' },
  { label: 'Idiomas', valor: 'Português (nativo), Inglês (fluente)' },
];

const projetosFreelance = [
  {
    titulo: 'Sistema de Agendamentos e Vitrine de Serviços',
    subtitulo: 'Junho/2026 · Freelance',
    linkLabel: 'pedrocanutomusico.vercel.app',
    href: 'https://pedrocanutomusico.vercel.app',
    descricao:
      'Desenvolvimento full stack, sob demanda de cliente, de aplicação web para gerenciamento de agendamentos de aulas e serviços, publicada em produção.',
  },
  {
    titulo: 'Galeria Digital de Artes',
    subtitulo: 'Dezembro/2025 · Freelance',
    linkLabel: 'ver projeto',
    href: 'https://datacanuto.github.io/galeria-digital-artes/catalog_mobile/',
    descricao: 'Desenvolvimento, para cliente, de landing page front-end responsiva para exposição de artes, com filtros por categoria e acesso via QR Code.',
  },
  {
    titulo: 'Pipeline de Dados — Data Flow Pipeline',
    subtitulo: 'Janeiro/2025 · Freelance',
    linkLabel: 'ver projeto',
    href: 'https://portfolio-pedrocanuto-desenvolvedor.vercel.app/engenharia-dados/data-streaming-project',
    descricao: 'Construção, para cliente, de pipeline em Python para análise de fluxo e gerenciamento de dados.',
  },
];

const projetosDados = [
  {
    titulo: 'Análise de Dados — Google Data Analytics Capstone',
    subtitulo: '2024 · Projeto de Certificação',
    linkLabel: 'ver projeto',
    href: 'https://portfolio-pedrocanuto-desenvolvedor.vercel.app/dashboards/googledataanalyticscapstone',
    descricao:
      'Projeto completo de ciência de dados sobre hábitos de atividade física (30 usuários Fitbit): limpeza e análise exploratória em Python (Pandas, NumPy, Matplotlib, Seaborn, Plotly) e recomendações de negócio orientadas a dados.',
  },
  {
    titulo: 'Machine Learning & Visão Computacional',
    subtitulo: '2025 · SENAI — IA na Indústria 4.0 (200h)',
    linkLabel: 'ver projeto',
    href: 'https://portfolio-pedrocanuto-desenvolvedor.vercel.app/engenharia-dados/machine-learning',
    descricao:
      'Conjunto de 20 notebooks cobrindo todo o fluxo de ciência de dados: limpeza e EDA, aprendizado supervisionado e não supervisionado, PCA e XGBoost, além de introdução à visão computacional com OpenCV (detecção facial via Haar Cascade).',
  },
];

const formacaoAcademica = [
  'Bacharelado em Engenharia de Software — Estácio, 2026–2030 (cursando)',
  'Técnico em Desenvolvimento de Sistemas — CIMATEC, 2025–2027 (cursando)',
  'Bacharelado Interdisciplinar em Artes — Universidade Federal da Bahia, 2014–2019',
  'Pós-graduação em Musicoterapia — Faculdade Alpha, 2020–2022',
];

const certificacoes = [
  'Santander — AI Java Back-End, 2026',
  'Globant — Java Spring Boot AI, 2026',
  'SENAI — Inteligência Artificial Industrial, 2025',
  'Santander — Ciência de Dados com Python, 2025',
  'Microsoft + LinkedIn — Fundamentos para uma Carreira em IA Generativa, 2025',
  'Google — Google UX Designer, 2026',
  'Google — Google Data Analytics, 2024',
  'Google — Google AI Essentials, 2024',
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-wide border-b border-black/70 pb-1 mb-3 mt-7 first:mt-0">
      {children}
    </h2>
  );
}

type Projeto = {
  titulo: string;
  subtitulo: string;
  linkLabel: string;
  href: string;
  descricao: string;
};

function ProjetoItem({ projeto }: { projeto: Projeto }) {
  return (
    <div>
      <h3 className="text-[14px] font-bold mt-2.5 mb-0.5">{projeto.titulo}</h3>
      <p className="text-[12.5px] italic text-[#333] m-0 mb-1">
        {projeto.subtitulo} —{' '}
        <a
          href={projeto.href}
          target="_blank"
          rel="noopener noreferrer"
          className="not-italic text-inherit no-underline hover:text-accent-orange"
        >
          {projeto.linkLabel}
        </a>
      </p>
      <ul className="my-1 mb-2.5 pl-[18px] list-disc">
        <li className="mb-0.5">{projeto.descricao}</li>
      </ul>
    </div>
  );
}

export const Portfolio = () => {
  return (
    <section className="bg-dark-bg py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="portfolio-print-area"
        className="max-w-[800px] mx-auto bg-white text-[#1a1a1a] rounded-lg shadow-2xl px-6 py-10 md:px-14 md:py-14"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, lineHeight: 1.45 }}
      >
        {/* Cabeçalho */}
        <header className="text-center mb-4">
          <h1 className="text-2xl font-bold tracking-wide m-0 mb-0.5">Pedro Canuto</h1>
          <p className="text-[13px] m-0.5">Desenvolvedor Full Stack | Java, React &amp; Dados</p>
          <p className="text-[12.5px] m-0.5">
            Salvador/BA &nbsp;|&nbsp; (71) 99958-8950 &nbsp;|&nbsp;{' '}
            <a href="mailto:data.canuto@gmail.com" className="text-inherit no-underline hover:text-accent-orange">
              data.canuto@gmail.com
            </a>
            <br />
            <a
              href="https://linkedin.com/in/pedro-canuto-408867331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline hover:text-accent-orange"
            >
              linkedin.com/in/pedro-canuto-408867331
            </a>{' '}
            &nbsp;|&nbsp;{' '}
            <a
              href="https://github.com/DataCanuto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline hover:text-accent-orange"
            >
              github.com/DataCanuto
            </a>{' '}
            &nbsp;|&nbsp;{' '}
            <a
              href="https://portfolio-pedrocanuto-desenvolvedor.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline hover:text-accent-orange"
            >
              portfolio-pedrocanuto-desenvolvedor.vercel.app
            </a>
          </p>
        </header>

        {/* Resumo Profissional */}
        <section>
          <SectionTitle>Resumo Profissional</SectionTitle>
          <p className="my-1">
            Desenvolvedor Full Stack em formação, com atuação do back-end (Java, Spring Boot, APIs REST,
            JPA/PostgreSQL, Docker) ao front-end (React, Next.js, TypeScript), incluindo o desenvolvimento de landing
            pages e sistemas completos para clientes reais, do banco de dados à entrega. Complemento o perfil com
            Python aplicado a análise de dados e machine learning (Pandas, Scikit-learn, OpenCV), o que amplia minha
            capacidade de atuar tanto em produto quanto em dados. Antes da tecnologia, geri negócio próprio por 8
            anos em educação musical e eventos — trago desse período a prática de traduzir problema real em solução,
            não só código.
          </p>
        </section>

        {/* Competências Técnicas */}
        <section>
          <SectionTitle>Competências Técnicas</SectionTitle>
          <div className="grid grid-cols-[max-content_1fr] gap-x-2 gap-y-1 text-[14px] mb-2">
            {competencias.map((c) => (
              <Fragment key={c.label}>
                <strong className="whitespace-nowrap">{c.label}:</strong>
                <span className="text-justify">{c.valor}</span>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section>
          <SectionTitle>Experiência Profissional</SectionTitle>
          <h3 className="text-[14px] font-bold mt-2.5 mb-0.5">
            Empreendedor / Educador Musical — Atuação autônoma
          </h3>
          <p className="text-[12.5px] italic text-[#333] m-0 mb-1">Junho/2018 – Atual · Salvador/BA</p>
          <ul className="my-1 mb-2.5 pl-[18px] list-disc">
            <li className="mb-0.5">
              Geri negócio próprio de educação musical e prestação de serviços em eventos, respondendo por
              planejamento financeiro, atendimento a clientes e operação de ponta a ponta.
            </li>
            <li className="mb-0.5">
              Desenvolvi visão de negócio aplicada hoje ao software: identificar o problema do usuário antes de
              propor a solução técnica.
            </li>
          </ul>
        </section>

        {/* Experiência Freelance */}
        <section>
          <SectionTitle>Experiência Freelance — Projetos Técnicos</SectionTitle>
          {projetosFreelance.map((p) => (
            <ProjetoItem key={p.titulo} projeto={p} />
          ))}
        </section>

        {/* Projetos Pessoais — Dados & Machine Learning */}
        <section>
          <SectionTitle>Projetos Pessoais — Dados &amp; Machine Learning</SectionTitle>
          {projetosDados.map((p) => (
            <ProjetoItem key={p.titulo} projeto={p} />
          ))}
        </section>

        {/* Formação Acadêmica */}
        <section>
          <SectionTitle>Formação Acadêmica</SectionTitle>
          <ul className="my-1 mb-2.5 pl-[18px] list-disc">
            {formacaoAcademica.map((item) => (
              <li key={item} className="mb-0.5">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Certificações e Cursos */}
        <section>
          <SectionTitle>Certificações e Cursos</SectionTitle>
          <ul className="my-1 mb-2.5 pl-[18px] list-disc">
            {certificacoes.map((item) => (
              <li key={item} className="mb-0.5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>
    </section>
  );
};
