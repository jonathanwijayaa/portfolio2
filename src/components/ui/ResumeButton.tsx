import { memo } from 'react'
import { RESUME_URL } from '../../data'
import { ArrowRightIcon } from '../Icons'

interface ResumeButtonProps {
  label?: string
}

function ResumeButton({ label = 'View Full Résumé' }: ResumeButtonProps) {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-sm rounded-xl px-4 py-2.5 transition-all duration-200 group text-[var(--accent)] bg-[var(--accent-dim)] border border-[var(--border-hover)] hover:bg-[var(--surface)] hover:border-[var(--accent)]"
    >
      {label}
      <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

export default memo(ResumeButton)
