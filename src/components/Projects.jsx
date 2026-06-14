import { PROJECTS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import { GITHUB_PATH } from '../icons'

function ProjectCard({ title, description, tags, color, index, github, extraLinks }) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="group relative bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15">
        {/* Card glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />

        {/* Colored top bar */}
        <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${color} mb-5 -mx-6 -mt-6 relative z-10`} />

        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
          >
            {title[0]}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5 min-h-[60px] relative z-10">
          {description}
        </p>

        {/* Main GitHub link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-3 relative z-10"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d={GITHUB_PATH} />
          </svg>
          Source Code
        </a>

        {/* Extra links */}
        {extraLinks && extraLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3 relative z-10">
            {extraLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-400 hover:text-blue-300 hover:bg-zinc-700 transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-blue-300 group-hover:bg-zinc-700/80 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title="Featured Projects"
            subtitle="Click any project to view its source code on GitHub."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
