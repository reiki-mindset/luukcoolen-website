import { ShieldCheck, X } from 'lucide-react';

type PrivacyProps = {
  onClose: () => void;
};

export function Privacy({ onClose }: PrivacyProps) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
          aria-label="Sluit privacyinformatie"
        >
          <X size={20} />
        </button>

        <div className="mb-6 pr-10">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-teal-500/20">
            <ShieldCheck size={24} />
          </div>
          <h2 id="privacy-title" className="mb-4 text-3xl font-bold leading-tight md:text-4xl">Privacy</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Deze portfolio-site is bewust eenvoudig gehouden. Ik gebruik de website om mijn werk en leerproces te tonen, niet om bezoekers te volgen.
          </p>
        </div>

        <div className="space-y-5 text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">Cookies en tracking</h3>
            <p className="leading-relaxed">
              Op deze site gebruik ik geen trackingcookies, advertentiecookies, analyticscookies of pixels. Er staat ook geen contactformulier op de website.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">Contact</h3>
            <p className="leading-relaxed">
              Als je mij mailt via de contactlink, ontvang ik alleen de gegevens die je zelf in je e-mail zet. Die gebruik ik om te reageren op je bericht.
            </p>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-brand-light/70 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">Waarom geen cookiebanner?</h3>
            <p className="leading-relaxed text-slate-700">
              Omdat deze site geen tracking of analytics gebruikt, is een cookiebanner op dit moment niet nodig. Als ik later privacyvriendelijke statistieken toevoeg, pas ik deze informatie aan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
