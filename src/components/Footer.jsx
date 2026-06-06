import { SOCIAL_LINKS } from '../data'
import { SocialIcon } from '../icons'

export default function Footer() {
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
              <SocialIcon path={path} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
