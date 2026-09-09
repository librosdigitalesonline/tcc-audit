import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Menu } from 'lucide-react'

const SiteHeaderMenu = dynamic(
  () => import('@/components/site-header-menu').then((mod) => mod.SiteHeaderMenu),
  {
    loading: () => (
      <button
        type="button"
        aria-label="Abrir menú"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
      >
        <Menu className="h-5 w-5" />
      </button>
    ),
  },
)

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md shadow-primary/10">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Link
          href="#bonus-title"
          className="flex flex-1 items-center gap-2 text-left font-medium leading-snug text-[16px] md:text-[18px]"
        >
          <span>🎁 Kit de Expedientes Clínicos GRATIS →</span>
          <span className="animate-pulse font-bold underline decoration-2 underline-offset-2">
            Ver qué incluye
          </span>
        </Link>

        <SiteHeaderMenu />
      </div>
    </header>
  )
}
