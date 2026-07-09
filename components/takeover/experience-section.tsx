import { Image } from '@/components/ui/image'
import { Reveal } from './reveal'
import { TICKETS_URL, assetUrl } from './config'

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
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
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Don&apos;t Miss It
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-white md:text-6xl">
            The Biggest Music &amp; Tourism Festival in the Philippines
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/80">
            Three days of world-class music, coastal culture, and purpose-driven celebration
            at Poro Point, La Union.
          </p>
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-primary mt-10"
          >
            Get Your Tickets
          </a>
        </Reveal>
      </div>
    </section>
  )
}
