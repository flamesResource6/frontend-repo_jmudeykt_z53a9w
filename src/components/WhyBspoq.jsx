import { motion } from 'framer-motion'

export default function WhyBspoq() {
  return (
    <section className="relative bg-[#0b0c10] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-white md:text-3xl">
          Built by Bspoq — experts in BigCommerce B2B, data optimisation, and automation
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mx-auto mt-4 max-w-3xl text-slate-300">
          We design and ship high-clarity, high-velocity solutions across integrations, catalogue health, and operational workflows. Proven with BigCommerce B2B Edition, custom data pipelines, and enterprise-grade automation.
        </motion.p>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {[
            ['B2B Edition', 'Complex accounts, pricing, and approvals'],
            ['Data pipelines', 'Enrichment, normalisation, governance'],
            ['Integrations', 'ERPs, PIMs, 3PLs, marketplaces'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-cyan-400/20 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">{t}</div>
              <div className="mt-1 text-xs text-slate-300/90">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
