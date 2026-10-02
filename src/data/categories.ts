import type { Category, CategoryId } from './types';

export const categories: Category[] = [
  { id: 'backend', name: 'Backend', href: '/backend' },
  { id: 'engenharia-dados', name: 'Engenharia de Dados', href: '/engenharia-dados' },
  { id: 'dashboards', name: 'Dashboards', href: '/dashboards' },
  { id: 'frontend', name: 'Frontend & UX Design', href: '/frontend' },
];

export const getCategory = (id: CategoryId): Category => {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Categoria desconhecida: ${id}`);
  return category;
};
