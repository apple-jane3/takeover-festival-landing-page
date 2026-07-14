import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { VideoSection } from '@/components/takeover/video-section'
import { Reveal } from '@/components/takeover/reveal'

export default function MediaPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Press & Highlights"
        title="Media"
        description="Festival videos, highlights, and visual stories from Takeover."
      />

      <PageContent className="pb-0 pt-2 md:pt-4">
        <VideoSection />
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
