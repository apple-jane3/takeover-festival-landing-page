import { Image } from '@/components/ui/image'
import { ChevronDown } from 'lucide-react'
import { TICKETS_URL } from './config'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with subtle fixed parallax */}
      <div className="absolute inset-0 bg-fixed">
        <Image
          src="/images/hero.png"
          alt="Crowd at the Takeover Festival on the beach at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-transparent to-ocean-deep/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
          November 2026 · La Union
        </span>
        <h1 className="text-balance font-display text-5xl leading-[0.92] tracking-tight text-gold drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
          TAKEOVER
        </h1>
        <p className="mt-2 font-display text-xl uppercase tracking-[0.35em] text-white drop-shadow-lg sm:text-2xl">
          Beach Music Festival
        </p>
        <p className="mt-6 text-pretty text-lg font-semibold uppercase tracking-[0.2em] text-teal drop-shadow sm:text-2xl">
          Party With a Purpose
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full bg-gold px-9 py-4 text-base font-bold text-ocean-deep shadow-[0_0_30px_rgba(226,164,28,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(226,164,28,0.9)]"
          >
            Buy Tickets
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/90 transition-colors hover:text-gold"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  )
}
