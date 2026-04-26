'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Flower2, Star, TreePine, Mountain, Moon, Waves } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SerializeLexical } from '@/components/ui/SerializeLexical'
import type { YogaGroupData, GroupIcon, GroupColor, LexicalContent } from '@/types/kinderyoga'

const EXPO = [0.22, 1, 0.36, 1] as const

const iconMap: Record<GroupIcon, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  butterfly: Flower2,
  star: Star,
  tree: TreePine,
  mountain: Mountain,
  moon: Moon,
  wave: Waves,
}

// Full-opacity card backgrounds + colored shadows + icon backgrounds
const colorMap: Record<
  GroupColor,
  { card: string; shadow: string; icon: string; badge: string; text: string; subtext: string }
> = {
  lavender: {
    card: 'bg-ky-lavender',
    shadow: 'hover:shadow-[0_28px_56px_rgba(196,181,224,0.55)]',
    icon: 'bg-[#a897cc] text-white',
    badge: 'bg-[#b4a5d4] text-white/90',
    text: 'text-ky-charcoal',
    subtext: 'text-ky-charcoal/70',
  },
  sage: {
    card: 'bg-ky-sage',
    shadow: 'hover:shadow-[0_28px_56px_rgba(168,197,160,0.55)]',
    icon: 'bg-[#84a87c] text-white',
    badge: 'bg-[#90b688] text-white/90',
    text: 'text-ky-charcoal',
    subtext: 'text-ky-charcoal/70',
  },
  peach: {
    card: 'bg-ky-peach',
    shadow: 'hover:shadow-[0_28px_56px_rgba(245,199,169,0.55)]',
    icon: 'bg-[#e0a07c] text-white',
    badge: 'bg-[#e8ac88] text-white/90',
    text: 'text-ky-charcoal',
    subtext: 'text-ky-charcoal/70',
  },
}

interface GroupCardProps {
  group: YogaGroupData
  index: number
}

function GroupCard({ group, index }: GroupCardProps) {
  const reduced = useReducedMotion()
  const color = colorMap[group.color ?? 'lavender']
  const Icon = iconMap[group.icon ?? 'star']

  return (
    <motion.article
      initial={reduced ? {} : { opacity: 0, y: 70, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={reduced ? {} : { y: -12, scale: 1.02 }}
      transition={{
        default: { duration: 0.75, ease: EXPO, delay: index * 0.12 },
        y: { type: 'spring', stiffness: 280, damping: 22 },
        scale: { type: 'spring', stiffness: 280, damping: 22 },
      }}
      className={`
        relative rounded-3xl p-8 overflow-hidden cursor-default
        shadow-lg transition-shadow duration-300
        ${color.card} ${color.shadow}
      `}
    >
      {/* Background texture blob */}
      <div className="absolute -top-16 -right-16 w-40 h-40 opacity-20 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="white"
            d="M44.5,-67.6C58.4,-61.4,70.8,-50.2,77.1,-36.3C83.4,-22.4,83.7,-5.8,80.2,9.8C76.7,25.4,69.4,40,59.1,51.6C48.8,63.2,35.5,71.8,21.1,75.7C6.7,79.6,-8.8,78.8,-22.9,74.3C-37,69.8,-49.7,61.6,-58.5,50C-67.3,38.4,-72.2,23.4,-73.6,7.8C-75,-7.8,-72.9,-24,-66,-37.5C-59.1,-51,-47.4,-61.8,-34.4,-68.4C-21.4,-75,-7.5,-77.4,5.6,-75.2C18.7,-73,30.6,-57.8,44.5,-67.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Icon */}
      <motion.div
        className={`inline-flex rounded-2xl p-4 mb-6 ${color.icon}`}
        whileHover={reduced ? {} : { rotate: [0, -8, 8, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon size={30} strokeWidth={1.5} />
      </motion.div>

      {/* Age badge */}
      {group.ageRange && (
        <span className={`absolute top-7 right-7 text-xs font-semibold px-3 py-1 rounded-full ${color.badge}`}>
          {group.ageRange}
        </span>
      )}

      {/* Title */}
      <h3 className={`font-heading text-2xl mb-3 leading-tight ${color.text}`}>
        {group.title ?? ''}
      </h3>

      {/* Description */}
      {group.description ? (
        <SerializeLexical
          content={group.description as LexicalContent}
          className={`leading-relaxed text-[0.95rem] ${color.subtext}`}
        />
      ) : null}
    </motion.article>
  )
}

interface GroupsSectionProps {
  groups: YogaGroupData[]
}

export function GroupsSection({ groups }: GroupsSectionProps) {
  const t = useTranslations('groups')

  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="groups">
      {/* Section bg – slightly off-white for contrast */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-20" y={50}>
          <p className="text-ky-sage font-semibold text-sm tracking-widest uppercase mb-4">
            Für jedes Alter
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-ky-charcoal">
            {t('heading')}
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {groups.map((group, i) => (
            <GroupCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>

      {/* Wave into Details */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#f0f5f0" />
        </svg>
      </div>
    </section>
  )
}
