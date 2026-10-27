import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS, SERVICES } from '../constants';
import { Project } from '../types';
import { Mail, Send, Clock, MapPin, Layout, Share2, Megaphone, FileText, Video } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Layout, Share2, Mail, Megaphone, FileText, Video
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Work Grid */}
      <section id="work" className="py-32 px-6 bg-brand-cream overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-4xl">
              <h2 className="text-6xl md:text-8xl font-display font-bold text-brand-blue leading-none tracking-tighter">
                Selected <span className="italic text-brand-blue/30">Works.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-brand-blue/10">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={setSelectedProject} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-brand-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-5/12 lg:w-1/3">
              <div className="relative group">
                {/* Structural accent border behind image */}
                <div className="absolute -inset-3 border-2 border-brand-blue/20 translate-x-3 translate-y-3 pointer-events-none transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                
                <div className="relative aspect-[4/5] bg-brand-cream border border-brand-blue/20 shadow-xl overflow-hidden">
                  <img 
                    src="/assets/aistudio/1697139374038_5961ba28.jpg" 
                    alt="Ali Fuentes Diaz" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-7/12 lg:w-2/3 pt-4 md:pt-2">
              <span className="text-brand-blue/60 font-medium tracking-[0.2em] mb-6 block uppercase text-sm">About Me</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8 text-brand-blue">
                I combine technical precision with creative flair to build robust visual identities.
              </h2>
              <div className="text-brand-blue/70 leading-relaxed space-y-6 text-lg">
                <p>
                  My name is Ali and I'm currently living in Montreal, Quebec. I'm a designer with four years of experience and a passion for exploring and experimenting with new ideas.
                </p>
                <p>
                  My strengths include responsibility, organization, meticulous attention to detail, and adaptability. I'm focused on advancing my career and I'm proud of my professional and personal achievements. I'm particularly interested in digital media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-cream border-t border-brand-blue/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-blue mb-8">
                Let's <br/>
                <span className="italic text-brand-blue/60">Collaborate.</span>
              </h2>
              <p className="text-xl text-brand-blue/70 mb-12 leading-relaxed max-w-md">
                Whether you need a comprehensive brand overhaul, a technical manual layout, or a packaging suite, I'm here to help bring your vision to life.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 rounded-full text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue uppercase tracking-wider text-sm mb-1">Email</h3>
                    <a href="mailto:alifuentesdiaz@gmail.com" className="text-lg text-brand-blue/80 hover:text-brand-blue transition-colors border-b border-transparent hover:border-brand-blue">
                      alifuentesdiaz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 rounded-full text-brand-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue uppercase tracking-wider text-sm mb-1">Response Time</h3>
                    <p className="text-lg text-brand-blue/80">
                      Usually within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/5 rounded-full text-brand-blue">
                     <MapPin size={24} />
                  </div>
                   <div>
                    <h3 className="font-bold text-brand-blue uppercase tracking-wider text-sm mb-1">Location</h3>
                    <p className="text-lg text-brand-blue/80">
                      Remote / Available Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-brand-blue">
              <h3 className="text-2xl font-display font-bold text-brand-blue mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-brand-cream/30 border-b-2 border-brand-blue/10 focus:border-brand-blue px-0 py-3 text-brand-blue outline-none transition-colors placeholder:text-brand-blue/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-brand-cream/30 border-b-2 border-brand-blue/10 focus:border-brand-blue px-0 py-3 text-brand-blue outline-none transition-colors placeholder:text-brand-blue/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Interested In</label>
                  <select className="w-full bg-brand-cream/30 border-b-2 border-brand-blue/10 focus:border-brand-blue px-0 py-3 text-brand-blue outline-none transition-colors cursor-pointer">
                    <option>Branding & Logofolio</option>
                    <option>Packaging Design</option>
                    <option>Manuals & Documentation</option>
                    <option>Social Media Assets</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-blue/60">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-brand-cream/30 border-b-2 border-brand-blue/10 focus:border-brand-blue px-0 py-3 text-brand-blue outline-none transition-colors placeholder:text-brand-blue/20 resize-none"
                    placeholder="Tell me about your project, timeline, and goals..."
                  ></textarea>
                </div>

                <button className="group w-full bg-brand-blue text-brand-cream py-4 px-8 font-semibold uppercase tracking-widest hover:bg-brand-lightBlue transition-all duration-300 flex items-center justify-center gap-2 mt-4">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </section>
    </>
  );
};