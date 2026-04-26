'use client'

import { Phone, MapPin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { StaggerItem } from '@/components/animations/StaggerItem'
import type { ContactData } from '@/types/kinderyoga'

interface ContactSectionProps {
  contact?: ContactData | null
}

export function ContactSection({ contact }: ContactSectionProps) {
  const t = useTranslations('contact')

  const phone = contact?.phone ?? '+49 1708764438'
  const address = contact?.address ?? 'Am Lohfeld 5, 83125 Eggstätt'
  const ctaText = contact?.ctaText ?? 'Jetzt Platz sichern'
  const email = contact?.email

  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-ky-lavender/15 via-ky-cream to-ky-peach/10"
      id="contact"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-ky-charcoal mb-4">
            {t('heading')}
          </h2>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-3 mt-6 px-10 py-4 rounded-full bg-ky-lavender text-ky-charcoal font-medium text-lg shadow-lg shadow-ky-lavender/30 hover:bg-ky-lavender/80 hover:shadow-xl hover:shadow-ky-lavender/40 transition-all duration-200 cursor-pointer"
            aria-label={`${ctaText} – ${t('callNow')} ${phone}`}
          >
            <Phone size={20} strokeWidth={2} />
            {ctaText}
          </a>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {/* Phone */}
          <StaggerItem>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 border border-ky-lavender/10 shadow-sm">
              <div className="p-3 rounded-xl bg-ky-lavender/15 text-ky-lavender mb-4">
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-ky-warm-grey mb-2">
                {t('phone')}
              </span>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-ky-charcoal font-medium hover:text-ky-lavender transition-colors duration-150 cursor-pointer"
              >
                {phone}
              </a>
            </div>
          </StaggerItem>

          {/* Address */}
          <StaggerItem>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 border border-ky-sage/10 shadow-sm">
              <div className="p-3 rounded-xl bg-ky-sage/15 text-ky-sage mb-4">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-ky-warm-grey mb-2">
                {t('address')}
              </span>
              <address className="text-ky-charcoal not-italic leading-relaxed text-sm">
                {address.split(', ').map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </StaggerItem>

          {/* Email */}
          <StaggerItem>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 border border-ky-peach/10 shadow-sm">
              <div className="p-3 rounded-xl bg-ky-peach/20 text-ky-peach mb-4">
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-ky-warm-grey mb-2">
                {t('email')}
              </span>
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="text-ky-charcoal font-medium hover:text-ky-lavender transition-colors duration-150 cursor-pointer text-sm break-all"
                >
                  {email}
                </a>
              ) : (
                <span className="text-ky-warm-grey text-sm italic">Auf Anfrage</span>
              )}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
