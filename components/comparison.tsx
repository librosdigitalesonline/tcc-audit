import { X, Check } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'

const WITHOUT = [
  'Horas perdidas buscando técnicas en varios libros',
  'Inseguridad al formular y conceptualizar casos',
  'Improvisación en cada sesión con el paciente',
  'Protocolos poco claros por diagnóstico',
  'Expedientes clínicos armados desde cero',
  'Cierres sin plan de prevención de recaídas',
]

const WITH = [
  'Todo lo que necesitas en un solo lugar, listo para usar',
  'Formulación de casos con el modelo de Beck paso a paso',
  'Estructura clara para cada sesión, sin improvisar',
  'Protocolos definidos para los trastornos más frecuentes',
  'Kit de expedientes y plantillas listas para completar',
  'Planes concretos de prevención de recaídas y cierre',
]

export function Comparison() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            La decisión
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tienes dos caminos frente a ti
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-2xl border border-destructive/30 bg-destructive/5 p-7">
              <h3 className="font-heading text-xl font-bold text-destructive">
                Sin el manual
              </h3>
              <ul className="mt-5 space-y-3">
                {WITHOUT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex h-full flex-col rounded-2xl border-2 border-[color:var(--color-success)] bg-[color:var(--color-success)]/5 p-7">
              <h3 className="font-heading text-xl font-bold text-[color:var(--color-success)]">
                Con el Manual + Kit
              </h3>
              <ul className="mt-5 space-y-3">
                {WITH.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
