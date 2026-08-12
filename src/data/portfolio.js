// =========================================================
// Central content source for the portfolio.
// Edit this file to update any text shown on the site —
// components only render this data, they don't hardcode copy.
// =========================================================

export const personal = {
  name: 'Digdo Reffly Nugroho',
  roles: ['Fullstack Programmer', 'Web Developer'],
  tagline: 'Building digital solutions through code and technology.',
  email: 'digdoreffly07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/digdoreffly/',
  github: 'https://github.com/digdoreffly/',
  cvFile: '/cv.pdf',
}

export const navLinks = [
  { label: 'Profile', hash: '#profile' },
  { label: 'Education', hash: '#education' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Certificates', hash: '#certificates' },
  { label: 'Contact', hash: '#contact' },
]

export const about = {
  paragraph:
    'I am an Informatics graduate and software developer with experience in web and mobile application development. I have experience in application development, system integration, database management, business process analysis, and working with cross-functional teams.',
  stats: [
    { value: 1, suffix: '+', label: 'Years Experience' },
    { value: 3, suffix: '+', label: 'Major Projects' },
    { value: null, label: 'Web & Mobile Development' },
    { value: null, label: 'Enterprise Application' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code',
    items: ['PHP', 'JavaScript', 'Kotlin', 'Java'],
  },
  {
    title: 'Framework',
    icon: 'layers',
    items: ['Vue.js', 'CodeIgniter', 'Bootstrap'],
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MySQL', 'SQL Server', 'Oracle'],
  },
  {
    title: 'Web & API',
    icon: 'globe',
    items: ['HTML', 'CSS', 'AJAX', 'REST API'],
  },
]

export const education = [
  {
    school: 'Universitas Gunadarma',
    degree: 'Bachelor Degree — Informatics',
    location: 'Depok, Indonesia',
    period: '2019 — 2023',
    note: 'GPA: 3.36 / 4.00',
  },
]

export const experience = [
  {
    company: 'PT Artha Utama Plasindo',
    role: 'Web Developer',
    location: 'Cikarang',
    period: 'Jun 2025 — Present',
    current: true,
    description:
      'Developing internal ERP applications for multiple company divisions.',
    responsibilities: [
      'ERP application development',
      'BOM List module',
      'PO and Budgeting module',
      'Inventory module',
      'Application workflow design',
      'ERD design',
      'MySQL and Oracle query analysis',
      'PHP and CodeIgniter development',
      'QA testing',
    ],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    location: null,
    period: 'Oct 2024 — Dec 2024',
    current: false,
    project: 'Company Profile Website',
    description: null,
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://aryan.co.id',
    liveLabel: 'aryan.co.id',
  },
  {
    company: 'Freelance',
    role: 'Mobile Developer',
    location: null,
    period: 'Feb 2023 — Jul 2023',
    current: false,
    project: 'Stock Opname Application',
    description: null,
    technologies: ['Kotlin', 'Android', 'MVVM', 'REST API', 'Retrofit'],
  },
  {
    company: 'PT Astra Otoparts Tbk',
    role: 'Android Developer — Internship',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2022 — Jul 2022',
    current: false,
    project: 'Stock Opname Application',
    description: null,
    technologies: ['Kotlin', 'Android', 'Microsoft SQL Server'],
    responsibilities: [
      'Application development',
      'Database integration',
      'UI development',
      'Business logic',
      'Application testing',
    ],
  },
]

export const projects = [
  {
    id: 'internal-erp-system',
    name: 'Internal ERP System',
    category: 'Enterprise / Web',
    featured: true,
    image: '/images/project-erp.svg',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Oracle', 'Bootstrap', 'JavaScript', 'AJAX'],
    description:
      'Internal ERP application designed to support company business processes across multiple divisions.',
    modules: ['BOM', 'Purchase Order', 'Budgeting', 'Inventory', 'Warehouse', 'QC', 'Production', 'Delivery'],
    liveUrl: null,
    liveLabel: 'Internal / Private',
    githubUrl: 'https://github.com/digdoreffly/',
  },
  {
    id: 'stock-opname-mobile',
    name: 'Stock Opname Mobile Application',
    category: 'Mobile',
    featured: false,
    image: '/images/project-stock-opname.svg',
    technologies: ['Kotlin', 'Android', 'MVVM', 'REST API', 'Retrofit', 'SQL Server'],
    description:
      'Android-based stock opname application designed to support inventory checking and operational efficiency.',
    liveUrl: null,
    liveLabel: 'Internal / Private',
    githubUrl: 'https://github.com/digdoreffly/',
  },
  {
    id: 'company-profile-website',
    name: 'Company Profile Website',
    category: 'Web',
    featured: false,
    image: '/images/project-company-profile.svg',
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Responsive company profile website developed according to client UI requirements.',
    liveUrl: 'https://aryan.co.id',
    liveLabel: 'aryan.co.id',
    githubUrl: 'https://github.com/digdoreffly/',
  },
]

export const certificates = [
  {
    title: 'Programmer — BNSP',
    issuer: 'Vocational School Graduate Academy',
  },
  {
    title: 'Belajar Membuat Aplikasi Flutter Untuk Pemula',
    issuer: 'Dicoding',
  },
  {
    title: 'Fundamental Web Programming',
    issuer: 'LepKom',
  },
]
