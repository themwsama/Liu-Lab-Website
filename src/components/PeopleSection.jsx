import { useState } from 'react'
import '../App.css'

function PersonCardImage({ src, alt }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="people-card-image people-card-image--placeholder" aria-hidden>
        <span className="people-card-image-initials">{alt || '?'}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt=""
      className="people-card-image"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

const BASE = import.meta.env.BASE_URL
const P = (path) => BASE + 'PeoplePictures/' + encodeURIComponent(path)
const SOCIAL = {
  git: BASE + 'socialLogos/git.svg',
  google: BASE + 'socialLogos/google.svg',
  email: BASE + 'socialLogos/email.svg',
  cv: BASE + 'socialLogos/cv.svg',
}

const PEOPLE = [
  {
    category: 'pi',
    name: 'Jie Liu',
    role: 'Associate Professor',
    image: P('home-jie-liu.png'),
  },
  {
    category: 'staff',
    name: 'Kai Liu',
    role: 'M.S. Design / \nM.S. Information Science \nLab Manager / Lab Specialist Senior',
    image: P('kai 2.png'),
  },
  {
    category: 'staff',
    name: 'Yuanhao Huang',
    role: 'Ph.D.\nResearch Scientist',
    image: P('yuanhao.png'),
  },
  {
    category: 'staff',
    name: 'Zhiyuan Liu',
    role: 'M.S. Information Science \nApp System Analyst',
    image: P('zhiyuan.png'),
  },
  {
    category: 'phd',
    name: 'Sean Moran',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('sean.png'),
  },
  {
    category: 'phd',
    name: 'Linghua Jiang',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('linghua.png'),
  },
  {
    category: 'phd',
    name: 'Xin Luo',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('xinluo.png'),
  },
  {
    category: 'phd',
    name: 'Yicheng Tao',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('avatar_huf67967196b1e43db3733fb9cb1dfed9f_102737_270x270_fill_lanczos_center_2 2.png'),
  },
  {
    category: 'phd',
    name: 'Zheyu Zhang',
    role: 'The Computer Science and Engineering Division',
    image: P('avatar_huf67967196b1e43db3733fb9cb1dfed9f_102737_270x270_fill_lanczos_center_2 5.png'),
  },
  {
    category: 'phd',
    name: 'Yiqun Wang',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('yiqun.png'),
  },
  {
    category: 'phd',
    name: 'Lingxiao Guan',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('lingxiao.png'),
  },
  {
    category: 'phd',
    name: 'Xinyu Bao',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('xinyubao.png'),
  },
  {
    category: 'phd',
    name: 'Zhaowei Han',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('zhaoweiHan.png'),
  },
  {
    category: 'phd',
    name: 'Runbo Mao',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('runbo.png'),
  },
  {
    category: 'ra',
    name: 'Shriramu Ramesh',
    role: 'Department of Computer Science, School of Engineering',
    image: P('Shriramu Ramesh 1.png'),
  },
  {
    category: 'ra',
    name: 'Zion Muhammud',
    role: 'Department of Biomedical Engineering',
    image: P('zionmuhammud.png'),
  },
  {
    category: 'ra',
    name: 'Kevin Chang',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('kevin_headshot - Kevin Chang 1.png'),
  },
  {
    category: 'ra',
    name: 'Bing Han',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('unnamed - Bing Han 1.png'),
  },
  {
    category: 'ra',
    name: 'Jiayin (Alena) Zheng',
    role: 'Department of Biostatistics, School of Public Health',
    image: P('Alena_Zheng - Alena Zheng 1.png'),
  },
  {
    category: 'ra',
    name: 'Zhichen (Tom) Yang',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('linkedin photo - Zhichen Yang 1.png'),
  },
  {
    category: 'ra',
    name: 'Johnny In',
    role: 'Department of Mathematics and Statistics',
    image: P('johnny.jpeg'),
  },
  {
    category: 'ra',
    name: 'Luya Zhang',
    role: 'School of Information',
    image: P('profile photo - Luya Zhang 1.png'),
  },
  {
    category: 'ra',
    name: 'Kai Sheng',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('Kai Sheng 1.png'),
  },
  {
    category: 'ra',
    name: 'Siyuan Li',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('Siyuan Li 1.png'),
  },
  {
    category: 'ra',
    name: 'Jianing Wei',
    role: 'School of Information',
    image: P('Jianing Wei.png'),
  },
  {
    category: 'ra',
    name: 'Jing Yin',
    role: 'The Computer Science and Engineering Division',
    image: P('Jing Yin 1.png'),
  },
  {
    category: 'ra',
    name: 'Jun Li',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('Jun Li 1.png'),
  },
  {
    category: 'ra',
    name: 'Sriram Malarvizhi Kumaran',
    role: 'Department of Computer Science, School of Engineering',
    image: P('Sriram Malarvizhi Kumaran 1.png'),
  },
  {
    category: 'ra',
    name: 'Yuhan Wen',
    role: 'Department of Biomedical Engineering',
    image: P('Yuhan Wen 1.png'),
  },
  {
    category: 'ra',
    name: 'Kaixuan Jin',
    role: 'Department of Computational Medicine & Bioinformatics',
    image: P('Kaixuan Jin 1.png'),
  },
  {
    category: 'ra',
    name: 'Yuqian (Alex) Xu',
    role: 'Department of Electrical Engineering and Computer Science',
    image: P('Yuqian (Alex) Xu 1.png'),
  },
  {
    category: 'ra',
    name: 'Haoxuan Zeng',
    role: 'Department of Biomedical Engineering',
    image: P('haoxuan.png'),
  },
]

const SECTIONS = [
  { id: 'pi', title: 'Principal Investigator', icon: 'pi' },
  { id: 'staff', title: 'Staff', icon: 'staff' },
  { id: 'phd', title: 'Ph.D. Candidate', icon: 'phd' },
  { id: 'ra', title: 'Research Assistant', icon: 'ra' },
]

/* Alumni (Figma 1-10335): Ph.D. with photos, Research Assistant text-only */
const ALUMNI_PHD = [
  { name: 'Shuzhe Wang', role: 'Staff Scientist at MGH', image: P('shuzhe.png') },
  { name: 'Fan Feng', role: 'Research Fellow at Vanderbilt University', image: P('fanfeng.png') },
  { name: 'Zhenhao Zhang', role: 'Department of Computational Medicine & Bioinformatics', image: P('zhenhao.png') },
]

const ALUMNI_RA = [
  { name: 'Haohong Shang', role: 'Machine Learning Engineer\nDepartment of Electrical Engineering and Computer Science' },
  { name: 'Xuteng Luo', role: 'Fullstack Engineer\nDepartment of Electrical Engineering and Computer Science' },
  { name: 'Tiancheng Jiao', role: 'Fullstack Engineer\nDepartment of Electrical Engineering and Computer Science' },
  { name: 'Yijun Pan', role: 'Machine Learning Engineer\nDepartment of Electrical Engineering and Computer Science' },
]

function PeopleIcon() {
  return (
    <svg width="24" height="24" className="people-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PersonCard({ name, role, image }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  return (
    <article className="people-card">
      <div className="people-card-image-wrap">
        <PersonCardImage src={image} alt={initials} />
      </div>
      <div className="people-card-body">
        <h3 className="people-card-name">{name}</h3>
        <p className="people-card-role">{role}</p>
        <div className="people-card-links">
          <a href="#scholar" aria-label="Google Scholar"><img src={SOCIAL.google} alt="" /></a>
          <a href="#github" aria-label="GitHub"><img src={SOCIAL.git} alt="" /></a>
          <a href="#email" aria-label="Email"><img src={SOCIAL.email} alt="" /></a>
          <button type="button" aria-label="CV"><img src={SOCIAL.cv} alt="" /></button>
        </div>
      </div>
    </article>
  )
}

function AlumniTextCard({ name, role }) {
  return (
    <article className="people-alumni-text-card">
      <h3 className="people-card-name">{name}</h3>
      <p className="people-card-role">{role}</p>
    </article>
  )
}

function PeopleSection() {
  const [subNav, setSubNav] = useState('current')

  return (
    <section id="people" className="page-section page-section--people">
      <div className="people-page-layout">
        <aside className="people-sidebar">
          <h2 className="people-page-title">People</h2>
          <nav className="people-subnav" aria-label="People sub-navigation">
            <button
              type="button"
              className={`people-subnav-link ${subNav === 'current' ? 'people-subnav-link--active' : ''}`}
              onClick={() => setSubNav('current')}
            >
              Current
            </button>
            <button
              type="button"
              className={`people-subnav-link ${subNav === 'alumni' ? 'people-subnav-link--active' : ''}`}
              onClick={() => setSubNav('alumni')}
            >
              Alumni
            </button>
            <button
              type="button"
              className={`people-subnav-link ${subNav === 'outreach' ? 'people-subnav-link--active' : ''}`}
              onClick={() => setSubNav('outreach')}
            >
              Outreach
            </button>
          </nav>
        </aside>

        <div className="people-main">
          {subNav === 'alumni' && (
            <>
              <div className="people-section">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Ph.D.</h3>
                </div>
                <div className="people-cards-grid">
                  {ALUMNI_PHD.map((person) => (
                    <PersonCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      image={person.image}
                    />
                  ))}
                </div>
              </div>
              <div className="people-section">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Research Assistant</h3>
                </div>
                <div className="people-cards-grid">
                  {ALUMNI_RA.map((person) => (
                    <AlumniTextCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {subNav === 'outreach' && (
            <p className="people-placeholder">Content for outreach coming soon.</p>
          )}

          {subNav === 'current' && (
            <div className="people-profiles-frame">
              <div className="people-top">
                <div className="people-top-left">
                  <div className="people-section-header">
                    <PeopleIcon />
                    <h3 className="people-section-title">Principal Investigator</h3>
                  </div>
                  <div className="people-cards-grid">
                    {PEOPLE.filter((p) => p.category === 'pi').map((person) => (
                      <PersonCard
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        image={person.image}
                      />
                    ))}
                  </div>
                </div>
                <div className="people-top-right">
                  <div className="people-section-header">
                    <PeopleIcon />
                    <h3 className="people-section-title">Staff</h3>
                  </div>
                  <div className="people-cards-grid people-cards-grid--staff">
                    {PEOPLE.filter((p) => p.category === 'staff').map((person) => (
                      <PersonCard
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        image={person.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="people-middle">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Ph.D. Candidate</h3>
                </div>
                <div className="people-cards-grid">
                  {PEOPLE.filter((p) => p.category === 'phd').map((person) => (
                    <PersonCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      image={person.image}
                    />
                  ))}
                </div>
              </div>
              <div className="people-bottom">
                <div className="people-section-header">
                  <PeopleIcon />
                  <h3 className="people-section-title">Research Assistant</h3>
                </div>
                <div className="people-cards-grid">
                  {PEOPLE.filter((p) => p.category === 'ra').map((person) => (
                    <PersonCard
                      key={person.name}
                      name={person.name}
                      role={person.role}
                      image={person.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PeopleSection
