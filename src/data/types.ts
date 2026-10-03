/**
 * Modelo de dados da fonte única de verdade do portfólio.
 *
 * Regra: componentes apresentam dados, não os armazenam. Tudo que é informação
 * profissional (perfil, projetos, formação, certificações, competências) vive em
 * `src/data/` e é consumido pela interface e, no futuro, pelo agente de vagas.
 *
 * Campos opcionais ausentes significam "informação ainda não documentada" — nunca
 * preencher com conteúdo inventado. O validador (`npm run validate:data`) lista
 * o que falta em cada projeto.
 */

/** Data parcial em ISO: 'YYYY', 'YYYY-MM' ou 'YYYY-MM-DD'. A precisão é a que se conhece. */
export type PartialDate = string;

export interface Link {
  label: string;
  url: string;
}

// ---------------------------------------------------------------------------
// Taxonomia
// ---------------------------------------------------------------------------

/** Área do portfólio. Cada categoria corresponde a uma rota de área (`/backend`, `/frontend`...). */
export type CategoryId = 'backend' | 'frontend' | 'engenharia-dados' | 'dashboards';

export interface Category {
  id: CategoryId;
  name: string;
  /** Rota da página de área. */
  href: string;
}

export type TechnologyKind =
  | 'language'
  | 'framework'
  | 'library'
  | 'database'
  | 'tool'
  | 'platform'
  | 'ai-service'
  | 'practice';

export interface Technology {
  /** Slug estável, kebab-case. É a chave usada por projetos e competências. */
  id: string;
  name: string;
  kind: TechnologyKind;
  /** Cor do ponto de linguagem no estilo GitHub (só para linguagens exibidas na timeline). */
  color?: string;
}

/**
 * Nível de domínio. 'nao-avaliado' é o padrão enquanto o próprio Pedro não declarar o
 * nível — o sistema não deve apresentar como domínio o que ainda não foi avaliado.
 */
export type CompetencyLevel = 'nao-avaliado' | 'em-desenvolvimento' | 'intermediario' | 'avancado';

export type CompetencyArea =
  | 'backend'
  | 'frontend'
  | 'dados'
  | 'ia-ml'
  | 'banco-de-dados'
  | 'cloud-devops'
  | 'ux-ui'
  | 'testes'
  | 'seguranca'
  | 'arquitetura'
  | 'idiomas';

/**
 * Competência = capacidade profissional (ex.: "Desenvolvimento Backend").
 * Tecnologia = ferramenta (ex.: "Spring Boot"). A evidência de uma competência são
 * os projetos que usam suas tecnologias ou a declaram em `skills`.
 */
export interface Competency {
  id: string;
  name: string;
  area: CompetencyArea;
  level: CompetencyLevel;
  /** Tecnologias que sustentam a competência (ids de `technologies.ts`). */
  technologies: string[];
}

// ---------------------------------------------------------------------------
// Perfil
// ---------------------------------------------------------------------------

export interface ContactChannel {
  id: 'whatsapp' | 'email' | 'linkedin' | 'github' | 'portfolio' | 'phone';
  label: string;
  /** Valor exibido (ex.: "(71) 99958-8950", "/in/pedro-canuto-408867331"). */
  display: string;
  url: string;
}

export interface Profile {
  name: string;
  /** Título usado no currículo. */
  title: string;
  /** Subtítulo da Home. */
  tagline: string;
  /** Título e descrição para SEO / Open Graph. */
  seo: { title: string; description: string; shortDescription: string; keywords: string[] };
  /** Resumo profissional (currículo). */
  summary: string;
  /** Objetivo de carreira. Ausente = ainda não documentado. */
  careerObjective?: string;
  location?: { city: string; state: string };
  photo: string;
  contacts: ContactChannel[];
  /** Tecnologias em destaque na Home (ids). */
  priorityTechnologies: string[];
  /** Competências principais (ids). */
  mainCompetencies: string[];
  softSkills: { name: string; description: string }[];
  languages: { name: string; level: string }[];
  /** Textos da seção "Sobre Mim". */
  about: {
    developer: string;
    journey: { paragraphs: string[]; link: Link };
    /** Linhas da aba "Meu Arsenal Técnico". */
    arsenal: string[];
  };
}

// ---------------------------------------------------------------------------
// Formação, certificações, experiências
// ---------------------------------------------------------------------------

export type EducationStatus = 'cursando' | 'concluido' | 'trancado';

export interface Education {
  id: string;
  degree: string;
  course: string;
  institution: string;
  start: PartialDate;
  end?: PartialDate;
  status: EducationStatus;
  description?: string;
  logo?: string;
  /** Tecnologia é o foco atual; formações anteriores ficam com relevância menor. */
  relevance: 'tech' | 'complementar';
}

