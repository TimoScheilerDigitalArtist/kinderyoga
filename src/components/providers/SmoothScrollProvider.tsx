'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    let raf: number

    function onRaf(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(onRaf)
    }

    raf = requestAnimationFrame(onRaf)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
