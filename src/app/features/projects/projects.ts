import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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

  constructor(
    private readonly route: ActivatedRoute
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.selectedProject = slug
      ? PROJECT_CASES.find(project => project.slug === slug)
      : undefined;
  }
}
