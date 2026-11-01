import { Component } from '@angular/core';

import { CERTIFICATIONS } from '../../../core/data/certifications.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { CarouselSlideDirective } from '../../../shared/components/carousel/carousel-slide.directive';
import {
  LocalizePipe,
  TranslatePipe
} from '../../../shared/pipes/translate.pipe';

const ALL_CATEGORY = 'all';

@Component({
  selector: 'app-certifications',
  imports: [
    ScrollRevealDirective,
    Carousel,
    CarouselSlideDirective,
    TranslatePipe,
    LocalizePipe
  ],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  protected readonly certifications = CERTIFICATIONS;

  protected readonly categories = [
    ALL_CATEGORY,
    'Microsoft',
    'Cloud & Security',
    'DevOps',
    'Agile',
    'Professional',
    'Security & Compliance'
  ];

  protected selectedCategory = ALL_CATEGORY;

  /** Force carousel remount when filter changes */
  protected carouselKey = 0;

  protected get filteredCertifications() {
    if (this.selectedCategory === ALL_CATEGORY) {
      return this.certifications;
    }

    return this.certifications.filter(
      certification =>
        certification.category === this.selectedCategory
    );
  }

  protected selectCategory(category: string): void {
    this.selectedCategory = category;
    this.carouselKey += 1;
  }

}
