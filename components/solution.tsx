import { Brain, Wrench, FolderTree, Users } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'

const FEATURES = [
  {
    icon: Brain,
    title: 'Formula un caso completo en 15 minutos',
    text: 'El modelo cognitivo de Beck aplicado paso a paso, con el formato de conceptualización ya armado.',
  },
  {
    icon: Wrench,
    title: 'Llega a la sesión sabiendo qué vas a hacer',
    text: 'Procedimientos que abres cinco minutos antes y aplicas igual, sin releer teoría.',
  },
  {
    icon: FolderTree,
    title: 'Protocolo listo para los 5 diagnósticos más frecuentes',
    text: 'Depresión, ansiedad, TOC, TEPT y trastornos alimentarios — cada uno con su ruta de intervención.',
  },
  {
    icon: Users,
    title: 'Adapta la técnica a la edad sin improvisar',
    text: 'Qué cambia en infancia, adolescencia, adulto y adulto mayor, explicado para cada técnica.',
  },
]

export function Solution() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            La solución
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Un manual que acompaña la consulta, no el examen
          </h2>
          <p className="mt-4 font-heading text-lg font-semibold text-accent">
            Manual de Terapia Cognitivo-Conductual
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Diseñado para abrirse antes de cualquier sesión: cada capítulo va al
            grano con procedimientos claros, para que dejes de improvisar y
            avances con seguridad clínica en cada caso.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <FadeIn
              key={f.title}
              delay={i * 70}
            >
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-primary sm:text-lg">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
