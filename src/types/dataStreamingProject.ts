export interface ProjectPhase {
  id: number;
  name: string;
  description: string;
  duration: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

export interface ProjectChallenge {
  id: number;
  title: string;
  description: string;
  solution: string;
  icon: string;
}

export interface PDFType {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  fields: string[];
  icon: string;
}

export interface ClientCompany {
  name: string;
  fullName: string;
  website: string;
  branch: string;
  contact: string;
  logo?: string;
  description: string;
}

export interface DataStreamingProject {
  title: string;
  description: string;
  client: ClientCompany;
  year: number;
  duration: string;
  technologies: string[];
  phases: ProjectPhase[];
  challenges: ProjectChallenge[];
  pdfTypes: PDFType[];
  repository: string;
  status: string;
}
