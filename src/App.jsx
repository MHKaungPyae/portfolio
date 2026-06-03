import { useState, useEffect } from 'react'
import profileImg from './assets/profile.jpg'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = [
  { name: 'Flutter', level: 85, color: '#02569B' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'React', level: 75, color: '#61DAFB' },
  { name: 'Machine Learning', level: 75, color: '#FF6F00' },
  { name: 'Dart', level: 80, color: '#0175C2' },
  { name: 'Firebase', level: 70, color: '#FFCA28' },
]

const PROJECTS = [
  {
    title: 'TripNest',
    description:
      'An event booking app featuring AI-powered sentiment analysis and text summarization models, plus an integrated chatbot for seamless user assistance.',
    tags: ['Flutter', 'Python', 'AI/ML', 'Chatbot', 'NLP'],
    color: 'from-emerald-500 to-teal-700',
    github: 'https://github.com/linmyatoo/TripNest_user',
    extraLinks: [
      { label: 'Admin Panel', href: 'https://github.com/linmyatoo/TripNest_admin' },
      { label: 'Summarization Model', href: 'https://github.com/MHKaungPyae/Review-Summarization' },
      { label: 'Sentiment Analysis', href: 'https://github.com/MHKaungPyae/Sentiment-analysis' },
    ],
  },
  {
    title: 'Match4U',
    description:
      'A dating app with intelligent matching algorithms, real-time messaging, and a modern, intuitive user interface built for meaningful connections.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    color: 'from-rose-500 to-pink-700',
    github: 'https://github.com/MHKaungPyae/MatchForU',
  },
  {
    title: 'Review Summarization',
    description:
      'An NLP model that automatically summarizes user reviews using advanced text summarization techniques, integrated into the TripNest platform.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Transformers'],
    color: 'from-cyan-500 to-blue-700',
    github: 'https://github.com/MHKaungPyae/Review-Summarization',
  },
  {
    title: 'Sentiment Analysis',
    description:
      'An AI model that classifies user sentiment from text data, powering intelligent insights within the TripNest event booking ecosystem.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Sentiment'],
    color: 'from-amber-500 to-yellow-700',
    github: 'https://github.com/MHKaungPyae/Sentiment-analysis',
  },
]

const CERTIFICATIONS = [
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    href: 'https://www.coursera.org/account/accomplishments/records/39Z2J8HX6EXW',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'LFS101: Introduction to Linux',
    href: 'https://www.credly.com/badges/31865e89-fed6-433c-9972-0cf849c1a128/linked_in_profile',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    name: 'Natural Language Processing with Classification and Vector Spaces',
    href: 'https://www.coursera.org/account/accomplishments/records/61G4KD6SN3AX',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Sequence Models',
    href: 'https://www.coursera.org/account/accomplishments/records/HFTY2KWU2QDT',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'AI Fluency Framework & Foundations',
    href: 'https://verify.skilljar.com/c/owz23647zxip',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Structuring Machine Learning Projects',
    href: 'https://www.coursera.org/account/accomplishments/records/XZKQC2K3DSZY',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Improving Deep Neural Networks',
    href: 'https://www.coursera.org/account/accomplishments/verify/8JC9DJGQM891',
    color: 'from-red-500 to-pink-600',
  },
  {
    name: 'Neural Networks and Deep Learning',
    href: 'https://www.coursera.org/account/accomplishments/records/E2X0YU1UU02O',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    name: 'Machine Learning',
    href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KH2XWHB2JD15',
    color: 'from-orange-500 to-amber-600',
  },
  {
    name: 'Advanced Learning Algorithms',
    href: 'https://www.coursera.org/account/accomplishments/records/B5L8ZFLB4EA2',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    href: 'https://www.coursera.org/account/accomplishments/verify/I23R5R3OTXU1',
    color: 'from-lime-500 to-green-600',
  },
]

