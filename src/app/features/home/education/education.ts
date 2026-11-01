import { Component } from '@angular/core';

import { EDUCATION } from '../../../core/data/education.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { CarouselSlideDirective } from '../../../shared/components/carousel/carousel-slide.directive';
import {
  LocalizePipe,
  TranslatePipe
} from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-education',
  imports: [
    ScrollRevealDirective,
    Carousel,
    CarouselSlideDirective,
    TranslatePipe,
    LocalizePipe
  ],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

  protected readonly education = EDUCATION;

}
