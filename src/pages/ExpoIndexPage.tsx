import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { ExpoZoneCard } from '@/components/takeover/expo-zone-card'
import { Reveal } from '@/components/takeover/reveal'
import { EXPO_ITEMS } from '@/components/takeover/config'

export default function ExpoIndexPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Make A Trip Of It"
        title="Tourism & Business Expo"
        description="Resorts, hotels, airlines, wellness, and local businesses in one coastal celebration."
      />

      <PageContent className="pt-6 md:pt-8">
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {EXPO_ITEMS.map((item, i) => (
            <Reveal key={item.slug} delay={i * 50}>
              <ExpoZoneCard
                slug={item.slug}
                title={item.title}
                shortBlurb={item.shortBlurb}
                image={item.image}
              />
            </Reveal>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}
