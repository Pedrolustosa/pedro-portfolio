import { L } from '../i18n/locale';
import { ContactLink } from '../models/contact.model';

export const RESUME_URL = L(
  '/Curriculo_Pedro_Lustosa.pdf',
  '/Resume_Pedro_Lustosa.pdf'
);

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'E-mail',
    value: 'pedroeternalss@gmail.com',
    url: 'mailto:pedroeternalss@gmail.com',
    icon: 'email'
  },
  {
    label: 'LinkedIn',
    value: 'Pedro Henrique Lustosa e Silva',
    url: 'https://www.linkedin.com/in/pedrolustosadev/',
    icon: 'linkedin',
    external: true
  },
  {
    label: 'GitHub',
    value: 'Pedrolustosa',
    url: 'https://github.com/Pedrolustosa',
    icon: 'github',
    external: true
  },
  {
    label: L('Currículo', 'Resume'),
    value: L('Baixar PDF', 'Download PDF'),
    url: RESUME_URL,
    icon: 'download',
    download: true
  }
];
