import { Reveal } from './reveal'
import { SPONSORS } from './config'

export function SponsorMarquee() {
  const items = [...SPONSORS, ...SPONSORS]

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-20 min-w-[180px] items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-sm transition-colors hover:border-teal/40"
          >
            <span className="font-display text-lg tracking-wide text-primary/80">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            In Good Company
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Sponsors &amp; Partners
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <SponsorMarquee />
        </Reveal>

        <Reveal delay={150} className="mt-12 text-center">
          <p className="text-pretty text-muted-foreground">
            Interested in partnering with Takeover La Union 2026?
          </p>
          <a
            href="mailto:sponsor@takeoverlu.ph"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-white"
          >
            Partner With Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
