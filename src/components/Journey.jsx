import { getImage } from '../lib/images'
import { journey } from '../data/projects'
import SplitText from './SplitText'
import TileReveal from './TileReveal'

// Where I've been: a portrait beside the years, in plain text.
export default function Journey() {
  const portrait = getImage('journey_portrait')

  return (
    <section id="timeline" className="journey" aria-labelledby="journey-title">
      <div className="container journey-grid">
        {portrait ? (
          <TileReveal className="journey-portrait" cols={6} rows={8}>
            <img src={portrait} alt="A portrait of me" width="815" height="1191" loading="lazy" />
          </TileReveal>
        ) : null}

        <div className="journey-main">
          <SplitText as="h2" id="journey-title" text="Where I've been" className="journey-title" />
          <p className="journey-lead" data-reveal>
            The short version, in years.
          </p>

          <ol className="timeline">
            {journey.map((step) => (
              <li className="timeline-step" key={step.year} data-reveal>
                <span className="timeline-year">{step.year}</span>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="offtrack" data-reveal>
            <h3>Outside the code</h3>
            <p>
              Mostly football. I support Manchester City and watch the Premier League, La Liga, Bundesliga and
              Serie A. I play most weeks at a local turf, usually at number 8 or up front.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
