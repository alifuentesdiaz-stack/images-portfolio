import React from 'react';
import { Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-12 bg-brand-cream min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="animate-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-blue mb-8">
              Let's <br/>
              <span className="italic text-brand-blue/60">Collaborate.</span>
            </h1>
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
          <div className="bg-white p-8 md:p-12 shadow-2xl animate-in slide-in-from-right duration-700 delay-200 border-t-4 border-brand-blue">
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
      
      <footer className="mt-20 py-8 px-6 text-center text-brand-blue/40 text-sm border-t border-brand-blue/5">
        <p>© {new Date().getFullYear()} Ali Fuentes Diaz. Graphic Designer.</p>
      </footer>
    </div>
  );
};