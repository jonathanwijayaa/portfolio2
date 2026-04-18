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

  // Section intersection observer — only active when panel is closed
  useEffect(() => {
    if (selectedCard) return // skip while panel is open
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
  }, [selectedCard])

  // Escape key closes panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleSelect = (card: CardItem) => {
    setSelectedCard(card)
    setActiveSection(card.type === 'experience' ? 'experience' : 'projects')
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  const isOpen = selectedCard !== null

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: C.bg, color: C.textSecondary }}>
      <FlashlightCursor />

      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-4">

          {/* LEFT — Sidebar: ALWAYS fixed in place */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:shrink-0">
            <Sidebar activeSection={activeSection} />
          </div>

          {/* RIGHT — Switches between normal-scroll and split-pane modes */}
          <div
            className="lg:flex-1 flex transition-all duration-500 ease-in-out"
            style={isOpen ? {
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflow: 'hidden',
            } : {}}
          >
            {/* MAIN — section content */}
            <main
              className="transition-all duration-500 ease-in-out pt-24 pb-24"
              style={{
                flex: isOpen ? '0 0 50%' : '1 1 100%',
                overflowY: isOpen ? 'auto' : 'visible',
                scrollbarWidth: 'none' as const,
              }}
            >
              {isOpen ? (
                /* Only show the relevant section when detail is open */
                selectedCard.type === 'experience' ? (
                  <Experience selectedCard={selectedCard} onSelect={handleSelect} />
                ) : (
                  <Projects selectedCard={selectedCard} onSelect={handleSelect} />
                )
              ) : (
                <>
                  <About />
                  <Experience selectedCard={selectedCard} onSelect={handleSelect} />
                  <Projects selectedCard={selectedCard} onSelect={handleSelect} />
                  <Footer />
                </>
              )}
            </main>

            {/* DETAIL PANEL — slides in on the right */}
            <div
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                flex: isOpen ? '0 0 50%' : '0 0 0%',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
              }}
            >
              {selectedCard && (
                <DetailPanel card={selectedCard} onClose={handleClose} />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
