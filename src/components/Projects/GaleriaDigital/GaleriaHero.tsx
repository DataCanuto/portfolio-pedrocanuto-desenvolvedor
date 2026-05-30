'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GaleriaHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg via-dark-bg-secondary to-dark-bg px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,127,39,0.1),rgba(255,127,39,0))]" />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6">
          <span className="inline-block text-accent-orange text-xl font-semibold mb-2">
            🎨 Galeria Digital de Paulo Canuto
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Um Olhar <span className="text-accent-orange">Investigativo</span> sobre a Cidade
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Exploração artística de 50 anos sobre o ambiente urbano, seus ocupantes e dinâmicas
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-accent-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Galeria
          </motion.button>
          
          <motion.a
            href="https://wa.me/5571999837602?text=Olá%20Paulo,%20tenho%20interesse%20em%20uma%20obra%20de%20arte"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 Contato via WhatsApp
          </motion.a>

          <motion.a
            href="https://www.instagram.com/paulocanutoarte/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📸 Seguir no Instagram
          </motion.a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          {[
            { number: '50+', label: 'Anos de Arte' },
            { number: '5', label: 'Categorias' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-orange mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
