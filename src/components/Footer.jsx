import { SOCIAL_LINKS } from '../data'
import ScrollReveal from './ScrollReveal'
import { SocialIcon } from '../icons'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <ScrollReveal origin="left" delay={0}>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Min Htet Kaung Pyae. All rights reserved.
          </p>
        </ScrollReveal>

        <ScrollReveal origin="right" delay={100}>
          <div className="flex gap-5">
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 hover:text-blue-400 hover:scale-110 transition-all duration-200"
              >
                <SocialIcon path={path} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
