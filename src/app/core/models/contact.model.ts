import { LocalizedString } from '../i18n/locale';

export interface ContactLink {
  label: LocalizedString | string;
  value: LocalizedString | string;
  url: string;
  icon: 'email' | 'linkedin' | 'github' | 'download' | 'coffee';
  external?: boolean;
  download?: boolean;
}
