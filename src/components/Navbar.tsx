import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../config/site'
import { Button } from './Button'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#gallery', label: 'Gallery' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-ink/95 backdrop-blur-md border-b border-mike/20 shadow-[0_8px_30px_rgba(200,255,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2 group shrink-0 min-w-0">
          <img
            src="/assets/mike-mascot.png"
            alt="$MIKE mascot"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-[3px] border-mike bg-ink object-cover object-center shadow-[0_0_0_2px_#000] group-hover:rotate-6 transition-transform"
          />
          <span className="font-display text-xl sm:text-2xl text-mike comic-outline tracking-wide truncate">
            $MIKE
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-mike transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            href={SITE.X_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="!px-5 !py-2.5 text-base"
          >
            𝕏 Follow on X
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 rounded-xl border-2 border-mike bg-ink/80 p-2.5"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-full bg-mike transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-mike transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-mike transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-mike/20 bg-ink/95 backdrop-blur-lg overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-display text-2xl text-mike hover:bg-mike/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={SITE.X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  𝕏 Follow on X
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
