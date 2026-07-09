import { Image } from '@/components/ui/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  FESTIVAL_CITY,
  HASHTAGS,
  SITE_URL,
  SOCIAL_LINKS,
} from './config'

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

const socials = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: 'TakeOver Lounge', href: SOCIAL_LINKS.facebookLounge, Icon: FacebookIcon },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Takeover Festival logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-2xl tracking-wide">TAKEOVER</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/70">
              Party With a Purpose. A 3-day beachfront celebration in La Union.
            </p>
            <p className="mt-3 text-sm text-teal">{HASHTAGS.join(' · ')}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal"
                >
                  {SITE_URL.replace('https://', '')}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {FESTIVAL_CITY}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Follow</h3>
            <div className="mt-4 flex flex-wrap gap-3">
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
