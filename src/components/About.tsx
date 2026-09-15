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
          An{' '}
          <span style={{ color: C.textPrimary, fontWeight: 600 }}>Informatics graduate</span>{' '}
          specializing in Full-stack Web &amp; Android Development. I've built a government civic tech platform used by{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>BAPPEDA Yogyakarta</span>, an AI-powered chatbot with custom content guardrails, and a multi-role LMS handling real production traffic — all with a strong{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>UI/UX foundation</span>.
        </p>

        <p>
          Passionate about{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>bridging technical complexity</span>{' '}
          with intuitive design through agile teamwork. I believe every line of code should serve a
          purpose — building solutions that are as elegant as they are functional.
        </p>

        <p>
          Currently open to{' '}
          <span style={{ color: C.accent, fontWeight: 500 }}>new opportunities</span> and
          collaborations in web development, Android engineering, or UI/UX design.
        </p>

        <div className="pt-2">
          <ResumeButton label="View Full CV" />
        </div>
      </div>
    </section>
  )
}

export default memo(About)
