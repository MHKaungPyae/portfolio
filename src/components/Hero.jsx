import { SOCIAL_LINKS } from '../data'
import { SocialIcon, ScrollArrow } from '../icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-indigo-400 font-medium tracking-widest text-sm mb-4 animate-[fadeIn_0.6s_ease-out]">
          HELLO, I'M
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-[fadeIn_0.8s_ease-out]">
          Min Htet Kaung Pyae
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-8 animate-[fadeIn_1s_ease-out]">
          Software Engineering Student at Mae Fah Luang University | AI/ML Enthusiast | Flutter & Python Developer
        </p>

        {/* Social links in hero */}
        <div className="flex justify-center gap-5 mb-8 animate-[fadeIn_1.1s_ease-out]">
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
            >
              <SocialIcon path={path} className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-[fadeIn_1.2s_ease-out]">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-600/25"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ScrollArrow />
      </div>
    </section>
  )
}
