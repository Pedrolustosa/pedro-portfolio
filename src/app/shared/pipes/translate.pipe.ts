import { Pipe, PipeTransform, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { TranslationKey } from '../../core/i18n/translations';
import { LocalizedString } from '../../core/i18n/locale';

@Pipe({
  name: 't',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private readonly language = inject(LanguageService);

  transform(key: TranslationKey): string {
    this.language.locale();
    return this.language.t(key);
  }
}

@Pipe({
  name: 'localize',
  pure: false
})
export class LocalizePipe implements PipeTransform {
  private readonly language = inject(LanguageService);

  transform(value: LocalizedString | string | undefined | null): string {
    this.language.locale();

    if (value == null) {
      return '';
    }

    if (typeof value === 'string') {
      return value;
    }

    return this.language.localize(value);
  }
}
