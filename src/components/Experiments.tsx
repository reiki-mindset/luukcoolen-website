import { useState } from 'react';
import type { ReactNode } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Brain, CheckCircle2, Home, LayoutTemplate, Maximize2, X } from 'lucide-react';
import { motion } from 'motion/react';

type Prototype = {
  title: string;
  label: string;
  status: string;
  icon: ReactNode;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
  href?: string;
  cta: string;
};

const prototypes: Prototype[] = [
  {
    title: 'FocusFlow',
    label: 'bewindvoering / prioriteren / overzicht',
    status: 'Live prototype',
    icon: <LayoutTemplate size={24} />,
    description:
      'FocusFlow onderzoekt hoe taken, dossierinformatie en prioriteiten kunnen samenkomen in een helder actiebeeld. Het prototype helpt om complexe cliëntvragen voor te bereiden en de volgende stap scherper te maken.',
    bullets: [
      'Grip op versnipperde dossierinformatie',
      'Focus op urgentie, context en vervolgstap',
      'Weekplanning en reflectie als onderdeel van de workflow',
    ],
    image: {
      src: '/projects/focusflow-overview.jpg',
      alt: 'FocusFlow overzicht met werkdagen, prioriteiten en reflectie',
    },
    href: '/focusflow',
    cta: 'Bekijk FocusFlow live hier',
  },
  {
    title: 'Woonbuddy',
    label: 'zelfstandig wonen / begeleiding / structuur',
    status: 'Live prototype',
    icon: <Home size={24} />,
    description:
      'Woonbuddy is een prototype voor mensen die ondersteuning nodig hebben bij wonen, taken, huisregels en persoonlijke ontwikkeling. De app vertaalt begeleiding naar overzichtelijke stappen en vaste ankerpunten.',
    bullets: [
      'Dagelijkse taken en activiteiten zichtbaar maken',
      'Huisregels, links en begeleiding op één plek',
      'Ontwikkeling bijhouden zonder zware administratie',
    ],
    image: {
      src: '/projects/woonbuddy-overview.jpg',
      alt: 'Woonbuddy overzicht met startpagina, taken en ontwikkeling',
    },
    cta: 'Bekijk Woonbuddy live hier',
  },
  {
    title: 'MindFlow',
    label: 'reflectie / coaching / mentale rust',
    status: 'Live prototype',
    icon: <Brain size={24} />,
    description:
      'MindFlow verkent hoe een AI-coach kan helpen om gedachten, patronen en hypotheses rustig te ordenen. Niet als vervanging van begeleiding, maar als veilige structuur om sneller tot inzicht te komen.',
    bullets: [
      'Starten vanuit een duidelijke coachvraag',
      'Patronen en hypotheses zichtbaar maken',
      'Een actieve sessie waarin reflectie concreet wordt',
    ],
    image: {
      src: '/projects/mindflow-overview.jpg',
      alt: 'MindFlow overzicht met dashboard, coachsessie en principes',
    },
    cta: 'Bekijk MindFlow live hier',
  },
];

function PrototypeImage({
  image,
  title,
  onOpen,
}: {
  image: Prototype['image'];
  title: string;
  onOpen: (image: Prototype['image']) => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      onClick={() => onOpen(image)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
      aria-label={`Vergroot screenshot van ${title}`}
    >
      <img src={image.src} alt={image.alt} loading="lazy" className="w-full object-contain object-top" />
      <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition-transform group-hover:scale-105">
        <Maximize2 size={18} />
      </span>
      <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        Klik om te vergroten
      </span>
    </motion.button>
  );
}

function PrototypeCase({
  prototype,
  index,
  onOpen,
}: {
  prototype: Prototype;
  index: number;
  onOpen: (image: Prototype['image']) => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="card-3d relative p-6 md:p-10">
        <div className={`grid gap-10 lg:grid-cols-12 lg:items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-teal-500/20">
                {prototype.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{prototype.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand">{prototype.label}</p>
              </div>
            </div>

            <div className="mb-6 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
              {prototype.status}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-700">{prototype.description}</p>

            <ul className="mb-8 space-y-4">
              {prototype.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            {prototype.href ? (
              <a href={prototype.href} className="inline-flex items-center gap-2 font-bold text-brand group/link">
                {prototype.cta}
                <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-bold text-slate-400">
                {prototype.cta}
                <ArrowRight size={18} />
              </span>
            )}
          </div>

          <div className="lg:col-span-7">
            <PrototypeImage image={prototype.image} title={prototype.title} onOpen={onOpen} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Experiments() {
  const [activeImage, setActiveImage] = useState<Prototype['image'] | null>(null);

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
          <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Projecten en prototypes</h2>
          <div className="space-y-6 text-xl leading-relaxed text-slate-600">
            <p>
              Geen perfecte producten, maar tastbare experimenten. Ik gebruik projecten om te leren, aannames te testen en praktijkproblemen concreet te maken.
            </p>
            <p className="font-medium text-slate-900">
              De rode draad: overzicht, structuur, besluitvorming en mentale rust in complexe situaties.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="space-y-16">
        {prototypes.map((prototype, index) => (
          <div key={prototype.title}>
            <PrototypeCase prototype={prototype} index={index} onOpen={setActiveImage} />
          </div>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
            onClick={() => setActiveImage(null)}
            aria-label="Sluit vergrote afbeelding"
          >
            <X size={22} />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[92vh] max-w-[96vw] rounded-2xl bg-white object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </Section>
  );
}
