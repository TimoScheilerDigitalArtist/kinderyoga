'use client'

import { motion, useReducedMotion } from 'motion/react'

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.15,
  delayChildren = 0,
}: StaggerContainerProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
