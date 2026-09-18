import { Component } from '@angular/core';

import { EDUCATION } from '../../../core/data/education.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  imports: [ScrollRevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

  protected readonly education = EDUCATION;

}
