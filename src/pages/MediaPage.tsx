import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { PageLayout } from '@/components/takeover/page-layout'
import { ContentBlock, InfoList, PageContent, PageHeader } from '@/components/takeover/page-shell'
import { VideoSection } from '@/components/takeover/video-section'
import { MediaCoverageCard } from '@/components/takeover/media-coverage-card'
import { Reveal } from '@/components/takeover/reveal'
import {
  FEATURED_MEDIA_COVERAGE,
  FUTURE_MEDIA_COVERAGE,
  MEDIA_INTERVIEWS,
  PRESS_EMAIL,
  PRESS_RELEASES,
} from '@/components/takeover/config'

export default function MediaPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Press & Coverage"
        title="Media"
        description="Press coverage, releases, interviews, and festival highlights from Takeover La Union 2026."
      />

      <PageContent className="pt-6 md:pt-8">
        <ContentBlock title="Featured Coverage">
          <div className="grid gap-4 md:grid-cols-3">
            {FEATURED_MEDIA_COVERAGE.map((item, i) => (
              <MediaCoverageCard key={item.outlet} {...item} featured delay={i * 60} />
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Press Releases" className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRESS_RELEASES.map((item, i) => (
              <MediaCoverageCard key={item.title} {...item} delay={i * 60} />
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Interviews" className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MEDIA_INTERVIEWS.map((item, i) => (
              <MediaCoverageCard key={item.title} {...item} delay={i * 60} />
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Future Media Coverage" className="mt-10">
          <Reveal delay={60}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              More press features and broadcast coverage are on the way as Takeover Festival 2026 approaches.
              Check back for updates from national outlets, travel media, and festival partners.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-4">
            <InfoList items={FUTURE_MEDIA_COVERAGE} />
          </Reveal>
        </ContentBlock>

        <Reveal delay={180} className="mt-10 rounded-2xl border border-border bg-card p-6 text-center md:p-8">
          <h2 className="font-display text-2xl text-primary md:text-3xl">Press Inquiries</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            For media credentials, interview requests, and press kit materials, contact our press team.
          </p>
          <a
            href={`mailto:${PRESS_EMAIL}`}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            {PRESS_EMAIL}
          </a>
        </Reveal>
      </PageContent>

      <PageContent className="border-t border-border pb-0 pt-8 md:pt-10">
        <ContentBlock title="Festival Highlights">
          <VideoSection />
        </ContentBlock>
      </PageContent>

      <PageContent className="pt-8 md:pt-10">
        <Reveal className="rounded-2xl border border-border bg-card p-6 text-center md:p-8">
          <h2 className="font-display text-2xl text-primary md:text-3xl">Photo Gallery</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Browse moments from past Takeover weekends — live sets, crowd energy, and the La Union coast.
          </p>
          <Link
            to="/gallery"
            className="mt-4 inline-flex items-center gap-1 rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            View Gallery
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </PageContent>
    </PageLayout>
  )
}
