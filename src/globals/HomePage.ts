import type { GlobalConfig } from 'payload'

export const HomePageGlobal: GlobalConfig = {
  slug: 'home-page',
  label: { de: 'Startseite', en: 'Home Page' },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: { de: 'Hero-Bereich', en: 'Hero Section' },
      fields: [
        {
          name: 'headline',
          type: 'text',
          localized: true,
          label: { de: 'Überschrift', en: 'Headline' },
        },
        {
          name: 'subtitle',
          type: 'text',
          localized: true,
          label: { de: 'Untertitel', en: 'Subtitle' },
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: { de: 'Über Martina', en: 'About Martina' },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: { de: 'Bild', en: 'Image' },
        },
        {
          name: 'text',
          type: 'richText',
          localized: true,
          label: { de: 'Text', en: 'Text' },
        },
      ],
    },
    {
      name: 'details',
      type: 'array',
      label: { de: 'Details', en: 'Details' },
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: { de: 'Icon', en: 'Icon' },
          options: [
            { label: 'Users', value: 'users' },
            { label: 'Calendar', value: 'calendar' },
            { label: 'Heart', value: 'heart' },
            { label: 'Shield', value: 'shield' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          label: { de: 'Titel', en: 'Title' },
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
          label: { de: 'Beschreibung', en: 'Description' },
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: { de: 'Kontakt', en: 'Contact' },
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          localized: true,
          label: { de: 'CTA-Text', en: 'CTA Text' },
        },
        {
          name: 'phone',
          type: 'text',
          label: { de: 'Telefon', en: 'Phone' },
        },
        {
          name: 'address',
          type: 'text',
          label: { de: 'Adresse', en: 'Address' },
        },
        {
          name: 'email',
          type: 'email',
          label: { de: 'E-Mail', en: 'Email' },
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          localized: true,
          label: { de: 'Meta-Titel', en: 'Meta Title' },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          localized: true,
          label: { de: 'Meta-Beschreibung', en: 'Meta Description' },
        },
      ],
    },
  ],
}
