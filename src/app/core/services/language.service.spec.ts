import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { L } from '../i18n/locale';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
  });

  afterEach(() => localStorage.clear());

  it('restores the stored locale', () => {
    localStorage.setItem('pedro-portfolio-locale', 'en');

    const service = TestBed.inject(LanguageService);

    expect(service.locale()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('toggles between pt and en and persists the choice', () => {
    localStorage.setItem('pedro-portfolio-locale', 'pt');
    const service = TestBed.inject(LanguageService);

    service.toggle();

    expect(service.locale()).toBe('en');
    expect(localStorage.getItem('pedro-portfolio-locale')).toBe('en');
    expect(document.documentElement.lang).toBe('en');

    service.toggle();

    expect(service.locale()).toBe('pt');
    expect(document.documentElement.lang).toBe('pt-BR');
  });

  it('translates keys and localized strings for the active locale', () => {
    localStorage.setItem('pedro-portfolio-locale', 'pt');
    const service = TestBed.inject(LanguageService);

    expect(service.t('nav.home')).toBe('Início');
    expect(service.localize(L('Olá', 'Hello'))).toBe('Olá');

    service.setLocale('en');

    expect(service.t('nav.home')).toBe('Home');
    expect(service.localize(L('Olá', 'Hello'))).toBe('Hello');
  });
});
