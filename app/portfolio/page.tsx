'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, Download } from 'lucide-react';
import { Portfolio, Footer } from '@/components';

export default function PortfolioPage() {
  return (
    <main className="bg-dark-bg text-dark-text min-h-screen">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-dark-bg border-b border-dark-border sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-orange transition-colors"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Voltar</span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-accent-orange">Portfólio</span>
              </h1>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-accent-orange text-black hover:bg-accent-orange-light transition-colors"
            >
              <Download size={18} />
              Baixar PDF
            </button>
          </div>
        </div>
      </motion.header>

      <Portfolio />

      <Footer />
    </main>
  );
}
