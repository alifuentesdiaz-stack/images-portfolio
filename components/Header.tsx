import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const sectionId = href.startsWith('#') ? href.substring(1) : href;
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-brand-cream/95 backdrop-blur-md py-4 border-b border-brand-blue/10 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#')}
          className="text-2xl font-display font-bold text-brand-blue tracking-tighter hover:opacity-80 transition-opacity"
        >
          AF<span className="text-brand-blue/50">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`group relative text-sm font-medium transition-colors duration-300 uppercase tracking-widest ${
                  isActive ? 'text-brand-blue' : 'text-brand-blue/70 hover:text-brand-blue'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-blue transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          
          <button 
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-brand-cream text-xs font-bold uppercase tracking-widest hover:bg-brand-blue/90 transition-all duration-300 cursor-pointer"
          >
            <FileText size={14} />
            Resume
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-blue/10 p-6 flex flex-col space-y-6 shadow-xl h-screen md:h-auto">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-display font-bold text-brand-blue hover:text-brand-lightBlue"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="flex items-center justify-center gap-3 p-4 bg-brand-blue text-brand-cream font-display font-bold text-xl hover:bg-brand-blue/90 transition-all w-full text-center cursor-pointer"
          >
            <FileText size={20} />
            Resume / CV
          </button>
        </div>
      )}
    </header>
  );
};