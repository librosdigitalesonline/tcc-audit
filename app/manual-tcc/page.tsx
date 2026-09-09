import { SiteHeader } from '@/components/site-header'
import { PricingStrip } from '@/components/pricing-strip'
import { Hero } from '@/components/hero'
import { PainPoints } from '@/components/pain-points'
import { Solution } from '@/components/solution'
import { About } from '@/components/about'
import { Bonus } from '@/components/bonus'
import { TableOfContents } from '@/components/table-of-contents'
import { Audience } from '@/components/audience'
import { Comparison } from '@/components/comparison'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { PixelViewContent } from '@/components/pixel-view-content'
import { SocialProofToast } from '@/components/social-proof-toast'

export default function ManualTccPage() {
  return (
    <div className="min-h-screen bg-background">
      <PixelViewContent />
      <SocialProofToast />
      <SiteHeader />
      <main>
        <Hero />
        <Testimonials />
        <PainPoints />
        <Audience />
        <Solution />
        <Bonus />
        <TableOfContents />
        <About />
        <Comparison />
        <PricingStrip />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
