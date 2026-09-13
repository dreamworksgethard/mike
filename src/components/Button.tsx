import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type SharedProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

type AsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type AsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = AsButton | AsLink

const variants = {
  primary:
    'bg-mike text-ink border-ink hover:bg-mike-bright hover:scale-[1.04] hover:-rotate-1 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000]',
  secondary:
    'bg-ink text-mike border-mike hover:bg-mike hover:text-ink hover:scale-[1.04] hover:rotate-1 shadow-[4px_4px_0_#c8ff00] hover:shadow-[6px_6px_0_#c8ff00]',
  ghost:
    'bg-transparent text-white border-white/40 hover:border-mike hover:text-mike hover:scale-[1.03]',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', ...rest } = props
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full border-[3px] px-6 py-3',
    'font-display text-lg tracking-wide uppercase transition-all duration-200',
    'active:translate-y-[2px] active:shadow-none cursor-pointer select-none',
    variants[variant],
    className,
  ].join(' ')

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as AsButton)}>
      {children}
    </button>
  )
}
