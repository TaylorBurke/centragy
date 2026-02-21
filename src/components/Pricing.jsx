import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Check } from 'lucide-react'

const tiers = [
  {
    name: 'Essential',
    headline: 'Product Design Review',
    price: 'From $15k',
    features: [
      'DFM analysis & feasibility report',
      'Single product scope',
      'Material & process recommendations',
      'Manufacturing cost estimate',
    ],
    accent: false,
  },
  {
    name: 'Performance',
    headline: 'Full Development',
    price: 'From $45k',
    features: [
      'Everything in Essential',
      'Tooling design & validation',
      'Prototype management',
      'Supplier sourcing & vetting',
      'Dedicated project lead',
    ],
    accent: true,
  },
  {
    name: 'Enterprise',
    headline: 'End-to-End',
    price: 'Custom',
    features: [
      'Everything in Performance',
      'Senior team embedded on-site',
      'Full supply chain build-out',
      'Ongoing production oversight',
      'Quality control programs',
    ],
    accent: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-coral uppercase mb-3">
            Engagement Models
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tighter text-ink leading-tight">
            Start building<br />
            <span className="font-serif italic">with precision.</span>
          </h2>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`pricing-card rounded-[2rem] p-7 md:p-8 border transition-transform ${
                tier.accent
                  ? 'bg-ink text-offwhite border-ink ring-1 ring-coral/30 md:scale-[1.03]'
                  : 'bg-paper text-ink border-ink/8'
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-coral">
                {tier.name}
              </span>
              <h3
                className={`font-sans font-bold text-xl md:text-2xl tracking-tight mt-2 ${
                  tier.accent ? 'text-offwhite' : 'text-ink'
                }`}
              >
                {tier.headline}
              </h3>
              <p
                className={`font-serif italic text-3xl mt-4 mb-6 ${
                  tier.accent ? 'text-offwhite' : 'text-ink'
                }`}
              >
                {tier.price}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-sm leading-snug ${
                      tier.accent ? 'text-offwhite/60' : 'text-ink/50'
                    }`}
                  >
                    <Check
                      size={15}
                      className="text-coral mt-0.5 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`btn-magnetic group w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm ${
                  tier.accent
                    ? 'bg-coral text-offwhite'
                    : 'bg-ink text-offwhite'
                }`}
              >
                <span
                  className={`btn-bg rounded-full ${
                    tier.accent ? 'bg-offwhite' : 'bg-coral'
                  }`}
                />
                <span
                  className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                    tier.accent ? 'group-hover:text-ink' : ''
                  }`}
                >
                  Book a Consultation <ArrowRight size={14} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
