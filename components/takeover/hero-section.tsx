import { useEffect, useRef } from 'react'
import { Image } from '@/components/ui/image'
import { ChevronDown } from 'lucide-react'
import { FESTIVAL_DATE_RANGE, TICKETS_URL, assetUrl } from './config'

const WAVE_PATH =
  'M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z'
const WAVE_CREST = 'M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64'
const WAVE_DURATION_MS = 16000

function WaveTile() {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="h-full min-w-0 flex-[0_0_50%]"
      aria-hidden="true"
    >
      <path fill="#fbf5ea" d={WAVE_PATH} />
      <path
        fill="none"
        stroke="rgba(33, 24, 18, 0.28)"
        strokeWidth="3"
        d={WAVE_CREST}
      />
    </svg>
  )
}

function HeroWave() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    let rafId = 0
    let start: number | null = null

    const step = (now: number) => {
      if (start === null) start = now
      const tileWidth = container.offsetWidth
      const elapsed = (now - start) % WAVE_DURATION_MS
      const offset = (elapsed / WAVE_DURATION_MS) * tileWidth
      track.style.transform = `translate3d(-${offset}px, 0, 0)`
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 overflow-hidden sm:h-40"
    >
      <div ref={trackRef} className="flex h-full w-[200%] will-change-transform">
        <WaveTile />
        <WaveTile />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[95vh] items-center justify-center overflow-hidden pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={assetUrl('/images/hero.jpg')}
          alt="Tropical beach in La Union with palm trees and turquoise water"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pt-20 text-center">
        <Image
          src={assetUrl('/images/logo.png')}
          alt="Takeover Festival logo"
          width={120}
          height={120}
          priority
          className="mb-5 h-20 w-20 object-contain drop-shadow-lg sm:h-24 sm:w-24"
        />

        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
          {FESTIVAL_DATE_RANGE}
        </span>

        <h1 className="sr-only">Takeover Beach Music Festival La Union</h1>
        <p className="font-display text-balance text-5xl leading-[0.92] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
          TAKEOVER
        </p>
        <p className="mt-2 font-display text-xl uppercase tracking-[0.35em] text-gold drop-shadow-lg sm:text-2xl">
          La Union
        </p>
        <p className="mt-3 text-pretty text-lg font-medium tracking-wide text-white/90 drop-shadow sm:text-xl">
          Beach Music Festival · Party With a Purpose
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <a href={TICKETS_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-primary w-full sm:w-auto">
            Buy Tickets
          </a>
          <a href="#about" className="btn-cta-secondary w-full sm:w-auto">
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-14 left-1/2 z-30 -translate-x-1/2 text-white/80 transition-colors hover:text-teal sm:bottom-32"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>

      <HeroWave />
    </section>
  )
}
