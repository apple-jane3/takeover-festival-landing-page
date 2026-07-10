import { Reveal } from '@/components/takeover/reveal'
import { PROMO_VIDEO_EMBED } from '@/components/takeover/config'

export function VideoSection() {
  return (
    <section id="video" className="bg-ocean-deep py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Watch The Vibe</span>
          <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">Festival Teaser</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Feel the energy of Takeover — music, waves, and purpose on the La Union coast.
          </p>
        </Reveal>

        <Reveal delay={80} className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
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
