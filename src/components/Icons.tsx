interface IconProps {
  className?: string
  style?: React.CSSProperties
}

const svgBase = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const GitHubIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} role="img" viewBox="0 0 24 24" className={className} style={style} aria-label="GitHub">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

export const LinkedInIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} role="img" viewBox="0 0 24 24" className={className} style={style} aria-label="LinkedIn">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const InstagramIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} role="img" viewBox="0 0 24 24" className={className} style={style} aria-label="Instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export const MailIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} role="img" viewBox="0 0 24 24" className={className} style={style} aria-label="Email">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export const ExternalLinkIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export const ArrowUpRightIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

export const ChevronRightIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export const ArrowLeftIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
)

export const ArrowRightIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const FolderIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2M3 17v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2" />
  </svg>
)

export const SunIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

export const MoonIcon = ({ className = '', style }: IconProps) => (
  <svg {...svgBase} viewBox="0 0 24 24" className={className} style={style}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)
