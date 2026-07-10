import { Calendar } from 'lucide-react'
import { Reveal } from './reveal'
import { FESTIVAL_SCHEDULE } from './config'

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-secondary py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Plan Your Weekend</span>
          <h2 className="mt-2 font-display text-4xl text-primary md:text-5xl">Festival Schedule</h2>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {FESTIVAL_SCHEDULE.map((day, i) => (
            <Reveal
              key={day.day}
              delay={i * 60}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md sm:p-5"
            >
              <div className="flex items-center gap-2 text-teal">
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider sm:text-sm">
                  {day.day} · {day.date}
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg text-primary sm:text-xl">{day.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {day.items.map((item) => (
                  <li key={item} className="text-xs leading-relaxed text-foreground/75 sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
