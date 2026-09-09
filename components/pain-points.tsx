import {
  BookOpen,
  Search,
  AlertCircle,
  Clock,
  Puzzle,
  TrendingDown,
} from 'lucide-react'
import { FadeIn } from '@/components/fade-in'

const PAINS = [
  {
    icon: BookOpen,
    title: 'Libros densos, clínica vacía',
    text: 'Llevas horas leyendo teoría y cuando estás frente al paciente no sabes por dónde empezar.',
  },
  {
    icon: Search,
    title: 'Técnicas dispersas en mil fuentes',
    text: 'Buscas técnicas y encuentras versiones contradictorias en 5 referencias distintas.',
  },
  {
    icon: AlertCircle,
    title: 'Inseguridad en la formulación de casos',
    text: 'No estás seguro de estar usando bien el modelo ABC o la conceptualización cognitiva.',
  },
  {
    icon: Clock,
    title: 'Preparas cada sesión en 3 libros',
    text: 'Lo que debería estar en un solo lugar te cuesta horas de búsqueda.',
  },
  {
    icon: Puzzle,
    title: 'Cada diagnóstico, protocolo distinto',
    text: 'No tienes claro cómo adaptar las técnicas al TOC, TEPT o trastornos alimentarios.',
  },
  {
    icon: TrendingDown,
    title: 'Cierres sin prevención de recaídas',
    text: 'Terminas tratamientos sin plan concreto de prevención de recaídas.',
  },
]

export function PainPoints() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            El problema real
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            ¿Te suena familiar alguno de estos?
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain, i) => (
            <FadeIn
              key={pain.title}
              delay={i * 60}
            >
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <pain.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-bold text-primary">
                  {pain.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pain.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
