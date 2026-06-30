import { SOCIAL_LINKS } from '../data'
import ScrollReveal from './ScrollReveal'
import { SocialIcon } from '../icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal separator */}
        <div className="w-full h-px bg-[#abb2bf]/30 mb-12" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left: Logo + email + role */}
          <ScrollReveal origin="left" delay={0}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#C778DD] font-bold text-base">#</span>
                  <span className="text-white font-medium text-base">MHKP</span>
                </div>
                <a
                  href="mailto:mhkp765@gmail.com"
                  className="text-base text-[#abb2bf] hover:text-white transition-colors"
                >
                  mhkp765@gmail.com
                </a>
              </div>
              <p className="text-base text-white">
                Software Engineering Student & Developer
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Media links */}
          <ScrollReveal origin="right" delay={100}>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-medium text-white">Media</h3>
              <div className="flex gap-10">
                {SOCIAL_LINKS.map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#abb2bf] hover:text-white transition-colors"
                  >
                    <SocialIcon path={path} className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Copyright */}
        <ScrollReveal delay={200}>
          <p className="mt-12 text-base text-[#abb2bf] text-center md:text-left">
            © Copyright {year}. Made by Min Htet Kaung Pyae
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
