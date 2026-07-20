# Portfolio — Min Htet Kaung Pyae

Personal portfolio website built with **React + Vite + Tailwind CSS**.

## 🚀 Live Site

[https://www.mhkaungpyae.dev](https://www.mhkaungpyae.dev/)

## 🛠 Tech Stack

- **React** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling
- **JavaScript (JSX)** — Component logic
- **Framer Motion** — Animations
- **Swiper** — Carousel component
- **Lucide React** — Icons
- **clsx / tailwind-merge** — Class name utilities

## 📂 Project Structure

```
src/
├── assets/               # Images (profile photo, etc.)
├── components/           # React components
│   ├── ui/               # Reusable UI primitives (Button, GlassCard, Badge, etc.)
│   ├── About.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── ErrorBoundary.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── SectionHeader.jsx
│   └── Skills.jsx
├── lib/                  # Utility functions
├── App.jsx               # Main app — all sections composed
├── data.js               # Static data (projects, certifications, nav items)
├── icons.jsx             # Custom SVG icon components
├── index.css             # Tailwind imports & global styles
└── main.jsx              # Entry point
```

## ✨ Sections

| Section           | Content |
|-------------------|---------|
| **Hero**          | Name, tagline, social links (GitHub, LinkedIn, Facebook), resume download |
| **About**         | Bio — studying SE at Mae Fah Luang University, open to jobs |
| **Skills**        | Tech stack categories — Languages, Frameworks, AI/ML, Tools |
| **Certifications**| 19 credentials with category filters (Python, ML, AI Agents, Tools) |
| **Projects**      | TripNest, Medical Citation Chatbot, Review Summarization, Sentiment Analysis |
| **Contact**       | Email, location, social links |

## 🧑‍💻 Projects Featured

- **[TripNest (User App)](https://github.com/linmyatoo/TripNest_user)** — Event booking app with AI sentiment analysis, text summarization & chatbot
- **[TripNest (Creator App)](https://github.com/linmyatoo/TripNest_admin)** — Creator dashboard for managing events, bookings, and user data
- **[Medical Citation Chatbot](https://github.com/MHKaungPyae/Medical_Citation_Chatbot)** — RAG chatbot with live data retrieval from Wikipedia and OpenFDA
- **[Review Summarization](https://github.com/MHKaungPyae/Review_Summarization)** — NLP model for text summarization
- **[Sentiment Analysis](https://github.com/MHKaungPyae/Sentiment_Analysis)** — AI model for sentiment classification

## 📄 Certifications

19 credentials in Python, Linux, NLP, Deep Learning, Machine Learning, and AI Agents from Coursera, Credly, and Skilljar.

## 🏃‍♂️ Run Locally

```bash
npm install
npm run dev       # Dev server at http://localhost:5173
npm run build     # Production build → dist/
```
