import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChild,
  computed,
  inject,
  input,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CarouselSlideDirective } from './carousel-slide.directive';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-carousel',
  imports: [Icon],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  host: {
    '[class.is-vertical]': 'isVertical()',
    '[style.--carousel-duration]': 'durationMs() + "ms"'
  }
})
export class Carousel implements AfterContentInit, AfterViewInit, OnDestroy {
  readonly autoplay = input(true);
  readonly intervalMs = input(7500);
  readonly durationMs = input(900);
  readonly ariaLabel = input('Carrossel');
  /** horizontal | vertical */
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  /**
   * Autoplay direction.
   * forward = next (direita / baixo)
   * reverse = prev (esquerda / cima) — útil para trajetória de carreira subindo
   */
  readonly autoplayDirection = input<'forward' | 'reverse'>('forward');
  /** Slides visíveis: mobile / tablet / desktop */
  readonly perView = input<[number, number, number]>([1, 2, 3]);
  readonly gapPx = input(16);

  @ViewChild('viewport', { static: true })
  private readonly viewportRef!: ElementRef<HTMLElement>;

  @ContentChildren(CarouselSlideDirective, { descendants: true })
  private readonly slides!: QueryList<CarouselSlideDirective>;

  protected readonly activeIndex = signal(0);
  protected readonly slideCount = signal(0);
  protected readonly itemsPerView = signal(1);
  protected readonly isPaused = signal(false);
  protected readonly slideSizePx = signal(0);

  protected readonly isVertical = computed(() => this.orientation() === 'vertical');

  protected readonly maxIndex = computed(() =>
    Math.max(0, this.slideCount() - this.itemsPerView())
  );

  protected readonly showControls = computed(() => this.maxIndex() > 0);

  protected readonly dots = computed(() => {
    const total = this.maxIndex() + 1;
    return Array.from({ length: total }, (_, index) => index);
  });

  protected readonly trackTransform = computed(() => {
    const offset = this.activeIndex() * (this.slideSizePx() + this.gapPx());
    return this.isVertical()
      ? `translateY(-${offset}px)`
      : `translateX(-${offset}px)`;
  });

  protected readonly prevLabel = computed(() =>
    this.isVertical() ? 'Experiência anterior' : 'Slide anterior'
  );

  protected readonly nextLabel = computed(() =>
    this.isVertical() ? 'Próxima experiência' : 'Próximo slide'
  );

  private readonly destroyRef = inject(DestroyRef);
  private timerId?: ReturnType<typeof setInterval>;
  private resizeObserver?: ResizeObserver;

  ngAfterContentInit(): void {
    this.updateSlideCount();

    this.slides.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.updateSlideCount();
      this.layout();
      this.restartAutoplay();
    });
  }

  ngAfterViewInit(): void {
    this.layout();

    this.resizeObserver = new ResizeObserver(() => this.layout());
    this.resizeObserver.observe(this.viewportRef.nativeElement);

    this.restartAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.resizeObserver?.disconnect();
  }

  @HostListener('document:visibilitychange')
  protected onVisibilityChange(): void {
    if (document.hidden) {
      this.stopAutoplay();
    } else {
      this.restartAutoplay();
    }
  }

  protected pause(): void {
    this.isPaused.set(true);
    this.stopAutoplay();
  }

  protected resume(): void {
    this.isPaused.set(false);
    this.restartAutoplay();
  }

  protected prev(): void {
    const next = this.activeIndex() <= 0 ? this.maxIndex() : this.activeIndex() - 1;
    this.goTo(next);
  }

  protected next(): void {
    const next = this.activeIndex() >= this.maxIndex() ? 0 : this.activeIndex() + 1;
    this.goTo(next);
  }

  protected goTo(index: number): void {
    this.activeIndex.set(Math.min(Math.max(0, index), this.maxIndex()));
    this.restartAutoplay();
  }

  private updateSlideCount(): void {
    this.slideCount.set(this.slides?.length ?? 0);
  }

  private layout(): void {
    const viewport = this.viewportRef.nativeElement;
    const measure = this.isVertical() ? viewport.clientHeight : viewport.clientWidth;

    if (measure <= 0) {
      return;
    }

    const width = viewport.clientWidth;
    const [mobile, tablet, desktop] = this.perView();
    let perView = mobile;
    if (width >= 1024) {
      perView = desktop;
    } else if (width >= 768) {
      perView = tablet;
    }

    perView = Math.min(perView, Math.max(1, this.slideCount() || 1));

    const gap = this.gapPx();
    const slideSize = (measure - gap * (perView - 1)) / perView;

    this.itemsPerView.set(perView);
    this.slideSizePx.set(slideSize);
    this.clampIndex();

    this.slides?.forEach(slide => {
      const el = slide.element;

      if (this.isVertical()) {
        el.style.flex = `0 0 ${slideSize}px`;
        el.style.height = `${slideSize}px`;
        el.style.minHeight = `${slideSize}px`;
        el.style.maxHeight = `${slideSize}px`;
        el.style.width = '100%';
        el.style.minWidth = '100%';
        el.style.maxWidth = '100%';
      } else {
        el.style.flex = `0 0 ${slideSize}px`;
        el.style.width = `${slideSize}px`;
        el.style.minWidth = `${slideSize}px`;
        el.style.maxWidth = `${slideSize}px`;
        el.style.height = '';
        el.style.minHeight = '';
        el.style.maxHeight = '';
      }
    });
  }

  private clampIndex(): void {
    if (this.activeIndex() > this.maxIndex()) {
      this.activeIndex.set(this.maxIndex());
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();

    if (
      !this.autoplay() ||
      this.isPaused() ||
      !this.showControls() ||
      this.prefersReducedMotion()
    ) {
      return;
    }

    this.timerId = setInterval(() => {
      if (this.autoplayDirection() === 'reverse') {
        this.prev();
      } else {
        this.next();
      }
    }, this.intervalMs());
  }

  private stopAutoplay(): void {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
