import { LocalizedString } from '../i18n/locale';

export interface Experience {
  company: string;
  role: LocalizedString;
  start: LocalizedString;
  end: LocalizedString;
  description: LocalizedString;
  technologies: string[];
}
