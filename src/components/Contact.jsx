import { SOCIAL_LINKS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import { SocialIcon, EmailIcon } from '../icons'

export default function Contact() {
  const socialColors = {
    GitHub: { bg: '#333', shadow: 'rgba(51, 51, 51, 0.6)' },
    LinkedIn: { bg: '#0077b5', shadow: 'rgba(0, 119, 181, 0.6)' },
    Facebook: { bg: '#1877f2', shadow: 'rgba(24, 119, 242, 0.6)' },
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="contacts" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left: Description text */}
          <ScrollReveal origin="left" delay={100}>
            <p className="text-[#abb2bf] text-base font-medium max-w-md leading-relaxed">
              I'm interested in freelance opportunities. However, if you have other request
              or question, don't hesitate to contact me.
            </p>
          </ScrollReveal>

          {/* Right: Message me here box */}
          <ScrollReveal origin="right" delay={200}>
            <div className="border border-[#abb2bf]/40 p-4 flex flex-col gap-4 min-w-[280px]">
              <h3 className="text-base font-semibold text-white">
                Message me here
              </h3>

              <div className="flex flex-col gap-3">
                {/* Email */}
                <a
                  href="mailto:mhkp765@gmail.com"
                  className="flex items-center gap-2 text-[#abb2bf] hover:text-white transition-colors"
                >
                  <EmailIcon className="w-8 h-8" />
                  <span className="text-base">mhkp765@gmail.com</span>
                </a>

                {/* GitHub */}
                <a
                  href={SOCIAL_LINKS[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#abb2bf] hover:text-white transition-colors"
                >
                  <SocialIcon path={SOCIAL_LINKS[0].path} className="w-8 h-8" />
                  <span className="text-base">MHKaungPyae</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Social links with glowing icons */}
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ '--hover-bg': socialColors[label]?.bg, '--hover-shadow': socialColors[label]?.shadow }}
              >
                <div className="icon-container">
                  <SocialIcon path={path} className="h-8 w-8 text-white" />
                </div>
                <span className="icon-label">{label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
