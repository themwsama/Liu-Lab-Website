import '../App.css'

function HomeHero() {
  return (
    <section id="home" className="page-section page-section--home">
      <div className="home-frame">
        <div className="home-bg-image" aria-hidden="true" />
        <div className="home-title-wrapper">
          <h1 className="home-title">Liu Lab</h1>
          <p className="home-subtitle">AI for Medical Disease</p>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

