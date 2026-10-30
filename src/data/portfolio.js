import { ref, computed } from 'vue'

// =========================================================
// Central content & storytelling source for Digdo's portfolio.
// Handcrafted editorial copy with Bilingual (EN / ID) support.
// =========================================================

export const currentLang = ref('en')

export function toggleLang() {
  currentLang.value = currentLang.value === 'en' ? 'id' : 'en'
  if (typeof document !== 'undefined') {
    document.documentElement.lang = currentLang.value
  }
}

export function setLang(lang) {
  if (lang === 'en' || lang === 'id') {
    currentLang.value = lang
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }
}

export const personal = {
  name: 'Digdo Reffly Nugroho',
  shortName: 'Digdo Reffly',
  monogram: 'DRN',
  location: 'Cikarang · Greater Jakarta, ID',
  currentCompany: 'PT Artha Utama Plasindo',
  roles: ['Fullstack Programmer', 'Web & Mobile Engineer'],
  email: 'digdoreffly07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/digdoreffly/',
  github: 'https://github.com/digdoreffly/',
  cvFile: '/cv.pdf',
  copy: {
    en: {
      statusLabel: 'Currently building internal ERP systems at PT Artha Utama Plasindo',
      heroKicker: 'Software Engineer — Enterprise Web, Database & Android',
      headlinePrefix: 'Translating complex operational workflows into',
      headlineItalic: 'dependable software',
      headlineSuffix: 'that teams actually enjoy using.',
      lead:
        'I am an Informatics graduate from Universitas Gunadarma working across the full stack—from designing relational schemas in MySQL, Oracle, and SQL Server to shipping manufacturing ERP modules in PHP/CodeIgniter, Vue.js interfaces, and native Kotlin Android apps for warehouse floors.',
      primaryCta: 'Explore Selected Works',
      secondaryCta: 'Download Résumé (PDF)',
      fieldNotesTitle: 'Engineering Field Notes',
      fieldNotes: [
        {
          code: '01',
          label: 'Current Focus',
          value: 'Multi-division Manufacturing ERP (BOM, PO, Budgeting, Inventory, QC)',
        },
        {
          code: '02',
          label: 'Core Stack',
          value: 'PHP · CodeIgniter · Vue.js · Kotlin (MVVM) · REST API',
        },
        {
          code: '03',
          label: 'Data Layer',
          value: 'MySQL · Oracle Database · Microsoft SQL Server · ERD Design',
        },
        {
          code: '04',
          label: 'Base',
          value: 'Cikarang / Depok, Indonesia (UTC+7)',
        },
      ],
    },
    id: {
      statusLabel: 'Saat ini membangun sistem ERP internal di PT Artha Utama Plasindo',
      heroKicker: 'Software Engineer — Enterprise Web, Database & Android',
      headlinePrefix: 'Menerjemahkan alur operasional yang kompleks menjadi',
      headlineItalic: 'perangkat lunak andal',
      headlineSuffix: 'yang nyaman digunakan tim sehari-hari.',
      lead:
        'Lulusan S1 Informatika Universitas Gunadarma yang berfokus pada pengembangan aplikasi end-to-end—mulai dari merancang skema database relasional di MySQL, Oracle, dan SQL Server, membangun modul ERP manufaktur berbasis PHP/CodeIgniter & Vue.js, hingga aplikasi Android Kotlin untuk operasional gudang.',
      primaryCta: 'Lihat Studi Kasus Proyek',
      secondaryCta: 'Unduh CV (PDF)',
      fieldNotesTitle: 'Catatan Ringkas Teknis',
      fieldNotes: [
        {
          code: '01',
          label: 'Fokus Saat Ini',
          value: 'Sistem ERP Manufaktur Lintas Divisi (BOM, PO, Budgeting, Inventory, QC)',
        },
        {
          code: '02',
          label: 'Stack Utama',
          value: 'PHP · CodeIgniter · Vue.js · Kotlin (MVVM) · REST API',
        },
        {
          code: '03',
          label: 'Basis Data',
          value: 'MySQL · Oracle Database · Microsoft SQL Server · Perancangan ERD',
        },
        {
          code: '04',
          label: 'Domisili',
          value: 'Cikarang / Depok, Indonesia (WIB / UTC+7)',
        },
      ],
    },
  },
}

