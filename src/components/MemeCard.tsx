import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

export type MemeCardData = {
  id: string
  caption: string
  src: string
  rotate?: number
}

type MemeCardProps = {
  meme: MemeCardData
  index: number
}

export function MemeCard({ meme, index }: MemeCardProps) {
  const baseRotate = meme.rotate ?? 0
  const hoverRotate = baseRotate === 0 ? 2 : baseRotate * 1.35

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 3) * 0.05, duration: 0.35, ease: 'easeOut' }}
      className="meme-card group relative mb-4 break-inside-avoid md:mb-5"
      style={
        {
          '--card-rotate': `${baseRotate}deg`,
          '--card-hover-rotate': `${hoverRotate}deg`,
        } as CSSProperties
      }
    >
      <div className="overflow-hidden rounded-3xl border-[4px] border-ink bg-ink shadow-[6px_6px_0_#c8ff00] transition-[box-shadow] duration-200 ease-out group-hover:shadow-[8px_8px_0_#c8ff00]">
        <div className="relative overflow-hidden bg-ink">
          <img
            src={meme.src}
            alt={meme.caption}
            className="pointer-events-none block h-auto w-full select-none"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="border-t-[4px] border-ink bg-mike px-3 py-3">
          <h3 className="font-display text-lg sm:text-xl text-ink text-center uppercase tracking-wide leading-tight">
            {meme.caption}
          </h3>
        </div>
      </div>
    </motion.article>
  )
}
