import { L } from '../i18n/locale';
import { Education } from '../models/education.model';

export const EDUCATION: Education[] = [
  {
    title: L(
      'Pós-graduação Lato Sensu em Inteligência Artificial',
      'Postgraduate Specialization in Artificial Intelligence'
    ),
    institution: 'Universidade de Pernambuco',
    location: L('Recife, Pernambuco', 'Recife, Pernambuco'),
    start: L('Abril de 2025', 'April 2025'),
    end: L('Maio de 2026', 'May 2026'),
    type: L('Pós-graduação', 'Postgraduate')
  },
  {
    title: L(
      'Pós-graduação Lato Sensu em Ciência de Dados e Analytics',
      'Postgraduate Specialization in Data Science and Analytics'
    ),
    institution: 'Universidade de Pernambuco',
    location: L('Recife, Pernambuco', 'Recife, Pernambuco'),
    start: L('Abril de 2024', 'April 2024'),
    end: L('Junho de 2025', 'June 2025'),
    type: L('Pós-graduação', 'Postgraduate')
  },
  {
    title: L(
      'Graduação em Sistemas de Informação',
      "Bachelor's Degree in Information Systems"
    ),
    institution: 'UNINASSAU',
    location: L('Olinda, Pernambuco', 'Olinda, Pernambuco'),
    start: L('Março de 2019', 'March 2019'),
    end: L('Agosto de 2023', 'August 2023'),
    type: L('Graduação', "Bachelor's")
  },
  {
    title: L(
      'Técnico em Manutenção e Suporte em Informática',
      'Technical Degree in IT Maintenance and Support'
    ),
    institution: 'Escola Técnica Estadual Professor Agamenon Magalhães',
    location: L('Recife, Pernambuco', 'Recife, Pernambuco'),
    start: L('Setembro de 2017', 'September 2017'),
    end: L('Dezembro de 2019', 'December 2019'),
    type: L('Técnico', 'Technical')
  }
];
