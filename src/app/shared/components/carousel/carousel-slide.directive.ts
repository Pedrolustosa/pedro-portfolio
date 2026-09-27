import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCarouselSlide]',
  host: {
    class: 'carousel-slide'
  }
})
export class CarouselSlideDirective {
  readonly element = inject(ElementRef<HTMLElement>).nativeElement;
}
