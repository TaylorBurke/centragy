export default function Footer() {
  return (
    <footer className="bg-ink rounded-t-[3rem] md:rounded-t-[4rem] mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="font-sans font-bold text-2xl tracking-tighter text-offwhite">
              Centragy
            </h3>
            <p className="font-sans text-offwhite/35 text-sm mt-3 max-w-sm leading-relaxed">
              Industrial design, engineered for production. Outdoor gear,
              consumer electronics, and modern furniture — from sketch to factory floor.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-offwhite/25 uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#portfolio"
                  className="text-offwhite/50 text-sm hover-lift inline-block transition-colors hover:text-offwhite/80"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-offwhite/50 text-sm hover-lift inline-block transition-colors hover:text-offwhite/80"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#protocol"
                  className="text-offwhite/50 text-sm hover-lift inline-block transition-colors hover:text-offwhite/80"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-offwhite/50 text-sm hover-lift inline-block transition-colors hover:text-offwhite/80"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-offwhite/25 uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-offwhite/50 text-sm hover-lift inline-block transition-colors hover:text-offwhite/80"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-offwhite/50 text-sm hover-lift inline-block transition-colors hover:text-offwhite/80"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-offwhite/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-offwhite/25">
            &copy; 2026 Centragy. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
            <span className="font-mono text-[11px] text-offwhite/35">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
