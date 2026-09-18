import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PROJECTS } from '../../core/data/projects.data';
import { PROJECT_CASES } from '../../core/data/project-cases.data';
import { ProjectCase } from '../../core/models/project-case.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ScrollRevealDirective],
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
