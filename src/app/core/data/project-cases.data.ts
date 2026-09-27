import { ProjectCase } from '../models/project-case.model';

export const PROJECT_CASES: ProjectCase[] = [
  {
    slug: 'identityhub',
    title: 'IdentityHub',
    category: 'Project',
    summary:
      'Plataforma de Identity and Access Management (IAM) focada em administração segura de usuários e visibilidade operacional.',
    description:
      'IdentityHub cobre o ciclo completo de identidade — cadastro, confirmação de e-mail, recuperação de senha, atualização de perfil e troca de senha — combinado com administração de usuários, papéis e claims de permissão. Backend em ASP.NET Core + Identity + EF Core (SQLite) e frontend em Angular standalone com Tailwind.',
    problem:
      'Sistemas corporativos frequentemente carecem de um controle de acesso granular e auditável: permissões soltas, sessões sem expiração real e pouca visibilidade sobre eventos de segurança.',
    solution:
      'Autorização baseada em políticas mapeadas para permissões nomeadas (ex.: Users.View), sessões versionadas (sid + permission_version) para invalidar tokens quando permissões mudam, e observabilidade via logs de auditoria, alertas de segurança e timeline de atividades.',
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQLite',
      'JWT',
      'Angular 18',
      'Tailwind CSS',
      'TypeScript'
    ],
    architecture: [
      'Backend em camadas (API, Application, Domain, Infrastructure, IoC)',
      'CQRS e serviços de aplicação',
      'JWT de curta duração com refresh token rotativo em cookie HttpOnly/Secure/SameSite=Strict',
      'Autorização dinâmica por políticas e permissões (Users.*, Roles.*, Audit.*, Sessions.*, etc.)',
      'Versionamento de sessão e permissões (sid + permission_version)',
      'Rate limiting em endpoints sensíveis de autenticação',
      'Frontend Angular standalone modularizado por features (auth-layout e main-layout)'
    ],
    decisions: [
      {
        title: 'JWT + refresh token rotativo',
        description:
          'Access token de curta duração (padrão 15 min) combinado com refresh token no cookie ih_refresh (HttpOnly, Secure, SameSite=Strict), rotacionado a cada renovação.'
      },
      {
        title: 'Autorização por permissões dinâmicas',
        description:
          'Políticas mapeadas para permissões nomeadas, aplicadas no backend e nas guards de rota do frontend, com catálogo de navegação baseado em requiredAny.'
      },
      {
        title: 'Endurecimento de sessão',
        description:
          'JWT inclui sid e permission_version; a API valida sessão ativa e versão de permissões a cada request autenticado, invalidando tokens após mudanças de acesso.'
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
    status: 'MVP funcional — código aberto no GitHub (MIT)',
    githubUrl: 'https://github.com/Pedrolustosa/IdentityHub'
  }
];
