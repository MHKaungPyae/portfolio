import { useState } from 'react'
import profileImg from '../assets/profile.jpg'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="About Me" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Avatar */}
          <ScrollReveal origin="left" delay={100}>
            <div className="flex justify-center pt-2">
              {imgError ? (
                <div className="w-80 h-80 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-500">
                  <span className="text-sm">Photo unavailable</span>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-sm opacity-70" />
                  <img
                    src={profileImg}
                    alt="Min Htet Kaung Pyae"
                    className="relative w-80 h-80 rounded-2xl object-cover shadow-2xl shadow-blue-600/20"
                    onError={() => setImgError(true)}
                  />
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal origin="right" delay={200}>
            <div className="space-y-5 text-zinc-400 leading-relaxed text-justify">
              <p>
                I'm <strong className="text-white">Min Htet Kaung Pyae</strong>, a{' '}
                <strong className="text-white">Software Engineering</strong> student at{' '}
                <strong className="text-white">Mae Fah Luang University</strong> in Thailand.
                I'm passionate about building intelligent applications and I'm currently
                <strong className="text-white"> open to job opportunities</strong>.
              </p>
              <p>
                I've developed two AI models — a <strong className="text-white">sentiment analysis</strong> model and a{' '}
                <strong className="text-white">text summarization</strong> model — both integrated into{' '}
                <strong className="text-white">TripNest</strong>, an event booking app that also features
                an AI-powered chatbot. I also built <strong className="text-white">Match4U</strong>,
                a dating app with smart matching and real-time messaging.
              </p>
              <p>
                I build with <strong className="text-white">Flutter</strong>,{' '}
                <strong className="text-white">Python</strong>,{' '}
                <strong className="text-white">Dart</strong>, and <strong className="text-white">React</strong>,
                and I hold multiple certificates in{' '}
                <strong className="text-white">AI and Machine Learning</strong>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Flutter', 'Python', 'Machine Learning', 'Dart', 'React', 'NLP'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/80 text-blue-300 border border-zinc-700 hover:border-blue-500/40 hover:bg-zinc-800 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
