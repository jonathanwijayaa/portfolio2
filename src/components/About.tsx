import { memo } from 'react'
import { useTheme } from '../ThemeContext'
import SectionHeader from './ui/SectionHeader'
import SocialLinks from './ui/SocialLinks'
import ResumeButton from './ui/ResumeButton'

function About() {
  const { C } = useTheme()

  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-20 scroll-mt-20 lg:mb-28 lg:scroll-mt-24"
    >
      <div className="lg:hidden mb-8 flex flex-col items-center text-center pt-2">
        <div className="relative w-24 h-24 mb-4 group">
          <img
            src="/assets/image/foto2.jpg"
            alt="Jonathan Wijaya"
            className="w-full h-full object-cover rounded-3xl shadow-xl transition-transform duration-300 group-hover:scale-105"
            style={{ border: `2px solid ${C.borderHover}` }}
          />
          <span
            className="absolute -bottom-2 -right-2 text-xs font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-md"
            style={{
              backgroundColor: C.surface,
              color: C.accent,
              border: `1px solid ${C.borderHover}`,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ready to code
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-1" style={{ color: C.textPrimary }}>
          Jonathan Wijaya
        </h1>
        <h2 className="text-sm font-mono font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
          Full-stack Web &amp; Android Developer
        </h2>

        <SocialLinks className="mb-6" />
      </div>

      <SectionHeader title="About" sticky />

      <div className="flex flex-col gap-5 text-base lg:text-lg leading-relaxed" style={{ color: C.textSecondary }}>
        <p>
          I'm an{' '}
          <span style={{ color: C.textPrimary, fontWeight: 600 }}>
            Informatics graduate from UKDW
          </span>
          , focused on full-stack web development with a strong frontend foundation. I build user-focused applications using technologies like{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>
            React.js, TypeScript, and Supabase
          </span>.
        </p>

        <p>
          My experience includes contributing to a multi-role LMS at{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>
            Study First
          </span>{' '}
          and serving as the sole frontend developer and UI/UX designer for a volunteer-data management platform developed in collaboration with{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>
            BAPPEDA Kota Yogyakarta
          </span>
          . I've also built an AI-powered café recommendation chatbot and an Android application using Kotlin and Jetpack Compose.
        </p>

        <p>
          I enjoy turning{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>
            real-world requirements into practical software
          </span>
          , from implementing role-based access and Excel data-import workflows to evaluating usability through structured testing.
        </p>

        <p>
          Currently open to{' '}
          <span style={{ color: C.accent, fontWeight: 500 }}>
            new opportunities
          </span>{' '}
          in web development and software engineering.
        </p>

        <div className="pt-2">
          <ResumeButton label="View Full CV" />
        </div>
      </div>
    </section>
  )
}

export default memo(About)
