import { useState } from 'react';
import { Hero } from './components/Hero';
import { Experiments } from './components/Experiments';
import { Approach } from './components/Approach';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Privacy } from './components/Privacy';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mesh font-sans text-slate-900">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass z-50 rounded-2xl border-slate-200/50">
        <div className="px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg tracking-tight text-slate-900 leading-none">Luuk Coolen</span>
            <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mt-1">Leerportfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#projecten" className="hover:text-brand transition-colors">Projecten</a>
            <a href="#werkwijze" className="hover:text-brand transition-colors">Werkwijze</a>
            <a href="#over-mij" className="hover:text-brand transition-colors">Over mij</a>
          </div>
          <a href="#contact" className="text-sm font-bold bg-brand text-white px-5 py-2.5 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-teal-500/20 active:scale-95">
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-24 md:pt-32">
        <Hero />
        <Experiments />
        <Approach />
        <About />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <p className="mb-2">&copy; {new Date().getFullYear()} Luuk Coolen. Leerportfolio rond functioneel beheer, zorgdigitalisering en workflows.</p>
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
          className="inline-flex font-medium text-slate-300 transition-colors hover:text-white"
        >
          Privacy
        </button>
        <div className="flex justify-center gap-4 mt-4">
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div className="w-1 h-1 rounded-full bg-slate-700" />
        </div>
      </footer>

      {isPrivacyOpen ? <Privacy onClose={() => setIsPrivacyOpen(false)} /> : null}
    </div>
  );
}
