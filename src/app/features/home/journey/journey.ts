import { Component } from '@angular/core';

import { L, LocalizedString } from '../../../core/i18n/locale';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import {
  LocalizePipe,
  TranslatePipe
} from '../../../shared/pipes/translate.pipe';

interface JourneyStep {
  year: string;
  title: LocalizedString;
  description: LocalizedString;
}

@Component({
  selector: 'app-journey',
  imports: [ScrollRevealDirective, TranslatePipe, LocalizePipe],
  templateUrl: './journey.html',
  styleUrl: './journey.css'
})
export class Journey {

  protected readonly steps: JourneyStep[] = [
    {
      year: '2019',
      title: L('Primeiros passos em TI', 'First steps in IT'),
      description: L(
        'Início da trajetória profissional com suporte e manutenção de infraestrutura de TI.',
        'Started the professional journey with IT infrastructure support and maintenance.'
      )
    },
    {
      year: '2020',
      title: L('Governança & Dados', 'Governance & Data'),
      description: L(
        'Experiência com Governança de TI e posteriormente atuação em banco de dados, modelagem e administração de ambientes.',
        'Experience with IT Governance, then database work — modeling and administering environments.'
      )
    },
    {
      year: '2021',
      title: L('Desenvolvimento', 'Development'),
      description: L(
        'Evolução para desenvolvimento de sistemas utilizando .NET, C# e tecnologias frontend.',
        'Moved into software development with .NET, C#, and frontend technologies.'
      )
    },
    {
      year: '2023',
      title: L('Full Stack', 'Full Stack'),
      description: L(
        'Atuação em aplicações web e mobile utilizando diferentes tecnologias frontend e backend.',
        'Working on web and mobile applications across different frontend and backend technologies.'
      )
    },
    {
      year: '2024',
      title: L('Arquitetura & Sistemas', 'Architecture & Systems'),
      description: L(
        'Ampliação da atuação para arquitetura, mensageria, sistemas escaláveis e diferentes ambientes de desenvolvimento.',
        'Expanded into architecture, messaging, scalable systems, and varied development environments.'
      )
    },
    {
      year: '2025',
      title: L('IA Generativa', 'Generative AI'),
      description: L(
        'Aplicação de IA generativa em produtos e fluxos reais, com integrações às APIs modernas do momento — OpenAI, Anthropic Claude, Google Gemini, Azure OpenAI e AWS Bedrock — além de especialização acadêmica em Inteligência Artificial.',
        'Applying generative AI in real products and workflows, integrating modern APIs — OpenAI, Anthropic Claude, Google Gemini, Azure OpenAI, and AWS Bedrock — plus academic specialization in Artificial Intelligence.'
      )
    }
  ];

}
