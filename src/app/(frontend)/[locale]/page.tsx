import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  return <HomePageContent params={params} />
}

async function HomePageContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div>
      <h1>Kinderyoga</h1>
      <p>Coming soon.</p>
    </div>
  )
}
