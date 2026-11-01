import { L } from '../i18n/locale';
import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'IdentityHub',
    slug: 'identityhub',
    category: 'Project',
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
  }
];
