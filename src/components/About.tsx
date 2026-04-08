export default function About() {
  return (
    <section id="about" aria-label="About me" className="mb-28 scroll-mt-24">
      {/* Mobile section label */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-8 px-6 py-5 lg:hidden"
        style={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(10,25,47,0.85)',
          borderBottom: '1px solid rgba(136,146,176,0.08)',
        }}
      >
        <h2
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: '#ccd6f6' }}
        >
          About
        </h2>
      </div>

      <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: '#8892b0' }}>
        {/* Photo */}
        <div className="mb-2">
          <div
            className="relative w-48 h-56 rounded-2xl overflow-hidden shadow-xl group"
            style={{ border: '2px solid rgba(100,255,218,0.2)' }}
          >
            <img
              src="/assets/image/foto2.jpg"
              alt="Jonathan Wijaya"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(100,255,218,0.05)', mixBlendMode: 'screen' }}
            />
          </div>
        </div>

        <p>
          Saya fokus membangun{' '}
          <span style={{ color: '#ccd6f6', fontWeight: 500 }}>solusi web yang efisien</span> dan{' '}
          <span style={{ color: '#ccd6f6', fontWeight: 500 }}>user-friendly</span>. Membantu bisnis
          bertransformasi secara digital melalui kode yang bersih dan terstruktur.
        </p>
        <p>
          As an{' '}
          <span style={{ color: '#ccd6f6', fontWeight: 500 }}>Informatics student</span>, I
          specialize in crafting responsive front-end interfaces and intuitive Android applications.
          I believe technology should simplify, not complicate — every line of code should serve a
          purpose.
        </p>
        <p>
          In my spare time, you can find me exploring new tech stacks, contributing to open-source
          projects, or designing interfaces in Figma. I'm currently open to{' '}
          <span style={{ color: '#64ffda', fontWeight: 500 }}>new opportunities</span> and
          collaborations.
        </p>

        {/* CV Link */}
        <div className="pt-2">
          <a
            href="/Jonathan Wijaya-resume (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm rounded px-4 py-2 transition-all duration-200 group"
            style={{
              color: '#64ffda',
              border: '1px solid rgba(100,255,218,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(100,255,218,0.08)'
              e.currentTarget.style.borderColor = '#64ffda'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(100,255,218,0.3)'
            }}
          >
            View Full CV
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
