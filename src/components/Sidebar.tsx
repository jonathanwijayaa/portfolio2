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
    <aside className="flex flex-col justify-between h-full max-h-screen py-16 lg:py-20">
      <div>
        {/* Profile Avatar / Sticker Card */}
        <div className="relative w-28 h-28 mb-6 group cursor-pointer">
          <img
            src="/assets/image/foto2.jpg"
            alt="Jonathan Wijaya"
            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
            style={{ border: `2px solid ${C.borderHover}` }}
          />
          <span
            className="absolute -bottom-2 -right-2 text-[11px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-md"
            style={{
              backgroundColor: `${C.surface}ee`,
              color: C.accent,
              border: `1px solid ${C.borderHover}`,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ready to code ✨
          </span>
        </div>

        {/* Title & Short Bio */}
        <div className="mb-10">
          <a href="#about">
            <h1
              className="text-4xl font-bold tracking-tight mb-2 transition-colors duration-200"
              style={{ color: C.textPrimary }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textPrimary)}
            >
              Jonathan Wijaya
            </h1>
          </a>
          <h2 className="text-base font-semibold mb-3" style={{ color: C.accent }}>
            Full-stack Web &amp; Android Developer
          </h2>
          <p className="text-xs leading-relaxed max-w-xs" style={{ color: C.textMuted }}>
            Crafting smooth web platforms, civic tech, &amp; AI solutions with a solid UI/UX foundation
          </p>
        </div>

        {/* Modular Navigation */}
        <nav aria-label="Page sections">
          <ul className="space-y-4">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              const isHovered = hoveredNav === id
              const lineWidth = isActive || isHovered ? '56px' : '28px'
              const lineColor = isActive ? C.accent : isHovered ? C.textSecondary : C.textMuted

              return (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-4 uppercase text-xs font-bold tracking-widest transition-colors duration-200"
                    style={{ color: isActive || isHovered ? C.textPrimary : C.textSecondary }}
                    onMouseEnter={() => setHoveredNav(id)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    <span
                      className="block h-px transition-all duration-300 ease-in-out rounded-full"
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

      {/* Theme Toggle & Social Links */}
      <div className="flex flex-col gap-4 pt-6">
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

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = iconMap[icon] || GitHubIcon
            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') || href.startsWith('https://wa.me') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-2 rounded-xl transition-all duration-200 group"
                style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.accent
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Icon className="w-4 h-4 transition-colors duration-200" style={{ color: C.textSecondary }} />
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}