export const navLinks = [
  { label: 'Approach', labelId: 'Pendekatan', hash: '#profile' },
  { label: 'Works', labelId: 'Karya', hash: '#projects' },
  { label: 'Experience', labelId: 'Pengalaman', hash: '#experience' },
  { label: 'Stack', labelId: 'Teknologi', hash: '#skills' },
  { label: 'Credentials', labelId: 'Kredensial', hash: '#education' },
  { label: 'Contact', labelId: 'Kontak', hash: '#contact' },
]

export const about = {
  paragraph:
    'I am an Informatics graduate and software developer with hands-on experience building enterprise web systems and native mobile applications. Most of my work sits at the intersection of business process analysis, database architecture, and practical user interfaces.',
  copy: {
    en: {
      indexLabel: '01 / Approach & Philosophy',
      title: 'Software built around real people and real floor operations',
      italicHighlight: 'not just abstract specs.',
      paragraphs: [
        'Good enterprise software is rarely about flashy visual tricks. When a warehouse operator is scanning stock on a factory floor or a purchasing team is reconciling a Bill of Materials against budget limits, clarity and data integrity matter above everything else.',
        'My background spans both enterprise web development (PHP, CodeIgniter, Vue.js) and native Android engineering (Kotlin, MVVM). Because I often work closely with cross-functional divisions—purchasing, warehouse, quality control, and production—I spend as much time mapping business workflows and writing clean SQL across MySQL, Oracle, and SQL Server as I do crafting interfaces.',
      ],
      principles: [
        {
          num: 'I.',
          title: 'Workflow First, Code Second',
          detail:
            'Every module starts with understanding how data moves between departments—translating physical SOPs into clean ERDs and predictable state transitions.',
        },
        {
          num: 'II.',
          title: 'Database-Grounded Engineering',
          detail:
            'Whether querying Oracle tables, optimizing MySQL joins, or integrating SQL Server with Android clients, reliable systems depend on disciplined schema design.',
        },
        {
          num: 'III.',
          title: 'Pragmatic, Maintainable Delivery',
          detail:
            'Writing readable code, thorough QA verification, and clear API contracts so internal teams can rely on the software long after launch.',
        },
      ],
    },
    id: {
      indexLabel: '01 / Pendekatan & Cara Kerja',
      title: 'Perangkat lunak yang dirancang untuk operasional nyata',
      italicHighlight: 'bukan sekadar tampilan.',
      paragraphs: [
        'Perangkat lunak internal yang baik tidak diukur dari seberapa mencolok animasinya, melainkan seberapa akurat sistem tersebut membantu staf gudang mencatat stok atau tim purchasing memvalidasi Bill of Materials (BOM) terhadap anggaran.',
        'Latar belakang saya mencakup pengembangan web enterprise (PHP, CodeIgniter, Vue.js) dan aplikasi mobile Android native (Kotlin, MVVM). Karena terbiasa berkolaborasi langsung lintas divisi—mulai dari Purchasing, Gudang, QC, hingga Produksi—saya selalu memulai pekerjaan dari pemetaan alur bisnis, perancangan ERD, dan optimasi query pada MySQL, Oracle, maupun SQL Server.',
      ],
      principles: [
        {
          num: 'I.',
          title: 'Pahami Alur Bisnis Lebih Dulu',
          detail:
            'Setiap fitur dimulai dari memetakan bagaimana dokumen dan data mengalir antar-departemen, lalu menerjemahkannya menjadi ERD dan alur sistem yang rapi.',
        },
        {
          num: 'II.',
          title: 'Kuat di Lapisan Database',
          detail:
            'Mulai dari analisis query Oracle & MySQL hingga integrasi SQL Server ke aplikasi Android, keandalan aplikasi selalu berakar pada struktur data yang disiplin.',
        },
        {
          num: 'III.',
          title: 'Kode Bersih & Teruji',
          detail:
            'Mengutamakan keterbacaan kode, pengujian QA menyeluruh, dan integrasi REST API yang stabil agar aplikasi mudah dirawat jangka panjang.',
        },
      ],
    },
  },
}

