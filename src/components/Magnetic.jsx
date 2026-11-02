import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import { hasFinePointer, prefersReducedMotion } from '../lib/motion'

// Pulls its child towards the pointer on fine-pointer devices.
export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    if (!hasFinePointer() || prefersReducedMotion()) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)
    gsap.to(ref.current, { x: x * strength, y: y * strength, duration: 0.5, ease: 'power3.out' })
  }

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <div ref={ref} className="magnetic" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  )
}
