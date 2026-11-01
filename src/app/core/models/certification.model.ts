import { LocalizedString } from '../i18n/locale';

export interface Certification {
  title: LocalizedString | string;
  issuer: string;
  category: string;
  image?: string;
  date?: LocalizedString;
  credentialId?: string;
}
