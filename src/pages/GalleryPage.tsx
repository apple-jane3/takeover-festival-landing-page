import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { MediaFigure } from '@/components/takeover/media-figure'
import { Reveal } from '@/components/takeover/reveal'
import { GALLERY_ITEMS } from '@/components/takeover/config'

export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Activities & Events"
        title="Moments From Past Takeovers"
        description="Relive the energy, purpose, and coastal magic of past Takeover weekends."
      />

      <PageContent className="pt-6 md:pt-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal key={item.caption} delay={i * 40} className="mb-4 break-inside-avoid">
              <MediaFigure
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                description={item.description}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}
