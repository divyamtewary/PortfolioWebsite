import { getImage } from '../lib/images'
import SplitText from './SplitText'
import TileReveal from './TileReveal'
import Magnetic from './Magnetic'

// One repository, one section: full-width banner at its native ratio,
// a short summary, then an aligned card grid for the items in that repo.
export default function ProjectSection({ project }) {
  const { id, title, headline, question, repoUrl, language, image, imageAlt, theme, summary, items } = project
  const style = {
    '--field': theme.field,
    '--ink': theme.ink,
    '--accent': theme.accent,
  }

  return (
    <section id={id} className="project" style={style} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="project-head">
          <p className="project-meta">
            Public repository{language ? ` · ${language}` : ''} · {title}
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
                View repository <span aria-hidden="true">↗</span>
              </a>
            </Magnetic>
          </div>
        </div>

        <ul className="repo-cards" aria-label={`${title} items`}>
          {items.map((item) => {
            const thumb = getImage(item.image)
            return (
              <li className="repo-card" key={item.name} data-reveal>
                {thumb ? (
                  <div className="repo-card-media">
                    <img src={thumb} alt={`${item.name} preview`} loading="lazy" />
                  </div>
                ) : null}
                <div className="repo-card-body">
                  <div className="repo-card-top">
                    <h3>{item.name}</h3>
                    <span className={`status status--${item.status.toLowerCase()}`}>{item.status}</span>
                  </div>
                  <p>{item.description}</p>
                  {item.url ? (
                    <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                      Open project <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
