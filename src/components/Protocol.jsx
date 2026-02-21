import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* ─── SVG Animation 1: Rotating Concentric Circles ─── */
function RotatingGeometry() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rotate-ring').forEach((ring, i) => {
        gsap.to(ring, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 18 + i * 4,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%',
        })
      })
    }, svgRef)
    return () => ctx.revert()
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 200 200" className="w-40 h-40 md:w-56 md:h-56 opacity-15">
      {[25, 45, 65, 85].map((r, i) => (
        <circle
          key={i}
          className="rotate-ring"
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="#E07A5F"
          strokeWidth="0.6"
          strokeDasharray={`${3 + i * 3} ${6 + i * 4}`}
        />
      ))}
      {/* Center dot */}
      <circle cx="100" cy="100" r="2" fill="#E07A5F" opacity="0.4" />
    </svg>
  )
}

/* ─── SVG Animation 2: Scanning Laser Line ─── */
function ScanningLaser() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.scan-line',
        { attr: { y1: 5, y2: 5 } },
        {
          attr: { y1: 195, y2: 195 },
          duration: 3.5,
          repeat: -1,
          ease: 'power1.inOut',
          yoyo: true,
        }
      )
    }, svgRef)
    return () => ctx.revert()
  }, [])

  const dots = []
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * 20 + 10}
          cy={row * 20 + 10}
          r="1.5"
          fill="#E07A5F"
          opacity="0.2"
        />
      )
    }
  }

  return (
    <svg ref={svgRef} viewBox="0 0 200 200" className="w-40 h-40 md:w-56 md:h-56 opacity-15">
      {dots}
      <line
        className="scan-line"
        x1="0"
        y1="5"
        x2="200"
        y2="5"
        stroke="#E07A5F"
        strokeWidth="1.5"
        opacity="0.7"
      />
    </svg>
  )
}

/* ─── SVG Animation 3: EKG Pulsing Waveform ─── */
function PulsingWaveform() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.waveform-path',
        { strokeDashoffset: 800 },
        {
          strokeDashoffset: 0,
          duration: 3.5,
          repeat: -1,
          ease: 'none',
        }
      )
    }, svgRef)
    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 80"
      className="w-48 h-20 md:w-72 md:h-28 opacity-15"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        className="waveform-path"
        d="M0 40 L25 40 L35 40 L42 15 L48 65 L54 8 L60 72 L66 40 L80 40
           L105 40 L115 40 L122 15 L128 65 L134 8 L140 72 L146 40 L160 40
           L185 40 L195 40 L202 15 L208 65 L214 8 L220 72 L226 40 L240 40
           L265 40 L275 40 L282 15 L288 65 L294 8 L300 40"
        fill="none"
        stroke="#E07A5F"
        strokeWidth="1.5"
        strokeDasharray="800"
        strokeDashoffset="800"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ─── Protocol Steps Data ─── */
const steps = [
  {
    number: '01',
    title: 'Discover & Audit',
    description:
      'Deep analysis of existing products, tooling requirements, and supply chain constraints. We map every dependency before the first sketch.',
    Animation: RotatingGeometry,
  },
  {
    number: '02',
    title: 'Design & Engineer',
    description:
      'Production-optimized design from day one. Every curve, wall thickness, and tolerance engineered for your exact manufacturing process.',
    Animation: ScanningLaser,
  },
  {
    number: '03',
    title: 'Produce & Scale',
    description:
      'Seamless handoff to production. Tooling validation, supplier coordination, and quality control at every checkpoint.',
    Animation: PulsingWaveform,
  },
]

/* ─── Protocol Section ─── */
export default function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const inner = card.querySelector('.protocol-inner')
          gsap.to(inner, {
            scale: 0.9,
            filter: 'blur(20px)',
            opacity: 0.5,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top 85%',
              end: 'top 15%',
              scrub: true,
            },
          })
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={containerRef}>
      {/* Section header */}
      <div className="px-6 md:px-16 pt-24 md:pt-32 pb-8 max-w-7xl mx-auto">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-coral uppercase mb-3">
          Our Process
        </p>
        <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tighter text-ink leading-tight">
          The Centragy<br />
          <span className="font-serif italic">Protocol.</span>
        </h2>
      </div>

      {/* Stacking cards */}
      {steps.map((step, i) => (
        <div
          key={i}
          className="protocol-card sticky top-0 min-h-screen flex items-center justify-center px-4 md:px-16 py-8"
        >
          <div className="protocol-inner w-full max-w-5xl bg-paper border border-ink/8 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-sm will-change-transform flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1">
              <span className="font-mono text-sm text-coral tracking-wide">
                {step.number}
              </span>
              <h3 className="font-sans font-bold text-2xl md:text-4xl tracking-tighter text-ink mt-2 mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-ink/40 text-base md:text-lg leading-relaxed max-w-md">
                {step.description}
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <step.Animation />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
