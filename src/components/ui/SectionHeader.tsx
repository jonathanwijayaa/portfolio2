import { memo } from 'react'

interface SectionHeaderProps {
  title: string
  sticky?: boolean
}

function SectionHeader({ title, sticky = false }: SectionHeaderProps) {
  return (
    <div
      className={[
        'mb-6 lg:hidden',
        sticky && 'sticky top-14 z-20 py-2 bg-transparent',
      ].filter(Boolean).join(' ')}
    >
      <h2 className="text-2xl font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
        {title}
      </h2>
    </div>
  )
}

export default memo(SectionHeader)
