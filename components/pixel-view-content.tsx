'use client'

import { useEffect } from 'react'
import { trackViewContent } from '@/lib/fbpixel'

export function PixelViewContent() {
  useEffect(() => {
    trackViewContent()
  }, [])

  return null
}
