'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '@/types/galeryArts';
import GaleriaArtwork from './GaleriaArtwork';

interface GaleriaGalleryProps {
  artworks: Artwork[];
}

export default function GaleriaGallery({ artworks }: GaleriaGalleryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section id="galeria" className="py-16 px-4 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {artworks.map((artwork) => (
            <GaleriaArtwork key={artwork.id} artwork={artwork} />
          ))}
        </motion.div>

        {artworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Nenhuma obra encontrada</p>
          </div>
        )}
      </div>
    </section>
  );
}
