import { experiences } from '../data'
import { ArrowUpRightIcon } from './Icons'
import { C } from '../palette'

export default function Experience() {
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
        {experiences.map((exp, i) => (
          <li key={i}>
            <div
              className="group relative grid gap-4 rounded-2xl p-4 transition-all duration-300 cursor-default"
              style={{ gridTemplateColumns: 'clamp(80px,15%,100px) 1fr' }}
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
                <h3 className="font-medium mb-1 leading-snug text-sm">
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
                <p className="text-sm leading-relaxed mb-3" style={{ color: C.textSecondary }}>
                  {exp.description}
                </p>
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
        ))}
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
