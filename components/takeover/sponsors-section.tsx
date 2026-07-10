import { useState } from 'react'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { SPONSORS } from './config'

function SponsorLogo({ name, logo }: { name: string; logo: string }) {
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
      width={140}
      height={56}
      loading="lazy"
      className="max-h-12 w-auto max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100 sm:max-h-14"
      onError={() => setFailed(true)}
    />
  )
}

export function SponsorMarquee() {
  const items = [...SPONSORS, ...SPONSORS]

  return (
    <div className="relative overflow-hidden py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16" />
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8">
        {items.map((sponsor, i) => (
          <div
            key={`${sponsor.name}-${i}`}
            className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-border bg-card px-6 sm:h-20 sm:min-w-[180px]"
          >
            <SponsorLogo name={sponsor.name} logo={sponsor.logo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">In Good Company</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Sponsors &amp; Partners
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <SponsorMarquee />
        </Reveal>

        <Reveal delay={120} className="mt-8 text-center">
          <p className="text-pretty text-muted-foreground">Interested in partnering with Takeover La Union 2026?</p>
          <a
            href="mailto:sponsor@takeoverlu.ph"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            Partner With Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
