import '../App.css'

const newsItems = [
  {
    id: '2025-10-16',
    date: '10/16/2025',
    title:
      'A New Collaborative to Better Predict, Prevent, and Treat Type 1 Diabetes (T1D)',
    tag: 'Lab Milestone',
    image: import.meta.env.BASE_URL + 'Multimodal AI in T1D (MAI - T1D).png',
    featured: true,
  },
  {
    id: '2025-01-16',
    date: '01/16/2025',
    title:
      'Yiqun Wang, PhD candidate: Giving back to the biomedical field through research',
    tag: 'Talks & Events',
    image: import.meta.env.BASE_URL + 'Genomic Literature Knowledge Base.png',
    featured: true,
  },
  {
    id: '2024-10-30',
    date: '10/30/2024',
    title:
      'Dr. Liu presented “Building knowledge graphs towards transparent biomedical AI” at NIH/NIDDK AI in Precision Medicine Workshop',
    tag: 'Talks & Events',
    image: import.meta.env.BASE_URL + 'Genomic Knowledge Graph.png',
    featured: false,
  },
  {
    id: '2024-08-28',
    date: '08/28/2024',
    title: "Yicheng Tao's CNTools work was published on PLoS CB",
    tag: 'Publication',
    image: import.meta.env.BASE_URL + 'Ecor_Cover.jpg',
    featured: true,
  },
]

function NewsSection() {
  return (
    <section id="news" className="page-section page-section--news">
      <div className="page-section-inner news-layout">
        <aside className="news-sidebar">
          <h2 className="news-title-heading">News</h2>
        </aside>

        <div className="news-main">
          <div className="news-timeline">
            <div className="news-timeline-line" />
            {newsItems.map((item, index) => (
              <div key={item.id} className="news-row">
                <div className="news-date-column">
                  <div className="news-date-dot" />
                  <span className="news-date-text">{item.date}</span>
                </div>

                <article className="news-card">
                  <div className="news-card-content">
                    {item.featured && (
                      <div className="news-card-star" aria-hidden="true">
                        ★
                      </div>
                    )}
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-tag">{item.tag}</div>
                  </div>
                  <div className="news-card-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="news-card-image"
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="news-see-more-row">
            <button type="button" className="news-see-more-btn">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection

