import { SOCIAL_LINKS } from '../data'
import SectionHeader from './SectionHeader'
import { SocialIcon, EmailIcon } from '../icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-xl mx-auto text-center">
        <SectionHeader
          title="Get in Touch"
          subtitle="I'm open to job opportunities and collaborations. Feel free to reach out!"
        />

        {/* Contact links */}
        <div className="space-y-4 mb-10">
          <a
            href="mailto:mhkp765@gmail.com"
            className="flex items-center gap-3 justify-center text-gray-400 hover:text-indigo-400 transition-colors group"
          >
            <EmailIcon className="w-5 h-5" />
            <span className="text-base">mhkp765@gmail.com</span>
          </a>
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center text-gray-400 hover:text-indigo-400 transition-colors group"
            >
              <SocialIcon path={path} className="w-5 h-5" />
              <span className="text-base">
                {href.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
