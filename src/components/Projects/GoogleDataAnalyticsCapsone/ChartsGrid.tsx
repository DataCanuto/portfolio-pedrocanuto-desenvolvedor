'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Dados de exemplo baseados na análise do projeto
const stepsOverTimeData = [
  { date: '01/04', steps: 7543, calories: 1980 },
  { date: '02/04', steps: 8234, calories: 2087 },
  { date: '03/04', steps: 6891, calories: 1845 },
  { date: '04/04', steps: 9102, calories: 2234 },
  { date: '05/04', steps: 8456, calories: 2098 },
  { date: '06/04', steps: 10234, calories: 2456 },
  { date: '07/04', steps: 7892, calories: 1956 },
];

const weekdayActivityData = [
  { day: 'Seg', calories: 2120, steps: 8500, sleep: 7.2 },
  { day: 'Ter', calories: 2087, steps: 8243, sleep: 6.8 },
  { day: 'Qua', calories: 1945, steps: 7892, sleep: 7.5 },
  { day: 'Qui', calories: 2234, steps: 9102, sleep: 7.1 },
  { day: 'Sex', calories: 2198, steps: 8765, sleep: 6.9 },
  { day: 'Sab', calories: 2456, steps: 10234, sleep: 8.2 },
  { day: 'Dom', calories: 1956, steps: 7892, sleep: 8.5 },
];

const activityIntensityData = [
  { name: 'Sedentário', value: 45, color: '#6b7280' },
  { name: 'Leve', value: 35, color: '#3b82f6' },
  { name: 'Moderado', value: 15, color: '#f59e0b' },
  { name: 'Intenso', value: 5, color: '#ef4444' },
];

const hourlyPeaksData = [
  { hour: '06h', activity: 12 },
  { hour: '09h', activity: 25 },
  { hour: '12h', activity: 45 },
  { hour: '15h', activity: 78 },
  { hour: '18h', activity: 95 },
  { hour: '21h', activity: 72 },
  { hour: '00h', activity: 15 },
];

const sleepPatternData = [
  { date: '01/04', sleep: 7.2, activity: 8243 },
  { date: '02/04', sleep: 6.8, activity: 8234 },
  { date: '03/04', sleep: 7.5, activity: 6891 },
  { date: '04/04', sleep: 7.1, activity: 9102 },
  { date: '05/04', sleep: 6.9, activity: 8456 },
  { date: '06/04', sleep: 8.2, activity: 10234 },
  { date: '07/04', sleep: 8.5, activity: 7892 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-bg border border-accent-orange/50 rounded-lg p-3 shadow-lg">
        <p className="text-gray-300 text-sm font-semibold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-xs">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface ChartsGridProps {
  timeFrame?: 'daily' | 'weekly' | 'monthly';
}

export default function ChartsGrid({ timeFrame: _timeFrame = 'weekly' }: ChartsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
    >
      {/* Gráfico 1: Tendência de Passos e Calorias */}
      <motion.div
        variants={chartVariants}
        className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-dark-header-text mb-4">
          📈 Tendência: Passos × Calorias
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stepsOverTimeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#9ca3af' }} />
            <Line
              type="monotone"
              dataKey="steps"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ fill: '#f97316', r: 5 }}
              activeDot={{ r: 7 }}
              name="Passos"
            />
            <Line
              type="monotone"
              dataKey="calories"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 5 }}
              activeDot={{ r: 7 }}
              name="Calorias (kcal)"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Gráfico 2: Atividade por Dia da Semana */}
      <motion.div
        variants={chartVariants}
        className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-dark-header-text mb-4">
          📊 Atividade por Dia da Semana
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weekdayActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#9ca3af' }} />
            <Bar
              dataKey="steps"
              fill="#f97316"
              radius={[8, 8, 0, 0]}
              name="Passos"
            />
            <Bar
              dataKey="calories"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
              name="Calorias (kcal)"
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Gráfico 3: Distribuição de Intensidade */}
      <motion.div
        variants={chartVariants}
        className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-dark-header-text mb-4">
          🎯 Distribuição de Intensidade de Atividade
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={activityIntensityData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={(entry) => `${entry.name}: ${entry.value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {activityIntensityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #f97316',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#f97316' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Gráfico 4: Picos de Atividade por Hora */}
      <motion.div
        variants={chartVariants}
        className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-dark-header-text mb-4">
          ⏰ Picos de Atividade por Hora do Dia
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={hourlyPeaksData}>
            <defs>
              <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="hour" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="activity"
              stroke="#f97316"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorActivity)"
              name="Nível de Atividade"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Gráfico 5: Padrão de Sono × Atividade */}
      <motion.div
        variants={chartVariants}
        className="lg:col-span-2 bg-dark-bg-secondary border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-dark-header-text mb-4">
          😴 Correlação: Sono × Atividade
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sleepPatternData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" yAxisId="left" />
            <YAxis stroke="#9ca3af" yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#9ca3af' }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sleep"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', r: 5 }}
              name="Sono (horas)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="activity"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 5 }}
              name="Atividade (passos)"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
