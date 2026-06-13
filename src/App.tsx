import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Hero } from './components/Hero';
import { Experiments } from './components/Experiments';
import { Approach } from './components/Approach';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Privacy } from './components/Privacy';
import { projectLinks } from './config/projectLinks';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const projectsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!projectsMenuRef.current?.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-mesh font-sans text-slate-900">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass z-50 rounded-2xl border-slate-200/50">
        <div className="px-4 md:px-10 h-16 flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-col">
            <span className="font-serif font-semibold text-lg tracking-tight text-slate-900 leading-none">Luuk Coolen</span>
            <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mt-1">Leerportfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#projecten" className="hover:text-brand transition-colors">Projecten</a>
            <a href="#werkwijze" className="hover:text-brand transition-colors">Werkwijze</a>
            <a href="#over-mij" className="hover:text-brand transition-colors">Over mij</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div ref={projectsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsProjectsOpen((isOpen) => !isOpen)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/75 px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-teal-200 hover:text-brand md:px-4"
                aria-expanded={isProjectsOpen}
                aria-haspopup="menu"
              >
                Projecten
                <ChevronDown size={16} className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProjectsOpen ? (
                <div
                  className="absolute right-0 top-full mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10"
                  role="menu"
                >
                  <div className="py-2">
                    {projectLinks.map((project) => (
                      <a
                        key={project.href}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsProjectsOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-brand-light"
                        role="menuitem"
                      >
                        <span>
                          <span className="block text-sm font-bold text-slate-800">{project.label}</span>
                          {project.description ? (
                            <span className="mt-0.5 block text-xs font-medium text-slate-500">{project.description}</span>
                          ) : null}
                        </span>
                        <ExternalLink size={15} className="shrink-0 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <a href="#contact" className="text-sm font-bold bg-brand text-white px-4 py-2.5 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-teal-500/20 active:scale-95 md:px-5">
              Contact
            </a>
          </div>
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
