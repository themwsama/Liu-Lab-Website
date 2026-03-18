import { useState } from 'react'
import '../App.css'

const BASE = import.meta.env.BASE_URL

const projectCards = [
  {
    id: 'mai-t1d',
    title: 'MAI-T1D',
    description:
      'AI models to examine information like genetics, proteins and changes in individual cells to better map how T1D develops.',
    image: BASE + 'Multimodal AI in T1D (MAI - T1D).png',
    tags: ['Highlight', 'Multimodal AI'],
  },
  {
    id: 'pankbase',
    title: 'Pankbase',
    description:
      'A comprehensive, centralized resource for the study of the human pancreas and diabetes.',
    image: BASE + 'Pankbase.png',
    tags: ['Highlight'],
  },
  {
    id: 'celllink',
    title: 'CellLink',
    description:
      'A novel single-cell multi-omics data integration method that normalizes feature profiles to align scales across datasets.',
    image: BASE + 'CellLink_Cover_Figure.png',
    tags: ['Highlight', 'Computational Genomics'],
  },
  {
    id: 'epcot',
    title: 'EPCOT',
    description:
      'A generalizable framework to comprehensively predict epigenome, chromatin organization, and transcriptome.',
    image: BASE + 'Ecor_Cover.jpg',
    tags: ['Highlight', 'Computational Genomics'],
  },
  {
    id: 'project-5',
    title: 'Genomic Knowledge Graph',
    description:
      'A graph database for human genome, epigenome, transcriptome, and 4D nucleome.',
    image: BASE + 'Genomic Knowledge Graph.png',
    tags: ['Highlight', 'Knowledge Graphs'],
  },
  {
    id: 'project-6',
    title: 'Genomic Literature Knowledge Base',
    description:
      'A comprehensive resource that integrates over 263 million biomedical terms and 14.6 million biomedical relationships.',
    image: BASE + 'Genomic Literature Knowledge Base.png',
    tags: ['Highlight', 'Knowledge Graphs'],
  },
]

const INITIAL_VISIBLE = 4

function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Highlight')

  const filtered = projectCards.filter((project) =>
    activeFilter ? project.tags.includes(activeFilter) : true
  )
  const visibleCards =
    expanded || filtered.length <= INITIAL_VISIBLE
      ? filtered
      : filtered.slice(0, INITIAL_VISIBLE)

  return (
    <section id="projects" className="page-section page-section--projects">
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
                    onClick={() => {
                      setActiveFilter(label)
                      setExpanded(false)
                    }}
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
                  <article key={project.id} className="project-card">
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
            <div className="projects-see-more-column">
              <button
                type="button"
                className="projects-see-more-btn"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                disabled={filtered.length <= INITIAL_VISIBLE}
              >
                {expanded ? 'See Less' : 'See More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

