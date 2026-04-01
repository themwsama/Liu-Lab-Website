import '../App.css'
import { projectImage } from '../lib/assetUrl.js'
import { getProjectById } from '../data/projects.js'

function PankbaseDetail({ onBack }) {
  return (
    <>
      <header className="project-detail-header">
        <h1 className="project-detail-title">Pankbase</h1>
        <p className="project-detail-subtitle">
          A comprehensive, centralized resource for the study of the human pancreas and diabetes
        </p>
        <span className="project-detail-badge">Web Portal</span>
      </header>

      <div className="project-detail-hero project-detail-hero--pankbase">
        <img
          src={projectImage('Pankbase.png')}
          alt=""
          className="project-detail-hero-img"
          loading="eager"
        />
      </div>

      {/* Body copy from Figma node 1-12496 */}
      <section className="project-detail-block" aria-labelledby="pankbase-mission">
        <h2 id="pankbase-mission" className="project-detail-heading">
          Our Mission
        </h2>
        <p className="project-detail-p">
          PanKbase is a comprehensive, centralized resource for the study of the human pancreas and
          diabetes. The PanKbase collective aims to integrate diverse type 1 diabetes (T1D) datasets with
          expert-curated knowledge in a centralized, open-source data hub. Since users will ultimately be
          able to contribute their own data, this will be a repository for reproducible, collaborative
          research within the pancreas and T1D realms.
        </p>
        <p className="project-detail-p">
          PanKbase is an actively evolving resource that plans to offer integrated and computation-ready
          multi-omic data including genomics, epigenomics, transcriptomics, metabolomics, and proteomics,
          as well as other data types such as imaging and physiological data. Datasets are currently
          sourced from key external programs, from which human donor-derived pancreatic data and metadata
          are aggregated, harmonized, and disseminated.
        </p>
      </section>

      <section className="project-detail-block" aria-labelledby="pankbase-resources">
        <h2 id="pankbase-resources" className="project-detail-heading">
          Our Resources
        </h2>
        <p className="project-detail-p">
          PanKbase hosts high-quality reference datasets, interactive state-of-the-art visualizations,
          and tailored experiences for multiple user archetypes. The sophisticated pipelines within
          PanKbase may facilitate basic understanding of diabetes, along with biomarker identification and
          drug development. Importantly, PanKbase offers intuitive, robust workflows for researchers of
          all levels to conduct impactful and reproducible queries. Some of our latest offerings include
          PanKgraph, an Integrated Cell Browser, and extensive donor data and metadata.
        </p>
        <p className="project-detail-p">
          <a
            href="https://pankgraph.org/"
            className="project-detail-link"
            target="_blank"
            rel="noreferrer"
          >
            PanKgraph
          </a>{' '}
          is a state-of-the-art Knowledge Graph developed for the study of the human pancreas. By
          leveraging large language models (LLMs) and diverse data types, PanKgraph enables users to
          uncover biological connections and insights into diabetes pathogenesis. Previously disjointed
          entities such as genes, single nucleotide polymorphisms (SNPs), and pancreatic expression
          quantitative trait loci (eQTLs) can now be explored and connected in innovative ways.
        </p>
        <p className="project-detail-p">
          <a
            href="https://pankbase.org/single-cell.html"
            className="project-detail-link"
            target="_blank"
            rel="noreferrer"
          >
            The Integrated Cell Browser
          </a>{' '}
          features integrated single-cell RNA sequencing (scRNA-seq) and single cell ATAC-seq data from
          human donor-specific pancreatic islet cells. The browser enables detailed interrogation of
          single cell RNA-seq and single cell ATAC-seq data through intuitive visualizations. Within the
          single-cell browser, users can first identify and filter single-cell datasets and dataset
          collections. Users can visualize interactive plots of cell type clusters, gene expression, cell
          type abundance, and marker gene expression. Donors and their data were provided by external
          programs described{' '}
          <a
            href="https://pankbase.org/programs.html"
            className="project-detail-link"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <p className="project-detail-p">
          Human pancreatic donor data and metadata are compiled in a rigorous manner from donors across
          five external programs. Donor data and metadata are standardized to permit cross-resource
          interoperability and discovery.
        </p>
      </section>

      <section className="project-detail-block" aria-labelledby="pankbase-story">
        <h2 id="pankbase-story" className="project-detail-heading">
          Our Story
        </h2>
        <p className="project-detail-p">
          PanKbase began in February 2024 and is being developed by a{' '}
          <a
            href="https://pankbase.org/people.html"
            className="project-detail-link"
            target="_blank"
            rel="noreferrer"
          >
            team
          </a>{' '}
          of scientists and software engineers from the University of California at San Diego, University
          of Michigan, Broad Institute of MIT and Harvard, Vanderbilt University, Stanford University,
          Cornell University, and Jackson Laboratories. PanKbase is funded by the National Institute of
          Diabetes, Digestive and Kidney Diseases (NIDDK), a component of the National Institutes of
          Health, through grants U24DK138515, U24DK138512, and supplemental funds from the NIH Office of
          Data Science Strategies.
        </p>
      </section>

      <section className="project-detail-block" aria-labelledby="pankbase-vision">
        <h2 id="pankbase-vision" className="project-detail-heading">
          Our Vision
        </h2>
        <p className="project-detail-p">
          Current PanKbase site features and tools are under active development and will continue to
          evolve and expand in the future. To support our evolution, PanKbase will engage the community
          to contribute and co-develop to ensure that our resource is useful. We are developing community
          data standards and promoting open-access data dissemination in support of Findable, Accessible,
          Interoperable, and Reusable (FAIR) principles. PanKbase will eventually integrate additional
          pancreatic datasets, enable users to upload their own data, and incorporate reference mapping
          to generate integrated tissue maps. Differential gene expression will be available by cell type
          and/ or condition. Visualizations will be incorporated to view changes in cell types,
          cis-regulatory element expression, and overlapping gene expression in diverse conditions.
          Finally, aggregated UMAPs will be generated for additional data types, including single-cell
          ATAC-seq, single-cell multiomics, and spatial omics, making PanKbase the go-to resource for the
          pancreatic community.
        </p>
        <p className="project-detail-p">
          To ensure the utility and relevance of our resource, we rely on a community of data providers,
          experts, and multidisciplinary users. We welcome collaborations centered around data
          curation, method development, and tool creation for PanKbase. To collaborate, please contact us
          at{' '}
          <a href="mailto:help@pankbase.org" className="project-detail-link">
            help@pankbase.org
          </a>
          .
        </p>
      </section>

      <div className="project-detail-actions">
        <button type="button" className="project-detail-back-btn" onClick={onBack}>
          Back
        </button>
      </div>
    </>
  )
}

