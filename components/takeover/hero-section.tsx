import { Image } from '@/components/ui/image'
import { ChevronDown } from 'lucide-react'
import { FESTIVAL_DATE_RANGE, TICKETS_URL } from './config'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-fixed">
        <Image
          src="/images/hero.jpg"
          alt="Tropical beach in La Union with palm trees and turquoise water"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <Image
          src="/images/logo.png"
          alt="Takeover Festival logo"
          width={120}
          height={120}
          priority
          className="mb-6 h-24 w-24 object-contain drop-shadow-lg sm:h-28 sm:w-28"
        />

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
          {FESTIVAL_DATE_RANGE}
        </span>

        <h1 className="sr-only">Takeover Beach Music Festival La Union</h1>
        <p className="font-display text-balance text-5xl leading-[0.92] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
          TAKEOVER
        </p>
        <p className="mt-2 font-display text-xl uppercase tracking-[0.35em] text-white/90 drop-shadow-lg sm:text-2xl">
          La Union
        </p>
        <p className="mt-4 text-pretty text-lg font-medium tracking-wide text-white/80 drop-shadow sm:text-xl">
          Beach Music Festival
        </p>
        <p className="mt-4 text-pretty text-base font-semibold uppercase tracking-[0.2em] text-white/70 drop-shadow sm:text-lg">
          Party With a Purpose
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-base font-bold text-black transition-all hover:scale-105 hover:bg-white/90"
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

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  )
}
