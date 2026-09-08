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
              Precio de lanzamiento
            </span>
            <p className="font-heading text-3xl font-extrabold text-primary">
              $27 <span className="text-base font-semibold text-muted-foreground">USD</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Acceso completo al Manual + Kit de herramientas
            </p>
          </div>

          <div className="w-full max-w-xs">
            <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>83/100 copias entregadas</span>
              <span className="font-semibold text-accent">17 cupos disponibles</span>
            </div>
            <div
              className="h-2.5 w-full overflow-hidden rounded-full bg-secondary ring-1 ring-inset ring-border"
              role="progressbar"
              aria-valuenow={83}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Copias entregadas"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: '83%' }}
              />
            </div>
          </div>

          <CtaButton className="w-full sm:w-auto">
            Obtener mi Manual — $27
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
