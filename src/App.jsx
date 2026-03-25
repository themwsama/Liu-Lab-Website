import { Suspense, lazy } from 'react'
import './App.css'
import HomeHero from './components/HomeHero.jsx'
import HomeAbout from './components/HomeAbout.jsx'
const ProjectsSection = lazy(() => import('./components/ProjectsSection.jsx'))
const NewsSection = lazy(() => import('./components/NewsSection.jsx'))
const PublicationsSection = lazy(() => import('./components/PublicationsSection.jsx'))
const PeopleSection = lazy(() => import('./components/PeopleSection.jsx'))
const JoinUsSection = lazy(() => import('./components/JoinUsSection.jsx'))
const ProjectDetailSection = lazy(() => import('./components/ProjectDetailSection.jsx'))
import SiteFooter from './components/SiteFooter.jsx'
import { useSiteNavigation } from './hooks/useSiteNavigation.js'

function App() {
  const {
    sections,
    currentPage,
    setCurrentPage,
    projectPageId,
    setProjectPageId,
    setPendingScrollTarget,
    pageReady,
    mobileMenuOpen,
    setMobileMenuOpen,
    handleNavClick,
    activeNavId,
    headerTheme,
  } = useSiteNavigation()

  return (
    <div className="app-root">
      <header className={`navbar ${headerTheme}`}>
        <div className="navbar-inner">
          <div className="navbar-logo">
            <span className="navbar-lab-name">Liu Lab</span>
          </div>
          <button
            type="button"
            className="navbar-menu-btn"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="navbar-menu-icon" aria-hidden="true" />
          </button>
          <nav className="navbar-links">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={
                  activeNavId === section.id
                    ? 'navbar-link navbar-link--active'
                    : 'navbar-link'
                }
                onClick={() => handleNavClick(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          role="presentation"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-nav-drawer"
            role="dialog"
            aria-label="Site menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Menu</span>
              <button
                type="button"
                className="mobile-nav-close"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="mobile-nav-links">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={
                    activeNavId === section.id
                      ? 'mobile-nav-link mobile-nav-link--active'
                      : 'mobile-nav-link'
                  }
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <main className="page">
        <Suspense
          fallback={
            <div className="page-loading" aria-live="polite" aria-busy="true">
              <span className="page-loading-dot" />
              <span className="page-loading-text">Loading…</span>
            </div>
          }
        >
          <div
            className={
              currentPage === 'people' || currentPage === 'join-us'
                ? undefined
                : pageReady
                  ? 'page-fade page-fade--visible'
                  : 'page-fade'
            }
          >
            {currentPage === 'people' && (
              <>
                <PeopleSection />
                <SiteFooter />
              </>
            )}
            {currentPage === 'join-us' && (
              <>
                <JoinUsSection />
                <SiteFooter />
              </>
            )}
            {currentPage === 'news' && (
              <>
                <NewsSection variant="full" />
                <SiteFooter />
              </>
            )}
            {currentPage === 'publications' && (
              <>
                <PublicationsSection variant="full" />
                <SiteFooter />
              </>
            )}
            {currentPage === 'project' && projectPageId && (
              <>
                <ProjectDetailSection
                  projectId={projectPageId}
                  onBack={() => {
                    setCurrentPage('home')
                    setProjectPageId(null)
                    setPendingScrollTarget('projects')
                  }}
                />
                <SiteFooter />
              </>
            )}
            {currentPage === 'home' && (
              <div className="home-entrance">
                <HomeHero />
                <HomeAbout />
                <ProjectsSection
                  onProjectClick={(id) => {
                    setCurrentPage('project')
                    setProjectPageId(id)
                    window.scrollTo({ top: 0, behavior: 'auto' })
                  }}
                />
                <NewsSection
                  variant="compact"
                  onSeeMore={() => {
                    setCurrentPage('news')
                    window.scrollTo({ top: 0, behavior: 'auto' })
                  }}
                />
                <PublicationsSection
                  variant="compact"
                  onSeeMore={() => {
                    setCurrentPage('publications')
                    window.scrollTo({ top: 0, behavior: 'auto' })
                  }}
                />
                <SiteFooter />
              </div>
            )}
          </div>
        </Suspense>
      </main>
    </div>
  )
}

export default App
