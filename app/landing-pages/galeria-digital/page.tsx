'use client';

import React, { useState } from 'react';
import { GaleriaHero, GaleriaCategoryFilter, GaleriaGallery, GaleriaAbout } from '@/components/Projects/GaleriaDigital';
import { artworks, categories } from '@/components/Projects/GaleriaDigital/galeriaData';
import { ArtCategory } from '@/types/galeryArts';
import { Footer } from '@/components';
import AreaHeader from '@/components/Projects/AreaHeader';

export default function GaleriaDigitalPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | 'todos'>('todos');

  const filteredArtworks = selectedCategory === 'todos'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory);

  const navItems = [
    { label: 'Início', href: '/', isActive: false },
    { label: 'Galeria', href: '#galeria', isActive: true },
  ];

  return (
    <main className="bg-dark-bg text-dark-text min-h-screen">
      <AreaHeader
        areaTitle="Galeria Digital - Paulo Canuto"
        areaIcon="🎨"
        navItems={navItems}
      />

      <GaleriaHero />

      <GaleriaCategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <GaleriaGallery artworks={filteredArtworks} />

      <GaleriaAbout />

      <Footer />
    </main>
  );
}
