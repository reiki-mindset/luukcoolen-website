export type ProjectLink = {
  label: string;
  href: string;
  description?: string;
};

export const projectLinks: ProjectLink[] = [
  {
    label: 'FocusFlow Bewind',
    href: 'https://focusflow.luukcoolen.nl/',
    description: 'Workflow en prioritering',
  },
  {
    label: 'FocusFlow Personal',
    href: 'https://luukcoolen.nl/focusflow-personal',
    description: 'Persoonlijke structuur',
  },
  {
    label: 'Woonbuddy',
    href: 'https://woonbuddy.luukcoolen.nl/',
    description: 'Wonen en begeleiding',
  },
  {
    label: 'MindFlow',
    href: 'https://mindflow.luukcoolen.nl/',
    description: 'AI en reflectie',
  },
  {
    label: 'Eerste Stap',
    href: 'https://luukcoolen.nl/eerstestap',
    description: 'Demo',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/reiki-mindset',
    description: 'Code en projecten',
  },
];
