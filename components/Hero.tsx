import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative pt-20 overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-brand-blue/60 font-medium tracking-[0.2em] mb-4 animate-fade-in-up uppercase text-sm">
          Ali Fuentes Diaz 
        </h2>
        <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8 text-brand-blue">
          Visual Precision. <br />
          <span className="text-brand-blue/40 italic">
            Creative
          </span> Impact.
        </h1>
        <p className="text-lg md:text-xl text-brand-blue/70 max-w-xl leading-relaxed mb-12">
          Specializing in Digital Assets and Website Maintenance.
I translate complex information into clear designs that drive engagement and ensure seamless digital experiences.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="group relative px-8 py-3 bg-brand-blue text-brand-cream font-semibold overflow-hidden rounded-none transition-all duration-300 hover:bg-brand-darkBlue hover:-translate-y-1 shadow-lg hover:shadow-2xl flex items-center gap-3"
          >
             View Portfolio
             <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-8 py-3 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-cream hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-brand-blue">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};