'use client';

import React from 'react';
import ProjectOverview from '@/components/Projects/MachineLearning/ProjectOverview';
import FoldersAccordion from '@/components/Projects/MachineLearning/FoldersAccordion';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { ProjectCaseHero } from '@/components/Projects/ProjectCaseHero';
import { Footer } from '@/components';
import { getProject } from '@/data';
import { BookOpen, FolderTree, GraduationCap } from 'lucide-react';


const project = getProject('machine-learning');

export default function MachineLearningPage() {
  const projectSections = [
    { id: 'overview', label: 'Visão Geral', icon: <BookOpen size={16} /> },
    { id: 'folders', label: 'Pastas do Repositório', icon: <FolderTree size={16} /> },
    { id: 'skills', label: 'Skills Desenvolvidas', icon: <GraduationCap size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      <ProjectHeader
        projectTitle={project.name}
        sections={projectSections}
        areaSlug="engenharia-dados"
        backUrl="/engenharia-dados"
      />

      <ProjectCaseHero project={project} detailsId="overview" />

      {/* Visão Geral */}
      <section id="overview">
        <ProjectOverview />
      </section>

      {/* Pastas do Repositório (Acordeão) */}
      <section id="folders">
        <FoldersAccordion />
      </section>

      {/* Skills Desenvolvidas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Skills <span className="text-accent-orange">Desenvolvidas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Limpeza e Preparação de Dados', desc: 'Tratamento de nulos, tipos, datas e outliers com pandas' },
              { title: 'Análise Exploratória (EDA)', desc: 'Visualizações e estatística descritiva com matplotlib/seaborn' },
              { title: 'Engenharia de Atributos', desc: 'Encoding categórico e normalização/padronização' },
              { title: 'Aprendizado Supervisionado', desc: 'Regressão, KNN, árvores e random forest com scikit-learn' },
              { title: 'Aprendizado Não Supervisionado', desc: 'Clusterização K-Means e redução de dimensionalidade (PCA)' },
              { title: 'Avaliação de Modelos', desc: 'Métricas de classificação/regressão e seleção de atributos' },
              { title: 'Tuning de Hiperparâmetros', desc: 'Grid Search e Random Search' },
              { title: 'Gradient Boosting', desc: 'Classificação com XGBoost' },
              { title: 'Visão Computacional', desc: 'Detecção facial com OpenCV e Haar Cascade' },
              { title: 'Jupyter Notebook', desc: 'Ambiente de experimentação e documentação de análises' },
              { title: 'Versionamento com Git', desc: 'Controle de código-fonte' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-dark-bg border border-dark-border rounded-lg p-6 hover:border-accent-orange/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-accent-orange group-hover:text-accent-orange/80 transition-colors mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-header-text mb-6">
            🤝 Precisa de <span className="text-accent-orange">Análise de Dados ou ML</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Se você tem dados brutos e quer transformá-los em modelos preditivos ou insights
            acionáveis, vamos conversar sobre como aplicar essas ferramentas ao seu problema.
          </p>
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Explorar Repositório Completo no GitHub
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
