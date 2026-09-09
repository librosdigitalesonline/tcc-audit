'use client'
import { useEffect } from 'react'
import { track } from '@/lib/fbpixel'

export function PixelScrollDepth() {
  useEffect(() => {
    let fired = false
    function onScroll() {
      if (fired) return
      const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight
      if (scrollPercent >= 0.5) {
        track('Lead', { content_name: 'Scroll 50%' })
        fired = true
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return null
}
