import { useEffect, useState } from 'react'
import './App.css'
import HomeHero from './components/HomeHero.jsx'
import HomeAbout from './components/HomeAbout.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import PublicationsSection from './components/PublicationsSection.jsx'
import PeopleSection from './components/PeopleSection.jsx'
import JoinUsSection from './components/JoinUsSection.jsx'
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const NAV_HEIGHT = 84
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const handleNavClick = (id) => {
    if (id === 'people' || id === 'join-us') {
      setCurrentPage(id)
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
    currentPage === 'people' || currentPage === 'join-us' ? currentPage : activeSection
  /* Blue header only at very top of home (hero); white header in about area and elsewhere */
  const useBlueHeader = currentPage === 'home' && atTopOfHome
  const headerTheme = useBlueHeader ? 'navbar--home' : 'navbar--people'

  return (
    <div className="app-root">
      <header className={`navbar ${headerTheme}`}>
        <div className="navbar-inner">
          <div className="navbar-logo">
            <span className="navbar-lab-name">Liu Lab</span>
          </div>
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
      <main className="page">
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
        {currentPage === 'home' && (
          <>
            <HomeHero />
            <HomeAbout />
            <ProjectsSection />
            <NewsSection />
            <PublicationsSection />
            <SiteFooter />
          </>
        )}
      </main>
    </div>
  )
}

export default App
