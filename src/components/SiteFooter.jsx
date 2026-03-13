import '../App.css'

function SiteFooter() {
  return (
    <footer id="contact" className="page-footer">
      <div className="page-section-inner footer-layout">
        <div className="footer-supported">
          <h2 className="footer-heading">Supported by</h2>
          <div className="footer-logos-row">
            <span className="footer-logo-placeholder">NIH NHGRI</span>
            <span className="footer-logo-placeholder">NIH NIDDK</span>
            <span className="footer-logo-placeholder">MIDAS</span>
            <span className="footer-logo-placeholder">MCubed</span>
            <span className="footer-logo-placeholder">Helmsley</span>
            <span className="footer-logo-placeholder">DOE</span>
          </div>
        </div>

        <div className="footer-contact">
          <h2 className="footer-heading">Contact</h2>
          <div className="footer-contact-lines">
            <div className="footer-contact-line">
              <span className="footer-contact-icon">@</span>
              <span className="footer-contact-text">drjieliu@umich.edu</span>
            </div>
            <div className="footer-contact-line">
              <span className="footer-contact-icon">●</span>
              <span className="footer-contact-text">
                Palmer Commons 2035D, Ann Arbor, MI 48109
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

