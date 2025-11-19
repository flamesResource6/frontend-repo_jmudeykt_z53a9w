import { motion } from 'framer-motion'

const panels = [
  {
    id: 'bc2bc',
    title: 'BC2BC — Supplier → Distributor Syncing',
    copy:
      'Mirror products, inventory, and orders across partner stores with precision. Set rules once, and let the sync run in the background.',
    bullets: [
      'Pricing rules by customer group/channel',
      'Variant + option mapping out-of-the-box',
      'Automated order passthrough to suppliers',
    ],
  },
  {
    id: 'datagrade',
    title: 'DataGrade — Catalogue Scoring + Editing',
    copy:
      'Score, surface, and fix data issues at scale. Ship a cleaner, higher-converting catalogue with bulk editing and checks.',
    bullets: [
      'Auto-grades titles, attributes, SEO + images',
      'Bulk find-and-fix flows for common issues',
      'Exports, diffs, and approval paths',
    ],
  },
  {
    id: 'oversell',
    title: 'Oversell — Smart Inventory Buffers',
    copy:
      'Sell confidently in zero-stock scenarios with dynamic buffers and throttling that prevent stockouts while keeping orders flowing.',
    bullets: [
      'Predictive buffer rules by SKU/vendor',
      'Rate limits per channel to reduce risk',
      'Real-time signals for safe selling',
    ],
  },
]

function Panel({ id, title, copy, bullets }) {
  return (
    <section id={id} className="relative scroll-mt-24 bg-[#0b0c10] py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_92%)]">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(6,182,212,0.15) 0%, rgba(99,102,241,0.15) 100%)' }} />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
          <p className="mt-3 text-slate-300">{copy}</p>
          <ul className="mt-6 space-y-3 text-slate-300/90">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-2 block h-2 w-2 flex-shrink-0 rounded-sm bg-gradient-to-br from-cyan-400 to-indigo-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#cta" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400">Book a Demo</a>
            <a href="#apps" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/5">Back to Apps</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/[0.03]">
            <div className="absolute inset-0 grid place-items-center text-slate-400">
              <span className="text-xs">Screenshot placeholder — drop product images or app UI later</span>
            </div>
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function DeepDives() {
  return (
    <div className="bg-[#0d0d0d]">
      {panels.map((p) => (
        <Panel key={p.id} {...p} />
      ))}
    </div>
  )
}
