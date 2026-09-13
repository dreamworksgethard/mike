import { SITE } from '../config/site'
import { Button } from './Button'
import { Reveal } from './Reveal'

export function CommunityCTA() {
  return (
    <section className="relative overflow-x-clip bg-ink py-12 sm:py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,255,0,0.18),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        <Reveal direction="scale" amount={0.2}>
          <div className="relative rounded-[1.5rem] sm:rounded-[2rem] border-[3px] sm:border-[4px] border-ink bg-mike px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 shadow-[6px_6px_0_#000] sm:shadow-[10px_10px_0_#000] overflow-hidden">
            <div className="halftone absolute inset-0 opacity-30 pointer-events-none" aria-hidden />

            <span
              className="absolute top-3 left-3 sm:top-4 sm:left-4 font-display text-2xl sm:text-3xl text-ink/30 rotate-[-12deg] select-none"
              aria-hidden
            >
              ★
            </span>
            <span
              className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 font-display text-3xl sm:text-4xl text-ink/25 rotate-12 select-none"
              aria-hidden
            >
              ⚡
            </span>

            <div className="relative text-center">
              <h2 className="font-body text-[clamp(1.6rem,7vw,3.75rem)] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink uppercase tracking-tight leading-[1.15] px-1">
                JOIN THE $MIKE MOVEMENT
              </h2>
              <p className="mt-4 sm:mt-5 font-display text-lg sm:text-2xl md:text-3xl text-ink/80 uppercase tracking-wide">
                ONE EYE.
                <br />
                ONE COMMUNITY.
                <br />
                ONE BIG MEME.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <Button
                  href={SITE.X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full sm:w-auto !border-ink !shadow-[4px_4px_0_#000] hover:!shadow-[6px_6px_0_#000]"
                >
                  𝕏 FOLLOW $MIKE
                </Button>
                <Button
                  href={SITE.BUY_URL}
                  className="w-full sm:w-auto !bg-ink !text-mike !border-ink hover:!bg-ink/90 !shadow-[4px_4px_0_#000]"
                >
                  BUY $MIKE ↗
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
