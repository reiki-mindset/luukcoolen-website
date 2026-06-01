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
  approach: string[];
  lessons: string[];
  image: {
    src: string;
    alt: string;
  };
  examples: {
    src: string;
    alt: string;
  }[];
  href?: string;
  cta: string;
};

const prototypes: Prototype[] = [
  {
    title: 'FocusFlow',
    label: 'workflowanalyse / dossiers / prioritering',
    status: 'Leerprototype',
    icon: <LayoutTemplate size={24} />,
    description:
      'FocusFlow is een leerprototype waarmee ik onderzocht hoe complexe dossierinformatie, taken en prioriteiten kunnen worden vertaald naar een duidelijke werkflow. De nadruk ligt op besluitvoorbereiding, informatieordening en ondersteuning van de gebruiker.',
    bullets: [
      'Analyse van versnipperde dossierinformatie en terugkerende werkstappen',
      'Prioritering op basis van urgentie, context en vervolgstap',
      'Weekplanning en reflectie als onderdeel van procesondersteuning',
    ],
    approach: [
      'Ik ben gestart bij de dagelijkse werkstroom: welke informatie komt binnen, waar ontstaat druk en welke keuzes moeten voorbereid worden?',
      'Daarna heb ik de stappen geordend in een werkmodus met signalen, inbox, agenda, prioriteiten, voorbereiding en weekplanning.',
    ],
    lessons: [
      'Prioriteren werkt pas goed als context, urgentie en vervolgstap eerst duidelijk zijn.',
      'Een goed systeem moet niet alleen taken tonen, maar ook helpen om rustiger tot besluitvorming te komen.',
    ],
    image: {
      src: '/projects/focusflow-overview.jpg',
      alt: 'FocusFlow overzicht met werkdagen, prioriteiten en reflectie',
    },
    examples: [
      { src: '/projects/focusflow-stap-2.jpg', alt: 'FocusFlow intake en inbox scan' },
      { src: '/projects/focusflow-stap-4.jpg', alt: 'FocusFlow actieplan en top drie' },
      { src: '/projects/focusflow-weekplanning.jpg', alt: 'FocusFlow weekplanning' },
    ],
    href: '/focusflow',
    cta: 'Bekijk FocusFlow live hier',
  },
  {
    title: 'Woonbuddy',
    label: 'gebruikersbehoefte / begeleiding / structuur',
    status: 'Leerprototype',
    icon: <Home size={24} />,
    description:
      'Woonbuddy laat zien hoe ik een ondersteuningsproces vertaal naar duidelijke informatie, vaste stappen en begrijpelijke navigatie. Het prototype is vooral een voorbeeld van gebruikersgericht denken vanuit begeleiding en dagelijkse structuur.',
    bullets: [
      'Gebruikersbehoeften vertalen naar overzichtelijke schermen',
      'Taken, huisregels en begeleiding logisch groeperen',
      'Structuur bieden zonder onnodige administratieve druk',
    ],
    approach: [
      'Ik heb gekeken naar situaties waarin bewoners of begeleiders snel overzicht nodig hebben: taken, afspraken, informatie en ontwikkeling.',
      'Vanuit die behoefte heb ik de informatie verdeeld in herkenbare onderdelen met eenvoudige taal en duidelijke navigatie.',
    ],
    lessons: [
      'Ondersteuning wordt bruikbaarder wanneer informatie niet alleen compleet is, maar ook rustig en voorspelbaar wordt aangeboden.',
      'Gebruikersgerichte digitalisering begint vaak bij taal, volgorde en het weghalen van overbodige keuzes.',
    ],
    image: {
      src: '/projects/woonbuddy-overview.jpg',
      alt: 'Woonbuddy overzicht met startpagina, taken en ontwikkeling',
    },
    examples: [
      { src: '/projects/woonbuddy-startpagina.jpg', alt: 'Woonbuddy startpagina' },
      { src: '/projects/woonbuddy-taken.jpg', alt: 'Woonbuddy takenoverzicht' },
      { src: '/projects/woonbuddy-ontwikkeling.jpg', alt: 'Woonbuddy ontwikkeling' },
    ],
    href: '/woonbuddy',
    cta: 'Bekijk Woonbuddy live hier',
  },
  {
    title: 'MindFlow',
    label: 'AI-workflow / reflectie / informatieordening',
    status: 'Leerprototype',
    icon: <Brain size={24} />,
    description:
      'MindFlow verkent hoe AI kan helpen om informatie, patronen en hypotheses rustig te ordenen. Voor mij is dit vooral een onderzoek naar AI als procesondersteuning: hoe maak je een complexe reflectiestroom veilig, begrijpelijk en bruikbaar?',
    bullets: [
      'Een gebruikersflow opbouwen vanuit een duidelijke startvraag',
      'Patronen en hypotheses zichtbaar maken zonder te veel ruis',
      'AI inzetten als hulpmiddel voor structuur en vervolgstappen',
    ],
    approach: [
      'Ik heb onderzocht hoe een AI-gesprek minder vrijblijvend kan worden door het te koppelen aan sessies, profielen, hypotheses en bronnen.',
      'De flow is uitgewerkt rond reflectie, samenvatten, patroonherkenning en het voorbereiden van een volgende stap.',
    ],
    lessons: [
      'AI wordt sterker als het proces eromheen duidelijk is: doel, context, begrenzing en controle door de gebruiker.',
      'Een reflectietool vraagt om rust en transparantie, niet om zoveel mogelijk functies op een scherm.',
    ],
    image: {
      src: '/projects/mindflow-overview.jpg',
      alt: 'MindFlow overzicht met dashboard, coachsessie en principes',
    },
    examples: [
      { src: '/projects/mindflow-dashboard.jpg', alt: 'MindFlow dashboard' },
      { src: '/projects/mindflow-active-session.jpg', alt: 'MindFlow actieve sessie' },
      { src: '/projects/mindflow-kaders.jpg', alt: 'MindFlow kaders voor coaching' },
    ],
    href: '/mindflow',
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
  const isExternalLink = prototype.href?.startsWith('http');

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

            <div className="mb-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Hoe ik te werk ging</h4>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                  {prototype.approach.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-teal-100 bg-brand-light/70 p-5">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Wat ik ervan leerde</h4>
                <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                  {prototype.lessons.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>

            {prototype.href ? (
              <a
                href={prototype.href}
                target={isExternalLink ? '_blank' : undefined}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-bold text-brand group/link"
              >
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
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Meer voorbeelden</p>
              <div className="grid grid-cols-3 gap-3">
                {prototype.examples.map((example) => (
                  <button
                    key={example.src}
                    type="button"
                    onClick={() => onOpen(example)}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
                    aria-label={`Vergroot voorbeeld van ${prototype.title}: ${example.alt}`}
                  >
                    <img src={example.src} alt={example.alt} loading="lazy" className="aspect-[4/3] w-full object-contain object-top" />
                    <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 text-white transition-colors group-hover:bg-slate-950/25">
                      <Maximize2 size={18} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
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
          <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">Voorbeelden van mijn werkwijze</h2>
          <div className="space-y-6 text-xl leading-relaxed text-slate-600">
            <p>
              De voorbeelden hieronder zijn geen eindproducten of apps die ik verkoop. Ze laten zien hoe ik processen analyseer, informatie structureer en gebruikersbehoeften vertaal naar digitale ondersteuning.
            </p>
            <p className="font-medium text-slate-900">
              De rode draad: functioneel beheer, zorgdigitalisering, workflowondersteuning en mensgerichte systemen.
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
