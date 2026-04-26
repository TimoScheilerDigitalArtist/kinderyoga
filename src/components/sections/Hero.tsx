'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { Phone, ChevronDown, Leaf } from 'lucide-react'
import { useTranslations } from 'next-intl'

// Organic blob shapes – each has a unique path for visual variety
function BlobLavender() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="#C4B5E0"
        d="M44.5,-67.6C58.4,-61.4,70.8,-50.2,77.1,-36.3C83.4,-22.4,83.7,-5.8,80.2,9.8C76.7,25.4,69.4,40,59.1,51.6C48.8,63.2,35.5,71.8,21.1,75.7C6.7,79.6,-8.8,78.8,-22.9,74.3C-37,69.8,-49.7,61.6,-58.5,50C-67.3,38.4,-72.2,23.4,-73.6,7.8C-75,-7.8,-72.9,-24,-66,-37.5C-59.1,-51,-47.4,-61.8,-34.4,-68.4C-21.4,-75,-7.5,-77.4,5.6,-75.2C18.7,-73,30.6,-57.8,44.5,-67.6Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

function BlobPeach() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="#F5C7A9"
        d="M49.2,-61.4C63.3,-54.4,74,-39.9,77.5,-24.1C81,-8.3,77.3,8.8,70.4,23.6C63.5,38.4,53.5,50.9,40.9,59.4C28.3,67.9,13.2,72.4,-1.4,74C-16,75.6,-32,74.3,-45.2,67.2C-58.4,60.1,-68.8,47.2,-72.4,32.7C-76,18.2,-72.8,2.1,-68.4,-12.9C-64,-27.9,-58.4,-41.8,-48.4,-49.4C-38.4,-57,-19.2,-58.3,-1.5,-56.6C16.2,-54.9,35.1,-68.4,49.2,-61.4Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

function BlobSage() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="#A8C5A0"
        d="M39.8,-52.6C51.8,-47.3,62,-36.2,67.2,-22.9C72.4,-9.6,72.6,5.9,68.3,20C64,34.1,55.2,46.8,43.6,54.5C32,62.2,17.5,64.9,2.4,62.1C-12.7,59.3,-28.4,51.1,-40.1,40.1C-51.8,29.1,-59.5,15.3,-60.1,1.2C-60.7,-12.9,-54.2,-27.2,-44.7,-37.5C-35.2,-47.8,-22.7,-54.1,-9.4,-56.9C3.9,-59.7,27.8,-57.9,39.8,-52.6Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

const EXPO = [0.22, 1, 0.36, 1] as const

interface HeroSectionProps {
  headline: string
  subtitle: string
}

export function HeroSection({ headline, subtitle }: HeroSectionProps) {
  const t = useTranslations('hero')
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()

  const bgY = useTransform(scrollY, [0, 600], reduced ? [0, 0] : [0, 120])
  const contentY = useTransform(scrollY, [0, 600], reduced ? [0, 0] : [0, 60])
  const contentOpacity = useTransform(scrollY, [0, 400], reduced ? [1, 1] : [1, 0])

  const lines = headline.split(',').map((s) => s.trim())

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 hero-bg-gradient"
        style={{ y: bgY }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay z-1" aria-hidden="true" />

      {/* ── Blobs ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-2" aria-hidden="true">
        {/* Lavender blob – top right */}
        <motion.div
          className="absolute -top-20 -right-20 w-130 h-130 opacity-60"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          <BlobLavender />
        </motion.div>

        {/* Peach blob – bottom left */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-105 h-105 opacity-50"
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          <BlobPeach />
        </motion.div>

        {/* Sage blob – center left */}
        <motion.div
          className="absolute top-1/3 -left-16 w-70 h-70 opacity-35"
          animate={reduced ? {} : { rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <BlobSage />
        </motion.div>

        {/* Small lavender accent – top left */}
        <motion.div
          className="absolute top-12 left-1/4 w-35 h-35 opacity-25"
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          <BlobLavender />
        </motion.div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Badge */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EXPO }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ky-lavender/40 bg-white/30 backdrop-blur-sm text-ky-charcoal/70 text-sm font-medium mb-10"
        >
          <Leaf size={13} strokeWidth={1.5} className="text-ky-sage" />
          Kinderyoga · Eggstätt · Bayern
        </motion.div>

        {/* Headline – each line wipes up independently */}
        <h1 className="font-heading leading-none tracking-tight mb-6">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden pb-3 -mb-1">
              <motion.span
                className={`block text-[clamp(3.2rem,9vw,7.5rem)] text-ky-charcoal ${i === lines.length - 1 ? 'italic' : ''}`}
                initial={reduced ? {} : { y: 130, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: EXPO, delay: 0.08 + i * 0.13 }}
              >
                {line}
                {i < lines.length - 1 ? ',' : '.'}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Animated gradient rule */}
        <div className="overflow-hidden mb-8">
          <motion.div
            className="h-0.5 bg-linear-to-r from-ky-lavender via-ky-peach to-ky-sage mx-auto"
            style={{ width: '200px' }}
            initial={reduced ? {} : { scaleX: 0, originX: '0%' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EXPO }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-sans text-lg md:text-xl text-ky-charcoal/55 max-w-lg mx-auto mb-12 leading-relaxed"
          initial={reduced ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={reduced ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82, ease: 'easeOut' }}
        >
          <a
            href="tel:+491708764438"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-ky-charcoal text-ky-cream font-semibold text-base shadow-xl shadow-ky-charcoal/20 hover:bg-ky-charcoal/85 hover:shadow-2xl hover:shadow-ky-charcoal/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Phone size={16} strokeWidth={2} />
            Jetzt Platz sichern
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-ky-charcoal/60 font-medium text-base hover:text-ky-charcoal transition-colors duration-200 cursor-pointer"
          >
            Mehr erfahren
            <ChevronDown size={16} strokeWidth={2} />
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-label={t('scrollDown')}
      >
        <motion.div
          className="w-px h-12 bg-linear-to-b from-transparent to-ky-charcoal/25"
          animate={reduced ? {} : { scaleY: [0, 1, 0], originY: '0%' }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ── Wave divider into About ───────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-px" aria-hidden="true">
        <svg
          viewBox="0 0 1440 96"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,48 C240,96 480,0 720,48 C960,96 1200,0 1440,48 L1440,96 L0,96 Z"
            fill="#fff9f5"
          />
        </svg>
      </div>
    </section>
  )
}
