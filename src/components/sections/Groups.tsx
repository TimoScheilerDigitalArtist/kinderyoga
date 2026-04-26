'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Star, TreePine, Moon, Mountain, Waves, Flower2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { StaggerItem } from '@/components/animations/StaggerItem'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SerializeLexical } from '@/components/ui/SerializeLexical'
import type { YogaGroupData, GroupIcon, GroupColor, LexicalContent } from '@/types/kinderyoga'

const iconMap: Record<GroupIcon, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  butterfly: Flower2,
  star: Star,
  tree: TreePine,
  mountain: Mountain,
  moon: Moon,
  wave: Waves,
}

const colorMap: Record<GroupColor, { bg: string; icon: string; border: string; badge: string }> = {
  lavender: {
    bg: 'bg-ky-lavender/10 hover:bg-ky-lavender/18',
    icon: 'text-ky-lavender bg-ky-lavender/20',
    border: 'border-ky-lavender/20',
    badge: 'bg-ky-lavender/20 text-ky-charcoal/70',
  },
  peach: {
    bg: 'bg-ky-peach/10 hover:bg-ky-peach/18',
    icon: 'text-ky-peach bg-ky-peach/25',
    border: 'border-ky-peach/20',
    badge: 'bg-ky-peach/25 text-ky-charcoal/70',
  },
  sage: {
    bg: 'bg-ky-sage/10 hover:bg-ky-sage/18',
    icon: 'text-ky-sage bg-ky-sage/20',
    border: 'border-ky-sage/20',
    badge: 'bg-ky-sage/20 text-ky-charcoal/70',
  },
}

interface GroupCardProps {
  group: YogaGroupData
}

function GroupCard({ group }: GroupCardProps) {
  const reduced = useReducedMotion()
  const color = colorMap[group.color ?? 'lavender']
  const Icon = iconMap[group.icon ?? 'star']

  return (
    <StaggerItem>
      <motion.div
        whileHover={reduced ? {} : { y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`
          relative rounded-3xl border p-8 h-full cursor-default
          transition-colors duration-300
          ${color.bg} ${color.border}
        `}
      >
        {/* Icon */}
        <div className={`inline-flex rounded-2xl p-3.5 mb-6 ${color.icon}`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>

        {/* Age badge */}
        {group.ageRange && (
          <span
            className={`absolute top-6 right-6 text-xs font-medium px-3 py-1 rounded-full ${color.badge}`}
          >
            {group.ageRange}
          </span>
        )}

        {/* Title */}
        <h3 className="font-heading text-2xl text-ky-charcoal mb-3">{group.title ?? ''}</h3>

        {/* Description */}
        {group.description ? (
          <SerializeLexical
            content={group.description as LexicalContent}
            className="text-ky-charcoal/70 leading-relaxed text-sm md:text-base"
          />
        ) : null}
      </motion.div>
    </StaggerItem>
  )
}

interface GroupsSectionProps {
  groups: YogaGroupData[]
}

export function GroupsSection({ groups }: GroupsSectionProps) {
  const t = useTranslations('groups')

  return (
    <section className="py-24 md:py-32" id="groups">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-ky-charcoal mb-4">{t('heading')}</h2>
          <p className="text-ky-warm-grey text-lg">{t('subheading')}</p>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.15}
          delayChildren={0.1}
        >
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
