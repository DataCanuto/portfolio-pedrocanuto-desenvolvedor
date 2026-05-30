'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const languages = [
  { name: 'Java', color: 'bg-red-600' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'HTML5', color: 'bg-orange-600' },
  { name: 'CSS3', color: 'bg-blue-600' },
  { name: 'Python', color: 'bg-blue-500' },
  { name: 'SQL', color: 'bg-gray-700' },
  { name: 'Power BI', color: 'bg-yellow-600' },
  { name: 'Excel', color: 'bg-green-600' },
];

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-dark-bg to-dark-bg-secondary flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Pedro <span className="text-accent-orange">Canuto</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Desenvolvedor de Soluções em Tecnologia
          </motion.p>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent-orange shadow-lg shadow-accent-orange/30">
              <Image
                src="/img/profile.png"
                alt="Pedro Canuto"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Languages/Technologies */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-4 gap-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className={`${lang.color} px-4 py-2 rounded-lg text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-110`}
                >
                  {lang.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2 mt-12 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToServices}
          >
            <p className="text-accent-orange font-semibold hover:text-accent-orange-light transition-colors">Saiba mais</p>
            <ChevronDown className="text-accent-orange hover:text-accent-orange-light transition-colors" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
