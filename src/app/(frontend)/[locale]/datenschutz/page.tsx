import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, Leaf } from 'lucide-react'

export default async function DatenschutzPage({
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
        <h1 className="font-heading text-4xl md:text-5xl text-ky-charcoal mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-ky-charcoal/65 leading-relaxed">
          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Martina Partsch
              <br />
              Am Lohfeld 5, 83125 Eggstätt
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
              3. Datenerfassung auf dieser Website
            </h2>
            <p>
              Diese Website erhebt beim Besuch automatisch technische Daten (Server-Log-Dateien),
              die Ihr Browser übermittelt. Hierzu gehören Browsertyp, Betriebssystem, Referrer-URL,
              Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Diese Daten sind
              nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">4. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco,
              California 94104, USA gehostet. Details entnehmen Sie der Datenschutzerklärung von
              Vercel:{' '}
              <span className="text-ky-charcoal/40">vercel.com/legal/privacy-policy</span>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ky-charcoal text-base mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
