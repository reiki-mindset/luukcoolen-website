import { Section } from './ui/Section';
import { Activity, ArrowRight, Brain, CheckCircle2, Dumbbell, Home, LayoutTemplate, SearchCode, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Experiments() {
  const projects = [
    {
      icon: <Home size={20} />,
      title: 'Woonbuddy',
      label: 'zelfstandig wonen / structuur',
      status: 'Concept',
      description: 'Een idee voor een steunende structuurtool rond wonen, routines en praktische stappen voor mensen die overzicht nodig hebben.',
    },
    {
      icon: <Brain size={20} />,
      title: 'MindFlow',
      label: 'reflectie / mentale rust',
      status: 'Verkenning',
      description: 'Een experiment rond gedachten ordenen, patronen herkennen en mentale druk vertalen naar behapbare vervolgstappen.',
    },
    {
      icon: <Dumbbell size={20} />,
      title: 'FitFlow',
      label: 'gewoontes / energie',
      status: 'Idee',
      description: 'Een kleine toolrichting voor ritme, energie en persoonlijke voortgang zonder dat het een zware tracking-app wordt.',
    },
    {
      icon: <SearchCode size={20} />,
      title: 'Vibe Audit AI',
      label: 'analyse / patronen',
      status: 'Prototype',
      description: 'Een onderzoek naar hoe AI losse signalen kan samenvatten tot bruikbare inzichten en betere vragen.',
    },
  ];

  return (
    <Section bg="light" id="projecten">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Projecten en prototypes</h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>
              Geen perfecte producten, maar tastbare experimenten. Ik gebruik projecten om te leren, aannames te testen en praktijkproblemen concreet te maken.
            </p>
            <p className="text-slate-900 font-medium">
              De rode draad: overzicht, structuur, besluitvorming en mentale rust in complexe situaties.
            </p>
          </div>
        </motion.div>
      </div>

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
                    <span className="text-xs font-bold text-brand uppercase tracking-widest">Featured prototype / bewindvoering</span>
                  </div>
                </div>

                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  FocusFlow onderzoekt hoe taken, dossierinformatie en prioriteiten kunnen samenkomen in een helder actiebeeld. Het prototype helpt om complexe cliëntvragen voor te bereiden en de volgende stap scherper te maken.
                  <br />
                  <span className="font-semibold text-brand">Minder zoeken, meer richting.</span>
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    'Waarom gebouwd: grip op versnipperde dossierinformatie',
                    'Status: live prototype',
                    'Onderzocht: prioriteren en samenvatten',
                    'Geleerd: kleine focus helpt meer dan een groot dashboard',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-brand shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/focusflow"
                  className="inline-flex items-center gap-2 text-brand font-bold group/link"
                >
                  Bekijk FocusFlow
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} className="text-brand" />
                      <div className="w-24 h-3 bg-slate-200 rounded" />
                    </div>
                    <div className="w-16 h-6 bg-brand/10 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-slate-200 rounded" />
                    <div className="w-3/4 h-2 bg-slate-200 rounded" />
                  </div>
                  <div className="pt-4 grid grid-cols-2 gap-3">
                    <div className="h-20 bg-white rounded-xl border border-slate-100" />
                    <div className="h-20 bg-teal-500/10 rounded-xl border border-teal-100 flex items-center justify-center text-brand">
                      <Activity size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-8 flex items-center gap-4">
          <span className="w-8 h-px bg-slate-200" />
          Andere experimenten
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                {project.icon}
              </div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <h4 className="font-bold text-slate-900">{project.title}</h4>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{project.label}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
