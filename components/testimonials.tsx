import Image from 'next/image'
import { Star, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import testimonio1 from '@/public/images/testimonio-1.webp'
import testimonio2 from '@/public/images/testimonio-2.webp'
import testimonio3 from '@/public/images/testimonio-3.webp'

const TESTIMONIALS = [
  {
    photo: testimonio1,
    title: 'Lo abro 5 minutos antes de cada sesión',
    quote:
      'Va directo a la reestructuración cognitiva y al modelo de Beck sin tanta paja teórica. Por fin algo que puedo consultar rápido entre pacientes.',
    name: 'Psic. Fernanda Morales',
    role: 'Terapeuta Cognitivo-Conductual',
    city: 'Chile',
  },
  {
    photo: testimonio2,
    title: 'El Kit de Expedientes valió toda la compra',
    quote:
      'Los consentimientos informados, hojas de RPD y notas de sesión ya listos. Me ahorró semanas de trabajo administrativo.',
    name: 'Lic. Diego Saldaña',
    role: 'Psicología Clínica',
    city: 'México',
  },
  {
    photo: testimonio3,
    title: 'Me quitó el miedo a atender sola',
    quote:
      'Recién egresada y la conceptualización de casos me paralizaba. Los 4 casos comentados te guían paso a paso. Ahora me siento segura.',
    name: 'Psic. Andrea Torres',
    role: 'Psicóloga Sanitaria',
    city: 'España',
  },
]

const RESOLVED_QUESTIONS = [
  'Tenía miedo de que fuera solo otro PDF con conceptos repetidos de la universidad, pero es 100% aplicable.',
  'El pago se procesó de inmediato y recibí los accesos al PDF y a todas las plantillas del kit sin ningún problema.',
  'Incluye adaptaciones por ciclo vital y una excelente síntesis de modelos contemporáneos de tercera ola.',
]

export function Testimonials() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Lo que dicen quienes ya lo usan
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Cientos de psicólogos en tu país ya lo aplican en consulta
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn
              key={t.name}
              delay={i * 80}
            >
              <div className="flex h-full flex-col gap-2.5 rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={40}
                      height={40}
                      sizes="40px"
                      quality={60}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}{t.city ? ` · ${t.city}` : ''}
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-0.5"
                  aria-label="Calificación de 5 de 5 estrellas"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <h3 className="font-heading text-sm font-bold leading-snug text-primary">
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={240}>
          <div className="mt-14">
            <h3 className="text-balance text-center font-heading text-xl font-bold text-primary sm:text-2xl">
              Preguntas resueltas por quienes ya lo tienen
            </h3>

            <div className="mx-auto mt-7 grid max-w-3xl gap-3">
              {RESOLVED_QUESTIONS.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <p className="text-sm leading-relaxed text-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
