import { pageMetadata } from '@/utils/metadata';

export const metadata = pageMetadata('/frontend', 'Projetos de Frontend e UX Design', 'Projetos de frontend e UX Design de Pedro Canuto.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
