import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { hasFinePointer, prefersReducedMotion } from '../lib/motion'

// A small dot that trails the pointer and grows over links and buttons.
// Only mounted on fine-pointer devices; touch screens keep the native cursor.
export default function CursorFollower() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined
    const dot = ref.current
    document.documentElement.classList.add('has-cursor')

    const moveX = gsap.quickTo(dot, 'x', { duration: 0.35, ease: 'power3' })
    const moveY = gsap.quickTo(dot, 'y', { duration: 0.35, ease: 'power3' })

    const handleMove = (event) => {
      moveX(event.clientX)
      moveY(event.clientY)
    }
    const handleOver = (event) => {
      if (event.target.closest('a, button')) dot.classList.add('is-hover')
    }
    const handleOut = (event) => {
      if (event.target.closest('a, button')) dot.classList.remove('is-hover')
    }

    window.addEventListener('pointermove', handleMove)
    document.addEventListener('pointerover', handleOver)
    document.addEventListener('pointerout', handleOut)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerout', handleOut)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
