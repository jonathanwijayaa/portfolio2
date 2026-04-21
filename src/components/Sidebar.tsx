import { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon, SunIcon, MoonIcon } from './Icons'
import { navLinks, socialLinks } from '../data'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
}

interface SidebarProps {
  activeSection: string
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const { C, mode, toggle } = useTheme()
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  return (
    <aside className="flex flex-col justify-between h-full max-h-screen py-24">
      {/* Name + Tagline + Nav */}
      <div>
        <div className="mb-12">
          <a href="#about">
            <h1
              className="text-5xl font-bold tracking-tight mb-3 transition-colors duration-200 cursor-pointer"
              style={{ color: C.textPrimary }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textPrimary)}
            >
              Jonathan Wijaya
            </h1>
          </a>
          <h2 className="text-lg font-semibold mb-4" style={{ color: C.textPrimary, opacity: 0.9 }}>
            Full-stack Web &amp; Android Developer
          </h2>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.textSecondary }}>
            Informatics student specializing in Full-stack Web &amp; Android Development with a strong UI/UX foundation. Passionate about bridging technical complexity with intuitive design.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Page sections">
          <ul className="space-y-4">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              const isHovered = hoveredNav === id
              const lineWidth = isActive || isHovered ? '64px' : '32px'
              const lineColor = isActive ? C.accent : isHovered ? C.textSecondary : C.textMuted
              return (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-4 uppercase text-xs font-bold tracking-widest transition-colors duration-200"
                    style={{ color: isActive || isHovered ? C.textPrimary : C.textSecondary }}
                    onMouseEnter={(e) => {
                      setHoveredNav(id)
                      e.currentTarget.style.color = C.textPrimary
                    }}
                    onMouseLeave={(e) => {
                      setHoveredNav(null)
                      e.currentTarget.style.color = isActive ? C.textPrimary : C.textSecondary
                    }}
                  >
                    <span
                      className="block h-px transition-all duration-300 ease-in-out"
                      style={{ width: lineWidth, backgroundColor: lineColor }}
                    />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Theme toggle + Social Links */}
      <div className="flex flex-col gap-4 mt-8">
        <button
          onClick={toggle}
          aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest w-fit transition-all duration-200"
          style={{ color: C.textMuted }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textMuted)}
        >
          {mode === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          <span>{mode === 'dark' ? 'Light' : 'Dark'} Mode</span>
        </button>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = iconMap[icon]
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="transition-all duration-200"
                style={{ color: C.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.accent
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.textMuted
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
