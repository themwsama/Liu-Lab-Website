import { newsImage, publicationImage } from '../lib/assetUrl.js'

/**
 * Publication cards — order and copy from Figma node 1-9762.
 * Compact home shows the first four.
 */
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
    tags: ['DOI'],
    image: publicationImage('liquidbiopsy.png'),
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
    tags: ['DOI'],
    image: newsImage('plos CB.png'),
  },
  {
    id: 'cochlea-2024',
    title:
      '3D reconstruction of the mouse cochlea from scRNA-seq data suggests morphogen-based principles in apex-to-base specification',
    authors: 'S Wang, S Chakraborty, Y Fu, M Lee, J Liu, J Waldhaus',
    meta: 'Developmental Cell, 06/2024',
    type: 'Developmental Cell',
    year: '2024',
    tags: ['DOI'],
    image: newsImage('developmentalcell.png'),
  },
  {
    id: 'inner-ear-2024',
    title:
      'Mapping the developmental potential of mouse inner ear organoids at single-cell resolution',
    authors: 'J Waldhaus*, Linghua Jiang*, L Liu, J Liu, R Duncan',
    meta: 'iScience, 02/2024',
    type: 'iScience',
    year: '2024',
    tags: ['DOI'],
    image: publicationImage('mouseinnerear.png'),
  },
  {
    id: 't2d-nature-2023',
    title:
      'Genetic risk converges on regulatory networks mediating early type 2 diabetes',
    authors:
      'J Walker, D Saunders, V Rai, H Chen, P Orchard, C Dai, Y Pettway, A Hopkirk, C Reihsmann, Y Tao, S Fan, S Shrestha, A Varshney, LE. Petty, J Wright, C Ventresca, S Agarwala, R Aramandla, G Poffenberger, R Jenkins, S Mei, N Hart, S Phillips, H Kang, D Greiner, L Shultz, R Bottino, J Liu, J Below, The HPAP Consortium, S Parker, A Powers, M Brissova',
    meta: 'Nature, 12/2023',
    type: 'Nature',
    year: '2023',
    tags: ['DOI'],
    image: publicationImage('geneticrisk.png'),
  },
  {
    id: 'epcot-nar-2023',
    title:
      'A generalizable framework to comprehensively predict epigenome, chromatin organization, and transcriptome',
    authors: 'Z Zhang, F Fang, Y Qiu, J Liu',
    meta: 'Nucleic Acids Research, 05/2023',
    type: 'Nucleic Acids Research',
    year: '2023',
    tags: ['DOI', 'Code', 'Project', 'Web Portal'],
    image: publicationImage('generalizableframework.png'),
  },
  {
    id: 'genomickb-nar-2022',
    title: 'GenomicKB: a knowledge graph for the human genome',
    authors: 'F Feng, F Tang, Y Gao, D Zhu, T Li, S Yang, Y Yao, Y Huang, J Liu',
    meta: 'Nucleic Acids Research, 11/2022',
    type: 'Nucleic Acids Research',
    year: '2022',
    tags: ['DOI', 'Project', 'Web Portal'],
    image: publicationImage('humangenome.png'),
  },
  {
    id: 'nucleomap-plos-2022',
    title:
      'NucleoMap: a computational tool for identifying nucleosomes in ultra-high resolution contact maps',
    authors: 'Y Huang, B Wang, J Liu',
    meta: 'PLoS Computational Biology, 07/2022',
    type: 'PLoS Computational Biology',
    year: '2022',
    tags: ['DOI', 'Code', 'Project'],
    image: newsImage('plos CB.png'),
  },
  {
    id: 'graph-plos-2022',
    title:
      'Characterizing collaborative transcription regulation with a graph-based deep learning approach',
    authors: 'Z Zhang, F Feng, J Liu',
    meta: 'PLoS Computational Biology, 06/2022',
    type: 'PLoS Computational Biology',
    year: '2022',
    tags: ['DOI', 'Code', 'Project'],
    image: newsImage('plos CB.png'),
  },
  {
    id: 'chromatin-natcomm-2022',
    title:
      'Connecting high-resolution 3D chromatin organization with epigenomics',
    authors: 'F Feng, Y Yao, D Wang, X Zhang, J Liu',
    meta: 'Nature Communications, 04/2022',
    type: 'Nature Communications',
    year: '2022',
    tags: ['DOI', 'Code', 'Project', 'Dataset', 'Web Portal'],
    image: publicationImage('naturcommunications.png'),
  },
  {
    id: 'p53-stemcell-2021',
    title:
      'p53 inactivation unmasks histone methylation-independent and cytoplasmic-dependent WDR5 functions that drive self-renewal and differentiation of pluripotent stem cells',
    authors:
      'Q Li, Y Huang, J Xu, F Mao, B Zhou, L Sun, B Basinski, M Aksu, J Liu, Y Dou, R Rao',
    meta: 'Stem Cell Reports, 11/2021',
    type: 'Stem Cell Reports',
    year: '2021',
    tags: ['DOI'],
    image: publicationImage('p53inactivation.png'),
  },
  {
    id: 'betaglobin-elife-2021',
    title:
      '3′HS1 CTCF binding site in human β-globin locus regulates fetal hemoglobin expression',
    authors:
      'P Himadewi, X Wang, F Feng, H Gore, Y Liu, L Yu, R Kurita, Y Nakamura, G Pfeifer, J Liu, X Zhang',
    meta: 'eLife, 09/2021',
    type: 'eLife',
    year: '2021',
    tags: ['DOI'],
    image: publicationImage('bindingsite.png'),
  },
  {
    id: 'schictools-plos-2021',
    title: 'scHiCTools: a computational toolbox for analyzing single-cell Hi-C data',
    authors: 'X Li, F Feng, H Pu, W Leung, J Liu',
    meta: 'PLoS Computational Biology, 05/2021',
    type: 'PLoS Computational Biology',
    year: '2021',
    tags: ['DOI', 'Code', 'Project'],
    image: newsImage('plos CB.png'),
  },
  {
    id: 'haircell-gr-2021',
    title:
      'Mapping the regulatory landscape of auditory hair cells from single-cell multi-omics data',
    authors: 'S Wang, M P. Lee, S Jones, J Liu, J Waldhaus',
    meta: 'Genome Research, 04/2021',
    type: 'Genome Research',
    year: '2021',
    tags: ['DOI'],
    image: publicationImage('haircells.png'),
  },
  {
    id: 'topic-plos-2020',
    title:
      'Capturing cell type-specific chromatin structural patterns by applying topic modeling to single-cell Hi-C data',
    authors:
      'H Kim, G Yardımcı, G Bonora, V Ramani, J Liu, R Qiu, C Lee, J Hesson, C Ware, J Shendure, Z Duan, W Noble',
    meta: 'PLoS Computational Biology, 11/2020',
    type: 'PLoS Computational Biology',
    year: '2020',
    tags: ['DOI', 'Project'],
    image: newsImage('plos CB.png'),
  },
  {
    id: 'wabi-2019',
    title: 'Jointly embedding multiple single-cell omics measurements. WABI.',
    authors: 'J Liu, Y Huang, R Singh, J Vert, W Noble',
    meta: 'The Workshop on Algorithms in Bioinformatics, 06/2019',
    type: 'WABI',
    year: '2019',
    tags: ['DOI', 'Code', 'Project'],
    image: publicationImage('wabi.png'),
  },
]
