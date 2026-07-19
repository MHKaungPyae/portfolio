import { SOCIAL_LINKS } from '../data'
import SectionHeader from './SectionHeader'
import GlassCard from './ui/GlassCard'
import { SocialIcon } from '../icons'
import { Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard hover>
            <p className="section-label mb-2">Contact Info</p>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              I'm interested in freelance opportunities and collaborative projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mhkp765@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-white">mhkp765@gmail.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-white">Mae Fah Luang University, Thailand</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-3">Follow me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.filter(s => s.label !== 'Gmail').map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all"
                  >
                    <SocialIcon path={path} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
