import { LocalizedString } from '../i18n/locale';

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: LocalizedString;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
}
