import { useState } from 'react'
import '../App.css'
import { PROJECT_CARDS } from '../data/projects.js'

const INITIAL_VISIBLE = 4

function ProjectsSection({
  variant = 'compact',
  onProjectClick,
  onSeeMore,
}) {
  const [activeFilter, setActiveFilter] = useState('Highlight')

  const filtered = PROJECT_CARDS.filter((project) =>
    activeFilter ? project.tags.includes(activeFilter) : true
  )

  const visibleCards =
    variant === 'full'
      ? filtered
      : filtered.slice(0, INITIAL_VISIBLE)

  const showSeeMore =
    variant === 'compact' && typeof onSeeMore === 'function'

  return (
    <section
      id="projects"
      className={`page-section page-section--projects${variant === 'full' ? ' page-section--projects-full' : ''}`}
    >
      <div className="page-section-inner projects-layout">
        <aside className="projects-sidebar">
          <h2 className="projects-title">Projects</h2>
          <ul className="projects-filter-list">
            {['Highlight', 'Knowledge Graphs', 'Multimodal AI', 'Computational Genomics', 'Machine Learning', 'Biomedical Applications'].map(
              (label) => (
                <li
                  key={label}
                  className={
                    activeFilter === label
                      ? 'projects-filter projects-filter--active'
                      : 'projects-filter'
                  }
                >
                  <button
                    type="button"
                    className="projects-filter-button"
                    onClick={() => setActiveFilter(label)}
                  >
                    {label}
                  </button>
                </li>
              )
            )}
          </ul>
        </aside>

        <div className="projects-main">
          <h2 className="projects-title projects-title--mobile">Projects</h2>
          <div className="projects-list-and-cta">
            <div className="projects-grid-wrapper">
              <div className="projects-grid">
                {visibleCards.map((project) => (
                  <article
                    key={project.id}
                    className={`project-card${typeof onProjectClick === 'function' ? ' project-card--clickable' : ''}`}
                    role={typeof onProjectClick === 'function' ? 'link' : undefined}
                    tabIndex={typeof onProjectClick === 'function' ? 0 : undefined}
                    aria-label={`Open ${project.title} project details`}
                    onClick={() => onProjectClick?.(project.id)}
                    onKeyDown={(e) => {
                      if (!onProjectClick) return
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onProjectClick(project.id)
                      }
                    }}
                  >
                    <div className="project-card-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                    loading="lazy"
                    sizes="(max-width: 900px) 100vw, 535px"
                        className="project-card-image"
                      />
                    </div>
                    <div className="project-card-body">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-body">{project.description}</p>
                      <div className="project-card-tags">
                        {project.tags.map((tag, index) => (
                          <span
                            key={tag}
                            className={
                              index === 0
                                ? 'project-tag project-tag--primary'
                                : 'project-tag'
                            }
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            {showSeeMore && (
              <div className="projects-see-more-column">
                <button
                  type="button"
                  className="projects-see-more-btn"
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

export default ProjectsSection

