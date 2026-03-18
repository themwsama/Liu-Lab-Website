import { useMemo, useState } from 'react'
import '../App.css'

const publications = [
  {
    id: 'ophthal-2024',
    title:
      'Liquid biopsy for proliferative diabetic retinopathy: single-cell transcriptomics of human vitreous reveals inflammatory T cell signature',
    authors:
      'R Haliyur, D Parkinson, F Ma, J Xu, Q Li, Y Huang, L Tsoi, R Bogle, J Liu, J Gudjonsson, R C Rao',
    meta: 'Ophthalmology Science, 10/2024',
    type: 'Ophthalmology Science',
    year: '2024',
    tags: ['DOI', 'PMID'],
    image: import.meta.env.BASE_URL + 'Multimodal AI in T1D (MAI - T1D).png',
  },
  {
    id: 'cntools-2024',
    title:
      'CNTools: A computational toolbox for cellular neighborhood analysis from multiplexed images',
    authors:
      'Y Tao, F Feng, X Luo, C Reihsmann, A Hopkirk, J Cartailler, M Brissova, S Parker, D Saunders, J Liu',
    meta: 'PLoS Computational Biology, 08/2024',
    type: 'PLoS Computational Biology',
    year: '2024',
    tags: ['DOI', 'PMID', 'Code', 'Project'],
    image: import.meta.env.BASE_URL + 'Genomic Literature Knowledge Base.png',
  },
  {
    id: 'cochlea-2024',
    title:
      '3D reconstruction of the mouse cochlea from scRNA-seq data suggests morphogen-based principles in apex-to-base specification',
    authors: 'S Wang, S Chakraborty, Y Fu, M Lee, J Liu, J Waldhaus',
    meta: 'Developmental Cell, 06/2024',
    type: 'Developmental Cell',
    year: '2024',
    tags: ['DOI', 'PMID'],
    image: import.meta.env.BASE_URL + 'Genomic Knowledge Graph.png',
  },
  {
    id: 'inner-ear-2024',
    title:
      'Mapping the developmental potential of mouse inner ear organoids at single-cell resolution',
    authors: 'J Waldhaus*, Linghua Jiang*, L Liu, J Liu, R Duncan',
    meta: 'iScience, 02/2024',
    type: 'iScience',
    year: '2024',
    tags: ['DOI', 'PMID', 'Project'],
    image: import.meta.env.BASE_URL + 'Ecor_Cover.jpg',
  },
] // In future we can append more items for the full page

function normalize(s) {
  return String(s || '').trim().toLowerCase()
}

function PublicationsSection({ variant = 'compact', onSeeMore }) {
  const showSeeMore = variant === 'compact' && typeof onSeeMore === 'function'

  const [searchQuery, setSearchQuery] = useState('')
  const [activeType, setActiveType] = useState('')
  const [activeYear, setActiveYear] = useState('')

  const baseItems =
    variant === 'compact' ? publications.slice(0, 3) : publications

  const typeOptions = useMemo(() => {
    const allTags = publications.flatMap((p) => p.tags || [])
    const tags = Array.from(new Set(allTags)).filter(Boolean)
    tags.sort((a, b) => String(a).localeCompare(String(b)))
    return ['All', ...tags]
  }, [])

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(publications.map((p) => p.year))).filter(
      Boolean,
    )
    years.sort((a, b) => String(b).localeCompare(String(a)))
    return ['All', ...years]
  }, [])

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

              <div className="pub-toolbar-control">
                <div className="pub-toolbar-select-wrap">
                  <select
                    className="pub-toolbar-select"
                    value={activeType}
                    onChange={(e) => setActiveType(e.target.value)}
                    aria-label="Filter by type"
                  >
                    <option value="">Type</option>
                    {typeOptions
                      .filter((t) => t !== 'All')
                      .map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pub-toolbar-control">
                <div className="pub-toolbar-select-wrap">
                  <select
                    className="pub-toolbar-select"
                    value={activeYear}
                    onChange={(e) => setActiveYear(e.target.value)}
                    aria-label="Filter by year"
                  >
                    <option value="">Year</option>
                    {yearOptions
                      .filter((y) => y !== 'All')
                      .map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
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

