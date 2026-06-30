import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '../data'
import NavMenu from './ui/menu-hover-effects'

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
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

  return <NavMenu items={NAV_ITEMS} activeItem={active} />
}
