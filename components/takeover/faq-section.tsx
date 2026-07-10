import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQ_ITEMS } from './config'

export function FaqSection({ standalone = false }: { standalone?: boolean }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className={standalone ? '' : 'bg-background py-12 md:py-16'}>
      <div className={standalone ? '' : 'mx-auto max-w-3xl px-4 md:px-8'}>
        {!standalone ? (
          <div className="mb-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">FAQ</span>
            <h2 className="mt-2 font-display text-4xl text-primary md:text-5xl">Frequently Asked Questions</h2>
          </div>
        ) : null}

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary/50"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-primary">{item.q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-teal transition-transform',
                    open === i && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
              {open === i ? (
                <p className="border-t border-border px-4 py-3 text-sm leading-relaxed text-foreground/75">
                  {item.a}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
