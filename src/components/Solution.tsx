import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Zap, Cpu, Layers, Layout } from 'lucide-react';

export function Solution() {
  const features = [
    {
      icon: <Zap className="text-amber-500" />,
      title: "Slimme Workflows",
      description: "Terugkerend werk wordt automatisch ondersteund. Geen handmatig zoeken of kopiëren, maar duidelijke stappen die je direct kunt uitvoeren."
    },
    {
      icon: <Cpu className="text-brand" />,
      title: "AI Dossier-assistentie",
      description: "Analyseer documenten en e-mails in één keer. Haal snel de kern uit grote hoeveelheden informatie en krijg hulp bij het vormen van inzicht."
    },
    {
      icon: <Layers className="text-blue-500" />,
      title: "Gecentraliseerd Overzicht",
      description: "Alle informatie op één plek, doorzoekbaar en logisch gestructureerd. Geen losse puzzelstukjes meer, maar één duidelijk beeld van het dossier."
    },
    {
      icon: <Layout className="text-purple-500" />,
      title: "Maatwerk Tools",
      description: "Kleine, gerichte oplossingen die aansluiten op jouw manier van werken. Tools die zich aanpassen aan jouw praktijk — niet andersom."
    }
  ];

  return (
    <Section bg="light" id="oplossing">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">De oplossing: Systemen die wél samenwerken</h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-4">
            <p>
              Ik bouw geen grote softwarepakketten, maar praktische oplossingen die precies ingrijpen waar het werk vastloopt.
            </p>
            <p>
              Niet door meer systemen toe te voegen — maar door informatie beter te verbinden en logisch te structureren.
            </p>
            <p className="text-slate-900 font-medium">
              Zodat jij sneller overzicht hebt en betere beslissingen kunt nemen.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-2xl border transition-all group ${
              index < 2 
                ? "bg-white border-slate-200 shadow-sm hover:shadow-md" 
                : "bg-slate-50/50 border-slate-100 opacity-90"
            }`}
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
