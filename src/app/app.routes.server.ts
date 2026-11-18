import { RenderMode, ServerRoute } from '@angular/ssr';

import { PROJECT_CASES } from './core/data/project-cases.data';

/** Every known page is prerendered to static HTML at build time. */
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      PROJECT_CASES.map(project => ({ slug: project.slug }))
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
