import { Navigate, useParams } from 'react-router-dom'
import { Image } from '@/components/ui/image'
import { PageLayout } from '@/components/takeover/page-layout'
import { ContentBlock, InfoList, MediaGrid, PageContent, PageHeader } from '@/components/takeover/page-shell'
import { Reveal } from '@/components/takeover/reveal'
import { getCauseBySlug } from '@/components/takeover/config'

export default function CauseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const cause = slug ? getCauseBySlug(slug) : undefined

  if (!cause) {
    return <Navigate to="/causes" replace />
  }

  const galleryColumns = cause.images.length > 6 ? 4 : 3

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Community Cause"
        title={cause.title}
        description={cause.shortBlurb}
        backTo={{ label: 'All Causes', href: '/causes' }}
      />

      <PageContent className="space-y-8 pt-6 md:space-y-10 md:pt-8">
        <div className="grid items-start gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md lg:sticky lg:top-24">
              <Image
                src={cause.image}
                alt={cause.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-3">
            <Reveal delay={60}>
              <p className="text-pretty text-sm leading-relaxed text-foreground/80 md:text-base">
                {cause.description}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ContentBlock title="Event Schedule">
                <InfoList items={cause.schedule} />
              </ContentBlock>
            </Reveal>
          </div>
        </div>

        <Reveal delay={140}>
          <ContentBlock title="Gallery">
            <MediaGrid images={cause.images} alt={cause.title} columns={galleryColumns} />
          </ContentBlock>
        </Reveal>
      </PageContent>
    </PageLayout>
  )
}
