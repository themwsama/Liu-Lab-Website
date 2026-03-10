import '../App.css'

function NewsSection() {
  return (
    <section id="news" className="page-section page-section--news">
      <div className="page-section-inner">
        <header className="section-header">
          <h2 className="section-title">News</h2>
          <p className="section-subtitle">
            Recent updates from the lab, conferences, and publications.
          </p>
        </header>
        <div className="news-list">
          <article className="news-item">
            <h3 className="news-title">EPCOT featured in recent genomics spotlight</h3>
            <p className="news-meta">2025 · Foundation models for regulatory genomics</p>
          </article>
          <article className="news-item">
            <h3 className="news-title">GenomicKB and GLKB released as open resources</h3>
            <p className="news-meta">2024 · Knowledge graphs for human genome interpretation</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default NewsSection

