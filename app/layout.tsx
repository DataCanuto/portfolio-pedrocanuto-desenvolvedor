import type { Metadata } from 'next';
import '@/styles/globals.css';
import { PageLoader, ThemeToggle } from '@/components';

export const metadata: Metadata = {
  title: 'Pedro Canuto - Desenvolvedor de Sistemas',
  description:
    'Portfólio de Pedro Canuto. Estudante de Desenvolvimento de Sistemas com foco em Engenharia de Dados e Dashboards. Transição de Arte-educador e Musicoterapeuta para a área Tech.',
  keywords: [
    'Desenvolvedor',
    'Sistemas',
    'Dados',
    'Engenharia de Dados',
    'Dashboards',
    'Python',
    'Java',
    'SQL',
  ],
  authors: [{ name: 'Pedro Canuto' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pedrocanuto.dev',
    title: 'Pedro Canuto - Desenvolvedor de Sistemas',
    description:
      'Portfólio de Pedro Canuto. Estudante de Desenvolvimento de Sistemas com foco em Engenharia de Dados.',
    siteName: 'Pedro Canuto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Canuto - Desenvolvedor de Sistemas',
    description:
      'Portfólio de Pedro Canuto. Estudante de Desenvolvimento de Sistemas com foco em Engenharia de Dados.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-bg text-dark-header-text">
        <PageLoader />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
