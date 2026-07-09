import { useEffect, useState } from 'react'
import { Image } from '@/components/ui/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TICKETS_URL } from './config'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Lineup', href: '#artists' },
  { label: 'Festival', href: '#festival' },
  { label: 'Causes', href: '#causes' },
  { label: 'Travel', href: '#travel' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-ocean-deep/90 backdrop-blur-md shadow-lg' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Takeover Festival home">
          <Image
            src="/images/logo.png"
            alt="Takeover Festival logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-display text-xl tracking-wide text-white md:text-2xl">
            TAKEOVER
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(42,157,143,0.6)] transition-transform hover:scale-105 sm:inline-flex"
          >
            Buy Tickets
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ocean-deep/95 px-4 pb-6 pt-2 backdrop-blur-md md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-base font-medium text-white/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
