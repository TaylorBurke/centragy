import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* ─── Card 1: Diagnostic Shuffler ─── */
function DiagnosticShuffler() {
  const labels = ['DFM Analysis', 'Toolpath Optimization', 'Material Selection']
  const sublabels = [
    'Wall thickness, draft angles, undercuts',
    '3-axis / 5-axis CNC, EDM strategy',
    'AL-6061, PA12-GF, POM acetal',
  ]
  const [order, setOrder] = useState([0, 1, 2])

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44">
      {order.map((idx, position) => (
        <div
          key={idx}
          className="absolute left-1/2 w-[90%] px-5 py-4 rounded-2xl border border-ink/8 bg-offwhite"
          style={{
            transform: `translateX(-50%) translateY(${position * 28}px) scale(${1 - position * 0.04})`,
            zIndex: 3 - position,
            opacity: 1 - position * 0.2,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                position === 0 ? 'bg-coral' : 'bg-ink/15'
              }`}
            />
            <span className="font-mono text-xs font-bold text-ink/80 tracking-wide">
              {labels[idx]}
            </span>
          </div>
          <p className="font-mono text-[10px] text-ink/35 mt-1.5 ml-[22px]">
            {sublabels[idx]}
          </p>
          <div className="mt-2.5 h-1.5 bg-ink/5 rounded-full overflow-hidden ml-[22px]">
            <div
              className="h-full bg-coral/50 rounded-full transition-all duration-[1.2s] ease-out"
              style={{ width: position === 0 ? '100%' : `${55 - position * 20}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Card 2: Telemetry Typewriter ─── */
function TelemetryTypewriter() {
  const messages = [
    '▶ Supplier audit: Shenzhen T3 facility — PASSED',
    '▶ Lead time update: injection mold tooling — 14d',
    '▶ Material cert received: AL-6061-T6 — verified',
    '▶ Cost delta: −12% via consolidated shipping',
    '▶ QC checkpoint: surface finish Ra 0.8μm — spec',
    '▶ Vendor onboarded: precision CNC — Taichung',
  ]
  const [lines, setLines] = useState([])
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (msgIdx >= messages.length) {
      const timeout = setTimeout(() => {
        setLines([])
        setMsgIdx(0)
        setCharIdx(0)
        setDisplayText('')
      }, 2500)
      return () => clearTimeout(timeout)
    }

    const msg = messages[msgIdx]

    if (charIdx < msg.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + msg[charIdx])
        setCharIdx(prev => prev + 1)
      }, 25 + Math.random() * 35)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setLines(prev => [...prev, msg])
      setDisplayText('')
      setMsgIdx(prev => prev + 1)
      setCharIdx(0)
    }, 700)
    return () => clearTimeout(timeout)
  }, [msgIdx, charIdx])

  return (
    <div className="font-mono text-[11px] leading-relaxed h-44 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-coral pulse-dot" />
        <span className="text-coral font-bold uppercase tracking-[0.2em] text-[9px]">
          Live Feed
        </span>
      </div>
      <div className="space-y-1">
        {lines.slice(-4).map((line, i) => (
          <div key={i} className="text-ink/30 truncate">{line}</div>
        ))}
        {msgIdx < messages.length && (
          <div className="text-ink/70">
            {displayText}
            <span className="blink-cursor text-coral ml-px">▊</span>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Card 3: Cursor Protocol Scheduler ─── */
function CursorScheduler() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [activeDays, setActiveDays] = useState(new Set())
  const [cursorStyle, setCursorStyle] = useState({ left: '-5%', top: '20%', opacity: 0 })
  const [pressing, setPressing] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    let cancelled = false
    const wait = (ms) => new Promise(r => setTimeout(r, ms))

    const cycle = async () => {
      while (!cancelled) {
        // Reset
        setActiveDays(new Set())
        setSaved(false)
        setPressing(false)
        setCursorStyle({ left: '-5%', top: '20%', opacity: 0 })
        await wait(1200)
        if (cancelled) break

        // Cursor enters from left
        setCursorStyle({ left: '8%', top: '18%', opacity: 1 })
        await wait(600)
        if (cancelled) break

        // Move to Tuesday (col 2 of 7 ≈ 22%)
        setCursorStyle({ left: '22%', top: '14%', opacity: 1 })
        await wait(400)
        setPressing(true)
        await wait(180)
        setActiveDays(new Set([2]))
        setPressing(false)
        await wait(350)
        if (cancelled) break

        // Move to Wednesday (col 3 ≈ 39%)
        setCursorStyle({ left: '39%', top: '14%', opacity: 1 })
        await wait(400)
        setPressing(true)
        await wait(180)
        setActiveDays(new Set([2, 3]))
        setPressing(false)
        await wait(350)
        if (cancelled) break

        // Move to Friday (col 5 ≈ 72%)
        setCursorStyle({ left: '72%', top: '14%', opacity: 1 })
        await wait(400)
        setPressing(true)
        await wait(180)
        setActiveDays(new Set([2, 3, 5]))
        setPressing(false)
        await wait(350)
        if (cancelled) break

        // Move to Save button
        setCursorStyle({ left: '48%', top: '68%', opacity: 1 })
        await wait(500)
        setPressing(true)
        await wait(180)
        setSaved(true)
        setPressing(false)
        await wait(1500)

        // Fade out cursor
        setCursorStyle(prev => ({ ...prev, opacity: 0 }))
        await wait(2000)
      }
    }

    const timeout = setTimeout(cycle, 800)
    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="relative h-44">
      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1.5 mb-3">
        {days.map((day, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
              activeDays.has(i)
                ? 'bg-coral text-offwhite scale-[0.92]'
                : 'bg-ink/[0.04] text-ink/30'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Mini milestone labels */}
      <div className="flex gap-1.5 mb-3">
        {['Tooling Review', 'Proto Ship', 'QC Final'].map((label, i) => (
          <div
            key={i}
            className="flex-1 text-center py-1 rounded-lg bg-ink/[0.03] font-mono text-[8px] text-ink/25 truncate px-1"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Save button */}
      <div
        className={`w-full py-2 rounded-xl text-[11px] font-mono font-bold text-center transition-all duration-300 ${
          saved ? 'bg-coral text-offwhite' : 'bg-ink/[0.04] text-ink/30'
        }`}
      >
        {saved ? '✓ Schedule Locked' : 'Save Schedule'}
      </div>

      {/* Animated cursor SVG */}
      <div
        className="absolute pointer-events-none transition-all duration-[500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          left: cursorStyle.left,
          top: cursorStyle.top,
          opacity: cursorStyle.opacity,
          transform: pressing ? 'scale(0.8)' : 'scale(1)',
          transition: pressing
            ? 'left 0.5s cubic-bezier(0.25,0.46,0.45,0.94), top 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s, transform 0.1s'
            : 'left 0.5s cubic-bezier(0.25,0.46,0.45,0.94), top 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s, transform 0.15s',
        }}
      >
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path
            d="M1 1L1 17L5.5 13L9 20.5L12 19L8.5 11.5L14 11L1 1Z"
            fill="#E07A5F"
            stroke="#111"
            strokeWidth="0.75"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ─── Main Features Section ─── */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
    <section id="features" ref={sectionRef} className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-coral uppercase mb-3">
            What We Deliver
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tighter text-ink leading-tight">
            Three pillars of<br />
            <span className="font-serif italic">production-ready</span> design.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="feature-card bg-paper border border-ink/8 rounded-[2rem] p-7 md:p-8">
            <h3 className="font-sans font-bold text-lg md:text-xl tracking-tight text-ink mb-1.5">
              Tooling-First Design
            </h3>
            <p className="font-sans text-sm text-ink/40 mb-6 leading-relaxed">
              Products engineered for manufacturability from day one. No redesigns, no retooling.
            </p>
            <DiagnosticShuffler />
          </div>

          {/* Card 2 */}
          <div className="feature-card bg-paper border border-ink/8 rounded-[2rem] p-7 md:p-8">
            <h3 className="font-sans font-bold text-lg md:text-xl tracking-tight text-ink mb-1.5">
              Supply Chain Intelligence
            </h3>
            <p className="font-sans text-sm text-ink/40 mb-6 leading-relaxed">
              Every link from raw material to assembly, mapped and optimized in real time.
            </p>
            <TelemetryTypewriter />
          </div>

          {/* Card 3 */}
          <div className="feature-card bg-paper border border-ink/8 rounded-[2rem] p-7 md:p-8">
            <h3 className="font-sans font-bold text-lg md:text-xl tracking-tight text-ink mb-1.5">
              Prototype to Production
            </h3>
            <p className="font-sans text-sm text-ink/40 mb-6 leading-relaxed">
              From first render to full production run. Zero handoff friction.
            </p>
            <CursorScheduler />
          </div>
        </div>
      </div>
    </section>
  )
}
