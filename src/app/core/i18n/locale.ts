export type Locale = 'pt' | 'en';

export type LocalizedString = {
  pt: string;
  en: string;
};

export function pick(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export function L(pt: string, en: string): LocalizedString {
  return { pt, en };
}
