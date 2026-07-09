import { Reveal } from './reveal'

const sponsors = [
  { name: "Gold's Gym", featured: true },
  { name: 'Thunderbird', featured: false },
  { name: 'Surf Co.', featured: false },
  { name: 'AirNorth', featured: false },
  { name: 'La Union Tourism', featured: false },
  { name: 'WaveTech', featured: false },
  { name: 'Beachside Hotels', featured: false },
  { name: 'PureHydrate', featured: false },
  { name: 'SunTribe', featured: false },
  { name: 'Coastal Co-op', featured: false },
]

export function SponsorsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
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
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={`flex items-center justify-center rounded-2xl border px-4 py-8 text-center transition-colors ${
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
      </div>
    </section>
  )
}
