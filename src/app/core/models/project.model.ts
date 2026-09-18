export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
}
