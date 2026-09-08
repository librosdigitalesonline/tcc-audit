import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import { PIXEL_ID } from '@/lib/fbpixel'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Manual de Terapia Cognitivo-Conductual (TCC) | Guía Clínica',
  description:
    'El manual de TCC que te dice exactamente qué hacer en cada sesión. Manual clínico en PDF + Kit de Expedientes Clínicos. Pago único de $27 USD.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${inter.variable} ${jakarta.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://player.mux.com" />
        <link rel="preconnect" href="https://image.mux.com" />
        <link rel="preconnect" href="https://stream.mux.com" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
