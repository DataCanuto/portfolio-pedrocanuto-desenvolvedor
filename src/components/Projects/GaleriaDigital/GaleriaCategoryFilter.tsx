'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CategoryInfo, ArtCategory } from '@/types/galeryArts';

interface GaleriaCategoryFilterProps {
  categories: CategoryInfo[];
  selectedCategory: ArtCategory | 'todos';
  onCategoryChange: (category: ArtCategory | 'todos') => void;
}

export default function GaleriaCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: GaleriaCategoryFilterProps) {
  return (
    <section className="py-12 px-4 bg-dark-bg-secondary sticky top-20 z-40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Categorias</h2>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <motion.button
            onClick={() => onCategoryChange('todos')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              selectedCategory === 'todos'
                ? 'bg-accent-orange text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todas as Obras
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                selectedCategory === category.key
                  ? 'bg-accent-orange text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              <span className="text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
