import { useMemo, useState } from 'react'
import '../App.css'
import { NEWS_ITEMS } from '../data/news.js'

function NewsSection({ variant = 'compact', onSeeMore }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const showSeeMore = variant === 'compact' && typeof onSeeMore === 'function'
  const filters = useMemo(
    () => [
      'All',
      'Lab Milestones',
      'Awards & Honors',
      'Publications',
      'Talks & Events',
      'People & Career',
    ],
    []
  )

  const getCategory = (tag) => {
    const t = String(tag || '').toLowerCase()
    if (t.includes('milestone')) return 'Lab Milestones'
    if (t.includes('award') || t.includes('honor')) return 'Awards & Honors'
    if (t.includes('publication')) return 'Publications'
    if (
      t.includes('talk') ||
      t.includes('event') ||
      t.includes('conference') ||
      t.includes('symposium')
    )
      return 'Talks & Events'
    return 'People & Career'
  }

  const baseItems =
    variant === 'compact' ? NEWS_ITEMS.slice(0, 4) : NEWS_ITEMS

  const itemsToRender =
    variant === 'full' && activeFilter !== 'All'
      ? baseItems.filter((n) => getCategory(n.tag) === activeFilter)
      : baseItems

  return (
    <section id="news" className="page-section page-section--news">
      <div className="page-section-inner news-layout">
        <aside className="news-sidebar">
          <h2 className="news-title-heading">News</h2>
          {variant === 'full' && (
            <nav className="news-filter-list" aria-label="News filters">
              {filters.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={
                    activeFilter === label
                      ? 'news-filter-btn news-filter-btn--active'
                      : 'news-filter-btn'
                  }
                  onClick={() => setActiveFilter(label)}
                >
                  {label}
                </button>
              ))}
            </nav>
          )}
        </aside>

        <div className="news-main">
          <h2 className="news-title-heading news-title-heading--mobile">News</h2>
          <div className="news-list-and-cta">
            <div className="news-timeline">
              <div className="news-timeline-line" />
              {itemsToRender.map((item, index) => (
                <div key={item.id} className="news-row">
                  <div className="news-date-column">
                    <div className="news-date-dot" />
                    <span className="news-date-text">{item.date}</span>
                  </div>

                  <article className="news-card">
                    <div className="news-card-content">
                      <div className="news-mobile-meta">
                        <span className="news-mobile-dot" aria-hidden="true" />
                        <span className="news-mobile-date">{item.date}</span>
                        {item.featured && (
                          <div className="news-card-star" aria-hidden="true">
                            ★
                          </div>
                        )}
                        <div className="news-mobile-tag">{item.tag}</div>
                      </div>
                      {item.featured && (
                        <div className="news-card-star" aria-hidden="true">
                          ★
                        </div>
                      )}
                      <h3 className="news-card-title news-card-title--desktop">
                        {item.title}
                      </h3>
                      <div className="news-mobile-bottom">
                        <h3 className="news-card-title news-card-title--mobile">
                          {item.title}
                        </h3>
                        <div className="news-mobile-thumb" aria-hidden="true">
                          <img
                            src={item.image}
                            alt=""
                            loading="lazy"
                            sizes="73px"
                            className="news-mobile-thumb-img"
                          />
                        </div>
                      </div>
                      <div className="news-card-tag">{item.tag}</div>
                    </div>
                    <div className="news-card-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        sizes="(max-width: 900px) 100vw, 227px"
                        className="news-card-image"
                      />
                    </div>
                  </article>
                </div>
              ))}
            </div>
            {showSeeMore && (
              <div className="news-see-more-column">
                <button
                  type="button"
                  className="news-see-more-btn"
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

export default NewsSection

