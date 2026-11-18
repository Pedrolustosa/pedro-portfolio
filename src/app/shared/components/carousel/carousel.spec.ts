import { Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel } from './carousel';
import { CarouselSlideDirective } from './carousel-slide.directive';

@Component({
  imports: [Carousel, CarouselSlideDirective],
  template: `
    <div style="width: 900px">
      <app-carousel [autoplay]="false" [perView]="[2, 2, 2]">
        @for (item of items; track item) {
          <article appCarouselSlide>{{ item }}</article>
        }
      </app-carousel>
    </div>
  `
})
class Host {
  items = [1, 2, 3, 4, 5];
}

/** Exposes the protected carousel API to the tests. */
type CarouselApi = {
  activeIndex(): number;
  maxIndex(): number;
  next(): void;
  prev(): void;
  goTo(index: number): void;
};

describe('Carousel', () => {
  let fixture: ComponentFixture<Host>;
  let carousel: CarouselApi;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Host],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    fixture.detectChanges();

    carousel = fixture.debugElement.query(
      el => el.componentInstance instanceof Carousel
    ).componentInstance as unknown as CarouselApi;
  });

  it('stops at the last position where a full page of slides is visible', () => {
    expect(carousel.maxIndex()).toBe(3);
  });

  it('wraps around when moving past either end', () => {
    carousel.prev();
    expect(carousel.activeIndex()).toBe(3);

    carousel.next();
    expect(carousel.activeIndex()).toBe(0);
  });

  it('clamps goTo to the valid range', () => {
    carousel.goTo(99);
    expect(carousel.activeIndex()).toBe(3);

    carousel.goTo(-5);
    expect(carousel.activeIndex()).toBe(0);
  });

  it('renders one dot per reachable position', () => {
    fixture.detectChanges();
    const dots = fixture.nativeElement.querySelectorAll('.carousel__dot');
    expect(dots.length).toBe(4);
  });
});
