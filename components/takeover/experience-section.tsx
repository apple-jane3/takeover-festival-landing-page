import { Link } from 'react-router-dom'
import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { TICKETS_ENABLED, assetUrl } from './config'

export function ExperienceSection() {
  return (
    <section id="promo" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src={assetUrl('/images/upcoming.png')}
          alt="Festival crowd at Poro Point at night"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ocean-deep/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Don&apos;t Miss It</span>
          <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The Biggest Music &amp; Tourism Festival in the Philippines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
            Five days of world-class music, coastal culture, and purpose-driven celebration at Poro Point, La Union.
          </p>
          <a href="#video" className="btn-cta-primary mt-6 inline-flex">
            Watch the Teaser
          </a>
          {TICKETS_ENABLED ? (
            <Link to="/tickets" className="btn-cta-secondary ml-0 mt-3 inline-flex sm:ml-4 sm:mt-6">
              Get Tickets
            </Link>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
