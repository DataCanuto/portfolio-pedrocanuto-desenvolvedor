// Fonte única de verdade das informações profissionais de Pedro Canuto.
// Componentes importam daqui; nenhum componente deve armazenar dados profissionais.
export * from './types';
export { profile, getContact } from './profile';
export { projects } from './projects';
export { categories, getCategory } from './categories';
export { technologies, getTechnology, technologyNames } from './technologies';
export { competencies, getCompetency, resumeSkillGroups } from './competencies';
export { education } from './education';
export { certifications } from './certifications';
export { experiences } from './experiences';
export * from './queries';
