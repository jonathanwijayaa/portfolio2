import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

const SECTIONS = ['about', 'experience', 'projects']

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-20% 0px -65% 0px',
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: '#0a192f', color: '#8892b0' }}
    >
      {/* Radial gradient spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background:
            'radial-gradient(600px at 30% 300px, rgba(29,78,216,0.07), transparent 80%)',
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-4 lg:justify-between">

          {/* LEFT — Fixed Sidebar (45%) */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:py-0">
            <Sidebar activeSection={activeSection} />
          </div>

          {/* RIGHT — Scrollable Content (55%) */}
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
