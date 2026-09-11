import dynamic from 'next/dynamic'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { PixelViewContent } from '@/components/pixel-view-content'
import { PixelScrollDepth } from '@/components/pixel-scroll-depth'
import { SocialProofToast } from '@/components/social-proof-toast'

const Testimonials = dynamic(() =>
  import('@/components/testimonials').then((mod) => mod.Testimonials),
)
const PainPoints = dynamic(() =>
  import('@/components/pain-points').then((mod) => mod.PainPoints),
)
const Audience = dynamic(() =>
  import('@/components/audience').then((mod) => mod.Audience),
)
const Solution = dynamic(() =>
  import('@/components/solution').then((mod) => mod.Solution),
)
const Bonus = dynamic(() =>
  import('@/components/bonus').then((mod) => mod.Bonus),
)
const About = dynamic(() =>
  import('@/components/about').then((mod) => mod.About),
)
const Comparison = dynamic(() =>
  import('@/components/comparison').then((mod) => mod.Comparison),
)
const PricingStrip = dynamic(() =>
  import('@/components/pricing-strip').then((mod) => mod.PricingStrip),
)
const Faq = dynamic(() => import('@/components/faq').then((mod) => mod.Faq))
const FinalCta = dynamic(() =>
  import('@/components/final-cta').then((mod) => mod.FinalCta),
)

export default function ManualTccPage() {
  return (
    <div className="min-h-screen bg-background">
      <PixelViewContent />
      <PixelScrollDepth />
      <SocialProofToast />
      <SiteHeader />
      <main>
        <Hero />
        <PainPoints />
        <Audience />
        <Solution />
        <Bonus />
        <Testimonials />
        <Comparison />
        <About />
        <PricingStrip />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
