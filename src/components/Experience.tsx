import { memo } from 'react'
import { experiences } from '../data'
import { ArrowUpRightIcon, ChevronRightIcon } from './Icons'
import { useTheme } from '../ThemeContext'
import type { CardItem } from '../types'
import SectionHeader from './ui/SectionHeader'
import TechBadge from './ui/TechBadge'

interface ExperienceProps {
  selectedCard: CardItem | null
  onSelect: (card: CardItem) => void
}

function Experience({ selectedCard, onSelect }: ExperienceProps) {
  const { C } = useTheme()

  return (
    <section id="experience" aria-label="Work experience" className="mb-20 scroll-mt-20 lg:mb-28 lg:scroll-mt-24">
      <SectionHeader title="Experience" sticky />

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => {
          const cardItem: CardItem = { ...exp, title: exp.role, type: 'experience' }
          const isSelected = selectedCard?.title === exp.role && selectedCard?.company === exp.company

          return (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-3xl p-5 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                backgroundColor: C.surface,
                border: `1px solid ${isSelected ? C.accent : C.border}`,
                boxShadow: isSelected ? `0 8px 30px ${C.accentGlow}` : '0 4px 12px rgba(0,0,0,0.1)',
              }}
              onClick={() => onSelect(cardItem)}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-bold text-base lg:text-lg leading-snug">
                    <span className="inline-flex items-center gap-1.5 transition-colors duration-200" style={{ color: C.textPrimary }}>
                      {exp.role} · {exp.company}
                      <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider shrink-0" style={{ color: C.textMuted }}>
                    {exp.period}
                  </span>
                </div>

                {exp.description.length > 0 && (
                  <p className="text-base lg:text-lg leading-relaxed mb-4 line-clamp-2" style={{ color: C.textSecondary }}>
                    {exp.description[0]}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t) => (
                    <TechBadge key={t} name={t} variant="compact" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: C.border }}>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold" style={{ color: C.accent }}>
                  Tap for Details
                  <ChevronRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default memo(Experience)
