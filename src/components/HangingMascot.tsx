import { useTheme } from '../ThemeContext'

export default function HangingMascot() {
  const { C } = useTheme()

  return (
    <div className="absolute -top-[19px] left-[18px] pointer-events-none transition-all duration-500 ease-in-out">
      <svg width="32" height="32" viewBox="0 0 40 40" className="animate-bounce" style={{ animationDuration: '2.5s' }}>
        {/* Tangan Kiri & Kanan yang memegang garis */}
        <path d="M 12 12 Q 10 2 6 2" stroke={C.accent} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 28 12 Q 30 2 34 2" stroke={C.accent} strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Kepala Karakter */}
        <rect x="8" y="10" width="24" height="20" rx="8" fill={C.accent} />
        
        {/* Pipi Merona */}
        <circle cx="12" cy="22" r="2" fill="#f43f5e" opacity="0.6" />
        <circle cx="28" cy="22" r="2" fill="#f43f5e" opacity="0.6" />
        
        {/* Mata Kiri & Kanan */}
        <circle cx="15" cy="18" r="2" fill="#0f172a" />
        <circle cx="25" cy="18" r="2" fill="#0f172a" />
        
        {/* Senyum Imut */}
        <path d="M 17 23 Q 20 26 23 23" stroke="#0f172a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}