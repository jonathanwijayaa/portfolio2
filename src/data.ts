// =============================================
// All portfolio data in one place
// =============================================

import type { SkillCategory } from './types'

export const RESUME_URL = '/Jonathan Wijaya_resume.pdf'

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
    companyUrl: 'https://studyfirstindonesia.com/',
    description: [
      'Developed frontend components for a multi-role LMS using React.js, TypeScript, Tailwind CSS, and Zustand.',
      'Designed database schemas and configured Supabase Authentication, custom Row Level Security (RLS) policies, and Storage for three user roles: Administrator, Course Manager, and Student.',
      'Translated Figma designs into a responsive WordPress IELTS landing page, collaborating with Product and Design teams through Agile sprints.',
      'Managed the upload and publication of 17 SEO-optimised articles in coordination with the Marketing and HR teams.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS','Zustand','Supabase', 'WordPress'],
  },
  {
    period: 'Feb 2024 — Jun 2026',
    role: 'Part-Time Assistant Lecturer',
    company: 'Universitas Kristen Duta Wacana',
    companyUrl: 'https://www.ukdw.ac.id/',
    description: [
      'Facilitated laboratory sessions for Software Quality Assurance, Database Systems, Computer Networks, Web Development, and Test Engineering, supporting classes of up to 40 students.',
      'Designed 20+ practical lab modules for Database Systems and Web Development, simulating real-world engineering scenarios through hands-on learning, guidance, and technical troubleshooting during sessions.',
      'Evaluated 700+ student technical submissions cumulatively, providing individual feedback on code quality, system configurations, testing practices, and debugging strategies.',
    ],
    tech: ['Web Development', 'Database Systems', 'Software Quality Assurance', 'SQL'],
  },
]

export const projects = [
  {
    title: 'Aplikasi Data Relawan Kota Yogyakarta',
    description: [
      'Served as the sole frontend developer and UI/UX designer for a government volunteer-data management platform, collaborating directly with BAPPEDA stakeholders to translate operational requirements into functional interfaces using React.js, TypeScript, Tailwind CSS, Axios, and TanStack Query.',
      'Designed high-fidelity Figma prototypes and developed reusable, responsive interfaces. Implemented an Excel import workflow to parse inconsistent records and handle missing values, alongside client-side PDF export using jsPDF.',
      'Designed and conducted usability testing with 17 participants across Super Admin, OPD, and Volunteer groups, covering 156 role-specific task attempts and recording a 98.72% average Task Completion Rate (TCR), alongside Time on Task, SUS, and UEQ evaluations.',
    ],
    tech: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Axios',
      'TanStack Query',
      'Figma',
    ],
    liveUrl: null,
    githubUrl: null,
    image: '/assets/image/bappeda.png',
    featured: true,
  },
  {
    title: 'LMS Study First',
    description: [
      'Developed frontend components for a multi-role Learning Management System using React.js, TypeScript, Tailwind CSS, and Zustand.',
      'Designed database schemas and configured Supabase Authentication, custom Row Level Security (RLS) policies, and Storage for Administrator, Course Manager, and Student roles.',
      'Implemented role-specific access rules: Administrators can create courses and assign Course Managers, Course Managers manage their assigned courses, and Students have view-only access.',
    ],
    tech: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Supabase',
      'Row Level Security',
    ],
    liveUrl: null,
    githubUrl: null,
    image: '/assets/image/lms.png',
    featured: true,
  },
  {
    title: 'Chatbot Kafe Jogja',
    description: [
      'Built an AI-powered café recommendation chatbot for Yogyakarta using React.js, TypeScript, and the Gemini API, featuring a conversational interface deployed on Vercel.',
      'Implemented custom content guardrails, including topic restrictions and profanity filtering, to keep responses relevant and appropriate.',
      'Configured system instructions and model temperature to control conversational behaviour and response output.',
    ],
    tech: ['React.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    liveUrl: null, 
    githubUrl: null,
    image: '/assets/image/chatbot-kafe.png',
    featured: true,
  },
  {
    title: 'SealNote',
    description: [
      'Developed a privacy-focused Android note-taking application using Kotlin and Jetpack Compose, featuring a Stealth Calculator interface and Material Design 3.',
      'Implemented biometric authentication using Android BiometricPrompt, leveraging device-supported fingerprint and face authentication, and configured Google Sign-In using OAuth 2.0.',
      'Integrated Firebase for application data synchronization and media management.',
    ],
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Firebase',
      'OAuth 2.0',
      'Android BiometricPrompt',
      'Material Design 3',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/jonathanwijayaa/SealNote',
    image: '/assets/image/sealnote.png',
    featured: true,
  },
  {
    title: 'AI News Portal',
    description: [
      'Developed a dynamic news aggregator platform using React.js and TypeScript, integrating third-party News APIs to provide updates on AI-related topics.',
      'Built a responsive interface with Tailwind CSS and optimized data fetching to deliver a fast-loading news feed.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'News API', 'Vercel'],
    liveUrl: 'https://ai-news-portal-nine.vercel.app/',
    githubUrl: null,
    image: '/assets/image/ainewsportal.png',
    featured: false,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'TanStack Query', icon: 'https://raw.githubusercontent.com/TanStack/query/main/media/repo-header.png' },
      { name: 'Axios', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg' },
      { name: 'Zustand' },
      { name: 'Context API' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'REST API' },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    ],
  },
]