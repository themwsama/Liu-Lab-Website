import '../App.css'

function SiteFooter() {
  return (
    <footer id="contact" className="page-footer">
      <div className="page-section-inner footer-inner">
        <div className="footer-column">
          <h2 className="footer-title">Supported by</h2>
          <p className="footer-body">
            Our work is supported by NIH consortia including 4DN, IGVF, HIRN, CFDE, and
            PanKbase, as well as institutional and collaborative partners.
          </p>
        </div>
        <div className="footer-column">
          <h2 className="footer-title">Contact</h2>
          <p className="footer-body">
            Palmer Commons 2035D, Ann Arbor, MI 48109
            <br />
            drjieliu@umich.edu
          </p>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 – 2030 Liu Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter

