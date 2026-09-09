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

  const scrollToBonus = () => {
    const target = document.getElementById('bonus-title')
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
    <>
      {/* Urgency banner */}
      <button
        type="button"
        onClick={scrollToBonus}
        className="block w-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center font-medium leading-snug text-[16px] md:text-[18px]">
          <span>🎁 Kit de Expedientes Clínicos GRATIS →</span>
          <span className="animate-pulse font-bold underline decoration-2 underline-offset-2">
            Ver qué incluye
          </span>
        </div>
      </button>

      {/* Sticky navbar */}
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-shadow duration-200',
          scrolled && 'shadow-md shadow-primary/5',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="#top"
            className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight text-primary"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              T
            </span>
            Manual TCC
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CtaButton className="hidden sm:inline-flex">
              Quiero el Manual
            </CtaButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-secondary md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background md:hidden">
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
              <CtaButton
                className="mt-2 w-full"
                href="#oferta"
              >
                Quiero el Manual
              </CtaButton>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
