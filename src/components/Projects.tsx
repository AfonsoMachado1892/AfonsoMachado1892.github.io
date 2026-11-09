import { useState } from "react"
import { projects } from "../data/projects"
import type { ProjectCategory } from "../data/projects"
import { useLang } from "../i18n/LanguageContext"

const categories: ("all" | ProjectCategory)[] = ["all", "web", "systems", "networks"]

export default function Projects() {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all")
  const visible = projects.filter(project => filter === "all" || project.category === filter)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="eyebrow">{t.projects.kicker}</p>
        <div className="projects-heading">
          <div>
            <h2>{t.projects.title}<span className="heading-dot">.</span></h2>
            <p className="section-intro">{t.projects.intro}</p>
          </div>
          <span className="project-count">{String(projects.length).padStart(2, "0")} / 2024—2027</span>
        </div>
        <div className="filters" role="group" aria-label={t.projects.filter}>
          {categories.map(cat => (
            <button key={cat} type="button" className={`filter ${filter === cat ? "on" : ""}`}
              aria-pressed={filter === cat} onClick={() => setFilter(cat)}>
              {t.projects[cat]}
            </button>
          ))}
        </div>
        <div className="cards" aria-label={t.projects.aria}>
          {visible.map(project => (
            <article className={`card ${project.id === "laprizza" ? "featured" : ""}`} key={project.id}>
              <div className={`card-visual ${project.image ? "photo-visual" : ""}`}>
                {project.image ?
                  <img src={project.image} alt={project.imageAlt?.[lang] || ""} loading="eager" /> :
                  <div className="visual-number" aria-hidden="true">{project.number}</div>
                }
                <span className="visual-caption">{project.category === "web" ? "WEB / FULL-STACK" : project.category === "networks" ? "NETWORKS" : "SOFTWARE / SYSTEMS"}</span>
              </div>
              <div className="card-content">
                <p className="card-period">{project.period[lang]}</p>
                <h3>{project.title[lang]}</h3>
                <p className="card-description">{project.description[lang]}</p>
                {project.contribution && <p className="card-contribution"><strong>{t.projects.contribution}:</strong> {project.contribution[lang]}</p>}
                <ul className="project-tags">
                  {project.tech.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <div className="card-footer">
                  {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer">{t.projects.code} <span aria-hidden="true">↗</span></a> :
                    project.ongoing ? <span className="ongoing"><span className="status-dot" />{t.projects.ongoing}</span> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
