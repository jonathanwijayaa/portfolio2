import { projects } from '../data'
import { ExternalLinkIcon, GitHubIcon, ArrowUpRightIcon } from './Icons'
import { C } from '../palette'
import type { CardItem } from '../App'

const MAX_BULLETS = 2

interface ProjectsProps {
  selectedCard: CardItem | null
  onSelect: (card: CardItem) => void
}

export default function Projects({ selectedCard, onSelect }: ProjectsProps) {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

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

  const iconHoverOn = (e: React.MouseEvent<HTMLAnchorElement>) =>
    ((e.currentTarget as HTMLElement).style.color = C.accent)
  const iconHoverOff = (e: React.MouseEvent<HTMLAnchorElement>) =>
    ((e.currentTarget as HTMLElement).style.color = C.textMuted)

  return (
    <section id="projects" aria-label="Projects" className="mb-28 scroll-mt-24">
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
          Projects
        </h2>
      </div>

      {/* Featured projects */}
      <ol className="space-y-1">
        {featured.map((project, i) => {
          const cardItem: CardItem = { ...project, type: 'project' }
          const isSelected = selectedCard?.title === project.title
          const bullets = project.description
          const hasMore = bullets.length > MAX_BULLETS
          const visible = hasMore ? bullets.slice(0, MAX_BULLETS) : bullets

          return (
            <li key={i}>
              <div
                className="group relative grid gap-4 rounded-2xl p-4 transition-all duration-300 cursor-default"
                style={{
                  gridTemplateColumns: 'clamp(100px,18%,140px) 1fr',
                  backgroundColor: isSelected ? C.surface : 'transparent',
                  boxShadow: isSelected ? `inset 0 1px 0 0 ${C.borderHover}, 0 8px 32px rgba(0,0,0,0.4)` : 'none',
                }}
                onMouseEnter={cardOn}
                onMouseLeave={cardOff}
              >
                {/* Thumbnail */}
                <div className="z-10 mt-1">
                  <div
                    className="w-full rounded-md overflow-hidden transition-all duration-300"
                    style={{ aspectRatio: '16/9', border: `1px solid ${C.border}` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="z-10">
                  <h3 className="font-medium mb-2 text-sm leading-snug">
                    <a
                      href={project.liveUrl ?? project.githubUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors duration-200 group/link"
                      style={{ color: C.textPrimary }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textPrimary)}
                    >
                      {project.title}
                      <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                    </a>
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-2">
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
                      className="flex items-center gap-1.5 text-xs font-mono mb-3 transition-all duration-200"
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

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-mono"
                        style={{ backgroundColor: C.accentDim, color: C.accent }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="transition-colors duration-200" style={{ color: C.textMuted }}
                        onMouseEnter={iconHoverOn} onMouseLeave={iconHoverOff}>
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        aria-label={`${project.title} live`}
                        className="transition-colors duration-200" style={{ color: C.textMuted }}
                        onMouseEnter={iconHoverOn} onMouseLeave={iconHoverOff}>
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {/* Other projects */}
      {others.length > 0 && (
        <div className="mt-10">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-5 pl-4"
            style={{ color: C.textMuted }}
          >
            Other Noteworthy Projects
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {others.map((project, i) => (
              <li key={i}>
                <div
                  className="flex flex-col justify-between h-full rounded-2xl p-5 transition-all duration-300"
                  style={{ border: `1px solid ${C.border}` }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = C.borderHover
                    el.style.backgroundColor = C.surface
                    el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = C.border
                    el.style.backgroundColor = 'transparent'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <svg className="w-8 h-8" fill="none" stroke={C.accent} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2M3 17v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2" />
                      </svg>
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="transition-colors duration-200" style={{ color: C.textMuted }}
                            onMouseEnter={iconHoverOn} onMouseLeave={iconHoverOff}>
                            <GitHubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="transition-colors duration-200" style={{ color: C.textMuted }}
                            onMouseEnter={iconHoverOn} onMouseLeave={iconHoverOff}>
                            <ExternalLinkIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="font-medium mb-2 text-sm" style={{ color: C.textPrimary }}>
                      {project.title}
                    </h4>
                    <ul className="space-y-1">
                      {project.description.map((bullet, bi) => (
                        <li key={bi} className="flex gap-2 text-xs leading-relaxed" style={{ color: C.textSecondary }}>
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: C.textMuted }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <li key={t} className="text-xs font-mono" style={{ color: `${C.accent}bb` }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
