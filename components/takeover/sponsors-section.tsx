import { Reveal } from './reveal'
import { SPONSOR_EMAIL } from './config'

const sponsors = [
  { name: "Gold's Gym", featured: true },
  { name: 'DOT Region 1', featured: true },
  { name: 'Thunderbird Resort', featured: false },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            In Good Company
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            Sponsors &amp; Partners
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={`flex min-h-[140px] flex-col items-center justify-center rounded-2xl border px-4 py-8 text-center transition-colors ${
                sponsor.featured
                  ? 'border-teal bg-teal/5 shadow-md'
                  : 'border-border bg-secondary/40 hover:bg-secondary'
              }`}
            >
              <span
                className={`font-display text-lg tracking-wide md:text-xl ${
                  sponsor.featured ? 'text-teal' : 'text-primary/70'
                }`}
              >
                {sponsor.name}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="mt-12 text-center">
          <p className="text-pretty text-muted-foreground">
            Interested in partnering with Takeover La Union 2026?
          </p>
          <a
            href={`mailto:${SPONSOR_EMAIL}`}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-teal px-6 py-3 text-sm font-semibold text-teal transition-colors hover:bg-teal hover:text-white"
          >
            Partner With Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
