import SectionHeader from './SectionHeader'
import GlassCard from './ui/GlassCard'
import { MapPin, Briefcase } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me better"
          align="left"
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <GlassCard className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-gray-400">Years Coding</div>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-gray-400">Projects Built</div>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">18+</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-gray-400">AI Models</div>
          </GlassCard>
        </div>

        <GlassCard hover>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Who I Am</h3>
          </div>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              Hello! I'm <strong className="text-white">Min Htet Kaung Pyae</strong>, a
              passionate Software Engineering student at{' '}
              <strong className="text-white">Mae Fah Luang University</strong> in Thailand.
            </p>
            <p>
              I specialize in building intelligent applications using{' '}
              <strong className="text-primary">Flutter</strong>,{' '}
              <strong className="text-primary">Python</strong>, and{' '}
              <strong className="text-primary">React</strong>. I've developed AI models for
              sentiment analysis and text summarization, both integrated into production apps.
            </p>
            <p>
              Currently <strong className="text-accent">open to job opportunities</strong> where
              I can contribute to innovative projects and grow as a developer.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Mae Fah Luang University, Thailand</span>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
