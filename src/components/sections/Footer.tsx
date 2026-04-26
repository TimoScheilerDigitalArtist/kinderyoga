'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Phone, MapPin, Leaf } from 'lucide-react'

interface FooterSectionProps {
  phone?: string
  address?: string
}

export function FooterSection({ phone, address }: FooterSectionProps) {
  const t = useTranslations('footer')

  const displayPhone = phone ?? '+49 1708764438'
  const displayAddress = address ?? 'Am Lohfeld 5, 83125 Eggstätt'

  return (
    <footer className="bg-ky-cream border-t border-ky-charcoal/8 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 pb-8 border-b border-ky-charcoal/8">

          {/* Brand identity */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Leaf size={15} strokeWidth={1.5} className="text-ky-sage" />
              <p className="font-heading text-ky-charcoal text-2xl leading-none">Martina Partsch</p>
            </div>
            <p className="text-ky-charcoal/35 text-sm pl-5.75">Kinderyoga in Eggstätt</p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-2 text-sm text-ky-charcoal/50">
            <a
              href={`tel:${displayPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-2.5 hover:text-ky-charcoal/80 transition-colors duration-150 cursor-pointer"
            >
              <Phone size={13} strokeWidth={1.5} className="text-ky-lavender" />
              {displayPhone}
            </a>
            <div className="flex items-center gap-2.5">
              <MapPin size={13} strokeWidth={1.5} className="text-ky-sage" />
              <span>{displayAddress}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-ky-charcoal/35">
          <p>{t('copyright')}</p>

          <div className="flex items-center gap-5">
            <Link
              href="/impressum"
              className="hover:text-ky-charcoal/60 transition-colors duration-150"
            >
              {t('impressum')}
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-ky-charcoal/60 transition-colors duration-150"
            >
              {t('datenschutz')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
