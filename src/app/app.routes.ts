import { ActivatedRouteSnapshot, Routes } from '@angular/router';

import { PROJECT_CASES } from './core/data/project-cases.data';

const SITE_TITLE = 'Pedro Lustosa | Software Engineer';

const projectTitle = (route: ActivatedRouteSnapshot): string => {
  const project = PROJECT_CASES.find(
    item => item.slug === route.paramMap.get('slug')
  );

  return project ? `${project.title} | Pedro Lustosa` : SITE_TITLE;
};

export const routes: Routes = [
  {
    path: '',
    title: SITE_TITLE,
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },

  {
    path: 'projects/:slug',
    title: projectTitle,
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects)
  },

  {
    path: '**',
    redirectTo: ''
  }
];
