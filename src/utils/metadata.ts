import type { Metadata } from 'next';
import { getContact, profile, projects } from '@/data';

/** Endereço público do portfólio (vem do contato "portfolio" em `src/data/profile.ts`). */
export const siteUrl = getContact('portfolio').url;

/** Imagem gerada em `app/opengraph-image.tsx`, usada quando a página não tem imagem própria. */
const defaultImage = '/opengraph-image';

/** Metadados de uma página de projeto, montados a partir de `src/data`. */
export const projectMetadata = (route: string): Metadata => {
  const project = projects.find((p) => p.caseStudy === route);
  if (!project) throw new Error(`Nenhum projeto com caseStudy ${route}`);
  const title = `${project.name} | ${profile.name}`;
  const description = project.shortDescription;
  // LinkedIn e WhatsApp não exibem SVG; capas em SVG usam a imagem padrão.
  const image = project.cover && !project.cover.src.endsWith('.svg') ? project.cover.src : defaultImage;
  return {
    title,
    description,
    alternates: { canonical: route },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url: route,
      title,
      description,
      siteName: profile.name,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
};

/** Metadados de páginas que não são de projeto (áreas, currículo). */
export const pageMetadata = (route: string, name: string, description: string): Metadata => {
  const title = `${name} | ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: route },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: route,
      title,
      description,
      siteName: profile.name,
      images: [defaultImage],
    },
    twitter: { card: 'summary_large_image', title, description, images: [defaultImage] },
  };
};
