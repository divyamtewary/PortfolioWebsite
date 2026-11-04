import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'
import { getImage } from '../lib/images'
import SplitText from './SplitText'
import TileReveal from './TileReveal'
import Magnetic from './Magnetic'
import ItemModal from './ItemModal'

// Cards use the real 1600×989 ratio of the card images, so nothing is cropped.
const CARD_RATIO = '1600 / 989'

export default function ProjectSection({ project }) {
  const { id, title, headline, question, repoUrl, language, image, imageAlt, theme, summary, items } = project
  const sectionRef = useRef(null)
  const glowRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  // The glow drifts slowly against the scroll, so colour bleeds into the next section.
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        glowRef.current,
        { opacity: 0.35, y: 140 },
        {
          opacity: 1,
          y: -140,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const style = {
    '--field': theme.field,
    '--ink': theme.ink,
    '--accent': theme.accent,
    '--glow': theme.glow,
  }

  const openItem = openIndex === null ? null : items[openIndex]
  const modalItem = openItem
    ? { ...openItem, src: getImage(openItem.image) }
    : null

  return (
    <section id={id} className="project" style={style} ref={sectionRef} aria-labelledby={`${id}-title`}>
      <div className="project-glow" ref={glowRef} aria-hidden="true" />
      <div className="container">
        <header className="project-head">
          <p className="project-meta">
            Repository{language ? ` · ${language}` : ''} · {title}
          </p>
          <SplitText as="h2" id={`${id}-title`} text={headline} className="project-title" />
          <p className="project-question">{question}</p>
        </header>

        {image ? (
          <TileReveal className="project-banner" cols={8} rows={5}>
            <img src={image} alt={imageAlt} width="1600" height="989" loading="lazy" />
          </TileReveal>
        ) : null}

        <div className="project-intro">
          <p className="project-summary" data-reveal>
            {summary}
          </p>
          <div className="project-actions" data-reveal>
            <Magnetic>
              <a className="btn btn-solid" href={repoUrl} target="_blank" rel="noreferrer">
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </Magnetic>
          </div>
        </div>

        <ul className="item-grid" aria-label={`${title} projects`}>
          {items.map((item, index) => {
            const src = getImage(item.image)
            return (
              <li className="item-card" key={item.name} data-reveal>
                <button
                  type="button"
                  className="item-trigger"
                  aria-haspopup="dialog"
                  onClick={() => setOpenIndex(index)}
                >
                  <span className="item-media" style={{ aspectRatio: CARD_RATIO }}>
                    {src ? (
                      <img src={src} alt="" loading="lazy" />
                    ) : (
                      <span className="item-placeholder">{item.name}</span>
                    )}
                  </span>
                  <span className="item-meta">
                    <span className="item-name">{item.name}</span>
                    <span className={`status status--${item.status.toLowerCase()}`}>{item.status}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <ItemModal item={modalItem} onClose={() => setOpenIndex(null)} />
    </section>
  )
}
