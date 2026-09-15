export type Theme = 'dark' | 'light'

export interface ThemeTokens {
  bg: string
  surface: string
  surfaceHigh: string
  border: string
  borderHover: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  accent: string
  accentDim: string
  accentGlow: string
}

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

export interface SkillItem {
  name: string
  icon?: string
}

export interface SkillCategory {
  category: string
  skills: SkillItem[]
}