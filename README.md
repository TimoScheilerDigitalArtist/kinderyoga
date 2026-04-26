# Zelmer Art

Artist portfolio website for **Wolfgang Zelmer** — [zelmer-art.com](https://www.zelmer-art.com/)

## Tech Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **CMS:** Payload CMS 3
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **i18n:** next-intl (DE / EN)
- **Analytics:** Vercel Analytics + Speed Insights
- **Database:** SQLite (dev) / Vercel Postgres (prod)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:3000/admin](http://localhost:3000/admin) for the Payload admin panel.

## Scripts

| Command               | Description                   |
| --------------------- | ----------------------------- |
| `pnpm dev`            | Start dev server              |
| `pnpm build`          | Production build              |
| `pnpm start`          | Start production server       |
| `pnpm lint`           | Run ESLint                    |
| `pnpm format`         | Format with Prettier          |
| `pnpm format:check`   | Check formatting              |
| `pnpm knip`           | Find unused code/dependencies |
| `pnpm generate:types` | Regenerate Payload types      |

## Project Structure

```
src/
├── app/
│   ├── (frontend)/[locale]/   # Public pages (DE/EN)
│   └── (payload)/             # Payload CMS admin
├── collections/               # Payload collection configs
├── components/                # UI components
├── i18n/                      # i18n config & routing
├── lib/                       # Utilities
├── payload.config.ts          # Payload configuration
└── proxy.ts                   # next-intl proxy (i18n routing)
messages/
├── de.json                    # German translations
└── en.json                    # English translations
```
