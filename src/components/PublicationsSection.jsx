import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import '../App.css'
import { PUBLICATIONS } from '../data/publications.js'

function normalize(s) {
  return String(s || '').trim().toLowerCase()
}

function useClickOutside(ref, onOutside, active) {
  useEffect(() => {
    if (!active) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onOutside()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [ref, onOutside, active])
}

function PubFilterDropdown({
  placeholder,
  value,
  options,
  onChange,
  id,
  ariaLabel,
}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])
  useClickOutside(wrapRef, close, open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const label =
    value === '' || value == null ? placeholder : String(value)

  return (
    <div
      ref={wrapRef}
      className={`pub-dropdown${open ? ' pub-dropdown--open' : ''}`}
    >
      <button
        type="button"
        id={id}
        className="pub-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="pub-dropdown-trigger-text">{label}</span>
        <span className="pub-dropdown-chevron" aria-hidden />
      </button>
      {open && (
        <ul className="pub-dropdown-menu" role="listbox" aria-labelledby={id}>
          {options.map((opt) => {
            const selected =
              (value === '' || value == null ? '' : value) === opt.value
            return (
              <li key={opt.value === '' ? '__all' : opt.value} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={
                    selected
                      ? 'pub-dropdown-option pub-dropdown-option--selected'
                      : 'pub-dropdown-option'
                  }
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                >
                  <span className="pub-dropdown-check" aria-hidden>
                    {selected ? '✓' : '\u00a0'}
                  </span>
                  <span className="pub-dropdown-option-label">{opt.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function PublicationsSection({ variant = 'compact', onSeeMore }) {
  const showSeeMore = variant === 'compact' && typeof onSeeMore === 'function'

  const [searchQuery, setSearchQuery] = useState('')
  const [activeType, setActiveType] = useState('')
  const [activeYear, setActiveYear] = useState('')

  const baseItems =
    variant === 'compact' ? PUBLICATIONS.slice(0, 3) : PUBLICATIONS

  const typeOptions = useMemo(() => {
    const allTags = PUBLICATIONS.flatMap((p) => p.tags || [])
    const tags = Array.from(new Set(allTags)).filter(Boolean)
    tags.sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...tags]
  }, [])

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(PUBLICATIONS.map((p) => p.year))).filter(
      Boolean,
    )
    years.sort((a, b) => String(b).localeCompare(String(a)))
    return ['All', ...years]
  }, [])

  const typeDropdownOptions = useMemo(
    () =>
      typeOptions.map((t) => ({
        value: t === 'All' ? '' : t,
        label: t,
      })),
    [typeOptions],
  )

  const yearDropdownOptions = useMemo(
    () =>
      yearOptions.map((y) => ({
        value: y === 'All' ? '' : y,
        label: y,
      })),
    [yearOptions],
  )

  const itemsToRender = useMemo(() => {
    if (variant !== 'full') return baseItems

    const q = normalize(searchQuery)
    return baseItems.filter((pub) => {
      if (activeType && !(pub.tags || []).includes(activeType)) return false
      if (activeYear && pub.year !== activeYear) return false
      if (!q) return true

      const haystack = normalize(`${pub.title} ${pub.authors} ${pub.meta}`)
      return haystack.includes(q)
    })
  }, [activeType, activeYear, baseItems, searchQuery, variant])

  const hasResults = itemsToRender.length > 0
  return (
    <section
      id="publications"
      className="page-section page-section--publications"
    >
      <div className="page-section-inner pub-layout">
        <aside className="pub-sidebar">
          <h2 className="pub-title-heading">Publications</h2>
        </aside>

        <div className="pub-main">
          <h2 className="pub-title-heading pub-title-heading--mobile">Publications</h2>

          {variant === 'full' && (
            <div
              className="pub-toolbar"
              aria-label="Publication search and filters"
            >
              <div className="pub-toolbar-control pub-toolbar-control--search">
                <div className="pub-toolbar-search-row">
                  <input
                    className="pub-toolbar-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    aria-label="Search publications"
                  />
                  <span className="pub-search-magnifier" aria-hidden="true" />
                </div>
              </div>

              <div className="pub-toolbar-control pub-toolbar-control--dropdown">
                <PubFilterDropdown
                  id="pub-filter-type"
                  placeholder="Type"
                  value={activeType}
                  options={typeDropdownOptions}
                  onChange={setActiveType}
                  ariaLabel="Filter by type"
                />
              </div>

              <div className="pub-toolbar-control pub-toolbar-control--dropdown">
                <PubFilterDropdown
                  id="pub-filter-year"
                  placeholder="Year"
                  value={activeYear}
                  options={yearDropdownOptions}
                  onChange={setActiveYear}
                  ariaLabel="Filter by year"
                />
              </div>
            </div>
          )}

          <div className="pub-list-and-cta">
            <div className="pub-list">
              {itemsToRender.map((pub) => (
                <article key={pub.id} className="pub-card">
                  <div className="pub-card-content">
                    <h3 className="pub-card-title pub-card-title--desktop">{pub.title}</h3>
                    <div className="pub-mobile-bottom">
                      <h3 className="pub-card-title pub-card-title--mobile">{pub.title}</h3>
                      <div className="pub-mobile-thumb" aria-hidden="true">
                        <img
                          src={pub.image}
                          alt=""
                          loading="lazy"
                          sizes="73px"
                          className="pub-mobile-thumb-img"
                        />
                      </div>
                    </div>
                    <p className="pub-card-authors">{pub.authors}</p>
                    <div className="pub-card-meta-row">
                      <span className="pub-card-meta-text">{pub.meta}</span>
                      {(pub.tags || []).map((tag) => (
                        <button key={tag} type="button" className="pub-pill">
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="pub-card-image-wrapper">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      loading="lazy"
                      sizes="(max-width: 900px) 100vw, 269px"
                      className="pub-card-image"
                    />
                  </div>
                </article>
              ))}

              {!hasResults && (
                <div className="pub-empty">
                  No publications match your filters.
                </div>
              )}
            </div>

            {showSeeMore && (
              <div className="pub-see-more-column">
                <button
                  type="button"
                  className="pub-see-more-btn"
                  onClick={onSeeMore}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PublicationsSection

