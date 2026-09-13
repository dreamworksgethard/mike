import { SectionTitle } from './SectionTitle'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="relative overflow-x-clip bg-mike-deeper py-14 sm:py-20 md:py-28 grain">
      <div className="halftone absolute inset-0 opacity-30 pointer-events-none" aria-hidden />
      <div
        className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-mike/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle>ABOUT $MIKE</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <Reveal direction="up">
            <div className="rounded-[1.5rem] sm:rounded-[2rem] border-[3px] sm:border-[4px] border-ink bg-ink p-5 sm:p-6 md:p-8 shadow-[6px_6px_0_#c8ff00] sm:shadow-[8px_8px_0_#c8ff00]">
              <p className="font-body text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Mike Wazowski (<span className="text-mike font-bold">$MIKE</span>) is the one-eyed
                legend bringing monster energy to the blockchain on{' '}
                <span className="text-mike font-bold">Robinhood Chain</span>.
              </p>
              <p className="mt-4 font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                A community-driven meme coin inspired by everyone&apos;s favorite green icon.
              </p>
              <p className="mt-4 font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                No boring vibes.
                <br />
                No corporate energy.
                <br />
                Just memes, community, and{' '}
                <span className="text-mike font-bold">$MIKE</span>.
              </p>

              <p className="mt-6 sm:mt-8 font-graffiti text-2xl sm:text-3xl md:text-4xl text-mike comic-outline uppercase -rotate-1">
                MONSTROUS POTENTIAL.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <div className="relative flex flex-col items-center px-2">
              <div className="relative z-20 mb-[-1.25rem] max-w-[16rem] sm:max-w-xs rotate-[-3deg]">
                <div className="rounded-[1.5rem] sm:rounded-[2rem] border-[3px] sm:border-[4px] border-ink bg-white px-4 py-3 sm:px-5 sm:py-4 shadow-[5px_5px_0_#000]">
                  <p className="font-display text-lg sm:text-2xl text-ink leading-tight uppercase text-center">
                    DIFFERENT EYES.
                    <br />
                    SAME DREAMS.
                  </p>
                  <p className="mt-2 text-center font-body text-sm font-bold text-ink/60">
                    — MIKE
                  </p>
                </div>
                <div
                  className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-b-4 border-r-4 border-ink bg-white"
                  aria-hidden
                />
              </div>

              <div className="relative mt-4">
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-full bg-mike/20 blur-xl"
                  aria-hidden
                />
                <img
                  src="/assets/mike-mascot.png"
                  alt="Mike chilling with monstrous potential"
                  className="relative z-10 w-48 sm:w-72 md:w-96 mascot-glow animate-float select-none rounded-full border-[4px] border-mike bg-ink object-cover shadow-[0_0_0_3px_#000]"
                  style={{ animationDelay: '0.5s' }}
                  draggable={false}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
