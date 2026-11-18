import { Component, computed, signal } from '@angular/core';

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

  protected readonly selectedCategory = signal(ALL_CATEGORY);

  /** Force carousel remount when filter changes */
  protected readonly carouselKey = signal(0);

  protected readonly filteredCertifications = computed(() => {
    const category = this.selectedCategory();

    if (category === ALL_CATEGORY) {
      return this.certifications;
    }

    return this.certifications.filter(
      certification => certification.category === category
    );
  });

  protected selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.carouselKey.update(key => key + 1);
  }

}
