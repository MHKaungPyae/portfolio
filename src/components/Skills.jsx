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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {CERTIFICATIONS.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={50 + i * 30}>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 border border-[#abb2bf]/40 hover:border-[#c778dd]/40 transition-all duration-200 group"
                >
                  <div
                    className={`w-8 h-8 flex-shrink-0 rounded flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${cert.color}`}
                    aria-hidden="true"
                  >
                    <CertificateIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-normal text-[#abb2bf] group-hover:text-white transition-colors leading-snug">
                    {cert.name}
                  </span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 ml-auto text-[#abb2bf] group-hover:text-[#c778dd] flex-shrink-0" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
