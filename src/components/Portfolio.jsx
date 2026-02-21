import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ImageIcon } from 'lucide-react'

const projects = [
  {
    name: 'Enbrighten Lantern Collection',
    category: 'Outdoor Lighting',
    desc: 'GE Costco 8D battery lantern, Enbrighten 3D + Lithium, and GE Sam\'s lantern — designed for Jasco Products',
    asset: '/portfolio/lantern-designs.jpg',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-[4/3]',
    hasImage: true,
  },
  {
    name: 'Cafe Light System',
    category: 'Outdoor Lighting',
    desc: 'T-connector and LED light assembly for vintage outdoor cafe string lights',
    asset: '/portfolio/cafe-lights.jpg',
    span: '',
    aspect: 'aspect-square',
    hasImage: true,
  },
  {
    name: 'DriveSync FM',
    category: 'Consumer Electronics',
    desc: 'Bluetooth FM transmitter with LED frequency display and dual USB charging',
    asset: '/portfolio/drivesync-fm.png',
    span: '',
    aspect: 'aspect-square',
    hasImage: true,
  },
  {
    name: 'Copper Fire Pit',
    category: 'Outdoor Products',
    desc: 'Backyard copper clad fire pit with mesh spark screen — designed for Design Centragy',
    asset: '/portfolio/square-firepit.jpg',
    span: '',
    aspect: 'aspect-[4/3]',
    hasImage: true,
  },
  {
    name: 'Outdoor Fire Ring',
    category: 'Outdoor Products',
    desc: 'Decorative steel fire ring for backyard and patio use — designed for Design Centragy',
    asset: '/portfolio/outdoor-fire-ring.jpg',
    span: '',
    aspect: 'aspect-[4/3]',
    hasImage: true,
  },
  {
    name: 'Quantum Reel',
    category: 'Sporting Goods',
    desc: 'Digital rendering for precision spinning reel — designed at Zebco',
    asset: '/portfolio/fishing-reel.jpg',
    span: '',
    aspect: 'aspect-[4/3]',
    hasImage: true,
  },
  {
    name: 'Reef Lounger',
    category: 'Outdoor Products',
    desc: 'Sculptural pool and deck lounger engineered for resort and residential use',
    asset: '/portfolio/reef-lounger.png',
    span: '',
    aspect: 'aspect-square',
    hasImage: true,
  },
  {
    name: 'NestCart Pro',
    category: 'Outdoor Products',
    desc: 'Stackable yard cart with ergonomic handle and all-terrain wheels',
    asset: '/portfolio/nestcart-pro.png',
    span: '',
    aspect: 'aspect-square',
    hasImage: true,
  },
  {
    name: 'Ember Firepit',
    category: 'Outdoor Products',
    desc: 'Elevated fire pit with mesh spark screen and decorative cutout ventilation',
    asset: '/portfolio/ember-firepit.png',
    span: '',
    aspect: 'aspect-square',
    hasImage: true,
  },
]

function ProjectCard({ project }) {
  if (project.hasImage) {
    return (
      <div className="group">
        <div
          className={`${project.aspect} relative rounded-[2rem] overflow-hidden bg-ink/[0.03]`}
        >
          <img
            src={project.asset}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
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
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-sans font-bold text-base md:text-lg tracking-tight text-ink">
              {project.name}
            </h3>
            <span className="font-mono text-[9px] tracking-[0.15em] text-coral uppercase bg-coral/8 px-2.5 py-1 rounded-full whitespace-nowrap">
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

  return (
    <div className="group">
      <div
        className={`${project.aspect} relative rounded-[2rem] border-2 border-dashed border-ink/8 overflow-hidden placeholder-shimmer`}
      >
        {/* Placeholder state */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
          <div className="w-12 h-12 rounded-2xl bg-ink/[0.04] flex items-center justify-center">
            <ImageIcon size={20} className="text-ink/20" />
          </div>
          <span className="font-mono text-[10px] text-ink/20 tracking-wide text-center">
            {project.asset}
          </span>
        </div>

        {/* Hover overlay */}
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
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-sans font-bold text-base md:text-lg tracking-tight text-ink">
            {project.name}
          </h3>
          <span className="font-mono text-[9px] tracking-[0.15em] text-coral uppercase bg-coral/8 px-2.5 py-1 rounded-full whitespace-nowrap">
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

  const liveCount = projects.filter(p => p.hasImage).length
  const pendingCount = projects.filter(p => !p.hasImage).length

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
            Outdoor lighting, fire features, sporting goods, and consumer electronics —
            designed at IDC/Jasco Products, Design Centragy, and Zebco.
          </p>
        </div>

        {/* Portfolio grid — bento layout with staggered cols 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => {
            // Grid auto-flow after the 2×2 hero (index 0):
            // col 3 fills rows 1-2 (indices 1, 2)
            // Then rows 3+: col1=3,6  col2=4,7  col3=5,8
            // Pull cols 1 & 2 up into the blank space below the hero
            let staggerClass = ''
            if (i >= 3) {
              const col = (i - 3) % 3
              if (col === 0) staggerClass = 'md:-translate-y-24'  // col 1 — pull up most
              if (col === 1) staggerClass = 'md:-translate-y-12'  // col 2 — pull up less (stagger)
            }

            return (
              <div
                key={i}
                className={`portfolio-item ${project.span} ${staggerClass}`}
              >
                <ProjectCard project={project} />
              </div>
            )
          })}
        </div>

        {/* Bottom status */}
        {pendingCount > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-ink/10">
              <div className="w-2 h-2 rounded-full bg-coral/40 pulse-dot" />
              <span className="font-mono text-xs text-ink/30">
                {liveCount} live &middot; {pendingCount} awaiting assets
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
