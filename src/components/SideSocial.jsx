import { SOCIAL_LINKS } from '../data'
import { SocialIcon } from '../icons'

/**
 * Left vertical sidebar with a vertical line + social icon links.
 * Matches the Figma "media" component. Hidden on mobile.
 */
export default function SideSocial() {
  return (
    <div className="hidden lg:flex flex-col items-center gap-2 fixed left-8 top-1/2 -translate-y-1/2 z-40">
      {/* Vertical line */}
      <div className="w-px h-48 bg-[#abb2bf]/30" />

      {/* Social icons */}
      <div className="flex flex-col items-center gap-2">
        {SOCIAL_LINKS.map(({ label, href, path }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#abb2bf] hover:text-white hover:scale-110 transition-all duration-200 p-1"
          >
            <SocialIcon path={path} className="w-7 h-7" />
          </a>
        ))}
      </div>
    </div>
  )
}
