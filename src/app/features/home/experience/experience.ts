import { Component } from '@angular/core';

import { EXPERIENCES } from '../../../core/data/experience.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  protected readonly experiences = EXPERIENCES;

}
