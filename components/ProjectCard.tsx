import React from 'react';
import { Project } from '../types';
import { Plus } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div 
      className="group relative aspect-square border-r border-b border-brand-blue/10 p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden bg-brand-cream hover:bg-brand-blue"
      onClick={() => onClick(project)}
    >
      {/* Background Number (Decorative) */}
      <div className="absolute -bottom-2 -right-2 text-[6rem] md:text-[8rem] font-display font-black text-brand-blue/5 leading-none select-none group-hover:text-brand-cream/5 transition-colors duration-500">
        {displayIndex}
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-blue/40 group-hover:text-brand-cream/40 transition-colors duration-500">
            {displayIndex}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-blue leading-tight group-hover:text-brand-cream transition-colors duration-500">
          {project.title}
        </h3>
      </div>

      <div className="relative z-10 flex items-center gap-3">
        <div className="h-[1px] w-6 bg-brand-blue/20 group-hover:w-12 group-hover:bg-brand-cream/40 transition-all duration-500"></div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue/40 group-hover:text-brand-cream transition-colors duration-500">
          View Project
        </span>
      </div>

      {/* Hover Reveal Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue group-hover:h-2 transition-all duration-300"></div>
    </div>
  );
};