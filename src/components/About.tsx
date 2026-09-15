import { memo } from 'react'
import { useTheme } from '../ThemeContext'
import { ArrowRightIcon } from './Icons'

function About() {
  const { C } = useTheme()

  return (
    <section id="about" aria-label="About me" className="mb-20 scroll-mt-28 lg:mb-28 lg:scroll-mt-24">
      {/* Mobile section label */}
      <div
        className="sticky top-14 z-20 -mx-6 mb-8 px-6 py-4 lg:hidden"
        style={{
          backdropFilter: 'blur(14px)',
          backgroundColor: `${C.bg}cc`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: C.textPrimary }}>
          About
        </h2>
      </div>

      <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: C.textSecondary }}>
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

        {/* CV Link */}
        <div className="pt-2">
          <a
            href="/Jonathan Wijaya-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm rounded-xl px-4 py-2.5 transition-all duration-200 group"
            style={{
              color: C.accent,
              backgroundColor: C.accentDim,
              border: `1px solid ${C.borderHover}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.surface
              e.currentTarget.style.borderColor = C.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.accentDim
              e.currentTarget.style.borderColor = C.borderHover
            }}
          >
            View Full CV
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
export default memo(About)