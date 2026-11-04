import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'
import { getImage } from '../lib/images'
import { profile } from '../data/projects'
import TechText from './react-bits/TechText/TechText'
import TileReveal from './TileReveal'
import Magnetic from './Magnetic'
import Counter from './Counter'

export default function Hero({ ready = true }) {
  const rootRef = useRef(null)
  const photo = getImage('Divyam_display_picture')

  useLayoutEffect(() => {
    if (!ready || prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      gsap.from('.hero-rise', {
        y: 24,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.2,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={rootRef} aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">
        {profile.name}
      </h1>

      <div className="name-stage" aria-hidden="true">
        <TechText
          text={profile.name}
          fontFamily="'Instrument Serif', Georgia, serif"
          fontWeight={400}
          fontSize={400}
          letterSpacing={-0.02}
          accentColor="#c9dbe8"
          intro={ready ? 'assemble' : 'none'}
          introDuration={1.8}
          labels={false}
          specks={8}
        />
      </div>

      <div className="container hero-grid">
        <TileReveal className="hero-photo" cols={6} rows={6} ready={ready}>
          {photo ? <img src={photo} alt={profile.displayAlt} width="627" height="627" /> : null}
        </TileReveal>

        <div className="hero-copy">
          <p className="hero-lead hero-rise">{profile.bio}</p>

          <div className="hero-actions hero-rise">
            <Magnetic>
              <a className="btn btn-solid" href="#carousel">
                See my projects
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub profile <span aria-hidden="true">↗</span>
              </a>
            </Magnetic>
          </div>

          <dl className="hero-stats hero-rise">
            <div>
              <dt>Public repos</dt>
              <dd>
                <Counter to={4} />
              </dd>
            </div>
            <div>
              <dt>Live projects</dt>
              <dd>
                <Counter to={3} />
              </dd>
            </div>
            <div>
              <dt>In progress</dt>
              <dd>
                <Counter to={2} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
