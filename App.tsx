import React, { useState } from 'react';
import { Header } from './components/Header';
import { AIChat } from './components/AIChat';
import { HomePage } from './pages/HomePage';
import { ResumeModal } from './components/ResumeModal';

const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-brand-cream min-h-screen text-brand-blue font-sans selection:bg-brand-blue selection:text-brand-cream relative">
      <Header onOpenResume={() => setIsResumeOpen(true)} />
      
      <main className="relative z-10">
        <HomePage />
      </main>
      
      <AIChat />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;