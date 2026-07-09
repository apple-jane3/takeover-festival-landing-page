import { SiteHeader } from '@/components/takeover/site-header'
import { HeroSection } from '@/components/takeover/hero-section'
import { AboutSection } from '@/components/takeover/about-section'
import { PreviousEvents } from '@/components/takeover/previous-events'
import { CountdownSection } from '@/components/takeover/countdown-section'
import { TicketsSection } from '@/components/takeover/tickets-section'
import { ArtistsSection } from '@/components/takeover/artists-section'
import { CausesSection } from '@/components/takeover/causes-section'
import { TourismSection } from '@/components/takeover/tourism-section'
import { LocationSection } from '@/components/takeover/location-section'
import { ScheduleSection } from '@/components/takeover/schedule-section'
import { VideoSection } from '@/components/takeover/video-section'
import { SponsorsSection } from '@/components/takeover/sponsors-section'
import { FaqSection } from '@/components/takeover/faq-section'
import { ExperienceSection } from '@/components/takeover/experience-section'
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
        <LocationSection />
        <ScheduleSection />
        <VideoSection />
        <SponsorsSection />
        <FaqSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </>
  )
}
