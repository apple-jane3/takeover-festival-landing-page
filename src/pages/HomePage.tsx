import { SiteHeader } from '@/components/takeover/site-header'
import { HeroSection } from '@/components/takeover/hero-section'
import { AboutSection } from '@/components/takeover/about-section'
import { PreviousEvents } from '@/components/takeover/previous-events'
import { CountdownSection } from '@/components/takeover/countdown-section'
import { ArtistsSection } from '@/components/takeover/artists-section'
import { CausesSection } from '@/components/takeover/causes-section'
import { FestivalVillageSection } from '@/components/takeover/festival-village-section'
import { TourismSection } from '@/components/takeover/tourism-section'
import { ScheduleSection } from '@/components/takeover/schedule-section'
import { ExperienceSection } from '@/components/takeover/experience-section'
import { VideoSection } from '@/components/takeover/video-section'
import { VenuePartnerSection } from '@/components/takeover/venue-partner-section'
import { HelixPaySection } from '@/components/takeover/helixpay-section'
import { SponsorsSection } from '@/components/takeover/sponsors-section'
import { SiteFooter } from '@/components/takeover/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PreviousEvents />
        <CountdownSection />
        <ArtistsSection />
        <CausesSection />
        <FestivalVillageSection />
        <TourismSection />
        <ScheduleSection />
        <ExperienceSection />
        <VideoSection />
        <VenuePartnerSection />
        <HelixPaySection />
        <SponsorsSection />
      </main>
      <SiteFooter />
    </>
  )
}
