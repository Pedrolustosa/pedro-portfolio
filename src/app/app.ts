import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ThemeService } from './core/services/theme.service';
import { LanguageService } from './core/services/language.service';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { TranslatePipe } from './shared/pipes/translate.pipe';

/** Must match `scroll-margin-top` on sections in styles.css. */
const SECTION_SCROLL_OFFSET = 100;

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    TranslatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class App {
  /** Ensures theme and locale are applied as soon as the app boots. */
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);

  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);

  constructor() {
    this.viewportScroller.setOffset([0, SECTION_SCROLL_OFFSET]);
  }

  /**
   * `href="#section"` resolves against `<base href="/">`, so outside the home
   * page it would trigger a full reload. Route it through the Router instead.
   */
  protected onDocumentClick(event: MouseEvent): void {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = (event.target as Element | null)?.closest('a[href^="#"]');
    const path = this.router.url.split(/[?#]/)[0];

    if (!link || path === '/') {
      return;
    }

    const id = link.getAttribute('href')!.slice(1);
    event.preventDefault();

    if (document.getElementById(id)) {
      this.viewportScroller.scrollToAnchor(id);
      return;
    }

    this.router.navigate(['/'], { fragment: id });
  }
}
