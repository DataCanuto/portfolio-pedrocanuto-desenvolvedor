'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-header border-t border-dark-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-dark-header-text">
            <span>© {currentYear} Pedro Canuto. Feito com</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart className="text-accent-orange" size={16} />
            </motion.div>
            <span>e</span>
            <span className="text-accent-orange font-semibold">React + Next.js</span>
          </div>

          <div className="flex gap-6 text-dark-header-text text-sm">
            <a
              href="https://github.com/DataCanuto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-orange transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pedro-canuto-408867331"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-orange transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:data.canuto@gmail.com"
              className="hover:text-accent-orange transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
