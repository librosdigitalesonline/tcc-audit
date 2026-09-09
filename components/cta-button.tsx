'use client'

import { cn } from '@/lib/utils'
import { trackAddToCart, trackInitiateCheckout } from '@/lib/fbpixel'

export const CHECKOUT_URL = 'https://whop.com/checkout/plan_PJPa2a58K2rfE'

export function CtaButton({
  children,
  href = CHECKOUT_URL,
  className,
  size = 'default',
}: {
  children: React.ReactNode
  href?: string
  className?: string
  size?: 'default' | 'lg'
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => { trackAddToCart(); trackInitiateCheckout(); }}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0',
        size === 'lg'
          ? 'px-8 py-4 text-base sm:text-lg'
          : 'px-5 py-3 text-sm sm:text-base',
        className,
      )}
    >
      {children}
    </a>
  )
}
