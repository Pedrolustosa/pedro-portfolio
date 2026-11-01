import { Component } from '@angular/core';

import { L, LocalizedString } from '../../../core/i18n/locale';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { CarouselSlideDirective } from '../../../shared/components/carousel/carousel-slide.directive';
import {
  LocalizePipe,
  TranslatePipe
} from '../../../shared/pipes/translate.pipe';

interface SkillGroup {
  title: string;
  description: LocalizedString;
  technologies: string[];
}

@Component({
  selector: 'app-skills',
  imports: [
    ScrollRevealDirective,
    Carousel,
    CarouselSlideDirective,
    TranslatePipe,
    LocalizePipe
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      description: L(
        'Interfaces web e aplicações mobile.',
        'Web interfaces and mobile applications.'
      ),
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
      description: L(
        'APIs, serviços e regras de negócio.',
        'APIs, services, and business rules.'
      ),
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
      description: L(
        'Práticas para sistemas sustentáveis.',
        'Practices for sustainable systems.'
      ),
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
      description: L(
        'Serviços e aplicações em nuvem.',
        'Cloud services and applications.'
      ),
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
      description: L(
        'Persistência e modelagem de dados.',
        'Data persistence and modeling.'
      ),
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
      description: L(
        'Integração, observabilidade e qualidade.',
        'Integration, observability, and quality.'
      ),
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
