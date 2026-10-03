import { projectMetadata } from '@/utils/metadata';

export const metadata = projectMetadata('/budgetting');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
