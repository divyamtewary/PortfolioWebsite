import { getImage } from '../lib/images'
import { journey } from '../data/projects'
import SplitText from './SplitText'
import TileReveal from './TileReveal'

// Timeline drawn from the personal context profile. Facts only; the 2025 chapter stays open.
export default function Journey() {
  const portrait = getImage('journey_portrait')

  return (
    <section id="journey" className="journey" aria-labelledby="journey-title">
      <div className="container journey-grid">
        <aside className="journey-aside" data-reveal>
          <SplitText as="h2" id="journey-title" text="How I got here" className="journey-title" />
          <p className="journey-lead">
            I am curious about how things work, and I want to turn ideas into things people can use, inspect and
            learn from.
          </p>

          {portrait ? (
            <TileReveal className="journey-portrait" cols={6} rows={6}>
              <img src={portrait} alt="Portrait of Divyam Tewary" width="800" height="1000" loading="lazy" />
            </TileReveal>
          ) : null}

          <div className="offtrack">
            <h3>Off the keyboard</h3>
            <p>
              Football is a constant. I support Manchester City, follow the Premier League, La Liga, Bundesliga and
              Serie A, and play most weeks on local turfs as a number 8 or a forward. I like the shared rhythm that
              forms during a good game.
            </p>
          </div>
        </aside>

        <ol className="timeline">
          {journey.map((step) => (
            <li className="timeline-step" key={step.when + step.title} data-reveal>
              <p className="timeline-when">{step.when}</p>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
