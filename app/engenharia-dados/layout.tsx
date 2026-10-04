import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata('/engenharia-dados', 'Projetos de Engenharia de Dados', 'Projetos de dados de Pedro Canuto, com Python, automação de documentos e machine learning.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
