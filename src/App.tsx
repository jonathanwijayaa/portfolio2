import { useState, useEffect, useRef, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import FlashlightCursor from './components/FlashlightCursor'
import DetailPanel from './components/DetailPanel'
import Skills from './components/Skills'
import InteractiveBackground from './components/InteractiveBackground'
import { useTheme } from './ThemeContext'

const SECTIONS = ['about', 'skills', 'experience', 'projects']

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
  const lastSectionRef = useRef<string>('about')

  const handleSelect = useCallback((card: CardItem) => {
    lastSectionRef.current = activeSection
    setSelectedCard(card)
    setActiveSection(card.type === 'experience' ? 'experience' : 'projects')
  }, [activeSection])

  const handleClose = useCallback(() => setSelectedCard(null), [])

  useEffect(() => {
    if (selectedCard) return
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [selectedCard])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCard(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const lock = selectedCard !== null && mq.matches
    document.body.style.overflow = lock ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedCard])

  useEffect(() => {
    if (selectedCard !== null) return
    const target = document.getElementById(lastSectionRef.current)
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [selectedCard])

  const isOpen = selectedCard !== null

  return (
    <div className="relative min-h-screen bg-transparent" style={{ color: C.textSecondary }}>
      {/* 1. Background layer */}
      <InteractiveBackground />

      {/* 2. Content Layer */}
      <div className="relative z-10 isolate">
        {/* <FlashlightCursor /> */}
        <MobileHeader activeSection={activeSection} detailOpen={isOpen} />

        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
          <div className="lg:flex lg:gap-8">
            
            {/* LEFT — Sidebar: Menyusut halus saat panel detail terbuka */}
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

            {/* RIGHT — Switches between normal-scroll and split-pane modes */}
            <div
              className={[
                'lg:flex-1 flex min-w-0 transition-all duration-500 ease-in-out',
                isOpen && 'fixed inset-0 z-40 lg:static lg:z-auto lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden',
              ].filter(Boolean).join(' ')}
            >
              {/* MAIN — section content */}
              <main
                className={[
                  'transition-all duration-500 ease-in-out pb-32 min-w-0 overflow-hidden',
                  isOpen ? 'pt-16 lg:pt-24' : 'pt-20 lg:pt-28',
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
                    <Skills />
                    <Experience selectedCard={selectedCard} onSelect={handleSelect} />
                    <Projects selectedCard={selectedCard} onSelect={handleSelect} />
                    <Footer />
                  </>
                )}
              </main>

              {/* DETAIL PANEL — Transparan menyatu dengan background langit */}
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
                  <DetailPanel card={selectedCard} onClose={handleClose} />
                )}
              </div>
            </div>
              </div>
        </div>
      </div>
    </div>
  )
}