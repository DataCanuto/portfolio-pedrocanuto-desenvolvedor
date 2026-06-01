'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

// Dados de comparação entre usuários
const userComparisonData = [
  { userId: 'U1', totalSteps: 234521, totalCalories: 62300, avgSleep: 7.2, userType: 'Very Active' },
  { userId: 'U2', totalSteps: 187654, totalCalories: 54200, avgSleep: 6.8, userType: 'Active' },
  { userId: 'U3', totalSteps: 156789, totalCalories: 48900, avgSleep: 7.5, userType: 'Somewhat Active' },
  { userId: 'U4', totalSteps: 212345, totalCalories: 59800, avgSleep: 7.1, userType: 'Very Active' },
  { userId: 'U5', totalSteps: 124567, totalCalories: 42300, avgSleep: 6.9, userType: 'Lightly Active' },
  { userId: 'U6', totalSteps: 198765, totalCalories: 56700, avgSleep: 8.2, userType: 'Active' },
  { userId: 'U7', totalSteps: 143210, totalCalories: 46800, avgSleep: 8.5, userType: 'Lightly Active' },
  { userId: 'U8', totalSteps: 256789, totalCalories: 64500, avgSleep: 6.5, userType: 'Very Active' },
  { userId: 'U9', totalSteps: 167890, totalCalories: 51200, avgSleep: 7.3, userType: 'Somewhat Active' },
  { userId: 'U10', totalSteps: 201234, totalCalories: 57900, avgSleep: 7.0, userType: 'Active' },
];

const colorMap = {
  'Very Active': '#ef4444',
  'Active': '#f97316',
  'Somewhat Active': '#eab308',
  'Lightly Active': '#3b82f6',
  'Sedentary': '#6b7280',
};

interface UserComparisonChartProps {
  title?: string;
  description?: string;
}

export default function UserComparisonChart({
  title = 'Comparação entre Usuários',
  description = 'Correlação entre Total de Passos e Calorias Queimadas',
}: UserComparisonChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-dark-bg border border-accent-orange/50 rounded-lg p-4 shadow-lg">
          <p className="text-gray-300 text-sm font-semibold mb-2">{data.userId}</p>
          <p className="text-orange-400 text-xs">Passos: {data.totalSteps.toLocaleString()}</p>
          <p className="text-blue-400 text-xs">Calorias: {data.totalCalories} kcal</p>
          <p className="text-purple-400 text-xs">Sono Médio: {data.avgSleep}h</p>
          <p className="text-gray-400 text-xs mt-2">
            Tipo: <span className="font-semibold">{data.userType}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <span className="text-accent-orange">👥</span> Análise de Usuários
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Comparação entre os 10 usuários mais ativos da base de dados
          </p>
        </motion.div>

        {/* Scatter Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-4">
            📊 {title}
          </h3>
          <p className="text-gray-400 text-sm mb-6">{description}</p>

          <div style={{ width: '100%', height: 400 }}>
            <ScatterChart data={userComparisonData} margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="totalSteps"
                type="number"
                stroke="#9ca3af"
                label={{ value: 'Total de Passos', position: 'insideBottomRight', offset: -10 }}
              />
              <YAxis
                dataKey="totalCalories"
                type="number"
                stroke="#9ca3af"
                label={{ value: 'Total de Calorias (kcal)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Scatter
                dataKey="totalCalories"
                data={userComparisonData}
                fill="#8884d8"
                shape="circle"
              >
                {userComparisonData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorMap[entry.userType as keyof typeof colorMap] || '#6b7280'}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </div>
        </motion.div>

        {/* User Type Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {Object.entries(colorMap).map(([userType, color]) => (
            <div
              key={userType}
              className="bg-dark-bg border border-dark-border rounded-lg p-4 flex items-center gap-3"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-300 text-sm font-semibold">{userType}</span>
            </div>
          ))}
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-accent-orange/10 border border-accent-orange/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-accent-orange mb-4">💡 Insights da Comparação</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              ✓ <span className="font-semibold">Correlação Positiva Forte:</span> Usuários com mais passos tendem a queimar mais calorias (correlação esperada).
            </li>
            <li>
              ✓ <span className="font-semibold">Variação de Sono:</span> A qualidade do sono varia entre 6.5h e 8.5h, sem correlação direta com atividade.
            </li>
            <li>
              ✓ <span className="font-semibold">Segmentação Clara:</span> Existe clara distinção entre usuários "Very Active" e "Lightly Active".
            </li>
            <li>
              ✓ <span className="font-semibold">Oportunidade:</span> Usuários com menos atividade poderiam se beneficiar de programas de gamificação.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
