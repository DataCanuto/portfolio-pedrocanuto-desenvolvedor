'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/utils/cn';

type NavItem = { id: string; label: string; href?: never } | { href: string; label: string; id?: never };

const navItems: NavItem[] = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'formation', label: 'Formação' },
  { id: 'certifications', label: 'Certificados' },
  { id: 'projetos-area', label: 'Projetos' },
  { id: 'githubArea', label: 'Git-hub' },
  { href: '/portfolio', label: 'Portfólio' },
  { id: 'contact', label: 'Contato' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollSpyItems = navItems.filter(
    (item): item is { id: string; label: string } => 'id' in item
  );
  const activeId = useScrollSpy(scrollSpyItems, 80);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        isScrolled ? 'bg-dark-header/80 border-b border-dark-border' : 'bg-dark-header'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-accent-orange"
            whileHover={{ scale: 1.05 }}
          >
            PC
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-dark-header-text font-medium transition-all duration-300 rounded-md hover:text-accent-orange hover:bg-dark-header-btn/10"
                >
                  {item.label}
                </Link>
              ) : (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className={cn(
                    'relative px-3 py-2 text-dark-header-text font-medium transition-all duration-300 rounded-md',
                    activeId === item.id
                      ? 'text-accent-orange bg-dark-header-btn/30 shadow-lg shadow-accent-orange/20'
                      : 'hover:text-accent-orange hover:bg-dark-header-btn/10'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeId === item.id && (
                    <motion.div
                      className="absolute bottom-1 left-3 right-3 h-1 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-full"
                      layoutId="underline"
                      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-dark-header-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-dark-border mt-4">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left px-4 py-2 rounded-md font-medium transition-all duration-300 text-dark-header-text hover:text-accent-orange hover:bg-dark-header-btn/10"
                >
                  {item.label}
                </Link>
              ) : (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className={cn(
                    'text-left px-4 py-2 rounded-md font-medium transition-all duration-300',
                    activeId === item.id
                      ? 'text-accent-orange bg-dark-header-btn/30 shadow-md shadow-accent-orange/20 border-l-4 border-accent-orange'
                      : 'text-dark-header-text hover:text-accent-orange hover:bg-dark-header-btn/10'
                  )}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              )
            )}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
