import { newsImage, projectImage } from '../lib/assetUrl.js'

/** Date on the trailing dot beside “See more” on the home News section (Figma). */
export const NEWS_HOME_SEE_MORE_ANCHOR_DATE = '07/26/2024'

/**
 * Full news timeline (newest first). Compact home view uses the first four.
 * Merged from Figma + historical timeline screenshots.
 */
export const NEWS_ITEMS = [
  {
    id: '2025-10-16',
    date: '10/16/2025',
    title:
      'A New Collaborative to Better Predict, Prevent, and Treat Type 1 Diabetes (T1D)',
    tag: 'Lab Milestones',
    image: projectImage('Multimodal AI in T1D (MAI - T1D).png'),
    featured: true,
  },
  {
    id: '2025-01-16',
    date: '01/16/2025',
    title:
      'Yiqun Wang, PhD candidate: Giving back to the biomedical field through research',
    tag: 'Talks & Events',
    image: newsImage('yiqun giving back.png'),
    featured: true,
  },
  {
    id: '2024-10-30',
    date: '10/30/2024',
    title:
      'Dr. Liu presented “Building knowledge graphs towards transparent biomedical AI” at NIH/NIDDK AI in Precision Medicine Workshop',
    tag: 'Talks & Events',
    image: newsImage('nihniddk AI.png'),
    featured: false,
  },
  {
    id: '2024-08-28',
    date: '08/28/2024',
    title: "Yicheng Tao's CNTools work was published on PLoS CB",
    tag: 'Publication',
    image: newsImage('plos CB.png'),
    featured: true,
  },
  {
    id: '2024-07-26',
    date: '07/26/2024',
    title:
      'Dr. Liu received Endowment for the Basic Sciences Teaching Award 2024',
    tag: 'Awards & Honors',
    image: newsImage('basicteachingawardliu.png'),
    featured: true,
  },
  {
    id: '2024-05-17',
    date: '05/17/2024',
    title: 'Five DCMB faculty are promoted, congratulations!',
    tag: 'Lab Milestones',
    image: newsImage('fivedcmbpromoted.png'),
    featured: true,
  },
  {
    id: '2024-04-09',
    date: '04/09/2024',
    title:
      "Former DCMB PhD student Dr. Shuze Wang published in 'Developmental Cell'",
    tag: 'Lab Milestones',
    image: newsImage('developmentalcell.png'),
    featured: true,
  },
  {
    id: '2024-03-25',
    date: '03/25/2024',
    title: 'The Liu Lab is a part of the new NIDDK project PanKbase.',
    tag: 'Lab Milestones',
    image: newsImage('michiganmedicien.png'),
    featured: false,
  },
  {
    id: '2023-12-04',
    date: '12/04/2023',
    title: 'Our collaborative work was published on Nature',
    tag: 'Lab Milestones',
    image: newsImage('michiganmedicien.png'),
    featured: false,
  },
  {
    id: '2023-12-01',
    date: '12/01/2023',
    title:
      'Congratulations to Fan who successfully defended his PhD thesis and will join Vanderbilt University Medical Center as a research fellow!',
    tag: 'People & Career',
    image: newsImage('vanderbeltimage.png'),
    featured: false,
  },
  {
    id: '2023-05-01',
    date: '05/2023',
    title:
      'Our paper “A generalizable framework to comprehensively predict epigenome, chromatin organization, and transcriptome” was accepted for publication on Nucleic Acids Research. Congratulations to Zhenhao and the rest of the team!',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2023-04-01',
    date: '04/2023',
    title:
      'Congratulations to Shuze who successfully defended her PhD thesis and will join Massachusetts General Hospital as a staff scientist!',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2022-11-01',
    date: '11/2022',
    title:
      'Our paper “GenomicKB: a knowledge graph for the human genome” was accepted for publication on Nucleic Acids Research. Congratulations to Fan and the rest of the team!',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2022-06-01',
    date: '06/2022',
    title:
      'Our paper “NucleoMap: a computational tool for identifying nucleosomes in ultra-high resolution contact maps” was accepted for publication on PLOS Computational Biology. Congratulations to Yuanhao and Bingjiang!',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2022-05-01',
    date: '05/2022',
    title:
      'Our paper “Characterizing collaborative transcription regulation with a graph-based deep learning approach” was accepted for publication on PLOS Computational Biology. Congratulations to Zhenhao and Fan!',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2022-04-01',
    date: '04/2022',
    title:
      'Our paper “Connecting high-resolution 3D chromatin organization with epigenomics” was published on Nature Communications. Congratulations to Fan, Yuan, David and Xiaotian!',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2021-10-01',
    date: '10/2021',
    title:
      'Our collaborative work with Dr. Xiaotian Zhang “3’HS1 CTCF binding site in human β-globin locus regulates fetal hemoglobin expression” was published on eLife.',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2021-09-01',
    date: '09/2021',
    title:
      'Together with Dr. Welch, Dr. Liu taught a new course BIOINF593/EECS598-011: Machine Learning in Computational Biology.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2021-08-01',
    date: '08/2021',
    title:
      'We organized a workshop on machine-learning methods for single-cell analysis.',
    tag: 'Talks & Events',
    featured: false,
  },
  {
    id: '2021-07-01',
    date: '07/2021',
    title:
      'Three graduate students Linghua Jiang, Zheyu Zhang, and Yicheng Tao joined the lab.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2021-04-15',
    date: '04/2021',
    title: 'Shuze Wang’s work was published on Genome Research.',
    tag: 'Publication',
    featured: false,
  },
  {
    id: '2021-04-01',
    date: '04/2021',
    title:
      'scHiCTools paper was accepted for publication in PLOS Computational Biology. Congratulations to Xinjun, Fan, Hongxi and Wai Yan.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2021-03-01',
    date: '03/2021',
    title: 'Sean Moran joined the lab after his rotation. Welcome, Sean!',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2020-10-01',
    date: '10/2020',
    title:
      'Zhenhao Zhang joined the lab and entered the BIOINFO PhD program. Welcome, Zhenhao!',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2020-09-01',
    date: '09/2020',
    title:
      'Liu Lab received the NHGRI Innovator Award (R35) to develop deep learning approaches to understand the relationship between chromatin state features and chromatin organization.',
    tag: 'Awards & Honors',
    featured: false,
  },
  {
    id: '2020-09-15',
    date: '09/2020',
    title:
      'Liu Lab received NIH Pilot Projects Enhancing Utility and Usage of Common Fund Data Sets Award (R03) to build a database for high-resolution chromatin contact maps and human genetic variants.',
    tag: 'Awards & Honors',
    featured: false,
  },
  {
    id: '2020-08-01',
    date: '08/2020',
    title: 'Congratulations to Yuanhao for passing his prelim exam.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2020-04-01',
    date: '04/2020',
    title:
      'Congratulations to our past trainees who were admitted to top graduate programs.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2019-12-01',
    date: '12/2019',
    title:
      'Congratulations to Fan and Shuze for passing their prelim exams.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2019-11-01',
    date: '11/2019',
    title: 'Dr. Liu formally joined the 4DN Consortium as an associate member.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2019-09-01',
    date: '09/2019',
    title:
      'Yuanhao Huang joined the lab and transferred to the DCMB PhD program.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2019-05-01',
    date: '05/2019',
    title: 'Fan Feng and Shuze Wang joined the lab as DCMB PhD students.',
    tag: 'People & Career',
    featured: false,
  },
  {
    id: '2019-01-01',
    date: '01/2019',
    title:
      'Liu Lab officially started in the Department of Computational Medicine and Bioinformatics at the University of Michigan.',
    tag: 'People & Career',
    featured: false,
  },
]
