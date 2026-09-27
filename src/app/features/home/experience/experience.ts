import { Component } from '@angular/core';

import { EXPERIENCES } from '../../../core/data/experience.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { CarouselSlideDirective } from '../../../shared/components/carousel/carousel-slide.directive';

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective, Carousel, CarouselSlideDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  /** Ordem cronológica (mais antigo → atual) para a subida profissional. */
  protected readonly experiences = [...EXPERIENCES].reverse();
}
