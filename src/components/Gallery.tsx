import { SectionTitle } from './SectionTitle'
import { Reveal } from './Reveal'
import { MemeCard, type MemeCardData } from './MemeCard'

const memes: MemeCardData[] = [
  {
    id: '1',
    caption: 'WHEN $MIKE LISTS',
    src: '/assets/gallery/when-mike-lists.png',
    rotate: -2,
  },
  {
    id: '2',
    caption: 'STACKING $MIKE',
    src: '/assets/gallery/stacking-mike.png',
    rotate: 1.5,
  },
  {
    id: '3',
    caption: 'MAKE MEMES GREAT AGAIN',
    src: '/assets/gallery/make-memes-great-again.png',
    rotate: -1,
  },
  {
    id: '4',
    caption: 'WORKING HARD FOR $MIKE',
    src: '/assets/gallery/working-hard.png',
    rotate: 2,
  },
  {
    id: '5',
    caption: '$MIKE EVERYWHERE',
    src: '/assets/gallery/mike-everywhere.png',
    rotate: -1.5,
  },
  {
    id: '6',
    caption: 'TO THE MOON',
    src: '/assets/gallery/to-the-moon.png',
    rotate: 1,
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-x-clip bg-mike-deeper py-14 sm:py-20 md:py-28 grain">
      <div className="halftone absolute inset-0 opacity-25 pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle>GALLERY</SectionTitle>

        <Reveal direction="fade" delay={0.05}>
          <p className="mx-auto mb-8 sm:mb-10 max-w-lg text-center font-body text-white/60 text-sm md:text-base px-2">
            Official $MIKE meme stash. Screenshot freely. Share responsibly. Memes irresponsibly.
          </p>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          {memes.map((meme, i) => (
            <MemeCard key={meme.id} meme={meme} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
