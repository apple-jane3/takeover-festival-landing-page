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
    popular: true,
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
    description:
      'Elevated private pavilion, dedicated bottle service, gourmet platter, and VIP parking passes.',
  },
]

export function TicketsSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="tickets" className={`bg-ocean-deep ${standalone ? 'pb-8 pt-0 md:pb-10' : 'py-12 md:py-16'}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {!standalone ? (
          <Reveal className="mb-8 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Get Your Pass</span>
            <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-white md:text-5xl">
              Festival Passes
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-white/75">
              From essential weekend access to luxury beach pavilions — find the pass that fits your Takeover experience.
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={60}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Main Festival Passes</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {mainPasses.map((pass) => (
              <article
                key={pass.name}
                className={`relative flex flex-col rounded-2xl border p-5 transition-transform hover:-translate-y-1 ${
                  pass.popular
                    ? 'border-sunset bg-sunset/10 shadow-[0_0_40px_rgba(238,125,51,0.2)]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {pass.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sunset px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                ) : null}
                <pass.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h4 className="mt-3 font-display text-xl text-white sm:text-2xl">{pass.name}</h4>
                <p className="mt-1.5 font-display text-2xl text-sunset sm:text-3xl">{pass.price}</p>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-white/75">{pass.description}</p>
                <a
                  href={TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-primary mt-5 w-full"
                >
                  Buy Now
                </a>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            VIP &amp; Corporate Packages
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {vipPasses.map((pass) => (
              <article
                key={pass.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-1"
              >
                <pass.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h4 className="mt-3 font-display text-xl text-white sm:text-2xl">{pass.name}</h4>
                <p className="mt-1.5 font-display text-2xl text-sunset sm:text-3xl">
                  {pass.price}
                  <span className="text-base font-sans text-white/60">{pass.unit}</span>
                </p>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-white/75">{pass.description}</p>
                <a
                  href={TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-base font-bold text-ocean-deep transition-all hover:scale-105 hover:bg-gold/90"
                >
                  Book VIP
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
