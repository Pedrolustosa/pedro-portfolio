import { L } from '../i18n/locale';
import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'InventoryOrderManagement',
    slug: 'inventory-order-management',
    category: 'Full Stack',
    description: L(
      'Sistema full stack de gestão operacional: catálogo, estoque, compras, vendas, financeiro, devoluções, expedição e dashboard com KPIs — com controle de acesso por permissões.',
      'Full-stack operations management system: catalog, inventory, purchasing, sales, finance, returns, shipping, and a KPI dashboard — with permission-based access control.'
    ),
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'EF Core 10',
      'Angular 22',
      'Tailwind CSS',
      'Chart.js',
      'xUnit',
      'Vitest'
    ],
    featured: true,
    githubUrl: 'https://github.com/Pedrolustosa/InventoryOrderManagement'
  },
  {
    title: 'IdentityHub',
    slug: 'identityhub',
    category: 'Full Stack',
    description: L(
      'Plataforma de Identity and Access Management (IAM) com painel administrativo para criar, editar e atribuir papéis a usuários de forma segura.',
      'Identity and Access Management (IAM) platform with an admin panel to create, edit, and assign roles to users securely.'
    ),
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Entity Framework Core',
      'Angular 18',
      'Tailwind CSS',
      'JWT',
      'SQLite'
    ],
    featured: true,
    githubUrl: 'https://github.com/Pedrolustosa/IdentityHub'
  },
  {
    title: 'TimeTrack Lite',
    slug: 'timetrack-lite',
    category: 'Web App',
    description: L(
      'Calculadora de jornada de trabalho: a partir dos horários de entrada, almoço e saída, mostra horas trabalhadas, saldo do dia, horário previsto de saída e sugere ajustes para fechar 8 horas.',
      'Workday calculator: from start, lunch, and end times it shows hours worked, daily balance, and projected end time, and suggests adjustments to hit exactly 8 hours.'
    ),
    technologies: [
      'Angular 20',
      'TypeScript',
      'Tailwind CSS',
      'Signals',
      'GitHub Pages'
    ],
    featured: false,
    githubUrl: 'https://github.com/Pedrolustosa/TimeTrackLite',
    demoUrl: 'https://pedrolustosa.github.io/TimeTrackLite/'
  }
];
