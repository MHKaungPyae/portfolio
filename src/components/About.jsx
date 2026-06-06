import { useState } from 'react'
import profileImg from '../assets/profile.jpg'
import SectionHeader from './SectionHeader'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Avatar */}
          <div className="flex justify-center pt-2">
            {imgError ? (
              <div className="w-80 h-80 rounded-2xl bg-gray-800 flex items-center justify-center text-gray-500">
                <span className="text-sm">Photo unavailable</span>
              </div>
            ) : (
              <img
                src={profileImg}
                alt="Min Htet Kaung Pyae"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl shadow-indigo-600/20"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="space-y-5 text-gray-400 leading-relaxed text-justify">
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

            <div className="flex flex-wrap gap-4 pt-2">
              {['Flutter', 'Python', 'Machine Learning', 'Dart', 'React', 'NLP'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800 text-indigo-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
