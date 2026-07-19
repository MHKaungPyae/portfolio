import { cn } from '../../lib/utils'

const variants = {
  default: 'bg-gray-900 text-gray-300 border-gray-700',
  outline: 'bg-primary/10 text-primary border-primary/30',
  gradient: 'bg-primary text-white border-transparent',
}

export default function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
