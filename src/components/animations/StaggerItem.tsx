'use client'

import { motion, useReducedMotion } from 'motion/react'

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
