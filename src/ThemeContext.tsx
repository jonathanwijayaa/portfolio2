import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// ── Theme tokens ──────────────────────────────────────────

export type Theme = 'dark' | 'light'

export interface ThemeTokens {
  bg: string; surface: string; surfaceHigh: string
  border: string; borderHover: string
  textPrimary: string; textSecondary: string; textMuted: string
  accent: string; accentDim: string; accentGlow: string
}

const dark: ThemeTokens = {
  bg:            '#111214',
  surface:       '#1a1b1e',
  surfaceHigh:   '#222428',
  border:        'rgba(240,237,232,0.07)',
  borderHover:   'rgba(240,237,232,0.16)',
  textPrimary:   '#f0ede8',
  textSecondary: '#c4c0bc',
  textMuted:     '#7a7679',
  accent:        '#c8b99a',
  accentDim:     'rgba(200,185,154,0.12)',
  accentGlow:    'rgba(200,185,154,0.06)',
}

const light: ThemeTokens = {
  bg:            '#f5f2ed',
  surface:       '#eceae5',
  surfaceHigh:   '#e0ddd8',
  border:        'rgba(30,26,20,0.10)',
  borderHover:   'rgba(30,26,20,0.22)',
  textPrimary:   '#1a1713',
  textSecondary: '#3d3a36',
  textMuted:     '#7a7270',
  accent:        '#8c6d3f',
  accentDim:     'rgba(140,109,63,0.12)',
  accentGlow:    'rgba(140,109,63,0.06)',
}

// ── Context ───────────────────────────────────────────────

interface ThemeCtx {
  mode: Theme
  C: ThemeTokens
  toggle: () => void
}

const ThemeContext = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Theme>(() =>
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  )

  const C = mode === 'dark' ? dark : light

  useEffect(() => {
    localStorage.setItem('theme', mode)
    document.documentElement.setAttribute('data-theme', mode)
    document.body.style.backgroundColor = C.bg
    document.body.style.color = C.textSecondary
  }, [mode, C.bg, C.textSecondary])

  return (
    <ThemeContext.Provider value={{ mode, C, toggle: () => setMode(m => m === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
