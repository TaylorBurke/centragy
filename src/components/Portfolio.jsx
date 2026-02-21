import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ImageIcon } from 'lucide-react'

const projects = [
  {
    name: 'Alpine Series',
    category: 'Outdoor Products',
    desc: 'Modular camping system engineered for extreme alpine conditions',
    asset: '/portfolio/alpine-series.jpg',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Flux Speaker',
    category: 'Consumer Electronics',
    desc: 'Wireless directional audio with room-adapting DSP',
    asset: '/portfolio/flux-speaker.jpg',
    span: '',
    aspect: 'aspect-square',
  },
  {
    name: 'Noma Lounge',
    category: 'Modern Furniture',
    desc: 'Ergonomic lounge chair — steam-bent oak and vegetable-tanned leather',
    asset: '/portfolio/noma-lounge.jpg',
    span: '',
    aspect: 'aspect-square',
  },
  {
    name: 'Trail Pro GPS',
    category: 'Consumer Electronics',
    desc: 'Ruggedized navigation device with solar charging',
    asset: '/portfolio/trail-pro-gps.jpg',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Ember Firepit',
    category: 'Outdoor Products',
    desc: 'Portable smokeless firepit with secondary combustion',
    asset: '/portfolio/ember-firepit.jpg',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Axis Desk',
    category: 'Modern Furniture',
    desc: 'Height-adjustable desk with integrated cable architecture',
    asset: '/portfolio/axis-desk.jpg',
    span: 'md:col-span-2',
    aspect: 'aspect-[21/9]',
  },
]

function PlaceholderCard({ project }) {
  return (
    <div className={`group ${project.span}`}>
      <div
        className={`${project.aspect} relative rounded-[2rem] border-2 border-dashed border-ink/8 overflow-hidden placeholder-shimmer`}
      >
        {/* Placeholder state — will be replaced with portfolio images */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
          <div className="w-12 h-12 rounded-2xl bg-ink/[0.04] flex items-center justify-center">
            <ImageIcon size={20} className="text-ink/20" />
          </div>
          <span className="font-mono text-[10px] text-ink/20 tracking-wide text-center">
            {project.asset}
          </span>
        </div>

        {/* Hover overlay with project info */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-coral uppercase">
              {project.category}
            </span>
            <h3 className="font-sans font-bold text-xl md:text-2xl text-offwhite tracking-tight mt-1">
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Text below card */}
      <div className="mt-4 px-2">
        <div className="flex items-center justify-between">
          <h3 className="font-sans font-bold text-base md:text-lg tracking-tight text-ink">
            {project.name}
          </h3>
          <span className="font-mono text-[9px] tracking-[0.15em] text-coral uppercase bg-coral/8 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="font-sans text-sm text-ink/35 mt-1 leading-relaxed">
          {project.desc}
        </p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-item', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-coral uppercase mb-3">
              Selected Work
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tighter text-ink leading-tight">
              Products that<br />
              <span className="font-serif italic">ship.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-ink/35 max-w-sm leading-relaxed md:text-right">
            Outdoor gear, consumer electronics, and modern furniture —
            designed for tooling, validated in production.
          </p>
        </div>

        {/* Portfolio grid — bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`portfolio-item ${project.span}`}>
              <PlaceholderCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ink/25 uppercase mb-4">
            Portfolio assets loading — drop files into /portfolio
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-ink/10">
            <div className="w-2 h-2 rounded-full bg-coral/40 pulse-dot" />
            <span className="font-mono text-xs text-ink/30">
              6 projects &middot; awaiting assets
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
