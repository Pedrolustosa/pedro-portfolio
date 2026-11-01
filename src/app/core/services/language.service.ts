import { ApplicationRef, Injectable, inject, signal } from '@angular/core';

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
  readonly locale = signal<Locale>(this.readInitialLocale());

  private readonly appRef = inject(ApplicationRef);

  constructor() {
    this.apply(this.locale());
  }

  toggle(): void {
    this.setLocale(this.locale() === 'pt' ? 'en' : 'pt');
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    this.apply(locale);
    localStorage.setItem(STORAGE_KEY, locale);
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
    const root = document.documentElement;
    root.setAttribute('lang', locale === 'pt' ? 'pt-BR' : 'en');

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', TRANSLATIONS['meta.description'][locale]);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        TRANSLATIONS['meta.ogDescription'][locale]
      );
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', locale === 'pt' ? 'pt_BR' : 'en_US');
    }

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.setAttribute(
        'content',
        TRANSLATIONS['meta.ogDescription'][locale]
      );
    }
  }

  private readInitialLocale(): Locale {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'pt' || stored === 'en') {
      return stored;
    }

    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }
}
