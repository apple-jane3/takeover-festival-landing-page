import { Navigate, useParams } from 'react-router-dom'
import { Image } from '@/components/ui/image'
import { PageLayout } from '@/components/takeover/page-layout'
import { ContentBlock, InfoList, MediaGrid, PageContent, PageHeader } from '@/components/takeover/page-shell'
import { Reveal } from '@/components/takeover/reveal'
import { getExpoBySlug } from '@/components/takeover/config'

export default function ExpoDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const expo = slug ? getExpoBySlug(slug) : undefined

  if (!expo) {
    return <Navigate to="/expo" replace />
  }

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Tourism & Business Expo"
        title={expo.title}
        description={expo.shortBlurb}
        backTo={{ label: 'All Expo Zones', href: '/expo' }}
      />

      <PageContent className="space-y-8 pt-6 md:space-y-10 md:pt-8">
        <div className="grid items-start gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md lg:sticky lg:top-24">
              <Image
                src={expo.image}
                alt={expo.title}
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
                {expo.description}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ContentBlock title="Highlights">
                <InfoList items={expo.highlights} />
              </ContentBlock>
            </Reveal>

            <Reveal delay={140}>
              <ContentBlock title="Schedule">
                <InfoList items={expo.schedule} />
              </ContentBlock>
            </Reveal>
          </div>
        </div>

        <Reveal delay={180}>
          <ContentBlock title="Photos">
            <MediaGrid images={expo.images} alt={expo.title} columns={2} />
          </ContentBlock>
        </Reveal>
      </PageContent>
    </PageLayout>
  )
}
