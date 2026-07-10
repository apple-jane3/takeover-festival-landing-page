import { Link } from 'react-router-dom'
import { PageLayout } from '@/components/takeover/page-layout'
import { PageContent, PageHeader } from '@/components/takeover/page-shell'
import { TicketsSection } from '@/components/takeover/tickets-section'
import { TICKETS_ENABLED } from '@/components/takeover/config'

function TicketsUnavailable() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Coming Soon"
        title="Tickets Not Yet Available"
        description="Festival passes will go on sale once hosting is live and payment integration is complete."
      />
      <PageContent narrow className="flex flex-col items-center py-12 text-center">
        <Link to="/" className="btn-cta-primary inline-flex">
          Return Home
        </Link>
      </PageContent>
    </PageLayout>
  )
}

export default function TicketsPage() {
  if (!TICKETS_ENABLED) {
    return <TicketsUnavailable />
  }

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Get Your Pass"
        title="Festival Passes"
        description="From essential weekend access to luxury beach pavilions."
      />
      <TicketsSection standalone />
    </PageLayout>
  )
}
