import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { C } from './palette'

const SECTIONS = ['about', 'experience', 'projects']

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: C.bg, color: C.textSecondary }}>
      {/* Subtle radial glow — warm, not blue */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(700px at 25% 30%, ${C.accentGlow}, transparent 75%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-4 lg:justify-between">
          {/* LEFT — Fixed Sidebar */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col">
            <Sidebar activeSection={activeSection} />
          </div>
          {/* RIGHT — Scrollable Content */}
          <main className="pt-24 pb-24 lg:w-[55%] lg:pt-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
