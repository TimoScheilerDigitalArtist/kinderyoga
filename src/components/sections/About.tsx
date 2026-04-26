'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion } from 'motion/react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ParallaxImage } from '@/components/animations/ParallaxImage'
import { SerializeLexical } from '@/components/ui/SerializeLexical'
import type { AboutData, LexicalContent, MediaData } from '@/types/kinderyoga'

const EXPO = [0.22, 1, 0.36, 1] as const

// Yoga pose SVG – used as placeholder until Martina uploads her photo
function YogaPoseSVG() {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Body */}
      <circle cx="120" cy="62" r="28" fill="#C4B5E0" opacity="0.8" />
      {/* Torso */}
      <path
        d="M100 90 C100 90 90 140 95 170 L145 170 C150 140 140 90 140 90 Z"
        fill="#C4B5E0"
        opacity="0.6"
      />
      {/* Left arm (warrior pose) */}
      <path
        d="M100 110 C80 120 55 115 40 108"
        stroke="#A8C5A0"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm */}
      <path
        d="M140 110 C160 120 185 115 200 108"
        stroke="#A8C5A0"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leg */}
      <path
        d="M100 170 C90 200 75 230 65 260"
        stroke="#C4B5E0"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Right leg (bent) */}
      <path
        d="M140 170 C150 200 160 220 175 240"
        stroke="#C4B5E0"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Decorative circles */}
      <circle cx="40" cy="80" r="6" fill="#F5C7A9" opacity="0.6" />
      <circle cx="200" cy="70" r="4" fill="#A8C5A0" opacity="0.5" />
      <circle cx="170" cy="280" r="5" fill="#F5C7A9" opacity="0.4" />
    </svg>
  )
}

interface AboutSectionProps {
  image?: AboutData['image']
  text?: LexicalContent | null
}

export function AboutSection({ image, text }: AboutSectionProps) {
  const t = useTranslations('about')
  const reduced = useReducedMotion()

  const mediaImage = image && typeof image !== 'string' ? (image as MediaData) : null
  const hasImage = mediaImage?.url != null

  return (
    <section className="relative py-28 md:py-36 bg-ky-cream overflow-hidden" id="about">
      {/* Decorative blob background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F5C7A9"
            d="M49.2,-61.4C63.3,-54.4,74,-39.9,77.5,-24.1C81,-8.3,77.3,8.8,70.4,23.6C63.5,38.4,53.5,50.9,40.9,59.4C28.3,67.9,13.2,72.4,-1.4,74C-16,75.6,-32,74.3,-45.2,67.2C-58.4,60.1,-68.8,47.2,-72.4,32.7C-76,18.2,-72.8,2.1,-68.4,-12.9C-64,-27.9,-58.4,-41.8,-48.4,-49.4C-38.4,-57,-19.2,-58.3,-1.5,-56.6C16.2,-54.9,35.1,-68.4,49.2,-61.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Image side ─────────────────────────────────────── */}
          <ScrollReveal delay={0.05} y={60}>
            <div className="relative">
              {/* Rotated decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-ky-lavender/20 rotate-3 pointer-events-none" />

              <ParallaxImage
                className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-2xl shadow-ky-lavender/15"
                offset={45}
              >
                {hasImage ? (
                  <Image
                    src={mediaImage.url!}
                    alt={mediaImage.alt || t('imageAlt')}
                    width={mediaImage.width ?? 600}
                    height={mediaImage.height ?? 750}
                    className="w-full h-full object-cover scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-ky-lavender/20 via-ky-peach/15 to-ky-sage/10 flex items-center justify-center">
                    <YogaPoseSVG />
                  </div>
                )}
              </ParallaxImage>

              {/* Floating accent badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-ky-peach text-ky-charcoal px-5 py-3 rounded-2xl shadow-lg shadow-ky-peach/30 text-sm font-semibold"
                initial={reduced ? {} : { opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: EXPO }}
              >
                Zertifizierte Yogalehrerin ✦
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ── Text side ──────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Section label */}
            <ScrollReveal delay={0.1} y={30}>
              <p className="text-ky-lavender font-semibold text-sm tracking-widest uppercase">
                {t('heading')}
              </p>
            </ScrollReveal>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.h2
                className="font-heading text-5xl md:text-6xl text-ky-charcoal leading-[0.95]"
                initial={reduced ? {} : { y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease: EXPO, delay: 0.15 }}
              >
                Yoga aus
                <br />
                <em>Leidenschaft.</em>
              </motion.h2>
            </div>

            {/* Body text */}
            <ScrollReveal delay={0.25} y={30}>
              {text ? (
                <SerializeLexical
                  content={text}
                  className="text-ky-charcoal/65 text-lg leading-relaxed space-y-3"
                />
              ) : (
                <p className="text-ky-charcoal/65 text-lg leading-relaxed">
                  Ich bin Martina – Yogalehrerin aus Leidenschaft. Mein Herz schlägt dafür,
                  Kindern einen Raum zu schenken, in dem sie ganz bei sich ankommen dürfen. In
                  kleinen Gruppen üben wir gemeinsam, wie Stille sich gut anfühlen kann.
                </p>
              )}
            </ScrollReveal>

            {/* Signature line */}
            <ScrollReveal delay={0.35} y={20}>
              <div className="flex items-center gap-4 pt-2">
                <div className="h-px w-10 bg-ky-lavender/50" />
                <span className="text-ky-charcoal/40 text-sm font-medium tracking-wider">
                  Martina Partsch · Eggstätt
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
