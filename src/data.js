import { GITHUB_PATH } from './icons'

export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS = [
  {
    title: 'TripNest (User App)',
    description:
      'An event booking app featuring AI-powered sentiment analysis and text summarization models, plus an integrated chatbot for seamless user assistance.',
    tags: ['Flutter', 'Python', 'AI/ML', 'Chatbot', 'NLP'],
    color: 'from-emerald-500 to-teal-700',
    image: '/images/projects/tripnest-user.png',
    github: 'https://github.com/linmyatoo/TripNest_user',
  },
  {
    title: 'TripNest (Creator App)',
    description:
      'Creator dashboard for managing events, bookings, and user data for the TripNest event booking platform.',
    tags: ['Flutter', 'Firebase', 'Admin Dashboard'],
    color: 'from-green-500 to-emerald-700',
    image: '/images/projects/tripnest-admin.png',
    github: 'https://github.com/linmyatoo/TripNest_admin',
  },
  {
    title: 'Medical Citation Chatbot',
    description:
      'A generative RAG chatbot that retrieves live data from Wikipedia and OpenFDA, feeds it to a local Ollama LLM, and streams token-by-token cited responses with clickable inline citations to a React frontend.',
    tags: ['TypeScript', 'Python', 'FastAPI', 'Ollama', 'Supabase', 'Next.js', 'RAG'],
    color: 'from-violet-500 to-purple-700',
    image: '/images/projects/medical-citation-chatbot.png',
    github: 'https://github.com/MHKaungPyae/Medical_Citation_Chatbot',
  },
  {
    title: 'Review Summarization',
    description:
      'An NLP model that automatically summarizes user reviews using advanced text summarization techniques, integrated into the TripNest platform.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Transformers'],
    color: 'from-cyan-500 to-blue-700',
    image: '/images/projects/portfolio_comparison_1.png',
    github: 'https://github.com/MHKaungPyae/Review_Summarization',
  },
  {
    title: 'Sentiment Analysis',
    description:
      'An AI model that classifies user sentiment from text data, powering intelligent insights within the TripNest event booking ecosystem.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Sentiment'],
    color: 'from-amber-500 to-yellow-700',
    image: '/images/projects/confusion_matrix.png',
    github: 'https://github.com/MHKaungPyae/Sentiment_Analysis',
  },
]

export const CERTIFICATIONS = [
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    href: 'https://www.coursera.org/account/accomplishments/records/39Z2J8HX6EXW',
    file: '/certificates/programming-for-everybody-python.png',
    color: 'from-blue-500 to-cyan-600',
    category: 'python',
  },
  {
    name: 'Python Data Structures',
    href: 'https://www.coursera.org/account/accomplishments/records/NF27HVFWJSS9',
    file: '/certificates/python-data-structures.png',
    color: 'from-violet-500 to-purple-600',
    category: 'python',
  },
  {
    name: 'Using Python to Access Web Data',
    href: 'https://www.coursera.org/account/accomplishments/records/EVP26RPZ8BEG',
    file: '/certificates/python-web-data.png',
    color: 'from-blue-500 to-indigo-600',
    category: 'python',
  },
  {
    name: 'LFS101: Introduction to Linux',
    href: 'https://www.credly.com/badges/31865e89-fed6-433c-9972-0cf849c1a128/linked_in_profile',
    file: '/certificates/introduction-to-linux.png',
    color: 'from-yellow-500 to-orange-600',
    category: 'tools',
  },
  {
    name: 'Natural Language Processing with Classification and Vector Spaces',
    href: 'https://www.coursera.org/account/accomplishments/records/61G4KD6SN3AX',
    file: '/certificates/nlp-classification-vector-spaces.png',
    color: 'from-green-500 to-emerald-600',
    category: 'ml',
  },
  {
    name: 'Sequence Models',
    href: 'https://www.coursera.org/account/accomplishments/records/HFTY2KWU2QDT',
    file: '/certificates/sequence-models.png',
    color: 'from-purple-500 to-violet-600',
    category: 'ml',
  },
  {
    name: 'Structuring Machine Learning Projects',
    href: 'https://www.coursera.org/account/accomplishments/records/XZKQC2K3DSZY',
    file: '/certificates/structuring-ml-projects.png',
    color: 'from-indigo-500 to-blue-600',
    category: 'ml',
  },
  {
    name: 'Improving Deep Neural Networks',
    href: 'https://www.coursera.org/account/accomplishments/verify/8JC9DJGQM891',
    file: '/certificates/improving-deep-neural-networks.png',
    color: 'from-red-500 to-pink-600',
    category: 'ml',
  },
  {
    name: 'Neural Networks and Deep Learning',
    href: 'https://www.coursera.org/account/accomplishments/records/E2X0YU1UU02O',
    file: '/certificates/neural-networks-deep-learning.png',
    color: 'from-teal-500 to-cyan-600',
    category: 'ml',
  },
  {
    name: 'Machine Learning',
    href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KH2XWHB2JD15',
    file: '/certificates/machine-learning.png',
    color: 'from-orange-500 to-amber-600',
    category: 'ml',
  },
  {
    name: 'Advanced Learning Algorithms',
    href: 'https://www.coursera.org/account/accomplishments/records/B5L8ZFLB4EA2',
    file: '/certificates/advanced-learning-algorithms.png',
    color: 'from-sky-500 to-blue-600',
    category: 'ml',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    href: 'https://www.coursera.org/account/accomplishments/verify/I23R5R3OTXU1',
    file: '/certificates/supervised-ml-regression-classification.png',
    color: 'from-lime-500 to-green-600',
    category: 'ml',
  },
  {
    name: 'AI Fluency Framework & Foundations',
    href: 'https://verify.skilljar.com/c/owz23647zxip',
    file: '/certificates/ai-fluency-framework-foundations.png',
    color: 'from-pink-500 to-rose-600',
    category: 'agents',
  },
  {
    name: 'Introduction to Subagents',
    href: 'https://verify.skilljar.com/c/v9rdfcnv32kg',
    file: '/certificates/introduction-to-subagents.png',
    color: 'from-teal-500 to-green-600',
    category: 'agents',
  },
  {
    name: 'Claude 101',
    href: 'https://verify.skilljar.com/c/inwj6o2h6943',
    file: '/certificates/claude-101.png',
    color: 'from-amber-500 to-orange-600',
    category: 'agents',
  },
  {
    name: 'Claude Code 101',
    href: 'https://verify.skilljar.com/c/imrn5b37nis4',
    file: '/certificates/claude-code-101.png',
    color: 'from-indigo-500 to-purple-600',
    category: 'agents',
  },
  {
    name: 'Introduction to Agent Skills',
    href: 'https://verify.skilljar.com/c/t42oq8g6qeep',
    file: '/certificates/introduction-to-agent-skills.png',
    color: 'from-rose-500 to-pink-600',
    category: 'agents',
  },
  {
    name: 'Introduction to Model Context Protocol',
    href: 'https://verify.skilljar.com/c/a2u7dqaijdij',
    file: '/certificates/introduction-to-model-context-protocol.png',
    color: 'from-cyan-500 to-blue-600',
    category: 'agents',
  },
]

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/MHKaungPyae',
    path: GITHUB_PATH,
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
  {
    label: 'Gmail',
    href: 'mailto:mhkp765@gmail.com',
    path: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z',
  },
]
