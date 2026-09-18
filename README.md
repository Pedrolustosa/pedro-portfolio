# Pedro Lustosa — Portfolio

Personal portfolio of Pedro Lustosa, a Software Engineer specialized in full stack development, software architecture, cloud and scalable applications.

Built as a single-page Angular application with a dedicated route for detailed project case studies.

## Tech Stack

- [Angular 20](https://angular.dev) (standalone components, signals)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- RxJS

## Features

- **Home** — hero, about, skills, projects, experience, journey, education, certifications and contact sections
- **Project case studies** — dedicated route (`/projects/:slug`) with problem, solution, architecture and technical decisions for each project
- Scroll-reveal animations, active-section navigation highlighting and a responsive navbar/footer
- Accessibility touches: skip link, `aria-current` on active nav links, WCAG-conscious color contrast

## Project Structure

```
src/app/
  core/
    data/        # static content (experience, education, certifications, etc.)
    models/      # TypeScript interfaces for the data above
  features/
    home/        # home page sections (hero, about, skills, ...)
    projects/    # project list + case study page
  shared/
    components/  # navbar, footer
    directives/  # scroll-reveal directive
    icon/        # inline SVG icon component
```

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
npm run build
```

This will compile the project and store the build artifacts in the `dist/` directory.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm test
```

## Additional Resources

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

