import { L } from '../i18n/locale';
import { ProjectCase } from '../models/project-case.model';

export const PROJECT_CASES: ProjectCase[] = [
  {
    slug: 'inventory-order-management',
    title: 'InventoryOrderManagement',
    category: 'Full Stack',
    summary: L(
      'Sistema full stack de gestão de estoque, compras e vendas, construído para aplicar Clean Architecture, DDD e testes automatizados de ponta a ponta.',
      'Full-stack inventory, purchasing, and sales management system, built to apply Clean Architecture, DDD, and automated tests end to end.'
    ),
    description: L(
      'InventoryOrderManagement cobre o fluxo operacional completo de um negócio — catálogo → estoque → compras e vendas → expedição e devoluções → financeiro — com dashboard de KPIs, relatórios, notificações in-app e administração de usuários, papéis e permissões. API REST em .NET 10 com EF Core e SQLite, e SPA em Angular 22 bilíngue (pt-BR / en) com tema claro e escuro.',
      'InventoryOrderManagement covers the full operational flow of a business — catalog → inventory → purchasing and sales → shipping and returns → finance — with a KPI dashboard, reports, in-app notifications, and user, role, and permission administration. REST API on .NET 10 with EF Core and SQLite, and a bilingual (pt-BR / en) Angular 22 SPA with light and dark themes.'
    ),
    problem: L(
      'Pequenas operações costumam controlar estoque, pedidos e financeiro em ferramentas separadas, sem regras que garantam consistência entre elas: um pedido pode ser despachado sem baixar o estoque, e ninguém sabe quem alterou o quê.',
      'Small operations often track inventory, orders, and finance in separate tools, with no rules keeping them consistent: an order can ship without updating stock, and nobody knows who changed what.'
    ),
    solution: L(
      'Um domínio rico com agregados (Order, PurchaseOrder, Shipment, ReturnRequest, FinancialTitle) e transições de estado explícitas, orquestrado por casos de uso com Unit of Work para manter pedidos, expedição e estoque consistentes. Permissões granulares protegem a API e são reaproveitadas pelas guards do Angular.',
      'A rich domain with aggregates (Order, PurchaseOrder, Shipment, ReturnRequest, FinancialTitle) and explicit state transitions, orchestrated by use cases with Unit of Work to keep orders, shipping, and stock consistent. Fine-grained permissions protect the API and are reused by the Angular guards.'
    ),
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'EF Core 10',
      'ASP.NET Core Identity',
      'SQLite',
      'Angular 22',
      'Tailwind CSS',
      'Chart.js',
      'xUnit',
      'Vitest'
    ],
    architecture: [
      L(
        'Clean Architecture: Api, Application, Domain e Infrastructure, com o Domain livre de frameworks',
        'Clean Architecture: Api, Application, Domain, and Infrastructure, with a framework-free Domain'
      ),
      L(
        'Agregados DDD com setters privados e transições explícitas (Confirm, Dispatch, MarkAsDelivered…)',
        'DDD aggregates with private setters and explicit transitions (Confirm, Dispatch, MarkAsDelivered…)'
      ),
      L(
        'Repository + Unit of Work para transações atômicas entre agregados',
        'Repository + Unit of Work for atomic transactions across aggregates'
      ),
      L(
        'Autenticação por cookie com ASP.NET Core Identity, proteção CSRF e políticas por permissão',
        'Cookie authentication with ASP.NET Core Identity, CSRF protection, and permission policies'
      ),
      L(
        'GlobalExceptionHandler mapeando exceções de domínio para ProblemDetails (400/404/409)',
        'GlobalExceptionHandler mapping domain exceptions to ProblemDetails (400/404/409)'
      ),
      L(
        'SPA Angular standalone organizada por features, com rotas lazy, Reactive Forms, Signals e RxJS',
        'Feature-based standalone Angular SPA with lazy routes, Reactive Forms, Signals, and RxJS'
      ),
      L(
        'Testes unitários e de integração com xUnit (WebApplicationFactory) e testes do SPA com Vitest',
        'Unit and integration tests with xUnit (WebApplicationFactory) and SPA tests with Vitest'
      )
    ],
    decisions: [
      {
        title: L('Regras de negócio no domínio', 'Business rules in the domain'),
        description: L(
          'Entidades encapsuladas expõem apenas transições válidas; a camada Application só orquestra, e os controllers nunca expõem entidades — apenas DTOs.',
          'Encapsulated entities expose only valid transitions; the Application layer only orchestrates, and controllers never expose entities — only DTOs.'
        )
      },
      {
        title: L('Consistência entre pedido e expedição', 'Order and shipment consistency'),
        description: L(
          'Quando um pedido já tem expedição, os endpoints legados de envio e entrega retornam 409 e a interface direciona o usuário para o fluxo de shipping, evitando estados divergentes.',
          'Once an order has a shipment, the legacy ship and deliver endpoints return 409 and the UI routes the user to the shipping workflow, preventing diverging states.'
        )
      },
      {
        title: L('Permissões compartilhadas entre API e UI', 'Permissions shared by API and UI'),
        description: L(
          'Claims de permissão (ex.: Reports.View) definem as políticas da API e também as guards e a navegação do Angular, então a interface mostra exatamente o que o usuário pode fazer.',
          'Permission claims (e.g. Reports.View) drive both the API policies and the Angular guards and navigation, so the UI shows exactly what the user is allowed to do.'
        )
      },
      {
        title: L('Seed idempotente para desenvolvimento', 'Idempotent development seeding'),
        description: L(
          'Em Development a API aplica as migrations e popula catálogo, operações e contas de demonstração com um seeder seguro para rodar várias vezes.',
          'In Development the API applies migrations and seeds catalog, operations, and demo accounts with a seeder that is safe to re-run.'
        )
      }
    ],
    status: L(
      'Em desenvolvimento ativo — código aberto no GitHub',
      'In active development — open source on GitHub'
    ),
    githubUrl: 'https://github.com/Pedrolustosa/InventoryOrderManagement'
  },
  {
    slug: 'identityhub',
    title: 'IdentityHub',
    category: 'Full Stack',
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
  },
  {
    slug: 'timetrack-lite',
    title: 'TimeTrack Lite',
    category: 'Web App',
    summary: L(
      'Aplicação web leve para calcular a jornada diária em relação à meta de 8 horas, com sugestões automáticas de ajuste.',
      'Lightweight web app that calculates the workday against an 8-hour goal, with automatic adjustment suggestions.'
    ),
    description: L(
      'O usuário informa entrada, saída para almoço, volta do almoço e saída. O TimeTrack Lite calcula o total trabalhado, o saldo do dia, o tempo restante e o horário previsto de saída, e indica o status da jornada. É bilíngue (pt-BR / en), tem tema claro e escuro e está publicado no GitHub Pages.',
      'The user enters start, lunch out, lunch in, and end times. TimeTrack Lite calculates total time worked, the daily balance, time remaining, and the projected end time, and shows the workday status. It is bilingual (pt-BR / en), has light and dark themes, and is published on GitHub Pages.'
    ),
    problem: L(
      'Fechar exatamente 8 horas de trabalho exige fazer contas com horários e intervalo de almoço todos os dias — fácil de errar e chato de repetir.',
      'Hitting exactly 8 working hours means doing time arithmetic around a lunch break every day — easy to get wrong and tedious to repeat.'
    ),
    solution: L(
      'Um formulário com validação cronológica e um resumo calculado em tempo real. O ajuste inteligente permite escolher um dos quatro horários e receber o valor que completa exatamente 8 horas, mantendo os outros três.',
      'A form with chronological validation and a summary calculated in real time. Smart adjustment lets the user pick one of the four times and get the value that completes exactly 8 hours while keeping the other three.'
    ),
    technologies: [
      'Angular 20',
      'TypeScript',
      'Tailwind CSS 4',
      'Signals',
      'Lucide',
      'ESLint',
      'Prettier',
      'GitHub Pages'
    ],
    architecture: [
      L(
        'Angular 20 standalone e zoneless, com estado reativo via Signals',
        'Standalone, zoneless Angular 20 with reactive state via Signals'
      ),
      L(
        'Feature time-calculator dividida em components, models, services, utils e validators',
        'time-calculator feature split into components, models, services, utils, and validators'
      ),
      L(
        'Serviço de cálculo isolado da interface, com utilitários de parsing e formatação de horários',
        'Calculation service isolated from the UI, with time parsing and formatting utilities'
      ),
      L(
        'Validadores para as regras cronológicas da jornada',
        'Validators for the chronological rules of the workday'
      ),
      L(
        'Internacionalização própria (pt-BR / en) e serviço de tema claro/escuro persistido',
        'Custom internationalization (pt-BR / en) and a persisted light/dark theme service'
      )
    ],
    decisions: [
      {
        title: L('Lógica pura separada da UI', 'Pure logic separated from the UI'),
        description: L(
          'Cálculos e validações ficam em serviços e utilitários sem dependência de componentes, o que facilita testar e evoluir as regras.',
          'Calculations and validations live in services and utilities with no component dependencies, making the rules easy to test and evolve.'
        )
      },
      {
        title: L('Ajuste que preserva os outros horários', 'Adjustment that keeps the other times'),
        description: L(
          'Em vez de sugerir uma jornada inteira nova, o usuário escolhe qual horário quer mudar e o app resolve apenas esse valor.',
          'Instead of suggesting a whole new schedule, the user picks which time to change and the app solves for that value only.'
        )
      },
      {
        title: L('Sem backend', 'No backend'),
        description: L(
          'Tudo roda no navegador e é publicado como site estático no GitHub Pages — custo zero e uso imediato.',
          'Everything runs in the browser and ships as a static site on GitHub Pages — zero cost and instant use.'
        )
      }
    ],
    status: L(
      'Publicado — demo disponível no GitHub Pages',
      'Live — demo available on GitHub Pages'
    ),
    githubUrl: 'https://github.com/Pedrolustosa/TimeTrackLite',
    demoUrl: 'https://pedrolustosa.github.io/TimeTrackLite/'
  }
];
