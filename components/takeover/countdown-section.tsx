import { useEffect, useState } from 'react'
import { Image } from '@/components/ui/image'
import { MapPin, Music, Tent, Users, UtensilsCrossed } from 'lucide-react'
import {
  FESTIVAL_CITY,
  FESTIVAL_DATE_RANGE,
  FESTIVAL_LOCATION,
  FESTIVAL_START,
  TICKETS_URL,
  assetUrl,
} from './config'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const highlights = [
  { icon: Music, label: 'Main Stage + VIP Pavilions' },
  { icon: Users, label: 'DOT Tourism Expo' },
  { icon: Tent, label: 'Wellness Zone' },
  { icon: UtensilsCrossed, label: 'Food Park' },
]

export function CountdownSection() {
  const target = new Date(FESTIVAL_START).getTime()
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: time?.days ?? 0 },
    { label: 'Hours', value: time?.hours ?? 0 },
    { label: 'Minutes', value: time?.minutes ?? 0 },
    { label: 'Seconds', value: time?.seconds ?? 0 },
  ]

  return (
    <section id="festival" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-fixed">
        <Image
          src={assetUrl('/images/tourism-poropoint.jpg')}
          alt="Poro Point coastline overlooking the festival grounds"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ocean-deep/85" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
          The Main Event
        </span>
        <h2 className="mt-3 text-balance font-display text-4xl leading-tight text-white md:text-6xl">
          {FESTIVAL_DATE_RANGE}
        </h2>
        <p className="mt-4 inline-flex items-center justify-center gap-2 text-pretty text-lg text-white/90">
          <MapPin className="h-5 w-5 shrink-0 text-sunset" aria-hidden="true" />
          <span>
            {FESTIVAL_LOCATION} · {FESTIVAL_CITY}
          </span>
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-3 sm:gap-5">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-2xl border border-white/15 bg-white/10 py-5 backdrop-blur-md transition-transform hover:scale-105 sm:py-7"
            >
              <div className="font-display text-3xl text-white tabular-nums sm:text-5xl md:text-6xl">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((item) => (
            <li
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-teal hover:bg-teal/20"
            >
              <item.icon className="h-4 w-4 text-teal" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>

        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta-primary mt-10"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
