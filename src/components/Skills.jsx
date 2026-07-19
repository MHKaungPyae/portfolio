import SectionHeader from './SectionHeader'
import { Code2, Smartphone, Cpu, Cloud } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    icon: Code2,
    skills: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frameworks',
    icon: Smartphone,
    skills: ['Flutter', 'React', 'Node.js', 'Flask'],
  },
  {
    label: 'AI / ML',
    icon: Cpu,
    skills: ['TensorFlow', 'PyTorch', 'NLP', 'Transformers'],
  },
  {
    label: 'Tools',
    icon: Cloud,
    skills: ['Git', 'Linux', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Skills & Tech Stack"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.label} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={16} className="text-primary" />
                  <h3 className="text-sm font-semibold text-white">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
