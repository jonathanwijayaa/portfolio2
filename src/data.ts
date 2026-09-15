// =============================================
// All portfolio data in one place
// =============================================

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/jonathanwijayaa',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jonathanwijayaa',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jonattttt/',
    icon: 'instagram',
  },
  {
    label: 'Email',
    href: 'mailto:jonathanwijaya156@gmail.com',
    icon: 'mail',
  },
]

export const experiences = [
  {
    period: 'Sep 2025 — Dec 2025',
    role: 'Web Developer Intern',
    company: 'Studyfirst',
    companyUrl: '#',
    description: [
      'Engineered a multi-role LMS (Student, Course Manager, Administrator) using React.js, TypeScript, and Tailwind CSS; architected backend services with Supabase including database schema design, Row Level Security (RLS), and role-based authentication.',
      'Translated Figma wireframes into a pixel-accurate WordPress IELTS landing page under Agile sprint cadence, collaborating cross-functionally with Product and Design teams.',
      'Managed 17+ SEO-optimised articles in coordination with Marketing and HR, contributing to measurable improvements in organic search visibility.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'WordPress'],
  },
  {
    period: 'Feb 2024 — Jun 2026',
    role: 'Part-Time Assistant Lecturer',
    company: 'Universitas Kristen Duta Wacana',
    companyUrl: 'https://www.ukdw.ac.id/',
    description: [
      'Facilitated lab sessions for core courses including Software Quality Assurance, Database Systems, Computer Networks, and Web Development for classes of up to 40 students.',
      'Designed 20+ practical lab modules simulating real-world engineering scenarios, achieving a 90% student project success rate through hands-on guidance.',
      'Evaluated 700+ technical submissions, delivering detailed individualized feedback on code quality, system configurations, and debugging strategies.',
    ],
    tech: ['Web Development', 'Database Systems', 'Software Quality Assurance', 'SQL'],
  },
]

export const projects = [
  {
    title: 'Chatbot Kafe Jogja',
    description: [
      'Built an AI-powered café recommendation chatbot for Yogyakarta using React.js, TypeScript, and Gemini API, featuring a conversational UI deployed on Vercel.',
      'Implemented custom content guardrails, including topic restriction and profanity filtering, to ensure safe and highly context-relevant responses.',
      'Isolated and tracked prompt-engineering edge cases during manual testing to strictly maintain model accuracy and response tone.',
    ],
    tech: ['React.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    liveUrl: null, // Tambahkan URL jika sudah ada deployment live
    githubUrl: 'https://github.com/jonathanwijayaa',
    image: '/assets/image/chatbot-kafe.png', // Pastikan mengganti dengan path gambar yang sesuai
    featured: true,
  },
  {
    title: 'Aplikasi Data Relawan Kota Yogyakarta',
    description: [
      'Led the frontend development of a civic tech volunteer platform using React.js, TypeScript, Tailwind CSS, Axios, and TanStack Query for efficient data fetching and caching.',
      'Designed high-fidelity Figma prototypes applying user-centered design principles; implemented secure data management features meeting official government compliance standards.',
      'Validated system quality through structured usability testing, achieving a 98.72% Task Completion Rate and positive UEQ scores across Super Admin, OPD, and Volunteer groups.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Axios', 'TanStack Query', 'Figma'],
    liveUrl: null,
    githubUrl: null,
    image: '/assets/image/bappeda.png',
    featured: true,
  },
  {
    title: 'LMS Studyfirst',
    description: [
      'Engineered a centralized multi-role LMS frontend (Student, Course Manager, Admin) using React.js, TypeScript, and Tailwind CSS.',
      'Integrated Supabase for database management and Row Level Security (RLS) policies, securing access control across 3 user tiers.',
      'Implemented course management modules and student progress tracking, translating complex business logic into high-performance web components.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: null,
    githubUrl: null,
    image: '/assets/image/lms.png',
    featured: true,
  },
  {
    title: 'Sealnote',
    description: [
      'Built a privacy-first Android note-taking app in Kotlin and Jetpack Compose featuring a "Stealth Calculator" disguise UI and Material Design 3.',
      'Engineered multi-layered security with biometric authentication (Fingerprint/Face ID) and Google Sign-In (OAuth 2.0 / SSO) with token-based session handling.',
      'Integrated Firebase Auth, Realtime Database, and Storage for encrypted data synchronization and media management.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'OAuth 2.0', 'Material Design 3'],
    liveUrl: null,
    githubUrl: 'https://github.com/jonathanwijayaa/SealNote',
    image: '/assets/image/sealnote.png',
    featured: true,
  },
  {
    title: 'AI News Portal',
    description: [
      'Developed a dynamic news aggregator platform using React.js and TypeScript, providing real-time updates on AI trends by integrating third-party News APIs.',
      'Architected a responsive UI with Tailwind CSS and optimized data fetching to deliver a fast-loading news feed.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'News API', 'Vercel'],
    liveUrl: 'https://ai-news-portal-nine.vercel.app/',
    githubUrl: null,
    image: '/assets/image/ainewsportal.png',
    featured: false,
  },
]