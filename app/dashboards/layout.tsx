import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata('/dashboards', 'Dashboards', 'Projetos de análise de dados e dashboards de Pedro Canuto.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
