'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Home } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface AreaHeaderProps {
  areaTitle: string;
  areaIcon?: React.ReactNode;
  navItems: NavItem[];
}

export default function AreaHeader({ areaTitle, areaIcon, navItems }: AreaHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-bg border-b border-dark-border sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        {/* Voltar e Título */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-accent-orange transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Voltar</span>
          </Link>
          <div className="flex items-center gap-3">
            {areaIcon && <span className="text-2xl">{areaIcon}</span>}
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent-orange">{areaTitle}</span>
            </h1>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex gap-1 overflow-x-auto pb-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  item.isActive
                    ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                    : 'bg-dark-bg-secondary text-gray-300 border border-dark-border hover:border-accent-orange/50 hover:text-accent-orange'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
