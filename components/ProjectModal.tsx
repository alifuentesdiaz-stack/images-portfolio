import React from 'react';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4">
      <div 
        className="absolute inset-0 bg-brand-blue/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-brand-cream w-full md:max-w-6xl h-full md:h-[95vh] overflow-y-auto shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300 no-scrollbar md:rounded-lg">
        {/* Sticky Close Button */}
        <button 
          onClick={onClose}
          className="fixed md:absolute top-6 right-6 z-50 p-3 bg-brand-blue text-brand-cream hover:bg-brand-darkBlue transition-all rounded-full shadow-lg hover:rotate-90 duration-300"
        >
          <X size={24} />
        </button>

        {/* Content Container */}
        <div className="relative p-8 md:p-16 flex-1">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Main Description */}
            <div className="md:col-span-8">
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-blue mb-4">
                  {project.title}
                </h2>
                <div className="h-1 w-20 bg-brand-blue/20"></div>
              </div>

              <div className="prose prose-lg text-brand-blue/80 max-w-none leading-relaxed">
                <p className="mb-6">{project.fullDescription}</p>
              </div>

              {/* External Links Section */}
              {project.externalLinks && project.externalLinks.length > 0 && (
                <div className="mt-8 mb-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-blue/60 mb-4">Click to see the project</p>
                  <div className="flex flex-wrap gap-4">
                    {project.externalLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-brand-blue/5 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-cream transition-all font-bold uppercase tracking-widest text-[10px]"
                      >
                        {link.label} <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Section */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-display font-bold text-brand-blue mb-8">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 gap-12">
                    {project.gallery.map((item, idx) => {
                      const url = typeof item === 'string' ? item : item.url;
                      const title = typeof item === 'string' ? null : item.title;
                      const links = typeof item === 'string' ? null : item.externalLinks;
                      
                      return (
                        <div key={idx} className="space-y-6">
                          {title && (
                            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-brand-blue/10 pb-2">
                              {title}
                            </h4>
                          )}
                          <div className="group relative overflow-hidden rounded-sm shadow-lg border border-brand-blue/10">
                            <img 
                              src={url} 
                              alt={`${project.title} gallery ${idx + 1}`} 
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          
                          {links && links.length > 0 && (
                            <div className="space-y-4">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/60">Click to see the project</p>
                              <div className="flex flex-wrap gap-3">
                                {links.map((link, lIdx) => (
                                  <a
                                    key={lIdx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 bg-brand-blue/5 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-cream transition-all font-bold uppercase tracking-widest text-[9px]"
                                  >
                                    {link.label} <ExternalLink size={10} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar Details */}
            <div className="md:col-span-4 space-y-10 md:border-l border-brand-blue/10 md:pl-10 h-fit sticky top-8">
              <div>
                <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4 opacity-60">
                  Software Programs
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-2 bg-white border border-brand-blue/10 text-sm text-brand-blue font-medium shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-brand-blue/10">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-brand-cream hover:bg-brand-lightBlue transition-all shadow-lg hover:shadow-xl font-bold uppercase tracking-widest text-sm">
                  Next Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};