export const PIXEL_ID = '255277890444758'

export const PRODUCT_PARAMS = {
  content_name: 'Manual TCC',
  content_type: 'product',
  content_ids: ['manual-tcc'],
  value: 27.0,
  currency: 'USD',
} as const

type Fbq = (
  action: string,
  event: string,
  params?: Record<string, unknown>,
) => void

declare global {
  interface Window {
    fbq?: Fbq
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}

export function trackViewContent() {
  track('ViewContent', PRODUCT_PARAMS)
}

export function trackAddToCart() {
  track('AddToCart', PRODUCT_PARAMS)
}
