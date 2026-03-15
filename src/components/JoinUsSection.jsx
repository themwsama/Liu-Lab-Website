import '../App.css'
import WorkIcon from '@mui/icons-material/Work'

const OPEN_POSITIONS = [
  {
    id: 'ra-ml',
    title: 'Research Assistant – Machine Learning',
    department: 'Department of Electrical Engineering & Computer Science',
    description:
      'Support ongoing ML projects: model training, benchmarking, and code maintenance. Strong Python skills required; experience with PyTorch preferred.',
    tags: [
      { label: 'Part-time · 10–20 hrs/wk', type: 'default' },
      { label: 'Open', type: 'open' },
    ],
  },
  {
    id: 'ra-bio',
    title: 'Research Assistant – Bioinformatics',
    department: 'Department of Computational Medicine & Bioinformatics',
    description:
      'Analyze large-scale genomic and transcriptomic datasets. Experience with R/Python pipelines (STAR, GATK, Seurat) is a plus.',
    tags: [
      { label: 'Part-time · 10–15 hrs/wk', type: 'default' },
      { label: 'Open', type: 'open' },
    ],
  },
]

function JoinUsSection() {
  return (
    <section id="join-us" className="page-section page-section--join-us">
      <div className="join-us-inner">
        <aside className="join-us-sidebar">
          <h2 className="join-us-page-title">Join Us</h2>
        </aside>
        <div className="join-us-main">
          <p className="join-us-intro">
            We are always looking for highly motivated and talented individuals to
            join the Liu Lab. Our research sits at the intersection of machine
            learning, computational biology, and biomedical informatics. If you are
            passionate about making an impact in healthcare through data-driven
            science, we&apos;d love to hear from you.
          </p>

          <div className="join-us-section-header">
            <WorkIcon className="join-us-section-icon" sx={{ fontSize: 24, color: '#333333' }} aria-hidden="true" />
            <h3 className="join-us-section-title">Open Positions</h3>
          </div>

          <div className="join-us-positions-grid">
          {OPEN_POSITIONS.map((job) => (
            <article key={job.id} className="join-us-card">
              <h3 className="join-us-card-title">{job.title}</h3>
              <p className="join-us-card-dept">{job.department}</p>
              <p className="join-us-card-desc">{job.description}</p>
              <div className="join-us-card-tags">
                {job.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={
                      tag.type === 'open'
                        ? 'join-us-tag join-us-tag--open'
                        : 'join-us-tag'
                    }
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <a
                href="mailto:drjieliu@umich.edu?subject=Application"
                className="join-us-apply-btn"
              >
                Apply
              </a>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUsSection
