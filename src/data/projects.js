import { projectImage } from '../lib/assetUrl.js'

/** Shared list for project cards (home) and detail routing */
export const PROJECT_CARDS = [
  {
    id: 'mai-t1d',
    title: 'MAI-T1D',
    description:
      'AI models to examine information like genetics, proteins and changes in individual cells to better map how T1D develops.',
    image: projectImage('Multimodal AI in T1D (MAI - T1D).png'),
    tags: ['Highlight', 'Multimodal AI'],
  },
  {
    id: 'pankbase',
    title: 'Pankbase',
    description:
      'A comprehensive, centralized resource for the study of the human pancreas and diabetes.',
    image: projectImage('Pankbase.png'),
    tags: ['Highlight'],
  },
  {
    id: 'celllink',
    title: 'CellLink',
    description:
      'A novel single-cell multi-omics data integration method that normalizes feature profiles to align scales across datasets.',
    image: projectImage('CellLink_Cover_Figure.png'),
    tags: ['Highlight', 'Computational Genomics'],
  },
  {
    id: 'epcot',
    title: 'EPCOT',
    description:
      'A generalizable framework to comprehensively predict epigenome, chromatin organization, and transcriptome.',
    image: projectImage('Ecor_Cover.jpg'),
    tags: ['Highlight', 'Computational Genomics'],
  },
  {
    id: 'project-5',
    title: 'Genomic Knowledge Graph',
    description:
      'A graph database for human genome, epigenome, transcriptome, and 4D nucleome.',
    image: projectImage('Genomic Knowledge Graph.png'),
    tags: ['Highlight', 'Knowledge Graphs'],
  },
  {
    id: 'project-6',
    title: 'Genomic Literature Knowledge Base',
    description:
      'A comprehensive resource that integrates over 263 million biomedical terms and 14.6 million biomedical relationships.',
    image: projectImage('genomicliterature.png'),
    tags: ['Highlight', 'Knowledge Graphs'],
  },
]

export function getProjectById(id) {
  return PROJECT_CARDS.find((p) => p.id === id) ?? null
}
