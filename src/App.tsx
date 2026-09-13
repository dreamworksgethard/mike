import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Tokenomics } from './components/Tokenomics'
import { Gallery } from './components/Gallery'
import { CommunityCTA } from './components/CommunityCTA'
import { Footer } from './components/Footer'
import { FloatingXButton } from './components/FloatingXButton'
import { ScrollProgress } from './components/ScrollProgress'

export default function App() {
  return (
    <div className="min-h-svh bg-ink text-white overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Tokenomics />
        <Gallery />
        <Marquee />
        <CommunityCTA />
      </main>
      <Footer />
      <FloatingXButton />
    </div>
  )
}
