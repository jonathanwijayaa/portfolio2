import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from 'react'
import type { Theme, ThemeTokens } from './types'

const dark: ThemeTokens = {
  bg:            '#020617',
  surface:       '#0f172a',
  surfaceHigh:   '#1e293b',
  border:        'rgba(30, 41, 59, 0.6)',
  borderHover:   'rgba(51, 65, 85, 0.8)',
  textPrimary:   '#bfdbfe',
  textSecondary: '#dbeafe',
  textMuted:     '#64748b',
  accent:        '#93c5fd',
  accentDim:     'rgba(147, 197, 253, 0.15)',
  accentGlow:    'rgba(147, 197, 253, 0.08)',
}

const light: ThemeTokens = {
  bg:            '#ffffff',
  surface:       '#f8fafc',
  surfaceHigh:   '#f1f5f9',
  border:        '#e2e8f0',
  borderHover:   '#cbd5e1',
  textPrimary:   '#172554',
  textSecondary: '#0f172a',
  textMuted:     '#64748b',
  accent:        '#1e3a8a',
  accentDim:     'rgba(30, 58, 138, 0.10)',
  accentGlow:    'rgba(30, 58, 138, 0.05)',
}

interface ThemeCtx {
  mode: Theme
  C: ThemeTokens
  toggle: () => void
}

const ThemeContext = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
    return 'dark'
  })

  const C = mode === 'dark' ? dark : light

  const toggle = useCallback(() => {
    document.documentElement.classList.add('disable-transitions')
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
    setTimeout(() => {
      document.documentElement.classList.remove('disable-transitions')
    }, 50)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', mode)
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const value = useMemo(() => ({ mode, C, toggle }), [mode, C, toggle])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}