/**
 * Validação de completude da base profissional. Uso interno (desenvolvimento e
 * agente de portfólio) — nunca exibir para visitantes.
 *
 * Rodar: `npm run validate:data`
 */
import type { Project } from './types';
import { projects } from './projects';
import { profile } from './profile';
import { competencies } from './competencies';
import { technologies } from './technologies';
import { certifications } from './certifications';
import { categories } from './categories';
import { competenciesWithoutEvidence, technologiesInProjects } from './queries';

export interface FieldCheck {
  label: string;
  ok: boolean;
  /** Obrigatório para considerar o projeto pronto para publicação. */
  required: boolean;
}

export interface ProjectReport {
  id: string;
  name: string;
  checks: FieldCheck[];
  reviewNotes: string[];
  /** Campos redigidos pelo Claude que o Pedro ainda não revisou (não bloqueiam a publicação). */
  draftFields: string[];
  /** Todos os obrigatórios preenchidos e nenhuma pendência de revisão. */
  readyToPublish: boolean;
  /** Percentual de campos preenchidos (obrigatórios + recomendados). */
  score: number;
}

const has = (value: unknown) => (Array.isArray(value) ? value.length > 0 : Boolean(value));

const PROJECT_FIELDS: { label: string; required: boolean; test: (p: Project) => boolean }[] = [
  { label: 'Descrição', required: true, test: (p) => has(p.description) },
  { label: 'Problema', required: true, test: (p) => has(p.problem) },
  { label: 'Objetivo', required: true, test: (p) => has(p.objective) },
  { label: 'Status', required: true, test: (p) => has(p.status) },
  { label: 'Stack', required: true, test: (p) => has(p.technologies) },
  { label: 'Competências', required: true, test: (p) => has(p.skills) },
  { label: 'Case Study', required: true, test: (p) => has(p.caseStudy) },
  { label: 'GitHub', required: false, test: (p) => has(p.repository) },
  { label: 'Deploy', required: false, test: (p) => has(p.deployment) },
  { label: 'Arquitetura', required: false, test: (p) => has(p.architecture) },
  { label: 'Funcionalidades', required: false, test: (p) => has(p.features) },
  { label: 'Imagens', required: false, test: (p) => has(p.images) },
  { label: 'Documentação', required: false, test: (p) => has(p.documentation) },
  { label: 'Desafios', required: false, test: (p) => has(p.challenges) },
  { label: 'Resultados', required: false, test: (p) => has(p.results) },
  { label: 'Aprendizados', required: false, test: (p) => has(p.learning) },
];

export const checkProject = (project: Project): ProjectReport => {
  const checks = PROJECT_FIELDS.map((f) => ({
    label: f.label,
    required: f.required,
    ok: f.test(project),
  }));
  const reviewNotes = project.reviewNotes ?? [];
  return {
    id: project.id,
    name: project.name,
    checks,
    reviewNotes,
    draftFields: (project.draftFields ?? []).map((f) =>
      f === 'problem' ? 'Problema' : 'Objetivo'
    ),
    readyToPublish: checks.every((c) => c.ok || !c.required) && reviewNotes.length === 0,
    score: Math.round((checks.filter((c) => c.ok).length / checks.length) * 100),
  };
};

/** Referências quebradas (ids inexistentes) — devem ser zero. */
export const findIntegrityErrors = (): string[] => {
  const errors: string[] = [];
  const techIds = new Set(technologies.map((t) => t.id));
  const compIds = new Set(competencies.map((c) => c.id));
  const catIds = new Set(categories.map((c) => c.id));
  const projectIds = new Set<string>();

  for (const p of projects) {
    if (projectIds.has(p.id)) errors.push(`Projeto duplicado: ${p.id}`);
    projectIds.add(p.id);
    if (!catIds.has(p.category)) errors.push(`${p.id}: categoria inexistente "${p.category}"`);
    p.secondaryCategories?.forEach(
      (c) => !catIds.has(c) && errors.push(`${p.id}: categoria inexistente "${c}"`)
    );
    p.technologies.forEach(
      (t) => !techIds.has(t) && errors.push(`${p.id}: tecnologia inexistente "${t}"`)
    );
    p.skills.forEach(
      (s) => !compIds.has(s) && errors.push(`${p.id}: competência inexistente "${s}"`)
    );
    Object.values(p.perspectives ?? {}).forEach((v) =>
      v?.technologies.forEach(
        (t) => !techIds.has(t) && errors.push(`${p.id}: tecnologia inexistente "${t}"`)
      )
    );
  }
  for (const c of competencies) {
    c.technologies.forEach(
      (t) => !techIds.has(t) && errors.push(`Competência ${c.id}: tecnologia inexistente "${t}"`)
    );
  }
  for (const cert of certifications) {
    cert.technologies?.forEach(
      (t) =>
        !techIds.has(t) && errors.push(`Certificação ${cert.id}: tecnologia inexistente "${t}"`)
    );
    if (cert.projectId && !projectIds.has(cert.projectId))
      errors.push(`Certificação ${cert.id}: projeto inexistente "${cert.projectId}"`);
  }
  profile.priorityTechnologies.forEach(
    (t) => !techIds.has(t) && errors.push(`Perfil: tecnologia inexistente "${t}"`)
  );
  profile.mainCompetencies.forEach(
    (c) => !compIds.has(c) && errors.push(`Perfil: competência inexistente "${c}"`)
  );
  return errors;
};

/** Pendências do perfil, competências e certificações. */
export const findProfileGaps = (): string[] => {
  const gaps: string[] = [];
  if (!profile.careerObjective) gaps.push('Perfil: objetivo de carreira não documentado.');

  const used = new Set(technologiesInProjects());
  profile.priorityTechnologies
    .filter((t) => !used.has(t))
    .forEach((t) =>
      gaps.push(`Perfil: tecnologia em destaque na Home sem projeto como evidência: ${t}`)
    );

  competenciesWithoutEvidence().forEach((c) =>
    gaps.push(`Competência sem projeto como evidência: ${c.name}`)
  );

  const notEvaluated = competencies.filter((c) => c.level === 'nao-avaliado');
  if (notEvaluated.length)
    gaps.push(
      `Competências sem nível declarado (${notEvaluated.length}): ${notEvaluated.map((c) => c.id).join(', ')}`
    );

  certifications
    .filter((c) => !c.image && !c.url)
    .forEach((c) =>
      gaps.push(`Certificação sem comprovação (imagem ou URL): ${c.issuer} — ${c.name}`)
    );

  return gaps;
};

export const buildReport = () => ({
  integrityErrors: findIntegrityErrors(),
  projects: projects.map(checkProject),
  profileGaps: findProfileGaps(),
});
