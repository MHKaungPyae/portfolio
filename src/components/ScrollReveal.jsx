import { useState, useEffect, useRef } from 'react'

/**
 * Wraps children in a scroll-triggered fade-in-up animation.
 * Respects prefers-reduced-motion — falls back to no animation.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.delay=0]        - Stagger delay in ms
 * @param {number}  [props.threshold=0.1]  - IntersectionObserver threshold
 * @param {string}  [props.className='']    - Extra classes for the wrapper
 * @param {string}  [props.origin='bottom'] - 'bottom' | 'left' | 'right' | 'none'
 */
export default function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
  origin = 'bottom',
}) {
  const [revealed, setRevealed] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(motionQuery.matches)

    const onChange = (e) => setPrefersReduced(e.matches)
    motionQuery.addEventListener('change', onChange)
    return () => motionQuery.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (prefersReduced) {
      setRevealed(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold, prefersReduced])

  const originClasses = {
    bottom: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    none: '',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        revealed
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${originClasses[origin] || originClasses.bottom}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
