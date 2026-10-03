import type { Project } from '../types';

export const pedroCanutoMusico: Project = {
  id: 'pedro-canuto-musico',
  name: 'Pedro Canuto Música',
  slug: 'pedro-canuto-musico',
  shortDescription:
    'Sistema fullstack de cadastro de alunos e agenda de aulas de música: backend em Java com Spring Boot e PostgreSQL, frontend em React, aplicando na prática os fundamentos do curso Técnico em Desenvolvimento de Sistemas do SENAI CIMATEC para gerenciar meu próprio serviço como educador musical.',
  description:
    'Sistema fullstack de cadastro de alunos e agenda de aulas de música: backend em Java com Spring Boot e frontend em React, aplicando na prática os conhecimentos do curso Técnico em Desenvolvimento de Sistemas para gerenciar meu próprio serviço profissional.',
  problem:
    'Organizar o cadastro de alunos e a agenda de aulas do meu próprio serviço como educador musical.',
  objective:
    'Aplicar, em um problema real do meu dia a dia como educador musical, os fundamentos de Spring Boot aprendidos em sala de aula: modelagem de entidades, persistência com Spring Data JPA, regras de negócio na camada de serviço e autenticação de uma área administrativa.',
  resumeTitle: 'Sistema de Agendamentos e Vitrine de Serviços',
  resumeDescription:
    'Desenvolvimento full stack de aplicação web para gerenciamento de agendamentos de aulas e serviços, publicada em produção.',
  status: 'concluido',
  category: 'backend',
  secondaryCategories: ['frontend'],
  perspectives: {
    frontend: {
      title: 'Pedro Canuto Música — Frontend',
      description:
        'Aplicação React que consome a API do sistema de cadastro e agenda de aulas de música: formulários de matrícula, agendamento de aulas e painel administrativo integrados ao backend em Spring Boot.',
      technologies: ['react', 'typescript', 'vite', 'nodejs'],
      features: [
        'Agendamento de aulas via API',
        'Cadastro e matrícula de alunos',
        'Painel administrativo autenticado',
        'Consumo de API REST em Spring Boot',
      ],
    },
  },
  featured: true,
  cover: { src: '/assets/covers/pedro-canuto-musico.jpg', alt: 'Página inicial do site Pedro Canuto Música' },
  onResume: 'pessoal',
  date: '2026-06',
  context: { engagement: 'pessoal', label: 'Projeto Pessoal' },
  domain: 'Educação musical — agenda de aulas',
  technologies: [
    'java',
    'spring-boot',
    'react',
    'spring-security',
    'postgresql',
    'spring-data-jpa',
    'hibernate',
    'flyway',
    'maven',
    'bean-validation',
    'typescript',
    'vite',
    'nodejs',
    'rest-api',
  ],
  skills: [
    'backend-java',
    'api-design',
    'frontend-react',
    'banco-de-dados',
    'seguranca-aplicacoes',
  ],
  architecture:
    'Aplicação em camadas (Controller, Service, Repository) no padrão MVC, com DTOs e API REST consumida pelo frontend React.',
  features: [
    'Cadastro e matrícula de alunos',
    'Agenda de aulas sem conflito de horários',
    'Painel administrativo autenticado',
  ],
  backend: ['Java 17', 'Spring Boot', 'Spring Security', 'Bean Validation'],
  frontend: ['React', 'TypeScript', 'Vite'],
  database: ['PostgreSQL', 'Spring Data JPA / Hibernate', 'Flyway'],
  repository: 'https://github.com/DataCanuto/pedrocanutomusico',
  deployment: 'https://pedrocanutomusico.app',
  caseStudy: '/backend/pedro-canuto-musico',
  challenges: [
    {
      title: 'Do Zero ao Deploy: Primeira Aplicação Full Stack em Java',
      description:
        'Este foi o primeiro projeto aplicando de ponta a ponta os conceitos de Spring Boot vistos em sala de aula, unindo backend Java a uma interface web funcional para um caso de uso real.',
      solution:
        'Estruturação da aplicação em camadas (Controller, Service, Repository), seguindo as boas práticas de arquitetura MVC ensinadas no curso técnico do SENAI CIMATEC.',
      impact:
        'Consolidação prática dos fundamentos de Spring Boot, servindo de base para os próximos sistemas de cadastro do portfólio.',
      difficulty: 'high',
    },
    {
      title: 'Conflito de Horários na Agenda',
      description:
        'Duas aulas não podem ocupar o mesmo horário. Era preciso impedir que um novo agendamento sobrepusesse um compromisso já existente na agenda do professor.',
      solution:
        'Implementação de uma regra de negócio na camada de serviço que valida a sobreposição de intervalos de horário antes de persistir uma nova aula, comparando data e hora de início/fim.',
      impact:
        'Eliminação de conflitos de agenda, garantindo que cada horário tenha no máximo uma aula vinculada.',
      difficulty: 'high',
    },
    {
      title: 'Modelagem do Relacionamento Aluno–Aula',
      description:
        'Um aluno pode ter várias aulas ao longo do tempo, e cada aula pertence a um único aluno. Era preciso representar corretamente essa relação no banco de dados.',
      solution:
        'Uso das anotações @OneToMany e @ManyToOne do Spring Data JPA entre as entidades Aluno e Aula, com chave estrangeira e carregamento otimizado das relações.',
      impact:
        'Estrutura de dados normalizada, permitindo consultar rapidamente o histórico completo de aulas de cada aluno.',
      difficulty: 'medium',
    },
    {
      title: 'Autenticação e Separação de Papéis (Admin x Público)',
      description:
        'A área administrativa — agenda e cadastro de alunos — precisa ficar protegida, enquanto a página pública de apresentação do serviço deve permanecer aberta a qualquer visitante.',
      solution:
        'Configuração do Spring Security restringindo as rotas administrativas a usuários autenticados, mantendo as rotas públicas de apresentação liberadas.',
      impact:
        'Separação clara entre a experiência do visitante/aluno e o painel de controle do administrador.',
      difficulty: 'high',
    },
    {
      title: 'Validação de Dados de Cadastro',
      description:
        'Os formulários de cadastro de alunos e agendamento de aulas precisavam impedir dados inválidos: e-mails malformados, horários inconsistentes e campos obrigatórios em branco.',
      solution:
        'Aplicação de Bean Validation (@NotBlank, @Email, @Future) diretamente nas entidades e DTOs, com tratamento centralizado de exceções para retornar mensagens claras ao usuário.',
      impact:
        'Redução de erros de cadastro e maior confiabilidade dos dados armazenados no sistema.',
      difficulty: 'medium',
    },
    {
      title: 'Persistência e Organização do Schema do Banco',
      description:
        'Era necessário manter a estrutura do banco relacional consistente entre o ambiente de desenvolvimento e as evoluções do código ao longo do curso.',
      solution:
        'Uso do Spring Data JPA com Hibernate para geração e controle do schema, junto de dados iniciais de teste para validar os fluxos de cadastro e agendamento.',
      impact:
        'Ambiente de desenvolvimento reproduzível, com o schema do banco sempre sincronizado ao modelo de entidades.',
      difficulty: 'medium',
    },
  ],
  icon: '🎵',
};
