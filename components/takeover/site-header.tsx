import { useEffect, useState, type MouseEvent } from 'react'
import { Image } from '@/components/ui/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TICKETS_URL } from './config'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Festival', href: '#festival' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Lineup', href: '#artists' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
]

const HEADER_OFFSET = 72

function scrollToHash(hash: string) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
  window.history.pushState(null, '', `#${id}`)
}

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string, onNavigate?: () => void) {
  if (!href.startsWith('#')) return
  event.preventDefault()
  scrollToHash(href)
  onNavigate?.()
}

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
        'fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300',
        scrolled
          ? 'border-b border-white/10 bg-ocean-deep/90 shadow-lg'
          : 'border-b border-white/15',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-3"
          aria-label="Takeover Festival home"
        >
          <Image
            src="/images/logo.png"
            alt="Takeover Festival logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span
            className={cn(
              'font-display text-xl tracking-wide md:text-2xl',
              scrolled ? 'text-white' : 'text-white drop-shadow-sm',
            )}
          >
            TAKEOVER
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-teal',
                scrolled ? 'text-white/85' : 'text-white/90 drop-shadow-sm',
              )}
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/15 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, () => setOpen(false))}
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
