'use client'

import { Users, Calendar, Heart, Shield } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { StaggerItem } from '@/components/animations/StaggerItem'
import type { DetailItem, DetailIcon } from '@/types/kinderyoga'

const iconMap: Record<DetailIcon, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  users: Users,
  calendar: Calendar,
  heart: Heart,
  shield: Shield,
}

const iconColors: Record<DetailIcon, string> = {
  users: 'text-ky-lavender bg-ky-lavender/15',
  calendar: 'text-ky-sage bg-ky-sage/15',
  heart: 'text-ky-peach bg-ky-peach/20',
  shield: 'text-ky-lavender bg-ky-lavender/15',
}

interface DetailsItemCardProps {
  item: DetailItem
}

function DetailItemCard({ item }: DetailsItemCardProps) {
  const icon = item.icon ?? 'users'
  const Icon = iconMap[icon]
  const colorClass = iconColors[icon]

  return (
    <StaggerItem>
      <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/60 border border-ky-lavender/10 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className={`p-3 rounded-xl ${colorClass}`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-heading text-xl text-ky-charcoal mb-1.5">{item.title ?? ''}</h3>
          <p className="text-ky-warm-grey text-sm leading-relaxed">{item.description ?? ''}</p>
        </div>
      </div>
    </StaggerItem>
  )
}

interface DetailsSectionProps {
  details: DetailItem[]
}

export function DetailsSection({ details }: DetailsSectionProps) {
  const t = useTranslations('details')

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-ky-sage/5 to-transparent" id="details">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-ky-charcoal">{t('heading')}</h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.1}
        >
          {details.map((item, i) => (
            <DetailItemCard key={item.id ?? i} item={item} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
