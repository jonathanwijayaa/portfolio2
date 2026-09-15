import { useState, useRef, useCallback, lazy, Suspense } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import InteractiveBackground from './components/InteractiveBackground'
import type { CardItem } from './types'
import { useSectionObserver } from './hooks/useSectionObserver'
import { useEscapeKey } from './hooks/useEscapeKey'
import { useBodyScrollLock } from './hooks/useBodyScrollLock'

const DetailPanel = lazy(() => import('./components/DetailPanel'))
const SECTIONS = ['about', 'skills', 'experience', 'projects']

export default function App() {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null)
  const isOpen = selectedCard !== null

  const [activeSection, setActiveSection] = useSectionObserver(SECTIONS, !isOpen)
  const lastSectionRef = useRef<string>('about')

  const handleClose = useCallback(() => {
    setSelectedCard(null)
    const target = document.getElementById(lastSectionRef.current)
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [])

  useEscapeKey(handleClose)
  useBodyScrollLock(isOpen, true)

  const handleSelect = useCallback((card: CardItem) => {
    lastSectionRef.current = activeSection
    setSelectedCard(card)
    setActiveSection(card.type === 'experience' ? 'experience' : 'projects')
  }, [activeSection, setActiveSection])

  return (
    <div className="relative min-h-screen bg-transparent text-[var(--text-secondary)]">
      <InteractiveBackground />

      <div className="relative z-10 isolate">
        <MobileHeader activeSection={activeSection} detailOpen={isOpen} />

        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
          <div className="lg:flex lg:gap-8">
            
            {/* LEFT — Sidebar */}
            <div
              className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:shrink-0 overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                width: isOpen ? '0%' : '40%',
                opacity: isOpen ? 0 : 1,
                pointerEvents: isOpen ? 'none' : 'auto',
              }}
            >
              <Sidebar activeSection={activeSection} />
            </div>

            {/* RIGHT — Main Content & Detail Panel Container */}
            <div
              className={[
                'lg:flex-1 flex min-w-0 transition-all duration-500 ease-in-out',
                isOpen && 'fixed inset-0 z-40 lg:static lg:z-auto lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden',
              ].filter(Boolean).join(' ')}
            >
              {/* MAIN CONTENT (Tetap Mounted) */}
              <main
                className={[
                  'transition-all duration-500 ease-in-out pb-32 min-w-0 overflow-hidden',
                  isOpen ? 'pt-16 lg:pt-24' : 'pt-20 lg:pt-28',
                  isOpen && 'hidden lg:block',
                ].filter(Boolean).join(' ')}
                style={{
                  flex: isOpen ? '0 0 50%' : '1 1 100%',
                  overflowY: isOpen ? 'auto' : 'visible',
                  scrollbarWidth: 'none',
                }}
              >
                <About />
                <Skills />
                <Experience selectedCard={selectedCard} onSelect={handleSelect} />
                <Projects selectedCard={selectedCard} onSelect={handleSelect} />
                <Footer />
              </main>

              {/* DETAIL PANEL (Lazy Loaded Slide-Over) */}
              <div
                className={[
                  'transition-all duration-500 ease-in-out overflow-hidden h-full',
                  isOpen && 'w-full flex-[0_0_100%] lg:w-auto lg:flex-[0_0_50%]',
                ].filter(Boolean).join(' ')}
                style={{
                  flex: isOpen ? undefined : '0 0 0%',
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? 'auto' : 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {selectedCard && (
                  <Suspense fallback={<div className="p-8 text-xs font-mono">Loading detail...</div>}>
                    <DetailPanel card={selectedCard} onClose={handleClose} />
                  </Suspense>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}