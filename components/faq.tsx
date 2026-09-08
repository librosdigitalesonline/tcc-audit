'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/fade-in'

const FAQS = [
  {
    q: '¿En qué formato viene el manual?',
    a: 'El manual se entrega en formato PDF de alta calidad, optimizado para leer en computadora, tablet o celular. Recibes el acceso de forma inmediata tras tu compra y es tuyo de por vida.',
  },
  {
    q: '¿Qué incluye exactamente el Kit de Expedientes?',
    a: 'Incluye más de 10 herramientas clínicas: consentimientos informados, plantillas de historia clínica, formatos de notas de sesión, exploración del estado mental, registros de conceptualización, planes de prevención de recaídas y tutoriales en video para usarlos.',
  },
  {
    q: '¿Es para principiantes o para psicólogos con experiencia?',
    a: 'Para ambos. Los primeros capítulos consolidan los fundamentos para quienes están comenzando, mientras que los protocolos por diagnóstico y los casos comentados aportan valor a psicólogos que ya están en consulta.',
  },
  {
    q: '¿Tiene base científica?',
    a: 'Sí. Todo el contenido está respaldado por evidencia científica actualizada entre 2023 y 2025, y fue elaborado por un equipo de psicólogos clínicos en ejercicio.',
  },
  {
    q: '¿Incluye casos clínicos reales?',
    a: 'Incluye 4 casos clínicos comentados que muestran cómo aplicar las técnicas paso a paso en situaciones representativas de la práctica real.',
  },
  {
    q: '¿Cubre solo TCC clásica o también terapias de tercera ola?',
    a: 'Cubre la TCC clásica de forma detallada e incluye un capítulo dedicado a los modelos contemporáneos y terapias de tercera ola, para que conozcas los enfoques más actuales.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-muted"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </FadeIn>

        <FadeIn className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading text-base font-semibold text-primary">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-accent transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </FadeIn>
      </div>
    </section>
  )
}
