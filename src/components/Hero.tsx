import { ArrowRight, Blocks, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <header className="relative pt-20 pb-20 md:pt-32 md:pb-40 px-6 md:px-12 max-w-5xl mx-auto overflow-visible">
      <div className="relative z-10 max-w-3xl">
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

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full pointer-events-none overflow-visible hidden lg:block opacity-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-0 w-72 h-96 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col gap-6 rotate-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-50 text-brand rounded-2xl flex items-center justify-center">
              <Blocks size={24} />
            </div>
            <div className="space-y-2 flex-1">
              <div className="w-1/2 h-2 bg-slate-100 rounded" />
              <div className="w-3/4 h-2 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-4 space-y-3">
            <div className="h-16 bg-white rounded-xl border border-slate-100" />
            <div className="h-16 bg-white rounded-xl border border-slate-100" />
            <div className="h-16 bg-teal-500/10 rounded-xl border border-teal-100 flex items-center justify-center text-brand">
              <BrainCircuit size={24} />
            </div>
          </div>
          <div className="h-10 bg-teal-500/10 rounded-xl" />
        </motion.div>
      </div>
    </header>
  );
}
