import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../data'
import { MenuIcon } from '../icons'

const SCROLL_THRESHOLD = 40

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-zinc-800/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          MHKP
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative hover:text-blue-400 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-300 p-2 hover:text-blue-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800"
        >
          <ul className="flex flex-col gap-2 px-6 py-4 text-sm font-medium text-zinc-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-blue-400 transition-colors"
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
