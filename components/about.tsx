import { FadeIn } from '@/components/fade-in'

const STATS = [
  { value: '130', label: 'Páginas clínicas' },
  { value: '11', label: 'Capítulos' },
  { value: '4', label: 'Casos comentados' },
]

export function About() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Quién lo elabora
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Elaborado por psicólogos clínicos para la consulta real
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Un equipo de psicólogos clínicos en ejercicio construyó cada
            capítulo pensando en lo que de verdad ocurre frente al paciente.
            Todo el contenido está respaldado por evidencia científica
            actualizada entre 2023 y 2025, para que apliques técnicas vigentes y
            con base sólida.
          </p>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <p className="font-heading text-3xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