function PlaceholderDetail({ project, onBack }) {
  return (
    <>
      <header className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-subtitle">{project.description}</p>
        <div className="project-detail-tags-row">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={index === 0 ? 'project-tag project-tag--primary' : 'project-tag'}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="project-detail-hero project-detail-hero--placeholder">
        <img
          src={project.image}
          alt=""
          className="project-detail-hero-img"
          loading="lazy"
        />
      </div>
      <section className="project-detail-block">
        <p className="project-detail-p project-detail-placeholder">
          Expanded project information for <strong>{project.title}</strong> is coming soon. Check back
          for mission, resources, and updates.
        </p>
      </section>
      <div className="project-detail-actions">
        <button type="button" className="project-detail-back-btn" onClick={onBack}>
          Back
        </button>
      </div>
    </>
  )
}

/**
 * Full detail for Pankbase (Figma body copy 1-12496); placeholders for other projects.
 */
function ProjectDetailSection({ projectId, onBack }) {
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <section className="page-section page-section--project-detail">
        <div className="project-detail-page-layout">
          <aside className="project-detail-sidebar">
            <h2 className="project-detail-sidebar-title">Projects</h2>
          </aside>
          <div className="project-detail-main">
            <p className="project-detail-p">Project not found.</p>
            <div className="project-detail-actions">
              <button type="button" className="project-detail-back-btn" onClick={onBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section page-section--project-detail">
      <div className="project-detail-page-layout">
        <aside className="project-detail-sidebar">
          <h2 className="project-detail-sidebar-title">Projects</h2>
        </aside>
        <div className="project-detail-main">
          {projectId === 'pankbase' ? (
            <PankbaseDetail onBack={onBack} />
          ) : (
            <PlaceholderDetail project={project} onBack={onBack} />
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailSection
