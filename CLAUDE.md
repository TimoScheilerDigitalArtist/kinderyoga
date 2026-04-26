# Kinderyoga – Project Instructions for Claude

## Project Overview
Kinderyoga is a bilingual (DE/EN) website for children's yoga, built with Next.js, Payload CMS, and Tailwind CSS v4. Deployed on Vercel.

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **CMS:** Payload CMS 3.x (SQLite via `@payloadcms/db-sqlite`)
- **Styling:** Tailwind CSS v4, `tw-animate-css`, `class-variance-authority`, `tailwind-merge`, `clsx`
- **UI Components:** shadcn/ui
- **i18n:** `next-intl` (locales: `de`, `en`) – messages in `/messages/`
- **Analytics:** Vercel Analytics + Speed Insights
- **Icons:** Lucide React
- **Package Manager:** pnpm
- **Language:** TypeScript (strict)

## Project Structure
```
src/
├── app/
│   ├── (frontend)/        # Public-facing routes
│   │   ├── [locale]/      # Locale-based routing (de/en)
│   │   └── globals.css    # Global styles
│   └── (payload)/         # Payload CMS admin panel
├── collections/           # Payload CMS collections
├── components/            # Reusable UI components
├── i18n/                  # i18n config & routing
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
├── payload.config.ts      # Payload CMS configuration
└── payload-types.ts       # Auto-generated Payload types
messages/
├── de.json                # German translations
└── en.json                # English translations
```

## Code Style & Conventions
- Use `pnpm` for all package operations
- Use TypeScript strict mode – no `any` types
- Use `@/` path alias for imports from `src/`
- Functional components with async server components where possible
- Use `setRequestLocale(locale)` in every page/layout for static rendering
- Use `useTranslations` (client) / `getTranslations` (server) from `next-intl`
- Translations go in both `messages/de.json` and `messages/en.json`
- Style with Tailwind utility classes, use `cn()` helper for conditional classes
- Use shadcn/ui components from `@/components/ui/`
- Payload collections go in `src/collections/`
- Keep components small and composable

## Commands
- `pnpm dev` – Start dev server
- `pnpm build` – Production build
- `pnpm lint` – ESLint
- `pnpm format` – Prettier format
- `pnpm knip` – Find unused code

## Important Rules
- Always add translations for BOTH `de` and `en` locales
- Never commit `.env` files
- Never edit `payload-types.ts` manually (auto-generated)
- Use `cross-env` for all Node.js scripts (already configured)
- Target audience: parents of children, yoga teachers – keep tone warm, friendly, and professional
