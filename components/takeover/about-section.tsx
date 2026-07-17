import { Image } from '@/components/ui/image'
import { MEDIA_SAND } from '@/lib/image-frame'
import { Reveal } from './reveal'
import { meetingNotesImage } from './config'

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-8">
        <Reveal className="h-full shadow-xl">
          <div
            className={`relative min-h-[22rem] overflow-hidden rounded-3xl sm:min-h-[26rem] md:min-h-full md:h-full ${MEDIA_SAND}`}
          >
            <Image
              src={meetingNotesImage('mayonnaise.png')}
              alt="Mayonnaise performing at Takeover Festival"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-cover object-[center_42%]"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Who We Are</span>
          <h2 className="mt-2 text-balance font-display text-4xl leading-tight text-primary md:text-5xl">
            More Than Just a Music Festival
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-foreground/80">
            Five days where music, tourism, business, sustainability, and community meet on the shores of La Union.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: '🎵', label: 'Music', caption: 'World-class headliners on the beach' },
              { icon: '🌴', label: 'Tourism', caption: 'DOT expo & travel partners' },
              {
                icon: '🧘',
                label: 'Wellness Activities & Events',
                caption: 'Yoga, meditation, recovery & fitness',
              },
              { icon: '💼', label: 'Business', caption: 'B2B expo & local brands' },
              { icon: '🌿', label: 'Sustainability', caption: 'Coastal restoration & green action' },
              { icon: '❤️', label: 'Community', caption: 'Cause-driven coastal impact' },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-2xl border border-border bg-card p-3 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
              >
                <span className="text-lg" aria-hidden="true">{pillar.icon}</span>
                <h3 className="mt-1.5 font-display text-base text-primary">{pillar.label}</h3>
                <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{pillar.caption}</p>
              </div>
            ))}
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-2">
            {[
              { value: '5', label: 'Days' },
              { value: '20K', label: 'Capacity' },
              { value: '100%', label: 'Cause' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-secondary p-2.5 text-center">
                <dt className="font-display text-2xl text-primary sm:text-3xl">{stat.value}</dt>
                <dd className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
