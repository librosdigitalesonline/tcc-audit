'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import paginaIndice from '@/public/images/pagina-indice.webp'
import paginaDistorsiones from '@/public/images/pagina-distorsiones.webp'
import paginaRpd from '@/public/images/pagina-rpd.webp'
import paginaReestructuracion from '@/public/images/pagina-reestructuracion.webp'

const PAGES = [
  {
    src: paginaIndice,
    alt: 'Índice del manual con los 8 bloques temáticos y sus capítulos',
    label: 'Índice completo',
  },
  {
    src: paginaDistorsiones,
    alt: 'Página sobre distorsiones cognitivas: catastrofización e intervenciones en TCC',
    label: 'Distorsiones cognitivas',
  },
  {
    src: paginaRpd,
    alt: 'Página sobre el Registro de Pensamientos Disfuncionales (RPD)',
    label: 'Registro de pensamientos',
  },
  {
    src: paginaReestructuracion,
    alt: 'Página sobre las etapas de la reestructuración cognitiva',
    label: 'Reestructuración cognitiva',
  },
]

export function BookCarousel() {
  const [index, setIndex] = useState(0)
  const total = PAGES.length

  const go = (next: number) => setIndex((next + total) % total)

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
        Hojea páginas reales del manual
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {PAGES.map((page) => (
            <div
              key={page.label}
              className="relative aspect-[3/4] w-full shrink-0 basis-full bg-muted"
            >
              <Image
                src={page.src}
                alt={page.alt}
                width={588}
                height={882}
                quality={60}
                placeholder="blur"
                loading="lazy"
                sizes="(max-width: 768px) 336px, 588px"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Página anterior"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-primary shadow-md backdrop-blur transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Página siguiente"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-primary shadow-md backdrop-blur transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {PAGES.map((page, i) => (
          <button
            key={page.label}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a: ${page.label}`}
            aria-current={i === index}
            className={cn(
              'h-2.5 rounded-full transition-all',
              i === index
                ? 'w-7 bg-accent'
                : 'w-2.5 bg-border hover:bg-muted-foreground/50',
            )}
          />
        ))}
      </div>
    </div>
  )
}
