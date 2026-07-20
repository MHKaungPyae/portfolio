import { useState } from 'react'
import { CERTIFICATIONS } from '../data'
import SectionHeader from './SectionHeader'
import Badge from './ui/Badge'
import { ExternalLink, Code2, Braces, BrainCircuit, Bot, Wrench } from 'lucide-react'
import { CertificateIcon } from '../icons'

const CERT_CATEGORIES = [
  { id: 'all', label: 'All', icon: Code2 },
  { id: 'python', label: 'Python', icon: Braces },
  { id: 'ml', label: 'ML/DL', icon: BrainCircuit },
  { id: 'agents', label: 'AI Agents', icon: Bot },
  { id: 'tools', label: 'Tools', icon: Wrench },
]

function CertCard({ cert }) {
  const [imgError, setImgError] = useState(false)

  return (
    <a
      href={cert.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block glass rounded-2xl overflow-hidden card-hover group"
    >
      {cert.file && !imgError && (
        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900">
          <img
            src={cert.file}
            alt={cert.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      {(!cert.file || imgError) && (
        <div className="w-full aspect-[4/3] bg-gray-900 flex items-center justify-center">
          <CertificateIcon className="w-10 h-10 text-gray-700" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br ${cert.color}`}
          >
            <CertificateIcon className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-white line-clamp-2 flex-1">
            {cert.name}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="outline">Verified</Badge>
          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </a>
  )
}

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCerts = activeCategory === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === activeCategory)

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Certifications"
          subtitle="Professional credentials and achievements"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CERT_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white font-semibold shadow-md shadow-primary/20 scale-105'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-700 shadow-sm font-medium'
                }`}
              >
                <Icon size={15} className={isActive ? 'text-white' : 'text-primary'} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
