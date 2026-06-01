'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { Artwork } from '@/types/galeryArts';

interface GaleriaArtworkProps {
  artwork: Artwork;
}

export default function GaleriaArtwork({ artwork }: GaleriaArtworkProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const whatsappMessage = `Olá Paulo, tenho interesse na obra:\n\n*${artwork.title}*\nTécnica: ${artwork.technique}\nAno: ${artwork.year}\nValor: R$ ${artwork.price.toLocaleString('pt-BR')}\n\nPode me disponibilizar mais informações?`;

  return (
    <>
      <motion.div
        className="group bg-dark-bg-secondary rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div
          className="relative overflow-hidden h-64 bg-gray-900"
          onClick={() => setIsExpanded(true)}
        >
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {artwork.status === 'vendido' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">VENDIDO</span>
            </div>
          )}

          <div className="absolute top-3 right-3 flex gap-2">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className={`p-2 rounded-full transition ${
                isFavorite ? 'bg-red-500' : 'bg-black/50 hover:bg-black/70'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={20} className={isFavorite ? 'fill-white text-white' : 'text-white'} />
            </motion.button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-white mb-2 line-clamp-2">{artwork.title}</h3>
          
          <p className="text-sm text-gray-400 mb-3">{artwork.technique}</p>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-500 mb-1">Ano: {artwork.year}</p>
            </div>

            {artwork.status === 'disponível' && (
              <motion.a
                href={`https://wa.me/5571999588950?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart size={18} className="text-white" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="bg-dark-bg-secondary rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex justify-between items-center p-6 bg-dark-bg border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">{artwork.title}</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Técnica</p>
                    <p className="text-white font-semibold">{artwork.technique}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Ano</p>
                    <p className="text-white font-semibold">{artwork.year}</p>
                  </div>
                  {artwork.dimensions && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Dimensões</p>
                      <p className="text-white font-semibold">{artwork.dimensions}</p>
                    </div>
                  )}
                </div>

                {artwork.status === 'disponível' && (
                  <motion.a
                    href={`https://wa.me/5571999588950?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💬 Contatar via WhatsApp
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
