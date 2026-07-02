import { SOCIAL_LINKS } from '../data'
import { SocialIcon, ScrollArrow } from '../icons'
import { Meteors } from '@/components/ui/meteors'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-8 px-6 overflow-hidden"
    >
      {/* Meteor background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={20} />
      </div>
      {/* Decorative elements — subtle dot patterns */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 hidden lg:block opacity-5">
        <DotGrid rows={5} cols={5} size={84} />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text content */}
          <div className="flex-1">
            {/* Heading with purple highlights */}
            <h1 className="text-4xl sm:text-5xl lg:text-[32px] font-semibold text-white leading-tight mb-6">
              Min Htet{' '}
              <span className="text-[#C778DD]">Kaung Pyae</span>
              <br />
              <span className="text-[#C778DD]">Software Engineering</span> student
            </h1>

            <p className="text-[#abb2bf] text-base leading-relaxed max-w-lg mb-8">
              AI/ML Enthusiast &middot; Flutter & Python Developer &middot; Building
              intelligent applications from scratch
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="border border-[#C778DD] px-4 py-2 text-white font-medium text-base hover:bg-[#C778DD]/10 transition-colors duration-200"
              >
                Contact me!!
              </a>
              <a
                href="#projects"
                className="border border-[#abb2bf] px-4 py-2 text-[#abb2bf] font-medium text-base hover:text-white hover:border-white transition-colors duration-200"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Decorative image area (right side on desktop) */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            {/* Large decorative logo/dots */}
            <div className="w-40 h-40 border border-[#abb2bf]/30 relative">
              <div className="absolute -top-3 -right-3">
                <DotGrid rows={5} cols={5} size={84} />
              </div>
            </div>
          </div>
        </div>

        {/* Quote block */}
        <div className="relative max-w-2xl border border-[#abb2bf]/40 p-8 mb-8">
          {/* Top left quote mark */}
          <span className="absolute -top-4 left-3 text-5xl text-[#abb2bf] leading-none select-none">
            &ldquo;
          </span>
          <p className="text-2xl font-medium text-white text-center px-8">
            Building the future, one line of code at a time
          </p>
          <span className="absolute -bottom-4 right-3 text-5xl text-[#abb2bf] leading-none select-none">
            &rdquo;
          </span>

          {/* Attribution */}
          <div className="absolute -bottom-4 right-12 border border-[#abb2bf]/40 px-4 py-2 bg-[#282C33]">
            <span className="text-2xl text-white">- MHKP</span>
          </div>
        </div>
      </div>

      {/* Mobile social links (visible only on small screens) */}
      <div className="flex justify-center gap-6 mt-8 lg:hidden">
        {SOCIAL_LINKS.map(({ label, href, path }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#abb2bf] hover:text-white transition-colors"
          >
            <SocialIcon path={path} className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <ScrollArrow />
        </div>
      </div>
    </section>
  )
}

/** Small decorative 5x5 dot grid (Figma-inspired) */
function DotGrid({ rows = 5, cols = 5, size = 84 }) {
  return (
    <div
      className="dot-grid"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="dot-grid-row">
          {Array.from({ length: cols }).map((_, c) => (
            <div key={c} className="dot-grid-dot" />
          ))}
        </div>
      ))}
    </div>
  )
}
