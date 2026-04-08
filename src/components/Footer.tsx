import { C } from '../palette'

export default function Footer() {
  return (
    <footer className="pb-12 text-xs" style={{ color: C.textMuted }}>
      <p className="leading-relaxed">
        <a
          href="https://github.com/jonathanwijayaa"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: C.textSecondary, fontWeight: 500 }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.accent)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.textSecondary)}
        >
          Jonathan Wijaya
        </a>
      </p>
      <p className="mt-1 font-mono opacity-50">
        Built with React · TypeScript · TailwindCSS
      </p>
    </footer>
  )
}
