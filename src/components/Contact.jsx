import { SOCIAL_LINKS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import { SocialIcon, EmailIcon } from '../icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-xl mx-auto text-center">
        <ScrollReveal>
          <SectionHeader
            title="Get in Touch"
            subtitle="I'm open to job opportunities and collaborations. Feel free to reach out!"
          />
        </ScrollReveal>

        {/* Contact links as glass cards */}
        <ScrollReveal delay={150}>
          <div className="space-y-4 mb-10">
            <a
              href="mailto:mhkp765@gmail.com"
              className="flex items-center gap-3 justify-center px-5 py-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-zinc-800/80 transition-all duration-300 group"
            >
              <EmailIcon className="w-5 h-5" />
              <span className="text-base font-medium">mhkp765@gmail.com</span>
            </a>
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center px-5 py-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-zinc-800/80 transition-all duration-300 group"
              >
                <SocialIcon path={path} className="w-5 h-5" />
                <span className="text-base font-medium">
                  {href.replace(/^https?:\/\/(www\.)?/, '')}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
