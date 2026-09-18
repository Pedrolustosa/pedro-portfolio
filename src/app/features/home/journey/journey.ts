import { Component } from '@angular/core';

import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-journey',
  imports: [ScrollRevealDirective],
  templateUrl: './journey.html',
  styleUrl: './journey.css'
})
export class Journey {

  protected readonly steps: JourneyStep[] = [
    {
      year: '2019',
      title: 'Primeiros passos em TI',
      description:
        'Início da trajetória profissional com suporte e manutenção de infraestrutura de TI.'
    },
    {
      year: '2020',
      title: 'Governança & Dados',
      description:
        'Experiência com Governança de TI e posteriormente atuação em banco de dados, modelagem e administração de ambientes.'
    },
    {
      year: '2021',
      title: 'Desenvolvimento',
      description:
        'Evolução para desenvolvimento de sistemas utilizando .NET, C# e tecnologias frontend.'
    },
    {
      year: '2023',
      title: 'Full Stack',
      description:
        'Atuação em aplicações web e mobile utilizando diferentes tecnologias frontend e backend.'
    },
    {
      year: '2024',
      title: 'Arquitetura & Sistemas',
      description:
        'Ampliação da atuação para arquitetura, mensageria, sistemas escaláveis e diferentes ambientes de desenvolvimento.'
    },
    {
      year: '2025',
      title: 'Cloud & AI',
      description:
        'Atuação com cloud, AWS Bedrock e tecnologias modernas, acompanhada pela especialização acadêmica em Inteligência Artificial.'
    }
  ];

}
