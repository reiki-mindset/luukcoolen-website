import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Bot, ClipboardList, MousePointerClick, Search } from 'lucide-react';

export function Approach() {
  const steps = [
    {
      icon: <Search size={24} />,
      title: 'Praktijkprobleem analyseren',
      description: 'Ik begin bij de werkvloer: waar loopt informatie vast, welke stappen zijn onduidelijk en wat heeft de gebruiker nodig om rustig verder te kunnen?',
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Proces en informatie ordenen',
      description: 'Ik teken de workflow uit, groepeer informatie logisch en kijk waar overdracht, prioritering of gebruiksvriendelijkheid beter kan.',
    },
    {
      icon: <Bot size={24} />,
      title: 'AI-tools inzetten als hulpmiddel',
      description: 'Met AI-tools verken ik scenario’s, schermteksten en procesvarianten. AI is daarbij geen doel, maar een manier om sneller te leren en scherper te analyseren.',
    },
    {
      icon: <MousePointerClick size={24} />,
      title: 'Iteratief toetsen en verbeteren',
      description: 'Ik maak een klein, aanklikbaar voorbeeld en kijk wat duidelijker wordt, wat schuurt en welke vragen belangrijk zijn voor beheer, gebruik en doorontwikkeling.',
    },
  ];

  return (
    <Section bg="white" id="werkwijze">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Hoe ik analyseer en leer</h2>
          <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl">
            Mijn werkwijze is rustig en procesmatig: eerst begrijpen wat er gebeurt, dan structureren, testen en verbeteren. Zo onderzoek ik hoe digitale ondersteuning kan bijdragen aan betere zorgprocessen en mensgerichte dienstverlening.
          </p>
        </motion.div>

        <div className="space-y-12 relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shrink-0">
                {step.icon}
              </div>
              <div className="card-3d p-8 flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold text-brand bg-brand/10 px-2 py-0.5 rounded uppercase tracking-widest">Stap {index + 1}</span>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
