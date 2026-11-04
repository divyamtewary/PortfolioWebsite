import { marqueeWords, profile, projects } from '../data/projects'
import SplitText from './SplitText'

export function Marquee() {
  const run = [...marqueeWords, ...marqueeWords]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <span className="marquee-group" key={group}>
            {run.map((word, i) => (
              <span key={`${group}-${i}`}>{word}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <p className="footer-lead">
            Everything I publish lives on GitHub. Each repo has its own README, and the messy notes are usually in
            there too.
          </p>
          <div className="footer-actions">
            <a className="btn btn-solid" href={profile.github} target="_blank" rel="noreferrer">
              Find me on GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-outline" href={profile.telegramUrl} target="_blank" rel="noreferrer">
              Message me on Telegram <span aria-hidden="true">↗</span>
            </a>
            <p className="footer-handle">Telegram: {profile.telegram}</p>
          </div>
        </div>

        <SplitText as="p" text={profile.name} className="footer-name" />

        <div className="footer-bottom">
          <nav aria-label="Repositories">
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    {project.title} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-meta">
            <a href="#top">Back to top</a>
            <p>Made with React and GSAP.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
