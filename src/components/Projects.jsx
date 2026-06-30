import { useState, useEffect } from 'react'
import { PROJECTS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import InteractiveFolderGallery from './ui/interactive-folder-gallery'

export default function Projects() {
  const [useGallery, setUseGallery] = useState(true)
  const [hasMotion, setHasMotion] = useState(true)

  // Graceful fallback — if framer-motion fails to load, switch to grid cards
  useEffect(() => {
    try {
      // Verify motion is available
      if (typeof window !== 'undefined') {
        setHasMotion(true)
      }
    } catch {
      setHasMotion(false)
      setUseGallery(false)
    }
  }, [])

  // Fallback: static bordered grid (no framer-motion needed)
  if (!hasMotion || !useGallery) {
    return (
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader title="projects" subtitle="List of my projects" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <div className="border border-[#abb2bf]/40 flex flex-col group">
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[#282C33]" />
                    <div className="absolute bottom-2 left-2 text-xs text-white/60">
                      {project.title}.png
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 p-2 border-b border-[#abb2bf]/40">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-base text-[#abb2bf] font-normal">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 p-4 flex-1">
                    <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                    <p className="text-base text-[#abb2bf] leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#C778DD] px-4 py-2 text-white font-medium text-base hover:bg-[#C778DD]/10 transition-colors"
                      >
                        {'Live <~>'}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Main: interactive folder gallery
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="projects" subtitle="Click folder to open — drag cards to close" />
        </ScrollReveal>

        <InteractiveFolderGallery
          projects={PROJECTS}
          folderName="Projects.folder"
          dragHintText="Drag any card down to close"
        />
      </div>
    </section>
  )
}
