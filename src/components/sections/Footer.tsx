'use client'

import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { Phone, MapPin } from 'lucide-react'

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
    <footer className="bg-ky-charcoal text-white/80 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-heading text-white text-2xl mb-1">Martina Partsch</p>
            <p className="text-white/50 text-sm">Kinderyoga</p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`tel:${displayPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <Phone size={14} strokeWidth={1.5} />
              {displayPhone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} strokeWidth={1.5} />
              <span>{displayAddress}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          {/* Copyright */}
          <p>{t('copyright')}</p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="hover:text-white/70 transition-colors duration-150">
              {t('impressum')}
            </Link>
            <Link href="/datenschutz" className="hover:text-white/70 transition-colors duration-150">
              {t('datenschutz')}
            </Link>
            <button
              onClick={switchLocale}
              className="hover:text-white/70 transition-colors duration-150 cursor-pointer"
              aria-label={t('switchLanguage')}
            >
              {locale === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
