import '../App.css'

const publications = [
  {
    id: 'ophthal-2024',
    title:
      'Liquid biopsy for proliferative diabetic retinopathy: single-cell transcriptomics of human vitreous reveals inflammatory T cell signature',
    authors:
      'R Haliyur, D Parkinson, F Ma, J Xu, Q Li, Y Huang, L Tsoi, R Bogle, J Liu, J Gudjonsson, R C Rao',
    meta: 'Ophthalmology Science, 10/2024',
    image: import.meta.env.BASE_URL + 'Multimodal AI in T1D (MAI - T1D).png',
  },
  {
    id: 'cntools-2024',
    title:
      'CNTools: A computational toolbox for cellular neighborhood analysis from multiplexed images',
    authors:
      'Y Tao, F Feng, X Luo, C Reihsmann, A Hopkirk, J Cartailler, M Brissova, S Parker, D Saunders, J Liu',
    meta: 'PLoS Computational Biology, 08/2024',
    image: import.meta.env.BASE_URL + 'Genomic Literature Knowledge Base.png',
  },
  {
    id: 'cochlea-2024',
    title:
      '3D reconstruction of the mouse cochlea from scRNA-seq data suggests morphogen-based principles in apex-to-base specification',
    authors: 'S Wang, S Chakraborty, Y Fu, M Lee, J Liu, J Waldhaus',
    meta: 'Developmental Cell, 06/2024',
    image: import.meta.env.BASE_URL + 'Genomic Knowledge Graph.png',
  },
  {
    id: 'inner-ear-2024',
    title:
      'Mapping the developmental potential of mouse inner ear organoids at single-cell resolution',
    authors: 'J Waldhaus*, Linghua Jiang*, L Liu, J Liu, R Duncan',
    meta: 'iScience, 02/2024',
    image: import.meta.env.BASE_URL + 'Ecor_Cover.jpg',
  },
] // In future we can append more items for the full page

function PublicationsSection({ variant = 'compact', onSeeMore }) {
  const showSeeMore = variant === 'compact' && typeof onSeeMore === 'function'
  const itemsToRender =
    variant === 'compact' ? publications.slice(0, 3) : publications
  return (
    <section
      id="publications"
      className="page-section page-section--publications"
    >
      <div className="page-section-inner pub-layout">
        <aside className="pub-sidebar">
          <h2 className="pub-title-heading">Publications</h2>
        </aside>

        <div className="pub-main">
          <h2 className="pub-title-heading pub-title-heading--mobile">Publications</h2>
          <div className="pub-list-and-cta">
            <div className="pub-list">
              {itemsToRender.map((pub) => (
                <article key={pub.id} className="pub-card">
                  <div className="pub-card-content">
                    <h3 className="pub-card-title pub-card-title--desktop">{pub.title}</h3>
                    <div className="pub-mobile-bottom">
                      <h3 className="pub-card-title pub-card-title--mobile">{pub.title}</h3>
                      <div className="pub-mobile-thumb" aria-hidden="true">
                        <img
                          src={pub.image}
                          alt=""
                          loading="lazy"
                          sizes="73px"
                          className="pub-mobile-thumb-img"
                        />
                      </div>
                    </div>
                    <p className="pub-card-authors">{pub.authors}</p>
                    <div className="pub-card-meta-row">
                      <span className="pub-card-meta-text">{pub.meta}</span>
                      <button type="button" className="pub-pill">
                        DOI
                      </button>
                      <button type="button" className="pub-pill">
                        PMID
                      </button>
                    </div>
                  </div>
                  <div className="pub-card-image-wrapper">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      loading="lazy"
                      sizes="(max-width: 900px) 100vw, 269px"
                      className="pub-card-image"
                    />
                  </div>
                </article>
              ))}
            </div>

            {showSeeMore && (
              <div className="pub-see-more-column">
                <button
                  type="button"
                  className="pub-see-more-btn"
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

export default PublicationsSection

