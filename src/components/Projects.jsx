import { PROJECTS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import ProjectCarousel from './ui/ProjectCarousel'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="projects" subtitle="List of my projects" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <ProjectCarousel projects={PROJECTS} />
        </ScrollReveal>
      </div>
    </section>
  )
}
