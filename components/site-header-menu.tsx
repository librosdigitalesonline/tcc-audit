'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

const NAV_LINKS = [
  { label: 'Contenido', href: '#contenido' },
  { label: 'Bonus', href: '#bonus' },
  { label: '¿Para quién?', href: '#para-quien' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeaderMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-primary-foreground/15 bg-background text-foreground">
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
    </>
  )
}
