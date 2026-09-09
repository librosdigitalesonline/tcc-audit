import { GraduationCap, Sprout, Building2, ShieldCheck } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'

const PROFILES = [
  {
    icon: GraduationCap,
    title: 'Estudiante de psicología',
    text: 'En últimos semestres o en prácticas clínicas que necesita una guía clara para aplicar.',
  },
  {
    icon: Sprout,
    title: 'Egresado reciente',
    text: 'Construyendo su práctica clínica y buscando seguridad en cada intervención.',
  },
  {
    icon: Building2,
    title: 'Psicólogo en consulta',
    text: 'Que quiere consolidar su trabajo y estandarizar sus protocolos de tratamiento.',
  },
]

export function Audience() {
  return (
    <section
      id="para-quien"
      className="scroll-mt-24 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            ¿Para quién es?
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Pensado para tu momento profesional
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROFILES.map((p, i) => (
            <FadeIn
              key={p.title}
              delay={i * 70}
            >
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-lg font-bold text-primary">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </FadeIn>
          ))}

          {/* Guarantee card */}
          <FadeIn delay={210}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border-2 border-accent bg-accent/5 p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-lg font-bold text-primary">
                Garantía 30 días
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Si no es para ti, te devolvemos tu dinero. Sin preguntas ni
                complicaciones.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
