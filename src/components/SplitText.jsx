import { Fragment, useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

// Word-by-word line reveal. Each word is masked and rises into place.
// `ready` holds the animation back until something else (the preloader) finishes.
export default function SplitText({ text, as = 'h2', className = '', immediate = false, ready = true, id }) {
  const ref = useRef(null)
  const Tag = as
  const words = text.split(' ')

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      const inners = gsap.utils.toArray('.split-inner', ref.current)
      if (!ready) {
        gsap.set(inners, { yPercent: 115 })
        return
      }
      gsap.from(inners, {
        yPercent: 115,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.07,
        delay: immediate ? 0.2 : 0,
        scrollTrigger: immediate
          ? undefined
          : { trigger: ref.current, start: 'top 85%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [immediate, ready])

  return (
    <Tag ref={ref} id={id} className={`split-text ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-word" aria-hidden="true">
            <span className="split-inner">{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}
