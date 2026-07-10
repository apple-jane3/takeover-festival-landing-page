import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { IntroCardLink } from '@/components/takeover/intro-card-link'
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
        <div className="grid gap-4 sm:grid-cols-2">
          {EXPO_ITEMS.map((item, i) => (
            <IntroCardLink
              key={item.slug}
              to={`/expo/${item.slug}`}
              title={item.title}
              blurb={item.shortBlurb}
              image={item.image}
              imageAlt={item.title}
              delay={i * 60}
            />
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}
