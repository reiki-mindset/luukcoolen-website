import { Bot, GitBranch, Network, Search, Waypoints } from 'lucide-react';
import { motion } from 'motion/react';
import { Section } from './ui/Section';

const lessons = [
  {
    icon: <Search size={21} />,
    title: 'Van idee naar probleemanalyse',
    description: 'Ik begin minder snel met bouwen en onderzoek eerst waar gebruikers tegenaan lopen, wat het doel is en welk probleem werkelijk opgelost moet worden.',
  },
  {
    icon: <GitBranch size={21} />,
    title: 'Van losse prompts naar sprints',
    description: 'Ik deel ontwikkeling op in kleinere stappen, maak keuzes expliciet en toets tussentijds wat werkt voordat ik verder bouw.',
  },
  {
    icon: <Waypoints size={21} />,
    title: 'Van functionaliteit naar workflow',
    description: 'Een mooie interface heeft weinig waarde als de volgorde, informatieoverdracht en onderliggende werkstappen niet kloppen.',
  },
  {
    icon: <Bot size={21} />,
    title: 'Van AI gebruiken naar AI aansturen',
    description: 'AI ondersteunt mijn werk, maar vervangt geen analyse. Betere vragen, kaders en controles leiden tot bruikbaardere uitkomsten.',
  },
  {
    icon: <Network size={21} />,
    title: 'Van prototype naar procesdenken',
    description: 'Ik kijk nu ook naar informatiearchitectuur, dataopslag, beheer, versiebeheer en wat een oplossing nodig heeft om duurzaam bruikbaar te blijven.',
  },
];

export function Lessons() {
  return (
    <Section bg="white" className="border-y border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">Ontwikkeling</p>
        <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Wat deze projecten mij hebben geleerd</h2>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600 md:text-xl">
          <p>
            Toen ik met FocusFlow begon, zag ik vooral wat beter kon en was bouwen vaak mijn eerste stap. Gaandeweg ontdekte ik dat bruikbare digitale oplossingen niet beginnen bij schermen of functies, maar bij het begrijpen van het probleem.
          </p>
          <p>
            Door FocusFlow, Woonbuddy, MindFlow en andere prototypes ben ik steeds meer gaan denken vanuit gebruikersbehoeften, workflows, informatieoverdracht, prioritering en procesanalyse.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson, index) => (
          <motion.article
            key={lesson.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
              {lesson.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold leading-snug">{lesson.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{lesson.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
        <p className="max-w-4xl text-lg leading-relaxed text-slate-700">
          Deze ontwikkeling heeft mijn interesse in functioneel beheer, applicatiebeheer en zorgdigitalisering versterkt. Niet omdat ik softwareontwikkelaar wil worden, maar omdat ik gebruikers, processen en systemen beter op elkaar wil laten aansluiten.
        </p>
      </div>
    </Section>
  );
}
