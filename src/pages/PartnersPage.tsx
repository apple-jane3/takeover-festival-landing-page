import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import {
  PartnerPitchSection,
  SponsorMarquee,
} from '@/components/takeover/sponsors-section'
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

      <PageContent className="space-y-12 pt-8 md:space-y-16 md:pt-10">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Our Partners</span>
            <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">Sponsors &amp; Partners</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:mt-5 md:text-base">
              Brands and organizations joining Takeover Festival 2026 — from wellness and payments to tourism and community.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60} className="my-4 md:my-6">
          <SponsorMarquee />
        </Reveal>

        <PartnerPitchSection />

        <Reveal delay={80} className="rounded-2xl border border-border bg-card p-6 text-center md:p-8">
          <h2 className="font-display text-2xl text-primary md:text-3xl">Partner With Us</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Reach out to explore title, gold, silver, and supporting sponsorship packages for Takeover La Union 2026.
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
