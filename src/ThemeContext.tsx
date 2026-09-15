import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

// ── Theme tokens ──────────────────────────────────────────

export type Theme = 'dark' | 'light'

export interface ThemeTokens {
  bg: string; surface: string; surfaceHigh: string
  border: string; borderHover: string
  textPrimary: string; textSecondary: string; textMuted: string
  accent: string; accentDim: string; accentGlow: string
}

const dark: ThemeTokens = {
  bg:            '#020617', // bg-slate-950
  surface:       '#0f172a', // bg-slate-900
  surfaceHigh:   '#1e293b', // bg-slate-800
  border:        'rgba(30, 41, 59, 0.6)',  // border-slate-800
  borderHover:   'rgba(51, 65, 85, 0.8)',  // border-slate-700
  textPrimary:   '#bfdbfe', // text-blue-200 (Judul/Highlight)
  textSecondary: '#dbeafe', // text-blue-100 (Teks utama)
  textMuted:     '#64748b', // text-slate-500
  accent:        '#93c5fd', // text-blue-300 (Biru pucat aksen)
  accentDim:     'rgba(147, 197, 253, 0.15)',
  accentGlow:    'rgba(147, 197, 253, 0.08)',
}

const light: ThemeTokens = {
  bg:            '#ffffff', // bg-white
  surface:       '#f8fafc', // bg-slate-50
  surfaceHigh:   '#f1f5f9', // bg-slate-100
  border:        '#e2e8f0', // border-slate-200
  borderHover:   '#cbd5e1', // border-slate-300
  textPrimary:   '#172554', // text-blue-950 (Judul pekat)
  textSecondary: '#0f172a', // text-slate-900 (Teks utama)
  textMuted:     '#64748b', // text-slate-500
  accent:        '#1e3a8a', // text-blue-900 (Biru pekat aksen)
  accentDim:     'rgba(30, 58, 138, 0.10)',
  accentGlow:    'rgba(30, 58, 138, 0.05)',
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

  // 1. Matikan transisi sementara saat toggle tema agar instant & bebas lag/repaint
  const toggle = useCallback(() => {
    document.documentElement.classList.add('disable-transitions')

    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))

    setTimeout(() => {
      document.documentElement.classList.remove('disable-transitions')
    }, 50)
  }, [])

  // 2. Sinkronkan atribut & style body
  useEffect(() => {
    localStorage.setItem('theme', mode)
    document.documentElement.setAttribute('data-theme', mode)
    document.body.style.backgroundColor = C.bg
    document.body.style.color = C.textSecondary
  }, [mode, C.bg, C.textSecondary])

  return (
    <ThemeContext.Provider value={{ mode, C, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}