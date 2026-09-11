import { BookMarked } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { FadeIn } from '@/components/fade-in'
import { VideoPlayer } from '@/components/video-player'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-secondary to-transparent"
      />
      <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-8 text-center sm:pt-12">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <BookMarked className="h-4 w-4 text-accent" />
            Guía Clínica · Pago Único
          </span>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl md:text-6xl">
            El manual de TCC que te dice exactamente qué hacer en cada sesión
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Sin improvisar. Sin buscar en tres libros distintos antes de cada
            caso. Solo abres, aplicas y avanzas con tu paciente.
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-primary shadow-xl">
            <VideoPlayer />
          </div>
        </FadeIn>

        <FadeIn delay={320}>
          <div className="mt-9">
            <CtaButton size="lg">Quiero el Manual + Kit — $27</CtaButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
