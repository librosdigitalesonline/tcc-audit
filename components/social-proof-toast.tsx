'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'

const FIRST_DELAY = 15000
const VISIBLE_MS = 4000
const MIN_INTERVAL = 30000
const MAX_INTERVAL = 45000

export function SocialProofToast() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    if (dismissed) return

    const schedule = (delay: number) => {
      const showTimer = setTimeout(() => {
        setVisible(true)
        const hideTimer = setTimeout(() => {
          setVisible(false)
          const next =
            MIN_INTERVAL + Math.random() * (MAX_INTERVAL - MIN_INTERVAL)
          schedule(next)
        }, VISIBLE_MS)
        timers.current.push(hideTimer)
      }, delay)
      timers.current.push(showTimer)
    }

    schedule(FIRST_DELAY)

    const captured = timers.current
    return () => {
      captured.forEach(clearTimeout)
      timers.current = []
    }
  }, [dismissed])

  if (dismissed) return null

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)] transition-all duration-500 sm:max-w-xs ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-xl">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <p className="text-sm leading-snug text-foreground">
          Alguien acaba de adquirir el manual{' '}
          <span className="text-muted-foreground">— hace unos minutos</span>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Cerrar notificación"
          className="-mr-1 -mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
