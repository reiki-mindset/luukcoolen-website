import type { ReactNode } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Brain, CheckCircle2, Home, LayoutTemplate } from 'lucide-react';
import { motion } from 'motion/react';

type Prototype = {
  title: string;
  label: string;
  status: string;
  icon: ReactNode;
  description: string;
  bullets: string[];
  images: {
    src: string;
    alt: string;
  }[];
  href?: string;
  cta?: string;
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
    images: [
      { src: '/projects/focusflow-stap-2.jpg', alt: 'FocusFlow intake en inbox scan' },
      { src: '/projects/focusflow-stap-4.jpg', alt: 'FocusFlow actieplan en top drie' },
      { src: '/projects/focusflow-weekplanning.jpg', alt: 'FocusFlow weekplanning' },
    ],
    href: '/focusflow',
    cta: 'Bekijk FocusFlow',
  },
  {
    title: 'Woonbuddy',
    label: 'zelfstandig wonen / begeleiding / structuur',
    status: 'Prototype',
    icon: <Home size={24} />,
    description:
      'Woonbuddy is een prototype voor mensen die ondersteuning nodig hebben bij wonen, taken, huisregels en persoonlijke ontwikkeling. De app vertaalt begeleiding naar overzichtelijke stappen en vaste ankerpunten.',
    bullets: [
      'Dagelijkse taken en activiteiten zichtbaar maken',
      'Huisregels, links en begeleiding op één plek',
      'Ontwikkeling bijhouden zonder zware administratie',
    ],
    images: [
      { src: '/projects/woonbuddy-startpagina.jpg', alt: 'Woonbuddy startpagina' },
      { src: '/projects/woonbuddy-taken.jpg', alt: 'Woonbuddy takenoverzicht' },
      { src: '/projects/woonbuddy-ontwikkeling.jpg', alt: 'Woonbuddy ontwikkeling' },
    ],
  },
  {
    title: 'MindFlow',
    label: 'reflectie / coaching / mentale rust',
    status: 'Verkenning',
    icon: <Brain size={24} />,
    description:
      'MindFlow verkent hoe een AI-coach kan helpen om gedachten, patronen en hypotheses rustig te ordenen. Niet als vervanging van begeleiding, maar als veilige structuur om sneller tot inzicht te komen.',
    bullets: [
      'Starten vanuit een duidelijke coachvraag',
      'Patronen en hypotheses zichtbaar maken',
      'Een actieve sessie waarin reflectie concreet wordt',
    ],
    images: [
      { src: '/projects/mindflow-dashboard.jpg', alt: 'MindFlow dashboard' },
      { src: '/projects/mindflow-active-session.jpg', alt: 'MindFlow actieve sessie' },
      { src: '/projects/mindflow-kaders.jpg', alt: 'MindFlow kaders voor coaching' },
    ],
  },
];

function ScreenshotStack({ images, title }: Pick<Prototype, 'images' | 'title'>) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {images.map((image, index) => (
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ${
            index === 0 ? 'lg:-rotate-1' : index === 1 ? 'lg:ml-10 lg:rotate-1' : 'lg:mr-10 lg:-rotate-1'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="aspect-[4/3] h-full w-full object-contain object-top"
          />
          <figcaption className="sr-only">
            {title}: {image.alt}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

function PrototypeCase({ prototype, index }: { prototype: Prototype; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-[2.5rem] bg-brand/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="card-3d relative p-6 md:p-10">
        <div className={`grid gap-10 lg:grid-cols-12 lg:items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          <div className="lg:col-span-6">
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

            {prototype.href && prototype.cta ? (
              <a href={prototype.href} className="inline-flex items-center gap-2 font-bold text-brand group/link">
                {prototype.cta}
                <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            ) : null}
          </div>

          <div className="lg:col-span-6">
            <ScreenshotStack images={prototype.images} title={prototype.title} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Experiments() {
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
            <PrototypeCase prototype={prototype} index={index} />
          </div>
        ))}
      </div>
    </Section>
  );
}
