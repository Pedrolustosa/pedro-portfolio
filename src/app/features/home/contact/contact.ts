import { Component } from '@angular/core';

import { CONTACT_LINKS } from '../../../core/data/contact.data';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-contact',
  imports: [ScrollRevealDirective, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  protected readonly contactLinks = CONTACT_LINKS;

}
