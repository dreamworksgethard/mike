import { SITE } from '../config/site'
import { Reveal } from './Reveal'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#gallery', label: 'Gallery' },
  { href: SITE.X_URL, label: 'X', external: true },
]

export function Footer() {
  return (
    <footer className="relative overflow-x-clip border-t-[3px] border-mike/30 bg-ink pt-10 sm:pt-14 pb-24 sm:pb-8 grain">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-10">
            <div className="flex items-start gap-3 sm:gap-4">
              <img
                src="/assets/mike-mascot.png"
                alt="$MIKE"
                className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full border-[3px] border-mike bg-ink object-cover object-center shadow-[0_0_0_2px_#000]"
              />
              <div className="min-w-0">
                <p className="font-display text-xl sm:text-2xl text-mike comic-outline tracking-wide">
                  MIKE WAZOWSKI — $MIKE
                </p>
                <p className="mt-1 font-body text-xs sm:text-sm text-white/60 uppercase tracking-wide">
                  {SITE.tagline}
                </p>
                <p className="mt-3 sm:mt-4 font-graffiti text-lg sm:text-xl text-mike/80 -rotate-1">
                  ONE EYE CHANGES EVERYTHING.
                </p>
              </div>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="font-body text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-mike transition-colors py-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Reveal>

        <Reveal direction="fade" delay={0.1}>
          <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="font-body text-xs text-white/40">
              © 2026 $MIKE. ALL MEMES RESERVED.
            </p>
            <p className="font-body text-[11px] text-white/35 max-w-md sm:text-right leading-relaxed">
              $MIKE is a meme/community project. Nothing on this website constitutes financial
              advice.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
