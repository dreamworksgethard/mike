import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../config/site'

export function FloatingXButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          href={SITE.X_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          whileHover={{ scale: 1.08, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex items-center gap-2 rounded-full border-[3px] border-ink bg-mike px-3.5 py-3 sm:px-4 font-display text-base text-ink uppercase shadow-[4px_4px_0_#000] neon-glow md:bottom-8 md:right-8"
          aria-label="Follow $MIKE on X"
        >
          <span className="text-lg leading-none">𝕏</span>
          <span className="hidden sm:inline">Follow on X</span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
