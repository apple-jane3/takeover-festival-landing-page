import { PageLayout } from '@/components/takeover/page-layout'
import { PageHeader, PageContent } from '@/components/takeover/page-shell'
import { FaqSection } from '@/components/takeover/faq-section'

export default function FaqPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about Takeover Festival La Union 2026."
      />
      <PageContent narrow className="pt-4 md:pt-6">
        <FaqSection standalone />
      </PageContent>
    </PageLayout>
  )
}
