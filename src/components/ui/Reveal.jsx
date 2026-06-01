import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper component.
 *
 * Usage:
 *   <Reveal>           → default fade-up
 *   <Reveal direction="left">  → slide from left
 *   <Reveal direction="right"> → slide from right
 *   <Reveal direction="none">  → pure fade (no slide)
 *   <Reveal delay={200}>       → 200ms delay
 *   <Reveal stagger={100} index={2}> → stagger children (100ms × 2)
 *   <Reveal distance={40}>     → custom slide distance (px)
 *   <Reveal once={false}>      → re-animates on re-enter (default: once)
 */
export default function Reveal({
  children,
  direction = 'up',     // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  stagger = 0,
  index = 0,
  distance = 28,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
    none: 'none',
  }

  const totalDelay = delay + stagger * index

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : translateMap[direction],
    transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${totalDelay}ms, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${totalDelay}ms`,
    willChange: 'opacity, transform',
  }

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  )
}
