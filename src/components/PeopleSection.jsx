import { useEffect, useState } from 'react'
import '../App.css'
import {
  ALUMNI_PHD,
  ALUMNI_RA,
  OUTREACH_ITEMS,
  PEOPLE,
} from '../data/people.js'
import { SOCIAL_LOGO_URLS as SOCIAL } from '../data/socialUrls.js'

function PersonCardImage({ src, alt }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="people-card-image people-card-image--placeholder" aria-hidden>
        <span className="people-card-image-initials">{alt || '?'}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt=""
      className="people-card-image"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

function OutreachMedia({ image }) {
  if (image) {
    return (
      <img
        src={image}
        alt=""
        className="people-outreach-img"
        loading="lazy"
      />
    )
  }
  return (
    <div className="people-outreach-placeholder" aria-hidden="true">
      <span className="people-outreach-placeholder-label">Image placeholder</span>
    </div>
  )
}

function PeopleIcon() {
  return (
    <svg width="24" height="24" className="people-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PersonCard({ name, role, image }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  return (
    <article className="people-card">
      <div className="people-card-image-wrap">
        <PersonCardImage src={image} alt={initials} />
      </div>
      <div className="people-card-body">
        <h3 className="people-card-name">{name}</h3>
        <p className="people-card-role">{role}</p>
        <div className="people-card-links">
          <a href="#scholar" aria-label="Google Scholar"><img src={SOCIAL.google} alt="" /></a>
          <a href="#github" aria-label="GitHub"><img src={SOCIAL.git} alt="" /></a>
          <a href="#email" aria-label="Email"><img src={SOCIAL.email} alt="" /></a>
          <button type="button" aria-label="CV"><img src={SOCIAL.cv} alt="" /></button>
        </div>
      </div>
    </article>
  )
}

function AlumniTextCard({ name, role }) {
  return (
    <article className="people-alumni-text-card">
      <h3 className="people-card-name">{name}</h3>
      <p className="people-card-role">{role}</p>
    </article>
  )
}

function PeopleSection() {
  const [subNav, setSubNav] = useState('current')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    /* Brief pause after chunk paint so transition isn’t “Loading…” → instant cards */
    const t = window.setTimeout(() => setMounted(true), 50)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="people" className="page-section page-section--people">
      <div className={`people-page-layout ${mounted ? 'people-fade--visible' : 'people-fade'}`}>
        <aside className="people-sidebar">
          <h2 className="people-page-title">People</h2>
          <nav className="people-subnav" aria-label="People sub-navigation">
            <button
              type="button"
              className={`people-subnav-link ${subNav === 'current' ? 'people-subnav-link--active' : ''}`}
              onClick={() => setSubNav('current')}
            >
              Current
            </button>
            <button
              type="button"
              className={`people-subnav-link ${subNav === 'alumni' ? 'people-subnav-link--active' : ''}`}
              onClick={() => setSubNav('alumni')}
            >
              Alumni
            </button>
            <button
              type="button"
              className={`people-subnav-link ${subNav === 'outreach' ? 'people-subnav-link--active' : ''}`}
              onClick={() => setSubNav('outreach')}
            >
              Outreach
            </button>
          </nav>
        </aside>

        <div className="people-main">
          {subNav === 'alumni' && (
            <>
              <div className="people-section">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Ph.D.</h3>
                </div>
                <div className="people-cards-grid">
                  {ALUMNI_PHD.map((person) => (
                    <PersonCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      image={person.image}
                    />
                  ))}
                </div>
              </div>
              <div className="people-section">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Research Assistant</h3>
                </div>
                <div className="people-cards-grid">
                  {ALUMNI_RA.map((person) => (
                    <AlumniTextCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {subNav === 'outreach' && (
            <div className="people-outreach">
              <ul className="people-outreach-grid" role="list">
                {OUTREACH_ITEMS.map((item) => (
                  <li key={item.id} className="people-outreach-item">
                    <figure className="people-outreach-figure">
                      <div className="people-outreach-media">
                        <OutreachMedia image={item.image} />
                      </div>
                      <figcaption className="people-outreach-caption">
                        {item.caption}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {subNav === 'current' && (
            <div className="people-profiles-frame">
              <div className="people-top">
                <div className="people-top-left">
                  <div className="people-section-header">
                    <PeopleIcon />
                    <h3 className="people-section-title">Principal Investigator</h3>
                  </div>
                  <div className="people-cards-grid">
                    {PEOPLE.filter((p) => p.category === 'pi').map((person) => (
                      <PersonCard
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        image={person.image}
                      />
                    ))}
                  </div>
                </div>
                <div className="people-top-right">
                  <div className="people-section-header">
                    <PeopleIcon />
                    <h3 className="people-section-title">Staff</h3>
                  </div>
                  <div className="people-cards-grid people-cards-grid--staff">
                    {PEOPLE.filter((p) => p.category === 'staff').map((person) => (
                      <PersonCard
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        image={person.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="people-middle">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Ph.D. Candidate</h3>
                </div>
                <div className="people-cards-grid">
                  {PEOPLE.filter((p) => p.category === 'phd').map((person) => (
                    <PersonCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      image={person.image}
                    />
                  ))}
                </div>
              </div>
              <div className="people-bottom">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Research Assistant</h3>
                </div>
                <div className="people-cards-grid">
                  {PEOPLE.filter((p) => p.category === 'ra').map((person) => (
                    <PersonCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      image={person.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PeopleSection
