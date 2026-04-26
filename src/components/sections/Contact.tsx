'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { ContactData } from '@/types/kinderyoga'

const EXPO = [0.22, 1, 0.36, 1] as const

interface ContactSectionProps {
  contact?: ContactData | null
}

export function ContactSection({ contact }: ContactSectionProps) {
  const t = useTranslations('contact')
  const reduced = useReducedMotion()

  const phone = contact?.phone ?? '+49 1708764438'
  const address = contact?.address ?? 'Am Lohfeld 5, 83125 Eggstätt'
  const ctaText = contact?.ctaText ?? 'Jetzt Platz sichern'
  const email = contact?.email

  const addressLines = address.split(', ')

  return (
    <section className="relative py-28 md:py-36 bg-ky-lavender overflow-hidden" id="contact">
      {/* Grain texture on lavender */}
      <div className="absolute inset-0 grain-overlay opacity-60" aria-hidden="true" />

      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 opacity-20 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="white"
            d="M44.5,-67.6C58.4,-61.4,70.8,-50.2,77.1,-36.3C83.4,-22.4,83.7,-5.8,80.2,9.8C76.7,25.4,69.4,40,59.1,51.6C48.8,63.2,35.5,71.8,21.1,75.7C6.7,79.6,-8.8,78.8,-22.9,74.3C-37,69.8,-49.7,61.6,-58.5,50C-67.3,38.4,-72.2,23.4,-73.6,7.8C-75,-7.8,-72.9,-24,-66,-37.5C-59.1,-51,-47.4,-61.8,-34.4,-68.4C-21.4,-75,-7.5,-77.4,5.6,-75.2C18.7,-73,30.6,-57.8,44.5,-67.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 opacity-15 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F5C7A9"
            d="M49.2,-61.4C63.3,-54.4,74,-39.9,77.5,-24.1C81,-8.3,77.3,8.8,70.4,23.6C63.5,38.4,53.5,50.9,40.9,59.4C28.3,67.9,13.2,72.4,-1.4,74C-16,75.6,-32,74.3,-45.2,67.2C-58.4,60.1,-68.8,47.2,-72.4,32.7C-76,18.2,-72.8,2.1,-68.4,-12.9C-64,-27.9,-58.4,-41.8,-48.4,-49.4C-38.4,-57,-19.2,-58.3,-1.5,-56.6C16.2,-54.9,35.1,-68.4,49.2,-61.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 max-w-5xl">

        {/* ── Top label ──────────────────────────────────────── */}
        <ScrollReveal className="text-center mb-4" y={30}>
          <p className="text-white/50 font-semibold text-sm tracking-widest uppercase">
            Bereit für den nächsten Schritt?
          </p>
        </ScrollReveal>

        {/* ── Big headline ───────────────────────────────────── */}
        <div className="overflow-hidden text-center mb-14">
          <motion.h2
            className="font-heading text-5xl md:text-7xl text-ky-charcoal leading-tight"
            initial={reduced ? {} : { y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: EXPO, delay: 0.1 }}
          >
            {t('heading')}
          </motion.h2>
        </div>

        {/* ── Main CTA – phone number ────────────────────────── */}
        <ScrollReveal className="text-center mb-16" delay={0.2} y={30}>
          <motion.a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-ky-charcoal text-ky-cream text-xl font-semibold shadow-2xl shadow-ky-charcoal/30 hover:bg-ky-charcoal/90 hover:shadow-[0_32px_64px_rgba(58,58,58,0.35)] hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
            whileHover={reduced ? {} : { scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Phone size={20} strokeWidth={2} />
            <span>{ctaText}</span>
            <ArrowUpRight
              size={18}
              className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
            />
          </motion.a>
          <p className="mt-4 text-ky-charcoal/50 text-sm font-medium">{phone}</p>
        </ScrollReveal>

        {/* ── Contact cards ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phone */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EXPO, delay: 0.15 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/25"
          >
            <div className="p-3 rounded-xl bg-white/20 mb-4">
              <Phone size={20} strokeWidth={1.5} className="text-ky-charcoal" />
            </div>
            <span className="text-ky-charcoal/50 text-xs font-semibold uppercase tracking-wider mb-2">
              {t('phone')}
            </span>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-ky-charcoal font-semibold hover:text-ky-charcoal/70 transition-colors cursor-pointer"
            >
              {phone}
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EXPO, delay: 0.25 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/25"
          >
            <div className="p-3 rounded-xl bg-white/20 mb-4">
              <MapPin size={20} strokeWidth={1.5} className="text-ky-charcoal" />
            </div>
            <span className="text-ky-charcoal/50 text-xs font-semibold uppercase tracking-wider mb-2">
              {t('address')}
            </span>
            <address className="text-ky-charcoal not-italic text-sm leading-relaxed font-medium">
              {addressLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </address>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EXPO, delay: 0.35 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/25"
          >
            <div className="p-3 rounded-xl bg-white/20 mb-4">
              <Mail size={20} strokeWidth={1.5} className="text-ky-charcoal" />
            </div>
            <span className="text-ky-charcoal/50 text-xs font-semibold uppercase tracking-wider mb-2">
              {t('email')}
            </span>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="text-ky-charcoal font-semibold text-sm hover:text-ky-charcoal/70 transition-colors cursor-pointer break-all"
              >
                {email}
              </a>
            ) : (
              <span className="text-ky-charcoal/40 text-sm">Auf Anfrage</span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Wave into Footer */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#3a3a3a" />
        </svg>
      </div>
    </section>
  )
}
