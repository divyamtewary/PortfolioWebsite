import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { profile } from '../data/projects'

// Full-screen loader: the name rises into place while a counter runs to 100,
// then the panel lifts away. Shown once per browser session.
export default function Preloader({ onComplete }) {
  const rootRef = useRef(null)
  const countRef = useRef(null)
  const [finished, setFinished] = useState(false)

  useLayoutEffect(() => {
    document.body.classList.add('is-loading')
    const ctx = gsap.context(() => {
      const counter = { value: 0 }
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('is-loading')
          setFinished(true)
          onComplete?.()
        },
      })
      tl.fromTo('.preloader-inner', { yPercent: 110 }, { yPercent: 0, duration: 1, ease: 'expo.out' })
        .to(
          counter,
          {
            value: 100,
            duration: 1.5,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (countRef.current) countRef.current.textContent = String(Math.round(counter.value))
            },
          },
          0,
        )
        .to('.preloader-name', { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.25')
        .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' })
    }, rootRef)

    return () => {
      ctx.revert()
      document.body.classList.remove('is-loading')
    }
  }, [onComplete])

  if (finished) return null

  return (
    <div className="preloader" ref={rootRef} role="status" aria-live="polite">
      <div className="preloader-mask">
        <p className="preloader-inner preloader-name">{profile.name}</p>
      </div>
      <p className="preloader-count" aria-hidden="true">
        <span ref={countRef}>0</span>
      </p>
      <span className="sr-only">Loading portfolio</span>
    </div>
  )
}
