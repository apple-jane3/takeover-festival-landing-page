import { Reveal } from './reveal'
import { PROMO_VIDEO_EMBED } from './config'

export function VideoSection() {
  return (
    <section id="video" className="bg-ocean-deep py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Watch The Vibe
          </span>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">Festival Teaser</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Feel the energy of Takeover — music, waves, and purpose on the La Union coast.
          </p>
        </Reveal>

        <Reveal delay={100} className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
          <iframe
            title="Takeover Festival promotional video"
            src={PROMO_VIDEO_EMBED}
            className="aspect-video w-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}
