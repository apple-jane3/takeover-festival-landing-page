import { useState } from 'react'
import { Reveal } from '@/components/takeover/reveal'
import { FESTIVAL_VIDEOS } from '@/components/takeover/config'

export function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVideo = FESTIVAL_VIDEOS[activeIndex]

  return (
    <section id="video" className="bg-ocean-deep py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Watch The Vibe</span>
          <h2 className="mt-2 font-display text-4xl text-white md:text-5xl">Festival Highlights</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Real moments from past Takeovers — music, crowd energy, and the La Union coast.
          </p>
        </Reveal>

        <Reveal delay={80} className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
          <video
            key={activeVideo.src}
            controls
            playsInline
            preload="metadata"
            poster={activeVideo.poster}
            className="aspect-video w-full bg-black object-cover"
          >
            <source src={activeVideo.src} type="video/mp4" />
          </video>
          <div className="border-t border-white/10 bg-ocean-deep/90 px-4 py-3 text-center">
            <p className="font-display text-lg text-white">{activeVideo.title}</p>
            <p className="mt-0.5 text-sm text-white/70">{activeVideo.caption}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4 flex flex-wrap justify-center gap-2">
          {FESTIVAL_VIDEOS.map((video, index) => (
            <button
              key={video.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                index === activeIndex
                  ? 'bg-gold text-ocean-deep'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {video.caption}
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
