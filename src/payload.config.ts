import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { YogaGroups } from './collections/YogaGroups'
import { HomePageGlobal } from './globals/HomePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      { label: 'Deutsch', code: 'de' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'de',
  },
  collections: [Users, Media, YogaGroups],
  globals: [HomePageGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
  onInit: async (payload) => {
    try {
      const groups = await payload.find({
        collection: 'yoga-groups',
        limit: 1,
        overrideAccess: true,
      })
      if (groups.totalDocs === 0) {
        const { seed } = await import('./seed')
        await seed(payload)
      }
    } catch {
      // Tables not migrated yet — seed will run on next startup after migration
    }
  },
})
