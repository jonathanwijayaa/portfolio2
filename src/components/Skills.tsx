import { memo } from 'react'
import { skillCategories } from '../data'
import SectionHeader from './ui/SectionHeader'
import TechBadge from './ui/TechBadge'

function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="mb-20 scroll-mt-28 lg:mb-28 lg:scroll-mt-24 max-w-full overflow-hidden">
      <SectionHeader title="Skills" />

      <div className="flex flex-col gap-6 max-w-full">
        {skillCategories.map((group) => {
          const doubledSkills = [...group.skills, ...group.skills]
          return (
            <div key={group.category} className="flex flex-col gap-3 max-w-full overflow-hidden">
              <h3 className="text-xs lg:text-sm font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {group.category}
              </h3>
              <div className="relative w-full max-w-full overflow-hidden mask-edges py-1">
                <div className="animate-marquee-track gap-3">
                  {doubledSkills.map((skill, index) => (
                    <TechBadge key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
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
