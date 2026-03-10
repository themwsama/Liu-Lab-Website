import '../App.css'

function HomeHero({ sections, activeSection, onNavClick }) {
  return (
    <section id="home" className="page-section page-section--home">
      <div className="home-frame">
        <div className="home-bg-image" aria-hidden="true" />

        <header className="home-navbar">
          <div className="home-navbar-inner">
            <div className="home-navbar-logo">Liu Lab</div>
            <nav className="home-navbar-links">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={
                    activeSection === section.id
                      ? 'home-navbar-link home-navbar-link--active'
                      : 'home-navbar-link'
                  }
                  onClick={() => onNavClick(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="home-title-wrapper">
          <h1 className="home-title">Liu Lab</h1>
          <p className="home-subtitle">AI for Medical Disease</p>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

