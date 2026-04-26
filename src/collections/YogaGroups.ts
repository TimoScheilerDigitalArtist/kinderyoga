import type { CollectionConfig } from 'payload'

export const YogaGroups: CollectionConfig = {
  slug: 'yoga-groups',
  labels: {
    singular: { de: 'Yoga-Gruppe', en: 'Yoga Group' },
    plural: { de: 'Yoga-Gruppen', en: 'Yoga Groups' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'ageRange', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      label: { de: 'Titel', en: 'Title' },
    },
    {
      name: 'ageRange',
      type: 'text',
      label: { de: 'Altersgruppe', en: 'Age Range' },
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
      label: { de: 'Beschreibung', en: 'Description' },
    },
    {
      name: 'icon',
      type: 'select',
      label: { de: 'Icon', en: 'Icon' },
      options: [
        { label: 'Butterfly', value: 'butterfly' },
        { label: 'Star', value: 'star' },
        { label: 'Tree', value: 'tree' },
        { label: 'Mountain', value: 'mountain' },
        { label: 'Moon', value: 'moon' },
        { label: 'Wave', value: 'wave' },
      ],
    },
    {
      name: 'color',
      type: 'select',
      label: { de: 'Farbe', en: 'Color' },
      options: [
        { label: 'Lavender', value: 'lavender' },
        { label: 'Peach', value: 'peach' },
        { label: 'Sage', value: 'sage' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: { de: 'Reihenfolge', en: 'Order' },
      defaultValue: 0,
    },
  ],
}
