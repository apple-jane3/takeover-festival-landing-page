import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { IntroCardLink } from '@/components/takeover/intro-card-link'
import { COMMUNITY_CAUSES } from '@/components/takeover/config'

export default function CausesIndexPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="The Heart Of It"
        title="Community Causes"
        description="Every beat has a purpose. Party with impact on the environment we love."
      />

      <PageContent className="pt-6 md:pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {COMMUNITY_CAUSES.map((cause, i) => (
            <IntroCardLink
              key={cause.slug}
              to={`/causes/${cause.slug}`}
              title={cause.title}
              blurb={cause.shortBlurb}
              image={cause.image}
              imageAlt={cause.title}
              delay={i * 60}
            />
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}
