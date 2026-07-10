import { FormEvent, useState } from 'react'
import { Image } from '@/components/ui/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  FESTIVAL_CITY,
  HASHTAGS,
  NEWSLETTER_EMAIL,
  SITE_URL,
  SOCIAL_LINKS,
  assetUrl,
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

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.4c-1.3.1-2.5-.3-3.5-.9v6.4c0 3.3-2.5 5.6-5.5 5.6-2.9 0-5-2-5-4.8 0-2.9 2.3-4.9 5.4-4.6v2.5c-.4-.1-.9-.2-1.3-.1-1.2.1-2 .9-2 2.1 0 1.3 1 2.1 2.3 2.1 1.4 0 2.4-1 2.4-2.7V3h3.2Z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.77C18.36 6 12 6 12 6s-6.36 0-8.04.231A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.77C5.64 18 12 18 12 18s6.36 0 8.04-.231a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.2-3.999ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, Icon: YouTubeIcon },
]

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    window.location.href = `mailto:${NEWSLETTER_EMAIL}?subject=Newsletter%20Signup&body=Please%20subscribe%20${encodeURIComponent(email)}`
    setSubmitted(true)
  }

  return (
    <footer className="bg-ocean-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={assetUrl('/images/logo.png')}
                alt="Takeover Festival logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-2xl tracking-wide">TAKEOVER</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/70">
              Party With a Purpose. A 5-day beachfront celebration in La Union.
            </p>
            <p className="mt-3 text-sm text-teal">{HASHTAGS.join(' · ')}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
                  {SITE_URL.replace('https://', '')}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-teal">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={CONTACT_PHONE_HREF} className="inline-flex items-center gap-2 hover:text-teal">
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-teal hover:bg-teal"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Newsletter</h3>
            <p className="mt-4 text-sm text-white/70">Get lineup drops, ticket alerts, and festival news.</p>
            <form onSubmit={onSubscribe} className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-teal focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-teal px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            {submitted ? (
              <p className="mt-2 text-xs text-teal">Thanks! Check your email client to confirm.</p>
            ) : null}
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
