import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { SponsorMarquee } from '@/components/takeover/sponsors-section'
import { VenuePartnerSection } from '@/components/takeover/venue-partner-section'
import { Reveal } from '@/components/takeover/reveal'
import { SPONSOR_EMAIL } from '@/components/takeover/config'

export default function PartnersPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="In Good Company"
        title="Partners"
        description="The brands, organizations, and collaborators powering Takeover Festival 2026."
      />

      <VenuePartnerSection />

      <PageContent className="pt-6 md:pt-8">
        <Reveal delay={60}>
          <SponsorMarquee />
        </Reveal>

        <Reveal delay={120} className="mt-10 rounded-2xl border border-border bg-card p-6 text-center md:p-8">
          <h2 className="font-display text-2xl text-primary md:text-3xl">Partner With Us</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Interested in sponsoring or partnering with Takeover La Union 2026? Reach out to our team.
          </p>
          <a
            href={`mailto:${SPONSOR_EMAIL}`}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            {SPONSOR_EMAIL}
          </a>
        </Reveal>
      </PageContent>
    </PageLayout>
  )
}
