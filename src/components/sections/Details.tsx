'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Users, Calendar, Heart, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { DetailItem, DetailIcon } from '@/types/kinderyoga'

const EXPO = [0.22, 1, 0.36, 1] as const

const iconMap: Record<
  DetailIcon,
  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
  users: Users,
  calendar: Calendar,
  heart: Heart,
  shield: Shield,
}

const iconStyles: Record<DetailIcon, { ring: string; bg: string; icon: string }> = {
  users: { ring: 'ring-ky-lavender/30', bg: 'bg-ky-lavender/15', icon: 'text-ky-lavender' },
  calendar: { ring: 'ring-ky-sage/30', bg: 'bg-ky-sage/15', icon: 'text-ky-sage' },
  heart: { ring: 'ring-ky-peach/40', bg: 'bg-ky-peach/20', icon: 'text-ky-peach' },
  shield: { ring: 'ring-ky-lavender/30', bg: 'bg-ky-lavender/15', icon: 'text-ky-lavender' },
}

// Subtle number/counter label for each detail type
const headlineMap: Record<DetailIcon, string> = {
  users: 'Max. 8',
  calendar: 'Feste',
  heart: 'Ohne',
  shield: '100%',
}

const headlineSubMap: Record<DetailIcon, string> = {
  users: 'Kinder',
  calendar: 'Zeiten',
  heart: 'Druck',
  shield: 'Sicher',
}

interface DetailsItemProps {
  item: DetailItem
  index: number
}

function DetailsItem({ item, index }: DetailsItemProps) {
  const reduced = useReducedMotion()
  const icon = item.icon ?? 'users'
  const Icon = iconMap[icon]
  const style = iconStyles[icon]

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, ease: EXPO, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon circle with ring */}
      <motion.div
        className={`relative w-24 h-24 rounded-full ${style.bg} ring-2 ${style.ring} flex items-center justify-center mb-6`}
        whileInView={reduced ? {} : { scale: [0.7, 1.08, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EXPO, delay: index * 0.1 + 0.15 }}
      >
        <Icon size={36} strokeWidth={1.25} className={style.icon} />
      </motion.div>

      {/* Big display number/word */}
      <div className="mb-1">
        <span className="font-heading text-4xl text-ky-charcoal leading-none">
          {headlineMap[icon]}
        </span>
        <span className="block font-heading text-xl text-ky-charcoal/50 leading-tight">
          {headlineSubMap[icon]}
        </span>
      </div>

      {/* Title */}
      <p className="font-semibold text-ky-charcoal text-sm mt-3 mb-1.5">{item.title ?? ''}</p>

      {/* Description */}
      <p className="text-ky-warm-grey text-sm leading-relaxed max-w-45">
        {item.description ?? ''}
      </p>
    </motion.div>
  )
}

interface DetailsSectionProps {
  details: DetailItem[]
}

export function DetailsSection({ details }: DetailsSectionProps) {
  const t = useTranslations('details')

  return (
    <section
      className="relative py-28 md:py-36 bg-[#f0f5f0] overflow-hidden"
      id="details"
    >
      {/* Decorative large background blob */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#A8C5A0"
            d="M39.8,-52.6C51.8,-47.3,62,-36.2,67.2,-22.9C72.4,-9.6,72.6,5.9,68.3,20C64,34.1,55.2,46.8,43.6,54.5C32,62.2,17.5,64.9,2.4,62.1C-12.7,59.3,-28.4,51.1,-40.1,40.1C-51.8,29.1,-59.5,15.3,-60.1,1.2C-60.7,-12.9,-54.2,-27.2,-44.7,-37.5C-35.2,-47.8,-22.7,-54.1,-9.4,-56.9C3.9,-59.7,27.8,-57.9,39.8,-52.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 max-w-5xl">
        <ScrollReveal className="text-center mb-20" y={50}>
          <p className="text-ky-peach font-semibold text-sm tracking-widest uppercase mb-4">
            Wie es funktioniert
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-ky-charcoal">{t('heading')}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {details.map((item, i) => (
            <DetailsItem key={item.id ?? i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Wave into Contact */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1350,20 1440,40 L1440,80 L0,80 Z"
            fill="#c4b5e0"
          />
        </svg>
      </div>
    </section>
  )
}
