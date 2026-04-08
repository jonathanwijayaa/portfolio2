import { experiences } from '../data'
import { ArrowUpRightIcon } from './Icons'

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="mb-28 scroll-mt-24">
      {/* Mobile section label */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-8 px-6 py-5 lg:hidden"
        style={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(10,25,47,0.85)',
          borderBottom: '1px solid rgba(136,146,176,0.08)',
        }}
      >
        <h2
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: '#ccd6f6' }}
        >
          Experience
        </h2>
      </div>

      <ol className="space-y-1">
        {experiences.map((exp, i) => (
          <li key={i}>
            <div
              className="group relative grid gap-4 rounded-2xl p-4 transition-all duration-300"
              style={{
                gridTemplateColumns: 'clamp(80px, 15%, 100px) 1fr',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = '#112240'
                el.style.boxShadow = 'inset 0 1px 0 0 rgba(148,163,184,0.1), 0 8px 24px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = 'transparent'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Period */}
              <header className="z-10 mt-1">
                <p
                  className="font-mono text-xs uppercase tracking-wider leading-snug"
                  style={{ color: '#8892b0' }}
                >
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
                    style={{ color: '#ccd6f6' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = '#64ffda')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = '#ccd6f6')
                    }
                  >
                    {exp.role} · {exp.company}
                    <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                  </a>
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#8892b0' }}>
                  {exp.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <li key={t}>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono"
                        style={{
                          backgroundColor: 'rgba(100,255,218,0.08)',
                          color: '#64ffda',
                        }}
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

      {/* Full resume link */}
      <div className="mt-8 pl-4">
        <a
          href="/Jonathan Wijaya-resume (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 group"
          style={{ color: '#ccd6f6' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64ffda')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ccd6f6')}
        >
          View Full Résumé
          <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  )
}
