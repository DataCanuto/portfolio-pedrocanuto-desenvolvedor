'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Certificate, CertificateImage } from '@/types/certificate';

interface CertificateViewerProps {
  isOpen: boolean;
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateViewer = ({
  isOpen,
  certificate,
  onClose,
}: CertificateViewerProps) => {
  const [currentSide, setCurrentSide] = useState<'front' | 'back'>('front');

  if (!certificate) return null;

  const image = certificate.image;
  const isFrontBack = typeof image === 'object' && 'front' in image;
  const frontImage = isFrontBack ? (image as CertificateImage).front : (image as string);
  const backImage = isFrontBack ? (image as CertificateImage).back : null;

  const handleNextSide = () => {
    if (backImage && currentSide === 'front') {
      setCurrentSide('back');
    }
  };

  const handlePrevSide = () => {
    if (backImage && currentSide === 'back') {
      setCurrentSide('front');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full h-full md:w-[90%] md:h-[90vh] max-w-4xl flex flex-col items-center justify-center p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-accent-orange transition-colors z-20 bg-dark-bg/50 p-2 rounded-lg backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <div className="absolute top-4 left-4 z-20 bg-dark-bg/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="text-white font-bold">{certificate.title}</h3>
              <p className="text-sm text-gray-400">{certificate.issuer}</p>
            </div>

            {/* Image Container */}
            <motion.div
              key={currentSide}
              initial={{ opacity: 0, x: currentSide === 'back' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentSide === 'back' ? -20 : 20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center relative"
            >
              <Image
                src={currentSide === 'front' ? frontImage : backImage || frontImage}
                alt={`${certificate.title} - ${currentSide}`}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Navigation Buttons */}
            {backImage && (
              <>
                {currentSide === 'front' && (
                  <motion.button
                    onClick={handleNextSide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent-orange hover:bg-accent-orange-light text-dark-bg p-3 rounded-full transition-colors z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                )}

                {currentSide === 'back' && (
                  <motion.button
                    onClick={handlePrevSide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent-orange hover:bg-accent-orange-light text-dark-bg p-3 rounded-full transition-colors z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                )}

                {/* Side Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark-bg/50 backdrop-blur-sm px-4 py-2 rounded-lg z-20">
                  <p className="text-sm text-gray-300">
                    {currentSide === 'front' ? 'Frente' : 'Verso'}{' '}
                    <span className="text-accent-orange font-bold">
                      (1/2)
                    </span>
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
