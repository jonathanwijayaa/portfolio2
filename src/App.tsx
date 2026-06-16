import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FlashlightCursor from './components/FlashlightCursor'
import DetailPanel from './components/DetailPanel'
import { useTheme } from './ThemeContext'

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
  const { C } = useTheme()
  const [activeSection, setActiveSection] = useState<string>('about')
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null)
  // Remembers which section was visible when the panel was opened
  const lastSectionRef = useRef<string>('about')
  // Section intersection observer — only active when panel is closed
  useEffect(() => {
    if (selectedCard) return
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
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedCard(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  // Lock body scroll on mobile when detail panel is open
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const lock = selectedCard !== null && mq.matches
    document.body.style.overflow = lock ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedCard])
  const handleSelect = (card: CardItem) => {
    // Save where the user was before opening the panel
    lastSectionRef.current = activeSection
    setSelectedCard(card)
    setActiveSection(card.type === 'experience' ? 'experience' : 'projects')
  }
  // When panel closes, scroll back to the section the user was on
  useEffect(() => {
    if (selectedCard !== null) return          // panel just opened, skip
    const target = document.getElementById(lastSectionRef.current)
    if (target) {
      // Use 'instant' so the IntersectionObserver picks up the right position
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [selectedCard])                           // runs whenever selectedCard changes
  const handleClose = () => setSelectedCard(null)
  const isOpen = selectedCard !== null
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: C.bg, color: C.textSecondary }}>
      <FlashlightCursor />
      <MobileHeader activeSection={activeSection} detailOpen={isOpen} />
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-4">
          {/* LEFT — Sidebar: desktop only, collapses when detail panel is open */}
          <div
            className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:shrink-0 overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              width: isOpen ? '0%' : '45%',
              opacity: isOpen ? 0 : 1,
              pointerEvents: isOpen ? 'none' : 'auto',
            }}
          >
            <Sidebar activeSection={activeSection} />
          </div>
          {/* RIGHT — Switches between normal-scroll and split-pane modes */}
          <div
            className={[
              'lg:flex-1 flex transition-all duration-500 ease-in-out',
              isOpen && 'fixed inset-0 z-40 lg:static lg:z-auto lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden',
            ].filter(Boolean).join(' ')}
            style={isOpen ? { backgroundColor: C.bg } : undefined}
          >
            {/* MAIN — section content */}
            <main
              className={[
                'transition-all duration-500 ease-in-out pt-16 pb-16 lg:pt-24 lg:pb-24',
                isOpen && 'hidden lg:block',
              ].filter(Boolean).join(' ')}
              style={{
                flex: isOpen ? '0 0 50%' : '1 1 100%',
                overflowY: isOpen ? 'auto' : 'visible',
                scrollbarWidth: 'none' as const,
              }}
            >
              {isOpen ? (
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
            {/* DETAIL PANEL — slides in on the right (desktop) / fullscreen (mobile) */}
            <div
              className={[
                'transition-all duration-500 ease-in-out overflow-hidden',
                isOpen && 'flex-1 lg:flex-none',
              ].filter(Boolean).join(' ')}
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
