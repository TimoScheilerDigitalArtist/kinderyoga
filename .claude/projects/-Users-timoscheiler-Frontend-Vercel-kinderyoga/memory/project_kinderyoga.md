---
name: Kinderyoga project context
description: Core setup decisions and gotchas for the Kinderyoga Next.js + Payload CMS project
type: project
---

Website for Martina Partsch (Kinderyoga, Eggstätt). One-pager, bilingual DE/EN.

**Architecture:**
- Payload CMS fetched server-side in `page.tsx`; section components are Client Components receiving data as props
- `src/globals/HomePage.ts` = Payload Global (singleton) for hero, about, details, contact, SEO
- `src/collections/YogaGroups.ts` = Collection for 3 age groups (Mini-Yogis, Yoga-Entdecker, Teen Yoga)
- DB seeded via `onInit` in `payload.config.ts` on first startup (checks `yoga-groups` count, tries/catches if tables missing)
- `src/seed.ts` contains full bilingual seed data

**Why:** After adding new Payload collections/globals, run these commands in order:
1. `pnpm generate:types` — regenerates `payload-types.ts`
2. `pnpm payload migrate:create --name <name>` — creates migration from schema diff
3. `pnpm payload migrate` — applies migration to DB

**How to apply:** Any time a Payload collection or global is added/changed, all three steps are required before `pnpm build` will succeed. The SQLite adapter does NOT auto-push schema changes in production mode.

**Design tokens:** Kinderyoga palette lives in `globals.css` as `--color-ky-*` → use `bg-ky-lavender`, `text-ky-charcoal`, etc.

**Animation stack:** `motion/react` (v12) for all animations; `lenis` for smooth scroll via `SmoothScrollProvider` (Client Component in layout). Animation components in `src/components/animations/`. All animations respect `useReducedMotion()`.

**Fonts:** DM Serif Display (`--font-dm-serif`, class `font-heading`) + Inter (`--font-inter`). Loaded in `[locale]/layout.tsx` via `next/font/google`.

**Contact:** Martina Partsch, +49 1708764438, Am Lohfeld 5, 83125 Eggstätt
