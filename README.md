# Neisha Stylist

A modern portfolio website for a professional hairstylist salon, showcasing their work, services, and team.

## Tech Stack

### Framework & Language

- **[Next.js](https://nextjs.org/)** - React framework with App Router
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[DaisyUI](https://daisyui.com/)** - Tailwind component library
- **[Motion](https://motion.dev/)** - Animation library

### Data & State Management

- **[Hygraph](https://hygraph.com/)** - Backend provider for database and API

### Misc. Libraries

- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[UUID](https://github.com/uuidjs/uuid#readme)** - Generating unique IDs

### Testing

- **[Jest](https://jestjs.io/)** - Unit testing
- **[Playwright](https://playwright.dev/)** - E2E testing
- **[Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Utility functions for unit testing
- **[@axe-core/playwright](https://www.npmjs.com/package/axe-playwright)** - Accessibility testing

### Code Quality & Tooling

- **[ESLint](https://eslint.org/)** - Linter
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for pre-commit checks
- **[Commitlint](https://commitlint.js.org/)** - Conventional commit enforcement
- **[Semantic Release](https://semantic-release.gitbook.io/semantic-release/)** - Automated versioning and changelog

## Getting Started

### Prerequisites

- **Node.js 22.x**
- **npm**

### Installation

#### 1) Clone the repository

```sh
git clone https://github.com/Treysouz/Neishastylist.git
```

#### 2) Navigate to project directory

```sh
cd Neishastylist
```

#### 3) Install dependencies

```sh
npm install
```

### Development

#### - Start development server

```sh
npm run dev
```

### Building

#### 1) Create production build

```sh
npm run build
```

#### 2) Preview production build locally

```sh
npm run preview
```

#### 3) Start production server

```sh
npm start
```

### Code Quality

#### - Format code

```sh
npm run format
```

#### - Lint code

```sh
npm run lint
```

## Testing

### Unit Tests

#### - Run unit tests

```sh
npm run test:unit
```

#### - Run unit tests with coverage

```sh
npm run test:unit-coverage
```

### E2E Tests

#### - Run E2E tests

```sh
npm run test:e2e
```

#### - Run E2E tests with Playwright UI

```sh
npm run test:e2e-ui
```

### Running All Tests

```sh
npm test
```

## Deployment

This project is deployed to [Vercel](https://vercel.com) using GitHub Actions.

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- **Testing** (`testing.yml`) - Runs linting, unit tests, and e2e tests
- **Release** (`release.yml`) - Creates semantic releases with changelog
- **Deploy** (`deploy.yml`) - Deploys to Vercel (reusable workflow)
- **Deploy Preview** (`deploy-preview.yml`) - Deploys PR previews
- **Deploy Production** (`deploy-prod.yml`) - Deploys to production
