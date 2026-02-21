import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-[100dvh] flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80"
          alt="Modern product design studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      {/* Content — bottom-left third */}
      <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-4xl">
        <p className="hero-anim font-mono text-[10px] md:text-xs tracking-[0.25em] text-offwhite/50 uppercase mb-6">
          Industrial Design &amp; Engineering
        </p>

        <h1 className="hero-anim font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-offwhite leading-[0.9]">
          Engineer the
        </h1>
        <h1 className="hero-anim font-serif italic text-6xl md:text-8xl lg:text-[10rem] tracking-tight text-offwhite leading-[0.85] -mt-1 md:-mt-2">
          Standard.
        </h1>

        <p className="hero-anim font-sans text-offwhite/60 text-base md:text-xl mt-6 md:mt-8 max-w-lg leading-relaxed">
          Product design for the physical world. Outdoor gear, consumer
          electronics, modern furniture — from first sketch to factory floor.
        </p>

        <a
          href="#pricing"
          className="hero-anim btn-magnetic group inline-flex items-center gap-3 mt-8 md:mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-coral to-peach text-offwhite font-semibold text-sm md:text-base"
        >
          <span className="btn-bg bg-offwhite rounded-full" />
          <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-ink">
            Book a Consultation <ArrowRight size={18} />
          </span>
        </a>
      </div>
    </section>
  )
}
