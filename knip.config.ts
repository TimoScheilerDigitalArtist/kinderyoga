import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['src/app/**/{page,layout,loading,error,not-found,route,default}.tsx'],
  project: ['src/**/*.{ts,tsx}'],
  ignore: ['src/payload-types.ts', 'src/payload-generated-schema.ts'],
  ignoreDependencies: [
    // Payload CMS (referenced in payload.config.ts, not statically analyzable)
    '@payloadcms/db-sqlite',
    '@payloadcms/richtext-lexical',
    '@payloadcms/ui',
    'sharp',
    // Build tools
    'cross-env',
    'eslint-config-next',
    // shadcn/ui runtime dependencies (used by generated components)
    '@base-ui/react',
    'class-variance-authority',
    'clsx',
    'lucide-react',
    'shadcn',
    'tailwind-merge',
    'tw-animate-css',
    // Tailwind CSS (used via PostCSS/CSS imports)
    'tailwindcss',
  ],
  next: {
    entry: ['next.config.ts', 'src/proxy.ts'],
  },
  postcss: {
    config: ['postcss.config.mjs'],
  },
}

export default config
