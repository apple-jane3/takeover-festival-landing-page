import { SiteHeader } from '@/components/takeover/site-header'
import { HeroSection } from '@/components/takeover/hero-section'
import { AboutSection } from '@/components/takeover/about-section'
import { PreviousEvents } from '@/components/takeover/previous-events'
import { CountdownSection } from '@/components/takeover/countdown-section'
import { TicketsSection } from '@/components/takeover/tickets-section'
import { ArtistsSection } from '@/components/takeover/artists-section'
import { CausesSection } from '@/components/takeover/causes-section'
import { TourismSection } from '@/components/takeover/tourism-section'
import { SponsorsSection } from '@/components/takeover/sponsors-section'
import { SiteFooter } from '@/components/takeover/site-footer'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PreviousEvents />
        <CountdownSection />
        <TicketsSection />
        <ArtistsSection />
        <CausesSection />
        <TourismSection />
        <SponsorsSection />
      </main>
      <SiteFooter />
    </>
  )
}
