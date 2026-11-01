import { L } from '../i18n/locale';
import { Certification } from '../models/certification.model';

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/microsoft-sci-fundamentals.jpg',
    date: L('24 de julho de 2022', 'July 24, 2022'),
    credentialId: 'I360-6437'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/microsoft-azure-fundamentals.png',
    date: L('26 de junho de 2022', 'June 26, 2022'),
    credentialId: 'I326-6838'
  },
  {
    title: 'MTA: Security Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-security-fundamentals.jpg',
    date: L('22 de maio de 2022', 'May 22, 2022'),
    credentialId: 'I277-2564'
  },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/microsoft-azure-data-fundamentals.png',
    date: L('01 de maio de 2022', 'May 1, 2022'),
    credentialId: 'I248-6726'
  },
  {
    title: 'MTA: Mobility and Device Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-mobility-device-fundamentals.jpg',
    date: L('03 de abril de 2022', 'April 3, 2022'),
    credentialId: '1214-0902'
  },
  {
    title: 'MTA: Software Development Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-software-development-fundamentals.jpg',
    date: L('13 de março de 2022', 'March 13, 2022'),
    credentialId: 'I180-2734'
  },
  {
    title: 'MTA: Database Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-database-fundamentals.jpg',
    date: L('05 de março de 2022', 'March 5, 2022'),
    credentialId: 'I168-7012'
  },
  {
    title: 'MTA: Introduction to Programming Using JavaScript',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-javascript.jpg',
    date: L('12 de fevereiro de 2022', 'February 12, 2022'),
    credentialId: 'I141-0593'
  },
  {
    title: 'MTA: HTML5 Application Development Fundamentals',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-html5-application-development.jpg',
    date: L('08 de janeiro de 2022', 'January 8, 2022'),
    credentialId: 'I103-4664'
  },
  {
    title: 'MTA: Introduction to Programming Using HTML and CSS',
    issuer: 'Microsoft',
    category: 'Microsoft',
    image: '/certifications/mta-html-css.png',
    date: L('11 de setembro de 2021', 'September 11, 2021'),
    credentialId: 'H963-1258'
  },
  {
    title: 'Kanban Essentials Professional Certificate',
    issuer: 'CertiProf',
    category: 'Agile',
    image: '/certifications/certiprof-kanban-essentials.jpg',
    date: L('10 de outubro de 2021', 'October 10, 2021'),
    credentialId: '70556182'
  },
  {
    title: L(
      'Cyber Security e Cloud Computing',
      'Cyber Security and Cloud Computing'
    ),
    issuer: 'Instituto de Gestão e Tecnologia da Informação',
    category: 'Cloud & Security'
  },
  {
    title: 'Remote Work and Virtual Collaboration Professional Certificate',
    issuer: 'CertiProf',
    category: 'Professional'
  },
  {
    title: 'DevOps Essentials Professional Certificate',
    issuer: 'CertiProf',
    category: 'DevOps'
  },
  {
    title: 'Scrum Foundation Professional Certificate',
    issuer: 'CertiProf',
    category: 'Agile'
  },
  {
    title: L(
      'Fundamentos na Lei Geral de Proteção de Dados - LGPDF',
      'Fundamentals of the Brazilian General Data Protection Law - LGPDF'
    ),
    issuer: 'CertiProf',
    category: 'Security & Compliance'
  },
  {
    title: L(
      'Aprendizagem Profissional Comercial em Serviços Administrativos',
      'Professional Apprenticeship in Administrative Services'
    ),
    issuer: 'Senac Pernambuco',
    category: 'Professional'
  },
  {
    title: 'Scrum Fast-Track',
    issuer: 'TIExames',
    category: 'Agile'
  }
];
