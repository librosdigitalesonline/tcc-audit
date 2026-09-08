import Image from 'next/image'
import { Star, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import testimonio1 from '@/public/images/testimonio-1.webp'
import testimonio2 from '@/public/images/testimonio-2.webp'
import testimonio3 from '@/public/images/testimonio-3.webp'

const TESTIMONIALS = [
  {
    photo: testimonio1,
    title: 'Un manual diseñado para el escritorio clínico, no para el anaquel',
    quote:
      'La mayoría de los libros de TCC son tomos de 600 páginas que no puedes revisar rápido entre pacientes. Este manual de 130 páginas va directo al grano. Me ha ayudado a estructurar mejor cada sesión de 50 minutos sin improvisar.',
    name: 'Psic. Fernanda Morales',
    role: 'Terapeuta Cognitivo-Conductual',
  },
  {
    photo: testimonio2,
    title: 'De las mejores inversiones que he hecho para mi consultorio',
    quote:
      'Compré el manual por los 11 capítulos de TCC, pero lo que terminó por fascinarme fue el Kit de Expedientes Clínicos. Trae los formatos de exploración del estado mental, historial clínico y prevención de recaídas listos para usar. Por $27 USD el valor que aporta es enorme.',
    name: 'Lic. Diego Saldaña',
    role: 'Psicología Clínica',
  },
  {
    photo: testimonio3,
    title: 'La guía que me faltaba para dar el paso a atender pacientes',
    quote:
      'Al salir de la universidad sientes mucho vacío entre lo teórico y lo que de verdad pasa en la consulta. Este manual te lleva de la mano en la conceptualización cognitiva y cómo aplicar las técnicas conductuales. Da muchísima seguridad.',
    name: 'Psic. Andrea Torres',
    role: 'Psicóloga Sanitaria',
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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Lo que dicen quienes ya lo usan
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Psicólogos que ya lo aplican en consulta
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn
              key={t.name}
              delay={i * 80}
            >
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-0.5"
                  aria-label="Calificación de 5 de 5 estrellas"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <h3 className="font-heading text-base font-bold leading-snug text-primary">
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