export const skillGroups = [
  {
    code: 'A',
    title: 'Languages & Core',
    titleId: 'Bahasa Pemrograman',
    note: 'Daily drivers for backend logic, interactive UI, and native Android.',
    noteId: 'Bahasa utama untuk logika backend, antarmuka web, dan Android native.',
    items: ['PHP', 'JavaScript (ES6+)', 'Kotlin', 'Java', 'SQL'],
  },
  {
    code: 'B',
    title: 'Frameworks & Architecture',
    titleId: 'Framework & Arsitektur',
    note: 'Structured MVC/MVVM patterns for maintainable web and mobile apps.',
    noteId: 'Pola arsitektur terstruktur untuk aplikasi web dan mobile.',
    items: ['Vue.js', 'CodeIgniter', 'Android SDK (MVVM)', 'Bootstrap', 'Retrofit'],
  },
  {
    code: 'C',
    title: 'Relational Databases',
    titleId: 'Basis Data Relasional',
    note: 'Schema modeling (ERD), complex reporting queries, and cross-DB integration.',
    noteId: 'Perancangan ERD, analisis query kompleks, dan integrasi lintas database.',
    items: ['MySQL', 'Oracle Database', 'Microsoft SQL Server'],
  },
  {
    code: 'D',
    title: 'Integration & Craft',
    titleId: 'Integrasi & Metodologi',
    note: 'Connecting systems and aligning software with business workflows.',
    noteId: 'Menghubungkan antar-sistem dan menyelaraskan perangkat lunak dengan proses bisnis.',
    items: ['RESTful API', 'AJAX / JSON', 'HTML5 & Modern CSS', 'ERD & Workflow Design', 'QA Testing'],
  },
]

