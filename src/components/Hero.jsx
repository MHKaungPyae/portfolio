import { SOCIAL_LINKS } from '../data'
import { SocialIcon, ScrollArrow } from '../icons'
import Button from './ui/Button'
import profileImg from '../assets/profile.jpg'
import { useState } from 'react'
import { Download } from 'lucide-react'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="section-label mb-4">
              Hi, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Min Htet </span>
              <span className="gradient-text">Kaung Pyae</span>
            </h1>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                AI/ML
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                Flutter
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Python
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                React
              </span>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Building intelligent systems & scalable solutions. Passionate about{' '}
              <span className="text-primary font-semibold">AI & Machine Learning</span>,{' '}
              <span className="text-accent font-semibold">Flutter Development</span>, and creating
              applications that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="#projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact Me
              </Button>
              <Button href="/resume.pdf" variant="outline" size="lg" download icon={<Download className="w-5 h-5" />}>
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile photo */}
          <div className="relative flex-shrink-0">
            {/* Background gradient blurs */}
            <div className="absolute -inset-8 bg-primary/10 rounded-3xl blur-3xl hidden lg:block" />
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl hidden lg:block" />

            {/* Photo frame */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden ring-1 ring-gray-800 shadow-2xl">
              {imgError ? (
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">MHKP</span>
                </div>
              ) : (
                <img
                  src={profileImg}
                  alt="Min Htet Kaung Pyae"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full opacity-60" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent rounded-full opacity-60" />
          </div>
        </div>
      </div>

      {/* Mobile social links */}
      <div className="flex justify-center gap-6 mt-8 lg:hidden absolute bottom-20 left-0 right-0">
        {SOCIAL_LINKS.map(({ label, href, path }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <SocialIcon path={path} className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-slate-400">
          <ScrollArrow />
        </div>
      </div>
    </section>
  )
}
