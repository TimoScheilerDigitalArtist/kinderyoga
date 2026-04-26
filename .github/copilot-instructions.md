# Kinderyoga – GitHub Copilot Instructions

## Project
Kinderyoga – a bilingual (DE/EN) children's yoga website built with Next.js 16, Payload CMS 3, Tailwind CSS v4, and TypeScript.

## Tech Stack
- Next.js 16 (App Router, Turbopack), Payload CMS 3 (SQLite), Tailwind CSS v4
- i18n via `next-intl` (locales: `de`, `en`)
- UI: shadcn/ui, Lucide icons, `class-variance-authority`, `clsx`, `tailwind-merge`
- Package manager: pnpm
- Deployed on Vercel

## Conventions
- TypeScript strict – no `any`
- Use `@/` path alias for src imports
- Async server components, `setRequestLocale(locale)` in every page/layout
- Translations in `messages/de.json` and `messages/en.json` – always both
- Style with Tailwind utilities, use `cn()` for conditional classes
- shadcn/ui components in `@/components/ui/`
- Payload collections in `src/collections/`
- Small, composable functional components
- Warm, friendly tone for content (target: parents, yoga teachers)

## Structure
- `src/app/(frontend)/[locale]/` – public pages with locale routing
- `src/app/(payload)/` – Payload CMS admin
- `src/collections/` – Payload collections
- `src/components/` – reusable components
- `src/i18n/` – i18n config
- `src/lib/` – utilities

## Don't
- Don't edit `payload-types.ts` (auto-generated)
- Don't commit `.env`
- Don't use `any` types
- Don't forget both DE and EN translations
