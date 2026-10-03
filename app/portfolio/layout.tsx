import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata('/portfolio', 'Currículo', 'Currículo de Pedro Canuto: formação, experiências, projetos, competências e certificações.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
