import { L } from '../i18n/locale';
import { ProjectCase } from '../models/project-case.model';

export const PROJECT_CASES: ProjectCase[] = [
  {
    slug: 'identityhub',
    title: 'IdentityHub',
    category: 'Project',
    summary: L(
      'Plataforma de Identity and Access Management (IAM) focada em administração segura de usuários e visibilidade operacional.',
      'Identity and Access Management (IAM) platform focused on secure user administration and operational visibility.'
    ),
    description: L(
      'IdentityHub cobre o ciclo completo de identidade — cadastro, confirmação de e-mail, recuperação de senha, atualização de perfil e troca de senha — combinado com administração de usuários, papéis e claims de permissão. Backend em ASP.NET Core + Identity + EF Core (SQLite) e frontend em Angular standalone com Tailwind.',
      'IdentityHub covers the full identity lifecycle — registration, email confirmation, password recovery, profile updates, and password changes — combined with user, role, and permission-claim administration. Backend on ASP.NET Core + Identity + EF Core (SQLite) and frontend on Angular standalone with Tailwind.'
    ),
    problem: L(
      'Sistemas corporativos frequentemente carecem de um controle de acesso granular e auditável: permissões soltas, sessões sem expiração real e pouca visibilidade sobre eventos de segurança.',
      'Enterprise systems often lack granular, auditable access control: loose permissions, sessions without real expiration, and little visibility into security events.'
    ),
    solution: L(
      'Autorização baseada em políticas mapeadas para permissões nomeadas (ex.: Users.View), sessões versionadas (sid + permission_version) para invalidar tokens quando permissões mudam, e observabilidade via logs de auditoria, alertas de segurança e timeline de atividades.',
      'Policy-based authorization mapped to named permissions (e.g. Users.View), versioned sessions (sid + permission_version) to invalidate tokens when permissions change, and observability through audit logs, security alerts, and an activity timeline.'
    ),
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
      L(
        'Backend em camadas (API, Application, Domain, Infrastructure, IoC)',
        'Layered backend (API, Application, Domain, Infrastructure, IoC)'
      ),
      L('CQRS e serviços de aplicação', 'CQRS and application services'),
      L(
        'JWT de curta duração com refresh token rotativo em cookie HttpOnly/Secure/SameSite=Strict',
        'Short-lived JWT with rotating refresh token in an HttpOnly/Secure/SameSite=Strict cookie'
      ),
      L(
        'Autorização dinâmica por políticas e permissões (Users.*, Roles.*, Audit.*, Sessions.*, etc.)',
        'Dynamic authorization via policies and permissions (Users.*, Roles.*, Audit.*, Sessions.*, etc.)'
      ),
      L(
        'Versionamento de sessão e permissões (sid + permission_version)',
        'Session and permission versioning (sid + permission_version)'
      ),
      L(
        'Rate limiting em endpoints sensíveis de autenticação',
        'Rate limiting on sensitive authentication endpoints'
      ),
      L(
        'Frontend Angular standalone modularizado por features (auth-layout e main-layout)',
        'Feature-modular Angular standalone frontend (auth-layout and main-layout)'
      )
    ],
    decisions: [
      {
        title: L(
          'JWT + refresh token rotativo',
          'JWT + rotating refresh token'
        ),
        description: L(
          'Access token de curta duração (padrão 15 min) combinado com refresh token no cookie ih_refresh (HttpOnly, Secure, SameSite=Strict), rotacionado a cada renovação.',
          'Short-lived access token (default 15 min) combined with a refresh token in the ih_refresh cookie (HttpOnly, Secure, SameSite=Strict), rotated on every renewal.'
        )
      },
      {
        title: L(
          'Autorização por permissões dinâmicas',
          'Dynamic permission-based authorization'
        ),
        description: L(
          'Políticas mapeadas para permissões nomeadas, aplicadas no backend e nas guards de rota do frontend, com catálogo de navegação baseado em requiredAny.',
          'Policies mapped to named permissions, enforced in the backend and frontend route guards, with a navigation catalog based on requiredAny.'
        )
      },
      {
        title: L('Endurecimento de sessão', 'Session hardening'),
        description: L(
          'JWT inclui sid e permission_version; a API valida sessão ativa e versão de permissões a cada request autenticado, invalidando tokens após mudanças de acesso.',
          'The JWT includes sid and permission_version; the API validates the active session and permission version on every authenticated request, invalidating tokens after access changes.'
        )
      },
      {
        title: L(
          'Observabilidade de segurança',
          'Security observability'
        ),
        description: L(
          'Logs de auditoria, alertas de segurança e linha do tempo de atividades para acompanhar ações sensíveis no sistema.',
          'Audit logs, security alerts, and an activity timeline to track sensitive actions in the system.'
        )
      },
      {
        title: L(
          'Rate limiting em endpoints sensíveis',
          'Rate limiting on sensitive endpoints'
        ),
        description: L(
          'Limitação de requisições em login, recuperação de senha e reenvio de confirmação para mitigar ataques de força bruta.',
          'Request limiting on login, password recovery, and confirmation resend to mitigate brute-force attacks.'
        )
      }
    ],
    status: L(
      'MVP funcional — código aberto no GitHub (MIT)',
      'Working MVP — open source on GitHub (MIT)'
    ),
    githubUrl: 'https://github.com/Pedrolustosa/IdentityHub'
  }
];
