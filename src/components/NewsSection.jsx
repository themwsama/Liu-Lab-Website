import '../App.css'

const BASE = import.meta.env.BASE_URL

const newsItems = [
  {
    id: '2025-10-16',
    date: '10/16/2025',
    title:
      'A New Collaborative to Better Predict, Prevent, and Treat Type 1 Diabetes (T1D)',
    tag: 'Lab Milestones',
    image: BASE + 'Multimodal AI in T1D (MAI - T1D).png',
    featured: true,
  },
  {
    id: '2025-01-16',
    date: '01/16/2025',
    title:
      'Yiqun Wang, PhD candidate: Giving back to the biomedical field through research',
    tag: 'Lab Milestones',
    image: BASE + 'Genomic Literature Knowledge Base.png',
    featured: true,
  },
  {
    id: '2024-10-30',
    date: '10/30/2024',
    title:
      'Dr. Liu presented “Building knowledge graphs towards transparent biomedical AI” at NIH/NIDDK AI in Precision Medicine Workshop',
    tag: 'Talks & Events',
    image: BASE + 'Genomic Knowledge Graph.png',
    featured: false,
  },
  {
    id: '2024-08-28',
    date: '08/28/2024',
    title: "Yicheng Tao's CNTools work was published on PLoS CB",
    tag: 'Publication',
    image: BASE + 'Ecor_Cover.jpg',
    featured: true,
  },
  {
    id: '2024-06-12',
    date: '06/12/2024',
    title: 'The Liu Lab receives new support for multimodal AI in diabetes research',
    tag: 'Lab Milestones',
    image: BASE + 'home-hero.png',
    featured: false,
  },
  {
    id: '2024-04-03',
    date: '04/03/2024',
    title: 'PanKgraph presented at international knowledge graph workshop',
    tag: 'Talks & Events',
    image: BASE + 'Genomic Knowledge Graph.png',
    featured: false,
  },
  {
    id: '2023-11-18',
    date: '11/18/2023',
    title: 'New preprint on genomic foundation model EPCOT released on bioRxiv',
    tag: 'Publication',
    image: BASE + 'Ecor_Cover.jpg',
    featured: false,
  },
  {
    id: '2023-09-02',
    date: '09/02/2023',
    title: 'Liu Lab hosts workshop on transparent biomedical AI at UMich',
    tag: 'Talks & Events',
    image: BASE + 'Multimodal AI in T1D (MAI - T1D).png',
    featured: false,
  },
  {
    id: '2023-05-27',
    date: '05/27/2023',
    title: 'GenomicKB reaches milestone of integrating 100+ genomic data resources',
    tag: 'Lab Milestones',
    image: BASE + 'Genomic Knowledge Graph.png',
    featured: false,
  },
  {
    id: '2022-12-10',
    date: '12/10/2022',
    title: 'Liu Lab members present posters at the annual computational genomics symposium',
    tag: 'Conference',
    image: BASE + 'home-hero.png',
    featured: false,
  },
  {
    id: '2022-07-15',
    date: '07/15/2022',
    title: 'New collaboration launched with clinical partners on single-cell multi-omics',
    tag: 'Collaboration',
    image: BASE + 'Multimodal AI in T1D (MAI - T1D).png',
    featured: false,
  },
  {
    id: '2021-11-01',
    date: '11/01/2021',
    title: 'Liu Lab welcomes new PhD and undergraduate researchers',
    tag: 'Lab News',
    image: BASE + 'home-hero.png',
    featured: false,
  },
]

function NewsSection({ variant = 'compact', onSeeMore }) {
  const showSeeMore = variant === 'compact' && typeof onSeeMore === 'function'
  const itemsToRender =
    variant === 'compact' ? newsItems.slice(0, 4) : newsItems

  return (
    <section id="news" className="page-section page-section--news">
      <div className="page-section-inner news-layout">
        <aside className="news-sidebar">
          <h2 className="news-title-heading">News</h2>
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

