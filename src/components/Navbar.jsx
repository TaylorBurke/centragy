import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const heroEl = document.getElementById('hero')
    if (!heroEl) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-offwhite/60 backdrop-blur-xl border border-ink/10 shadow-lg'
          : 'bg-transparent'
      } rounded-full px-4 md:px-6 py-3 flex items-center gap-4 md:gap-8`}
    >
      {/* Logo */}
      <a
        href="#"
        className={`font-sans font-bold text-lg tracking-tighter whitespace-nowrap transition-colors duration-500 ${
          scrolled ? 'text-ink' : 'text-offwhite'
        }`}
      >
        Centragy
      </a>

      {/* Desktop nav links */}
      <div
        className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors duration-500 ${
          scrolled ? 'text-ink/70' : 'text-offwhite/70'
        }`}
      >
        <a href="#portfolio" className="hover-lift">Work</a>
        <a href="#features" className="hover-lift">Services</a>
        <a href="#protocol" className="hover-lift">Process</a>
        <a href="#pricing" className="hover-lift">Pricing</a>
      </div>

      {/* Desktop CTA */}
      <a
        href="#pricing"
        className="btn-magnetic group hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-coral to-peach text-offwhite"
      >
        <span className="btn-bg bg-ink rounded-full" />
        <span className="relative z-10 flex items-center gap-2">
          Book a Consultation <ArrowRight size={14} />
        </span>
      </a>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden transition-colors ${scrolled ? 'text-ink' : 'text-offwhite'}`}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-offwhite/95 backdrop-blur-xl rounded-3xl border border-ink/10 shadow-lg p-6 md:hidden flex flex-col gap-4">
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-ink font-medium text-sm">Work</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-ink font-medium text-sm">Services</a>
          <a href="#protocol" onClick={() => setMenuOpen(false)} className="text-ink font-medium text-sm">Process</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-ink font-medium text-sm">Pricing</a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="btn-magnetic group flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-coral text-offwhite"
          >
            <span className="btn-bg bg-ink rounded-full" />
            <span className="relative z-10 flex items-center gap-2">
              Book a Consultation <ArrowRight size={14} />
            </span>
          </a>
        </div>
      )}
    </nav>
  )
}
