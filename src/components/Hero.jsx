import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0b0c10]">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient + grid overlays for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/80 via-[#0b0c10]/70 to-[#0b0c10]/92 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(rgba(56,189,248,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      {/* Floating neon orbs */}
      <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-40 md:pb-36">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur-sm">
            New from Bspoq • High-velocity BigCommerce apps
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Next-Gen Tools for BigCommerce Growth.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Speed, automation, and precision for B2B and retail operations — built to scale on BigCommerce.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#apps" className="group inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_0_0_rgba(0,0,0,0)] transition hover:bg-cyan-400 focus:outline-none">
              Explore the Apps
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg border border-cyan-400/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
