import type { CardItem } from '../App'
import { C } from '../palette'
import { ExternalLinkIcon, GitHubIcon } from './Icons'

interface DetailPanelProps {
  card: CardItem
  onClose: () => void
}

export default function DetailPanel({ card, onClose }: DetailPanelProps) {
  const iconHoverOn = (e: React.MouseEvent<HTMLAnchorElement>) =>
    ((e.currentTarget as HTMLElement).style.color = C.accent)
  const iconHoverOff = (e: React.MouseEvent<HTMLAnchorElement>) =>
    ((e.currentTarget as HTMLElement).style.color = C.textMuted)

  return (
    <aside
      className="flex flex-col h-full py-24 pl-8 pr-4"
      style={{ borderLeft: `1px solid ${C.border}` }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-10 transition-colors duration-200 self-start"
        style={{ color: C.textMuted }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
        aria-label="Close detail panel"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Close
      </button>

      {/* Image / Period badge */}
      {card.image ? (
        <div
          className="w-full rounded-2xl overflow-hidden mb-8 shadow-2xl"
          style={{ border: `1px solid ${C.border}`, aspectRatio: '16/9' }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : card.period ? (
        <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: C.textMuted }}>
          {card.period}
        </p>
      ) : null}

      {/* Period (for projects, show if exists) */}
      {card.image && card.period && (
        <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: C.textMuted }}>
          {card.period}
        </p>
      )}

      {/* Title */}
      <h2 className="text-xl font-bold leading-snug mb-1" style={{ color: C.textPrimary }}>
        {card.title}
      </h2>

      {/* Company / subtitle */}
      {card.company && (
        <p className="text-sm mb-6" style={{ color: C.accent }}>
          {card.company}
        </p>
      )}

      {/* Description bullets — all visible in panel */}
      <ul className="space-y-3 mb-8 overflow-y-auto flex-1 pr-1" style={{ scrollbarWidth: 'none' as const }}>
        {card.description.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: C.textSecondary }}>
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.accent }} />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {card.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono"
            style={{ backgroundColor: C.accentDim, color: C.accent }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        {card.githubUrl && (
          <a
            href={card.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: C.textMuted }}
            onMouseEnter={iconHoverOn}
            onMouseLeave={iconHoverOff}
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
        )}
        {card.liveUrl && (
          <a
            href={card.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: C.textMuted }}
            onMouseEnter={iconHoverOn}
            onMouseLeave={iconHoverOff}
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </aside>
  )
}
