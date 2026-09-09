import { Gift, BookOpen, FolderKanban, Check } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { FadeIn } from '@/components/fade-in'
import { KitCarousel } from '@/components/kit-carousel'
import { BookCarousel } from '@/components/book-carousel'

const MANUAL_ITEMS = [
  '130 páginas de práctica clínica',
  '11 capítulos estructurados',
  '4 casos clínicos comentados',
  'Referencias científicas 2023–2025',
  'Formato PDF de acceso inmediato',
]

const KIT_ITEMS = [
  'Consentimientos informados',
  'Plantillas de historia clínica',
  'Formatos de notas de sesión',
  'Exploración del estado mental',
  'Registros de conceptualización de casos',
  'Formatos de evaluación y seguimiento',
  'Plantillas de tareas para casa',
  'Plan de prevención de recaídas',
  'Guías de cierre terapéutico',
  'Tutoriales en video de uso',
]

const KIT_BADGES = [
  '+120 páginas de formatos clínicos',
  'Consentimiento Informado',
  'Historia Clínica',
  'Nota Clínica',
  'Exploración del Estado Mental',
  'Para Niños, Adolescentes y Adultos',
  '+5 horas de video tutorial incluidas',
]

export function Bonus() {
  return (
    <section
      id="bonus"
      className="scroll-mt-24 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:pt-20 sm:pb-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <Gift className="h-4 w-4" />
            Bonus exclusivo incluido
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            No compras solo el manual — obtienes todo esto
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Kit card */}
          <FadeIn>
            <div className="relative flex h-full flex-col rounded-2xl border-2 border-accent bg-card p-7 shadow-md">
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                Bonus de regalo
              </span>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <FolderKanban className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-primary">
                  Kit de Expedientes Clínicos Psicológicos
                </h3>
              </div>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {KIT_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <KitCarousel />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {KIT_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-1 items-end justify-between border-t border-border pt-4">
                <span className="text-sm font-medium text-muted-foreground line-through">
                  $37 USD
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                  Incluido
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Manual card */}
          <FadeIn delay={100}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <BookOpen className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-primary">
                  Manual TCC
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {MANUAL_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex-1">
                <BookCarousel />
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-medium text-muted-foreground line-through">
                  $67 USD
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                  Incluido
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Total value */}
        <FadeIn delay={150}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
            <p className="text-sm font-medium uppercase tracking-wide text-primary-foreground/70">
              Valor total
            </p>
            <p className="flex flex-wrap items-baseline justify-center gap-3">
              <span className="text-2xl font-semibold text-primary-foreground/60 line-through">
                $67
              </span>
              <span className="font-heading text-5xl font-extrabold">$27</span>
              <span className="rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                -60%
              </span>
            </p>
            <CtaButton
              size="lg"
              className="w-full sm:w-auto"
            >
              Obtener todo por $27
            </CtaButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
