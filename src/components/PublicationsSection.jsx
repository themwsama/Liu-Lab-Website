import '../App.css'

function PublicationsSection() {
  return (
    <section
      id="publications"
      className="page-section page-section--publications"
    >
      <div className="page-section-inner">
        <header className="section-header">
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">Selected recent work from the lab.</p>
        </header>
        <div className="pub-list">
          <article className="pub-item">
            <p className="pub-title">
              Title of a recent paper about large-scale genome engineering.
            </p>
            <p className="pub-meta">Liu M. et al. · Journal Name · 2025</p>
          </article>
          <article className="pub-item">
            <p className="pub-title">
              A study on functional genomics and disease mechanisms.
            </p>
            <p className="pub-meta">Liu M. et al. · Journal Name · 2024</p>
          </article>
          <article className="pub-item">
            <p className="pub-title">
              Computational models for regulatory element design.
            </p>
            <p className="pub-meta">Liu M. et al. · Journal Name · 2023</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PublicationsSection

