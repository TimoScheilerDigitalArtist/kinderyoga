'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'

interface ParallaxImageProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function ParallaxImage({ children, offset = 60, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-offset, offset])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
