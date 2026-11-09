import { profile } from "../data/profile"
import { useLang } from "../i18n/LanguageContext"

export default function About() {
  const { lang, t } = useLang()
  return (
    <>
      <section id="about" className="section about-section">
        <div className="container">
          <p className="eyebrow">{t.about.kicker}</p>
          <div className="about-grid">
            <div>
              <h2>{t.about.title}<span className="heading-dot">.</span></h2>
              <div className="about-text">
                {profile.about[lang].map(p => <p key={p}>{p}</p>)}
              </div>
            </div>
            <aside className="education-card">
              <p className="card-label">{t.about.education}</p>
              <p className="education-years">{profile.education.period}</p>
              <h3>{profile.education.degree[lang]}</h3>
              <p>{profile.education.institution}</p>
              <p className="education-expected">{t.about.expected}</p>
            </aside>
          </div>
        </div>
      </section>
      <section className="section skills-section" id="skills">
        <div className="container">
          <p className="eyebrow">{t.about.skillsKicker}</p>
          <h2>{t.about.skills}<span className="heading-dot">.</span></h2>
          <div className="skills-grid">
            {profile.skills.map(group => (
              <article className="skill-card" key={group.id}>
                <h3>{group.title[lang]}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
