import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import { prefersReducedMotion } from '../lib/motion'

// Horizontal carousel of the four repositories. Native scroll-snap gives
// swipe and trackpad drag on every device; arrows and dots drive the same track.
export default function RepoCarousel() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const paddingLeft = (track) => parseFloat(getComputedStyle(track).paddingLeft) || 0

  const go = (target) => {
    const track = trackRef.current
    const card = track?.children[target]
    if (!card) return
    track.scrollTo({
      left: card.offsetLeft - paddingLeft(track),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const offset = paddingLeft(track)
    let nearest = 0
    let distance = Infinity
    Array.from(track.children).forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - offset - track.scrollLeft)
      if (d < distance) {
        distance = d
        nearest = i
      }
    })
    setIndex(nearest)
  }

  return (
    <section className="carousel-section" id="carousel" aria-labelledby="carousel-title">
      <div className="container carousel-head">
        <div>
          <h2 id="carousel-title" className="section-title">
            My repositories
          </h2>
          <p className="section-lead">Each one has its own section below. Swipe, drag or use the arrows.</p>
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            className="icon-btn"
            aria-label="Previous repository"
            onClick={() => go(Math.max(0, index - 1))}
            disabled={index === 0}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label="Next repository"
            onClick={() => go(Math.min(projects.length - 1, index + 1))}
            disabled={index === projects.length - 1}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        className="carousel-track"
        ref={trackRef}
        onScroll={handleScroll}
        role="region"
        aria-label="Repositories"
        tabIndex={0}
      >
        {projects.map((project) => (
          <article className="carousel-card" key={project.id}>
            <div className="carousel-media">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            </div>
            <div className="carousel-body">
              <h3>{project.title}</h3>
              <p>{project.question}</p>
              <div className="carousel-links">
                <a href={`#${project.id}`}>Read the section</a>
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <div className="carousel-dots">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              className={i === index ? 'is-current' : ''}
              aria-label={`Show ${project.title}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
