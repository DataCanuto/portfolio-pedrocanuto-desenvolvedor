import type { Project } from '../types';
import { floraHubBackend, floraHubUx } from './flora-hub';
import { pedroCanutoMusico } from './pedro-canuto-musico';
import { galeriaDigital } from './galeria-digital';
import { dataStreamingProject } from './data-streaming-project';
import { machineLearning } from './machine-learning';
import { springBootAiBudgeting } from './springboot-ai-budgeting';
import { googleDataAnalyticsCapstone } from './google-data-analytics-capstone';
import { brasil2026DadosDemocracia } from './brasil-2026-dados-democracia';

// Um arquivo por projeto. Para adicionar um projeto: crie o arquivo e inclua-o aqui.
// A ordem desta lista é a ordem dos destaques na Home e de exibição dentro de cada ano.
export const projects: Project[] = [
  floraHubBackend,
  dataStreamingProject,
  pedroCanutoMusico,
  floraHubUx,
  galeriaDigital,
  machineLearning,
  springBootAiBudgeting,
  googleDataAnalyticsCapstone,
  brasil2026DadosDemocracia,
];
