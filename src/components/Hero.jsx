import { SOCIAL_LINKS } from '../data'
import { SocialIcon, ScrollArrow } from '../icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Animated ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none animate-[floatBlob_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] pointer-events-none animate-[floatBlob_16s_ease-in-out_infinite_2s]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-[gradientShift_10s_ease_infinite] bg-[length:200%_200%]" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-blue-400 font-semibold tracking-[0.2em] text-sm mb-5 animate-[fadeIn_0.6s_ease-out]">
          HELLO, I'M
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-[fadeIn_0.8s_ease-out]">
          Min Htet{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Kaung Pyae
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-10 animate-[fadeIn_1s_ease-out] leading-relaxed">
          Software Engineering Student at Mae Fah Luang University &middot; AI/ML Enthusiast &middot; Flutter & Python Developer
        </p>

        {/* Social links in hero */}
        <div className="flex justify-center gap-6 mb-10 animate-[fadeIn_1.1s_ease-out]">
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 hover:text-blue-400 hover:scale-110 transition-all duration-200"
            >
              <SocialIcon path={path} className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-[fadeIn_1.2s_ease-out]">
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold transition-all duration-300 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <span className="relative z-10">See My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeIn_1.5s_ease-out]">
        <div className="animate-bounce">
          <ScrollArrow />
        </div>
      </div>
    </section>
  )
}
