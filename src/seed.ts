import type { Payload } from 'payload'

function rt(text: string) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr' as const,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr' as const,
          textFormat: 0,
          textStyle: '',
          children: [
            {
              type: 'text',
              format: 0,
              style: '',
              mode: 'normal' as const,
              detail: 0,
              version: 1,
              text,
            },
          ],
        },
      ],
    },
  }
}

export async function seed(payload: Payload): Promise<void> {
  payload.logger.info('Seeding database with initial content...')

  // Seed YogaGroups
  const miniDeId = await payload
    .create({
      collection: 'yoga-groups',
      locale: 'de',
      overrideAccess: true,
      data: {
        title: 'Mini-Yogis',
        ageRange: '3–6 Jahre',
        description: rt(
          'Spielerisch die Welt der Yoga-Tiere entdecken. Fantasiereisen, Bewegungslieder und ganz viel Staunen.',
        ),
        icon: 'butterfly',
        color: 'lavender',
        order: 1,
      } as never,
    })
    .then((d) => d.id)

  await payload.update({
    collection: 'yoga-groups',
    id: miniDeId,
    locale: 'en',
    overrideAccess: true,
    data: {
      title: 'Mini Yogis',
      description: rt(
        'Playfully discovering the world of yoga animals. Fantasy journeys, movement songs, and lots of wonder.',
      ),
    } as never,
  })

  const entdeckerDeId = await payload
    .create({
      collection: 'yoga-groups',
      locale: 'de',
      overrideAccess: true,
      data: {
        title: 'Yoga-Entdecker',
        ageRange: '6–10 Jahre',
        description: rt(
          'Kraft und Ruhe finden – mit Atemübungen, Partnerübungen und Entspannungsreisen, die den Schulalltag leichter machen.',
        ),
        icon: 'tree',
        color: 'sage',
        order: 2,
      } as never,
    })
    .then((d) => d.id)

  await payload.update({
    collection: 'yoga-groups',
    id: entdeckerDeId,
    locale: 'en',
    overrideAccess: true,
    data: {
      title: 'Yoga Explorers',
      description: rt(
        'Finding strength and calm – with breathing exercises, partner poses, and relaxation journeys that make school days lighter.',
      ),
    } as never,
  })

  const teenDeId = await payload
    .create({
      collection: 'yoga-groups',
      locale: 'de',
      overrideAccess: true,
      data: {
        title: 'Teen Yoga',
        ageRange: '10–16 Jahre',
        description: rt(
          'Dein Raum, dein Tempo. Yoga, das dir hilft, den Kopf frei zu bekommen – ohne Leistungsdruck, mit viel Selbstbestimmung.',
        ),
        icon: 'moon',
        color: 'peach',
        order: 3,
      } as never,
    })
    .then((d) => d.id)

  await payload.update({
    collection: 'yoga-groups',
    id: teenDeId,
    locale: 'en',
    overrideAccess: true,
    data: {
      title: 'Teen Yoga',
      description: rt(
        'Your space, your pace. Yoga that helps you clear your mind – no pressure, full autonomy.',
      ),
    } as never,
  })

  // Seed HomePage Global – German
  await payload.updateGlobal({
    slug: 'home-page',
    locale: 'de',
    overrideAccess: true,
    data: {
      hero: {
        headline: 'Kleine Yogis, große Ruhe',
        subtitle: 'Kinderyoga in Eggstätt – spielerisch zur inneren Balance',
      },
      about: {
        text: rt(
          'Ich bin Martina – Yogalehrerin aus Leidenschaft. Mein Herz schlägt dafür, Kindern einen Raum zu schenken, in dem sie ganz bei sich ankommen dürfen. In kleinen Gruppen üben wir gemeinsam, wie Stille sich gut anfühlen kann.',
        ),
      },
      details: [
        { icon: 'users', title: 'Kleine Gruppen', description: 'Jedes Kind wird gesehen' },
        {
          icon: 'calendar',
          title: 'Regelmäßige Termine',
          description: 'Feste Kurszeiten für Routine und Vertrauen',
        },
        {
          icon: 'heart',
          title: 'Kein Leistungsdruck',
          description: 'Hier darf jeder so sein, wie er ist',
        },
        {
          icon: 'shield',
          title: 'Zertifiziert & erfahren',
          description: 'Qualifizierte Anleitung in sicherer Umgebung',
        },
      ],
      contact: {
        ctaText: 'Jetzt Platz sichern',
        phone: '+49 1708764438',
        address: 'Am Lohfeld 5, 83125 Eggstätt',
        email: 'info@kinderyoga.fit',
      },
      seo: {
        metaTitle: 'Kinderyoga Eggstätt – Martina Partsch',
        metaDescription:
          'Kinderyoga in Eggstätt mit Martina Partsch. Spielerische Yogakurse für Kinder von 3–16 Jahren in kleinen Gruppen.',
      },
    } as never,
  })

  // Seed HomePage Global – English
  await payload.updateGlobal({
    slug: 'home-page',
    locale: 'en',
    overrideAccess: true,
    data: {
      hero: {
        headline: 'Little Yogis, Big Calm',
        subtitle: "Children's Yoga in Eggstätt – playful paths to inner balance",
      },
      about: {
        text: rt(
          "I'm Martina – a yoga teacher with a passion. My heart beats for giving children a space where they can truly arrive within themselves. In small groups, we practice together how stillness can feel wonderful.",
        ),
      },
      details: [
        { icon: 'users', title: 'Small Groups', description: 'Every child is seen' },
        {
          icon: 'calendar',
          title: 'Regular Classes',
          description: 'Fixed schedules for routine and trust',
        },
        {
          icon: 'heart',
          title: 'No Pressure',
          description: 'Here, everyone can be just as they are',
        },
        {
          icon: 'shield',
          title: 'Certified & Experienced',
          description: 'Qualified guidance in a safe environment',
        },
      ],
      contact: {
        ctaText: 'Reserve a Spot',
        phone: '+49 1708764438',
        address: 'Am Lohfeld 5, 83125 Eggstätt',
        email: 'info@kinderyoga.fit',
      },
      seo: {
        metaTitle: "Children's Yoga Eggstätt – Martina Partsch",
        metaDescription:
          "Children's yoga in Eggstätt with Martina Partsch. Playful yoga classes for children aged 3–16 in small groups.",
      },
    } as never,
  })

  payload.logger.info('Seeding complete.')
}
