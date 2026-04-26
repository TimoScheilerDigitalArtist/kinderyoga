import { setRequestLocale } from 'next-intl/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import { GroupsSection } from '@/components/sections/Groups'
import { DetailsSection } from '@/components/sections/Details'
import { ContactSection } from '@/components/sections/Contact'
import { FooterSection } from '@/components/sections/Footer'
import type { HomePageData, YogaGroupData } from '@/types/kinderyoga'

type PageLocale = 'de' | 'en'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const payload = await getPayload({ config })
  const payloadLocale = locale as PageLocale

  const homePage = (await payload.findGlobal({
    slug: 'home-page',
    locale: payloadLocale,
    fallbackLocale: 'de',
  })) as HomePageData

  const groupsResult = await payload.find({
    collection: 'yoga-groups',
    locale: payloadLocale,
    fallbackLocale: 'de',
    sort: 'order',
    limit: 10,
    overrideAccess: true,
  })

  return (
    <>
      <HeroSection
        headline={homePage?.hero?.headline ?? 'Kleine Yogis, große Ruhe'}
        subtitle={homePage?.hero?.subtitle ?? 'Kinderyoga in Eggstätt'}
      />
      <AboutSection image={homePage?.about?.image} text={homePage?.about?.text ?? null} />
      <GroupsSection groups={groupsResult.docs as unknown as YogaGroupData[]} />
      <DetailsSection details={homePage?.details ?? []} />
      <ContactSection contact={homePage?.contact} />
      <FooterSection
        phone={homePage?.contact?.phone ?? undefined}
        address={homePage?.contact?.address ?? undefined}
      />
    </>
  )
}
