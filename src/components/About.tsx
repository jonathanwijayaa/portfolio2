import { useTheme } from '../ThemeContext'
import { ArrowRightIcon } from './Icons'

export default function About() {
  const { C } = useTheme()

  return (
    <section id="about" aria-label="About me" className="mb-28 scroll-mt-24">
      {/* Mobile section label */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-8 px-6 py-5 lg:hidden"
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
        {/* Photo */}
        <div className="mb-2">
          <div
            className="relative w-48 h-56 rounded-2xl overflow-hidden shadow-2xl group"
            style={{ border: `2px solid ${C.borderHover}` }}
          >
            <img
              src="/assets/image/foto2.jpg"
              alt="Jonathan Wijaya"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, transparent 55%, ${C.bg}55 100%)`,
              }}
            />
          </div>
        </div>

        <p>
          An{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>Informatics student</span>{' '}
          specializing in Full-stack Web &amp; Android Development with a strong{' '}
          <span style={{ color: C.textPrimary, fontWeight: 500 }}>UI/UX foundation</span>. Proven collaborator in
          high-impact organizations and international projects, successfully managing stakeholders and
          administrative workflows for events.
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
            href="/Jonathan Wijaya-resume (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm rounded px-4 py-2 transition-all duration-200 group"
            style={{
              color: C.accent,
              border: `1px solid ${C.accent}44`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.accentDim
              e.currentTarget.style.borderColor = C.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = `${C.accent}44`
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
