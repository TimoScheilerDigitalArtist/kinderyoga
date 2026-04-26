'use client'

import { motion, useReducedMotion } from 'motion/react'

interface SplitTextProps {
  text: string
  className?: string
  wordClassName?: string
  stagger?: number
  delay?: number
}

export function SplitText({
  text,
  className,
  wordClassName,
  stagger = 0.08,
  delay = 0.2,
}: SplitTextProps) {
  const reduced = useReducedMotion()
  const words = text.split(' ')

  if (reduced) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block ${wordClassName ?? ''}`}
          style={{ marginRight: i < words.length - 1 ? '0.3em' : 0 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
