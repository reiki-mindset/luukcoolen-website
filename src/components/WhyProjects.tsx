import { FileSearch, HeartHandshake, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { Section } from './ui/Section';

const questions = [
  {
    icon: <FileSearch size={21} />,
    text: 'Hoe maken we belangrijke gegevens sneller vindbaar en begrijpelijk?',
  },
  {
    icon: <Workflow size={21} />,
    text: 'Hoe brengen we meer rust in terugkerende werkstappen?',
  },
  {
    icon: <HeartHandshake size={21} />,
    text: 'Waar helpt technologie en waar blijft menselijk contact leidend?',
  },
];

export function WhyProjects() {
  return (
    <Section bg="white" id="missie">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">Motivatie</p>
          <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Mijn missie</h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Ik bouw deze projecten omdat ik in zorg en bewindvoering terugkerende frictie zag: cliënten missen soms een duidelijke volgende stap, terwijl professionals tijd verliezen aan zoeken en administratie.
            </p>
            <p>
              Met kleine prototypes maak ik zulke knelpunten concreet en onderzoek ik waar digitale hulpmiddelen kunnen zorgen voor meer overzicht, continuïteit en ruimte voor contact.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 md:p-8"
        >
          <p className="mb-5 text-sm font-bold text-slate-900">Vragen die steeds terugkomen</p>
          <div className="divide-y divide-slate-200">
            {questions.map((question) => (
              <div key={question.text} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  {question.icon}
                </div>
                <p className="pt-1 text-sm font-medium leading-relaxed text-slate-700">{question.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </Section>
  );
}
