import '../App.css'

const highlightSrc = import.meta.env.BASE_URL + 'home-lab-highlight.png'
const underlineSrc = import.meta.env.BASE_URL + 'home-name-underline.svg'
const socialLogos = {
  google: import.meta.env.BASE_URL + 'socialLogos/google.svg',
  git: import.meta.env.BASE_URL + 'socialLogos/git.svg',
  email: import.meta.env.BASE_URL + 'socialLogos/email.svg',
  cv: import.meta.env.BASE_URL + 'socialLogos/cv.svg',
}

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
              <img src={socialLogos.google} alt="" className="home-about-links-img" />
            </button>
            <button type="button" className="home-about-links-icon" aria-label="GitHub">
              <span className="sr-only">GitHub</span>
              <img src={socialLogos.git} alt="" className="home-about-links-img" />
            </button>
            <button type="button" className="home-about-links-icon" aria-label="Email">
              <span className="sr-only">Email</span>
              <img src={socialLogos.email} alt="" className="home-about-links-img" />
            </button>
            <button type="button" className="home-about-links-btn home-about-links-btn--icon" aria-label="Curriculum Vitae">
              <img src={socialLogos.cv} alt="CV" className="home-about-links-img" />
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

