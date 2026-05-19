import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Bot, Hammer, MousePointerClick, Search } from 'lucide-react';

export function Approach() {
  const steps = [
    {
      icon: <Search size={24} />,
      title: 'Praktijksignaal herkennen',
      description: 'Ik begin bij situaties die ik herken uit zorg, bewindvoering of persoonlijke structuur: waar ontstaat ruis, tijdverlies of mentale druk?',
    },
    {
      icon: <Bot size={24} />,
      title: 'Samen denken met AI',
      description: 'Met tools als ChatGPT, Gemini, Cursor en Google AI Studio verken ik snel richtingen, teksten, flows en technische opties.',
    },
    {
      icon: <Hammer size={24} />,
      title: 'Klein prototype bouwen',
      description: 'Daarna maak ik iets tastbaars: een scherm, workflow, mini-app of experiment dat je kunt aanklikken en beoordelen.',
    },
    {
      icon: <MousePointerClick size={24} />,
      title: 'Testen en aanscherpen',
      description: 'Ik kijk wat duidelijker wordt, wat schuurt en wat ik leer. Het doel is niet meteen perfectie, maar sneller begrijpen wat werkt.',
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Hoe ik werk</h2>
          <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl">
            Ik gebruik AI niet als trucje, maar als bouwpartner om sneller van vaag probleem naar zichtbaar prototype te komen.
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
