import type { Technology } from './types';

// Catálogo de tecnologias. Projetos, competências e perfil referenciam pelo `id`.
// Cores de linguagem no estilo GitHub (github.com/ozh/github-colors).
export const technologies: Technology[] = [
  // Linguagens
  { id: 'java', name: 'Java', kind: 'language', color: '#b07219' },
  { id: 'python', name: 'Python', kind: 'language', color: '#3572A5' },
  { id: 'typescript', name: 'TypeScript', kind: 'language', color: '#3178c6' },
  { id: 'javascript', name: 'JavaScript', kind: 'language', color: '#f1e05a' },
  { id: 'html5', name: 'HTML5', kind: 'language' },
  { id: 'css3', name: 'CSS3', kind: 'language' },
  { id: 'sql', name: 'SQL', kind: 'language' },
  { id: 'cpp', name: 'C++', kind: 'language' },
  { id: 'uml', name: 'UML', kind: 'practice' },

  // Backend
  { id: 'spring-boot', name: 'Spring Boot', kind: 'framework' },
  { id: 'spring-web', name: 'Spring Web', kind: 'framework' },
  { id: 'spring-ai', name: 'Spring AI', kind: 'framework' },
  { id: 'spring-security', name: 'Spring Security', kind: 'framework' },
  { id: 'spring-data-jpa', name: 'Spring Data JPA', kind: 'framework' },
  { id: 'hibernate', name: 'JPA/Hibernate', kind: 'framework' },
  { id: 'bean-validation', name: 'Bean Validation', kind: 'library' },
  { id: 'maven', name: 'Maven', kind: 'tool' },
  { id: 'gradle', name: 'Gradle', kind: 'tool' },
  { id: 'lombok', name: 'Lombok', kind: 'library' },
  { id: 'flyway', name: 'Flyway', kind: 'tool' },
  { id: 'junit', name: 'JUnit 5', kind: 'tool' },
  { id: 'rest-api', name: 'APIs REST', kind: 'practice' },
  { id: 'poo', name: 'Programação Orientada a Objetos', kind: 'practice' },
  { id: 'ddd', name: 'DDD (arquitetura em camadas)', kind: 'practice' },
  { id: 'crud', name: 'CRUD', kind: 'practice' },
  { id: 'fastapi', name: 'FastAPI', kind: 'framework' },
  { id: 'pydantic', name: 'Pydantic', kind: 'library' },
  { id: 'sqlalchemy', name: 'SQLAlchemy', kind: 'library' },
  { id: 'alembic', name: 'Alembic', kind: 'tool' },
  { id: 'pytest', name: 'pytest', kind: 'tool' },

  // Frontend
  { id: 'react', name: 'React', kind: 'framework' },
  { id: 'nextjs', name: 'Next.js', kind: 'framework' },
  { id: 'preact', name: 'Preact', kind: 'framework' },
  { id: 'vite', name: 'Vite', kind: 'tool' },
  { id: 'nodejs', name: 'Node.js', kind: 'platform' },
  { id: 'tailwind', name: 'Tailwind CSS', kind: 'framework' },
  { id: 'framer-motion', name: 'Framer Motion', kind: 'library' },

  // Banco de dados / infra
  { id: 'postgresql', name: 'PostgreSQL', kind: 'database' },
  { id: 'mysql', name: 'MySQL', kind: 'database' },
  { id: 'h2', name: 'H2', kind: 'database' },
  { id: 'docker', name: 'Docker', kind: 'tool' },
  { id: 'vercel', name: 'Vercel', kind: 'platform' },

  // IA
  { id: 'openai', name: 'OpenAI', kind: 'ai-service' },
  { id: 'gpt-4o', name: 'GPT-4o', kind: 'ai-service' },
  { id: 'whisper', name: 'Whisper', kind: 'ai-service' },
  { id: 'openweather', name: 'OpenWeather API', kind: 'platform' },

  // Dados / ML
  { id: 'jupyter', name: 'Jupyter Notebook', kind: 'tool' },
  { id: 'pandas', name: 'Pandas', kind: 'library' },
  { id: 'numpy', name: 'NumPy', kind: 'library' },
  { id: 'scipy', name: 'SciPy', kind: 'library' },
  { id: 'scikit-learn', name: 'Scikit-learn', kind: 'library' },
  { id: 'tensorflow', name: 'TensorFlow', kind: 'library' },
  { id: 'xgboost', name: 'XGBoost', kind: 'library' },
  { id: 'opencv', name: 'OpenCV', kind: 'library' },
  { id: 'matplotlib', name: 'Matplotlib', kind: 'library' },
  { id: 'seaborn', name: 'Seaborn', kind: 'library' },
  { id: 'plotly', name: 'Plotly', kind: 'library' },
  { id: 'pymupdf', name: 'PyMuPDF', kind: 'library' },
  { id: 'pypdf2', name: 'PyPDF2', kind: 'library' },
  { id: 'tesseract', name: 'Tesseract OCR', kind: 'tool' },
  { id: 'openpyxl', name: 'OpenPyXL', kind: 'library' },
  { id: 'regex', name: 'Regex', kind: 'practice' },
  { id: 'etl', name: 'ETL', kind: 'practice' },
  { id: 'eda', name: 'EDA', kind: 'practice' },
  { id: 'power-bi', name: 'Power BI', kind: 'tool' },
  { id: 'excel', name: 'Excel', kind: 'tool' },

  // UX
  { id: 'ux-ui-design', name: 'UX/UI Design', kind: 'practice' },
  { id: 'figma', name: 'Figma', kind: 'tool' },
  { id: 'ux-research', name: 'UX Research', kind: 'practice' },
  { id: 'empathy-map', name: 'Empathy Map', kind: 'practice' },
  { id: 'journey-map', name: 'Journey Map', kind: 'practice' },
  { id: 'wireframing', name: 'Wireframing', kind: 'practice' },
  { id: 'usability-testing', name: 'Usability Testing', kind: 'practice' },
];

const byId = new Map(technologies.map((t) => [t.id, t]));

export const getTechnology = (id: string): Technology => {
  const tech = byId.get(id);
  if (!tech) throw new Error(`Tecnologia desconhecida: ${id}`);
  return tech;
};

export const technologyNames = (ids: string[]): string[] => ids.map((id) => getTechnology(id).name);
