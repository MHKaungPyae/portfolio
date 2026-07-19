import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../data'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href))
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i].label.toLowerCase())
          return
        }
      }
      setActive('home')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="z-20 relative">
          <span className="text-lg font-bold text-white">
            MH<span className="text-primary">KP</span>
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-20 p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="w-6 h-0.5 bg-gray-400 mb-1.5 transition-transform duration-300 rounded-full" />
          <div className="w-6 h-0.5 bg-gray-400 mb-1.5 transition-opacity duration-300 rounded-full" />
          <div className="w-6 h-0.5 bg-gray-400 transition-transform duration-300 rounded-full" />
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-1 bg-black/80 backdrop-blur-md rounded-full px-2 py-1 border border-gray-800 shadow-sm">
            {NAV_ITEMS.map((item) => {
              const key = item.label.toLowerCase()
              const isActive = active === key
              return (
                <li key={item.href} className="list-none">
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative block font-medium text-sm py-2 px-4 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {key}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-8 bg-black border-t border-gray-800">
          {NAV_ITEMS.map((item) => {
            const key = item.label.toLowerCase()
            const isActive = active === key
            return (
              <li key={item.href} className="list-none">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-medium text-lg py-2 px-4 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {key}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
