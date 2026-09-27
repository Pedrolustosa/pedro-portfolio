import { Component } from '@angular/core';

import { CERTIFICATIONS } from '../../../core/data/certifications.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { CarouselSlideDirective } from '../../../shared/components/carousel/carousel-slide.directive';

@Component({
  selector: 'app-certifications',
  imports: [ScrollRevealDirective, Carousel, CarouselSlideDirective],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {

  protected readonly certifications = CERTIFICATIONS;

  protected readonly categories = [
    'Todas',
    'Microsoft',
    'Cloud & Security',
    'DevOps',
    'Agile',
    'Professional',
    'Security & Compliance'
  ];

  protected selectedCategory = 'Todas';

  /** Force carousel remount when filter changes */
  protected carouselKey = 0;

  protected get filteredCertifications() {
    if (this.selectedCategory === 'Todas') {
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
