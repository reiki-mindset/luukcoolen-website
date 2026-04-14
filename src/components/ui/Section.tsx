import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'light' | 'white' | 'dark';
}

export function Section({ id, className = '', children, bg = 'light' }: SectionProps) {
  const bgColors = {
    light: 'bg-stone-50',
    white: 'bg-white',
    dark: 'bg-stone-900 text-stone-50',
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColors[bg]} ${className}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
