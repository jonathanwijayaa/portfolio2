import { useEffect, useState } from 'react'

export function useSectionObserver(sections: string[], active: boolean) {
  const [activeSection, setActiveSection] = useState<string>(sections[0] || 'about')

  useEffect(() => {
    if (!active) return

    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
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
  }, [sections, active])

  return [activeSection, setActiveSection] as const
} 