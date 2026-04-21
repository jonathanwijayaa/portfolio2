import type { CardItem } from '../App'
import { useTheme } from '../ThemeContext'
import { ExternalLinkIcon, GitHubIcon, ArrowLeftIcon } from './Icons'

interface DetailPanelProps {
  card: CardItem
  onClose: () => void
}

export default function DetailPanel({ card, onClose }: DetailPanelProps) {
  const { C } = useTheme()

  return (
    <aside
      className="h-full overflow-y-auto py-24 pl-8 pr-6"
      style={{ borderLeft: `1px solid ${C.border}`, scrollbarWidth: 'none' as const }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-10 transition-colors duration-200"
        style={{ color: C.textMuted }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
        aria-label="Close detail panel"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Close
      </button>

      {/* Project image */}
      {card.image && (
        <div
          className="w-full rounded-2xl overflow-hidden mb-7 shadow-2xl"
          style={{ border: `1px solid ${C.border}`, aspectRatio: '16/9' }}
        >
          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Period badge */}
      {card.period && (
        <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: C.textMuted }}>
          {card.period}
        </p>
      )}

      {/* Title */}
      <h2 className="text-xl font-bold leading-snug mb-1" style={{ color: C.textPrimary }}>
        {card.title}
      </h2>

      {/* Company */}
      {card.company && (
        <p className="text-sm mb-7" style={{ color: C.accent }}>
          {card.company}
        </p>
      )}

      {/* All description bullets */}
      <ul className="space-y-4 mb-8">
        {card.description.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: C.textSecondary }}>
            <span
              className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: C.accent }}
            />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-7">
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
      {(card.githubUrl || card.liveUrl) && (
        <div className="flex items-center gap-5">
          {card.githubUrl && (
            <a
              href={card.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: C.textMuted }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
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
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* Keyboard hint */}
      <p className="mt-10 text-xs" style={{ color: C.textMuted }}>
        Press{' '}
        <kbd
          className="px-1.5 py-0.5 rounded text-xs font-mono"
          style={{ border: `1px solid ${C.border}`, color: C.textMuted }}
        >
          Esc
        </kbd>{' '}
        to close
      </p>
    </aside>
  )
}
