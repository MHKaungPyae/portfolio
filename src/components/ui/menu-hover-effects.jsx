import { useState, useEffect } from 'react'

export default function NavMenu({ items = [], activeItem = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  if (!items.length) return null

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#282C33]/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-[#282C33]'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <a href="#hero" className="z-20 relative">
          <span className="text-white font-bold text-base">MHKP</span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-20 p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div
            className={`w-6 h-0.5 bg-[#abb2bf] mb-1.5 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-[#abb2bf] mb-1.5 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-[#abb2bf] transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <ul className="flex items-center gap-1 lg:gap-2">
            {items.map((item) => {
              const key = item.label.toLowerCase()
              const isActive = activeItem === key
              return (
                <li key={item.href} className="list-none">
                  <a
                    href={item.href}
                    className="relative inline-block group"
                  >
                    {/* Link text */}
                    <span
                      className={`relative z-10 block font-semibold transition-colors duration-300 group-hover:text-[#282C33] text-base py-2 px-3 lg:px-4 ${
                        isActive ? 'text-[#c778dd]' : 'text-[#abb2bf]'
                      }`}
                    >
                      {key}
                    </span>

                    {/* Top & bottom border animation */}
                    <span className="absolute inset-0 border-t-2 border-b-2 border-[#abb2bf] scale-y-[2] opacity-0 transition-all duration-300 origin-center group-hover:scale-y-100 group-hover:opacity-100" />

                    {/* Background fill animation */}
                    <span className="absolute top-[2px] left-0 w-full h-full bg-[#abb2bf] scale-0 opacity-0 transition-all duration-300 origin-top group-hover:scale-100 group-hover:opacity-100" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-[#282C33] border-t border-[#abb2bf]/20">
          {items.map((item) => {
            const key = item.label.toLowerCase()
            const isActive = activeItem === key
            return (
              <li key={item.href} className="list-none">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-block group"
                >
                  <span
                    className={`relative z-10 block font-semibold transition-colors duration-300 group-hover:text-[#282C33] text-xl py-2 px-4 ${
                      isActive ? 'text-[#c778dd]' : 'text-[#abb2bf]'
                    }`}
                  >
                    {key}
                  </span>
                  <span className="absolute inset-0 border-t-2 border-b-2 border-[#abb2bf] scale-y-[2] opacity-0 transition-all duration-300 origin-center group-hover:scale-y-100 group-hover:opacity-100" />
                  <span className="absolute top-[2px] left-0 w-full h-full bg-[#abb2bf] scale-0 opacity-0 transition-all duration-300 origin-top group-hover:scale-100 group-hover:opacity-100" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
