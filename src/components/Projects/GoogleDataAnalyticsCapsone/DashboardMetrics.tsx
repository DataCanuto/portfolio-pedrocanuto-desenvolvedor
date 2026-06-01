'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Footprints, TrendingUp, Clock, Users } from 'lucide-react';

interface Metric {
  title: string;
  value: string | number;
  unit: string;
  change?: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface DashboardMetricsProps {
  timeFrame?: 'daily' | 'weekly' | 'monthly';
  metrics?: Metric[];
}

const defaultMetrics: Record<string, Metric[]> = {
  daily: [
    {
      title: 'Passos Médios',
      value: '8243',
      unit: 'steps',
      change: '+12%',
      icon: <Footprints size={24} />,
      color: 'from-blue-500/20 to-blue-600/20',
      description: 'Média diária de passos detectados',
    },
    {
      title: 'Calorias Queimadas',
      value: '2087',
      unit: 'kcal',
      change: '+8%',
      icon: <Flame size={24} />,
      color: 'from-red-500/20 to-red-600/20',
      description: 'Total de calorias queimadas por dia',
    },
    {
      title: 'Atividade Leve',
      value: '210',
      unit: 'min',
      change: '+5%',
      icon: <Activity size={24} />,
      color: 'from-green-500/20 to-green-600/20',
      description: 'Minutos de atividade leve',
    },
    {
      title: 'Atividade Intensa',
      value: '28',
      unit: 'min',
      change: '+15%',
      icon: <TrendingUp size={24} />,
      color: 'from-orange-500/20 to-orange-600/20',
      description: 'Minutos de atividade intensa',
    },
  ],
  weekly: [
    {
      title: 'Passos Semanais',
      value: '57705',
      unit: 'steps',
      change: '+18%',
      icon: <Footprints size={24} />,
      color: 'from-blue-500/20 to-blue-600/20',
      description: 'Total de passos na semana',
    },
    {
      title: 'Calorias Semanais',
      value: '14609',
      unit: 'kcal',
      change: '+12%',
      icon: <Flame size={24} />,
      color: 'from-red-500/20 to-red-600/20',
      description: 'Total de calorias queimadas',
    },
    {
      title: 'Dias Ativos',
      value: '6',
      unit: 'dias',
      change: '+1',
      icon: <Clock size={24} />,
      color: 'from-purple-500/20 to-purple-600/20',
      description: 'Dias com atividade registrada',
    },
    {
      title: 'Pico de Atividade',
      value: '18h',
      unit: 'horário',
      change: 'Consistente',
      icon: <TrendingUp size={24} />,
      color: 'from-yellow-500/20 to-yellow-600/20',
      description: 'Horário com maior atividade',
    },
  ],
  monthly: [
    {
      title: 'Total de Passos',
      value: '245481',
      unit: 'steps',
      change: '+25%',
      icon: <Footprints size={24} />,
      color: 'from-blue-500/20 to-blue-600/20',
      description: 'Total de passos no mês',
    },
    {
      title: 'Total de Calorias',
      value: '62300',
      unit: 'kcal',
      change: '+20%',
      icon: <Flame size={24} />,
      color: 'from-red-500/20 to-red-600/20',
      description: 'Total de calorias queimadas',
    },
    {
      title: 'Dias em Meta',
      value: '24',
      unit: 'dias',
      change: '+3',
      icon: <Clock size={24} />,
      color: 'from-green-500/20 to-green-600/20',
      description: 'Dias em que atingiu a meta',
    },
    {
      title: 'Usuários Comparáveis',
      value: '87',
      unit: '%',
      change: 'Percentil',
      icon: <Users size={24} />,
      color: 'from-pink-500/20 to-pink-600/20',
      description: 'Percentil comparado a base',
    },
  ],
};

export default function DashboardMetrics({
  timeFrame = 'daily',
  metrics: customMetrics,
}: DashboardMetricsProps) {
  const metricsToDisplay = customMetrics || defaultMetrics[timeFrame];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {metricsToDisplay.map((metric, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`bg-gradient-to-br ${metric.color} border border-accent-orange/20 rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-lg`}
        >
          {/* Header com ícone */}
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-dark-bg/50 rounded-lg text-accent-orange">
              {metric.icon}
            </div>
            {metric.change && (
              <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded">
                {metric.change}
              </span>
            )}
          </div>

          {/* Valor e Unidade */}
          <div className="mb-3">
            <p className="text-gray-400 text-sm font-semibold mb-1">{metric.title}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-accent-orange">{metric.value}</span>
              <span className="text-sm text-gray-400">{metric.unit}</span>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-xs text-gray-400">{metric.description}</p>

          {/* Progress bar */}
          <div className="mt-4 h-1 bg-dark-bg/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-accent-orange to-orange-600"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
