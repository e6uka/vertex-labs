import { useState, useEffect } from 'react'

const LINKS = [
  ['Services', '#services'],
  ['Why Us', '#why'],
  ['Process', '#process'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl shadow-lg border-b' : 'bg-transparent'}`}
      style={scrolled ? { backgroundColor: 'rgba(15,23,42,0.92)', borderColor: '#1E293B' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/icon-white.svg" alt="Vertex Labs" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold tracking-tight" style={{ color: '#E2E8F0' }}>Vertex Labs</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium transition-colors hover:opacity-100"
                style={{ color: 'rgba(226,232,240,0.65)' }}
                onMouseEnter={e => e.target.style.color = '#E2E8F0'}
                onMouseLeave={e => e.target.style.color = 'rgba(226,232,240,0.65)'}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: '#636b2f', color: '#0F172A' }}
          >
            Get Started
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#E2E8F0' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#E2E8F0' }} />
            <span className="block w-5 h-0.5" style={{ backgroundColor: '#E2E8F0' }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 pt-4 border-t" style={{ borderColor: '#1E293B' }}>
            {LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block py-3 text-sm font-medium"
                style={{ color: 'rgba(226,232,240,0.65)' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex mt-2 text-sm px-5 py-2.5 rounded-full font-semibold"
              style={{ backgroundColor: '#636b2f', color: '#0F172A' }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
