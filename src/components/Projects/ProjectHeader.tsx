'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, List } from 'lucide-react';
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
  backUrl?: string;
}

export default function ProjectHeader({
  projectTitle,
  sections,
  areaSlug,
  backUrl,
}: ProjectHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao tocar fora dele ou ao pressionar Esc
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setIsDropdownOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsDropdownOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Botão Voltar */}
          <Link
            href={backUrl || `/`}
            aria-label="Voltar"
            className="flex items-center gap-2 p-2 -ml-2 text-gray-400 hover:text-accent-orange transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-semibold">Voltar</span>
          </Link>

          {/* Título do Projeto */}
          <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center flex-1 min-w-0 mx-3 md:mx-4 truncate">
            <span className="hidden sm:inline text-gray-300">{areaSlug.replace(/-/g, ' ')}</span>
            <span className="hidden sm:inline text-accent-orange"> / </span>
            <span className="text-accent-orange">{projectTitle}</span>
          </h1>

          {/* Dropdown de Seções */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Seções do projeto"
              aria-haspopup="menu"
              aria-expanded={isDropdownOpen}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-dark-bg-secondary border border-dark-border rounded-lg text-gray-300 hover:border-accent-orange/50 hover:text-accent-orange transition-all duration-300"
            >
              <List size={18} className="sm:hidden" />
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
                  role="menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-64 max-w-[calc(100vw-2rem)] max-h-[70vh] overflow-y-auto bg-dark-bg-secondary border border-dark-border rounded-lg shadow-lg z-50"
                >
                  <div className="p-2">
                    {sections.map((section) => (
                      <motion.button
                        key={section.id}
                        role="menuitem"
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
