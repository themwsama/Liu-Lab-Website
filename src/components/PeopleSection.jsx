import '../App.css'

function PeopleSection() {
  return (
    <section id="people" className="page-section page-section--people">
      <div className="page-section-inner">
        <header className="section-header">
          <h2 className="section-title">People</h2>
          <p className="section-subtitle">
            A collaborative, interdisciplinary team of scientists and engineers.
          </p>
        </header>
        <div className="people-grid">
          <article className="person-card">
            <div className="person-avatar" />
            <h3 className="person-name">Jie Liu, PhD</h3>
            <p className="person-role">Principal Investigator</p>
            <p className="person-body">
              Leads the lab&apos;s work at the intersection of computational genomics,
              machine learning, and biomedical applications.
            </p>
          </article>
          <article className="person-card">
            <div className="person-avatar" />
            <h3 className="person-name">Graduate Students</h3>
            <p className="person-role">Researchers</p>
            <p className="person-body">
              Driving projects in large-scale data integration, model development, and
              interpretation.
            </p>
          </article>
          <article className="person-card">
            <div className="person-avatar" />
            <h3 className="person-name">Postdoctoral Fellows</h3>
            <p className="person-role">Scientists</p>
            <p className="person-body">
              Exploring new directions in genomic foundation models and translational
              applications.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PeopleSection

