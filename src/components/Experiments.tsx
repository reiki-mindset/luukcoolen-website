import { Section } from './ui/Section';
import { Terminal, LayoutTemplate, Brain, Home, Activity, SearchCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Experiments() {
  const secondaryProjects = [
    {
      icon: <Home size={20} />,
      title: "Woonbuddy",
      description: "Biedt structuur en overzicht bij zelfstandig wonen voor cliënten die ondersteuning nodig hebben."
    },
    {
      icon: <SearchCode size={20} />,
      title: "Vibe Audit AI",
      description: "Herkent patronen in uitgaven en vertaalt deze naar bruikbare inzichten."
    }
  ];

  return (
    <Section bg="light" id="experimenten">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Wat ik nu bouw en test</h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>
              Geen grote trajecten, maar kleine, praktische experimenten. 
              Vanuit de praktijk: <span className="text-slate-900 font-medium">idee → bouwen → testen → verbeteren</span>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Project: FocusFlow */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-brand/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative card-3d p-8 md:p-12 border-brand/20 shadow-teal-500/5">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand text-white rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <LayoutTemplate size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">FocusFlow</h3>
                    <span className="text-xs font-bold text-brand uppercase tracking-widest">bewindvoering / structuur</span>
                  </div>
                </div>
                
                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  FocusFlow transformeert de dagelijkse stroom aan taken en dossierinformatie naar een scherp geprioriteerd actieplan met een heldere focus op je Top 3. Het helpt om complexe cliëntvragen beter voor te bereiden, zodat je met meer rust en regie van eerstvolgende stap naar besluit werkt.
                  <br />
                  <span className="font-semibold text-brand">Minder zoeken, meer beslissen.</span>
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Wat speelt er",
                    "Wat is urgent",
                    "Wat is de volgende stap"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-brand" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center gap-2 text-brand font-bold group/link">
                  Dit is waar mijn focus nu ligt
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="w-24 h-3 bg-slate-200 rounded" />
                    <div className="w-12 h-6 bg-brand/10 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-slate-200 rounded" />
                    <div className="w-3/4 h-2 bg-slate-200 rounded" />
                  </div>
                  <div className="pt-4 grid grid-cols-2 gap-3">
                    <div className="h-20 bg-white rounded-xl border border-slate-100" />
                    <div className="h-20 bg-white rounded-xl border border-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Secondary Projects & Hoe ik werk */}
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-slate-200" />
            Andere projecten
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {secondaryProjects.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                  {exp.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{exp.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-center"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Terminal size={20} className="text-brand" />
            Hoe ik werk
          </h3>
          <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
            <p>
              Ik gebruik AI-tools niet om antwoorden te krijgen, maar om sneller te bouwen en te testen.
            </p>
            <p>
              Geen lange plannen, maar werkende prototypes die direct in de praktijk gebruikt kunnen worden.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
