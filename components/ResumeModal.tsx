import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Cpu } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in print:bg-white print:p-0">
      {/* Styles for print and animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media print {
          body * {
            visibility: hidden;
          }
          #print-resume-area, #print-resume-area * {
            visibility: visible;
          }
          #print-resume-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 20px;
            border: none;
            box-shadow: none;
            background: white !important;
            color: #111827 !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-brand-blue/20 shadow-2xl rounded-lg overflow-hidden animate-slide-up print:max-h-none print:shadow-none print:border-none print:rounded-none">
        
        {/* Modal Header Actions (No print) */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 border-b border-brand-blue/10 bg-brand-cream">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/aistudio/1697139374038_5961ba28.jpg" 
              alt="Ali Fuentes Diaz" 
              className="w-9 h-9 rounded-full object-cover border border-brand-blue/20 shadow-sm"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue block leading-none">Ali Fuentes Diaz</span>
              <span className="text-[10px] px-2 py-0.5 bg-brand-blue/10 text-brand-blue font-semibold uppercase tracking-wider rounded-full inline-block mt-1">Web Designer</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-brand-cream hover:bg-brand-blue/90 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Printer size={14} />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-brand-blue hover:bg-brand-blue/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-white print:overflow-visible print:p-0">
          <div id="print-resume-area" className="max-w-3xl mx-auto text-gray-900 font-sans">
            
            {/* Resume Header */}
            <div className="text-center pb-6 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 uppercase mb-2">
                Ali Fuentes Diaz
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide">
                Web Designer
              </p>
              
              {/* Contact Information Bar */}
              <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-gray-600 border-t border-b border-gray-200 py-3">
                <a href="tel:+4383892184" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                  <Phone size={14} className="text-gray-400" />
                  +438 389 2184
                </a>
                <a href="mailto:alifuentesdiaz@gmail.com" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                  <Mail size={14} className="text-gray-400" />
                  alifuentesdiaz@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-gray-400" />
                  Montreal, Quebec
                </span>
              </div>
            </div>

            {/* Resume Body */}
            <div className="space-y-8">
              
              {/* About Me Section */}
              <div>
                <h2 className="text-base font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 mb-3">
                  About Me
                </h2>
                <p className="text-sm leading-relaxed text-gray-700">
                  Creative designer with an understanding of color theory, typography, layout, and visual storytelling. Detail-oriented, organized, and adaptable, with the ability to manage multiple projects effectively. A collaborative team player with strong communication skills and a passion for digital design.
                </p>
              </div>

              {/* Work Experience Section */}
              <div>
                <h2 className="text-base font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 mb-4">
                  Work Experience
                </h2>
                
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                      <span className="text-sm font-semibold uppercase text-gray-500">ITM Instruments. | 2023- 2026</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">Junior Front End Designer</h3>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1.5">
                      <li>Design and maintain website pages, templates, and forms using HTML and CSS.</li>
                      <li>Support marketing campaigns by creating email layouts and graphics in Mailchimp.</li>
                      <li>Produce digital and print materials including product manuals, advertisements, and packaging assets.</li>
                      <li>Perform website quality checks to ensure consistent formatting, usability, and functionality.</li>
                      <li>Collaborate with marketing and development teams to maintain visual consistency across multiple company websites.</li>
                      <li>Apply design best practices while managing multiple projects and tight deadlines.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                      <span className="text-sm font-semibold uppercase text-gray-500">Funnel Cares | 2033</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">Graphic Designer</h3>
                    <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1.5">
                      <li>Crafted and optimized visual content for social media, Facebook Ads, landing pages, and digital marketing campaigns.</li>
                      <li>Managed the company’s social media accounts, creating content calendars, publishing posts, and maintaining a consistent brand presence across platforms.</li>
                      <li>Designed graphics, presentations, GIFs, and promotional materials to support marketing initiatives and audience engagement.</li>
                      <li>Established and maintained cohesive brand aesthetics across all digital communications.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-base font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 mb-3">
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-bold text-gray-900">Computer Graphics</span>
                      <span className="text-xs text-gray-500 uppercase font-semibold">2021-2022</span>
                    </div>
                    <p className="text-sm text-gray-600">Rosemount Technology Centre</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-bold text-gray-900">Communication Sciences</span>
                      <span className="text-xs text-gray-500 uppercase font-semibold">2015-2018</span>
                    </div>
                    <p className="text-sm text-gray-600">Universidad del Valle de México</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-base font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 mb-3">
                  Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    HTML/CSS
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Adobe Creative Suite
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Mailchimp
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    SQL Databases
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    Visual Studio Code
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    BeeFree
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
