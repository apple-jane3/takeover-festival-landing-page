import { Image } from '@/components/ui/image'
import { Lock, ShieldCheck, Ticket } from 'lucide-react'
import { Reveal } from './reveal'
import { TICKETS_URL } from './config'

const HELIXPAY_LOGO = `${import.meta.env.BASE_URL}images/sponsors/helixpay.png`

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Official Gateway Partner',
    description: 'HelixPay is the official and authorized payment gateway for Takeover Festival ticket sales.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Every transaction is encrypted and processed through a trusted, PCI-compliant payment platform.',
  },
  {
    icon: Ticket,
    title: 'Safe Ticket Purchase',
    description: 'Buy passes with confidence — your tickets are delivered instantly after a verified checkout.',
  },
] as const

export function HelixPaySection({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const isDark = variant === 'dark'

  return (
    <section id="helixpay" className={className ?? 'bg-background py-12 md:py-16'}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Secure Checkout</span>
          <h2
            className={`mt-2 text-balance font-display text-3xl leading-tight md:text-4xl ${
              isDark ? 'text-white' : 'text-primary'
            }`}
          >
            Official Payment Gateway
          </h2>
          <p
            className={`mt-3 text-pretty text-base leading-relaxed ${
              isDark ? 'text-white/75' : 'text-muted-foreground'
            }`}
          >
            Purchase tickets through HelixPay — our official gateway partner for 100% secure checkout.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-8 flex justify-center">
          <div
            className={`rounded-2xl border px-8 py-6 shadow-sm ${
              isDark ? 'border-white/10 bg-white/5' : 'border-border bg-card'
            }`}
          >
            <Image
              src={HELIXPAY_LOGO}
              alt="HelixPay"
              width={200}
              height={64}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustPoints.map((point, i) => (
            <Reveal key={point.title} delay={80 + i * 40}>
              <div
                className={`h-full rounded-2xl border p-5 text-center ${
                  isDark ? 'border-white/10 bg-white/5' : 'border-border bg-card'
                }`}
              >
                <point.icon className="mx-auto h-8 w-8 text-teal" aria-hidden="true" />
                <h3 className={`mt-3 font-display text-lg ${isDark ? 'text-white' : 'text-primary'}`}>
                  {point.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-white/75' : 'text-muted-foreground'}`}>
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-8 text-center">
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-teal/90"
          >
            Buy Tickets Securely
          </a>
        </Reveal>
      </div>
    </section>
  )
}
