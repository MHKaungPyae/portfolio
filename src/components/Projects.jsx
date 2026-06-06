import { PROJECTS } from '../data'
import SectionHeader from './SectionHeader'
import { GITHUB_PATH } from '../icons'

function ProjectCard({ title, description, tags, color, index, github, extraLinks }) {
  return (
    <div
      className="group relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Colored top bar */}
      <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${color} mb-5 -mx-6 -mt-6`} />

      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg`}
        >
          {title[0]}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-5 min-h-[60px]">
        {description}
      </p>

      {/* Main GitHub link */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mb-3"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d={GITHUB_PATH} />
        </svg>
        Source Code
      </a>

      {/* Extra links */}
      {extraLinks && extraLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {extraLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-lg bg-gray-800 text-gray-400 hover:text-indigo-300 hover:bg-gray-700 transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-800 text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Click any project to view its source code on GitHub."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
