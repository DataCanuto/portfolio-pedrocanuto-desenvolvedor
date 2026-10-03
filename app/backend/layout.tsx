import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata('/backend', 'Projetos de Backend', 'Projetos de backend de Pedro Canuto, com Java, Spring Boot, APIs REST e bancos de dados.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
