import { useState } from 'react'
import { Image } from '@/components/ui/image'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import {
  CAROUSEL_PARTNERS,
  PARTNERS,
  PARTNER_BENEFITS,
  PARTNER_TIER_LABELS,
  PARTNER_TIER_ORDER,
  SPONSOR_EMAIL,
  getPartnersByTier,
  type Partner,
  type PartnerTier,
} from './config'

const TIER_LOGO_CLASS: Record<PartnerTier, string> = {
  title: 'max-h-16 w-auto max-w-[220px] sm:max-h-20 sm:max-w-[260px]',
  gold: 'max-h-14 w-auto max-w-[200px] sm:max-h-16 sm:max-w-[220px]',
  silver: 'max-h-12 w-auto max-w-[180px] sm:max-h-14 sm:max-w-[200px]',
  supporting: 'max-h-10 w-auto max-w-[160px] sm:max-h-12 sm:max-w-[180px]',
}

const TIER_CARD_CLASS: Record<PartnerTier, string> = {
  title: 'h-24 sm:h-28 px-8 sm:px-10',
  gold: 'h-20 sm:h-24 px-6 sm:px-8',
  silver: 'h-[4.5rem] sm:h-20 px-5 sm:px-6',
  supporting: 'h-16 sm:h-[4.5rem] px-4 sm:px-5',
}

const MARQUEE_LOGO_CLASS =
  'max-h-12 w-auto max-w-[6.5rem] object-contain opacity-80 transition-opacity hover:opacity-100 sm:max-h-14 sm:max-w-[7.5rem]'

function SponsorLogo({
  name,
  logo,
  tier = 'gold',
  compact = false,
}: {
  name: string
  logo: string
  tier?: PartnerTier
  compact?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="font-display text-sm tracking-wide text-primary/70 sm:text-base">{name}</span>
    )
  }

  return (
    <Image
      src={logo}
      alt={name}
      width={168}
      height={64}
      loading="lazy"
      className={cn(
        compact ? MARQUEE_LOGO_CLASS : TIER_LOGO_CLASS[tier],
      )}
      onError={() => setFailed(true)}
    />
  )
}

function PartnerLogoCard({ partner, tier }: { partner: Partner; tier: PartnerTier }) {
  const content = (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-md',
        TIER_CARD_CLASS[tier],
      )}
    >
      <SponsorLogo name={partner.name} logo={partner.logo} tier={tier} />
    </div>
  )

  if (partner.website) {
    return (
      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}

function SponsorMarqueeSlot({ partner }: { partner: Partner }) {
  return (
    <div className="sponsor-marquee-slot">
      <SponsorLogo name={partner.name} logo={partner.logo} tier={partner.tier} compact />
    </div>
  )
}

export function SponsorMarquee({ className }: { className?: string }) {
  const items = [...CAROUSEL_PARTNERS, ...CAROUSEL_PARTNERS]

  return (
    <div className={cn('relative overflow-hidden py-6 md:py-8', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16" />
      <div className="flex w-max animate-marquee items-center">
        {items.map((partner, i) => (
          <SponsorMarqueeSlot key={`${partner.name}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  )
}

export function PartnerTierGrid({ className }: { className?: string }) {
  const tiersWithPartners = PARTNER_TIER_ORDER.filter((tier) => getPartnersByTier(tier).length > 0)

  if (tiersWithPartners.length === 0) return null

  return (
    <div className={cn('space-y-10', className)}>
      {tiersWithPartners.map((tier, tierIndex) => {
        const partners = getPartnersByTier(tier)
        const gridClass =
          tier === 'title'
            ? 'grid-cols-1 sm:grid-cols-2'
            : tier === 'gold'
              ? 'grid-cols-2 sm:grid-cols-3'
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'

        return (
          <Reveal key={tier} delay={tierIndex * 40}>
            <div>
              <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {PARTNER_TIER_LABELS[tier]}
              </h3>
              <div className={cn('mt-4 grid gap-6', gridClass)}>
                {partners.map((partner) => (
                  <PartnerLogoCard key={partner.name} partner={partner} tier={tier} />
                ))}
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

export function PartnerPitchSection() {
  return (
    <section className="rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Why Partner</span>
        <h2 className="mt-2 font-display text-2xl text-primary md:text-3xl">
          Build Credibility at Scale
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          Takeover Festival is more than a ticketed event — it is a five-day platform to sell sponsorships,
          attract partners, promote Philippine tourism, and showcase the scale of a world-class coastal festival.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PARTNER_BENEFITS.map((benefit, i) => (
          <Reveal key={benefit.title} delay={i * 40}>
            <div className="h-full rounded-xl border border-border bg-card p-5">
              <h3 className="font-display text-lg text-primary">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function PartnerCta({ className }: { className?: string }) {
  return (
    <div className={cn('text-center', className)}>
      <p className="text-pretty text-muted-foreground">
        Interested in partnering with Takeover La Union 2026?
      </p>
      <a
        href={`mailto:${SPONSOR_EMAIL}`}
        className="mt-3 inline-flex items-center justify-center rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
      >
        Partner With Us
      </a>
    </div>
  )
}

export function SponsorsSection() {
  const titlePartners = getPartnersByTier('title')

  return (
    <section id="sponsors" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mb-10 text-center md:mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">In Good Company</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Sponsors &amp; Partners
          </h2>
        </Reveal>

        {titlePartners.length > 0 && (
          <Reveal delay={60} className="mb-8">
            <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {PARTNER_TIER_LABELS.title}
            </h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {titlePartners.map((partner) => (
                <PartnerLogoCard key={partner.name} partner={partner} tier="title" />
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={60} className="my-6 md:my-8">
          <SponsorMarquee />
        </Reveal>

        <Reveal delay={100} className="mt-10 md:mt-12">
          <PartnerCta />
        </Reveal>
      </div>
    </section>
  )
}
