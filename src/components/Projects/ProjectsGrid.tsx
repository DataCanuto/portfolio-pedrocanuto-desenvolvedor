'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, GitFork, Github, ExternalLink } from 'lucide-react';
import { useGitHubProjects } from '@/hooks/useGitHubProjects';
import { GitHubRepository } from '@/types/github';

interface ProjectCardProps {
  project: GitHubRepository;
  onSelect: (project: GitHubRepository) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 h-full transition-all duration-300 group-hover:border-accent-orange group-hover:shadow-lg group-hover:shadow-accent-orange/20">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-dark-header-text group-hover:text-accent-orange transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{project.language || 'Unknown'}</p>
          </div>
          <Github className="text-gray-400 group-hover:text-accent-orange transition-colors" size={20} />
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description || 'Sem descrição disponível'}
        </p>

        <div className="flex gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Star size={16} />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork size={16} />
            <span>{project.forks_count}</span>
          </div>
        </div>

        {project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.topics.slice(0, 2).map((topic) => (
              <span key={topic} className="text-xs bg-dark-header-btn text-accent-orange px-2 py-1 rounded">
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: GitHubRepository;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-dark-bg-secondary border border-dark-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-accent-orange mb-2">{project.name}</h2>
                <p className="text-gray-400">{project.language || 'Unknown'}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-accent-orange transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-dark-header-text text-lg mb-6 leading-relaxed">
              {project.description || 'Sem descrição disponível'}
            </p>

            <div className="flex gap-4 mb-6 text-gray-400">
              <div className="flex items-center gap-2 bg-dark-bg px-4 py-2 rounded-lg">
                <Star size={18} />
                <span>{project.stargazers_count} stars</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-bg px-4 py-2 rounded-lg">
                <GitFork size={18} />
                <span>{project.forks_count} forks</span>
              </div>
            </div>

            {project.topics.length > 0 && (
              <div className="mb-6">
                <h3 className="text-dark-header-text font-semibold mb-2">Topics:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-dark-header-btn text-accent-orange px-3 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-accent-orange-light transition-all duration-300"
              >
                <Github size={18} />
                Abrir no GitHub
              </a>
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-accent-orange text-accent-orange rounded-lg font-semibold hover:bg-accent-orange hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  Ver ao vivo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<GitHubRepository | null>(null);
  const { projects, isLoading } = useGitHubProjects();

  return (
    <section id="projects" className="py-20 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Meu <span className="text-accent-orange">Repositório</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-12"></div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-dark-bg rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-dark-border rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-dark-border rounded mb-4 w-1/2"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-dark-border rounded w-full"></div>
                  <div className="h-3 bg-dark-border rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nenhum projeto encontrado. Verifique sua configuração do GitHub.
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