export const projects = [
  {
    id: 'internal-erp-system',
    index: '01',
    name: 'Internal Manufacturing ERP System',
    nameId: 'Sistem ERP Manufaktur Internal',
    client: 'PT Artha Utama Plasindo',
    year: '2025 — Present',
    category: 'Enterprise Web Application',
    categoryId: 'Aplikasi Web Enterprise',
    featured: true,
    image: '/images/project-erp.svg',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Oracle', 'JavaScript', 'AJAX', 'Bootstrap'],
    description:
      'A multi-division enterprise resource planning system built to unify manufacturing workflows—from Bill of Materials (BOM) and purchasing budgets to warehouse inventory, quality control, production tracking, and delivery.',
    descriptionId:
      'Sistem ERP internal lintas divisi yang dirancang untuk menyatukan alur proses manufaktur—mulai dari Bill of Materials (BOM), Purchase Order & Budgeting, Inventory Gudang, Quality Control, Produksi, hingga Pengiriman.',
    roleSummary: 'Web Developer — Workflow Architecture, ERD Design, Fullstack Module Implementation & Query Optimization',
    roleSummaryId: 'Web Developer — Perancangan Alur Kerja, Desain ERD, Pengembangan Modul Fullstack & Optimasi Query',
    highlights: [
      'Designed end-to-end application workflows and Entity Relationship Diagrams (ERD) connecting 8 core operational modules.',
      'Built the BOM List, Purchase Order (PO), Budgeting, and Inventory modules with real-time AJAX interactions.',
      'Wrote and analyzed cross-database queries spanning MySQL and Oracle to ensure accurate material and cost tracking.',
    ],
    highlightsId: [
      'Merancang alur kerja aplikasi dan ERD yang menghubungkan 8 modul operasional utama perusahaan.',
      'Mengembangkan modul BOM List, Purchase Order (PO), Budgeting, dan Inventory dengan interaksi AJAX yang responsif.',
      'Menganalisis dan mengoptimalkan query lintas database pada MySQL dan Oracle untuk akurasi pelacakan material dan biaya.',
    ],
    modules: ['BOM List', 'Purchase Order', 'Budgeting', 'Inventory', 'Warehouse', 'Quality Control', 'Production', 'Delivery'],
    schematic: {
      title: 'ERP Module & Data Pipeline',
      layers: [
        { label: 'Planning & Cost', nodes: ['BOM List', 'Budgeting', 'Purchase Order'] },
        { label: 'Floor Operations', nodes: ['Warehouse', 'Inventory', 'Production', 'QC'] },
        { label: 'Fulfillment & Data', nodes: ['Delivery', 'MySQL + Oracle DB'] },
      ],
    },
    liveUrl: null,
    liveLabel: 'Internal Enterprise Network',
    liveLabelId: 'Jaringan Internal Perusahaan',
    githubUrl: 'https://github.com/digdoreffly/',
  },
  {
    id: 'stock-opname-mobile',
    index: '02',
    name: 'Stock Opname Android Application',
    nameId: 'Aplikasi Mobile Stock Opname Android',
    client: 'PT Astra Otoparts Tbk & Freelance',
    year: '2022 — 2023',
    category: 'Native Android · Inventory System',
    categoryId: 'Android Native · Sistem Inventaris',
    featured: false,
    image: '/images/project-stock-opname.svg',
    technologies: ['Kotlin', 'Android SDK', 'MVVM', 'REST API', 'Retrofit', 'SQL Server'],
    description:
      'Native Android application engineered for warehouse teams to perform physical inventory audits (stock opname), replacing manual paper tallies with direct database synchronization.',
    descriptionId:
      'Aplikasi Android native yang dirancang bagi tim gudang untuk melakukan pemeriksaan fisik inventaris (stock opname), menggantikan pencatatan kertas manual dengan sinkronisasi langsung ke database.',
    roleSummary: 'Android Developer — Mobile UI, MVVM Architecture, REST API & SQL Server Integration',
    roleSummaryId: 'Android Developer — Antarmuka Mobile, Arsitektur MVVM, Integrasi REST API & SQL Server',
    highlights: [
      'Structured the Android codebase using clean MVVM architecture for clear separation between UI state and business logic.',
      'Integrated Retrofit REST API client and Microsoft SQL Server backend to validate item codes, quantities, and discrepancy logs.',
      'Tested and refined the mobile interface for fast, low-error data entry during physical warehouse stock-taking.',
    ],
    highlightsId: [
      'Menyusun kode aplikasi Android dengan arsitektur MVVM agar pemisahan antara state UI dan logika bisnis tetap bersih.',
      'Mengintegrasikan REST API menggunakan Retrofit serta database Microsoft SQL Server untuk validasi kode barang dan selisih stok.',
      'Menguji dan menyempurnakan antarmuka agar staf lapangan dapat menginput data audit stok dengan cepat dan minim kesalahan.',
    ],
    modules: ['Item Lookup', 'Physical Count Input', 'Discrepancy Check', 'REST Sync', 'SQL Server Persistence'],
    schematic: {
      title: 'Mobile-to-Database Sync Architecture',
      layers: [
        { label: 'Android Client', nodes: ['Kotlin UI', 'ViewModel (MVVM)'] },
        { label: 'Network Layer', nodes: ['Retrofit HTTP', 'REST API JSON'] },
        { label: 'Persistence', nodes: ['Microsoft SQL Server'] },
      ],
    },
    liveUrl: null,
    liveLabel: 'Internal Warehouse Deployment',
    liveLabelId: 'Digunakan di Lingkungan Internal',
    githubUrl: 'https://github.com/digdoreffly/',
  },
  {
    id: 'company-profile-website',
    index: '03',
    name: 'Corporate Web Platform — PT Aryan Indonesia',
    nameId: 'Website Korporat — PT Aryan Indonesia',
    client: 'PT Aryan Indonesia (aryan.co.id)',
    year: '2024',
    category: 'Corporate Web · Production',
    categoryId: 'Web Korporat · Produksi',
    featured: false,
    image: '/images/project-company-profile.svg',
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
    description:
      'Custom-built responsive corporate website for PT Aryan Indonesia, translating client brand specifications into a fast, accessible public web presence.',
    descriptionId:
      'Website profil perusahaan responsif untuk PT Aryan Indonesia yang menerjemahkan kebutuhan identitas klien menjadi halaman publik yang cepat dan mudah diakses.',
    roleSummary: 'Freelance Fullstack Web Developer — UI Implementation, CodeIgniter Backend & Deployment',
    roleSummaryId: 'Freelance Fullstack Web Developer — Implementasi UI, Backend CodeIgniter & Deployment',
    highlights: [
      'Translated custom client UI requirements into responsive layouts across desktop, tablet, and mobile viewports.',
      'Built structured MVC routing and views using PHP and CodeIgniter for straightforward content updates.',
      'Deployed to production at aryan.co.id with clean semantic HTML and optimized asset loading.',
    ],
    highlightsId: [
      'Menerjemahkan spesifikasi desain klien menjadi tampilan web responsif di berbagai ukuran layar.',
      'Membangun struktur routing dan view MVC menggunakan PHP dan CodeIgniter agar konten mudah dikelola.',
      'Melakukan deployment produksi pada domain aryan.co.id dengan struktur HTML semantik dan pemuatan aset yang ringan.',
    ],
    modules: ['Responsive Brand UI', 'Service Catalog', 'Company Overview', 'Contact & Inquiry'],
    schematic: {
      title: 'Web Delivery Stack',
      layers: [
        { label: 'Presentation', nodes: ['Semantic HTML5', 'Custom CSS / Bootstrap', 'JS'] },
        { label: 'Application', nodes: ['PHP · CodeIgniter MVC'] },
        { label: 'Production', nodes: ['aryan.co.id (Live)'] },
      ],
    },
    liveUrl: 'https://aryan.co.id',
    liveLabel: 'Visit aryan.co.id',
    liveLabelId: 'Buka aryan.co.id',
    githubUrl: 'https://github.com/digdoreffly/',
  },
]

