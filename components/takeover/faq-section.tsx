import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { FAQ_ITEMS } from './config'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">FAQ</span>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/50"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-primary">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-teal transition-transform',
                      open === i && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {open === i ? (
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-foreground/75">
                    {item.a}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
