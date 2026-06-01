'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface SectionItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface ProjectHeaderProps {
  projectTitle: string;
  sections: SectionItem[];
  areaSlug: string;
  onBackClick?: () => void;
  backUrl?: string;
}

export default function ProjectHeader({
  projectTitle,
  sections,
  areaSlug,
  onBackClick,
  backUrl,
}: ProjectHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsDropdownOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-bg border-b border-dark-border sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Botão Voltar */}
          <Link
            href={backUrl || `/`}
            className="flex items-center gap-2 text-gray-400 hover:text-accent-orange transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-semibold">Voltar</span>
          </Link>

          {/* Título do Projeto */}
          <h1 className="text-xl md:text-2xl font-bold text-center flex-1 mx-4">
            <span className="text-gray-300">{areaSlug.replace(/-/g, ' ')}</span>
            <span className="text-accent-orange"> / </span>
            <span className="text-accent-orange">{projectTitle}</span>
          </h1>

          {/* Dropdown de Seções */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-dark-bg-secondary border border-dark-border rounded-lg text-gray-300 hover:border-accent-orange/50 hover:text-accent-orange transition-all duration-300"
            >
              <span className="hidden sm:inline text-sm font-semibold">Seções</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Menu Suspenso */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-dark-bg-secondary border border-dark-border rounded-lg shadow-lg overflow-hidden z-50"
                >
                  <div className="p-2">
                    {sections.map((section) => (
                      <motion.button
                        key={section.id}
                        whileHover={{ x: 4 }}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-300 hover:bg-accent-orange/10 hover:text-accent-orange rounded-md transition-all duration-200 group"
                      >
                        {section.icon && (
                          <span className="text-accent-orange group-hover:scale-110 transition-transform">
                            {section.icon}
                          </span>
                        )}
                        <span className="font-medium">{section.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
