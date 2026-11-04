import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger } from './lib/gsap'
import { prefersReducedMotion } from './lib/motion'
import { projects } from './data/projects'
import Header from './components/Header'
import Hero from './components/Hero'
import RepoCarousel from './components/RepoCarousel'
import ProjectSection from './components/ProjectSection'
import Journey from './components/Journey'
import Preloader from './components/Preloader'
import { Marquee, Footer } from './components/Footer'
import { useCallback, useEffect, useState } from 'react'

const PRELOAD_KEY = 'dt-preloaded'

// Skip the loader for reduced-motion users, and for returns within the same tab session.
function shouldSkipPreloader() {
  if (prefersReducedMotion()) return true
  try {
    return sessionStorage.getItem(PRELOAD_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [loaded, setLoaded] = useState(shouldSkipPreloader)

  const handleLoaded = useCallback(() => {
    try {
      sessionStorage.setItem(PRELOAD_KEY, '1')
    } catch {
      // Storage can be unavailable (private modes); the loader simply shows again next time.
    }
    setLoaded(true)
  }, [])

  // Page-wide reveal for any element marked data-reveal, batched on scroll.
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('[data-reveal]')
      gsap.set(items, { opacity: 0, y: 32 })
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.09, overwrite: true }),
      })
    })
    return () => ctx.revert()
  }, [])

  // Layout can shift once fonts, images and the loader have finished.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  useEffect(() => {
    if (loaded) ScrollTrigger.refresh()
  }, [loaded])

  return (
    <>
      {!loaded ? <Preloader onComplete={handleLoaded} /> : null}
      <Header />
      <main id="main">
        <Hero ready={loaded} />
        <RepoCarousel />
        <Marquee />
        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
        <Journey />
      </main>
      <Footer />
    </>
  )
}
