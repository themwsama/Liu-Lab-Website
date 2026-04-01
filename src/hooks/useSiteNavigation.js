import { useEffect, useState } from 'react'
import { NAV_SECTIONS } from '../data/nav.js'

const NAV_HEIGHT = 84
const VIEWPORT_TOP = 150
const ABOUT_TOP_THRESHOLD = 120

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT
  window.scrollTo({ top: y, behavior: 'smooth' })
}

/**
 * Site-wide page state, header theme, scroll-spy for home, and nav click handling.
 */
export function useSiteNavigation() {
  const sections = NAV_SECTIONS

  const [currentPage, setCurrentPage] = useState('home')
  const [activeSection, setActiveSection] = useState('home')
  const [atTopOfHome, setAtTopOfHome] = useState(true)
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null)
  const [pageReady, setPageReady] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectPageId, setProjectPageId] = useState(null)

  const handleNavClick = (id) => {
    setMobileMenuOpen(false)

    if (currentPage === 'project') {
      setProjectPageId(null)
    }

    if (currentPage === 'publications' && id === 'news') {
      setCurrentPage('home')
      setPendingScrollTarget('news')
      return
    }

    if (currentPage === 'news' && id === 'publications') {
      setCurrentPage('home')
      setPendingScrollTarget('publications')
      return
    }

    if (currentPage === 'publications' && id === 'projects') {
      setCurrentPage('home')
      setPendingScrollTarget('projects')
      return
    }

    if (currentPage === 'projects' && id === 'publications') {
      setCurrentPage('home')
      setPendingScrollTarget('publications')
      return
    }

    if (currentPage === 'news' && id === 'projects') {
      setCurrentPage('home')
      setPendingScrollTarget('projects')
      return
    }

    if (currentPage === 'projects' && id === 'news') {
      setCurrentPage('home')
      setPendingScrollTarget('news')
      return
    }

    if (
      id === 'people' ||
      id === 'join-us' ||
      (id === 'news' && currentPage !== 'home') ||
      (id === 'publications' && currentPage !== 'home') ||
      (id === 'projects' && currentPage !== 'home')
    ) {
      setCurrentPage(id)
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (currentPage === 'home') {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        scrollToSection(id)
      }
      return
    }

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
      setAtTopOfHome(aboutTop > ABOUT_TOP_THRESHOLD)

      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id)
        if (!el) return { id: section.id, top: -Infinity }
        return { id: section.id, top: el.getBoundingClientRect().top }
      })
      const candidates = offsets.filter((o) => o.top <= VIEWPORT_TOP)
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
          currentPage === 'publications' ||
          currentPage === 'projects'
        ? currentPage
        : activeSection

  const useBlueHeader = currentPage === 'home' && atTopOfHome
  const headerTheme = useBlueHeader ? 'navbar--home' : 'navbar--people'

  useEffect(() => {
    setPageReady(false)
    const id = window.requestAnimationFrame(() => {
      setPageReady(true)
    })
    return () => window.cancelAnimationFrame(id)
  }, [currentPage])

  return {
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
  }
}
