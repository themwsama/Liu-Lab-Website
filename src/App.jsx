import { useEffect, useState } from 'react'
import './App.css'
import HomeHero from './components/HomeHero.jsx'
import HomeAbout from './components/HomeAbout.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import PublicationsSection from './components/PublicationsSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'

function App() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'news', label: 'News' },
    { id: 'publications', label: 'Publications' },
    { id: 'people', label: 'People' },
    { id: 'contact', label: 'Contact' },
  ]

  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const NAV_HEIGHT = 84
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => {
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id)
        if (!el) return { id: section.id, top: Number.POSITIVE_INFINITY }
        return { id: section.id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const nearest = offsets.reduce((best, cur) =>
        cur.top < best.top ? cur : best,
      )
      setActiveSection(nearest.id)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app-root">
      <main className="page">
        <HomeHero
          sections={sections}
          activeSection={activeSection}
          onNavClick={scrollToSection}
        />
        <HomeAbout />
        <ProjectsSection />
        <NewsSection />
        <PublicationsSection />
        <SiteFooter />
      </main>
    </div>
  )
}

export default App
