import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { projects, profile } from '../data/projects'

const sections = [
  ...projects.map((project) => ({ id: project.id, label: project.title })),
  { id: 'journey', label: 'Journey' },
]

// Fixed top bar: wordmark, section links, GitHub, a menu on small screens, and a scroll progress line.
export default function Header() {
  const barRef = useRef(null)
  const [activeId, setActiveId] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => {
            setActiveId((current) => {
              if (self.isActive) return section.id
              return current === section.id ? '' : current
            })
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
      <div className="site-header-inner container">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          {profile.name}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={closeMenu}
              className={activeId === section.id ? 'is-active' : ''}
              aria-current={activeId === section.id ? 'true' : undefined}
            >
              {section.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-github" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a className="header-github" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="progress" ref={barRef} aria-hidden="true" />
    </header>
  )
}
