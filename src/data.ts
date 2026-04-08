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
    period: 'Jan 2025 — Present',
    role: 'Front-End Developer Intern',
    company: 'PT. Digital Nusantara',
    companyUrl: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'REST API'],
  },
  {
    period: 'Jul 2024 — Dec 2024',
    role: 'Android Developer',
    company: 'Freelance',
    companyUrl: '#',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tech: ['Kotlin', 'Android Studio', 'Firebase', 'MVVM'],
  },
  {
    period: 'Feb 2024 — Jun 2024',
    role: 'Web Development Volunteer',
    company: 'Tech Community Bandung',
    companyUrl: '#',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
]

export const projects = [
  {
    title: 'AI News Portal',
    description:
      'A full-featured AI-powered news aggregation portal with real-time content updates and a clean, responsive interface built with React.',
    tech: ['React', 'JavaScript', 'REST API', 'Vercel'],
    liveUrl: 'https://ai-news-portal-nine.vercel.app/',
    githubUrl: null,
    image: '/assets/image/ainewsportal.png',
    featured: true,
  },
  {
    title: 'SealNote',
    description:
      'A secure, fast note-taking Android application with encrypted local storage, clean MVVM architecture, and an intuitive user experience.',
    tech: ['Kotlin', 'Android', 'Firebase', 'MVVM'],
    liveUrl: null,
    githubUrl: 'https://github.com/jonathanwijayaa/SealNote',
    image: '/assets/image/sealnote.png',
    featured: true,
  },
  {
    title: 'Office of Dicky Huang',
    description:
      'A professional company profile website with polished design, smooth animations, and mobile-first responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://jonathanwijayaa.github.io/OfficeofDickyHuang/',
    githubUrl: null,
    image: '/assets/image/LogoDickyHuang.jpg',
    featured: false,
  },
  {
    title: 'Fishbot Go',
    description:
      'A fun 2D arcade game developed collaboratively featuring engaging gameplay mechanics and pixel art visuals published on itch.io.',
    tech: ['Game Dev', 'Unity', 'Collaborative'],
    liveUrl: 'https://nicholandn22.itch.io/fishbot',
    githubUrl: null,
    image: '/assets/image/fishbot.png',
    featured: false,
  },
]
