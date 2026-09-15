import { memo } from 'react'
import { experiences } from '../data'
import { ArrowUpRightIcon, ChevronRightIcon, ArrowRightIcon } from './Icons'
import { useTheme } from '../ThemeContext'
import type { CardItem } from '../App'

interface ExperienceProps {
  selectedCard: CardItem | null
  onSelect: (card: CardItem) => void
}

function Experience({ selectedCard, onSelect }: ExperienceProps) {
  const { C } = useTheme()

  return (
    <section id="experience" aria-label="Work experience" className="mb-20 scroll-mt-28 lg:mb-28 lg:scroll-mt-24">
      {/* Mobile section label */}
      <div
        className="sticky top-14 z-20 -mx-6 mb-8 px-6 py-4 lg:hidden"
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

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => {
          const cardItem: CardItem = { ...exp, title: exp.role, type: 'experience' }
          const isSelected =
            selectedCard?.title === exp.role && selectedCard?.company === exp.company

          return (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                backgroundColor: C.surface,
                border: `1px solid ${isSelected ? C.accent : C.border}`,
                boxShadow: isSelected
                  ? `0 8px 30px ${C.accentGlow}`
                  : '0 4px 12px rgba(0,0,0,0.1)',
              }}
              onClick={() => onSelect(cardItem)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = C.accent
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = `0 8px 24px ${C.accentGlow}`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = isSelected ? C.accent : C.border
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = isSelected
                  ? `0 8px 30px ${C.accentGlow}`
                  : '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div>
                {/* Header: Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-base leading-snug">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors duration-200 group/link"
                      style={{ color: C.textPrimary }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textPrimary)}
                    >
                      {exp.role} · {exp.company}
                      <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                    </a>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider shrink-0" style={{ color: C.textMuted }}>
                    {exp.period}
                  </span>
                </div>

                {/* Highlight Point (Hanya menampilkan 1 poin ringkas di kartu depan) */}
                {exp.description.length > 0 && (
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: C.textSecondary }}>
                    {exp.description[0]}
                  </p>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-xl px-2.5 py-0.5 text-[11px] font-medium font-mono"
                      style={{ backgroundColor: C.accentDim, color: C.accent }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: C.border }}>
                <span
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold transition-colors duration-200"
                  style={{ color: C.accent }}
                >
                  Tap for Details
                  <ChevronRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Resume Link */}
      <div className="mt-8 pl-1">
        <a
          href="/Jonathan Wijaya-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm rounded-xl px-4 py-2.5 transition-all duration-200 group"
          style={{
            color: C.accent,
            backgroundColor: C.accentDim,
            border: `1px solid ${C.borderHover}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = C.surface
            e.currentTarget.style.borderColor = C.accent
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = C.accentDim
            e.currentTarget.style.borderColor = C.borderHover
          }}
        >
          View Full Résumé
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
export default memo(Experience)