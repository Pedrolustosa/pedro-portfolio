import {
  Component,
  HostListener,
  inject,
  signal
} from '@angular/core';

import {
  NavigationEnd,
  Router
} from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);

  protected readonly activeSection = signal('home');

  private readonly router = inject(Router);

  constructor() {
    this.setupRouterListener();

    setTimeout(() => {
      this.updateActiveSection();
    });
  }

  protected onBrandClick(event: Event): void {
    event.preventDefault();
    this.closeMenu();

    if (this.router.url.startsWith('/projects')) {
      this.router.navigateByUrl('/').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateActiveSection();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update(isOpen => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  private setupRouterListener(): void {
    this.router.events
      .pipe(
        filter(
          event => event instanceof NavigationEnd
        )
      )
      .subscribe(event => {
        const navigation = event as NavigationEnd;

        if (
          navigation.urlAfterRedirects.startsWith(
            '/projects/'
          )
        ) {
          this.activeSection.set('projects');
          return;
        }

        if (
          navigation.urlAfterRedirects === '/'
        ) {
          setTimeout(() => {
            this.updateActiveSection();
          });
        }
      });
  }

  private updateActiveSection(): void {
    const sections =
      Array.from(
        document.querySelectorAll<HTMLElement>(
          'section[id]'
        )
      );

    if (!sections.length) {
      return;
    }

    const navbarOffset = 140;

    let currentSection = 'home';

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= navbarOffset) {
        currentSection = section.id;
      }
    }

    this.activeSection.set(currentSection);
  }
}
