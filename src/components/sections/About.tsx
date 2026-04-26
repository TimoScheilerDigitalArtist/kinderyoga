'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion } from 'motion/react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ParallaxImage } from '@/components/animations/ParallaxImage'
import { SerializeLexical } from '@/components/ui/SerializeLexical'
import type { AboutData, LexicalContent, MediaData } from '@/types/kinderyoga'

const EXPO = [0.22, 1, 0.36, 1] as const

interface AboutSectionProps {
  image?: AboutData['image']
  text?: LexicalContent | null
}

export function AboutSection({ image, text }: AboutSectionProps) {
  const t = useTranslations('about')
  const reduced = useReducedMotion()

  const mediaImage = image && typeof image !== 'string' ? (image as MediaData) : null
  const hasPayloadImage = mediaImage?.url != null

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

      {/* Small sage blob bottom left */}
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 opacity-10 pointer-events-none"
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
                {hasPayloadImage ? (
                  <Image
                    src={mediaImage.url!}
                    alt={mediaImage.alt || t('imageAlt')}
                    width={mediaImage.width ?? 600}
                    height={mediaImage.height ?? 750}
                    className="w-full h-full object-cover scale-110"
                  />
                ) : (
                  <Image
                    src="/martina.jpg"
                    alt={t('imageAlt')}
                    width={593}
                    height={592}
                    className="w-full h-full object-cover object-top scale-110"
                    priority
                  />
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
            <div className="overflow-hidden pb-3">
              <motion.h2
                className="font-heading text-5xl md:text-6xl text-ky-charcoal leading-none"
                initial={reduced ? {} : { y: 90, opacity: 0 }}
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
                  className="text-ky-charcoal/65 text-lg leading-relaxed space-y-4"
                />
              ) : (
                <div className="text-ky-charcoal/65 text-lg leading-relaxed space-y-4">
                  <p>
                    Yoga begleitet Martina seit ihrem neunten Lebensjahr – von den ersten
                    neugierigen Atemübungen bis zur Ausbildung zur Yogalehrerin. In ihrer
                    täglichen Arbeit mit Kindern hat sie gespürt, wie groß der Bedarf an
                    körperlichem Ausgleich wirklich ist: Kinder, die im Schulalltag unter
                    Druck stehen, die kaum noch zur Ruhe kommen, deren Körper nach Bewegung
                    sucht und deren Geist nach Stille hungert.
                  </p>
                  <p>
                    Ihr Anliegen ist es, jedem Kind einen Raum zu schenken, in dem Körper,
                    Geist und Seele wieder in Einklang kommen dürfen – ohne Leistungsdruck,
                    ohne Erwartungen. Nur Yoga, Atem und die Freude am Bewegen.
                  </p>
                </div>
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
