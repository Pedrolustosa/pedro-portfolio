import { L } from '../i18n/locale';
import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    company: 'Stefanini Brasil',
    role: L(
      'Analista Desenvolvedor Pleno',
      'Mid-level Software Developer'
    ),
    start: L('Junho de 2025', 'June 2025'),
    end: L('Atual', 'Present'),
    description: L(
      'Desenvolvimento e arquitetura de sistemas utilizando .NET, Node.js, NestJS e Python, aplicando DDD, CQRS, Clean Architecture, SOLID e Design Patterns. Atuação com AWS Bedrock, S3, React, Next.js, React Native, RabbitMQ, cache, APIs REST, JWT, Identity, Serilog e TDD.',
      'Building and architecting systems with .NET, Node.js, NestJS, and Python, applying DDD, CQRS, Clean Architecture, SOLID, and Design Patterns. Working with AWS Bedrock, S3, React, Next.js, React Native, RabbitMQ, caching, REST APIs, JWT, Identity, Serilog, and TDD.'
    ),
    technologies: [
      '.NET',
      'Node.js',
      'NestJS',
      'Python',
      'React',
      'Next.js',
      'AWS',
      'RabbitMQ',
      'xUnit'
    ]
  },
  {
    company: 'Fábrica de Software Brasil',
    role: L(
      'Analista Desenvolvedor .NET - Pleno',
      'Mid-level .NET Developer'
    ),
    start: L('Dezembro de 2024', 'December 2024'),
    end: L('Maio de 2025', 'May 2025'),
    description: L(
      'Desenvolvimento e manutenção de aplicações ASP.NET MVC, implementação de melhorias e correções, desenvolvimento de interfaces, modelagem de banco de dados e otimização de queries, procedures e triggers.',
      'Developing and maintaining ASP.NET MVC applications, implementing improvements and fixes, building interfaces, modeling databases, and optimizing queries, procedures, and triggers.'
    ),
    technologies: [
      '.NET',
      'ASP.NET MVC',
      'Entity Framework',
      'Bootstrap',
      'SQL',
      'JIRA'
    ]
  },
  {
    company: 'IBrowser Consultoria e Informática',
    role: L(
      'Analista Desenvolvedor .NET - Pleno',
      'Mid-level .NET Developer'
    ),
    start: L('Junho de 2024', 'June 2024'),
    end: L('Dezembro de 2024', 'December 2024'),
    description: L(
      'Desenvolvimento de novas funcionalidades e sistemas para o Governo de Pernambuco, utilizando .NET, React, Angular e Node.js. Atuação com mensageria, automações, PostgreSQL, GitLab e otimização de dados.',
      'Building new features and systems for the Government of Pernambuco using .NET, React, Angular, and Node.js. Working with messaging, automations, PostgreSQL, GitLab, and data optimization.'
    ),
    technologies: [
      '.NET',
      'React',
      'Angular',
      'Node.js',
      'RabbitMQ',
      'n8n',
      'PostgreSQL',
      'GitLab'
    ]
  },
  {
    company: 'Reply',
    role: L(
      'Analista Desenvolvedor .NET - Pleno',
      'Mid-level .NET Developer'
    ),
    start: L('Maio de 2023', 'May 2023'),
    end: L('Junho de 2024', 'June 2024'),
    description: L(
      'Levantamento e análise de requisitos, definição de especificações e desenvolvimento de soluções utilizando .NET, React e React Native. Atuação com Clean Architecture, cache, MongoDB e PostgreSQL em sistemas web escaláveis.',
      'Gathering and analyzing requirements, defining specifications, and delivering solutions with .NET, React, and React Native. Working with Clean Architecture, caching, MongoDB, and PostgreSQL in scalable web systems.'
    ),
    technologies: [
      '.NET',
      'React',
      'React Native',
      'Clean Architecture',
      'MongoDB',
      'PostgreSQL'
    ]
  },
  {
    company: 'Avanade',
    role: L(
      'Analista Desenvolvedor Full-Stack',
      'Full-Stack Developer'
    ),
    start: L('Abril de 2021', 'April 2021'),
    end: L('Maio de 2023', 'May 2023'),
    description: L(
      'Desenvolvimento e evolução de sistemas utilizando .NET, Azure e Azure DevOps, com atuação frontend em AngularJS e backend em .NET/C#. Experiência com SQL Server, Oracle e MongoDB.',
      'Building and evolving systems with .NET, Azure, and Azure DevOps, with frontend work in AngularJS and backend in .NET/C#. Experience with SQL Server, Oracle, and MongoDB.'
    ),
    technologies: [
      '.NET',
      'C#',
      'AngularJS',
      'Azure',
      'Azure DevOps',
      'SQL Server',
      'Oracle',
      'MongoDB'
    ]
  },
  {
    company: 'Rueda & Rueda Advogados',
    role: L(
      'Estagiário de Desenvolvimento C# .NET Core',
      'C# .NET Core Development Intern'
    ),
    start: L('Setembro de 2020', 'September 2020'),
    end: L('Dezembro de 2021', 'December 2021'),
    description: L(
      'Desenvolvimento e manutenção de sistemas jurídicos voltados à gestão de processos. Atuação com automação RPA utilizando Automation Anywhere e Power Automate, além de Azure e Cosmos DB.',
      'Developing and maintaining legal systems focused on case management. Working with RPA automation using Automation Anywhere and Power Automate, plus Azure and Cosmos DB.'
    ),
    technologies: [
      '.NET Core',
      'MVC',
      'Bootstrap',
      'Automation Anywhere',
      'Power Automate',
      'Azure',
      'Cosmos DB'
    ]
  },
  {
    company: 'Central IT',
    role: L(
      'Estagiário DBA / Governança de TI',
      'DBA / IT Governance Intern'
    ),
    start: L('Fevereiro de 2020', 'February 2020'),
    end: L('Setembro de 2020', 'September 2020'),
    description: L(
      'Atuação em Governança de TI, planejamento e padronização de processos, políticas, análise de riscos e gestão de recursos. Posteriormente, atuação com administração, modelagem e monitoramento de bancos relacionais e não relacionais.',
      'Working in IT Governance — process planning and standardization, policies, risk analysis, and resource management. Later focused on administering, modeling, and monitoring relational and non-relational databases.'
    ),
    technologies: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'NoSQL',
      'SQL',
      'PHP',
      'Laravel',
      'ITIL'
    ]
  },
  {
    company: 'Secretaria da Fazenda de Pernambuco',
    role: L('Estagiário de TI', 'IT Intern'),
    start: L('Maio de 2019', 'May 2019'),
    end: L('Janeiro de 2020', 'January 2020'),
    description: L(
      'Atuação com suporte e manutenção de computadores, preparação de ambientes, configuração de sistemas operacionais e atendimento a usuários.',
      'Providing computer support and maintenance, preparing environments, configuring operating systems, and assisting users.'
    ),
    technologies: [
      'Hardware',
      'Windows',
      'Suporte',
      'Manutenção'
    ]
  }
];
