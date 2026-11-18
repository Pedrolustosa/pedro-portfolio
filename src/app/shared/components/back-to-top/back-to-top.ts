import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';

import { Icon } from '../../icon/icon';
import { TranslatePipe } from '../../pipes/translate.pipe';

/** Scroll distance (px) after which the button appears. */
const SHOW_AFTER_PX = 600;

@Component({
  selector: 'app-back-to-top',
  imports: [Icon, TranslatePipe],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css'
})
export class BackToTop {
  protected readonly isVisible = signal(false);

  private readonly document = inject(DOCUMENT);
  private scrollFrame?: number;

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    if (this.scrollFrame !== undefined) {
      return;
    }

    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = undefined;
      this.isVisible.set(window.scrollY > SHOW_AFTER_PX);
    });
  }

  protected scrollToTop(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });

    // The button hides itself, so hand keyboard focus back to the page start.
    this.document
      .getElementById('main-content')
      ?.focus({ preventScroll: true });
  }
}
