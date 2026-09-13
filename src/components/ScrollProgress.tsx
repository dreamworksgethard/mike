import { motion, useScroll, useSpring } from 'framer-motion'

/** Neon scroll progress bar across the top of the page */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-mike shadow-[0_0_12px_rgba(200,255,0,0.7)]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
