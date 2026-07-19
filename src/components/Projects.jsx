import { PROJECTS } from '../data'
import SectionHeader from './SectionHeader'
import ProjectCarousel from './ui/ProjectCarousel'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="Things I've built"
        />
        <ProjectCarousel projects={PROJECTS} />
      </div>
    </section>
  )
}
