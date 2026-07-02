import { CERTIFICATIONS } from '../data'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import { ExternalLinkIcon, CertificateIcon } from '../icons'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frameworks',
    skills: ['Flutter', 'React', 'Node.js', 'Express', 'Flask'],
  },
  {
    category: 'AI / ML',
    skills: ['TensorFlow', 'NLP', 'Sentiment Analysis', 'Text Summarization', 'Transformers'],
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'Linux', 'VS Code', 'Figma', 'REST APIs'],
  },
]

function SkillGroup({ category, skills }) {
  return (
    <div className="border border-[#abb2bf]/40 p-4 flex flex-col gap-3">
      <h3 className="text-base font-semibold text-white px-2">{category}</h3>
      <div className="w-full h-px bg-[#abb2bf]/30" />
      <div className="flex flex-wrap gap-2 px-2">
        {skills.map((skill) => (
          <span key={skill} className="text-base text-[#abb2bf] whitespace-nowrap">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeader title="skills" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_GROUPS.map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-20">
          <ScrollReveal>
            <SectionHeader title="certifications" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="cert-carousel flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {CERTIFICATIONS.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card group flex-shrink-0 w-64 snap-start border border-[#abb2bf]/40 hover:border-[#c778dd]/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${cert.color}`}
                    aria-hidden="true"
                  >
                    <CertificateIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#abb2bf] group-hover:text-white transition-colors leading-snug line-clamp-2">
                    {cert.name}
                  </span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-[#abb2bf] group-hover:text-[#c778dd] mt-auto" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
