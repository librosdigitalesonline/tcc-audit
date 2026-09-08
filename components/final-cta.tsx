import { Lock, Zap, Check } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { FadeIn } from '@/components/fade-in'

const INCLUDED = [
  'Manual de TCC completo (130 páginas, 11 capítulos)',
  'Kit de Expedientes Clínicos Psicológicos',
  'Casos clínicos comentados y referencias 2023–2025',
  'Acceso inmediato de por vida + garantía de 30 días',
]

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            <Zap className="h-4 w-4 text-[color:var(--color-chart-4)]" />
            Última llamada
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            El manual que debería estar en cada escritorio clínico
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <ul className="mx-auto mt-8 max-w-md space-y-2.5 text-left">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-primary-foreground/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-chart-4)]" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-8 flex items-baseline justify-center gap-3">
            <span className="text-2xl font-semibold text-primary-foreground/50 line-through">
              $104
            </span>
            <span className="font-heading text-6xl font-extrabold">$27</span>
            <span className="text-lg font-semibold text-primary-foreground/70">
              USD
            </span>
          </div>

          <CtaButton
            size="lg"
            className="mt-8 w-full sm:w-auto"
          >
            Quiero el Manual + Kit — $27
          </CtaButton>

          <p className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-primary-foreground/70">
            <Lock className="h-3.5 w-3.5" />
            Pago seguro con Whop (Stripe) · Recibes todo al instante
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
