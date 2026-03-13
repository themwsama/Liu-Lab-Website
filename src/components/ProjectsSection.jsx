import '../App.css'

const projectCards = [
  {
    id: 'mai-t1d',
    title: 'Multimodal AI in T1D (MAI-T1D)',
    description:
      'AI models to examine information like genetics, proteins and changes in individual cells to better map how T1D develops.',
    image:
      import.meta.env.BASE_URL + 'Multimodal AI in T1D (MAI - T1D).png',
    tags: ['Highlight', 'Multimodal AI'],
  },
  {
    id: 'pankbase',
    title: 'PanKbase',
    description:
      'A comprehensive, centralized resource for the study of the human pancreas and diabetes.',
    image: import.meta.env.BASE_URL + 'Pankbase.png',
    tags: ['Highlight'],
  },
  {
    id: 'celllink',
    title: 'CellLink',
    description:
      'A novel single-cell multi-omics data integration method that normalizes feature profiles to align scales across datasets.',
    image: import.meta.env.BASE_URL + 'CellLink_Cover_Figure.png',
    tags: ['Highlight', 'Computational Genomics'],
  },
  {
    id: 'epcot',
    title: 'EPCOT',
    description:
      'A generalizable framework to comprehensively predict epigenome, chromatin organization, and transcriptome.',
    image: import.meta.env.BASE_URL + 'Ecor_Cover.jpg',
    tags: ['Highlight', 'Computational Genomics'],
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="page-section page-section--projects">
      <div className="page-section-inner projects-layout">
        <aside className="projects-sidebar">
          <h2 className="projects-title">Projects</h2>
          <ul className="projects-filter-list">
            <li className="projects-filter projects-filter--active">Highlight</li>
            <li className="projects-filter">Knowledge Graphs</li>
            <li className="projects-filter">Multimodal AI</li>
            <li className="projects-filter">Computational Genomics</li>
            <li className="projects-filter">Machine Learning</li>
            <li className="projects-filter">Biomedical Applications</li>
          </ul>
        </aside>

        <div className="projects-main">
          <div className="projects-grid">
            {projectCards.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
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

          <div className="projects-see-more-row">
            <button type="button" className="projects-see-more-btn">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

