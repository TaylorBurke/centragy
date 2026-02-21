import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal
      gsap.from('.reveal-word', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto-block',
          start: 'top 65%',
        },
      })

      // Parallax background image
      gsap.to('.philosophy-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const mainWords = 'We focus on: production-ready'.split(' ')

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 bg-ink overflow-hidden">
      {/* Parallax organic texture */}
      <div className="philosophy-bg absolute inset-0 opacity-[0.08]">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80"
          alt="Industrial texture"
          className="w-full h-[130%] object-cover -mt-[15%]"
        />
      </div>

      <div className="relative z-10 px-6 md:px-16 max-w-5xl mx-auto manifesto-block">
        {/* Counter-statement */}
        <p className="font-sans text-lg md:text-2xl text-offwhite/30 mb-8 md:mb-12 leading-relaxed max-w-2xl">
          Most design firms focus on: aesthetics first, manufacturing second.
          Beautiful renders that fall apart at the mold.
        </p>

        {/* Main manifesto */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1]">
          {mainWords.map((word, i) => (
            <span
              key={i}
              className="reveal-word inline-block mr-[0.25em] font-serif italic text-offwhite"
            >
              {word}
            </span>
          ))}
          <br className="hidden md:block" />
          <span className="reveal-word inline-block font-serif italic text-coral text-5xl md:text-7xl lg:text-[5.5rem]">
            precision.
          </span>
        </h2>
      </div>
    </section>
  )
}
