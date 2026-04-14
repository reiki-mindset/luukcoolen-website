import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { CheckCircle2, Quote } from 'lucide-react';

export function AudienceAndVision() {
  return (
    <Section bg="dark" id="visie">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">Voor wie ik dit doe</h2>
            <div className="text-slate-400 mb-8 leading-relaxed text-lg space-y-4">
              <p>
                Veel bestaande software is gemaakt voor grotere organisaties en lange implementaties.
              </p>
              <p>
                Ik werk juist met kleinere teams die:
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "snel willen testen wat werkt",
                "openstaan voor verandering",
                "eenvoudige tools nodig hebben",
                "administratieve druk ervaren"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 size={18} className="text-brand shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-6">Typische samenwerkingen</h3>
              <ul className="space-y-4">
                <li className="text-slate-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  Bewindvoerderskantoren
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  Zorgteams & Professionals
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand/10">
            <Quote size={120} fill="currentColor" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white leading-tight">Mijn visie</h2>
            <div className="italic text-slate-300 space-y-8 text-xl md:text-2xl leading-relaxed font-serif">
              <p>
                "Techniek en processen zijn geen doel op zich. Ze moeten professionals helpen om betere keuzes te maken en aandacht te houden voor mensen."
              </p>
              <p className="text-brand not-italic font-sans text-lg font-bold">
                — Klein bouwen, testen en verbeteren wat echt werkt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
