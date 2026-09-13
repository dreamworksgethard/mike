/**
 * $MIKE site configuration
 * Update these values when links / token details are confirmed.
 */
export const SITE = {
  name: 'Mike Wazowski',
  ticker: '$MIKE',
  chain: 'ROBINHOOD CHAIN',
  tagline: 'THE ONE-EYED MEME ON ROBINHOOD CHAIN.',
  description:
    'Meet $MIKE — the one-eyed meme coin bringing monster energy to Robinhood Chain.',
  title:
    'Mike Wazowski $MIKE — The One-Eyed Meme on Robinhood Chain',

  /** Replace with your real X/Twitter profile URL */
  X_URL: 'https://x.com/MikewazowskiRh',

  /** Replace with your buy / swap link */
  BUY_URL: '#buy',

  /** Leave empty until confirmed — will hide contract UI when blank */
  CONTRACT_ADDRESS: '',

  /**
   * DexScreener pair page URL (without embed params).
   * Example: "https://dexscreener.com/ethereum/0xPAIRADDRESS"
   * Leave empty to show a chart placeholder until the pair is live.
   */
  DEXSCREENER_URL: '',

  totalSupply: '1,000,000,000',
  tax: '0%',
  taxNote: 'JUST VIBES',

  /**
   * Placeholder tokenomics — mark as configurable until confirmed.
   * Values should sum to 100.
   */
  tokenomics: [
    { label: 'COMMUNITY', percent: 50, color: '#C8FF00' },
    { label: 'LIQUIDITY', percent: 20, color: '#7CFF3A' },
    { label: 'MARKETING', percent: 20, color: '#3D9B1F' },
    { label: 'TEAM', percent: 10, color: '#1A5C12' },
  ] as const,

  tokenomicsPlaceholder: true,
} as const

export type SiteConfig = typeof SITE
