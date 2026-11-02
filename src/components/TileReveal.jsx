import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

// Covers its content with a grid of tiles in the section colour, then
// clears them in a diagonal wave once it scrolls into view. The content
// itself is never clipped or scaled, so images keep their full ratio.
export default function TileReveal({ children, cols = 8, rows = 5, ready = true, className = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!ready || prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray('.tile', ref.current)
      gsap.to(tiles, {
        scale: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        stagger: { each: 0.035, grid: [rows, cols], from: 'start' },
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [cols, rows, ready])

  return (
    <div ref={ref} className={`tile-reveal ${className}`}>
      {children}
      <div className="tile-grid" style={{ '--cols': cols, '--rows': rows }} aria-hidden="true">
        {Array.from({ length: cols * rows }, (_, i) => (
          <span className="tile" key={i} />
        ))}
      </div>
    </div>
  )
}
