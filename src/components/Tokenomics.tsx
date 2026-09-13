import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../config/site'
import { SectionTitle } from './SectionTitle'

function CopyCAButton() {
  const [copied, setCopied] = useState(false)
  const address = SITE.CONTRACT_ADDRESS.trim()
  const short = address
    ? `${address.slice(0, 6)}…${address.slice(-4)}`
    : 'CA SOON'

  const copy = async () => {
    if (!address) return
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      disabled={!address}
      className="group flex w-full flex-col min-[400px]:flex-row items-stretch min-[400px]:items-center justify-between gap-3 rounded-2xl border-[3px] border-mike bg-mike/10 px-4 py-4 sm:px-5 text-left transition-all hover:bg-mike hover:scale-[1.02] hover:-rotate-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 disabled:hover:rotate-0 disabled:hover:bg-mike/10"
      title={address ? 'Copy contract address' : 'Contract address coming soon'}
    >
      <div className="min-w-0">
        <div className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-mike group-hover:text-ink group-disabled:group-hover:text-mike">
          CONTRACT ADDRESS
        </div>
        <div className="mt-1 font-mono text-sm text-white truncate group-hover:text-ink group-disabled:group-hover:text-white">
          {short}
        </div>
      </div>
      <span className="shrink-0 self-stretch min-[400px]:self-auto text-center rounded-full border-[3px] border-ink bg-mike px-4 py-2.5 font-display text-base uppercase tracking-wide text-ink shadow-[3px_3px_0_#000] group-hover:bg-ink group-hover:text-mike group-disabled:group-hover:bg-mike group-disabled:group-hover:text-ink">
        {copied ? 'Copied!' : 'Copy CA'}
      </span>
    </button>
  )
}

function DexScreenerChart() {
  const base = SITE.DEXSCREENER_URL.trim()
  const embedSrc = base
    ? `${base}${base.includes('?') ? '&' : '?'}embed=1&theme=dark&trades=0&info=0`
    : ''

  return (
    <div className="overflow-hidden rounded-2xl border-[3px] sm:border-[4px] border-mike/50 bg-[#0b0e11] shadow-[4px_4px_0_#c8ff00] sm:shadow-[6px_6px_0_#c8ff00]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-mike/20 bg-ink px-3 sm:px-4 py-2.5">
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-body text-[10px] sm:text-xs font-bold uppercase tracking-widest text-mike/70 truncate">
          DexScreener · $MIKE
        </span>
      </div>

      <div className="relative h-[260px] sm:h-[360px] md:h-[440px] w-full bg-[#0b0e11]">
        {embedSrc ? (
          <iframe
            title="$MIKE DexScreener chart"
            src={embedSrc}
            className="absolute inset-0 h-full w-full border-0"
            allow="clipboard-write"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="mb-2 flex h-28 items-end gap-1.5 opacity-40" aria-hidden>
              {[32, 48, 40, 64, 52, 78, 70, 92, 84, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-sm bg-mike"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="font-display text-2xl text-mike tracking-wide uppercase">
              Chart coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative overflow-x-clip bg-ink py-14 sm:py-20 md:py-28 grain">
      <div
        className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-mike/10 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle>TOKENOMICS</SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 -mt-4 mb-8 sm:-mt-6 sm:mb-10 md:-mt-8 md:mb-14 text-center font-graffiti text-2xl sm:text-4xl md:text-5xl text-mike comic-outline-lg uppercase leading-none -rotate-1 px-2"
        >
          BUILT BY MEMES.
          <br className="sm:hidden" /> FOR MEMES.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 min-w-0"
          >
            <DexScreenerChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-3 min-w-0"
          >
            {[
              { label: 'TICKER', value: SITE.ticker },
              { label: 'CHAIN', value: SITE.chain },
              { label: 'TOTAL SUPPLY', value: SITE.totalSupply },
              { label: 'TAX', value: `${SITE.tax} — ${SITE.taxNote}` },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border-[3px] border-mike/40 bg-gradient-to-r from-mike/10 to-transparent px-4 py-3.5 sm:px-5 sm:py-4 hover:border-mike transition-colors"
              >
                <div className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-mike/80">
                  {stat.label}
                </div>
                <div className="mt-1 font-display text-xl sm:text-2xl md:text-3xl text-white tracking-wide break-words">
                  {stat.value}
                </div>
              </div>
            ))}

            <CopyCAButton />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
