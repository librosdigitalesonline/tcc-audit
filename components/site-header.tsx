'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/cta-button'

const NAV_LINKS = [
  { label: 'Contenido', href: '#contenido' },
  { label: 'Bonus', href: '#bonus' },
  { label: '¿Para quién?', href: '#para-quien' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0
    const extraGap = 16
    const y =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      extraGap
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        'sticky top-0 z-50 bg-primary text-primary-foreground transition-shadow duration-200',
        scrolled && 'shadow-md shadow-primary/20',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <button
          type="button"
          onClick={() => scrollTo('bonus-title')}
          className="flex flex-1 items-center gap-2 text-left font-medium leading-snug text-[16px] md:text-[18px]"
        >
          <span>🎁 Kit de Expedientes Clínicos GRATIS →</span>
          <span className="animate-pulse font-bold underline decoration-2 underline-offset-2">
            Ver qué incluye
          </span>
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="border-t border-primary-foreground/15 bg-background text-foreground">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <CtaButton className="mt-2 w-full">Quiero el Manual</CtaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
