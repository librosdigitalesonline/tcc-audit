import { FadeIn } from '@/components/fade-in'

const CHAPTERS = [
  {
    n: '01',
    title: 'Fundamentos de la TCC',
    text: 'Bases teóricas y principios del enfoque cognitivo-conductual.',
  },
  {
    n: '02',
    title: 'Conceptualización Cognitiva',
    text: 'Cómo construir la formulación del caso con el modelo de Beck.',
  },
  {
    n: '03',
    title: 'Evaluación y Planificación',
    text: 'Instrumentos y estructura para planificar el tratamiento.',
  },
  {
    n: '04',
    title: 'Distorsiones Cognitivas',
    text: 'Identificación y trabajo con pensamientos automáticos.',
  },
  {
    n: '05',
    title: 'Técnicas Cognitivas',
    text: 'Reestructuración y procedimientos cognitivos paso a paso.',
  },
  {
    n: '06',
    title: 'Técnicas Conductuales',
    text: 'Exposición, activación conductual y experimentos.',
  },
  {
    n: '07',
    title: 'TCC en Trastornos Prevalentes',
    text: 'Protocolos para depresión, ansiedad, TOC, TEPT y más.',
  },
  {
    n: '08',
    title: 'TCC a lo Largo del Ciclo Vital',
    text: 'Adaptaciones para infancia, adolescencia y adultos.',
  },
  {
    n: '09',
    title: 'Modelos Contemporáneos',
    text: 'Terapias de tercera ola y enfoques actuales.',
  },
  {
    n: '10',
    title: 'Prevención de Recaídas',
    text: 'Planes concretos para consolidar los logros terapéuticos.',
  },
  {
    n: '11',
    title: 'Práctica Clínica en TCC',
    text: 'Integración final con casos comentados y recomendaciones.',
  },
]

export function TableOfContents() {
  return (
    <section
      id="contenido"
      className="scroll-mt-24 bg-muted"
    >
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-16 sm:pt-8 sm:pb-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Contenido
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            11 capítulos de práctica clínica real
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {CHAPTERS.map((ch, i) => (
            <FadeIn
              key={ch.n}
              delay={(i % 2) * 60}
            >
              <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="font-heading text-2xl font-extrabold tabular-nums text-accent/40">
                  {ch.n}
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-primary">
                    {ch.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {ch.text}
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
