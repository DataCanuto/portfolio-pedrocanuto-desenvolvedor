import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { getContact, getTechnology, profile } from '@/data';
import { siteUrl } from '@/utils/metadata';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: profile.seo.title,
    description: profile.seo.shortDescription,
    siteName: profile.name,
  },
  alternates: { canonical: '/' },
  // Token do Google Search Console, configurado como variável de ambiente na Vercel.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.shortDescription,
  },
};

/** Dados estruturados (schema.org) para o Google entender quem é o dono do site. */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  description: profile.seo.description,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  address: profile.location && {
    '@type': 'PostalAddress',
    addressLocality: profile.location.city,
    addressRegion: profile.location.state,
    addressCountry: 'BR',
  },
  sameAs: [getContact('linkedin').url, getContact('github').url],
  knowsAbout: profile.priorityTechnologies.map((id) => getTechnology(id).name),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-dark-bg text-dark-header-text">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
