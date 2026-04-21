import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const SIZE       = 400
const HALF       = SIZE / 2
const SPRING_CFG = { damping: 30, stiffness: 180, mass: 0.5 } as const
const IDLE_DELAY = 2500

export default function FlashlightCursor() {
  const { mode } = useTheme()

  const mouseX = useMotionValue(-HALF * 2)
  const mouseY = useMotionValue(-HALF * 2)

  const cursorX = useSpring(mouseX, SPRING_CFG)
  const cursorY = useSpring(mouseY, SPRING_CFG)

  const opacity   = useMotionValue(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - HALF)
      mouseY.set(e.clientY - HALF)
      opacity.set(1)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => opacity.set(0.3), IDLE_DELAY)
    }
    const onLeave = () => opacity.set(0)
    const onEnter = () => opacity.set(1)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [mouseX, mouseY, opacity])

  // Dark mode  → warm champagne glow   (mixBlendMode: screen  — adds light on dark bg)
  // Light mode → dark ink shadow       (mixBlendMode: multiply — deepens color on light bg)
  const isDark = mode === 'dark'

  const background = isDark
    ? 'radial-gradient(circle, rgba(200,185,154,0.16) 0%, rgba(200,185,154,0.06) 40%, transparent 70%)'
    : 'radial-gradient(circle, rgba(30,22,10,0.10) 0%, rgba(30,22,10,0.04) 45%, transparent 72%)'

  const blendMode = isDark ? 'screen' : 'multiply'

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         SIZE,
        height:        SIZE,
        borderRadius:  '50%',
        background,
        pointerEvents: 'none',
        zIndex:        9999,
        x:             cursorX,
        y:             cursorY,
        opacity,
        willChange:    'transform',
        mixBlendMode:  blendMode as React.CSSProperties['mixBlendMode'],
      }}
      transition={{ opacity: { duration: 0.4 } }}
    />
  )
}