import { useState } from 'react'
import profileImg from '../assets/profile.jpg'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="about-me" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Text content */}
          <ScrollReveal origin="left" delay={100} className="flex-1">
            <div className="space-y-5 text-[#abb2bf] text-base leading-relaxed">
              <p>
                Hello, I'm{' '}
                <strong className="text-white font-medium">Min Htet Kaung Pyae</strong>!
              </p>
              <p>
                I'm a <strong className="text-white font-medium">Software Engineering</strong> student
                at <strong className="text-white font-medium">Mae Fah Luang University</strong> in
                Thailand. I'm passionate about building intelligent applications and I'm currently{' '}
                <strong className="text-white font-medium">open to job opportunities</strong>.
              </p>
              <p>
                I've developed two AI models — a{' '}
                <strong className="text-white font-medium">sentiment analysis</strong> model and a{' '}
                <strong className="text-white font-medium">text summarization</strong> model — both
                integrated into <strong className="text-white font-medium">TripNest</strong>, an event
                booking app. I also built <strong className="text-white font-medium">Match4U</strong>,
                a dating app with smart matching and real-time messaging.
              </p>
              <p>
                I build with{' '}
                <strong className="text-white font-medium">Flutter</strong>,{' '}
                <strong className="text-white font-medium">Python</strong>,{' '}
                <strong className="text-white font-medium">Dart</strong>, and{' '}
                <strong className="text-white font-medium">React</strong>, and hold multiple
                certificates in AI and Machine Learning.
              </p>

              {/* Read more button */}
              <a
                href="#skills"
                className="inline-block border border-[#C778DD] px-4 py-2 text-white font-medium text-base hover:bg-[#C778DD]/10 transition-colors duration-200 mt-2"
              >
                Read more →
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Profile image with decorative elements */}
          <ScrollReveal origin="right" delay={200} className="lg:w-auto flex-shrink-0">
            <div className="relative">
              {/* Decorative dots top-left */}
              <div className="absolute -top-3 -left-3 opacity-40" aria-hidden="true">
                <DotGridSmall />
              </div>

              {/* Profile image */}
              <div className="relative">
                {/* Border accent behind image */}
                <div className="absolute -inset-1 border border-[#C778DD]/30" />

                {imgError ? (
                  <div className="w-80 h-80 flex items-center justify-center border border-[#abb2bf]/40 text-[#abb2bf]">
                    <span className="text-sm">Photo unavailable</span>
                  </div>
                ) : (
                  <img
                    src={profileImg}
                    alt="Min Htet Kaung Pyae"
                    className="relative w-80 h-80 object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Decorative dots bottom-right */}
              <div className="absolute -bottom-3 -right-3 opacity-40" aria-hidden="true">
                <DotGridSmall />
              </div>
            </div>

            {/* Bottom line decoration */}
            <div className="mt-6 w-full h-px bg-[#abb2bf]/30" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/** Small 5x5 decorative dot grid */
function DotGridSmall() {
  return (
    <div className="dot-grid" style={{ width: 84, height: 84 }} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, r) => (
        <div key={r} className="dot-grid-row">
          {Array.from({ length: 5 }).map((_, c) => (
            <div key={c} className="dot-grid-dot" />
          ))}
        </div>
      ))}
    </div>
  )
}
