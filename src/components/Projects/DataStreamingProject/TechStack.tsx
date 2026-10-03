'use client';

import React from 'react';
import { getProject, getTechnology } from '@/data';
import type { TechnologyKind } from '@/data';

// Stack vem da fonte única de dados (src/data/projects), agrupada pelo tipo de tecnologia.
const project = getProject('data-streaming-project');

const GROUPS: { title: string; kinds: TechnologyKind[] }[] = [
  { title: 'Linguagens', kinds: ['language'] },
  { title: 'Frameworks e bibliotecas', kinds: ['framework', 'library'] },
  { title: 'Banco de dados', kinds: ['database'] },
  { title: 'Ferramentas e práticas', kinds: ['tool', 'platform', 'practice', 'ai-service'] },
];

export default function TechStack() {
  const techs = project.technologies.map(getTechnology);

  return (
    <div className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
          🧰 <span className="text-accent-orange">Stack</span> do sistema atual
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROUPS.map((group) => {
            const items = techs.filter((t) => group.kinds.includes(t.kind));
            if (items.length === 0) return null;
            return (
              <div
                key={group.title}
                className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-accent-orange mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {items.map((tech) => (
                    <li key={tech.id} className="text-gray-300">
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
