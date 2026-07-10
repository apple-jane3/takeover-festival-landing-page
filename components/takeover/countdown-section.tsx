import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@/components/ui/image'
import { MapPin, Music, Tent, Users, UtensilsCrossed } from 'lucide-react'
import {
  FESTIVAL_CITY,
  FESTIVAL_DATE_RANGE,
  FESTIVAL_LOCATION,
  FESTIVAL_START,
  TICKETS_ENABLED,
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
    <section id="festival" className="relative overflow-hidden py-14 md:py-20">
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
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">The Main Event</span>
        <h2 className="mt-2 text-balance font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {FESTIVAL_DATE_RANGE}
        </h2>
        <p className="mt-3 inline-flex items-center justify-center gap-2 text-pretty text-base text-white/90 sm:text-lg">
          <MapPin className="h-5 w-5 shrink-0 text-sunset" aria-hidden="true" />
          <span>
            {FESTIVAL_LOCATION} · {FESTIVAL_CITY}
          </span>
        </p>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-4 gap-2 sm:gap-3">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-xl border border-white/15 bg-white/10 py-3 backdrop-blur-md transition-transform hover:scale-105 sm:rounded-2xl sm:py-5"
            >
              <div className="font-display text-2xl text-white tabular-nums sm:text-4xl md:text-5xl">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 sm:text-[10px]">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2">
          {highlights.map((item) => (
            <li
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-teal hover:bg-teal/20 sm:text-sm sm:px-4 sm:py-2"
            >
              <item.icon className="h-4 w-4 text-teal" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>

        {TICKETS_ENABLED ? (
          <Link to="/tickets" className="btn-cta-primary mt-6">
            Book Now
          </Link>
        ) : null}
      </div>
    </section>
  )
}
