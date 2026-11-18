import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Icon } from '../../icon/icon';
import { goHomeTop } from '../../utils/go-home';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [Icon, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  protected readonly year = new Date().getFullYear();

  private readonly router = inject(Router);

  protected onBrandClick(event: Event): void {
    event.preventDefault();
    goHomeTop(this.router);
  }

}
