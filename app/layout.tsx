import type { Metadata } from 'next';
import '@/styles/globals.css';
import { profile } from '@/data';

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pedrocanuto.dev',
    title: profile.seo.title,
    description: profile.seo.shortDescription,
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.shortDescription,
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
        {children}
      </body>
    </html>
  );
}
