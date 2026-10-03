import type { Profile } from './types';

export const profile: Profile = {
  name: 'Pedro Canuto',
  title: 'Desenvolvedor Full Stack | Java, React & Dados',
  tagline: 'Desenvolvedor de Soluções em Tecnologia',
  seo: {
    title: 'Pedro Canuto - Desenvolvedor de Sistemas',
    description:
      'Portfólio de Pedro Canuto. Estudante de Desenvolvimento de Sistemas com foco em Engenharia de Dados e Dashboards. Transição de Arte-educador e Musicoterapeuta para a área Tech.',
    shortDescription:
      'Portfólio de Pedro Canuto. Estudante de Desenvolvimento de Sistemas com foco em Engenharia de Dados.',
    keywords: [
      'Desenvolvedor',
      'Sistemas',
      'Dados',
      'Engenharia de Dados',
      'Dashboards',
      'Python',
      'Java',
      'SQL',
    ],
  },
  summary:
    'Desenvolvedor Full Stack em formação, com atuação do back-end (Java, Spring Boot, APIs REST, JPA/PostgreSQL, Docker) ao front-end (React, Next.js, TypeScript), incluindo o desenvolvimento de landing pages e sistemas completos para clientes reais, do banco de dados à entrega. Complemento o perfil com Python aplicado a análise de dados e machine learning (Pandas, Scikit-learn, OpenCV), o que amplia minha capacidade de atuar tanto em produto quanto em dados. Antes da tecnologia, construí uma trajetória na música: bandas desde 2016, aulas para crianças desde 2018 e negócio próprio em educação musical e eventos desde 2020. Trago desse período a prática de traduzir problema real em solução, não só código.',
  careerObjective:
    'Em transição de carreira, busco uma oportunidade de nível inicial (entry level) em desenvolvimento e análise, usando tecnologia para criar soluções para empresas e clientes. Também atendo como freelancer nos tipos de projeto apresentados neste portfólio.',
  location: { city: 'Salvador', state: 'BA' },
  photo: '/img/profile.png',
  contacts: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      display: '(71) 99958-8950',
      url: 'https://wa.me/5571999588950',
    },
    {
      id: 'email',
      label: 'Email',
      display: 'data.canuto@gmail.com',
      url: 'mailto:data.canuto@gmail.com',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      display: '/in/pedro-canuto-408867331',
      url: 'https://linkedin.com/in/pedro-canuto-408867331',
    },
    { id: 'github', label: 'GitHub', display: '/DataCanuto', url: 'https://github.com/DataCanuto' },
    {
      id: 'portfolio',
      label: 'Portfólio',
      display: 'portfolio-pedrocanuto-desenvolvedor.vercel.app',
      url: 'https://portfolio-pedrocanuto-desenvolvedor.vercel.app',
    },
  ],
  priorityTechnologies: [
    'java',
    'javascript',
    'html5',
    'css3',
    'python',
    'sql',
    'power-bi',
    'excel',
  ],
  mainCompetencies: [
    'backend-java',
    'frontend-react',
    'banco-de-dados',
    'analise-dados',
    'machine-learning',
    'ux-design',
  ],
  softSkills: [
    {
      name: 'Empatia e Foco no Usuário (User-Centric)',
      description: 'escuta ativa para entender necessidades reais.',
    },
    {
      name: 'Comunicação Clara',
      description: 'traduzir conceitos técnicos para diversos públicos.',
    },
    { name: 'Resolução Criativa', description: 'visão fora da caixa para problemas difíceis.' },
    {
      name: 'Aprender a Aprender',
      description: 'agilidade para dominar novas tecnologias rapidamente.',
    },
  ],
  languages: [
    { name: 'Português', level: 'nativo' },
    { name: 'Inglês', level: 'fluente' },
  ],
  about: {
    developer:
      'Desenvolvedor Full-Stack em formação, com foco em: Java e Spring Boot para construção de APIs REST e aplicações orientadas a regras de negócio. Aplico Programação Orientada a Objetos, persistência com JPA/PostgreSQL e conteinerização com Docker em projetos completos, do banco de dados à entrega. Complemento o perfil com projetos em Python aplicado a dados e machine learning, e com repertório de UX/UI, o que amplia minha capacidade de dialogar com times de produto e dados.',
    journey: {
      paragraphs: [
        'Minha trajetória profissional não é convencional, e é exatamente isso que considero minha maior força. Construí minha base como Arte-educador, educador musical bilíngue e Musicoterapeuta, trabalhando com desenvolvimento humano.',
        'Hoje, como estudante no SENAI CIMATEC, trago essa bagagem para a tecnologia. Aprender novas linguagens ou arquitetar bancos de dados exige o mesmo que um instrumento musical: foco, prática, lógica e a capacidade de conectar elementos para criar algo em harmonia.',
      ],
      link: { label: 'aqui', url: 'https://pedrocanutomusico.vercel.app/' },
    },
    arsenal: [
      'Linguagens: Python, Java, C++, UML.',
      'Dados: SQL, ETL, Matplotlib, Seaborn.',
      'Negócios: Excel Avançado, Dashboards.',
      'Idiomas: Inglês Fluente.',
    ],
  },
};

export const getContact = (id: Profile['contacts'][number]['id']) => {
  const contact = profile.contacts.find((c) => c.id === id);
  if (!contact) throw new Error(`Contato desconhecido: ${id}`);
  return contact;
};
