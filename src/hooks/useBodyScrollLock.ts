import { useEffect } from 'react'

export function useBodyScrollLock(active: boolean, mobileOnly = false) {
  useEffect(() => {
    if (!active) return

    const mq = mobileOnly ? window.matchMedia('(max-width: 1023px)') : null
    const shouldLock = () => !mq || mq.matches

    const apply = () => {
      document.body.style.overflow = shouldLock() ? 'hidden' : ''
    }

    apply()
    mq?.addEventListener('change', apply)

    return () => {
      mq?.removeEventListener('change', apply)
      document.body.style.overflow = ''
    }
  }, [active, mobileOnly])
}
