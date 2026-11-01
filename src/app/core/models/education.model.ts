import { LocalizedString } from '../i18n/locale';

export interface Education {
  title: LocalizedString;
  institution: string;
  location: LocalizedString;
  start: LocalizedString;
  end: LocalizedString;
  type: LocalizedString;
}
