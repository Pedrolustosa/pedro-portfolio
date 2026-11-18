import {
  Component,
  HostListener,
  afterNextRender,
  inject,
  signal
} from '@angular/core';

import {
  NavigationEnd,
  Router
} from '@angular/router';

import { filter } from 'rxjs';

import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';
import { Icon } from '../../icon/icon';
import { goHomeTop } from '../../utils/go-home';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  imports: [Icon, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);

  protected readonly activeSection = signal('home');

  private readonly router = inject(Router);

  protected readonly themeService = inject(ThemeService);
  protected readonly language = inject(LanguageService);

  constructor() {
    this.setupRouterListener();

    afterNextRender(() => {
      this.updateActiveSection();
    });
  }

  protected onBrandClick(event: Event): void {
    event.preventDefault();
    this.closeMenu();
    goHomeTop(this.router);
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

  protected toggleTheme(): void {
    this.themeService.toggle();
  }

  protected toggleLanguage(): void {
    this.language.toggle();
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
    if (typeof document === 'undefined') {
      return;
    }

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
