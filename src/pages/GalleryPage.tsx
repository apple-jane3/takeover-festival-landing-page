import { Image } from '@/components/ui/image'
import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
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

      <PageContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={i * 40}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h2 className="font-display text-base text-primary">{item.caption}</h2>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}
