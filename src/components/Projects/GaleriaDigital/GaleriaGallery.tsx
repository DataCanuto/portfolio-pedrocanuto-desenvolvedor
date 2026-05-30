'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '@/types/galeryArts';
import GaleriaArtwork from './GaleriaArtwork';
import { ArrowRight } from 'lucide-react';

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
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

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://datacanuto.github.io/galeria-digital-artes/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visite a Galeria Completa
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
