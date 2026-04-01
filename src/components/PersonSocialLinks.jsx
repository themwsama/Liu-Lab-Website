import { SOCIAL_LOGO_URLS as SOCIAL } from '../data/socialUrls.js'
import { getPersonLinks } from '../data/personLinks.js'

function SocialLinkPeople({ href, label, icon }) {
  if (!href) {
    return (
      <span
        className="people-card-link-inactive"
        aria-hidden="true"
        title="Link coming soon"
      >
        <img src={icon} alt="" />
      </span>
    )
  }
  const isMail = href.startsWith('mailto:')
  return (
    <a
      href={href}
      aria-label={label}
      {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <img src={icon} alt="" />
    </a>
  )
}

/** People page profile cards — order: Scholar, GitHub, Email, CV */
export function PersonSocialLinks({ name }) {
  const L = getPersonLinks(name)
  return (
    <div className="people-card-links">
      <SocialLinkPeople
        href={L?.googleScholar}
        label="Google Scholar"
        icon={SOCIAL.google}
      />
      <SocialLinkPeople href={L?.github} label="GitHub" icon={SOCIAL.git} />
      <SocialLinkPeople href={L?.email} label="Email" icon={SOCIAL.email} />
      <SocialLinkPeople
        href={L?.cv}
        label="Curriculum Vitae"
        icon={SOCIAL.cv}
      />
    </div>
  )
}

function SocialLinkHome({ href, label, icon, isCv }) {
  const className = isCv
    ? 'home-about-links-btn home-about-links-btn--icon'
    : 'home-about-links-icon'
  if (!href) {
    return (
      <span className={className} aria-hidden="true">
        <img src={icon} alt="" className="home-about-links-img" />
      </span>
    )
  }
  const isMail = href.startsWith('mailto:')
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {isCv ? (
        <img src={icon} alt="CV" className="home-about-links-img" />
      ) : (
        <>
          <span className="sr-only">{label}</span>
          <img src={icon} alt="" className="home-about-links-img" />
        </>
      )}
    </a>
  )
}

/** Home About sidebar (Jie Liu) — same link order as People */
export function HomeAboutSocialLinks({ name = 'Jie Liu' }) {
  const L = getPersonLinks(name)
  return (
    <div className="home-about-links">
      <SocialLinkHome
        href={L?.googleScholar}
        label="Google Scholar"
        icon={SOCIAL.google}
      />
      <SocialLinkHome href={L?.github} label="GitHub" icon={SOCIAL.git} />
      <SocialLinkHome href={L?.email} label="Email" icon={SOCIAL.email} />
      <SocialLinkHome
        href={L?.cv}
        label="Curriculum Vitae"
        icon={SOCIAL.cv}
        isCv
      />
    </div>
  )
}
