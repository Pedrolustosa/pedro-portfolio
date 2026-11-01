import { LocalizedString } from '../i18n/locale';

export interface ProjectCase {
  slug: string;
  title: string;
  category: string;
  summary: LocalizedString;
  description: LocalizedString;

  problem: LocalizedString;
  solution: LocalizedString;

  technologies: string[];

  architecture: LocalizedString[];

  decisions: {
    title: LocalizedString;
    description: LocalizedString;
  }[];

  status: LocalizedString;

  githubUrl?: string;
  demoUrl?: string;
}
