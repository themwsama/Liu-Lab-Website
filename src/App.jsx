import { Suspense, lazy, useEffect, useState } from 'react'
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

function App() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'news', label: 'News' },
    { id: 'publications', label: 'Publications' },
    { id: 'people', label: 'People' },
    { id: 'join-us', label: 'Join Us' },
    { id: 'contact', label: 'Contact' },
  ]

  const [currentPage, setCurrentPage] = useState('home')
  const [activeSection, setActiveSection] = useState('home')
  const [atTopOfHome, setAtTopOfHome] = useState(true)
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null)
  const [pageReady, setPageReady] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectPageId, setProjectPageId] = useState(null)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const NAV_HEIGHT = 84
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const handleNavClick = (id) => {
    setMobileMenuOpen(false)

    if (currentPage === 'project') {
      setProjectPageId(null)
    }

    // Special case: from Publications, clicking News should behave like home-section navigation
    if (currentPage === 'publications' && id === 'news') {
      setCurrentPage('home')
      setPendingScrollTarget('news')
      return
    }

    // Symmetric case: from News (expanded), clicking Publications should go to the home Publications section
    if (currentPage === 'news' && id === 'publications') {
      setCurrentPage('home')
      setPendingScrollTarget('publications')
      return
    }

    if (
      id === 'people' ||
      id === 'join-us' ||
      (id === 'news' && currentPage !== 'home') ||
      (id === 'publications' && currentPage !== 'home')
    ) {
      const targetPage = id === 'news' || id === 'publications' ? id : id
      setCurrentPage(targetPage)
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    // Already on home page: scroll directly to the section (no jump to top)
    if (currentPage === 'home') {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        scrollToSection(id)
      }
      return
    }

    // Coming from another page (e.g. People): switch to home then scroll to section
    setCurrentPage('home')
    setPendingScrollTarget(id)
  }

  useEffect(() => {
    if (currentPage !== 'home') {
      return
    }

    const onScroll = () => {
      const aboutEl = document.getElementById('about')
      const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : Infinity
      setAtTopOfHome(aboutTop > 120)

      const viewportTop = 150
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id)
        if (!el) return { id: section.id, top: -Infinity }
        return { id: section.id, top: el.getBoundingClientRect().top }
      })
      const candidates = offsets.filter((o) => o.top <= viewportTop)
      const active =
        candidates.length > 0
          ? candidates.reduce((best, cur) => (cur.top > best.top ? cur : best))
          : { id: 'home' }
      setActiveSection(active.id)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    if (currentPage !== 'home' || !pendingScrollTarget) return

    // Ensure we start from top, then smooth-scroll if needed
    window.scrollTo({ top: 0, behavior: 'auto' })

    if (pendingScrollTarget !== 'home') {
      scrollToSection(pendingScrollTarget)
    }

    setPendingScrollTarget(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pendingScrollTarget])

  const activeNavId =
    currentPage === 'project'
      ? 'projects'
      : currentPage === 'people' ||
          currentPage === 'join-us' ||
          currentPage === 'news' ||
          currentPage === 'publications'
        ? currentPage
        : activeSection
  /* Blue header only at very top of home (hero); white header in about area and elsewhere */
  const useBlueHeader = currentPage === 'home' && atTopOfHome
  const headerTheme = useBlueHeader ? 'navbar--home' : 'navbar--people'

  // Simple fade-in when page (and its lazy-loaded chunks) have mounted
  useEffect(() => {
    setPageReady(false)
    const id = window.requestAnimationFrame(() => {
      setPageReady(true)
    })
    return () => window.cancelAnimationFrame(id)
  }, [currentPage])

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
