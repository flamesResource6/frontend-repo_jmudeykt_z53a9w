import { Rocket, Database, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const apps = [
  {
    key: 'bc2bc',
    name: 'BC2BC',
    tagline: 'Supplier-to-Distributor syncing for BigCommerce.',
    bullets: [
      'Multi-store product mirroring with pricing rules',
      'Automated SKU + inventory syncs',
      'Order + fulfillment passthrough',
    ],
    icon: Rocket,
  },
  {
    key: 'datagrade',
    name: 'DataGrade',
    tagline: 'Catalogue scoring and bulk editing for cleaner data.',
    bullets: [
      'Automated quality grades (A–F)',
      'Bulk attribute fixes and enrichment',
      'Image, SEO, and schema checks',
    ],
    icon: Database,
  },
  {
    key: 'oversell',
    name: 'Oversell',
    tagline: 'Smart buffers to sell confidently at zero stock.',
    bullets: [
      'Dynamic safety stock per SKU/channel',
      'Predictive throttling to avoid stockouts',
      'Rules by vendors, categories, or tags',
    ],
    icon: Shield,
  },
]

export default function AppOverview() {
  return (
    <section id="apps" className="relative bg-[#0d0d0d] py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Three apps. One goal: growth.</h2>
          <p className="hidden text-sm text-slate-300 md:block">High contrast, clean structure, built for speed.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {apps.map((app, i) => (
            <motion.div
              key={app.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-2xl"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-400/20" />
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <app.icon size={22} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{app.name}</h3>
              <p className="mb-4 text-slate-300">{app.tagline}</p>
              <ul className="mb-6 space-y-2 text-sm text-slate-300/90">
                {app.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={`#${app.key}`} className="inline-flex items-center text-cyan-300 hover:text-cyan-200">
                <span className="text-sm font-semibold">Learn More</span>
                <span className="ml-1 text-cyan-300">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
