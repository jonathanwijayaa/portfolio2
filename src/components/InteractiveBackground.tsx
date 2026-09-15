import { useTheme } from '../ThemeContext'

export default function InteractiveBackground() {
  const { mode } = useTheme()
  const isDark = mode === 'dark'

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none -z-10 overflow-hidden">
      {/* Dynamic Ambient Sky Gradient */}
      <div
        className="absolute inset-0 transition-colors duration-700 ease-in-out"
        style={{
          backgroundColor: isDark ? '#020617' : '#ffffff',
          backgroundImage: isDark
            ? 'radial-gradient(circle at 80% 0%, #0f172a 0%, #020617 70%)'
            : 'radial-gradient(circle at 80% 0%, #f0f9ff 0%, #ffffff 70%)',
        }}
      />

      {/* Sun / Moon Soft Ambient Aura */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-700 pointer-events-none"
        style={{
          backgroundColor: isDark ? 'rgba(147, 197, 253, 0.12)' : 'rgba(56, 189, 248, 0.25)',
        }}
      />

      {/* Pure CSS Stars Pattern (Dark Mode) */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, #93c5fd, rgba(0,0,0,0)),
                              radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
                              radial-gradient(1.5px 1.5px at 90px 40px, #93c5fd, rgba(0,0,0,0)),
                              radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0)),
                              radial-gradient(1.5px 1.5px at 230px 190px, #93c5fd, rgba(0,0,0,0))`,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px',
          }}
        />
      )}
    </div>
  )
}