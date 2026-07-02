import { SOCIAL_LINKS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import { SocialIcon } from '../icons'

export default function Contact() {
  const socialColors = {
    GitHub: { bg: '#333', shadow: 'rgba(51, 51, 51, 0.6)' },
    LinkedIn: { bg: '#0077b5', shadow: 'rgba(0, 119, 181, 0.6)' },
    Facebook: { bg: '#1877f2', shadow: 'rgba(24, 119, 242, 0.6)' },
    Gmail: { bg: '#ea4335', shadow: 'rgba(234, 67, 53, 0.6)' },
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="contacts" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-[#abb2bf] text-base font-medium leading-relaxed mb-12">
            I'm interested in freelance opportunities. However, if you have other request
            or question, don't hesitate to contact me.
          </p>
        </ScrollReveal>

        {/* Social links with glowing icons */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-8">
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target={label === 'Gmail' ? undefined : '_blank'}
                rel={label === 'Gmail' ? undefined : 'noopener noreferrer'}
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
