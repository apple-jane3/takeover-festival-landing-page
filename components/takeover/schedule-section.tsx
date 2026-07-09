import { Calendar } from 'lucide-react'
import { Reveal } from './reveal'
import { FESTIVAL_SCHEDULE } from './config'

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Plan Your Weekend
          </span>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">Festival Schedule</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {FESTIVAL_SCHEDULE.map((day, i) => (
            <Reveal
              key={day.day}
              delay={i * 100}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-teal">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {day.day} · {day.date}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-primary">{day.title}</h3>
              <ul className="mt-4 space-y-2">
                {day.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/75">
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
