import { projectMetadata } from '@/utils/metadata';

export const metadata = projectMetadata('/backend/pedro-canuto-musico');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
