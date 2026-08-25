'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2, Settings, BarChart3, Monitor } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Backend',
    description: 'Desenvolvimento e Consumo de API com Spring Boot Java (JPA, WEB, PostgreSQL, Security, SpringBootAI). Foco em arquitetura e segurança.',
    icon: <Code2 size={40} />,
    href: '/backend',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 2,
    title: 'Engenharia de Dados',
    description: 'Pipelines de ETL, processamento de dados em larga escala, Machine Learning Methods com Python (tensorflow, scikit-learn, XGBoost e OpenCV).',
    icon: <Settings size={40} />,
    href: '/engenharia-dados',
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 3,
    title: 'Dashboards',
    description: 'Visualizações interativas com Python (Pandas, Numpy, Matplot, Seaborn), Power BI e soluções customizadas em React para insights acionáveis.',
    icon: <BarChart3 size={40} />,
    href: '/dashboards',
    color: 'from-green-600 to-green-400',
  },
  {
    id: 4,
    title: 'Frontend',
    description: 'Interfaces em React com design responsivo, performance alta e melhores práticas de UX/UI, de landing pages a aplicações completas.',
    icon: <Monitor size={40} />,
    href: '/landing-pages',
    color: 'from-orange-600 to-orange-400',
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Link href={service.href}>
        <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-8 h-full transition-all duration-300 group-hover:border-accent-orange group-hover:shadow-lg group-hover:shadow-accent-orange/20 flex flex-col">
          {/* Icon */}
          <div className={`p-4 rounded-lg bg-gradient-to-br ${service.color} w-fit mb-6 text-white`}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-dark-header-text group-hover:text-accent-orange transition-colors mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-base flex-1 mb-6">
            {service.description}
          </p>

          {/* Link */}
          <div className="flex items-center gap-2 text-accent-orange font-semibold group-hover:gap-3 transition-all">
            Explorar
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ServicesCatalog = () => {
  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Meus <span className="text-accent-orange">Serviços</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-4"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Soluções especializadas em desenvolvimento, dados e design para impulsionar seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
