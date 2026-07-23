# Daniel Fernandez — Developer Portfolio

A modern, responsive portfolio showcasing my work, technical skills, and professional experience as a full-stack developer.

Built with a clean editorial style, this site focuses on the products I create: AI tools, business software, and internal systems that solve real-world problems.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## About the portfolio

The portfolio introduces who I am, what I build, and the experience I bring to each project. It highlights selected products such as Akasha Seed, a vehicle finance calculator, and a water-business CRM.

The site includes:

- A responsive hero section with a custom portrait
- Service areas covering AI products, business software, and internal tools
- Selected projects with visual previews and technology tags
- A concise overview of my technical stack
- A professional experience timeline
- Contact links and clear calls to action
- SEO, Open Graph, and Twitter metadata
- Accessible navigation, focus states, and semantic page structure

## Tech stack

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router, image optimization, metadata, and production builds |
| [React 19](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and safer development |
| [Tailwind CSS 4](https://tailwindcss.com/) | Responsive, utility-first styling |
| [shadcn](https://ui.shadcn.com/) and [Base UI](https://base-ui.com/) | Reusable interface primitives |
| [Lucide React](https://lucide.dev/) | Consistent iconography |
| [Geist](https://vercel.com/font) | Local sans-serif and monospace typography |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or newer
- [pnpm](https://pnpm.io/) 10 or newer

### Installation

```bash
git clone https://github.com/danielFernandezDj/daniel-portfolio.git
cd daniel-portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Check the project with ESLint |
| `pnpm typecheck` | Generate Next.js types and run the TypeScript compiler |
| `pnpm format` | Format TypeScript and TSX files with Prettier |

## Project structure

```text
.
├── app/
│   ├── fonts/            # Local Geist font files
│   ├── globals.css       # Global styles and Tailwind theme
│   ├── layout.tsx        # Root layout and site metadata
│   └── page.tsx          # Portfolio content and sections
├── components/
│   └── ui/               # Reusable Button and Badge components
├── lib/
│   └── utils.ts          # Shared utility functions
├── public/
│   └── images/           # Portfolio imagery
└── package.json
```

## Customization

Most portfolio content is intentionally kept in one place for straightforward editing:

- Update projects, services, experience, and contact details in `app/page.tsx`.
- Adjust colors, typography, and shared styles in `app/globals.css`.
- Change the page title, description, canonical URL, and social metadata in `app/layout.tsx`.
- Add or replace static images in `public/images`.

When using this project as a starting point, remember to replace the placeholder project links, social links, email address, and site URL with your own.

## Deployment

The app can be deployed on any platform that supports Next.js. For a quick deployment, import the repository into [Vercel](https://vercel.com/new), keep the default framework settings, and deploy.

Before publishing, verify the production URL in `app/layout.tsx` so canonical and social-sharing metadata point to the correct domain.

## License

The source code is available for learning and inspiration. The personal content, branding, copy, and imagery remain the property of Daniel Fernandez.

---

Designed and built by [Daniel Fernandez](https://github.com/danielFernandezDj).
