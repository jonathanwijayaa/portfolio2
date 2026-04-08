import { projects } from '../data'
import { ExternalLinkIcon, GitHubIcon, ArrowUpRightIcon } from './Icons'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  const cardHoverOn = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement
    el.style.backgroundColor = '#112240'
    el.style.boxShadow = 'inset 0 1px 0 0 rgba(148,163,184,0.1), 0 8px 24px rgba(0,0,0,0.3)'
  }
  const cardHoverOff = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement
    el.style.backgroundColor = 'transparent'
    el.style.boxShadow = 'none'
  }

  return (
    <section id="projects" aria-label="Projects" className="mb-28 scroll-mt-24">
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
          Projects
        </h2>
      </div>

      {/* Featured Projects */}
      <ol className="space-y-1">
        {featured.map((project, i) => (
          <li key={i}>
            <div
              className="group relative grid gap-4 rounded-2xl p-4 transition-all duration-300"
              style={{ gridTemplateColumns: 'clamp(100px, 18%, 140px) 1fr' }}
              onMouseEnter={cardHoverOn}
              onMouseLeave={cardHoverOff}
            >
              {/* Thumbnail */}
              <div className="z-10 mt-1">
                <div
                  className="w-full rounded-md overflow-hidden transition-colors duration-300"
                  style={{
                    aspectRatio: '16/9',
                    border: '1px solid rgba(136,146,176,0.2)',
                  }}
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
                <h3 className="font-medium mb-1 text-sm leading-snug">
                  <a
                    href={project.liveUrl ?? project.githubUrl ?? '#'}
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
                    {project.title}
                    <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                  </a>
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: '#8892b0' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-mono"
                      style={{ backgroundColor: 'rgba(100,255,218,0.08)', color: '#64ffda' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="transition-colors duration-200"
                      style={{ color: '#8892b0' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64ffda')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8892b0')}
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live`}
                      className="transition-colors duration-200"
                      style={{ color: '#8892b0' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64ffda')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8892b0')}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Other Projects */}
      {others.length > 0 && (
        <div className="mt-10">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-5 pl-4"
            style={{ color: '#8892b0' }}
          >
            Other Noteworthy Projects
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {others.map((project, i) => (
              <li key={i}>
                <div
                  className="flex flex-col justify-between h-full rounded-2xl p-5 transition-all duration-300 group"
                  style={{ border: '1px solid rgba(136,146,176,0.1)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(136,146,176,0.25)'
                    el.style.backgroundColor = '#112240'
                    el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(136,146,176,0.1)'
                    el.style.backgroundColor = 'transparent'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="#64ffda"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2M3 17v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2"
                        />
                      </svg>
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200"
                            style={{ color: '#8892b0' }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64ffda')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8892b0')}
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
                            style={{ color: '#8892b0' }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64ffda')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8892b0')}
                          >
                            <ExternalLinkIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4
                      className="font-medium mb-2 text-sm transition-colors duration-200"
                      style={{ color: '#ccd6f6' }}
                    >
                      {project.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#8892b0' }}>
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="text-xs font-mono"
                        style={{ color: 'rgba(100,255,218,0.7)' }}
                      >
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
