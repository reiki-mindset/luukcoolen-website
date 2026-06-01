import { ShieldCheck } from 'lucide-react';
import { Section } from './ui/Section';

export function Privacy() {
  return (
    <Section id="privacy" bg="white" className="border-t border-slate-200">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-teal-500/20">
            <ShieldCheck size={24} />
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">Privacy</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Deze portfolio-site is bewust eenvoudig gehouden. Ik gebruik de website om mijn werk en leerproces te tonen, niet om bezoekers te volgen.
          </p>
        </div>

        <div className="space-y-5 text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">Cookies en tracking</h3>
            <p className="leading-relaxed">
              Op deze site gebruik ik geen trackingcookies, advertentiecookies, analyticscookies of pixels. Er staat ook geen contactformulier op de website.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">Contact</h3>
            <p className="leading-relaxed">
              Als je mij mailt via de contactlink, ontvang ik alleen de gegevens die je zelf in je e-mail zet. Die gebruik ik om te reageren op je bericht.
            </p>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-brand-light/70 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">Waarom geen cookiebanner?</h3>
            <p className="leading-relaxed text-slate-700">
              Omdat deze site geen tracking of analytics gebruikt, is een cookiebanner op dit moment niet nodig. Als ik later privacyvriendelijke statistieken toevoeg, pas ik deze informatie aan.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
