import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },

  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects)
  },

  {
    path: '**',
    redirectTo: ''
  }
];
