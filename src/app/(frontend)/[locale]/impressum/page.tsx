import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, Leaf } from 'lucide-react'

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-ky-cream">
      {/* Header */}
      <header className="border-b border-ky-charcoal/8 py-5 px-6">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-ky-charcoal/50 hover:text-ky-charcoal transition-colors duration-150 text-sm font-medium cursor-pointer"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Zurück
          </Link>
          <div className="flex items-center gap-2">
            <Leaf size={14} strokeWidth={1.5} className="text-ky-sage" />
            <span className="font-heading text-ky-charcoal text-lg leading-none">
              Martina Partsch
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <h1 className="font-heading text-4xl md:text-5xl text-ky-charcoal mb-10">Impressum</h1>

        <div className="space-y-8 text-ky-charcoal/65 leading-relaxed">
          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Martina Partsch
              <br />
              Am Lohfeld 5
              <br />
              83125 Eggstätt
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">Kontakt</h2>
            <p>
              Telefon:{' '}
              <a
                href="tel:+491708764438"
                className="hover:text-ky-charcoal transition-colors cursor-pointer"
              >
                +49 1708764438
              </a>
              <br />
              E-Mail:{' '}
              <a
                href="mailto:info@kinderyoga.fit"
                className="hover:text-ky-charcoal transition-colors cursor-pointer"
              >
                info@kinderyoga.fit
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Martina Partsch
              <br />
              Am Lohfeld 5
              <br />
              83125 Eggstätt
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
              übernommen werden.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
