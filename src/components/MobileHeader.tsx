import { useEffect, useState } from 'react'
import { useTheme } from '../ThemeContext'
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon, SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons'
import { navLinks, socialLinks } from '../data'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
}

interface MobileHeaderProps {
  activeSection: string
  detailOpen?: boolean
}

export default function MobileHeader({ activeSection, detailOpen = false }: MobileHeaderProps) {
  const { C, mode, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (detailOpen) setMenuOpen(false)
  }, [detailOpen])

  useEffect(() => {
    if (detailOpen) return
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      if (!detailOpen) document.body.style.overflow = ''
    }
  }, [menuOpen, detailOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 lg:hidden transition-opacity duration-200',
          detailOpen && 'opacity-0 pointer-events-none',
        ].filter(Boolean).join(' ')}
        style={{
          backdropFilter: 'blur(14px)',
          backgroundColor: `${C.bg}ee`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
          <a
            href="#about"
            className="text-sm font-bold tracking-tight transition-colors duration-200"
            style={{ color: C.textPrimary }}
            onClick={closeMenu}
          >
            Jonathan Wijaya
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200"
            style={{ color: C.textPrimary }}
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      <div
        className={[
          'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        style={{ backgroundColor: `${C.bg}cc` }}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      {/* Menu panel */}
      <nav
        aria-label="Mobile navigation"
        className={[
          'fixed top-0 right-0 z-50 flex h-full w-[min(100%,320px)] flex-col justify-between px-6 py-24 lg:hidden',
          'transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        style={{
          backgroundColor: C.bg,
          borderLeft: `1px solid ${C.border}`,
          boxShadow: menuOpen ? '-8px 0 32px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        <div>
          <p className="mb-2 text-xs font-mono uppercase tracking-widest" style={{ color: C.textMuted }}>
            Navigation
          </p>
          <ul className="space-y-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-200"
                    style={{
                      color: isActive ? C.accent : C.textSecondary,
                      backgroundColor: isActive ? C.accentDim : 'transparent',
                    }}
                  >
                    <span
                      className="block h-px w-6 shrink-0"
                      style={{ backgroundColor: isActive ? C.accent : C.textMuted }}
                    />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <button
            onClick={toggle}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest w-fit transition-colors duration-200"
            style={{ color: C.textMuted }}
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
                  className="transition-colors duration-200"
                  style={{ color: C.textMuted }}
                  onClick={closeMenu}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
