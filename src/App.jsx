import Hero from './components/Hero'
import AppOverview from './components/AppOverview'
import DeepDives from './components/DeepDives'
import WhyBspoq from './components/WhyBspoq'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0d0d0d]/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
            <span className="text-sm font-semibold tracking-wide text-white/90">Bspoq Apps</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#apps" className="hover:text-white">Apps</a>
            <a href="#bc2bc" className="hover:text-white">BC2BC</a>
            <a href="#datagrade" className="hover:text-white">DataGrade</a>
            <a href="#oversell" className="hover:text-white">Oversell</a>
            <a href="#cta" className="rounded-md border border-cyan-400/40 px-3 py-1.5 text-white/90 hover:bg-white/5">Book a Demo</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <AppOverview />
        <DeepDives />
        <WhyBspoq />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0c10] py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Bspoq. All rights reserved.
      </footer>
    </div>
  )
}

export default App
