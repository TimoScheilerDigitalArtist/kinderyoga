'use client'

import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { Phone, MapPin, Leaf } from 'lucide-react'

interface FooterSectionProps {
  phone?: string
  address?: string
}

export function FooterSection({ phone, address }: FooterSectionProps) {
  const t = useTranslations('footer')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const displayPhone = phone ?? '+49 1708764438'
  const displayAddress = address ?? 'Am Lohfeld 5, 83125 Eggstätt'

  function switchLocale() {
    const next = locale === 'de' ? 'en' : 'de'
    router.push(pathname, { locale: next })
  }

  return (
    <footer className="bg-ky-charcoal text-white/60 py-14">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-10 pb-10 border-b border-white/8">
          {/* Brand identity */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={16} strokeWidth={1.5} className="text-ky-sage" />
              <p className="font-heading text-white text-2xl leading-none">Martina Partsch</p>
            </div>
            <p className="text-white/35 text-sm pl-6">Kinderyoga in Eggstätt</p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href={`tel:${displayPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <Phone size={13} strokeWidth={1.5} className="text-ky-lavender/60" />
              {displayPhone}
            </a>
            <div className="flex items-center gap-2.5">
              <MapPin size={13} strokeWidth={1.5} className="text-ky-sage/60" />
              <span>{displayAddress}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>{t('copyright')}</p>

          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white/60 transition-colors duration-150">
              {t('impressum')}
            </Link>
            <Link href="/datenschutz" className="hover:text-white/60 transition-colors duration-150">
              {t('datenschutz')}
            </Link>
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 hover:text-white/60 transition-colors duration-150 cursor-pointer"
              aria-label={t('switchLanguage')}
            >
              <span className="w-1 h-1 rounded-full bg-current" />
              {locale === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
