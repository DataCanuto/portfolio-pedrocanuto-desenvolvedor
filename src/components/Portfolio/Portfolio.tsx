'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

const competencias = [
  { label: 'Back-End', valor: 'Java, Spring Web, Spring Boot, JPA/Hibernate, APIs REST, CRUD, Programação Orientada a Objetos, UML' },
  { label: 'Banco de Dados / Infra', valor: 'PostgreSQL, H2, Docker' },
  { label: 'Front-End', valor: 'React, JavaScript, HTML5, CSS3' },
  { label: 'Dados / Machine Learning', valor: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow, Regex, OpenCV' },
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
    titulo: 'Pipeline de Dados — Data Flow Pipeline',
    subtitulo: 'Janeiro/2025 · Freelance',
    linkLabel: 'ver projeto',
    href: 'https://portfolio-pedrocanuto-desenvolvedor.vercel.app/engenharia-dados/data-streaming-project',
    descricao: 'Construção, para cliente, de pipeline em Python para análise de fluxo e gerenciamento de dados.',
  },
  {
    titulo: 'Galeria Digital de Artes',
    subtitulo: 'Dezembro/2025 · Freelance',
    linkLabel: 'ver projeto',
    href: 'https://datacanuto.github.io/galeria-digital-artes/catalog_mobile/',
    descricao: 'Desenvolvimento, para cliente, de vitrine front-end responsiva para exposição de artes, com acesso via QR Code.',
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
          <p className="text-[13px] m-0.5">Desenvolvedor Back-End Java | Spring Boot</p>
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
            Desenvolvedor Back-End em formação, com foco em Java e Spring Boot para construção de APIs REST e
            aplicações orientadas a regras de negócio. Aplico Programação Orientada a Objetos, persistência com
            JPA/PostgreSQL e conteinerização com Docker em projetos completos, do banco de dados à entrega. Antes da
            tecnologia, geri negócio próprio por 8 anos em educação musical e eventos — trago desse período a
            prática de traduzir problema real em solução, não só código. Complemento o perfil com Python aplicado a
            dados e machine learning, e com repertório de UX/UI, o que amplia minha capacidade de dialogar com times
            de produto e dados.
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
            <div key={p.titulo}>
              <h3 className="text-[14px] font-bold mt-2.5 mb-0.5">{p.titulo}</h3>
              <p className="text-[12.5px] italic text-[#333] m-0 mb-1">
                {p.subtitulo} —{' '}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic text-inherit no-underline hover:text-accent-orange"
                >
                  {p.linkLabel}
                </a>
              </p>
              <ul className="my-1 mb-2.5 pl-[18px] list-disc">
                <li className="mb-0.5">{p.descricao}</li>
              </ul>
            </div>
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
