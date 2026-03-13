import '../App.css'

const highlightSrc = import.meta.env.BASE_URL + 'home-lab-highlight.png'
const underlineSrc = import.meta.env.BASE_URL + 'home-name-underline.svg'

function HomeAbout() {
  return (
    <section className="page-section page-section--home-about">
      <div className="page-section-inner home-about-layout">
        <div className="home-about-left">
          <div className="home-about-text">
            <p>
              Dr. Liu’s research lab develops computational methods, tools, and resources
              for understanding the human genome and diseases such as diabetes. Recently,
              the methodology focuses are knowledge graphs and foundation models. We have
              developed a knowledge graph <span className="home-link">GenomicKB</span> to
              accumulate human-readable knowledge about the human genome. We have extracted
              genomic knowledge from PubMed and developed another knowledge graph{' '}
              <span className="home-link">GLKB</span>. We have also developed a genomic
              foundation model <span className="home-link">EPCOT</span> which
              comprehensively predicts multiple genomic modalities.
            </p>
            <p>
              The lab currently participates in several NIH consortia, including 4DN, IGVF,
              HIRN, CFDE, and the recent <span className="home-link">PanKbase</span>{' '}
              program. In particular, Dr. Liu co-leads the Machine Learning Focus Group at
              IGVF, co-leads the Data/Metadata Working Group at PanKbase, and leads the
              development of PanKgraph, the knowledge graph within the PanKbase system.
            </p>
          </div>

          <div className="home-about-bottom-row">
            <div className="home-about-research">
              <div className="home-research-label">
                <span className="home-research-icon" />
                <span>Research Areas</span>
              </div>
              <div className="home-research-tags">
                <span className="home-tag">Knowledge Graphs</span>
                <span className="home-tag home-tag--highlight">Multimodal AI</span>
                <span className="home-tag">Computational Genomics</span>
                <span className="home-tag">Machine Learning</span>
                <span className="home-tag">Biomedical Applications</span>
              </div>
            </div>

            <div className="home-about-highlights-column">
              <div className="home-about-highlights">
                <div className="home-about-highlights-header">
                  <span className="home-about-highlights-icon" />
                  <span>Lab Highlights</span>
                </div>
                <div className="home-about-highlights-card">
                  <img
                    src={highlightSrc}
                    alt="Lab highlight"
                    className="home-about-highlights-image"
                  />
                  <div className="home-about-highlights-nav">
                    <button type="button" className="home-about-highlights-nav-btn">
                      ‹
                    </button>
                    <button type="button" className="home-about-highlights-nav-btn">
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="home-about-aside">
          <div className="home-about-avatar-wrapper">
            <div className="home-about-avatar" />
          </div>
          <div className="home-about-name">
            <h2>Jie Liu</h2>
            <img
              src={underlineSrc}
              alt=""
              className="home-about-name-underline"
            />
          </div>
          <div className="home-about-links">
            <button type="button" className="home-about-links-icon" aria-label="Google Scholar">
              <span className="sr-only">Google Scholar</span>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 11L12 4L20 11L12 14L4 11Z"
                  fill="currentColor"
                  fillOpacity="0.85"
                />
                <rect
                  x="7"
                  y="13"
                  width="10"
                  height="6"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button type="button" className="home-about-links-icon" aria-label="GitHub">
              <span className="sr-only">GitHub</span>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
                <path
                  d="M10 16.5C8.3 17 8.3 15.7 7.5 15.5M14 16.5C15.7 17 15.7 15.7 16.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <circle cx="9.5" cy="11" r="0.9" fill="currentColor" />
                <circle cx="14.5" cy="11" r="0.9" fill="currentColor" />
              </svg>
            </button>
            <button type="button" className="home-about-links-icon" aria-label="Email">
              <span className="sr-only">Email</span>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="12"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M5 7.5L11.4 12.2C11.76 12.48 12.24 12.48 12.6 12.2L19 7.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button type="button" className="home-about-links-btn" aria-label="Curriculum Vitae">
              CV
            </button>
          </div>
          <div className="home-about-title">
            <p>Associate Professor</p>
            <p>University of Michigan, Ann Arbor</p>
          </div>
          <p className="home-about-affiliation">
            Computational Medicine and Bioinformatics, Medical School
            <br />
            Electrical Engineering and Computer Science, College of Engineering
          </p>
        </aside>
      </div>
    </section>
  )
}

export default HomeAbout

