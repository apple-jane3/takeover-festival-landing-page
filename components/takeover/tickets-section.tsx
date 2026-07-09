import { Gem, Sparkles, Star, Tent, Umbrella, Waves } from 'lucide-react'
import { Reveal } from './reveal'
import { TICKETS_URL } from './config'

const mainPasses = [
  {
    name: 'Silver Surfer',
    price: '₱1,250',
    icon: Waves,
    description:
      'Essential weekend admission. Full access to main festival grounds, beach culinary villages, and main stage energy.',
  },
  {
    name: 'Golden Beach',
    price: '₱1,850',
    icon: Umbrella,
    description:
      'Upgraded stage proximity, priority fast-track entrance, and access to premium beachside bar lounges.',
  },
  {
    name: 'Black Pearl',
    price: '₱2,650',
    icon: Star,
    featured: true,
    description:
      'Front-row power. Premium viewing deck, private restrooms, priority merchandise lane, and 1 drink token.',
  },
]

const vipPasses = [
  {
    name: 'Takeover VIP',
    price: '₱6,500',
    unit: '/ head',
    icon: Sparkles,
    description:
      'Main VIP deck access, premium private restrooms, express entry lane, and 2 premium drink vouchers.',
  },
  {
    name: 'Gold Pavilion',
    price: '₱8,500',
    unit: '/ head',
    icon: Tent,
    description:
      'Premium elevated pavilion seating, exclusive Gold bars, express VIP entry, and comfort lounges.',
  },
  {
    name: 'Platinum Pavilion',
    price: '₱9,750',
    unit: '/ head',
    icon: Gem,
    featured: true,
    description:
      'Elevated private pavilion, dedicated bottle service, gourmet platter, and VIP parking passes.',
  },
]

export function TicketsSection() {
  return (
    <section id="tickets" className="bg-ocean-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Get Your Pass
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-white md:text-5xl">
            Festival Passes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/75">
            From essential weekend access to luxury beach pavilions — find the pass that fits
            your Takeover experience.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Main Festival Passes
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {mainPasses.map((pass) => (
              <article
                key={pass.name}
                className={`flex flex-col rounded-3xl border p-6 ${
                  pass.featured
                    ? 'border-gold/50 bg-gold/10 shadow-[0_0_40px_rgba(226,164,28,0.15)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <pass.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h4 className="mt-4 font-display text-2xl text-white">{pass.name}</h4>
                <p className="mt-2 font-display text-3xl text-sunset">{pass.price}</p>
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-white/75">
                  {pass.description}
                </p>
                <a
                  href={TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Buy Now
                </a>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h3 className="mb-5 mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            VIP &amp; Corporate Packages
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {vipPasses.map((pass) => (
              <article
                key={pass.name}
                className={`flex flex-col rounded-3xl border p-6 ${
                  pass.featured
                    ? 'border-gold/50 bg-gold/10 shadow-[0_0_40px_rgba(226,164,28,0.15)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <pass.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h4 className="mt-4 font-display text-2xl text-white">{pass.name}</h4>
                <p className="mt-2 font-display text-3xl text-sunset">
                  {pass.price}
                  <span className="text-base font-sans text-white/60">{pass.unit}</span>
                </p>
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-white/75">
                  {pass.description}
                </p>
                <a
                  href={TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ocean-deep transition-transform hover:scale-105"
                >
                  Book VIP
                </a>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-white/60">
            Gold and Platinum Pavilion spaces are limited — first-come, first-served.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
