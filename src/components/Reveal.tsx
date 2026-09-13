import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

type RevealProps = {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  amount?: number
}

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  scale: { scale: 0.9 },
  fade: {},
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.55,
  amount = 0.18,
}: RevealProps) {
  const from = offsets[direction]

  // On narrow screens, avoid horizontal slide that causes overflow jank
  const isHorizontal = direction === 'left' || direction === 'right'
  const mobileSafeFrom = isHorizontal ? { y: 36 } : from

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: isHorizontal ? 0 : (from.x ?? 0),
      y: mobileSafeFrom.y ?? from.y ?? 0,
      scale: from.scale ?? 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: '-40px 0px -40px 0px' }}
    >
      {children}
    </motion.div>
  )
}
