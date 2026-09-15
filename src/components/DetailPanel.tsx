import type { CardItem } from '../types'
import { useTheme } from '../ThemeContext'
import { ExternalLinkIcon, GitHubIcon, ArrowLeftIcon } from './Icons'
import TechBadge from './ui/TechBadge'

interface DetailPanelProps {
  card: CardItem
  onClose: () => void
}

export default function DetailPanel({ card, onClose }: DetailPanelProps) {
  const { C } = useTheme()

  return (
    <aside
      className="h-full w-full overflow-y-auto px-5 sm:px-6 pb-16 pt-20 lg:py-24 lg:pl-8 lg:pr-6 lg:border-l flex flex-col justify-between"
      style={{
        borderColor: C.border,
        backgroundColor: 'transparent',
        scrollbarWidth: 'none' as const,
      }}
    >
      <div>
        <div
          className="sticky top-0 z-30 -mx-5 px-5 py-4 mb-6 flex items-center justify-between lg:static lg:p-0 lg:m-0 lg:mb-8 lg:bg-transparent"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            backgroundColor: `${C.bg}cc`,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-200"
            style={{ color: C.accent }}
            aria-label="Close detail panel"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to list
          </button>
        </div>

        {card.image && (
          <div className="w-full rounded-2xl overflow-hidden mb-6 shadow-xl" style={{ border: `1px solid ${C.border}`, aspectRatio: '16/9' }}>
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" width={640} height={360} />
          </div>
        )}

        {card.period && (
          <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: C.textMuted }}>
            {card.period}
          </p>
        )}

        <h1 className="text-2xl lg:text-3xl font-bold leading-snug mb-1" style={{ color: C.textPrimary }}>
          {card.title}
        </h1>
        {card.company && (
          <p className="text-sm lg:text-base font-medium mb-6" style={{ color: C.accent }}>
            {card.company}
          </p>
        )}

        <ul className="space-y-4 mb-8">
          {card.description.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-base lg:text-lg leading-relaxed" style={{ color: C.textSecondary }}>
              <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.accent }} />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {card.tech.map((t) => (
            <TechBadge key={t} name={t} variant="pill" />
          ))}
        </div>
      </div>

      <div>
        {(card.githubUrl || card.liveUrl) && (
          <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: C.border }}>
            {card.githubUrl && (
              <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-colors duration-200" style={{ backgroundColor: C.surface, color: C.textPrimary, border: `1px solid ${C.border}` }}>
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
            {card.liveUrl && (
              <a href={card.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl transition-colors duration-200" style={{ backgroundColor: C.accent, color: C.bg }}>
                <ExternalLinkIcon className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        )}

        <p className="hidden lg:block mt-8 text-xs" style={{ color: C.textMuted }}>
          Press{' '}
          <kbd className="px-1.5 py-0.5 rounded text-xs font-mono" style={{ border: `1px solid ${C.border}`, color: C.textMuted }}>
            Esc
          </kbd>{' '}
          to close
        </p>
      </div>
    </aside>
  )
}
