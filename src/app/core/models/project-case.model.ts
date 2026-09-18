export interface ProjectCase {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;

  problem: string;
  solution: string;

  technologies: string[];

  architecture: string[];

  decisions: {
    title: string;
    description: string;
  }[];

  status: string;

  githubUrl?: string;
  demoUrl?: string;
}
