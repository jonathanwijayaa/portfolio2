import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FlashlightCursor from './components/FlashlightCursor'
import DetailPanel from './components/DetailPanel'
import { C } from './palette'

const SECTIONS = ['about', 'experience', 'projects']

export type CardItem = {
  title: string
  period?: string
  company?: string
  role?: string
  description: string[]
  tech: string[]
  liveUrl?: string | null
  githubUrl?: string | null
  image?: string
  type: 'experience' | 'project'
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about')
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null)

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

  // Close panel on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedCard(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isOpen = selectedCard !== null

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: C.bg, color: C.textSecondary }}>
      <FlashlightCursor />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Three-column flex: sidebar | content | detail-panel */}
        <div className="lg:flex lg:gap-4">

          {/* LEFT — Sidebar: collapses width when panel is open */}
          <div
            className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col overflow-hidden transition-all duration-500 ease-in-out"
            style={{ width: isOpen ? '0%' : '45%', opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? 'none' : 'auto' }}
          >
            <Sidebar activeSection={activeSection} />
          </div>

          {/* CENTER — Scrollable content: shifts left when panel opens */}
          <main
            className="pt-24 pb-24 transition-all duration-500 ease-in-out"
            style={{ width: isOpen ? '45%' : '55%' }}
          >
            <About />
            <Experience selectedCard={selectedCard} onSelect={setSelectedCard} />
            <Projects selectedCard={selectedCard} onSelect={setSelectedCard} />
            <Footer />
          </main>

          {/* RIGHT — Detail panel: slides in from the right */}
          <div
            className="lg:sticky lg:top-0 lg:h-screen overflow-hidden transition-all duration-500 ease-in-out"
            style={{ width: isOpen ? '55%' : '0%', opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            {selectedCard && (
              <DetailPanel card={selectedCard} onClose={() => setSelectedCard(null)} />
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
