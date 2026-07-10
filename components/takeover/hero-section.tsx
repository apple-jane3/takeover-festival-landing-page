import { HERO_IMAGE_SRC } from './config'
import { FestivalLogo } from './festival-logo'
import { Image } from '@/components/ui/image'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HERO_IMAGE_SRC}
          alt="Takeover Festival La Union 2026"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-center"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/45 via-black/15 to-ocean-deep/55" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 pt-16 text-center">
        <FestivalLogo variant="hero" priority className="mb-5" />

        <h1 className="sr-only">Takeover Festival La Union 2026</h1>
        <p className="text-pretty text-base font-medium tracking-wide text-white/90 drop-shadow sm:text-lg">
          Beach Music Festival · Party With a Purpose
        </p>
      </div>
    </section>
  )
}
