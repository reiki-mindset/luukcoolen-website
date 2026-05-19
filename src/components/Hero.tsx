import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <header className="relative pt-16 pb-20 md:pt-28 md:pb-36 px-6 md:px-12 max-w-5xl mx-auto overflow-visible">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16 items-center">
      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 lg:hidden"
        >
          <div className="relative aspect-[4/5] max-w-[260px] overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <img
              src="/luuk-coolen-portfolio.jpg"
              alt="Luuk Coolen"
              className="h-full w-full object-cover object-[47%_28%]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-slate-500 mb-2">Luuk Coolen</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6">
            Digitaal portfolio
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-brand">
            Praktijkgedreven prototypes rond structuur, overzicht en AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl"
        >
          <p>Ik bouw kleine digitale tools vanuit echte praktijkproblemen.</p>
          <p>
            Van bewindvoering en zorg tot AI-workflows, structuurtools en prototype-apps: ik onderzoek hoe technologie rust, overzicht en betere keuzes kan ondersteunen.
          </p>
          <p>Deze site laat zien wat ik maak, hoe ik denk en wat ik onderweg leer.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a
            href="#projecten"
            className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl hover:bg-brand-dark transition-all font-bold shadow-xl shadow-teal-500/20 active:scale-95"
          >
            Bekijk projecten
            <ArrowRight size={20} />
          </a>
          <a
            href="#werkwijze"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-50 transition-all font-bold border border-slate-200 shadow-sm active:scale-95"
          >
            Hoe ik bouw
          </a>
        </motion.div>
      </div>

      <div className="hidden lg:block relative z-0 self-start mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
        >
          <img
            src="/luuk-coolen-portfolio.jpg"
            alt="Luuk Coolen"
            className="h-full w-full object-cover object-[48%_26%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/5" />
        </motion.div>
      </div>
      </div>
    </header>
  );
}
