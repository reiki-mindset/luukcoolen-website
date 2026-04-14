import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <Section bg="light" id="over-mij">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">De brug tussen de werkvloer en technologie</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Ik ben <span className="font-semibold text-slate-900">Luuk Coolen</span>, bewindvoerder met een achtergrond in maatschappelijk werk.
          </p>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              In de praktijk zag ik waar het vastloopt: niet door gebrek aan inzet, maar door systemen en werkwijzen die niet goed aansluiten op het werk.
            </p>
            <p>
              Ik analyseer die knelpunten en vertaal ze naar concrete oplossingen.
            </p>
            <p className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-slate-900 font-medium italic">
              "Geen externe consultant — maar iemand die midden in de praktijk staat en bouwt, test en leert wat echt werkt."
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-3d p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand/10 text-brand rounded-lg">
                <Briefcase size={20} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Werkervaring</h3>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Bewindvoerder",
                  desc: "Werken met complexe dossiers waarin financiële, juridische en persoonlijke situaties samenkomen."
                },
                {
                  title: "Persoonlijk begeleider (GGZ / LVB)",
                  desc: "Begeleiding van cliënten met psychische kwetsbaarheid. Ervaring met structuur aanbrengen."
                },
                {
                  title: "Vrijwilliger thuisadministratie",
                  desc: "Ondersteunen bij het creëren van overzicht in administratie en informatie."
                }
              ].map((job, i) => (
                <div key={i} className="group relative pl-6 border-l-2 border-slate-100 hover:border-brand transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-100 group-hover:border-brand transition-colors" />
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{job.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-3d p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand/10 text-brand rounded-lg">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Opleiding & Achtergrond</h3>
            </div>
            
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "HBO Maatschappelijk Werk",
                "NLP Practitioner (i.o.)",
                "Gedragsproblematiek trainingen",
                "Zelfstudie AI tools en toepassingen"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 text-sm p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <ChevronRight size={14} className="text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
