import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { C } from '../palette'

const SIZE        = 400          // diameter flashlight dalam px
const HALF        = SIZE / 2
const SPRING_CFG  = { damping: 30, stiffness: 180, mass: 0.5 } as const
const IDLE_DELAY  = 2500         // ms sebelum cursor dianggap idle

// ── Component ────────────────────────────────────────────
export default function FlashlightCursor() {
  const mouseX = useMotionValue(-HALF * 2)   // start off-screen
  const mouseY = useMotionValue(-HALF * 2)

  const cursorX = useSpring(mouseX, SPRING_CFG)
  const cursorY = useSpring(mouseY, SPRING_CFG)

  const opacity    = useMotionValue(0)
  const idleTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - HALF)
      mouseY.set(e.clientY - HALF)

      // Fade in on move
      opacity.set(1)

      // Reset idle timer
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

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position:     'fixed',
        top:          0,
        left:         0,
        width:        SIZE,
        height:       SIZE,
        borderRadius: '50%',
        // Warm champagne glow — sesuai palette
        background: `radial-gradient(circle, ${C.accentGlow.replace('0.06', '0.14')} 0%, rgba(200,185,154,0.06) 40%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex:        9999,
        x:             cursorX,
        y:             cursorY,
        opacity,
        willChange:    'transform',
        mixBlendMode:  'screen',
      }}
      transition={{ opacity: { duration: 0.4 } }}
    />
  )
}