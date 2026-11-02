import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

// Counts up to `to` once the number scrolls into view.
export default function Counter({ to, className = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      ref.current.textContent = String(to)
      return undefined
    }
    const ctx = gsap.context(() => {
      const state = { value: 0 }
      gsap.to(state, {
        value: to,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true },
        onUpdate: () => {
          ref.current.textContent = String(Math.round(state.value))
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [to])

  return (
    <span ref={ref} className={`counter ${className}`}>
      0
    </span>
  )
}
