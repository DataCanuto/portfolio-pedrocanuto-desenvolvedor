'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/UI/Badge';
import { Certificate } from '@/types/certificate';

const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Google AI Essentials',
    issuer: 'Coursera / Google',
    date: new Date('2024-12-31'),
    image: '/assets/certificados_img/google ai essentials/Coursera_Google AI Essentials.jpg',
    category: 'certification',
  },
  {
    id: '2',
    title: 'Google Data Analytics 2024',
    issuer: 'Coursera / Google',
    date: new Date('2024-12-31'),
    image: '/assets/certificados_img/google data analytics/COURSERA_GOOGLE_DATA_ANALYTICS_2024.jpg',
    category: 'certification',
  },
];

interface CertificateCardProps {
  certificate: Certificate;
  onPreview?: (cert: Certificate) => void;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden transition-all duration-300 group-hover:border-accent-orange group-hover:shadow-lg group-hover:shadow-accent-orange/20 h-full flex flex-col">
        {/* Certificate Preview */}
        <div className="w-full h-40 bg-gradient-to-br from-dark-header-btn to-dark-bg flex items-center justify-center overflow-hidden">
          <div className="text-accent-orange text-3xl font-bold opacity-20">
            {certificate.issuer.split(' ')[0]}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-dark-header-text group-hover:text-accent-orange transition-colors mb-2">
            {certificate.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{certificate.issuer}</p>
          <div className="mt-auto pt-4 border-t border-dark-border">
            <p className="text-xs text-gray-500">
              {certificate.date.toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CertificateGallery = () => {
  const sortedCertificates = [...certificatesData].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <section id="certificates" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Certificações e <span className="text-accent-orange">Formações</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-12"></div>
        </motion.div>

        {sortedCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CertificateCard certificate={cert} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Certificados em breve!</p>
          </div>
        )}

        {/* Categories Summary */}
        <motion.div
          className="mt-16 pt-12 border-t border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-6">
            Áreas de <span className="text-accent-orange">Foco</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Data Science', 'Desenvolvimento', 'Cloud', 'Soft Skills'].map((area) => (
              <motion.div key={area} whileHover={{ scale: 1.05 }}>
                <Badge variant="outline">{area}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
