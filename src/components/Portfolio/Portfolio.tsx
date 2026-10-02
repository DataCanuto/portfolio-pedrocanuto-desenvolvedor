'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  ENGAGEMENT_LABELS,
  education,
  experiences,
  formatPeriod,
  getCertificationsByDate,
  getContact,
  getResumeProjects,
  profile,
  resumeSkillGroups,
  technologyNames,
  yearOf,
  type Project,
} from '@/data';

const competencias = [
  ...resumeSkillGroups.map((g) => ({ label: g.label, valor: technologyNames(g.technologies).join(', ') })),
  { label: 'Idiomas', valor: profile.languages.map((l) => `${l.name} (${l.level})`).join(', ') },
];

const portfolioUrl = getContact('portfolio').url;

const toProjeto = (p: Project): Projeto => ({
  titulo: p.resumeTitle ?? p.name,
  subtitulo: [
    formatPeriod(p.date),
    p.context.engagement === 'curso'
      ? [p.context.label, p.context.resumeNote && `(${p.context.resumeNote})`]
          .filter(Boolean)
          .join(' ')
      : ENGAGEMENT_LABELS[p.context.engagement],
  ].join(' · '),
  linkLabel: 'ver projeto',
  href: p.deployment ?? `${portfolioUrl}${p.caseStudy ?? ''}`,
  descricao: p.resumeDescription ?? p.description ?? p.shortDescription,
});

const projetosFreelance = getResumeProjects('freelance').map(toProjeto);
const projetosPessoais = getResumeProjects('pessoal').map(toProjeto);
const projetosDados = getResumeProjects('dados').map(toProjeto);

const periodoExperiencia = (start: string, end?: string) =>
  `${formatPeriod(start)} – ${end ? formatPeriod(end) : 'Atual'}`;

const formacaoAcademica = education.map(
  (e) =>
    `${e.degree} em ${e.course} — ${e.institution}, ${e.start}–${e.end ?? ''}${e.status === 'cursando' ? ' (cursando)' : ''}`
);

const certificacoes = getCertificationsByDate()
  .filter((c) => c.onResume)
  .map((c) => `${c.issuerShort ?? c.issuer} — ${c.name}, ${yearOf(c.date)}`);

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
          <h1 className="text-2xl font-bold tracking-wide m-0 mb-0.5">{profile.name}</h1>
          <p className="text-[13px] m-0.5">{profile.title}</p>
          <p className="text-[12.5px] m-0.5">
            {profile.location && `${profile.location.city}/${profile.location.state}`} &nbsp;|&nbsp;{' '}
            {getContact('whatsapp').display} &nbsp;|&nbsp;{' '}
            <a href={getContact('email').url} className="text-inherit no-underline hover:text-accent-orange">
              {getContact('email').display}
            </a>
            <br />
            {(['linkedin', 'github', 'portfolio'] as const).map((id, index) => (
              <Fragment key={id}>
                {index > 0 && <>&nbsp;|&nbsp;{' '}</>}
                <a
                  href={getContact(id).url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit no-underline hover:text-accent-orange"
                >
                  {getContact(id).url.replace(/^https?:\/\//, '')}
                </a>{' '}
              </Fragment>
            ))}
          </p>
        </header>

        {/* Resumo Profissional */}
        <section>
          <SectionTitle>Resumo Profissional</SectionTitle>
          <p className="my-1">{profile.summary}</p>
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

        

        {/* Experiência Freelance */}
        <section>
          <SectionTitle>Experiência Freelance — Projetos Técnicos</SectionTitle>
          {projetosFreelance.map((p) => (
            <ProjetoItem key={p.titulo} projeto={p} />
          ))}
        </section>

        {/* Projetos Pessoais — Desenvolvimento */}
        {projetosPessoais.length > 0 && (
          <section>
            <SectionTitle>Projetos Pessoais — Desenvolvimento</SectionTitle>
            {projetosPessoais.map((p) => (
              <ProjetoItem key={p.titulo} projeto={p} />
            ))}
          </section>
        )}

        {/* Projetos Pessoais — Dados & Machine Learning */}
        <section>
          <SectionTitle>Projetos Pessoais — Dados &amp; Machine Learning</SectionTitle>
          {projetosDados.map((p) => (
            <ProjetoItem key={p.titulo} projeto={p} />
          ))}
        </section>
        {/* Experiência Profissional */}
        <section>
          <SectionTitle>Experiência Profissional</SectionTitle>
          {experiences.map((exp) => (
            <div key={exp.id}>
              <h3 className="text-[14px] font-bold mt-2.5 mb-0.5">
                {exp.role} — {exp.organization}
              </h3>
              <p className="text-[12.5px] italic text-[#333] m-0 mb-1">
                {periodoExperiencia(exp.start, exp.end)}
                {exp.location && ` · ${exp.location}`}
              </p>
              <ul className="my-1 mb-2.5 pl-[18px] list-disc">
                {exp.highlights.map((h) => (
                  <li key={h} className="mb-0.5">
                    {h}
                  </li>
                ))}
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
