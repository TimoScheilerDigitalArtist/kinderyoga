'use client'

import { motion, useReducedMotion } from 'motion/react'

interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
  yRange?: number
  rotateRange?: number
}

export function FloatingElement({
  children,
  duration = 4,
  delay = 0,
  className,
  yRange = 14,
  rotateRange = 6,
}: FloatingElementProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yRange, 0],
        rotate: [0, rotateRange, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
