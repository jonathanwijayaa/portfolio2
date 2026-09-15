import { memo } from 'react'

interface TechBadgeProps {
  name: string
  icon?: string
  variant?: 'default' | 'compact' | 'pill'
}

const variantClasses = {
  default: 'rounded-2xl px-3.5 py-2 bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)]',
  compact: 'rounded-xl px-2.5 py-0.5 bg-[var(--accent-dim)] text-[var(--accent)]',
  pill: 'rounded-full px-3 py-1 bg-[var(--accent-dim)] text-[var(--accent)]',
} as const

function TechBadge({ name, icon, variant = 'default' }: TechBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium ${variantClasses[variant]}`}>
      {icon ? (
        <img src={icon} alt={name} className="w-4 h-4 object-contain shrink-0" loading="lazy" width={16} height={16} />
      ) : variant === 'default' ? (
        <span className="w-2 h-2 rounded-full shrink-0 bg-[var(--accent)]" />
      ) : null}
      {name}
    </span>
  )
}

export default memo(TechBadge)
