import { motion } from 'framer-motion'

type SectionTitleProps = {
  children: string
  className?: string
  align?: 'left' | 'center'
  subtitle?: string
}

export function SectionTitle({
  children,
  className = '',
  align = 'center',
  subtitle,
}: SectionTitleProps) {
  return (
    <div
      className={`relative z-10 mb-8 md:mb-14 px-1 ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 28, rotate: -2, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ type: 'spring', stiffness: 100, damping: 14 }}
        className="font-graffiti text-[clamp(2.4rem,11vw,6rem)] sm:text-6xl md:text-7xl lg:text-8xl text-mike comic-outline-lg uppercase leading-[0.95] break-words"
      >
        {children}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-3 text-white/70 font-body text-sm md:text-base max-w-xl mx-auto px-2"
        >
          {subtitle}
        </motion.p>
      ) : null}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className={`mt-4 flex gap-2 ${align === 'center' ? 'justify-center' : ''}`}
        aria-hidden
      >
        <span className="h-2 w-2 rotate-45 bg-mike" />
        <span className="h-2 w-8 bg-mike/70 rounded-full" />
        <span className="h-2 w-2 rotate-45 bg-mike" />
      </motion.div>
    </div>
  )
}
