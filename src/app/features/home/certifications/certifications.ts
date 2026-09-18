import { Component } from '@angular/core';

import { CERTIFICATIONS } from '../../../core/data/certifications.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-certifications',
  imports: [ScrollRevealDirective],
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
  }

}
