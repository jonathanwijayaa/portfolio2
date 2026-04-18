import { experiences } from '../data'
import { ArrowUpRightIcon } from './Icons'
import { C } from '../palette'
import type { CardItem } from '../App'

const MAX_BULLETS = 2

interface ExperienceProps {
  selectedCard: CardItem | null
  onSelect: (card: CardItem) => void
}

export default function Experience({ selectedCard, onSelect }: ExperienceProps) {
  const cardOn = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement
    el.style.backgroundColor = C.surface
    el.style.boxShadow = `inset 0 1px 0 0 ${C.borderHover}, 0 8px 32px rgba(0,0,0,0.4)`
  }
  const cardOff = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement
    el.style.backgroundColor = 'transparent'
    el.style.boxShadow = 'none'
  }

  return (
    <section id="experience" aria-label="Work experience" className="mb-28 scroll-mt-24">
      {/* Mobile section label */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-8 px-6 py-5 lg:hidden"
        style={{
          backdropFilter: 'blur(14px)',
          backgroundColor: `${C.bg}cc`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: C.textPrimary }}>
          Experience
        </h2>
      </div>

      <ol className="space-y-1">
        {experiences.map((exp, i) => {
          const cardItem: CardItem = { ...exp, title: exp.role, type: 'experience' }
          const isSelected = selectedCard?.title === exp.role && selectedCard?.company === exp.company
          const bullets = exp.description
          const hasMore = bullets.length > MAX_BULLETS
          const visible = hasMore ? bullets.slice(0, MAX_BULLETS) : bullets

          return (
            <li key={i}>
              <div
                className="group relative grid gap-4 rounded-2xl p-4 transition-all duration-300 cursor-default"
                style={{
                  gridTemplateColumns: 'clamp(80px,15%,100px) 1fr',
                  backgroundColor: isSelected ? C.surface : 'transparent',
                  boxShadow: isSelected ? `inset 0 1px 0 0 ${C.borderHover}, 0 8px 32px rgba(0,0,0,0.4)` : 'none',
                }}
                onMouseEnter={cardOn}
                onMouseLeave={cardOff}
              >
                {/* Period */}
                <header className="z-10 mt-1">
                  <p className="font-mono text-xs uppercase tracking-wider leading-snug" style={{ color: C.textMuted }}>
                    {exp.period}
                  </p>
                </header>

                {/* Content */}
                <div className="z-10">
                  <h3 className="font-medium mb-2 leading-snug text-sm">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors duration-200 group/link"
                      style={{ color: C.textPrimary }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textPrimary)}
                    >
                      {exp.role} · {exp.company}
                      <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                    </a>
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-3">
                    {visible.map((bullet, bi) => (
                      <li key={bi} className="flex gap-2.5 text-xs leading-relaxed" style={{ color: C.textSecondary }}>
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: C.textMuted }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* See more */}
                  {hasMore && (
                    <button
                      onClick={() => onSelect(cardItem)}
                      className="flex items-center gap-1.5 text-xs font-mono mb-3 transition-colors duration-200"
                      style={{ color: C.accent }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                    >
                      See more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}

                  <ul className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <li key={t}>
                        <span
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono"
                          style={{ backgroundColor: C.accentDim, color: C.accent }}
                        >
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {/* Resume link */}
      <div className="mt-8 pl-4">
        <a
          href="/Jonathan Wijaya-resume (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 group"
          style={{ color: C.textPrimary }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textPrimary)}
        >
          View Full Résumé
          <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  )
}
