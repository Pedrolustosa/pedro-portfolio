import { ContactLink } from '../models/contact.model';

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
  }
];
