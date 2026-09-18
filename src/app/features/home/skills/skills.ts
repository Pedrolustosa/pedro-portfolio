import { Component } from '@angular/core';

import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface SkillGroup {
  title: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      description: 'Interfaces web e aplicações mobile.',
      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'React',
        'React Native',
        'Next.js'
      ]
    },
    {
      title: 'Backend',
      description: 'APIs, serviços e regras de negócio.',
      technologies: [
        '.NET',
        'C#',
        'Node.js',
        'NestJS',
        'Python',
        'REST APIs'
      ]
    },
    {
      title: 'Architecture',
      description: 'Práticas para sistemas sustentáveis.',
      technologies: [
        'Clean Architecture',
        'DDD',
        'CQRS',
        'SOLID',
        'Design Patterns'
      ]
    },
    {
      title: 'Cloud',
      description: 'Serviços e aplicações em nuvem.',
      technologies: [
        'AWS',
        'Azure',
        'S3',
        'AWS Bedrock',
        'Azure DevOps'
      ]
    },
    {
      title: 'Data',
      description: 'Persistência e modelagem de dados.',
      technologies: [
        'SQL Server',
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'MongoDB',
        'Cosmos DB'
      ]
    },
    {
      title: 'Messaging & Quality',
      description: 'Integração, observabilidade e qualidade.',
      technologies: [
        'RabbitMQ',
        'Serilog',
        'xUnit',
        'TDD',
        'Git',
        'GitLab'
      ]
    }
  ];

}
