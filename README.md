# Pedro Lustosa — Portfolio

Personal portfolio of Pedro Lustosa, a Software Engineer specialized in full stack development, software architecture, cloud, generative AI integrations and scalable applications.

Built as a single-page Angular application with a dedicated route for detailed project case studies.

## Tech Stack

- [Angular 20](https://angular.dev) (standalone components, signals, zoneless change detection)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- RxJS

## Features

- **Home** — hero, about, skills, projects, experience, journey, education, certifications and contact
- **Featured project** — [IdentityHub](https://github.com/Pedrolustosa/IdentityHub) IAM case study at `/projects/identityhub`
- **Carousels** — reusable autoplay + manual carousel on stack, projects, experience (vertical career timeline), education and certifications
- **Light / dark theme** — toggle in the navbar, preference persisted in `localStorage`, respects system preference on first visit
- **Certifications** — filterable cards with certificate images when available
- **Hero focus** — primary stack highlighted with icons: C#, .NET, Angular, React, Python
- Scroll-reveal animations, active-section navigation and responsive navbar/footer
- Accessibility: skip link, `aria-current`, focus-visible styles, `prefers-reduced-motion`

## Project Structure

```
src/app/
  core/
    data/        # static content (experience, education, certifications, projects, …)
    models/      # TypeScript interfaces
    services/    # theme service
  features/
    home/        # home page sections (hero, about, skills, …)
    projects/    # project list + case study page
  shared/
    components/  # navbar, footer, carousel
    directives/  # scroll-reveal directive
    icon/        # inline SVG icon component

public/
  certifications/   # certificate images used in the certifications carousel
```

## Support

If this portfolio or the open-source work around it is useful to you, you can support it here:

- [buymeacoffee.com/pedrolustosa](https://buymeacoffee.com/pedrolustosa)

<p align="left">
  <a href="https://buymeacoffee.com/pedrolustosa">
    <img
      src="public/buy-me-a-coffee-qr.png"
      alt="Buy me a coffee QR code"
      width="180"
    />
  </a>
</p>

## Content notes

- Projects are defined in `src/app/core/data/projects.data.ts` and case studies in `project-cases.data.ts` (same `slug`).
- Certification metadata and image paths live in `src/app/core/data/certifications.data.ts`.
- Resume download points to `/Pedro-Lustosa-Curriculo.pdf` (place the PDF under `public/` when ready).
- Buy Me a Coffee link and QR live in the footer (`public/buy-me-a-coffee-qr.png`).

## Development server

```bash
npm start
```

Open `http://localhost:4200/`. The app reloads on source changes.

## Building

```bash
npm run build
```

Artifacts are written to `dist/`.

## Running unit tests

```bash
npm test
```

## Additional Resources

For more information on the Angular CLI, see the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