export const experience = [
  {
    company: 'PT Artha Utama Plasindo',
    role: 'Web Developer',
    roleId: 'Web Developer',
    type: 'Full-time · On-site',
    typeId: 'Penuh Waktu · On-site',
    location: 'Cikarang, Indonesia',
    period: 'Jun 2025 — Present',
    periodId: 'Jun 2025 — Sekarang',
    current: true,
    description:
      'Spearheading internal ERP application development across multiple manufacturing and operational divisions.',
    descriptionId:
      'Mengembangkan dan memelihara aplikasi ERP internal untuk mendukung proses bisnis lintas divisi manufaktur dan operasional.',
    responsibilities: [
      'Architecting and building core ERP modules including Bill of Materials (BOM List), Purchase Order (PO), Budgeting, and Inventory.',
      'Mapping departmental business processes into clear application workflows and Entity Relationship Diagrams (ERD).',
      'Writing, analyzing, and tuning complex SQL queries across both MySQL and Oracle databases.',
      'Developing fullstack features with PHP and CodeIgniter and conducting end-to-end QA testing with internal stakeholders.',
    ],
    responsibilitiesId: [
      'Merancang dan membangun modul utama ERP meliputi Bill of Materials (BOM List), Purchase Order (PO), Budgeting, dan Inventory.',
      'Memetakan proses bisnis antar-divisi ke dalam alur kerja aplikasi (workflow) dan desain Entity Relationship Diagram (ERD).',
      'Menulis, menganalisis, dan mengoptimalkan query SQL kompleks pada database MySQL serta Oracle.',
      'Mengembangkan fitur fullstack dengan PHP & CodeIgniter serta menjalankan pengujian QA bersama pengguna internal.',
    ],
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Oracle', 'JavaScript', 'AJAX', 'ERD Design'],
  },
  {
    company: 'Freelance Software Engineer',
    role: 'Fullstack Web Developer',
    roleId: 'Fullstack Web Developer',
    type: 'Client Contract',
    typeId: 'Proyek Klien',
    location: 'Indonesia',
    period: 'Oct 2024 — Dec 2024',
    periodId: 'Okt 2024 — Des 2024',
    current: false,
    project: 'PT Aryan Indonesia — Corporate Website',
    description:
      'Delivered a custom responsive company profile website tailored to the client’s branding and communication goals.',
    descriptionId:
      'Membangun website company profile responsif sesuai kebutuhan identitas visual dan komunikasi bisnis klien.',
    responsibilities: [
      'Implemented responsive front-end templates and interactive components faithful to client UI specifications.',
      'Built the server-side application structure using PHP and CodeIgniter and handled live deployment to aryan.co.id.',
    ],
    responsibilitiesId: [
      'Mengimplementasikan antarmuka front-end yang responsif sesuai spesifikasi UI dari klien.',
      'Membangun struktur aplikasi di sisi server dengan PHP & CodeIgniter hingga rilis produksi di aryan.co.id.',
    ],
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://aryan.co.id',
    liveLabel: 'aryan.co.id',
  },
  {
    company: 'Freelance Software Engineer',
    role: 'Mobile Developer (Android)',
    roleId: 'Mobile Developer (Android)',
    type: 'Client Contract',
    typeId: 'Proyek Klien',
    location: 'Indonesia',
    period: 'Feb 2023 — Jul 2023',
    periodId: 'Feb 2023 — Jul 2023',
    current: false,
    project: 'Stock Opname Android Application',
    description:
      'Developed an Android inventory auditing application to streamline physical stock verification and reporting.',
    descriptionId:
      'Mengembangkan aplikasi audit inventaris berbasis Android untuk mempercepat proses verifikasi dan pelaporan stok fisik.',
    responsibilities: [
      'Engineered the mobile client in Kotlin following the MVVM architectural pattern for clean state management.',
      'Connected the Android app to backend services via REST API and Retrofit for real-time inventory synchronization.',
    ],
    responsibilitiesId: [
      'Membangun aplikasi klien Android menggunakan Kotlin dengan pola arsitektur MVVM.',
      'Menghubungkan aplikasi dengan layanan backend melalui REST API dan Retrofit untuk sinkronisasi data stok.',
    ],
    technologies: ['Kotlin', 'Android SDK', 'MVVM', 'REST API', 'Retrofit'],
  },
  {
    company: 'PT Astra Otoparts Tbk',
    role: 'Android Developer — Internship',
    roleId: 'Android Developer — Magang',
    type: 'Industrial Internship',
    typeId: 'Magang Industri',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2022 — Jul 2022',
    periodId: 'Feb 2022 — Jul 2022',
    current: false,
    project: 'Internal Stock Opname Application',
    description:
      'Contributed to the development of an internal Android stock-taking application for automotive parts warehouse operations.',
    descriptionId:
      'Berkontribusi dalam pengembangan aplikasi stock opname Android internal untuk operasional gudang suku cadang otomotif.',
    responsibilities: [
      'Developed mobile user interfaces and core business logic in Kotlin for warehouse stock-taking workflows.',
      'Integrated the Android application with Microsoft SQL Server databases and executed functional testing prior to internal rollout.',
    ],
    responsibilitiesId: [
      'Mengembangkan antarmuka pengguna mobile dan logika bisnis utama dengan Kotlin untuk alur kerja stock opname gudang.',
      'Mengintegrasikan aplikasi Android dengan database Microsoft SQL Server serta melakukan pengujian fungsional.',
    ],
    technologies: ['Kotlin', 'Android', 'Microsoft SQL Server'],
  },
]

