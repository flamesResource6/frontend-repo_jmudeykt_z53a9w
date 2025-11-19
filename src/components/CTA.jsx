export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-cyan-700 via-cyan-600 to-cyan-700 py-16 text-slate-900">
      <div className="absolute inset-0 pointer-events-none opacity-60 [background-image:radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.2),transparent_40%)]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Level-Up Your BigCommerce Stack?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-base/relaxed text-cyan-50/90">
          See the apps in action and get a tailored plan for your catalogue and operations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-cyan-800 shadow hover:shadow-md">
            Book a Demo
          </a>
          <a href="#apps" className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20">
            Get Started
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 border-t border-white/30" style={{ boxShadow: '0 -10px 60px rgba(255,255,255,0.25) inset' }} />
    </section>
  )
}
