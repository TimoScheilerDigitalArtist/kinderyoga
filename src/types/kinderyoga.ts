export interface LexicalTextNode {
  type: 'text'
  text: string
  format: number
  style?: string
  detail?: number
  mode?: string
  version: number
}

export interface LexicalElementNode {
  type: string
  children?: LexicalNode[]
  format?: string | number
  indent?: number
  version: number
  tag?: string
  listType?: string
  direction?: string | null
}

export type LexicalNode = LexicalTextNode | LexicalElementNode

export interface LexicalContent {
  root: {
    type: 'root'
    children: LexicalNode[]
    version: number
    format?: string
    indent?: number
    direction?: string | null
  }
}

export interface MediaData {
  id: string
  url?: string | null
  alt: string
  width?: number | null
  height?: number | null
  filename?: string | null
}

export interface HeroData {
  headline?: string | null
  subtitle?: string | null
}

export interface AboutData {
  image?: MediaData | string | null
  text?: LexicalContent | null
}

export type DetailIcon = 'users' | 'calendar' | 'heart' | 'shield'

export interface DetailItem {
  icon?: DetailIcon | null
  title?: string | null
  description?: string | null
  id?: string | null
}

export interface ContactData {
  ctaText?: string | null
  phone?: string | null
  address?: string | null
  email?: string | null
}

export interface SeoData {
  metaTitle?: string | null
  metaDescription?: string | null
}

export interface HomePageData {
  hero?: HeroData | null
  about?: AboutData | null
  details?: DetailItem[] | null
  contact?: ContactData | null
  seo?: SeoData | null
  updatedAt?: string
  createdAt?: string
  globalType?: string
}

export type GroupIcon = 'butterfly' | 'star' | 'tree' | 'mountain' | 'moon' | 'wave'
export type GroupColor = 'lavender' | 'peach' | 'sage'

export interface YogaGroupData {
  id: string
  title?: string | null
  ageRange?: string | null
  description?: LexicalContent | null
  icon?: GroupIcon | null
  color?: GroupColor | null
  order?: number | null
  updatedAt?: string
  createdAt?: string
}
