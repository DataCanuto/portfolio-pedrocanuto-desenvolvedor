'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Certificate } from '@/types/certificate';
import { CertificateViewer } from './CertificateViewer';
import { certifications, toDate } from '@/data';

// A galeria mostra as certificações com imagem do certificado (src/data/certifications.ts).
const certificationsData: Certificate[] = certifications
  .filter((c): c is typeof c & { image: NonNullable<typeof c.image> } => Boolean(c.image))
  .map((c) => ({
    id: c.id,
    title: c.name,
    issuer: c.issuer,
    date: toDate(c.date),
    image: c.image,
    logo: c.logo,
    category: 'certification',
  }));

interface CertificateCardProps {
  certificate: Certificate;
  onPreview: (cert: Certificate) => void;
}

const CertificateCard = ({ certificate, onPreview }: CertificateCardProps) => {
  return (
    <motion.button
      onClick={() => onPreview(certificate)}
      className="group flex-shrink-0 w-64 h-80"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden transition-all duration-300 group-hover:border-accent-orange group-hover:shadow-lg group-hover:shadow-accent-orange/20 h-full flex flex-col cursor-pointer">
        {/* Certificate Preview */}
        <div className="w-full h-48 bg-gradient-to-br from-dark-header-btn to-dark-bg flex items-center justify-center overflow-hidden relative">
          {certificate.logo ? (
            <Image
              src={certificate.logo}
              alt={certificate.issuer}
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="text-accent-orange text-2xl font-bold opacity-20 text-center px-4">
              {certificate.issuer.split(' ')[0]}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-base font-bold text-dark-header-text group-hover:text-accent-orange transition-colors mb-2 line-clamp-3">
            {certificate.title}
          </h3>
          <p className="text-gray-400 text-sm mb-auto">{certificate.issuer}</p>
          <div className="mt-4 pt-4 border-t border-dark-border">
            <p className="text-xs text-gray-500">
              {certificate.date.toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'short',
              })}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const sortedCertificates = [...certificationsData].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <section id="certifications" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Meus <span className="text-accent-orange">Certificados</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-4"></div>
          <p className="text-gray-400 max-w-2xl">
            Certificações profissionais, cursos especializados e certificados de conclusão em tecnologia e análise de dados.
          </p>
        </motion.div>

        {sortedCertificates.length > 0 ? (
          <div className="overflow-x-auto pb-4 scroll-smooth">
            <div className="flex gap-6 min-w-min px-4 md:px-0">
              {sortedCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CertificateCard
                    certificate={cert}
                    onPreview={setSelectedCertificate}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 py-12">
            Nenhum certificado disponível no momento.
          </p>
        )}
      </div>

      <CertificateViewer
        isOpen={!!selectedCertificate}
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
