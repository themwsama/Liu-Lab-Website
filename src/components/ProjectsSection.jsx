import '../App.css'

function ProjectsSection() {
  return (
    <section id="projects" className="page-section page-section--projects">
      <div className="page-section-inner">
        <header className="section-header section-header--inverse">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            From molecular tools to translational applications.
          </p>
        </header>
        <div className="projects-grid">
          <article className="project-card">
            <h3 className="project-title">Programmable genome engineering</h3>
            <p className="project-body">
              Building scalable platforms for precise, multiplex genome editing in
              mammalian systems.
            </p>
          </article>
          <article className="project-card">
            <h3 className="project-title">Functional genomics at scale</h3>
            <p className="project-body">
              High-throughput perturbation and readout to map gene function in
              development and disease.
            </p>
          </article>
          <article className="project-card">
            <h3 className="project-title">Computational design</h3>
            <p className="project-body">
              Machine learning models to predict and design regulatory elements and
              genetic circuits.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

