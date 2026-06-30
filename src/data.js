export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  { name: 'Flutter', level: 85, color: '#02569B' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'React', level: 75, color: '#61DAFB' },
  { name: 'Machine Learning', level: 75, color: '#FF6F00' },
  { name: 'Dart', level: 80, color: '#0175C2' },
]

export const PROJECTS = [
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
    title: 'Medical Citation Chatbot',
    description:
      'A generative RAG chatbot that retrieves live data from Wikipedia and OpenFDA, feeds it to a local Ollama LLM, and streams token-by-token cited responses with clickable inline citations to a React frontend.',
    tags: ['TypeScript', 'Python', 'FastAPI', 'Ollama', 'Supabase', 'Next.js', 'RAG'],
    color: 'from-violet-500 to-purple-700',
    github: 'https://github.com/MHKaungPyae/Medical_Citation_Chatbot',
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

export const CERTIFICATIONS = [
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    href: 'https://www.coursera.org/account/accomplishments/records/39Z2J8HX6EXW',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Python Data Structures',
    href: 'https://www.coursera.org/account/accomplishments/records/NF27HVFWJSS9',
    color: 'from-violet-500 to-purple-600',
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
  {
    name: 'Using Python to Access Web Data',
    href: 'https://www.coursera.org/account/accomplishments/records/EVP26RPZ8BEG',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Introduction to Subagents',
    href: 'https://verify.skilljar.com/c/v9rdfcnv32kg',
    color: 'from-teal-500 to-green-600',
  },
  {
    name: 'Claude 101',
    href: 'https://verify.skilljar.com/c/inwj6o2h6943',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Claude Code 101',
    href: 'https://verify.skilljar.com/c/imrn5b37nis4',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'Introduction to Agent Skills',
    href: 'https://verify.skilljar.com/c/t42oq8g6qeep',
    color: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Introduction to Model Context Protocol',
    href: 'https://verify.skilljar.com/c/a2u7dqaijdij',
    color: 'from-cyan-500 to-blue-600',
  },
]

export const SOCIAL_LINKS = [
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
