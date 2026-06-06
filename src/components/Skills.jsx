import { useState, useEffect } from 'react'
import { SKILLS, CERTIFICATIONS } from '../data'
import SectionHeader from './SectionHeader'
import { ExternalLinkIcon } from '../icons'

function SkillBar({ name, level, color }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Skills & Tools"
          subtitle="Technologies I work with regularly. I'm always exploring new tools and frameworks to stay at the cutting edge."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Certifications highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8" />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {CERTIFICATIONS.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 hover:border-indigo-500 transition-all duration-200 group"
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cert.color} flex-shrink-0 flex items-center justify-center text-white text-xs font-bold`}
                  aria-hidden="true"
                >
                  🏅
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
                  {cert.name}
                </span>
                <ExternalLinkIcon className="w-3.5 h-3.5 ml-auto text-gray-500 group-hover:text-indigo-400 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
