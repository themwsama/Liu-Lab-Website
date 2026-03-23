import '../App.css'

function SiteFooter() {
  return (
    <footer id="contact" className="page-footer">
      <div className="page-section-inner footer-layout">
        {/* Figma 1-9872: same label column + shared content column for Supported by & Contact */}
        <div className="footer-row">
          <h2 className="footer-heading">Supported by</h2>
          <div className="footer-logos">
            <div className="footer-logos-row">
              <img src={import.meta.env.BASE_URL + 'logos/1-png 2.png'} alt="National Human Genome Research Institute" className="footer-logo" loading="lazy" />
              <img src={import.meta.env.BASE_URL + 'logos/2-png 1.png'} alt="NIH Common Fund" className="footer-logo" loading="lazy" />
              <img src={import.meta.env.BASE_URL + 'logos/3-png 1.png'} alt="NIH NIDDK" className="footer-logo" loading="lazy" />
            </div>
            <div className="footer-logos-row">
              <img src={import.meta.env.BASE_URL + 'logos/4-png 1.png'} alt="MIDAS" className="footer-logo" loading="lazy" />
              <img src={import.meta.env.BASE_URL + 'logos/5-png 1.png'} alt="MCubed" className="footer-logo" loading="lazy" />
              <img src={import.meta.env.BASE_URL + 'logos/6-png 2.png'} alt="Helmsley Charitable Trust" className="footer-logo" loading="lazy" />
              <img src={import.meta.env.BASE_URL + 'logos/7-png 1.png'} alt="U.S. Department of Energy" className="footer-logo" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="footer-row">
          <h2 className="footer-heading">Contact</h2>
          <div className="footer-contact-lines">
            <div className="footer-contact-line footer-contact-line--email">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <span className="footer-contact-text">drjieliu@umich.edu</span>
            </div>
            <div className="footer-contact-line footer-contact-line--address">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="footer-contact-text">
                NCRC Bldg 520, Room 3212, 1600 Huron Parkway, Ann Arbor, MI 48109
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2026 – 2030 Liu Lab. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter

