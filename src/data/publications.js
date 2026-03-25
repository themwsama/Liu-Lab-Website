import { assetUrl } from '../lib/assetUrl.js'

/** Publication cards (compact home view uses the first three). */
export const PUBLICATIONS = [
  {
    id: 'ophthal-2024',
    title:
      'Liquid biopsy for proliferative diabetic retinopathy: single-cell transcriptomics of human vitreous reveals inflammatory T cell signature',
    authors:
      'R Haliyur, D Parkinson, F Ma, J Xu, Q Li, Y Huang, L Tsoi, R Bogle, J Liu, J Gudjonsson, R C Rao',
    meta: 'Ophthalmology Science, 10/2024',
    type: 'Ophthalmology Science',
    year: '2024',
    tags: ['DOI', 'PMID'],
    image: assetUrl('Multimodal AI in T1D (MAI - T1D).png'),
  },
  {
    id: 'cntools-2024',
    title:
      'CNTools: A computational toolbox for cellular neighborhood analysis from multiplexed images',
    authors:
      'Y Tao, F Feng, X Luo, C Reihsmann, A Hopkirk, J Cartailler, M Brissova, S Parker, D Saunders, J Liu',
    meta: 'PLoS Computational Biology, 08/2024',
    type: 'PLoS Computational Biology',
    year: '2024',
    tags: ['DOI', 'PMID', 'Code', 'Project'],
    image: assetUrl('Genomic Literature Knowledge Base.png'),
  },
  {
    id: 'cochlea-2024',
    title:
      '3D reconstruction of the mouse cochlea from scRNA-seq data suggests morphogen-based principles in apex-to-base specification',
    authors: 'S Wang, S Chakraborty, Y Fu, M Lee, J Liu, J Waldhaus',
    meta: 'Developmental Cell, 06/2024',
    type: 'Developmental Cell',
    year: '2024',
    tags: ['DOI', 'PMID'],
    image: assetUrl('Genomic Knowledge Graph.png'),
  },
  {
    id: 'inner-ear-2024',
    title:
      'Mapping the developmental potential of mouse inner ear organoids at single-cell resolution',
    authors: 'J Waldhaus*, Linghua Jiang*, L Liu, J Liu, R Duncan',
    meta: 'iScience, 02/2024',
    type: 'iScience',
    year: '2024',
    tags: ['DOI', 'PMID', 'Project'],
    image: assetUrl('Ecor_Cover.jpg'),
  },
]
