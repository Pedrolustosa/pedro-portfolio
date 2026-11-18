import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    // Browser-only: prerendered HTML keeps content visible for crawlers.
    afterNextRender(() => this.observe());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private observe(): void {
    const element = this.elementRef.nativeElement;

    element.classList.add('scroll-reveal');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          this.observer?.unobserve(element);
        }
      },
      {
        threshold: 0.12
      }
    );

    this.observer.observe(element);
  }
}
