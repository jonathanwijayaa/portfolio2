import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon } from './Icons'
import { navLinks, socialLinks } from '../data'

interface SidebarProps {
  activeSection: string
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
}

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="flex flex-col justify-between h-full max-h-screen py-24">
      {/* Top: Name + Tagline + Nav */}
      <div>
        {/* Name & Role */}
        <div className="mb-12">
          <a href="#about">
            <h1
              className="text-5xl font-bold tracking-tight mb-3 transition-colors duration-200"
              style={{ color: '#ccd6f6' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#64ffda')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ccd6f6')}
            >
              Jonathan Wijaya
            </h1>
          </a>
          <h2 className="text-xl font-medium mb-4" style={{ color: '#ccd6f6' }}>
            Front-End Developer &amp; Android Engineer
          </h2>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#8892b0' }}>
            I build efficient, accessible, and pixel-perfect digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Page sections">
          <ul className="space-y-4">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-4 uppercase text-xs font-bold tracking-widest transition-colors duration-200"
                    style={{ color: isActive ? '#ccd6f6' : '#8892b0' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#ccd6f6')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive ? '#ccd6f6' : '#8892b0')
                    }
                  >
                    <span
                      className="block h-px transition-all duration-300 ease-in-out"
                      style={{
                        width: isActive ? '64px' : '32px',
                        backgroundColor: isActive ? '#ccd6f6' : '#8892b0',
                      }}
                    />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom: Social Links */}
      <div className="flex items-center gap-5 mt-8">
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
              style={{ color: '#8892b0' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#64ffda'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8892b0'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Icon className="w-5 h-5" />
            </a>
          )
        })}
      </div>
    </aside>
  )
}
