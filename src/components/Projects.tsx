import {memo} from 'react'
import { projects } from '../data'
import { ExternalLinkIcon, GitHubIcon, ChevronRightIcon, FolderIcon } from './Icons'
import { useTheme } from '../ThemeContext'
import type { CardItem } from '../App'

interface ProjectsProps {
  selectedCard: CardItem | null
  onSelect: (card: CardItem) => void
}

function Projects({ selectedCard, onSelect }: ProjectsProps) {
  const { C } = useTheme()
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" aria-label="Projects" className="mb-20 scroll-mt-28 lg:mb-28 lg:scroll-mt-24">
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
          Projects
        </h2>
      </div>

      {/* Featured Projects Grid (Card Kotak Clean) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((project, i) => {
          const cardItem: CardItem = { ...project, type: 'project' }
          const isSelected = selectedCard?.title === project.title

          return (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-3xl p-4 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                backgroundColor: isSelected ? C.surface : C.surface,
                border: `1px solid ${isSelected ? C.accent : C.border}`,
                boxShadow: isSelected
                  ? `0 8px 30px ${C.accentGlow}`
                  : '0 4px 12px rgba(0,0,0,0.1)',
              }}
              onClick={() => onSelect(cardItem)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = C.accent
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = `0 12px 24px ${C.accentGlow}`
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
                {/* Thumbnail Gambar Kotak */}
                <div
                  className="w-full rounded-2xl overflow-hidden mb-3.5 bg-slate-900/50"
                  style={{ aspectRatio: '16/10', border: `1px solid ${C.border}` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Judul Proyek */}
                <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: C.textPrimary }}>
                  {project.title}
                </h3>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
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

              {/* Card Footer: Tap for details & Quick links */}
              <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: `${C.border}` }}>
                <span
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold transition-colors duration-200"
                  style={{ color: C.accent }}
                >
                  Tap for Details
                  <ChevronRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>

                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="p-1 rounded-lg transition-colors duration-200"
                      style={{ color: C.textMuted }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live`}
                      className="p-1 rounded-lg transition-colors duration-200"
                      style={{ color: C.textMuted }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Other Projects Section */}
      {others.length > 0 && (
        <div className="mt-12">
          <h3
            className="text-xs font-mono font-semibold uppercase tracking-wider mb-4 pl-1"
            style={{ color: C.textMuted }}
          >
            Other Noteworthy Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {others.map((project, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl p-4 transition-all duration-300"
                style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = C.accent
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = C.border
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div>
                  <div className="flex items-start justify-between mb-2.5">
                    <FolderIcon className="w-6 h-6" style={{ stroke: C.accent }} />
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200"
                          style={{ color: C.textMuted }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200"
                          style={{ color: C.textMuted }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: C.textPrimary }}>
                    {project.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono" style={{ color: C.accent }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
export default memo(Projects)