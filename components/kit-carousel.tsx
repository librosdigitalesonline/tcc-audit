'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import kitExpedientes1 from '@/public/images/kit-expedientes-1.webp'
import kitExpedientes2 from '@/public/images/kit-expedientes-2.webp'
import kitExpedientes3 from '@/public/images/kit-expedientes-3.webp'
import kitExpedientes4 from '@/public/images/kit-expedientes-4.webp'

const SLIDES = [
  {
    src: kitExpedientes1,
    alt: 'Formato de Historia Clínica para adultos impreso, junto con hojas de exploración y seguimiento',
    label: 'Historia clínica',
  },
  {
    src: kitExpedientes2,
    alt: 'Persona llenando a mano el formato de genograma y dinámica familiar en una tablet',
    label: 'Genograma familiar',
  },
  {
    src: kitExpedientes3,
    alt: 'Plantillas de Diario Emocional, Diario Emocional para Niños, Historia Clínica e Informe Psicológico',
    label: 'Plantillas del kit',
  },
  {
    src: kitExpedientes4,
    alt: 'Formato de Exploración del Estado Mental abierto junto a una laptop',
    label: 'Exploración del estado mental',
  },
]

export function KitCarousel() {
  const [index, setIndex] = useState(0)
  const total = SLIDES.length

  const go = (next: number) => setIndex((next + total) % total)

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
        Así se ven los formatos del Kit de Expedientes
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.label}
              className="relative aspect-[3/4] w-full shrink-0 basis-full bg-muted"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={588}
                height={882}
                quality={60}
                placeholder="blur"
                loading="lazy"
                sizes="(max-width: 768px) 336px, 588px"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Imagen anterior"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-primary shadow-md backdrop-blur transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Imagen siguiente"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-primary shadow-md backdrop-blur transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a: ${slide.label}`}
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
