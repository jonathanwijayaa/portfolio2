import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../ThemeContext'

export default function CuteAvatar() {
  const { C } = useTheme()
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 })
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return
      const rect = avatarRef.current.getBoundingClientRect()
      const avatarCenterX = rect.left + rect.width / 2
      const avatarCenterY = rect.top + rect.height / 2

      const angle = Math.atan2(e.clientY - avatarCenterY, e.clientX - avatarCenterX)
      const distance = Math.min(
        Math.hypot(e.clientX - avatarCenterX, e.clientY - avatarCenterY) / 15,
        4 // Maksimal offset pergerakan pupil (px)
      )

      setEyePos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={avatarRef} className="relative w-28 h-28 mb-6 group cursor-pointer">
      <div
        className="w-full h-full rounded-3xl flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 shadow-lg"
        style={{
          backgroundColor: C.surface,
          border: `2px solid ${C.borderHover}`,
        }}
      >
        {/* SVG Karakter Imut */}
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Badan Karakter */}
          <rect x="20" y="25" width="60" height="55" rx="20" fill={C.accent} />
          {/* Pipi Merona */}
          <circle cx="32" cy="58" r="5" fill="#f43f5e" opacity="0.4" />
          <circle cx="68" cy="58" r="5" fill="#f43f5e" opacity="0.4" />
          {/* Mata Kiri (Background Putih & Pupil) */}
          <circle cx="38" cy="48" r="7" fill="#ffffff" />
          <circle
            cx={38 + eyePos.x}
            cy={48 + eyePos.y}
            r="3.5"
            fill="#0f172a"
          />
          {/* Mata Kanan (Background Putih & Pupil) */}
          <circle cx="62" cy="48" r="7" fill="#ffffff" />
          <circle
            cx={62 + eyePos.x}
            cy={48 + eyePos.y}
            r="3.5"
            fill="#0f172a"
          />
          {/* Senyum Imut */}
          <path
            d="M 44 60 Q 50 66 56 60"
            stroke="#0f172a"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Status Badge */}
      <span
        className="absolute -bottom-2 -right-2 text-[11px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-md"
        style={{
          backgroundColor: `${C.surface}ee`,
          color: C.accent,
          border: `1px solid ${C.borderHover}`,
        }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Ready to code ✨
      </span>
    </div>
  )
}