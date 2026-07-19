import { cn } from '../../lib/utils'

export default function GlassCard({ children, hover = false, className }) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        hover && 'card-hover',
        className
      )}
    >
      {children}
    </div>
  )
}
