import { cn } from '../../lib/utils'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20',
  outline: 'bg-transparent text-gray-300 border border-gray-700 hover:border-primary hover:text-primary shadow-sm',
  ghost: 'bg-transparent text-gray-400 hover:text-primary hover:bg-primary/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  download,
  className,
  target,
  rel,
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    const resolvedTarget = target || (isExternal ? '_blank' : undefined)
    const resolvedRel = rel || (isExternal ? 'noopener noreferrer' : undefined)

    return (
      <a
        href={href}
        target={resolvedTarget}
        rel={resolvedRel}
        download={download}
        className={classes}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  )
}
