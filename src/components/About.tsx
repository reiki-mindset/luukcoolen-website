import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Briefcase, ChevronRight, GraduationCap } from 'lucide-react';

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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Van praktijkervaring naar zorginnovatie</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Ik ben <span className="font-semibold text-slate-900">Luuk Coolen</span>, bewindvoerder met een achtergrond in maatschappelijk werk en een groeiende focus op zorginnovatie, procesverbetering en mensgerichte digitalisering.
          </p>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              In begeleiding, GGZ/LVB, maatschappelijke ondersteuning en bewindvoering heb ik gezien hoe belangrijk duidelijke workflows, goede informatieoverdracht en gebruiksvriendelijke systemen zijn.
            </p>
            <p>
              Daarom ben ik mij gaan verdiepen in digitale ondersteuning: hoe breng je behoeften in kaart, hoe maak je informatie bruikbaar en hoe zorg je dat hulpmiddelen aansluiten op cliënten en professionals?
            </p>
            <p className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-slate-900 font-medium italic">
              "Ik wil de brug zijn tussen wat cliënten nodig hebben, wat professionals in de praktijk meemaken en wat digitale hulpmiddelen kunnen betekenen."
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
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Praktijkervaring</h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'Bewindvoerder',
                  desc: 'Werken met complexe dossiers waarin informatie, prioriteiten, afspraken en besluitvorming zorgvuldig moeten samenkomen.',
                },
                {
                  title: 'Persoonlijk begeleider (GGZ / LVB)',
                  desc: 'Begeleiding van cliënten met psychische kwetsbaarheid en behoefte aan duidelijke stappen, overdracht en voorspelbaarheid.',
                },
                {
                  title: 'Vrijwilliger thuisadministratie',
                  desc: 'Ondersteunen bij overzicht in administratie, post, geldzaken en praktische vervolgstappen.',
                },
              ].map((job) => (
                <div key={job.title} className="group relative pl-6 border-l-2 border-slate-100 hover:border-brand transition-colors">
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
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400">Achtergrond</h3>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'HBO Maatschappelijk Werk',
                'Zorginnovatie en procesverbetering',
                'Mensgerichte digitalisering',
                'AI-workflows en digitale ondersteuning',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 text-sm p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <ChevronRight size={14} className="text-brand shrink-0" />
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
