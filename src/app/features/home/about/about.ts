import { Component } from '@angular/core';

import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}
