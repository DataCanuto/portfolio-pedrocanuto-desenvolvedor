/**
 * Consultas sobre a base profissional. A interface usa as de exibição; as de
 * relacionamento (Projeto → Tecnologia → Competência → Evidência) existem para
 * o agente de gestão de portfólio e análise de vagas.
 */
import type { CategoryId, Competency, Engagement, PartialDate, Project } from './types';
import { projects } from './projects';
import { competencies } from './competencies';
import { getTechnology, technologies } from './technologies';
import { certifications } from './certifications';

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const yearOf = (date: PartialDate): number => Number(date.slice(0, 4));

/** '2026-06' → 'Junho/2026'; '2025' → '2025'. */
export const formatPeriod = (date: PartialDate): string => {
  const [year, month] = date.split('-');
  return month ? `${MONTHS[Number(month) - 1]}/${year}` : year;
};

/** Data parcial → Date (primeiro dia do período), para ordenação e exibição. */
export const toDate = (date: PartialDate): Date => {
  const [y, m = '01', d = '01'] = date.split('-');
  return new Date(Number(y), Number(m) - 1, Number(d));
};

const byDateDesc = (a: { date: PartialDate }, b: { date: PartialDate }) =>
  toDate(b.date).getTime() - toDate(a.date).getTime();

export const ENGAGEMENT_LABELS: Record<Engagement, string> = {
  pessoal: 'Projeto Pessoal',
  freelance: 'Freelance',
  certificacao: 'Projeto de Certificação',
  curso: 'Curso',
};

// ---------------------------------------------------------------------------
// Projetos — exibição
// ---------------------------------------------------------------------------

export const getProject = (id: string): Project => {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`Projeto desconhecido: ${id}`);
  return project;
};

/** Linguagem principal (primeira tecnologia do tipo linguagem) ou, na falta, a primeira tecnologia. */
export const primaryTechnology = (project: Project) => {
  const techs = project.technologies.map(getTechnology);
  return techs.find((t) => t.kind === 'language') ?? techs[0];
};

export const getFeaturedProjects = (): Project[] => projects.filter((p) => p.featured);

/** Projetos da categoria principal e os que aparecem nela como categoria secundária. */
export const getProjectsByCategory = (category: CategoryId): Project[] =>
  projects.filter((p) => p.category === category || p.secondaryCategories?.includes(category));

export const getResumeProjects = (section: NonNullable<Project['onResume']>): Project[] =>
  projects.filter((p) => p.onResume === section).sort(byDateDesc);

export const getCertificationsByDate = () => [...certifications].sort(byDateDesc);

// ---------------------------------------------------------------------------
// Relacionamentos — Projeto → Tecnologia → Competência → Evidência
// ---------------------------------------------------------------------------

/** Tecnologias usadas em pelo menos um projeto. */
export const technologiesInProjects = (): string[] =>
  Array.from(new Set(projects.flatMap((p) => p.technologies)));

export const projectsUsingTechnology = (technologyId: string): Project[] =>
  projects.filter((p) => p.technologies.includes(technologyId));

export const projectsWithAI = (): Project[] => projects.filter((p) => Boolean(p.aiUsage));
export const projectsWithDeployment = (): Project[] =>
  projects.filter((p) => Boolean(p.deployment));
export const projectsWithCaseStudy = (): Project[] => projects.filter((p) => Boolean(p.caseStudy));

/** Evidências de uma competência: projetos que a declaram ou usam suas tecnologias, e certificações. */
export const evidenceFor = (competency: Competency) => ({
  projects: projects.filter(
    (p) =>
      p.skills.includes(competency.id) ||
      p.technologies.some((t) => competency.technologies.includes(t))
  ),
  certifications: certifications.filter((c) =>
    c.technologies?.some((t) => competency.technologies.includes(t))
  ),
});

/** Competências demonstradas por um projeto (declaradas + inferidas pelas tecnologias). */
export const competenciesOf = (project: Project): Competency[] =>
  competencies.filter(
    (c) =>
      project.skills.includes(c.id) || project.technologies.some((t) => c.technologies.includes(t))
  );

/** Competências sem nenhum projeto como evidência. */
export const competenciesWithoutEvidence = (): Competency[] =>
  competencies.filter((c) => evidenceFor(c).projects.length === 0);

/** Tecnologias do catálogo sem nenhum projeto que as use. */
export const technologiesWithoutEvidence = () =>
  technologies.filter((t) => projectsUsingTechnology(t.id).length === 0);
