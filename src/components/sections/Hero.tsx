'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ChevronDown, Star, Moon, Sparkles, Flower2 } from 'lucide-react'
import { FloatingElement } from '@/components/animations/FloatingElement'
import { SplitText } from '@/components/animations/SplitText'
import { useTranslations } from 'next-intl'

interface HeroSectionProps {
  headline: string
  subtitle: string
}

export function HeroSection({ headline, subtitle }: HeroSectionProps) {
  const t = useTranslations('hero')
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 500], reduced ? [1, 1] : [1, 0])
  const y = useTransform(scrollY, [0, 500], reduced ? [0, 0] : [0, 80])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-bg-gradient" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <FloatingElement
          duration={6}
          delay={0}
          className="absolute top-20 right-16 text-ky-lavender opacity-50 md:top-24 md:right-24"
        >
          <Star size={44} strokeWidth={1} />
        </FloatingElement>

        <FloatingElement
          duration={8}
          delay={1.2}
          className="absolute top-36 left-12 text-ky-peach opacity-40 md:left-20"
        >
          <Moon size={56} strokeWidth={1} />
        </FloatingElement>

        <FloatingElement
          duration={7}
          delay={0.6}
          className="absolute bottom-36 right-24 text-ky-sage opacity-35 hidden md:block"
        >
          <Sparkles size={40} strokeWidth={1} />
        </FloatingElement>

        <FloatingElement
          duration={5}
          delay={2}
          className="absolute bottom-28 left-16 text-ky-lavender opacity-25 hidden md:block"
        >
          <Flower2 size={36} strokeWidth={1} />
        </FloatingElement>

        <FloatingElement
          duration={9}
          delay={0.3}
          className="absolute top-1/2 left-8 text-ky-sage opacity-20 hidden lg:block"
          yRange={20}
        >
          <Star size={24} strokeWidth={1} />
        </FloatingElement>
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-ky-charcoal mb-6 leading-tight">
            <SplitText text={headline} stagger={0.08} delay={0.1} />
          </h1>
        </motion.div>

        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
          className="text-lg md:text-xl lg:text-2xl text-ky-warm-grey max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        aria-label={t('scrollDown')}
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} className="text-ky-warm-grey" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
