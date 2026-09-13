import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SITE } from '../config/site'
import { Button } from './Button'

function CitySkyline() {
  return (
    <svg
      className="absolute bottom-0 left-0 right-0 w-full h-28 sm:h-40 md:h-56 opacity-40 pointer-events-none"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="#061208"
        d="M0 200V120h40v-40h30v40h50V60h35v60h45V80h60v40h40V40h50v80h70V90h40v50h55V70h45v70h80V50h60v90h90V85h50v55h70V100h40v40h100V60h55v80h80V110h45v30h120V90h40v50h60V120h50v80H0z"
      />
      <path
        fill="#0a1f05"
        d="M0 200V150h60v-30h40v30h70V120h50v40h90V110h40v50h80V130h55v30h100V100h45v60h120V140h70v20h90V125h50v35h80V150h100v50H0z"
      />
      {Array.from({ length: 28 }).map((_, i) => (
        <rect
          key={i}
          x={40 + i * 48}
          y={110 + (i % 3) * 12}
          width="4"
          height="6"
          fill="#c8ff00"
          opacity={0.25 + (i % 4) * 0.1}
        />
      ))}
    </svg>
  )
}

function Annotation({
  children,
  className,
  rotate = -6,
}: {
  children: string
  className?: string
  rotate?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring' }}
      className={`absolute z-20 max-w-[7.5rem] sm:max-w-[11rem] pointer-events-none ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <div className="rounded-2xl border-[3px] border-ink bg-mike px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[3px_3px_0_#000]">
        <p className="font-display text-xs sm:text-base text-ink leading-tight uppercase">
          {children}
        </p>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const moonY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120])
  const moonScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.75])
  const skylineY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 40])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] overflow-x-clip overflow-y-visible grain bg-ink pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28"
    >
      <div
        className="absolute top-20 right-[10%] h-40 w-40 sm:h-72 sm:w-72 rounded-full bg-mike/20 blur-[80px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/3 left-0 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-mike-dark/60 blur-[70px] pointer-events-none"
        aria-hidden
      />

      <motion.div
        style={{ y: moonY, scale: moonScale }}
        className="absolute top-20 right-3 sm:top-24 sm:right-[8%] md:right-[12%] h-16 w-16 sm:h-28 sm:w-28 md:h-40 md:w-40 rounded-full bg-mike/90 shadow-[0_0_40px_rgba(200,255,0,0.5)] opacity-70 sm:opacity-80 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-dashed border-ink/30" />
        <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-4xl md:text-5xl opacity-40">
          🪶
        </div>
      </motion.div>

      <div className="halftone absolute inset-0 opacity-40 pointer-events-none" aria-hidden />
      <motion.div style={{ y: skylineY }} className="absolute inset-x-0 bottom-0">
        <CitySkyline />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-4 items-center px-4 md:px-6"
      >
        {/* Mascot first on mobile */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[240px] sm:min-h-[320px] md:min-h-[400px] overflow-visible">
          <div
            className="absolute h-[60%] w-[60%] rounded-full bg-mike/15 blur-3xl pointer-events-none"
            aria-hidden
          />

          {/* Annotations only from sm up — avoid mobile overflow clutter */}
          <Annotation className="hidden sm:block top-4 left-0 sm:left-4 md:left-8" rotate={-8}>
            SAME GUY. NEW CHAIN. BIGGER DREAMS.
          </Annotation>
          <Annotation className="hidden sm:block top-16 right-0 sm:right-2" rotate={8}>
            TO THE MOON
          </Annotation>
          <Annotation className="hidden md:block bottom-20 left-0 sm:left-2" rotate={-4}>
            $MIKE EVERYWHERE
          </Annotation>
          <Annotation className="hidden sm:block bottom-8 right-0 sm:right-6" rotate={6}>
            ONE EYE CHANGES EVERYTHING.
          </Annotation>

          <svg
            className="absolute left-2 top-1/2 w-16 h-16 text-mike animate-arrow opacity-80 hidden md:block"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden
          >
            <path
              d="M8 32h40M36 16l16 16-16 16"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <motion.div
            className="relative z-10 animate-float animate-pulse-glow"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative mx-auto h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]">
              <img
                src="/assets/mike-mascot.png"
                alt="Mike Wazowski $MIKE mascot"
                className="mascot-glow relative z-10 h-full w-full rounded-full border-[4px] sm:border-[5px] border-mike bg-ink object-cover object-center select-none shadow-[0_0_0_3px_#000,0_0_24px_rgba(200,255,0,0.45)]"
                draggable={false}
              />
              <div
                className="absolute -z-0 inset-[-6%] sm:inset-[-8%] rounded-full border-4 border-dashed border-mike/30 animate-wiggle"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-mike/50 bg-mike/10 px-3 py-1 font-body text-[10px] sm:text-xs font-bold uppercase tracking-widest text-mike">
              <span className="h-2 w-2 rounded-full bg-mike animate-pulse" />
              Live on {SITE.chain}
            </p>

            <h1 className="font-graffiti leading-[0.9] uppercase">
              <span className="block text-[clamp(2.75rem,14vw,6rem)] sm:text-7xl md:text-8xl lg:text-9xl text-mike comic-outline-lg">
                MIKE
              </span>
              <span className="block text-[clamp(2.1rem,11vw,5rem)] sm:text-6xl md:text-7xl lg:text-8xl text-mike comic-outline-lg">
                WAZOWSKI
              </span>
            </h1>

            <div className="mt-3 inline-block -rotate-1 rounded-xl border-[3px] border-ink bg-mike-dark px-3 py-1 sm:px-4 sm:py-1.5 shadow-[4px_4px_0_#c8ff00]">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-mike tracking-widest">
                {SITE.ticker}
              </span>
            </div>

            <p className="mt-5 sm:mt-6 font-display text-xl sm:text-3xl md:text-4xl text-white leading-tight">
              ONE EYE.
              <br />
              ONE MISSION.
              <br />
              <span className="text-mike text-neon">TO THE MOON.</span>
            </p>

            <p className="mt-4 mx-auto lg:mx-0 max-w-md font-body text-sm sm:text-base md:text-lg text-white/75 leading-relaxed">
              THE ONE-EYED MEME HAS ARRIVED ON{' '}
              <span className="text-mike font-bold">{SITE.chain}</span>.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3">
              <Button href={SITE.BUY_URL} className="w-full sm:w-auto min-w-0 sm:min-w-[9.5rem] !text-base sm:!text-lg !py-3.5">
                BUY $MIKE ↗
              </Button>
              <Button
                href={SITE.X_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full sm:w-auto min-w-0 sm:min-w-[9.5rem] !text-base sm:!text-lg !py-3.5"
              >
                𝕏 FOLLOW ON X
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
