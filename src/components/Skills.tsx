import { memo } from 'react'
import { useTheme } from '../ThemeContext'

interface SkillItem {
  name: string
  icon?: string
}

interface SkillCategory {
  category: string
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
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

function Skills() {
  const { C } = useTheme()

  return (
    <section id="skills" aria-label="Skills" className="mb-20 scroll-mt-28 lg:mb-28 lg:scroll-mt-24 max-w-full overflow-hidden">
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: scrollMarquee 25s linear infinite;
          will-change: transform;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      {/* Mobile section label */}
      <div
        className="sticky top-14 z-20 -mx-6 mb-8 px-6 py-4 lg:hidden"
        style={{
          backdropFilter: 'blur(14px)',
          backgroundColor: `${C.bg}cc`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: C.textPrimary }}>
          Skills
        </h2>
      </div>

      <div className="flex flex-col gap-6 max-w-full">
        {skillCategories.map((group) => {
          const doubledSkills = [...group.skills, ...group.skills]
          return (
            <div key={group.category} className="flex flex-col gap-3 max-w-full overflow-hidden">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: C.textMuted }}>
                {group.category}
              </h3>
              <div className="relative w-full max-w-full overflow-hidden mask-edges py-1">
                <div className="animate-marquee-track gap-3">
                  {doubledSkills.map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="inline-flex items-center gap-2 shrink-0 rounded-2xl px-3.5 py-2 text-xs font-mono font-medium transition-colors duration-200 cursor-pointer shadow-sm"
                      style={{
                        backgroundColor: C.surface,
                        color: C.textPrimary,
                        border: `1px solid ${C.border}`,
                      }}
                    >
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                      ) : (
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.accent }} />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default memo(Skills)