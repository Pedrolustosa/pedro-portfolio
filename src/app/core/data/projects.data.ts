import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'IdentityHub',
    slug: 'identityhub',
    category: 'Project',
    description:
      'Projeto de gerenciamento de identidade e acesso.',
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Entity Framework Core',
      'Angular 18',
      'Tailwind CSS'
    ],
    featured: true,
    githubUrl: 'https://github.com/Pedrolustosa/IdentityHub'
  },
  {
    title: 'SignCraft',
    slug: 'signcraft',
    category: 'Project',
    description:
      'Projeto para criação de assinaturas profissionais de e-mail.',
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Angular 20',
      'SSR'
    ],
    featured: true,
    githubUrl: 'https://github.com/Pedrolustosa/SignCraft'
  }
];
