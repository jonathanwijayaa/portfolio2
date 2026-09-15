import { memo } from 'react'
import { socialLinks } from '../../data'
import { GitHubIcon } from '../Icons'
import { socialIconMap } from './socialIconMap'

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

function SocialLinks({ className = '', iconClassName = 'w-4 h-4 text-[var(--text-secondary)]' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon }) => {
        const Icon = socialIconMap[icon] || GitHubIcon
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl transition-all duration-200 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-0.5"
          >
            <Icon className={iconClassName} />
          </a>
        )
      })}
    </div>
  )
}

export default memo(SocialLinks)
