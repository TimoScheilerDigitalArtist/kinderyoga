'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ParallaxImage } from '@/components/animations/ParallaxImage'
import { SerializeLexical } from '@/components/ui/SerializeLexical'
import type { AboutData, LexicalContent, MediaData } from '@/types/kinderyoga'

interface AboutSectionProps {
  image?: AboutData['image']
  text?: LexicalContent | null
}

function AboutPlaceholder() {
  return (
    <div className="w-full h-full min-h-[420px] rounded-3xl bg-gradient-to-br from-ky-lavender/30 via-ky-peach/20 to-ky-sage/20 flex items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        className="w-32 h-32 text-ky-lavender/60"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 100 C20 75 40 60 60 60 C80 60 100 75 100 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M60 62 C60 62 45 75 40 90"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M60 62 C60 62 75 75 80 90"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export function AboutSection({ image, text }: AboutSectionProps) {
  const t = useTranslations('about')

  const mediaImage = image && typeof image !== 'string' ? (image as MediaData) : null
  const hasImage = mediaImage?.url != null

  return (
    <section className="py-24 md:py-32 bg-ky-cream" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal delay={0.1}>
            <ParallaxImage
              className="rounded-3xl overflow-hidden shadow-2xl shadow-ky-lavender/20 aspect-[4/5]"
              offset={40}
            >
              {hasImage ? (
                <Image
                  src={mediaImage.url!}
                  alt={mediaImage.alt || t('imageAlt')}
                  width={mediaImage.width ?? 600}
                  height={mediaImage.height ?? 750}
                  className="w-full h-full object-cover scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAFBAMG/8QAIhAAAQQCAgMBAAAAAAAAAAAAAQIDBBEABRITMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoXHNNhyLkF3Hgx5HjPSXGxHecQkqJQAQSAD2k7P3WOZW3KcxxLZjcbzNO2xgpwuJhqS2hQUskqUkHW+yT9+KKKAt//Z"
                />
              ) : (
                <AboutPlaceholder />
              )}
            </ParallaxImage>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.25}>
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl text-ky-charcoal">{t('heading')}</h2>

              {text ? (
                <SerializeLexical
                  content={text}
                  className="text-ky-charcoal/80 text-lg leading-relaxed space-y-4"
                />
              ) : (
                <p className="text-ky-charcoal/80 text-lg leading-relaxed">
                  Ich bin Martina – Yogalehrerin aus Leidenschaft. Mein Herz schlägt dafür, Kindern
                  einen Raum zu schenken, in dem sie ganz bei sich ankommen dürfen.
                </p>
              )}

              <div className="flex items-center gap-3 pt-2">
                <div className="h-px w-12 bg-ky-lavender" />
                <span className="text-ky-warm-grey text-sm font-medium tracking-wide uppercase">
                  Martina Partsch
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
