import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata('/projetos', 'Projetos', 'Todos os projetos de Pedro Canuto, com filtros por área e tecnologia: back-end Java/Spring, dados com Python, front-end e UX.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
