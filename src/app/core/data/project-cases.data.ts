import { ProjectCase } from '../models/project-case.model';

export const PROJECT_CASES: ProjectCase[] = [
  {
    slug: 'identityhub',
    title: 'IdentityHub',
    category: 'Project',
    summary:
      'Plataforma de Identity and Access Management (IAM) focada em administração segura de usuários e visibilidade operacional.',
    description:
      'IdentityHub cobre o ciclo completo de identidade — cadastro, confirmação de e-mail, recuperação de senha e troca de perfil — combinado com administração de usuários, papéis e permissões. Backend em ASP.NET Core + Identity + EF Core (SQLite) e frontend em Angular standalone com Tailwind.',
    problem:
      'Sistemas corporativos frequentemente carecem de um controle de acesso granular e auditável: permissões soltas, sessões sem expiração real e pouca visibilidade sobre eventos de segurança.',
    solution:
      'Autorização baseada em políticas e permissões nomeadas (ex.: Users.View), sessões versionadas para invalidar tokens quando permissões mudam, e observabilidade via logs de auditoria, alertas de segurança e timeline de atividades.',
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQLite',
      'JWT',
      'Angular 18',
      'Tailwind CSS'
    ],
    architecture: [
      'Backend em camadas (API, Application, Domain, Infrastructure, IoC)',
      'CQRS e serviços de aplicação',
      'JWT com refresh token rotativo em cookie HttpOnly/Secure',
      'Autorização por políticas e permissões dinâmicas',
      'Versionamento de sessão e permissões (sid + permission_version)',
      'Frontend Angular standalone modularizado por features'
    ],
    decisions: [
      {
        title: 'JWT + refresh token rotativo',
        description:
          'Access token de curta duração combinado com refresh token em cookie HttpOnly, Secure e SameSite=Strict, rotacionado a cada renovação.'
      },
      {
        title: 'Autorização por permissões dinâmicas',
        description:
          'Políticas mapeadas para permissões nomeadas, aplicadas tanto no backend quanto nas guards de rota do frontend.'
      },
      {
        title: 'Observabilidade de segurança',
        description:
          'Logs de auditoria, alertas de segurança e linha do tempo de atividades para acompanhar ações sensíveis no sistema.'
      },
      {
        title: 'Rate limiting em endpoints sensíveis',
        description:
          'Limitação de requisições em login, recuperação de senha e reenvio de confirmação para mitigar ataques de força bruta.'
      }
    ],
    status: 'MVP funcional — código aberto no GitHub',
    githubUrl: 'https://github.com/Pedrolustosa/IdentityHub'
  },

  {
    slug: 'signcraft',
    title: 'SignCraft',
    category: 'Project',
    summary:
      'Base full-stack para criação de assinaturas profissionais de e-mail.',
    description:
      'SignCraft é uma fundação de projeto full-stack com API em .NET e cliente Angular, já compilando e organizada em camadas, pronta para receber as regras de negócio de geração de assinaturas de e-mail.',
    problem:
      'Iniciar o desenvolvimento de um produto de assinaturas de e-mail sem perder tempo configurando arquitetura, camadas e integração entre backend e frontend do zero.',
    solution:
      'Estrutura em camadas (API, Application, Domain, Infrastructure) já validada com build funcionando dos dois lados, e frontend Angular com SSR habilitado, prontos para receber entidades de domínio e casos de uso.',
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Angular 20',
      'TypeScript',
      'SSR'
    ],
    architecture: [
      'Backend em camadas (API, Application, Domain, Infrastructure)',
      'Angular 20 com Server-Side Rendering (SSR)',
      'OpenAPI habilitado na API'
    ],
    decisions: [
      {
        title: 'Separação em camadas desde o início',
        description:
          'Projetos distintos para API, Application, Domain e Infrastructure, preparando o terreno para regras de negócio antes de qualquer funcionalidade ser implementada.'
      },
      {
        title: 'SSR habilitado no frontend',
        description:
          'Angular 20 configurado com Server-Side Rendering para melhorar performance inicial e SEO assim que as telas de negócio forem construídas.'
      }
    ],
    status: 'Em fase inicial — fundação do projeto no GitHub',
    githubUrl: 'https://github.com/Pedrolustosa/SignCraft'
  }
];
