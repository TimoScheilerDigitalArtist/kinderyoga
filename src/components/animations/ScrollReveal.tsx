'use client'

import { motion, useReducedMotion } from 'motion/react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}

export function ScrollReveal({ children, delay = 0, className, y = 40 }: ScrollRevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