export interface CertificateImage {
  front: string;
  back?: string;
}

export interface Certification {
  /** Slug estável "emissor-assunto" (kebab-case, sem acentos). */
  id: string;
  name: string;
  issuer: string;
  /** Nome curto do emissor usado no currículo. */
  issuerShort?: string;
  date: PartialDate;
  url?: string;
  credentialId?: string;
  image?: string | CertificateImage;
  logo?: string;
  /** Aparece na lista do currículo (/portfolio). */
  onResume: boolean;
  technologies?: string[];
  /** Projeto gerado pela certificação, quando houver. */
  projectId?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: 'autonomo' | 'clt' | 'pj' | 'estagio' | 'freelance';
  start: PartialDate;
  end?: PartialDate;
  location?: string;
  highlights: string[];
  /** Experiência na área de tecnologia ou transferível. */
  relevance: 'tech' | 'transferivel';
}

// ---------------------------------------------------------------------------
// Projetos
// ---------------------------------------------------------------------------

export type ProjectStatus = 'concluido' | 'em-andamento' | 'em-producao' | 'pausado';

/** Como o projeto surgiu — usado no currículo e na análise de vagas. */
export type Engagement = 'pessoal' | 'freelance' | 'certificacao' | 'curso';

export interface ProjectContext {
  engagement: Engagement;
  /** Rótulo exibido (ex.: "Projeto Pessoal", "Certificação Google UX Design"). */
  label: string;
  /** Cliente ou instituição, quando houver. */
  organization?: string;
  /** Detalhe exibido no currículo (ex.: carga horária). */
  resumeNote?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDocument {
  label: string;
  url: string;
  kind: 'case-study' | 'pdf' | 'apresentacao' | 'prototipo' | 'readme' | 'outro';
}

export interface ChallengeSolution {
  title: string;
  /** O desafio em si. */
  description: string;
  solution: string;
  impact?: string;
  difficulty?: 'low' | 'medium' | 'high';
}

export interface Project {
  id: string;
  name: string;
  /** Slug da rota do case study. */
  slug: string;
  /** Agrupa projetos que pertencem ao mesmo produto (ex.: Flora Hub UX + Backend). */
  product?: string;
  shortDescription: string;
  description?: string;
  /** Texto usado no currículo, quando difere do resumo curto. */
  resumeDescription?: string;
  problem?: string;
  objective?: string;
  /** Ausente = status ainda não informado. */
  status?: ProjectStatus;
  category: CategoryId;
  /** Outras áreas em que o projeto aparece (ex.: frontend de um sistema fullstack). */
  secondaryCategories?: CategoryId[];
  /**
   * Recorte do projeto quando exibido em outra área (ex.: "Pedro Canuto Música — Frontend").
   * Só para `secondaryCategories`; a página da categoria principal usa os campos do projeto.
   */
  perspectives?: Partial<
    Record<
      CategoryId,
      { title: string; description: string; technologies: string[]; features?: string[] }
    >
  >;
  /** Aparece na seção de projetos da Home. */
  featured: boolean;
  /** Seção do currículo (/portfolio) em que o projeto aparece. */
  onResume?: 'freelance' | 'pessoal' | 'dados';
  /** Título no currículo, quando difere de `name`. */
  resumeTitle?: string;
  date: PartialDate;
  context: ProjectContext;
  domain?: string;
  role?: string;
  /** Ids de `technologies.ts`. A primeira é a linguagem principal. */
  technologies: string[];
  /** Ids de `competencies.ts` que o projeto demonstra. */
  skills: string[];
  architecture?: string;
  features?: string[];
  backend?: string[];
  frontend?: string[];
  database?: string[];
  infrastructure?: string[];
  integrations?: string[];
  aiUsage?: string;
  repository?: string;
  deployment?: string;
  /** Rota interna do case study. */
  caseStudy?: string;
  images?: ProjectImage[];
  documentation?: ProjectDocument[];
  challenges?: ChallengeSolution[];
  results?: string[];
  learning?: string[];
  /** Marcos do projeto, em ordem cronológica. */
  milestones?: { date: PartialDate; label: string }[];
  /**
   * Campos com texto redigido pelo Claude a partir do código e dos dados, ainda não revisados
   * pelo Pedro. Uso interno: aparecem no validador, nunca na interface.
   */
  draftFields?: ('problem' | 'objective')[];
  /** Ícone (emoji) usado nos cards de área. */
  icon?: string;
  /**
   * Pontos que precisam de confirmação do Pedro (dados conflitantes entre páginas, etc.).
   * Uso interno: aparecem no validador, nunca na interface.
   */
  reviewNotes?: string[];
}
