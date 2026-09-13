import { Reveal } from './Reveal'

const items = [
  'ONE EYE. ONE MISSION. TO THE MOON.',
  '$MIKE ON ROBINHOOD CHAIN',
  'BUILT BY MEMES FOR MEMES',
  'MONSTROUS POTENTIAL',
  'SAME GUY. NEW CHAIN. BIGGER DREAMS.',
  'JOIN THE $MIKE MOVEMENT',
]

export function Marquee({ className = '' }: { className?: string }) {
  const row = [...items, ...items]
  return (
    <Reveal direction="fade" amount={0.4}>
      <div
        className={`relative overflow-hidden border-y-[3px] border-mike bg-mike text-ink ${className}`}
        aria-hidden
      >
        <div className="flex w-max animate-marquee whitespace-nowrap py-2.5">
          {row.map((text, i) => (
            <span
              key={`${text}-${i}`}
              className="mx-6 font-display text-xl md:text-2xl tracking-wide uppercase"
            >
              {text}
              <span className="mx-6 text-ink/40">★</span>
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
