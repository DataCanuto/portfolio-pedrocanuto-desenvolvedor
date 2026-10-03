import { projectMetadata } from '@/utils/metadata';

export const metadata = projectMetadata('/backend/flora-hub');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
