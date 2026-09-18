import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  protected readonly year = new Date().getFullYear();

  private readonly router = inject(Router);

  protected onBrandClick(event: Event): void {
    event.preventDefault();

    if (this.router.url.startsWith('/projects')) {
      this.router.navigateByUrl('/').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
