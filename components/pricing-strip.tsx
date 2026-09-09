import { Zap } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

export function PricingStrip() {
  return (
    <section
      id="oferta"
      className="scroll-mt-28 border-y border-border bg-secondary"
    >
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:justify-between sm:p-6">
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              <Zap className="h-3.5 w-3.5" />
              Precio especial de lanzamiento
            </span>
            <p className="font-heading text-3xl font-extrabold text-primary">
              $27 <span className="text-base font-semibold text-muted-foreground">USD</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Manual completo + Kit de Expedientes Clínicos + Plantillas
              listas para usar
            </p>
          </div>

          <p className="w-full max-w-xs text-center text-sm font-medium text-muted-foreground sm:text-left">
            Precio de lanzamiento por tiempo limitado — El Kit de Expedientes
            gratis se incluye solo en esta etapa
          </p>

          <CtaButton className="w-full sm:w-auto">
            Quiero mi Manual + Kit — $27
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
