import { FileSearch, HeartHandshake, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { Section } from './ui/Section';

const questions = [
  {
    icon: <FileSearch size={21} />,
    text: 'Hoe kunnen we informatie beter beschikbaar en begrijpelijk maken?',
  },
  {
    icon: <Workflow size={21} />,
    text: 'Hoe kunnen we processen overzichtelijker maken voor cliënten en professionals?',
  },
  {
    icon: <HeartHandshake size={21} />,
    text: 'Hoe kan technologie ondersteunen zonder de menselijke kant uit het oog te verliezen?',
  },
];

export function WhyProjects() {
  return (
    <Section bg="white">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">Motivatie</p>
          <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Waarom ik deze projecten bouw</h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              De projecten op deze website zijn ontstaan vanuit situaties die ik in de praktijk tegenkwam.
            </p>
            <p>
              Ik zag dat cliënten tussen begeleidingsmomenten door soms structuur, overzicht of een duidelijke volgende stap missen. Tegelijkertijd zag ik hoeveel tijd professionals kwijt zijn aan zoeken, informatie combineren en werken met systemen die niet altijd logisch op elkaar aansluiten.
            </p>
            <p>
              De prototypes zijn mijn manier om deze vraagstukken te onderzoeken: niet als eindproducten, maar als experimenten om te leren wat in de praktijk kan ondersteunen.
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

      <div className="mt-12 border-l-4 border-brand bg-brand-light px-6 py-5 md:px-8">
        <p className="max-w-4xl text-lg font-medium leading-relaxed text-slate-800">
          Ik wil de brug zijn tussen wat cliënten nodig hebben, wat professionals in de praktijk meemaken en wat digitale hulpmiddelen kunnen betekenen.
        </p>
      </div>
    </Section>
  );
}
