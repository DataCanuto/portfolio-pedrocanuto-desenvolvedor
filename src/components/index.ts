// Re-export all components for easy importing
export { Navbar } from './Header/Navbar';
export { Hero } from './Hero/Hero';
export { ServiceHero } from './ServiceHero/ServiceHero';
export { About } from './About/About';
export { Formation } from './About/Formation';
export { GithubArea } from './Projects/GithubArea';
export { ProjectsTimeline } from './Projects/ProjectsTimeline';
export { FeaturedProject } from './Projects/FeaturedProject';
export { ServicesCatalog } from './Services/ServicesCatalog';
export { Certifications } from './Certificates/Certifications';
export { CertificateViewer } from './Certificates/CertificateViewer';
export { CertificateGallery } from './Certificates/CertificateGallery';
export { Contact } from './Contact/ContactSection';
export { Footer } from './Footer/Footer';
export { Portfolio } from './Portfolio/Portfolio';
export { Button } from './UI/Button';
export { Badge } from './UI/Badge';

// Data Streaming Project Components
export { ProjectOverview, ProjectDiagrams, ProjectChallenges, TechStack, ClientInfo } from './Projects/DataStreamingProject';

// Pedro Canuto Música Project Components
export {
  ProjectOverview as PedroCanutoMusicoOverview,
  ProjectDiagrams as PedroCanutoMusicoDiagrams,
  ProjectChallenges as PedroCanutoMusicoChallenges,
  TechStack as PedroCanutoMusicoTechStack,
  AdminAgendaPreview,
} from './Projects/PedroCanutoMusico';

// Area & Project Header Components
export { default as AreaHeader } from './Projects/AreaHeader';
export { default as ProjectHeader } from './Projects/ProjectHeader';
export { default as ProjectAreaCard } from './Projects/ProjectAreaCard';
