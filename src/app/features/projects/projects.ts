import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PROJECTS } from '../../core/data/projects.data';
import { PROJECT_CASES } from '../../core/data/project-cases.data';
import { ProjectCase } from '../../core/models/project-case.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { Carousel } from '../../shared/components/carousel/carousel';
import { CarouselSlideDirective } from '../../shared/components/carousel/carousel-slide.directive';
import {
  LocalizePipe,
  TranslatePipe
} from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  imports: [
    RouterLink,
    ScrollRevealDirective,
    Carousel,
    CarouselSlideDirective,
    TranslatePipe,
    LocalizePipe
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  protected readonly projects = PROJECTS;

  protected readonly selectedProject: ProjectCase | undefined;

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.paramMap.get('slug');

    this.selectedProject = slug
      ? PROJECT_CASES.find(project => project.slug === slug)
      : undefined;

    // Unknown case slug: send the visitor to the projects section instead of
    // rendering the project list as if it were a standalone page.
    if (slug && !this.selectedProject) {
      inject(Router).navigate(['/'], { fragment: 'projects', replaceUrl: true });
    }
  }
}