/* ─── Social links used in footer and contact ─── */
const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/MHKaungPyae',
    path: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mh-kaung-pyae',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/PandaHasNothingToSay',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/85 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          MHKP
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <ul className="flex flex-col gap-2 px-6 py-4 text-sm font-medium text-gray-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-indigo-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-indigo-400 font-medium tracking-widest text-sm mb-4 animate-[fadeIn_0.6s_ease-out]">
          HELLO, I'M
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-[fadeIn_0.8s_ease-out]">
          Min Htet Kaung Pyae
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-8 animate-[fadeIn_1s_ease-out]">
          Software Engineering Student at Mae Fah Luang University | AI/ML Enthusiast | Flutter & Python Developer
        </p>

        {/* Social links in hero */}
        <div className="flex justify-center gap-5 mb-8 animate-[fadeIn_1.1s_ease-out]">
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-[fadeIn_1.2s_ease-out]">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-600/25"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Avatar placeholder */}
          <div className="flex justify-center pt-2">
            <img
              src={profileImg}
              alt="Min Htet Kaung Pyae"
              className="w-80 h-80 rounded-2xl object-cover shadow-2xl shadow-indigo-600/20"
            />
          </div>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              I'm <strong className="text-white">Min Htet Kaung Pyae</strong>, a{' '}
              <strong className="text-white">Software Engineering</strong> student at{' '}
              <strong className="text-white">Mae Fah Luang University</strong> in Thailand.
              I'm passionate about building intelligent applications and I'm currently
              <strong className="text-white"> open to job opportunities</strong>.
            </p>
            <p>
              I've developed two AI models — a <strong className="text-white">sentiment analysis</strong> model and a{' '}
              <strong className="text-white">text summarization</strong> model — both integrated into{' '}
              <strong className="text-white">TripNest</strong>, an event booking app that also features
              an AI-powered chatbot. I also built <strong className="text-white">Match4U</strong>,
              a dating app with smart matching and real-time messaging.
            </p>
            <p>
              I build with <strong className="text-white">Flutter</strong>,{' '}
              <strong className="text-white">Python</strong>,{' '}
              <strong className="text-white">Dart</strong>, and <strong className="text-white">React</strong>,
              and I hold multiple certificates in{' '}
              <strong className="text-white">AI and Machine Learning</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {['Flutter', 'Python', 'Machine Learning', 'Dart', 'React', 'Firebase', 'NLP'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800 text-indigo-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level, color }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Skills & Tools
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-12" />
        <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
          Technologies I work with regularly. I'm always exploring new tools and
          frameworks to stay at the cutting edge.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Certifications highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8" />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {CERTIFICATIONS.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 hover:border-indigo-500 transition-all duration-200 group"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cert.color} flex-shrink-0 flex items-center justify-center text-white text-xs font-bold`}>
                  🏅
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
                  {cert.name}
                </span>
                <svg className="w-3.5 h-3.5 ml-auto text-gray-500 group-hover:text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tags, color, index, github, extraLinks }) {
  return (
    <div
      className="group relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Colored top bar */}
      <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${color} mb-5 -mx-6 -mt-6`} />

      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg`}
        >
          {title[0]}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-5 min-h-[60px]">
        {description}
      </p>

      {/* Main GitHub link */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mb-3"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        Source Code
      </a>

      {/* Extra links */}
      {extraLinks && extraLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {extraLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-lg bg-gray-800 text-gray-400 hover:text-indigo-300 hover:bg-gray-750 transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-800 text-indigo-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-12" />
        <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
          Click any project to view its source code on GitHub.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-12" />
        <p className="text-gray-400 mb-8">
          I'm open to job opportunities and collaborations. Feel free to reach out!
        </p>

        {/* Contact links */}
        <div className="space-y-4 mb-10">
          <a
            href="mailto:mhkp765@gmail.com"
            className="flex items-center gap-3 justify-center text-gray-400 hover:text-indigo-400 transition-colors group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-base">mhkp765@gmail.com</span>
          </a>
          <a
            href="https://github.com/MHKaungPyae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center text-gray-400 hover:text-indigo-400 transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-base">github.com/MHKaungPyae</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mh-kaung-pyae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center text-gray-400 hover:text-indigo-400 transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-base">linkedin.com/in/mh-kaung-pyae</span>
          </a>
          <a
            href="https://www.facebook.com/PandaHasNothingToSay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center text-gray-400 hover:text-indigo-400 transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-base">facebook.com/PandaHasNothingToSay</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Min Htet Kaung Pyae. All rights reserved.
        </p>

        <div className="flex gap-5">
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
