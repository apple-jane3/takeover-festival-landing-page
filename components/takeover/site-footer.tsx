import { Image } from '@/components/ui/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FESTIVAL_LOCATION } from './config'

// Brand social icons aren't available in the installed lucide-react build,
// so small inline brand glyphs are used instead.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 8.5V6.75c0-.7.55-.9 1-.9h2V3h-2.75C11.9 3 11 4.65 11 6.25V8.5H9v3h2V21h3v-9.5h2.25L18 8.5h-4Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.4c-1.3.1-2.5-.3-3.5-.9v6.4c0 3.3-2.5 5.6-5.5 5.6-2.9 0-5-2-5-4.8 0-2.9 2.3-4.9 5.4-4.6v2.5c-.4-.1-.9-.2-1.3-.1-1.2.1-2 .9-2 2.1 0 1.3 1 2.1 2.3 2.1 1.4 0 2.4-1 2.4-2.7V3h3.2Z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Takeover Festival logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-display text-2xl tracking-wide">TAKEOVER</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/70">
              Music, Waves &amp; Purpose. A beachfront celebration in La Union.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="mailto:hello@takeoverfestival.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hello@takeoverfestival.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+639171234567"
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +63 917 123 4567
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {FESTIVAL_LOCATION}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Follow</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-teal hover:bg-teal hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Takeover Festival. All rights reserved.</p>
          <p>Made with purpose in La Union.</p>
        </div>
      </div>
    </footer>
  )
}
