import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            href="#top"
            className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight text-primary"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              T
            </span>
            Manual TCC
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link
              href="#contenido"
              className="transition-colors hover:text-primary"
            >
              Contenido
            </Link>
            <Link
              href="#bonus"
              className="transition-colors hover:text-primary"
            >
              Bonus
            </Link>
            <Link
              href="#faq"
              className="transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="#oferta"
              className="transition-colors hover:text-primary"
            >
              Comprar
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground">
          <p>
            Manual de Terapia Cognitivo-Conductual. Material educativo de apoyo
            para profesionales y estudiantes de psicología.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Manual TCC. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
