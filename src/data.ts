// =============================================
// All portfolio data in one place
// =============================================

export const navLinks = [
  { label: 'About', href: '#about' },
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
    period: 'Aug 2025 — Present',
    role: 'Web Developer Intern',
    company: 'Studyfirst',
    companyUrl: '#',
    description: [
      'Developed a React-based LMS using TypeScript and Tailwind CSS, integrating Supabase for role-based authentication and database management.',
      'Built a WordPress landing page for IELTS Simulation, collaborating with UI/UX and Product Management teams to translate designs into functional, interactive layouts.',
      'Maintained company website via WordPress, managing 17+ SEO articles and recruitment updates in coordination with Marketing and HR teams.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'WordPress'],
  },
  {
    period: 'Feb 2024 — Present',
    role: 'Part-Time Assistant Lecturer',
    company: 'Universitas Kristen Duta Wacana',
    companyUrl: 'https://www.ukdw.ac.id/',
    description: [
      'Facilitated lab sessions for 4 core courses including Database Systems, Computer Networks, Web Development, and Software Quality Assurance, for classes of up to 40 students.',
      'Developed 20+ practical lab modules simulating real-world scenarios, achieving a 90% student project success rate.',
      'Evaluated 700+ technical submissions, providing individualized feedback on coding and system configurations.',
    ],
    tech: ['Database Systems', 'Computer Networks', 'Web Development', 'SQL'],
  },
]

export const projects = [
  {
    title: 'Aplikasi Data Relawan Kota Yogyakarta',
    description: [
      'Designed high-fidelity prototypes in Figma using user-centered principles to ensure an accessible experience for managing large-scale volunteer datasets.',
      'Developed the frontend with React.js, TypeScript, and Tailwind CSS, translating complex data requirements into a responsive, high-performance, and maintainable codebase.',
      'Collaborated directly with BAPPEDA stakeholders to identify user needs and implement secure data management features, ensuring the platform met official government standards.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Supabase'],
    liveUrl: null,
    githubUrl: null,
    image: '/assets/image/bappeda.png',
    featured: true,
  },
  {
    title: 'LMS Studyfirst',
    description: [
      'Developed a responsive and centralized LMS frontend using React.js, TypeScript, and Tailwind CSS, providing a seamless user interface for Students, Course Managers, and Administrators.',
      'Integrated Supabase for secure user authentication and real-time database management, ensuring robust role-based access control and efficient data handling across the platform.',
      'Implemented core business features including course management modules and student progress tracking, translating business requirements into functional, high-performance web components.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: null,
    githubUrl: null,
    image: '/assets/image/lms.png',
    featured: true,
  },
  {
    title: 'AI News Portal',
    description: [
      'Developed a dynamic news aggregator platform using React.js and TypeScript, providing real-time updates on AI trends by integrating third-party News APIs.',
      'Architected a responsive and high-performance UI with Tailwind CSS ensuring optimal readability and seamless user navigation across various device screen sizes.',
      'Optimized data fetching and state management to deliver a fast-loading news feed, showcasing the ability to transform complex external data into an intuitive and clean user interface.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'News API', 'Vercel'],
    liveUrl: 'https://ai-news-portal-nine.vercel.app/',
    githubUrl: null,
    image: '/assets/image/ainewsportal.png',
    featured: true,
  },
  {
    title: 'SealNote',
    description: [
      'Conceptualized and designed a "Stealth Mode" UI/UX featuring a functional calculator interface that disguises the secure note-taking system to prioritize user privacy.',
      'Developed the mobile application using Kotlin and Jetpack Compose, implementing Material Design 3 (Material You) principles to create a modern, dynamic, and responsive user interface.',
      'Engineered a multi-layered security architecture featuring biometric authentication (Fingerprint/Face ID) for "Secret Notes," with Firebase integration for secure data synchronization.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material Design 3'],
    liveUrl: null,
    githubUrl: 'https://github.com/jonathanwijayaa/SealNote',
    image: '/assets/image/sealnote.png',
    featured: true,
  },
  {
    title: 'Office of Dicky Huang',
    description: [
      'A professional company profile website with polished design, smooth animations, and mobile-first responsive layout.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://jonathanwijayaa.github.io/OfficeofDickyHuang/',
    githubUrl: null,
    image: '/assets/image/LogoDickyHuang.jpg',
    featured: false,
  },
  {
    title: 'Fishbot Go',
    description: [
      'A fun 2D arcade game developed collaboratively featuring engaging gameplay mechanics and pixel art visuals published on itch.io.',
    ],
    tech: ['Game Dev', 'Unity', 'Collaborative'],
    liveUrl: 'https://nicholandn22.itch.io/fishbot',
    githubUrl: null,
    image: '/assets/image/fishbot.png',
    featured: false,
  },
]

