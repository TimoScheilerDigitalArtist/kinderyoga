'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { ContactData } from '@/types/kinderyoga'

const EXPO = [0.22, 1, 0.36, 1] as const

interface ContactSectionProps {
  contact?: ContactData | null
}

export function ContactSection({ contact }: ContactSectionProps) {
  const reduced = useReducedMotion()

  const phone = contact?.phone ?? '+49 1708764438'
  const address = contact?.address ?? 'Am Lohfeld 5, 83125 Eggstätt'
  const ctaText = contact?.ctaText ?? 'Jetzt Platz sichern'
  const email = contact?.email ?? 'info@kinderyoga.fit'

  return (
    <section className="relative py-28 md:py-36 bg-ky-lavender" id="contact">
      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-60" aria-hidden="true" />

      {/* Blob wrapper – clips without cutting section top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large white blob – top right */}
        <motion.div
          className="absolute top-4 -right-20 w-96 h-96 opacity-20"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              fill="white"
              d="M44.5,-67.6C58.4,-61.4,70.8,-50.2,77.1,-36.3C83.4,-22.4,83.7,-5.8,80.2,9.8C76.7,25.4,69.4,40,59.1,51.6C48.8,63.2,35.5,71.8,21.1,75.7C6.7,79.6,-8.8,78.8,-22.9,74.3C-37,69.8,-49.7,61.6,-58.5,50C-67.3,38.4,-72.2,23.4,-73.6,7.8C-75,-7.8,-72.9,-24,-66,-37.5C-59.1,-51,-47.4,-61.8,-34.4,-68.4C-21.4,-75,-7.5,-77.4,5.6,-75.2C18.7,-73,30.6,-57.8,44.5,-67.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>

        {/* Peach blob – bottom left */}
        <motion.div
          className="absolute -bottom-12 -left-12 w-72 h-72 opacity-20"
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              fill="#F5C7A9"
              d="M49.2,-61.4C63.3,-54.4,74,-39.9,77.5,-24.1C81,-8.3,77.3,8.8,70.4,23.6C63.5,38.4,53.5,50.9,40.9,59.4C28.3,67.9,13.2,72.4,-1.4,74C-16,75.6,-32,74.3,-45.2,67.2C-58.4,60.1,-68.8,47.2,-72.4,32.7C-76,18.2,-72.8,2.1,-68.4,-12.9C-64,-27.9,-58.4,-41.8,-48.4,-49.4C-38.4,-57,-19.2,-58.3,-1.5,-56.6C16.2,-54.9,35.1,-68.4,49.2,-61.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>

        {/* Small white blob – center left */}
        <motion.div
          className="absolute top-1/2 -left-16 w-48 h-48 opacity-15"
          animate={reduced ? {} : { rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              fill="white"
              d="M39.8,-52.6C51.8,-47.3,62,-36.2,67.2,-22.9C72.4,-9.6,72.6,5.9,68.3,20C64,34.1,55.2,46.8,43.6,54.5C32,62.2,17.5,64.9,2.4,62.1C-12.7,59.3,-28.4,51.1,-40.1,40.1C-51.8,29.1,-59.5,15.3,-60.1,1.2C-60.7,-12.9,-54.2,-27.2,-44.7,-37.5C-35.2,-47.8,-22.7,-54.1,-9.4,-56.9C3.9,-59.7,27.8,-57.9,39.8,-52.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>

        {/* Small peach accent – top center */}
        <motion.div
          className="absolute top-12 left-1/3 w-24 h-24 opacity-25"
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              fill="#F5C7A9"
              d="M44.5,-67.6C58.4,-61.4,70.8,-50.2,77.1,-36.3C83.4,-22.4,83.7,-5.8,80.2,9.8C76.7,25.4,69.4,40,59.1,51.6C48.8,63.2,35.5,71.8,21.1,75.7C6.7,79.6,-8.8,78.8,-22.9,74.3C-37,69.8,-49.7,61.6,-58.5,50C-67.3,38.4,-72.2,23.4,-73.6,7.8C-75,-7.8,-72.9,-24,-66,-37.5C-59.1,-51,-47.4,-61.8,-34.4,-68.4C-21.4,-75,-7.5,-77.4,5.6,-75.2C18.7,-73,30.6,-57.8,44.5,-67.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-6 max-w-4xl text-center">

        {/* Label */}
        <ScrollReveal className="mb-4" y={30}>
          <p className="text-white/50 font-semibold text-sm tracking-widest uppercase">
            Bereit für den nächsten Schritt?
          </p>
        </ScrollReveal>

        {/* Headline */}
        <div className="overflow-hidden text-center mb-14">
          <motion.h2
            className="font-heading text-5xl md:text-7xl text-ky-charcoal leading-tight"
            initial={reduced ? {} : { y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: EXPO, delay: 0.1 }}
          >
            Meld dich einfach.
          </motion.h2>
        </div>

        {/* Main CTA */}
        <ScrollReveal className="mb-12" delay={0.2} y={30}>
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
        </ScrollReveal>

        {/* Simple contact details */}
        <ScrollReveal delay={0.35} y={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-ky-charcoal/55 text-sm">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-ky-charcoal/80 transition-colors duration-150 cursor-pointer"
            >
              <Mail size={14} strokeWidth={1.5} />
              {email}
            </a>
            <span className="hidden sm:block w-px h-4 bg-ky-charcoal/20" />
            <div className="flex items-center gap-2">
              <MapPin size={14} strokeWidth={1.5} />
              {address}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Wave into Footer */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#fff9f5" />
        </svg>
      </div>
    </section>
  )
}