export const education = [
  {
    school: 'Universitas Gunadarma',
    degree: 'Bachelor of Informatics (S.Kom)',
    degreeId: 'Sarjana Komputer — Informatika (S.Kom)',
    location: 'Depok, West Java, Indonesia',
    period: '2019 — 2023',
    note: 'GPA: 3.36 / 4.00',
    noteId: 'IPK: 3.36 / 4.00',
    summary:
      'Focused on software engineering fundamentals, relational database systems, algorithms, and web/mobile application development.',
    summaryId:
      'Berfokus pada rekayasa perangkat lunak, sistem basis data relasional, algoritma, serta pengembangan aplikasi web dan mobile.',
  },
]

export const certificates = [
  {
    code: 'CERT-01',
    title: 'Certified Programmer — BNSP',
    titleId: 'Sertifikasi Kompetensi Programmer — BNSP',
    issuer: 'Vocational School Graduate Academy (VSGA · Kominfo / BNSP)',
    focus: 'National Professional Software Development Competency',
    focusId: 'Sertifikasi Kompetensi Nasional Bidang Pemrograman',
  },
  {
    code: 'CERT-02',
    title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    titleId: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    issuer: 'Dicoding Indonesia',
    focus: 'Cross-Platform Mobile UI & State Fundamentals',
    focusId: 'Fundamental Antarmuka & State Aplikasi Mobile',
  },
  {
    code: 'CERT-03',
    title: 'Fundamental Web Programming',
    titleId: 'Fundamental Web Programming',
    issuer: 'Lembaga Pengembangan Komputerisasi (LepKom) — Universitas Gunadarma',
    focus: 'Fullstack Web Architecture & Database Integration',
    focusId: 'Arsitektur Web & Integrasi Basis Data',
  },
]
