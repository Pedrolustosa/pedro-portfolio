import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ApplicationRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

import {
  Locale,
  LocalizedString,
  pick
} from '../i18n/locale';
import {
  TRANSLATIONS,
  TranslationKey
} from '../i18n/translations';

const STORAGE_KEY = 'pedro-portfolio-locale';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly appRef = inject(ApplicationRef);

  readonly locale = signal<Locale>(this.readInitialLocale());

  constructor() {
    this.apply(this.locale());
  }

  toggle(): void {
    this.setLocale(this.locale() === 'pt' ? 'en' : 'pt');
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    this.apply(locale);

    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Storage unavailable (private mode, blocked cookies): keep in-memory only.
    }

    // Ensure impure translate/localize pipes refresh under zoneless CD.
    queueMicrotask(() => this.appRef.tick());
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[key][this.locale()];
  }

  localize(value: LocalizedString): string {
    return pick(value, this.locale());
  }

  private apply(locale: Locale): void {
    this.document.documentElement.setAttribute('lang', locale === 'pt' ? 'pt-BR' : 'en');

    this.setMeta('meta[name="description"]', TRANSLATIONS['meta.description'][locale]);
    this.setMeta('meta[property="og:description"]', TRANSLATIONS['meta.ogDescription'][locale]);
    this.setMeta('meta[name="twitter:description"]', TRANSLATIONS['meta.ogDescription'][locale]);
    this.setMeta('meta[property="og:locale"]', locale === 'pt' ? 'pt_BR' : 'en_US');
  }

  private setMeta(selector: string, content: string): void {
    this.document.querySelector(selector)?.setAttribute('content', content);
  }

  private readInitialLocale(): Locale {
    if (!this.isBrowser) {
      return 'pt';
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') {
        return stored;
      }
    } catch {
      // Ignore storage errors and fall back to the browser language.
    }

    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }
}
