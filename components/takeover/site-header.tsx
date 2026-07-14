import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TICKETS_ENABLED } from './config'
import { FestivalLogo } from './festival-logo'

type NavLink = {
  label: string
  href: string
  longLabel?: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Causes', href: '/causes', longLabel: 'Community Causes' },
  { label: 'Expo', href: '/expo', longLabel: 'Tourism Expo' },
  { label: 'Location', href: '/location', longLabel: 'Event Location' },
  { label: 'Media', href: '/media' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  ...(TICKETS_ENABLED ? [{ label: 'Tickets', href: '/tickets' }] : []),
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setScrolled(window.scrollY > 40)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300',
        scrolled
          ? 'border-b border-white/10 bg-ocean-deep/90 shadow-lg'
          : 'border-b border-white/15',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-8">
        <Link
          to="/"
          className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
          aria-label="Takeover Festival home"
        >
          <FestivalLogo variant="header" priority />
        </Link>

        <div className="hidden items-center gap-3 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-[13px] font-medium transition-colors hover:text-teal',
                location.pathname === link.href ? 'text-teal' : scrolled ? 'text-white/85' : 'text-white/90 drop-shadow-sm',
              )}
            >
              {link.longLabel ?? link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {TICKETS_ENABLED ? (
            <Link
              to="/tickets"
              className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(42,157,143,0.6)] transition-transform hover:scale-105 sm:inline-flex"
            >
              Buy Tickets
            </Link>
          ) : null}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-white/15 px-4 pb-5 pt-2 backdrop-blur-md xl:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="border-b border-white/10 py-3 text-base font-medium text-white/90"
              >
                {link.longLabel ?? link.label}
              </Link>
            ))}
            {TICKETS_ENABLED ? (
              <Link
                to="/tickets"
                className="mt-4 rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Buy Tickets
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
